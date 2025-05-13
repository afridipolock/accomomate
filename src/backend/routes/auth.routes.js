const express = require('express');
const router = express.Router();
const authController = require('../controller/auth.controller');
const { verifyToken } = require('../middleware/auth.middleware');

router.post('/user-registration', authController.userRegistration);
router.post('/user-login', authController.userLogin);
router.get("/check-username/:username", authController.checkUsername);
router.get('/get-profile', verifyToken, authController.getProfile);


module.exports = router;