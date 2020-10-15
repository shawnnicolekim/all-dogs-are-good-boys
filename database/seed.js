const faker = require('faker');
const { pgp, db } = require('./connect.js');

// users: username, profile picture, and votes
const createUser = async () => {
  let userInfo = {
    name: faker.internet.userName().slice(0, 19),
    votes: faker.random.number(250),
    imageUrl: faker.image.avatar()
  }
  return userInfo;
};

// posts: image, caption, votes, timestamp, and user_id
const createPost = async () => {
  let postInfo = {
    user_id: faker.random.number(100),
    createdAt: faker.date.past(10),
    imageUrl: faker.image.imageUrl(640, 480, 'dogs'),
    caption: faker.lorem.paragraph(3),
    votes: faker.random.number(250)
  }
  return postInfo;
}

// comments: comments
const createComment = async () => {
  let commentInfo = {
    text: faker.lorem.sentence()
  }
  return commentInfo
}

// comments_posts: timestamp, user_id, comment_id, post_id
// comment needs to be a time AFTER a given post was made
const createCommentOnPost = async () => {
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

  db.query(queryString)
    .then(res => {
      commentOnPostInfo.createdAt = res.rows[0].createdAt;
      return commentOnPostInfo;
    })
    .catch(err => {
      console.error(err);
    })
}

// favorites: user_id, post_id
const createFavorite = async () => {
  let favoriteInfo = {
    user_id: faker.random.number(100),
    post_id: faker.random.number(100)
  }

  return favoriteInfo;
}

// give any of the functions above to create 100 results
const createData = async (callback, table) => {
  let data = [];

  for (let i = 0; i < 100; i++) {
    data.push(await callback());
  }

  let columns = new pgp.helpers.ColumnSet(Object.keys(data[0]), {table});

  let query = pgp.helpers.insert(data, columns);

  return query;
}

const seedAll = async () => {
  var seedFunctions = {
    user: createUser,
    posts: createPost,
    comments: createComment,
    comments_posts: createCommentOnPost,
    favorites: createFavorite
  }

  for (var table in seedFunctions) {
    var data = await createData(seedFunctions[table], table)
    await db.none(data);
  }
}

seedAll()
  .then(() => {
    console.log('Completed seeding database.');
  })
  .catch(err => {
    console.error(err);
  })