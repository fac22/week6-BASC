import { addToBasket, getSession } from '../../db/model';
import Cookies from 'cookies';

export default async function handler(req, res, props) {
  const cookies = new Cookies(req, res);
  if (!cookies.get('sid')) res.redirect('/');
  const sid = cookies.get('sid');
  const data = await getSession(sid);

  const { title, image, colour, size, price, quantity } = req.body;

  const items = {
    title,
    image,
    colour,
    size,
    price,
    quantity,
  };

  addToBasket(data.id, items).then(() => res.redirect('/'));
}
