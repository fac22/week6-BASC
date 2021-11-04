import { verifyUser, saveSession, COOKIE_OPTIONS, keys } from '../../db/auth';

import Cookies from 'cookies';

export default function handler(req, res) {
  const cookies = new Cookies(req, res, { keys: keys });
  const { email, password } = req.body;
  verifyUser(email, password)
    .then((user) => saveSession(user))
    .then((sid) => cookies.set('sid', sid, COOKIE_OPTIONS))
    .then(() => res.redirect('/success'));
}
