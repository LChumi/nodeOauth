const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    if (!req.isAuthenticated()) {
        return res.redirect('/');
    }
    res.render('profile', { user: req.user });
});

module.exports = router;
