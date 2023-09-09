const express = require('express');
const router = express.Router();
const checkAdmin = require('../config/isAdmin')

const adminController = require('../controllers/adminController');
// const { isAdmin } = require('../config/isAdmin');

// render admin dashboard
router.get('/', checkAdmin.isAdmin, adminController.getAdmin);

// render admin login page
router.post('/create-admin', adminController.createAdmin);

// destroy session and logout
router.get('/destroy-session', adminController.destroySession);

// create jobs
router.post('/create-jobs', adminController.createJobs);

// assign interview
router.post('/assign-interview/:id', adminController.assignInterview);

// get students detials
router.get('/getStudents/:id', adminController.getStudents);

// get jobs detials
router.get('/getCompanies/:id', adminController.getCompanies);

// delete job
router.get('/delete-job/:id', adminController.deleteJob);

// accept jobs notification
router.get('/accept-apllied-jobs-notification/:id', adminController.acceptAppliedJobNotification);

// reject jobs notification
router.get('/reject-apllied-jobs-notification/:id', adminController.rejectAppliedJobNotification);

module.exports = router;