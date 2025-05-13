const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middleware/auth.middleware');

router.get('/view-profile', verifyToken, (req, res) => {
    res.json({ message: `Welcome to profile,${req.user.username}` })
})

module.exports = router;