const { Pool } = require('pg');

const pool = new Pool({
  user: 'root',
  password: 'Rootuser1!',
  host: 'localhost',
  port: 3000,
  database: 'goodboys'
});

module.exports = pool;

