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

const createSesssion = (sid, data) => {
  const CREATE_SESSION = {
    text: 'INSERT INTO sessions (sid, data) VALUES ($1, $2) RETURNING sid',
    values: [sid, data],
  };
  return db
    .query(CREATE_SESSION)
    .then((session) => session.rows[0].sid)
    .catch((e) => console.log(e.stack));
};

const getSession = (sid) => {
  const SELECT_SESSION = {
    text: `SELECT data FROM sessions WHERE sid=$1;`,
    values: [sid],
  };
  return db
    .query(SELECT_SESSION)
    .then((session) => session.rows[0].data)
    .catch((e) => console.log(e.stack));
};

function deleteSession(sid) {
  const DELETE_SESSION = 'DELETE FROM sessions WHERE sid=$1';
  return db.query(DELETE_SESSION, [sid]);
}

const getAllProducts = () => {
  const SELECT_PRODUCTS = `SELECT * FROM products`;
  return db.query(SELECT_PRODUCTS).then((result) => result.rows);
};

const getAllProductsID = () => {
  const SELECT_PRODUCTS = `
      SELECT id FROM products
    `;
  return db.query(SELECT_PRODUCTS).then((result) => result.rows);
};

const getProduct = (id) => {
  const GET_PRODUCT = {
    text: `
      SELECT
        products.product_title AS title,
        products.product_image AS image,
        products.product_description AS description,
        products.product_price AS price,
        products.product_size AS size,
        products.product_colour AS colour,
        categories.category_name AS category
      FROM products
        JOIN categories
        ON products.category_id = categories.id
      WHERE products.id=$1`,
    values: [id],
  };
  return db
    .query(GET_PRODUCT)
    .then((product) => product.rows[0])
    .catch((e) => console.log(e.stack));
};

const addToBasket = (user_id, basket_object) => {
  const ADD_TOBASKET = {
    text: 'INSERT INTO basket (user_id, basket_object) VALUES ($1, $2)',
    values: [user_id, basket_object],
  };

  return db
    .query(ADD_TOBASKET)
    .then((product) => product.rows[0])
    .catch((e) => console.log(e.stack));
};

const getMyBasket = (user_id) => {
  const GET_FROMBASKET =
    'SELECT basket_object, id FROM basket WHERE user_id=$1';
  return db
    .query(GET_FROMBASKET, [user_id])
    .then((product) => product.rows)
    .catch((e) => console.log(e.stack));
};

export {
  getUser,
  createUser,
  createSesssion,
  getSession,
  deleteSession,
  getProduct,
  getAllProducts,
  getAllProductsID,
  addToBasket,
  getMyBasket,
};
