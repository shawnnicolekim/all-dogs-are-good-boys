const pgp = require('pg-promise')();

const connection = 'postgresql://postgres@localhost:5432/goodboys';

const db = pgp(connection);

module.exports = { pgp, db };

