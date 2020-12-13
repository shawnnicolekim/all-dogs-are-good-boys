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
      username='${username}'
  `;
  return db.one(queryString)
    .then(data => {
      return data;
    })
    .catch(err => {
      done('Could not authenticate user. Wrong username or password.', err);
    })
}

const findUserById = (id, callback) => {
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
    return data
  })
  .catch(err => {
    callback(err, user);
  })
}

const authUser = async (username, password, done) => {
  // finds user
  let user = await findUserByUsername(username);

      // checks if there was a user found by that username
      if (!user) {
        console.log('No user found with that username!');
        return done(null, false);
      }

    let pwMatch = await bcrypt.compare(password, user.password);

      if (pwMatch) {
        console.log('Password matches!');
        // if password is correct, return user from database
        return done(null, user);
      } else {
        console.log('Password doesn\'t match!');
        // if password is incorrect, return false

        return done(null, false);
      }

}

const initializePassport = (passport) => {
  passport.use(new LocalStrategy(authUser));
  passport.serializeUser((user, done) => {
    return done(null, user.id);
  });
  passport.deserializeUser((id, done) => {
    let user = findUserById(id, (err, user) => {
      done(err, user);
    });
  })
}

const checkAuthenticated = (req, res) => {
  if (req.isAuthenticated()) {
    console.log('Redirecting to correct page.');
    return true;
  }
  console.log('Redirecting to login page.');
  return false;
}

module.exports = {
  initializePassport,
  checkAuthenticated
}