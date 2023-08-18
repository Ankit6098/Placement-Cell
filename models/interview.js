const mongoose = require('mongoose');

const date = new Date();
const ampm = date.getHours() >= 12 ? 'pm' : 'am';
const currentTime = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + " " + ampm;
const currentDate = date.getDate() + " " + getMonth(date.getMonth()) + " " + date.getFullYear();

function getMonth(monthNumber) {
    const monthsArr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return monthsArr[monthNumber];
}

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
    date: {
        type: String,
        default: currentDate,
    },
    time: {
        type: String,
        default: currentTime
    },
    interviewMode: {
        type: String,
        default: "Online",
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
    accepted: {
        type: Boolean,
        default: false,
    },
}, {
    timestamps: true,
});

const Interview = mongoose.model('Interview', interviewSchema);

module.exports = Interview;
