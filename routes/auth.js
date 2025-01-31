const express = require('express');
const passport = require('passport');

const { login, googleLogin } = require('../controller/login');
const router = express.Router();

router.post('/login', login);
router.get('/google', passport.authenticate('google', { scope: ['profile'] }));

router.get('/google/callback', 
    passport.authenticate('google', { failureRedirect: '/' }),
    (req, res) => {
        res.redirect('/api/profiles');
    });

router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});

module.exports = router;
