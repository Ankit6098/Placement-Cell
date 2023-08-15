const express = require('express');
const router = express.Router();

const adminController = require('../controllers/adminController');

// render admin dashboard
router.get('/', adminController.getAdmin);

// render admin login page
router.post('/create-admin', adminController.createAdmin);

// create jobs
router.post('/create-jobs', adminController.createJobs);

// assign interview
router.post('/assign-interview', adminController.assignInterview);

// get students detials
router.get('/getStudents/:id', adminController.getStudents);

// get jobs detials
router.get('/getCompanies/:id', adminController.getCompanies);

// delete job
router.get('/delete-job/:id', adminController.deleteJob)

// applied jobs notification
router.get('/reject-apllied-jobs-notification/:id', adminController.rejectAppliedJobNotification);

module.exports = router;