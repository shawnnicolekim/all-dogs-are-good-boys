const faker = require('faker');
const { pgp, db } = require('./connect.js');

// users: username, profile picture, and votes
const createUser = async () => {
  let userInfo = {
    name: faker.internet.userName().slice(0, 24),
    votes: faker.random.number(250),
    image: faker.internet.avatar()
  }
  return userInfo;
};

// posts: image, caption, votes, timestamp, and user_id
const createPost = async () => {
  let postInfo = {
    user_id: faker.random.number({min: 1, max: 100}),
    timestamp: faker.date.past(10),
    image: faker.image.imageUrl(640, 480, 'dogs'),
    caption: faker.lorem.paragraph(2),
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

  let commentOnPostInfo = {
    timestamp: null,
    user_id: faker.random.number({min: 1, max: 100}),
    comment_id: faker.random.number({min: 1, max: 100}),
    post_id: faker.random.number({min: 1, max: 100})
  }

  let queryString = `SELECT timestamp FROM posts WHERE id=${commentOnPostInfo['post_id']}`;

  let postTimeStamp = await db.query(queryString);

  commentOnPostInfo.timestamp = faker.date.between(postTimeStamp[0].timestamp, new Date());

  return commentOnPostInfo;
}

// favorites: user_id, post_id
const createFavorite = async () => {
  let favoriteInfo = {
    user_id: faker.random.number({min: 1, max: 100}),
    post_id: faker.random.number({min: 1, max: 100})
  }

  return favoriteInfo;
}

// give any of the functions above to create 100 results
const createData = async (callback, table) => {
  let data = [];

  for (let i = 0; i < 100; i++) {
    data.push(await callback());
  }

  let columns = new pgp.helpers.ColumnSet(Object.keys(data[0]), {table: table});

  let query = pgp.helpers.insert(data, columns);

  return query;
}

const seedAll = async () => {
  let seedFunctions = {
    users: createUser,
    posts: createPost,
    comments: createComment,
    comments_posts: createCommentOnPost,
    favorites: createFavorite
  }

  for (let table in seedFunctions) {
    let data = await createData(seedFunctions[table], table)
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