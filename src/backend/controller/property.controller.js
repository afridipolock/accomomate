const db = require('../config/database')

exports.addProperty = async (req, res) => {
    const { id: ownerid } = req.user;
    const {
        adtitle, price, types, tenure, feature, beds, bath,
        description, shortdescription, address,
        house, road, street, area, district, post,
        images, floorplans
    } = req.body;


    // Validation
    if (!adtitle || !price || !types || !tenure || !feature || !beds || !bath || !description || !shortdescription || !address || !house || !road || !street || !area || !district || !post || !images?.length) {
        return res.status(400).json({ message: "All required fields must be filled." });
    }

    try {
        const conn = await db.getConnection();

        // Insert into properties table
        const [propertyResult] = await conn.query(
            `INSERT INTO properties (
              ownerid, adtitle, price, types, tenure, feature,
              beds, bath, description, shortdescription, address,
              house, road, street, area, district, post
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [
                ownerid, adtitle, price, types, tenure, feature,
                beds, bath, description, shortdescription, address,
                house, road, street, area, district, post
            ]
        );


        const propid = propertyResult.insertId;

        // Insert images into properties_image
        // Insert property images
        for (let i = 0; i < images.length; i++) {
            await conn.query(
                `INSERT INTO properties_image (propid, image, floorplan) VALUES (?, ?, NULL)`,
                [propid, images[i]]
            );
        }

        // Insert property floorplans
        if (floorplans && floorplans.length) {
            for (let i = 0; i < floorplans.length; i++) {
                await conn.query(
                    `INSERT INTO properties_image (propid, image, floorplan) VALUES (?, NULL, ?)`,
                    [propid, floorplans[i]]
                );
            }
        }


        res.status(200).json({ message: "Property added successfully" });
    } catch (err) {
        console.error("Add property error:", err);
        res.status(500).json({ message: "Server error" });
    }
};


exports.getProperties = async (req, res) => {
    try {
        const [rows] = await db.query(`
            SELECT 
              p.*, 
              u.firstname, u.lastname, u.phone, u.email,
              (SELECT image FROM properties_image WHERE propid = p.id AND image IS NOT NULL LIMIT 1) as mainImage
            FROM properties p
            JOIN users u ON p.ownerid = u.id
            ORDER BY p.created_at DESC
          `);


        res.status(200).json(rows);
    } catch (err) {
        console.error("Get properties error:", err);
        res.status(500).json({ message: "Failed to fetch properties." });
    }
};

exports.getPropertyById = async (req, res) => {
    const { id } = req.params;

    try {
        const [property] = await db.query(
            `SELECT p.*, u.firstname, u.lastname, u.phone, u.email
         FROM properties p
         JOIN users u ON p.ownerid = u.id
         WHERE p.id = ?`,
            [id]
        );

        if (property.length === 0) {
            return res.status(404).json({ message: "Property not found" });
        }

        // Optionally fetch images
        const [images] = await db.query(
            `SELECT image FROM properties_image WHERE propid = ? AND image IS NOT NULL`,
            [id]
        );

        property[0].images = images.map((img) => img.image);

        res.json(property[0]);
    } catch (err) {
        console.error("Get property by ID error:", err);
        res.status(500).json({ message: "Server error" });
    }
};
