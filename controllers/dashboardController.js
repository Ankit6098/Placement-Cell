const User = require("../models/user");
const Job = require("../models/job");

module.exports.dashboard = async function (req, res) {
  const users = await User.find();
  const jobs = await Job.find();
  res.render("Dashboard", { title: "Dashboard", users: users, jobs: jobs });
};