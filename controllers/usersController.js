const User = require('../models/user');

module.exports.signinsignout = function(req, res) {
    res.render('signin-signout', { title: 'Signin Signout' });
}

// create session
module.exports.createSession = async function(req, res) {
    console.log("create session");
    if (req.user) {
    //   req.flash('success', 'Logged In');
        console.log("logged in successfully");
    } else {
    //   req.flash('error', 'Invalid Username/Password');
        console.log("invalid username/password");
    }
  
    return res.redirect('/dashboard');
}

// create user
module.exports.create = async function(req, res) {
    // check if password and confirm_password are same
    if (req.body.password != req.body.confirmPassword) {
        console.log('password and confirm_password are not same');
        return res.redirect('back');
    }

    // check if user already exists
    const user = await User.findOne({ email: req.body.email });

    // if user does not exist, create user
    if (!user) {
        // create user
        User.create(req.body)
        .then(user => {
            console.log('user created successfully');
            return res.redirect('/');
        })
        .catch(err => {
            console.log('error in creating user while signing up');
            return;
        });
    }
    else {
        console.log('user already exists');
        return res.redirect('back');
    }
}