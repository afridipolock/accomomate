const express = require('express');
const router = express.Router();
const propertyController = require('../controller/property.controller')
const { verifyToken } = require('../middleware/auth.middleware');

router.post("/add-property", verifyToken, propertyController.addProperty);


module.exports = router;