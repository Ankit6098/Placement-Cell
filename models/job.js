const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    companyImage: {
        type: String
    },
    companyName: {
        type: String
    },
    companylocation: {
        type: String
    },
    jobTitle: {
        type: String
    },
    salary: {
        type: String
    },
    skills: {
        type: String
    },
    experience: {
        type: String
    },
    companyDescription: {
        type: String
    },
    jobDescription: {
        type: String
    },
    email: {
        type: String
    },
    website: {
        type: String
    },
    applicantList: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
}, {
    timestamps: true,
});

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;
