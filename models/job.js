const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    image: {
        type: String,
    },
    company: {
        type: String,
    },
    title: {
        type: String,
        required: true,
    },
    location: {
        type: String,
    },
    description: {
        type: String,
    },
    salary: {
        type: String,
    },
    skills: {
        type: String,
    },
    email: {
        type: String,
    },
    website: {
        type: String,
    },
}, {
    timestamps: true,
});

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;
