const bcrypt = require('bcrypt');
const { db } = require('../database/connect.js');

const findUserByUsername = (username, done) => {
  const queryString = `
    SELECT
      *
    FROM
      users
    WHERE
      username='${username}'
  `;
  return db.one(queryString)
    .then((data) => data)
    .catch((err) => {
      done(err, false);
    });
};

const authUser = async (username, password, done) => {
  // finds user
  const user = await findUserByUsername(username, done);

  // checks if there was a user found by that username
  if (!user) {
    console.log('No user found with that username!');
    return done(true, false);
  }

  const pwMatch = await bcrypt.compare(password, user.password);

  if (pwMatch) {
    console.log('Password matches!');
    // if password is correct, return user from database
    return done(null, user);
  }
  console.log('Password doesn\'t match!');
  // if password is incorrect, return false
  return done(true, false);
};

module.exports = {
  authUser,
};
