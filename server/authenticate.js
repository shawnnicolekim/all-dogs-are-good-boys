const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const { db } = require('../database/connect.js');

const findUserByUsername = (username) => {
    let queryString = `
    SELECT
      *
    FROM
      users
    WHERE
      username=${username}
  `;
  db.one(queryString)
    .then(data => {
      console.log('data from findUser: ', data);
      return data
    })
    .catch(err => {
      done('Could not authenticate user. Wrong username or password.', err);
    })
}

const findUserById = (id) => {
  let queryString = `
  SELECT
    *
  FROM
    users
  WHERE
    id=${id}
`;
db.one(queryString)
  .then(data => {
    console.log('data from findUser: ', data);
    return data
  })
  .catch(err => {
    done('Could not authenticate user. Wrong username or password.', err);
  })
}

const authUser = (username, password, done) => {
  const user = findUserByUsername(username);

  if (!user) {
    return done(null, false);
  }

  if (bcrypt.compare(password, user.password)) {
    return done(null, user);
  } else {
    done(null, false);
  }
}

const initializePassport = (passport) => {
  passport.use(new LocalStrategy(authUser));
  passport.serializeUser((user, done) => {
    return done(null, user.id);
  });
  passport.deserializeUser((id, done) => {
    let user = findUserById(id);
    return done(null, user);
  })
}

const checkAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next;
  } else {
    res.redirect('/login')
  }
}

module.exports = {
  initializePassport,
  checkAuthenticated
}