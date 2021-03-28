CREATE DATABASE todoapp;
CREATE TABLE todo(
    todo_id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    slug VARCHAR(255),
    description VARCHAR(255)
)

