const mongoose = require('mongoose');

const interviewSchema = new mongoose.Schema({
    jobs: {
        type: String,
        required: true
    },
    student: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    time: {
        type: String,
    },
    interviewmode: {
        type: String,
    },
    status: {
        type: String,
        required: true
    },
    hidden: {
        type: String
    }
}, {
    timestamps: true,
});

const Interview = mongoose.model('Interview', interviewSchema);

module.exports = Interview;
