import { all } from '../../db/model';
import { verifyUser } from '../../db/auth';

export default function handler(req, res) {
  const { email, password } = req.body;
  verifyUser(email, password).then(() => res.redirect('/success'));
}
