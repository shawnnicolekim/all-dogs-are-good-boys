const pgp = require('pg-promise')();

const connection = 'postgresql://postgres:the123pw@localhost:3000/goodboys';

const db = pgp(connection);

module.exports = { pgp, db };

