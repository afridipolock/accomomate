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
            process.env.JWT_SECRET, { expiresIn: '1h' }
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
            'SELECT id, username, firstname, lastname, email, phone, dob, usertype FROM users WHERE id = ?',
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