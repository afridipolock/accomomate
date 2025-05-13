const express = require('express');
const router = express.Router();
const authController = require('../controller/auth.controller');
const { verifyToken } = require('../middleware/auth.middleware');

router.post('/user-registration', authController.userRegistration);
router.post('/user-login', authController.userLogin);
router.get("/check-username/:username", authController.checkUsername);
router.get('/get-profile', verifyToken, authController.getProfile);
router.put('/change-password', verifyToken, authController.changePassword);
router.post('/validate-password', verifyToken, authController.validateNewPassword);
router.put('/upload-profile-pic', verifyToken, authController.uploadProfilePicBase64);
router.get("/check-profile", verifyToken, authController.checkProfileCompletion);
router.put('/update-profile', verifyToken, authController.updateProfile);


module.exports = router;