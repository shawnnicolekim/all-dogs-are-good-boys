DROP DATABASE IF EXISTS goodboys;

CREATE DATABASE goodboys;

\c goodboys;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(25) NOT NULL,
  email text NOT NULL,
  password text NOT NULL,
  votes INT NOT NULL DEFAULT 0,
  image TEXT NOT NULL
);

CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  user_id INT NOT NULL REFERENCES users (id),
  timestamp TIMESTAMPTZ NOT NULL,
  image TEXT NOT NULL,
  caption TEXT NOT NULL,
  votes INT NOT NULL DEFAULT 0
);

CREATE TABLE comments (
  id SERIAL PRIMARY KEY,
  text TEXT UNIQUE NOT NULL
);

CREATE TABLE comments_posts (
  id SERIAL PRIMARY KEY,
  timestamp TIMESTAMPTZ NOT NULL,
  user_id INT NOT NULL REFERENCES users (id),
  comment_id INT NOT NULL REFERENCES comments (id),
  post_id INT NOT NULL REFERENCES posts (id)
);

CREATE TABLE favorites (
  id SERIAL PRIMARY KEY,
  user_id INT NOT NULL REFERENCES users (id),
  post_id INT NOT NULL REFERENCES posts (id)
);