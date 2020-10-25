const faker = require('faker');
const bcrypt = require('bcrypt');
const { pgp, db } = require('./connect.js');

// positive comments
const comments = [
  'Such a good boy!',
  'Wow the best boy.',
  'Amazing!',
  'Perfect!',
  'The goodest boy.',
  'I would award you 1st place.',
  'The bestest boy!',
  'Goodest boy of all the good boys',
  'A wonderful pupper.',
  'So cute!',
  'A great doggo.',
  '10\'s across the board!',
  'Beautiful!',
  'Who\'s a good boy? This doggo!!',
  'A+++',
  'OMG 10/10',
  'Love!!',
  'This pupper deserves all the treats.',
  'A pretty doggo!',
  'Another good boy!'
];

// users: username, profile picture, and votes
const createUser = async () => {
  let userInfo = {
    username: faker.internet.userName().slice(0, 24),
    email: faker.internet.email(),
    password: await bcrypt.hash(faker.internet.password(), 10),
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
    image: `https://placedog.net/640/480?random=${Math.floor(Math.random() * 100)}`,
    caption: faker.lorem.paragraph(2),
    votes: faker.random.number(250)
  }
  return postInfo;
}

// comments_posts: timestamp, user_id, comment_id, post_id
// comment needs to be a time AFTER a given post was made
const createCommentOnPost = async () => {

  let commentOnPostInfo = {
    timestamp: null,
    user_id: faker.random.number({min: 1, max: 100}),
    comment_id: faker.random.number({min: 1, max: 20}),
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

  if (table === 'posts' || table === 'comments_posts') {
    data = data.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp))
  }

  let columns = new pgp.helpers.ColumnSet(Object.keys(data[0]), {table: table});

  let query = pgp.helpers.insert(data, columns);

  return query;
}

const seedComments = async () => {
  let query = 'INSERT INTO comments (text) SELECT * FROM UNNEST($1)';
  await db.none(query, [comments]);
}

const seedAll = async () => {
  let seedFunctions = {
    users: createUser,
    posts: createPost,
    comments_posts: createCommentOnPost,
    favorites: createFavorite
  }

  for (let table in seedFunctions) {
    let data = await createData(seedFunctions[table], table)
    await db.none(data);
  }
}

seedComments()
  .then(seedAll)
  .then(() => {
    console.log('Completed seeding database.');
  })
  .catch(err => {
    console.error(err);
  })
