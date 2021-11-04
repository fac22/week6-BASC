import { addToBasket } from '../../db/model';

export default function handler(req, res) {
  console.log(req.body);
  const { title, image, colour, size, price, quantity } = req.body;

  const data = {
    title,
    image,
    colour,
    size,
    price,
    quantity,
  };

  addToBasket(1, data).then(() => res.redirect('/'));
}
