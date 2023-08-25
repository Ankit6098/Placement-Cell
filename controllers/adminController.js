const User = require('../models/user');
const Job = require('../models/job');
const Interview = require('../models/interview');

// render admin dashboard
module.exports.getAdmin = async function(req, res) {
    const students = await User.find()
    const jobs = await Job.find()
    const interviews = await Interview.find()
    return res.render('adminDashboard', {
        title: "Admin Dashboard",
        students: students,
        jobs: jobs,
        interviews: interviews
    });
}

// render admin login page
module.exports.createAdmin = function(req, res) {
    if (req.body.username == "admin" && req.body.password == "admin") {
        console.log("admin logged in successfully");
        return res.redirect('/admin');
    } else {
        console.log("invalid username/password");
        return res.redirect('back');
    }
}

// create jobs
module.exports.createJobs = async function(req, res) {
    const job = await Job.create(req.body)
    if (job) {
        console.log("job created successfully");
        if (req.xhr) {
            return res.json(200, {
              data: {
                job: job,
              },
              message: "Job created successfully!",
            });
        }   
        return res.redirect('back');
    } else {
        console.log("error in creating job");
        return res.redirect('back');
    }
}

// assign interview
module.exports.assignInterview = async function(req, res) {
    const interview = await Interview.findById(req.params.id);
    if (interview) {
        console.log("interview found");
        interview.date = req.body.date;
        interview.time = req.body.time;
        interview.interviewMode = req.body.interviewMode;
        interview.interviewStatus = req.body.interviewStatus;
        interview.accepted = true;
        await interview.save();
        if (req.xhr) {
            return res.json(200, {
              data: {
                interview: interview,
              },
              message: "Interview Assign successfully!",
            });
        }
        console.log("interview assigned successfully");
        return res.redirect('back');
    } else {
        console.log("error in assigning interview");
        return res.redirect('back');
    }
}

// get students detials
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

// get jobs detials
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

// delete jobs
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

// accept applied jobs notifications
module.exports.acceptAppliedJobNotification = async function(req, res) {
    const id = req.params.id;
    try {
        const interview = await Interview.findById(id);
        if (interview) {
            interview.appliedStatus = "Accepted";
            await interview.save();
            return res.redirect("back")
        } else {
            return res.redirect("back")
        }
    } catch(err) {
        console.log(err);
        return res.redirect("back")
    }
}

// reject applied jobs notifications
module.exports.rejectAppliedJobNotification = async function(req, res) {
    const id = req.params.id;
    try {
        const interview = await Interview.findById(id);
        if (interview) {
            interview.appliedStatus = "Rejected";
            await interview.save();
            return res.redirect("back")
        } else {
            return res.redirect("back")
        }
    } catch(err) {
        console.log(err);
        return res.redirect("back")
    }
}