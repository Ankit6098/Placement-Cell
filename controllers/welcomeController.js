module.exports.welcome = function(req, res) {
    res.render('welcome', { title: 'Placement Adda', isAdmin: req.session.isAdmin || false, });
}