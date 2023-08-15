const mongoose = require('mongoose');

const interviewSchema = new mongoose.Schema({
    job_id: {
        type: String,
    },
    student_id: {
        type: String,
    },
    appliedStatus: {
        type: String,
        default: "Pending",
    },
    interviewStatus: {
        type: String,
        default: "Pending",
    },
    companyImage: {
        type: String,
    },
    companyName: {
        type: String,
    },
    companyLocation: {
        type: String,
    },
    companyEmail: {
        type: String,
    },
    companyWebsite: {
        type: String,
    },
    jobTitle: {
        type: String,
    },
    jobSalary: {
        type: String,
    },
    jobSkills: {
        type: String,
    },
    jobDescription: {
        type: String,
    },
    studentName: {
        type: String,
    },
    studentImage: {
        type: String,
    },
    studentLastname: {
        type: String,
    },
    studentLocation: {
        type: String,
    },
    studentEmail: {
        type: String,
    },
    studentPhone: {
        type: String,
    },
}, {
    timestamps: true,
});

const Interview = mongoose.model('Interview', interviewSchema);

module.exports = Interview;
