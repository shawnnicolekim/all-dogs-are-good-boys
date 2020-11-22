const pgp = require('pg-promise')();

const connection = 'postgresql://postgres@localhost:5432/goodboys';

const db = pgp(connection);

db.connect()
  .catch((err) => {
    console.log('Could not connect database: ', err);
  })

module.exports = { pgp, db };

