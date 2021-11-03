import db from './connection';

const getUser = (email) => {
  const SELECT_USER = {
    text: 'SELECT id, name, email, password FROM users WHERE email=$1;',
    values: [email],
  };
  return db
    .query(SELECT_USER)
    .then((user) => user.rows[0])
    .catch((e) => console.log(e.stack));
};

const createUser = (name, email, password) => {
  const CREATE_USER = {
    text: 'INSERT INTO users (name, email, password) VALUES ($1, $2, $3);',
    values: [name, email, password],
  };
  return db
    .query(CREATE_USER)
    .then((user) => user.rows[0])
    .catch((e) => console.log(e.stack));
};

export { getUser, createUser };
