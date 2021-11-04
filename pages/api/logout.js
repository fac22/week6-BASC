import { deleteSession } from '../../db/model';
import Cookies from 'cookies';

export default function handler(req, res) {
  const cookies = new Cookies(req, res);
  if (!cookies.get('sid')) res.redirect('/');
  const sid = cookies.get('sid');
  deleteSession(sid).then(() => {
    cookies.set('sid');
    res.redirect('/');
  });
}
