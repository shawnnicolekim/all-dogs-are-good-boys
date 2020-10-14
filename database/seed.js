const pgp = require('pg-promise')({ capSQL: true });
const faker = require('faker');
const pool = require('connect.js');

// users: username, profile picture, and votes
const createUser = () => {
  let userInfo = {
    name: faker.internet.userName(5..25),
    votes: faker.random.number(250),
    imageUrl: faker.image.avatar()
  }
  return userInfo;
};

// posts: image, caption, votes, timestamp, and user_id
const createPost = () => {
  let postInfo = {
    user_id: faker.random.number(100),
    createdAt: faker.date.past(10),
    imageUrl = faker.image.imageUrl(640, 480, 'dog'),
    caption = faker.lorem.paragraph(3),
    votes = faker.random.number(250)
  }
  return postInfo;
}

// comments: comments
const createComment = () => {
  let commentInfo = {
    text: faker.lorem.sentence()
  }
  return commentInfo
}

// comments_posts: timestamp, user_id, comment_id, post_id
// comment needs to be a time AFTER a given post was made
const createCommentOnPost = () => {
  // query a random post
  // make timestamp any time after the post timestamp
  // make post_id the id of queried post
  // create random number for comment
  // user_id can be random

  let randomPostId = Math.floor(Math.random() * 100);

  let commentOnPostInfo = {
    createdAt: null,
    user_id: faker.random.number(100),
    comment_id: faker.random.number(100),
    post_id: randomPostId
  }

  let queryString = `SELECT createdAt FROM posts WHERE id=${randomPostId}`;

  pool.query(queryString)
    .then(res => {
      commentOnPostInfo.createdAt = res.rows[0].createdAt;
      return commentOnPostInfo;
    })
    .catch(err => {
      console.error(err);
    })
}

// favorites: user_id, post_id
const createFavorite = () => {
  let favoriteInfo = {
    user_id: faker.random.number(100),
    post_id: faker.random.number(100)
  }

  return favoriteInfo;
}

// give any of the functions above to create 100 results
const createData = async (callback) => {
  let data = [];

  for (let i = 0; i < 100; i++) {
    // * QUESTION: should I make all the callbacks async too? And then use await on this callback invocation?
    data.push(callback());
  }

  let columns = Object.keys(data[0]);

  return pgp.helpers.insert(data, columns);
}

const seedAll = async () => {
  createData(createUser).
  // don't need to use .then if I'm using async/await
    .then(res => {
      await pool.none(res) // can I await this?
      return seed100(createPost)
    })
}