const crypto = require('crypto');
const bcrypt = require('bcryptjs');
const model = require('./model');

export async function verifyUser(email, hashedPassword) {
  const user = await model.getUser(email);
  console.log(user, 'USER DATA');
  const match = await bcrypt.compare(hashedPassword, user.password);
  if (!match) throw new Error('Password is incorrect ❌');
  delete user.password;
  return user;
}

export async function hashPassword(name, email, password) {
  const hashedPassword = await bcrypt.hash(password, 10);
  return model.createUser(name, email, hashedPassword);
}

export async function saveSession(user) {
  const sid = crypto.randomBytes(10).toString('base64');
  return model.createSesssion(sid, user);
}

export async function checkSignUp(email, password, name) {
  if (password.length < 5) throw new Error('Password must be 5+ characters ❌');
  if (email.length < 3) throw new Error('Email must be 3+ characters ❌');
  if (name.length < 3) throw new Error('Name must be 3+ characters ❌');
  return { email, password, name };
}

export const keys = ['uhfeslksdf9edkkdf'];

// export async function cookieCheck(req, res) {
//   const cookies = new Cookies(req, res);
//   if (!cookies.get('sid')) {
//     return {
//       props: {
//         session: false,
//       },
//     };
//   }

//   const sid = cookies.get('sid');
//   const data = await model.getSession(sid);
//   console.log(data);
//   return {
//     props: {
//       session: true,
//       data,
//       sid,
//     },
//   };
// }

export const COOKIE_OPTIONS = {
  httpOnly: true,
  maxAge: 1000 * 60000, // 60,000ms (60s)
  sameSite: 'lax',
  signed: true,
};
