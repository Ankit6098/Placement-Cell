const express = require('express');
const router = express.Router();

const welcomeController = require('../controllers/welcomeController');
const usersController = require('../controllers/usersController');
const dashboardController = require('../controllers/dashboardController');
const adminController = require('../controllers/adminController');
const userEditProfileController = require('../controllers/userEditProfileController');

router.get('/', welcomeController.welcome);
router.get('/authentication', usersController.signinsignout);
router.use('/admin', require('./admin'));
router.use('/user' , require('./signin-signout'));
router.use('/dashboard' , require('./dashboard'));
router.get('/userEditProfile', userEditProfileController.userEditProfile);
router.post('/userUpdateProfile', userEditProfileController.userUpdateProfile);

module.exports = router;