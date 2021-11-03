import db from './connection';

const getUser = (email) => {
  const SELECT_USER = {
    text: `SELECT id, name, email, password FROM users WHERE email=$1;`,
    values: [email],
  };
  return db
    .query(SELECT_USER)
    .then((user) => user.rows[0])
    .catch((e) => console.log(e.stack));
};

const getAllProducts = () => {
  const SELECT_PRODUCTS = `
      SELECT * FROM products
    `;
  return db.query(SELECT_PRODUCTS).then((result) => result.rows);
};

export { getUser, getAllProducts };
