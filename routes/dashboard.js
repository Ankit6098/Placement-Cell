const express = require('express');
const router = express.Router();

const dashboardController = require('../controllers/dashboardController');
const passport = require('passport');

router.get('/', passport.checkAuthentication, dashboardController.dashboard);
router.get('/getJobs/:id', passport.checkAuthentication, dashboardController.getJobs);
router.post('/applyJobs/:id', passport.checkAuthentication, dashboardController.applyJobs);

module.exports = router;