import { hashPassword, checkSignUp } from '../../db/auth';

export default function handler(req, res) {
  const { name, email, password } = req.body;
  checkSignUp(email, password, name)
    .then(hashPassword(name, email, password))
    .then(() => res.redirect('/'));
}
