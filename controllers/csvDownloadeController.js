// csvDownloader controller
const user = require("../models/user");
const createCsvWriter = require("csv-writer").createObjectCsvWriter;

module.exports.csvDownlaod = async function (req, res) {
  try {
    const csvWriter = createCsvWriter({
      path: "Interview Data.csv",
      header: [
        { id: "name", title: "Name" },
        { id: "lastname", title: "Lastname" },
        { id: "email", title: "Email" },
        { id: "phone", title: "Phone" },
        { id: "companyName", title: "Company Name" },
        { id: "jobTitle", title: "Job Title" },
        { id: "companyLocation", title: "Company Location" },
        { id: "jobSalary", title: "Job Salary" },
        { id: "jobSkills", title: "Job Skills" },
        { id: "interviewMode", title: "Interview Mode" },
        { id: "jobDescription", title: "Job Description" },
        { id: "companyEmail", title: "Company Email" },
        { id: "companyWebsite", title: "Company Website" },
        { id: "interviewStatus", title: "Interview Status" },
      ],
    });

    const users = await user.find().populate("appliedJobs");
    const records = [];
    users.forEach((element) => {
      records.push({
        name: element.name,
        lastname: element.lastname,
        email: element.email,
        phone: element.phone,
        companyName: element.appliedJobs
          .map((job) => job.companyName)
          .join(", "),
        jobTitle: element.appliedJobs.map((job) => job.jobTitle).join(", "),
        companyLocation: element.appliedJobs
          .map((job) => job.companyLocation)
          .join(", "),
        jobSalary: element.appliedJobs.map((job) => job.jobSalary).join(", "),
        jobSkills: element.appliedJobs.map((job) => job.jobSkills).join(", "),
        interviewMode: element.appliedJobs
          .map((job) => job.interviewMode)
          .join(", "),
        jobDescription: element.appliedJobs
          .map((job) => job.jobDescription)
          .join(", "),
        companyEmail: element.appliedJobs
          .map((job) => job.companyEmail)
          .join(", "),
        companyWebsite: element.appliedJobs
          .map((job) => job.companyWebsite)
          .join(", "),
        interviewStatus: element.appliedJobs
          .map((job) => job.interviewStatus)
          .join(", "),
      });
    });

    await csvWriter.writeRecords(records);

    res.setHeader("Content-Type", "text/csv");
    res.setHeader(
      "Content-Disposition",
      "attachment; filename=Interview Data.csv"
    );
    res.download("Interview Data.csv");
  } catch (error) {
    console.log(error);
  }
};
