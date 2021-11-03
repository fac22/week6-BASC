import { addToBasket } from '../../db/model';

export default function handler(req, res) {
  const {
    user_id,
    product_title,
    product_colour,
    product_size,
    product_price,
  } = req.body;

  const data = {
    product_title,
    product_colour,
    product_size,
    product_price,
  };

  addToBasket(user_id, data).then(() => res.redirect('/'));
}
