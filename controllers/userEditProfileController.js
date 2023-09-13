const User = require('../models/user');

module.exports.userEditProfile = async function(req, res) {
    // const user = await User.findOne(email = req.body.email)
    // console.log(user);
    res.render('user-edit-profile', {
        title: 'User Profile',
        // user: user
    });
};

module.exports.userUpdateProfile = async function(req, res) {
    const user = await User.findOneAndUpdate(email = req.body.email)
    if (user) {
        user.name = req.body.name;
        user.lastname = req.body.lastname;
        user.phone = req.body.phone;
        user.city = req.body.city;
        user.country = req.body.country;
        user.bio = req.body.bio;
        user.portfolio = req.body.portfolio;
        user.instagram = req.body.instagram;
        user.github = req.body.github;
        user.linkedin = req.body.linkedin;
        user.twitter = req.body.twitter;
        console.log(user.bio);
        user.save();
        console.log('Profile Updated Successfully');
        req.flash('success', "Profile Updated Successfully")
        return res.redirect('/userEditProfile');
    } else {
        console.log('User not found');
        req.flash('alert', "Something Went Wrong")
        return res.redirect('back');
    }
};
