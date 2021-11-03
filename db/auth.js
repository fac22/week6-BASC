const crypto = require('crypto');
const bcrypt = require('bcryptjs');
const model = require('./model');

async function verifyUser(email, password) {
  const user = await model.getUser(email);
  const match = password === user.password;
  //   const match = await bcrypt.compare(password, user.password);
  if (!match) throw new Error('Password does not match ❌');
  delete user.password;
  return user;
}

export { verifyUser };
