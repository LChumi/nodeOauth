const express = require('express');
const { login, googleLogin } = require('../controller/login');
const router = express.Router();

router.post('/login', login);
router.get('/google', googleLogin);

module.exports = router;
