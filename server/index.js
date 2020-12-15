const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const { db } = require('../database/connect.js');
const path = require('path');

const { authUser } = require('./authenticate.js');

app.use(express.static(path.join(__dirname, '/../client/dist')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/*
app.get('/authenticate', (req, res) => {
  if (!checkAuthenticated(req, res)) {
    res.status(302).send({authenticated: false});
  } else {
    res.status(200).send({authenticated: true});
  }
})
*/

app.post('/signup', async (req, res) => {
  let hashedPassword = await bcrypt.hash(req.body.password, 10);

  let queryString = `
    INSERT INTO
      users(username, email, password)
    VALUES
      ('${req.body.username}', '${req.body.email}', '${hashedPassword}')
  `;

  db.none(queryString)
    .then(() => {
      res.status(200).send({registered: true});
    })
    .catch(err => {
      console.error('Could not register this user: ', err);
      res.status(400).send({registered: false});
    })
})

app.post('/login', (req, res) => {
    // req.user contains all info, including bcrypted password

    authUser(req.body.username, req.body.password, (err, user) => {
      if (err) {
        res.status(401).send(false);
      }

      if (user) {
        res.status(200).send({ user });
      }
    })
  }
)

// Logout is handled on client side

// GET the 10 most recent posts
// DONE
app.get('/posts', (req, res) => {
  let queryString = `
    SELECT
      p.caption, p.id, p.image, p.timestamp, p.votes, u.username
    FROM
      posts p
    LEFT JOIN
      users u
    ON
      p.user_id=u.id
    ORDER BY
      p.timestamp DESC
    LIMIT
      10
  `;

  db.many(queryString)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      console.error('Could not get posts from database: ', err);
    })
})

// POSTS a new post
// Given a user_id, image, and caption
// Returns object with all post info (id, user_id, timestamp, image, caption, and votes)
// DONE
app.post('/post', (req, res) => {
  let queryString = `
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

  db.one(queryString)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      console.error('Could not create new post: ', err)
    })
})

// POST a comment
// Given the id's of post, user, and comment. Return timestamp of comment creation.
// DONE
app.post('/comment', (req, res) => {
  let queryString = `
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

    db.one(queryString)
      .then(data => {
        res.json(data)
      })
      .catch(err => {
        console.error('Could not insert new comment into database: ', err)
      })

})

// GET user info
// Given user_id in query or username in params (should I just have user_id in the params too?), returns object of all user info (name, # votes, image, # of posts, # of comments).
  // Might have to switch to using username instead, depending on frontend.
// DONE
app.get('/user/:username', (req, res) => {
  console.log('req in user profile: ', req);

  let user = req.params['username'];

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
// Given user_id in query (or username in params), returns array of objects containing id, user_id, timestamp, image, caption, and votes)
// DONE
app.get('/user/:username/posts', (req, res) => {
  let queryString = `SELECT * FROM posts WHERE user_id=${req.query['user_id']}`;

  db.many(queryString)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      console.error('Could not get posts of specific user: ', err)
    })
})

// POST a favorite
// Given user and post id, return nothing
// DONE
app.post('/favorite', (req, res) => {
  let queryString = `
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

  db.none(queryString)
    .then(res.end())
    .catch(err => {
      console.error('Could not favorite this post: ', err)
    })
})

// DELETE a favorite
// Given user and post id, return nothing.
// DONE
app.delete('/favorite', (req, res) => {
  let queryString = `
    DELETE FROM
      favorites
    WHERE
      user_id=${req.query['user_id']}
      AND
      post_id=${req.query['post_id']}
  `;

  db.none(queryString)
    .then(res.end())
    .catch(err => {
      console.error('Could not unfavorite this post: ', err)
    })
})

// PATCH add vote
// IN PROGRESS
app.patch('/:post_id/upvote', (req, res) => {
  let queryString = `UPDATE posts SET votes = votes + 1 WHERE id=${req.params['post_id']} RETURNING votes`;

  db.one(queryString)
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
  let queryString = `UPDATE posts SET votes = votes - 1 WHERE id=${req.params['post_id']} RETURNING votes`;

  db.one(queryString)
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
  let post_id = req.params['post_id'];
  let queryString = `
    SELECT
      cp.timestamp, c.text, u.name, u.image
    FROM
      comments_posts cp
    LEFT JOIN
      users u
    ON
      cp.user_id=u.id
    LEFT JOIN
      comments c
    ON
      cp.comment_id=c.id
    WHERE
      cp.post_id=${post_id}
    ORDER BY
      cp.timestamp DESC
    LIMIT
      10
  `;

  db.many(queryString)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      console.error('Could not get the comments of given post: ', err)
    })
})

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'), (err) => {
    if (err) {
      console.error('Could not load page: ', err);
    }
  })
})


app.listen(3000, () => {
  console.log('Listening on port 3000');
})

/*
Note:
axios URL is express params
axios params (get) is express query
axios data (post/patch/delete) is express body
*/