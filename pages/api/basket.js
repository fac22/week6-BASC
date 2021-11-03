import { addToBasket } from '../../db/model';

export default function handler(req, res) {
  console.log(req.body);
  const { title, colour, size, price } = req.body;

  const data = {
    title,
    colour,
    size,
    price,
  };

  addToBasket(1, data).then(() => res.redirect('/'));
}
