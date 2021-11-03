BEGIN;

DROP TABLE IF EXISTS users, sessions, products, orders, categories CASCADE;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL
);

CREATE TABLE sessions (
   sid TEXT PRIMARY KEY,
   data JSON NOT NULL
);

CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    category_name VARCHAR(100) NOT NULL
);

CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    product_title VARCHAR(100) NOT NULL,
    product_image TEXT NOT NULL,
    product_description TEXT NOT NULL,
    product_price DECIMAL(10, 2) NOT NULL,
    product_size VARCHAR(100) NOT NULL,
    product_colour VARCHAR(100) NOT NULL,
    category_id INTEGER REFERENCES categories(id)
);

CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    order_object JSON NOT NULL,
    ordered_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);


INSERT INTO users (email, name, password) VALUES
(
  'cushion@gmail.com',
  'Test Testington',
  '$2a$10$vwhmLeePYHh6ayoIt42wKuelQ/JaQClYWYsFjr0V25qLLBowiZ.x.'
);

INSERT INTO categories (category_name) VALUES
('Cushion'), ('Pillow'), ('Jam'), ('Fidget Spinner');

INSERT INTO products (product_title, product_image, product_description, product_price, product_size, product_colour, category_id ) VALUES
('Comfy Field Cushion', '/image/cushion.png', 'This cushion is amazing, blablabla, can wash it at 40°C. Wonderful design, totally some real people’s photos', 140.99, 'Normal', 'blue', 1 ),
('Cozy Tree Cushion', '/image/magentoimage_nklqoykouyn4jfjh.png', 'This cushion is really sustainable, can wash it at 60°C. Wonderful design', 200, 'Normal', 'green', 1 );


COMMIT;