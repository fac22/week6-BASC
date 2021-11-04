import { addToBasket } from '../../db/model';

export default function handler(req, res) {
  const { title, image, colour, size, price, quantity } = req.body;

  const items = {
    title,
    image,
    colour,
    size,
    price,
    quantity,
  };

  addToBasket(1, items).then(() => res.redirect('/'));
}
