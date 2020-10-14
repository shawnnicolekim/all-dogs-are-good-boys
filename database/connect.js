const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  password: 'the123pw',
  host: 'localhost',
  port: 3000,
  database: 'goodboys'
});

module.exports = pool;

