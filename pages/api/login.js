import {
  verifyUser,
  checkLogin,
  saveSession,
  COOKIE_OPTIONS,
} from '../../db/auth';

import Cookies from 'cookies';

export default function handler(req, res) {
  const cookies = new Cookies(req, res);
  const { email, password } = req.body;
  checkLogin(email, password)
    .then(verifyUser(email, password))
    .then((user) => saveSession(user))
    .then((sid) => cookies.set('sid', sid, COOKIE_OPTIONS))
    .then(() => res.redirect('/'));
}
