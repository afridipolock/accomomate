const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middleware/auth.middleware');

router.get('/dashboard', verifyToken, (req, res) => {
    res.json({ message: `Welcome to dashboard,${req.user.username}` })
})

module.exports = router;