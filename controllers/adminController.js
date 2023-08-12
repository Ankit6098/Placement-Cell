const User = require('../models/user');
const Job = require('../models/job');
const Interview = require('../models/interview');

module.exports.getAdmin = async function(req, res) {
    const students = await User.find()
    const jobs = await Job.find()
    const interview = await Interview.find()
    return res.render('adminDashboard', {
        title: "Admin Dashboard",
        students: students,
        jobs: jobs,
        interview: interview
    });
}

module.exports.createAdmin = function(req, res) {
    if (req.body.username == "admin" && req.body.password == "admin") {
        console.log("admin logged in successfully");
        return res.redirect('/admin');
    } else {
        console.log("invalid username/password");
        return res.redirect('back');
    }
}

module.exports.createJobs = function(req, res) {
    Job.create(req.body)
    .then(function(job) {
        console.log(job);
        return res.redirect('back');
    })
    .catch(function(err) {
        console.log(err);
        return res.redirect('back');
    });
}

module.exports.assignInterview = function(req, res) {
    Interview.create(req.body)
    .then(function(interview) {
        console.log(interview);
        return res.redirect('back');
    })
    .catch(function(err) {
        console.log(err);
        return res.redirect('back');
    });
}

module.exports.getStudents = async function(req, res) {
    const id = req.params.id;
    try {
        const students = await User.findById(id);
        return res.json(200, {
            data: {
                students: students
            },
            message: "Student details fetched successfully"
        });
    } catch(err) {
        console.log(err);
        return res.json(500, {
            message: "Internal Server Error"
        });
    }
}

module.exports.getCompanies = async function(req, res) {
    const id = req.params.id;
    try {
        const jobs = await Job.findById(id);
        return res.json(200, {
            data: {
                jobs: jobs
            },
            message: "Company details fetched successfully"
        });
    } catch(err) {
        console.log(err);
        return res.json(500, {
            message: "Internal Server Error"
        });
    }
}

module.exports.deleteJob = async function(req, res) {
    const id = req.params.id;
    try {
        const job = await Job.findByIdAndDelete(id);
        return res.redirect("back")
    } catch(err) {
        console.log(err);
        return res.redirect("back")
    }
}