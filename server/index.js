const express = require('express');
const app = express();
const { db } = require('../database/connect.js');

app.use(express.json());

// GET the 10 most recent posts
// DONE
app.get('/', (req, res) => {
  let query = 'SELECT * FROM posts ORDER BY timestamp DESC LIMIT 10';
  db.many(query)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      console.error('Could not get posts from database');
    })
})

// POSTS a new post
// IN PROGRESS
app.post('/post', (req, res) => {
  let query = `INSERT INTO posts(user_id, timestamp, image, caption) VALUES(${req.body.userid}, ${new Date()}, ${req.body.image}, ${req.body.caption})`;
  db.none(query)
})

// GET all comments of a specific post
// IN PROGRESS
app.get('/comments/:postid', (req, res) => {
  var postid = req.params.postid;

  var query = `SELECT * FROM comments_posts WHERE post_id=${postid} ORDER BY timestamp DESC LIMIT 10`;

  db.many(query)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      console.error('Could not get the comments of given post')
    })

/*
Using postid === '4', I get these 2 objects. How should I go about getting the correct username and comment strings? Do I need to iterate over the array and go through each user_id and comment_id?

From the user, I need username and profile pic.
From the comment, I just need text.

[
    {
        "id": 19,
        "timestamp": "2016-11-11T14:54:36.259Z",
        "user_id": 71,
        "comment_id": 2,
        "post_id": 4
    },
    {
        "id": 3,
        "timestamp": "2012-05-17T19:12:48.942Z",
        "user_id": 22,
        "comment_id": 17,
        "post_id": 4
    }
]
*/
})

app.listen(3000, () => {
  console.log('Listening on port 3000');
})