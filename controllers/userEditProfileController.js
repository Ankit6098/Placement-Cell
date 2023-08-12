const User = require('../models/user');

module.exports.userEditProfile = async function(req, res) {
    const user = await User.findOne(email = req.body.email)
    res.render('user-edit-profile', {
        title: 'User Profile',
        user: user
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
        user.save();
        console.log('User updated successfully');
        return res.redirect('/userEditProfile');
    } else {
        console.log('User not found');
        return res.redirect('back');
    }
};

// module.exports.userUpdateProfile = async function(req, res) {
//     const email = req.body.email;
//     console.log(email);
    
//     try {
//         const user = await User.findOneAndUpdate(
//             { email }, // Find user by email
//             {
//                 name: req.body.name,
//                 lastname: req.body.lastname,
//                 phone: req.body.phone,
//                 city: req.body.city,
//                 country: req.body.country,
//                 bio: req.body.bio,
//                 portfolio: req.body.portfolio,
//                 instagram: req.body.instagram,
//                 github: req.body.github,
//                 linkedin: req.body.linkedin,
//                 twitter: req.body.twitter
//             },
//             { new: true } // Return the updated user
//         );

//         if (user) {
//             console.log('User updated successfully');
//             return res.redirect('/userEditProfile');
//         } else {
//             console.log('User not found');
//             return res.redirect('back');
//         }
//     } catch (error) {
//         console.error(error);
//         return res.status(500).json({ message: 'Server error' });
//     }
// };
