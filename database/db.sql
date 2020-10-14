DROP DATABASE IF EXISTS goodboys;

CREATE DATABASE goodboys;

\c goodboys;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(25) NOT NULL,
  votes INT NOT NULL DEFAULT 0,
  imageUrl VARCHAR(320) NOT NULL
);

CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  user_id INT NOT NULL REFERENCES users (id),
  createdAt TIMESTAMPTZ NOT NULL,
  imageUrl VARCHAR(320) NOT NULL,
  caption VARCHAR(320) NOT NULL,
  votes INT NOT NULL DEFAULT 0
);

CREATE TABLE comments (
  id SERIAL PRIMARY KEY,
  comment VARCHAR(320) UNIQUE NOT NULL
);

CREATE TABLE comments_posts (
  id SERIAL PRIMARY KEY,
  createdAt TIMESTAMPTZ NOT NULL,
  user_id INT NOT NULL REFERENCES users (id),
  comment_id INT NOT NULL REFERENCES comments (id),
  post_id INT NOT NULL REFERENCES posts (id)
);

CREATE TABLE favorites (
  id SERIAL PRIMARY KEY,
  user_id INT NOT NULL REFERENCES users (id),
  post_id INT NOT NULL REFERENCES posts (id)
);