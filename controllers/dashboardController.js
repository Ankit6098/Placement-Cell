const User = require("../models/user");
const Job = require("../models/job");
const Interview = require("../models/interview");

// render dashboard
module.exports.dashboard = async function (req, res) {
  const users = await User.find();
  const jobs = await Job.find();
  const interviews = await Interview.find();
  res.render("Dashboard", { 
    title: "Dashboard", 
    isAdmin: req.session.isAdmin || false,
    users: users,
    jobs: jobs,
    interviews: interviews
  });
};

// get jobs detials
module.exports.getJobs = async function (req, res) {
  const id = req.params.id;
  try {
    const jobs = await Job.findById(id);
    return res.json(200, {
      data: {
        jobs: jobs,
      },
      message: "Job details fetched successfully",
    });
  } catch (err) {
    console.log(err);
    return res.json(500, {
      message: "Internal Server Error",
    });
  }
};

// apply jobs
module.exports.applyJobs = async function (req, res) {
  const jobid = req.params.id;
  const job = await Job.findById(jobid);

  let companyImage;
  if (job.image == "") {
    companyImage = "https://static.displate.com/857x1200/displate/2022-04-15/7422bfe15b3ea7b5933dffd896e9c7f9_46003a1b7353dc7b5a02949bd074432a.jpg"
  } else {
    companyImage = job.image;
  }

  const interview = await Interview.create({
      job_id: req.params.id,
      student_id: req.user.id,
      companyImage: job.companyImage,
      companyName: job.companyName,
      companyLocation: job.companylocation,
      companyEmail: job.email,
      companyWebsite: job.website,
      jobTitle: job.jobTitle,
      jobSalary: job.salary,
      jobSkills: job.skills,
      jobDescription: job.jobDescription,
      studentName: req.user.name,
      studentImage: req.user.avatar,
      studentLastname: req.user.lastname,
      studentLocation: req.user.location,
      studentEmail: req.user.email,
      studentPhone: req.user.phone,
    });
    if (interview) {
      job.applicantList.push(req.user.id);
      await job.save();
      req.flash('success', 'Applied successfully');
      const user = await User.findById(req.user.id);
      if (user) {
        user.appliedJobs.push(interview._id);
        await user.save();
      } else {
        console.log("Error in applying");
        req.flsh('info', 'Error in Applying')
        return res.redirect('/dashboard');
      }
      return res.redirect('/dashboard');
    } else {
      req.flash('error', 'Error in applying');
      return res.redirect('/dashboard');
    }
}