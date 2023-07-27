const passport = require('passport');
const githubStrategy = require('passport-github2').Strategy;
const crypto = require('crypto');
const User = require('../models/user');
require('dotenv').config();

// tell passport to use a new strategy for github login
passport.use(new githubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: process.env.GITHUB_CALLBACK_URL
},
    async function (accessToken, refreshToken, profile, done) {
        const user = await User.findOne({ email: profile.emails[0].value });
        if (user) {
            // if found, set this user as req.user
            return done(null, user);
        }
        else {
            // if not found, create the user and set it as req.user
            const newUser = await User.create({
                name: profile.displayName,
                email: profile.emails[0].value,
                password: crypto.randomBytes(20).toString('hex')
            });
            return done(null, newUser);
        }
    }
));

// serialize the user to decide which key is to be kept in the cookies
passport.serializeUser(function (user, done) {
    done(null, user.id);
});

// deserialize the user from the key in the cookies
passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
        if (err) { console.log('Error in finding user --> Passport'); return done(err); }
        return done(null, user);
    });
});