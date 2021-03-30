CREATE DATABASE todoapp;
CREATE TABLE todo(
    todo_id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    slug VARCHAR(255),
    description VARCHAR(255)
)

CREATE TABLE Users(
  id SERIAL PRIMARY KEY,
    email VARCHAR(255),
    name VARCHAR(255),
    password VARCHAR(255)
)

CREATE TABLE TodoItems(
  id SERIAL PRIMARY KEY,
    text VARCHAR(255),
    todo_id VARCHAR(255),
)


