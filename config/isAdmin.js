// middleware to check if the user is admin
function isAdmin(req, res, next) {
  if (req.session.isAdmin) {
    next(); // user is an admin, proceed to the route
  } else {
    res.status(402).send("Access denied. You are not an admin.");
  }
}

module.exports = {
  isAdmin,
};
