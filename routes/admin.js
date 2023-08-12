const express = require('express');
const router = express.Router();

const adminController = require('../controllers/adminController');

router.get('/', adminController.getAdmin);
router.post('/create-admin', adminController.createAdmin);
router.post('/create-jobs', adminController.createJobs);
router.post('/assign-interview', adminController.assignInterview);
router.get('/getStudents/:id', adminController.getStudents);
router.get('/getCompanies/:id', adminController.getCompanies);
router.get('/delete-job/:id', adminController.deleteJob)

module.exports = router;