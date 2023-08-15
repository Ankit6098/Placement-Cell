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
  const studentid = req.user.id;
  const studentName = req.user.name;
  const studentImage = req.user.avatar;
  const studentLastname = req.user.lastname;
  const studentLocation = req.user.location;
  const studentEmail = req.user.email;
  const studentPhone = req.user.phone;
  
  const job = await Job.findById(jobid);
  let companyImage = "";
  if(companyImage == "") {
    companyImage = "https://static.displate.com/857x1200/displate/2022-04-15/7422bfe15b3ea7b5933dffd896e9c7f9_46003a1b7353dc7b5a02949bd074432a.jpg";
  } else {
    companyImage = job.image;
  }
  const companyName = job.company;
  const companyLocation = job.location;
  const companyEmail = job.email;
  const companyWebsite = job.website;
  const jobTitle = job.title;
  const jobSalary = job.salary;
  const jobSkills = job.skills;
  const jobDescription = job.description;

  Interview.create(
    {
      job_id: jobid,
      student_id: studentid,
      companyImage: companyImage,
      companyName: companyName,
      companyLocation: companyLocation,
      companyEmail: companyEmail,
      companyWebsite: companyWebsite,
      jobTitle: jobTitle,
      jobSalary: jobSalary,
      jobSkills: jobSkills,
      jobDescription: jobDescription,
      studentName: studentName,
      studentImage: studentImage,
      studentLastname: studentLastname,
      studentLocation: studentLocation,
      studentEmail: studentEmail,
      studentPhone: studentPhone,
    },
  )
  .then((interview) => {
    console.log("Interview created", interview);
    return res.redirect("back");
  })
  .catch((err) => {
    console.log("Error in creating interview", err);
    return res.redirect("back");
  });
}