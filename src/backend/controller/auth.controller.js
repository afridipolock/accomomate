const db = require('../config/database')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

exports.userRegistration = async (req, res) => {
    try {
        const {
            userType,
            firstName,
            lastName,
            userName,
            email,
            dob,
            phone,
            password
        } = req.body;

        const [exists] = await db.query('SELECT * FROM users WHERE username = ?', [userName]);
        if (exists.length > 0) return res.status(400).json({ message: 'Username already exists' });

        // Generate unique userId
        const prefix = userType === 'landlord' ? 'L' : 'R';
        const userId = `${prefix}${Date.now()}`;

        // Hash password
        const hashed = await bcrypt.hash(password, 10);

        // Insert into database
        await db.query(
            `INSERT INTO users (id, usertype, firstname, lastname, username, password, email, dob, phone)
             VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [userId, userType, firstName, lastName, userName, hashed, email, dob, phone]
        );

        res.status(201).json({
            message: 'User registration successful',
            userid: userId
        });
    } catch (err) {
        console.error('Registration Error: ', err);
        res.status(500).json({ message: 'Internal server error' });
    }
};

exports.checkUsername = async (req, res) => {
    const { username } = req.params;
    const [result] = await db.query('SELECT * FROM users WHERE username = ?', [username]);
    if (result.length > 0) {
        return res.status(200).json({ available: false });
    } else {
        return res.status(200).json({ available: true });
    }
};


exports.userLogin = async (req, res) => {
    try {
        const { username, password } = req.body;
        const [rows] = await db.query('SELECT * FROM users WHERE username = ?', [username])
        if (rows.length === 0) return res.status(404).json({ message: 'User not found' });

        const user = rows[0];
        const match = await bcrypt.compare(password, user.password);
        if (!match) return res.status(401).json({ message: 'Invalid Password' });

        const token = jwt.sign(
            {
                id: user.id,
                username: user.username,
                isowner: user.isowner,
                usetype: user.usertype
            },
            process.env.JWT_SECRET, { expiresIn: '8h' }
        );
        res.json({ message: 'Login Successful', token, user });
    } catch (error) {
        console.error('Login Error', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

exports.getProfile = async (req, res) => {
    try {
        const userId = req.user.id;

        const [rows] = await db.query(
            'SELECT id, username, firstname, lastname, usertype, dob, email, phone, gender, nid, address, status, profilepic FROM users WHERE id = ?',
            [userId]
        );


        if (rows.length === 0) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json(rows[0]);
    } catch (error) {
        console.error("Get Profile Error:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

exports.changePassword = async (req, res) => {
    try {
        const userId = req.user.id;
        const { oldPassword, newPassword } = req.body;

        if (!oldPassword || !newPassword) {
            return res.status(400).json({ message: "Old and new passwords are required" });
        }

        // 1. Get current password hash from DB
        const [rows] = await db.query('SELECT password FROM users WHERE id = ?', [userId]);
        if (rows.length === 0) {
            return res.status(404).json({ message: "User not found" });
        }

        const currentHashedPassword = rows[0].password;

        // 2. Compare old password with hashed one
        const match = await bcrypt.compare(oldPassword, currentHashedPassword);
        if (!match) {
            return res.status(401).json({ message: "Old password is incorrect" });
        }

        // 3. Check if new password is same as old one
        const samePassword = await bcrypt.compare(newPassword, currentHashedPassword);
        if (samePassword) {
            return res.status(400).json({ message: "New password must be different from old password" });
        }

        // 4. Hash new password and update
        const hashedNewPassword = await bcrypt.hash(newPassword, 10);
        await db.query('UPDATE users SET password = ? WHERE id = ?', [hashedNewPassword, userId]);

        return res.status(200).json({ message: "Password changed successfully" });
    } catch (error) {
        console.error("Change Password Error:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

exports.validateNewPassword = async (req, res) => {
    try {
        const userId = req.user.id;
        const { newPassword } = req.body;

        const [rows] = await db.query('SELECT password FROM users WHERE id = ?', [userId]);
        if (rows.length === 0) {
            return res.status(404).json({ message: "User not found" });
        }

        const isSame = await bcrypt.compare(newPassword, rows[0].password);
        return res.json({ isSame });
    } catch (error) {
        console.error("Validate Password Error:", error);
        res.status(500).json({ message: "Server error" });
    }
};

exports.uploadProfilePicBase64 = async (req, res) => {
    try {
        const userId = req.user.id;
        const { image } = req.body;

        if (!image) {
            return res.status(400).json({ message: "No image provided" });
        }

        await db.query("UPDATE users SET profilepic = ? WHERE id = ?", [image, userId]);

        res.status(200).json({ message: "Profile picture updated" });
        console.log("IMAGE LENGTH:", image?.length);
        console.log("USER ID:", req.user.id);
    } catch (error) {
        console.error("Base64 Upload Error:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};
