CREATE DATABASE profile-page;

CREATE TABLE profile(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR(255),
  level VARCHAR(255),
  experience VARCHAR(255)
);