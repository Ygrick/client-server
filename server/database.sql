CREATE DATABASE perntodo2;

CREATE TABLE todo(
  todo_id SERIAL PRIMARY KEY,
  description VARCHAR(255),
  admin VARCHAR(255)
);