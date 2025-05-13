const express = require('express');
const router = express.Router();
const authController = require('../controller/auth.controller');

router.post('/user-registration', authController.userRegistration);
router.post('/user-login', authController.userLogin);
router.get("/check-username/:username", authController.checkUsername);


module.exports = router;