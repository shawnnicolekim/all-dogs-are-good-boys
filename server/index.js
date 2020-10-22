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
      console.error('Could not get posts from database: ', err);
    })
})

// POSTS a new post
// expects a user_id, image, and caption within req.body
// DONE
app.post('/post', (req, res) => {
  let query = `
    INSERT INTO
      posts (
        user_id,
        timestamp,
        image,
        caption
      )
    VALUES (
      ${req.body['user_id']},
      '${JSON.stringify(new Date())}',
      '${req.body.image}',
      '${req.body.caption}'
    )
    RETURNING *
  `;

  db.one(query)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      console.error('Could not create new post: ', err)
    })
})

// POST a comment - body contains id's of post, user, and comment. Return timestamp of comment creation
// DONE
app.post('/comment', (req, res) => {
  let query = `
    INSERT INTO
      comments_posts (
        timestamp,
        user_id,
        comment_id,
        post_id
      )
    VALUES (
      '${JSON.stringify(new Date())}',
      ${req.body['user_id']},
      ${req.body['comment_id']},
      ${req.body['post_id']}
    )
    RETURNING
      timestamp
  `;

    db.one(query)
      .then(data => {
        res.json(data)
      })
      .catch(err => {
        console.error('Could not insert new comment into database: ', err)
      })

})

// GET user info
// Given user_id, returns object of all user info (name, # votes, image, # of posts, # of comments).
  // Might have to switch to using username instead, depending on frontend.
// DONE
app.get('/user/:user_id', (req, res) => {
  let user = req.params['user_id'];

  let postsQuery = `SELECT id FROM posts WHERE user_id=${user}`;
  let commentsQuery = `SELECT id FROM comments_posts WHERE user_id=${user}`;
  let votesQuery = `SELECT * FROM users WHERE id=${user}`;

  let userInfo;

  db.one(votesQuery)
    .then(data1 => {
      userInfo = data1;
      return db.many(postsQuery);
    })
    .then(data2 => {
      userInfo.posts = data2.length;
      return db.many(commentsQuery);
    })
    .then(data3 => {
      userInfo.comments = data3.length;
      res.json(userInfo);
    })
    .catch(err => {
      console.error('Could not get user profile info: ', err)
    })
})

// GET all posts of a specific user
// Given user_id in params, returns array of objects containing id, user_id, timestamp, image, caption, and votes)
// DONE
app.get('/user/:user_id/posts', (req, res) => {
  let query = `SELECT * FROM posts WHERE user_id=${req.params['user_id']}`;

  db.many(query)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      console.error('Could not get posts of specific user: ', err)
    })
})

// POST a favorite (req.body will contain user and post id)
// DONE
app.post('/favorite', (req, res) => {
  let query = `
    INSERT INTO
      favorites (
        user_id,
        post_id
      )
    VALUES (
      ${req.body['user_id']},
      ${req.body['post_id']}
    )
  `;

  db.none(query)
    .then(res.end())
    .catch(err => {
      console.error('Could not favorite this post: ', err)
    })
})

// DELETE a favorite (req.body will contain user and post id)
// DONE
app.delete('/favorite', (req, res) => {
  let query = `
    DELETE FROM
      favorites
    WHERE
      user_id=${req.body['user_id']}
      AND
      post_id=${req.body['post_id']}
  `;

  db.none(query)
    .then(res.end())
    .catch(err => {
      console.error('Could not unfavorite this post: ', err)
    })
})

// PATCH add vote
// IN PROGRESS
app.patch('/:post_id/upvote', (req, res) => {
  let query = `UPDATE posts SET votes = votes + 1 WHERE id=${req.params['post_id']} RETURNING votes`;

  db.one(query)
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      console.error('Could not upvote the post: ', err)
    })
})

// PATCH remove vote
// IN PROGRESS
app.patch('/:post_id/downvote', (req, res) => {
  let query = `UPDATE posts SET votes = votes - 1 WHERE id=${req.params['post_id']} RETURNING votes`;

  db.one(query)
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      console.error('Could not downvote the post: ', err)
    })
})

// GET all comments of a specific post
// IN PROGRESS
app.get('/comments/:post_id', (req, res) => {
  let post_id = req.params.post_id;
  let query = `SELECT * FROM comments_posts WHERE post_id=${post_id} ORDER BY timestamp DESC LIMIT 10`;

  db.many(query)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      console.error('Could not get the comments of given post: ', err)
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