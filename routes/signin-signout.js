const express = require('express');
const router = express.Router();

const usersController = require('../controllers/usersController');
const passport = require('passport');

router.post('/create-user', usersController.create);
router.post('/create-session', passport.authenticate(
    'local',
    { failureRedirect: '/' },
), usersController.createSession);


module.exports = router;