import { verifyUser, checkLogin } from '../../db/auth';

export default function handler(req, res) {
  const { email, password } = req.body;
  checkLogin(email, password)
    .then(verifyUser(email, password))
    .then(() => res.redirect('/success'));
}
