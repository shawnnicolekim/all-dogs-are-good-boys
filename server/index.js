const express = require('express');
const app = express();
const { db } = require('../database/connect.js');

app.use(express.json());

app.listen(5432, () => {
  console.log('Listening on port 3000');
})