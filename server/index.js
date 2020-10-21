const express = require('express');
const app = express();
const { db } = require('../database/connect.js');

app.use(express.json());

// GET all posts
// gets the 10 most recent posts
app.get('/', (req, res) => {
  let queryString = 'SELECT * FROM posts ORDER BY timestamp DESC LIMIT 10';
  db.many(queryString)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      console.error('Could not get posts from database');
    })
})

// GET all comments of a specific post
app.get('comments/:postid', (req, res) => {
  console.log('req is :', req);

  var postId = req.query.postId;
  console.log('postId is: ', postId);

  var queryString = `SELECT * FROM comments ORDER BY timestamp DESC WHERE post_id=${postId} LIMIT 10`;


})

app.listen(3000, () => {
  console.log('Listening on port 3000');
})