BEGIN;

DROP TABLE IF EXISTS users, sessions, products, basket, categories CASCADE;

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

CREATE TABLE basket (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    basket_object JSON NOT NULL,
    added_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);


INSERT INTO users (email, name, password) VALUES
(
  'cushion@gmail.com',
  'Test Testington',
  '$2a$10$vwhmLeePYHh6ayoIt42wKuelQ/JaQClYWYsFjr0V25qLLBowiZ.x.'
);

INSERT INTO categories (category_name) VALUES
('Cushion'), ('Socks'), ('Jam'), ('Goblin');

-- INSERT INTO products (product_title, product_image, product_description, product_price, product_size, product_colour, category_id ) VALUES
-- ('Comfy Field Cushion', '/image/cushion.png', 'This cushion is amazing, blablabla, can wash it at 40°C. Wonderful design, totally some real people’s photos', 140.99, 'Normal', 'blue', 1 ),
-- ('Cozy Tree Cushion', '/image/magentoimage_nklqoykouyn4jfjh.png', 'This cushion is really sustainable, can wash it at 60°C. Wonderful design', 200, 'Normal', 'green', 1 ),
-- ();

INSERT INTO products (category_id, product_title, product_price, product_size, product_colour, product_description, product_image) VALUES
(1, 'Elephant Cushion', 59, 'Standard', 'green', 'Elegant, handwoven, 100% silk', '/image/cushion-elephants.png'),
(1, 'Ostrich Cushion', 69, 'Standard', 'yellow', 'Elegant, handwoven, 100% silk', '/image/cushion-ostrich.jpg'),
(1, 'Patchwork Cushion', 79, 'Standard', 'multi-colour', 'Elegant, handwoven, 100% silk', '/image/cushion-patchwork.jpg'),
(1, 'Tiger Cushion', 89, 'Standard', 'red', 'Elegant, handwoven, 100% silk', '/image/cushion-tiger.jpg'),
(2, 'Beer Motif Socks', 25, 'L', 'blue', 'The perfect fun present for the people you love!', '/image/sock-beer.png'),
(2, 'Cherry Motif Socks', 26, 'S', 'blue', 'The perfect fun present for the people you love!', '/image/sock-cherry.png'),
(2, 'Dog Motif Socks', 27, 'M', 'blue', 'The perfect fun present for the people you love!', '/image/sock-dog.png'),
(2, 'Mushroom Motif Socks', 28, 'M', 'blue', 'The perfect fun present for the people you love!', '/image/sock-mushroom.png'),
(3, 'Apricot Jam', 12.99, 'Mini', 'yellow', 'Delicious! Organic produce, tasty for everything.', '/image/jam-apricot.jpg'),
(3, 'Black Currant Jam', 13.99, 'Mini', 'red', 'Delicious! Organic produce, tasty for everything.', '/image/jam-currantbl.jpg'),
(3, 'Strawberry Jam', 14.99, 'Mini', 'red', 'Delicious! Organic produce, tasty for everything.', '/image/jam-strawberry.jpg'),
(3, 'Orange Marmalade', 15.99, 'Mini', 'yellow', 'Delicious! Organic produce, tasty for everything.', '/image/jam-orange.jpg'),
(4, 'Goblin', 30, 'Standard', 'green', 'This is the original fidget spinner', '/image/cushion.png');

COMMIT;