const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const { db } = require('../database/connect.js');

const initializePassport = (passport, findUser) => {
  const authUser = (username, password, done) => {
    const user = findUser(username);

    if (!user) {
      return done(null, false);
    }

    if (bcrypt.compare(password, user.password)) {
      return done(null, user);
    } else {
      done(null, false);
    }
  }

  passport.use(new LocalStrategy(authUser));
  passport.serializeUser((user, done) => {});
  passport.deserializeUser((user, done) => {})
}

module.exports = initializePassport;