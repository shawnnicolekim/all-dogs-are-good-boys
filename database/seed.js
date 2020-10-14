const faker = require('faker');
const pool = require('connect.js');

// users: username, profile picture, and votes
const randomUser = {
  name: faker.internet.userName(5..20),
  votes: faker.random.number(250),
  imageUrl: faker.image.avatar()
};

// posts: image, caption, votes, timestamp, and user_id
const randomPost = {
  // need user id after user is created
  createdAt: faker.date.past(10),
  imageUrl: faker.image.imageUrl(640, 480, 'dogs'),
  caption: faker.lorem.paragraph(3),
  votes: faker.random.number(250)
}

// comments: comments
const randomComment = {
  comment: faker.lorem.sentence()
}

// comments_posts: timestamp, user_id, comment_id, post_id
// comment needs to be a time AFTER a given post was made
const comment_post = {

}

// favorites: user_id, post_id