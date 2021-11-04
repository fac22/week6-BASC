import { deleteItemFromBasket } from '../../db/model';

export default function handler(req, res) {
  const { id } = req.body;
  deleteItemFromBasket(id);
  res.redirect('/basket');
}
