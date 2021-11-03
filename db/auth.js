const crypto = require('crypto');
const bcrypt = require('bcryptjs');
const model = require('./model');

async function verifyUser(email, hashedPassword) {
  const user = await model.getUser(email);
  // const match = hashedPassword === user.password ? true : false;
  const match = await bcrypt.compare(hashedPassword, user.password);
  if (!match) throw new Error('Password does not match ❌');
  delete user.password;
  return user;
}

async function hashPassword(name, email, password) {
  const hashedPassword = await bcrypt.hash(password, 10);
  return model.createUser(name, email, hashedPassword);
}

async function checkLogin(email, password, name) {
  if (password.length < 1) throw new Error('Please enter a password ❌');
  if (email.length < 1) throw new Error('Please enter an email ❌');
  return { email, password, name };
}

async function checkSignUp(email, password, name) {
  if (password === 'password') throw new Error('No ❌');
  if (password.length < 5)
    throw new Error('Password must be over 5 characters ❌');
  if (email.length < 3) throw new Error('Email must be over 3 characters ❌');
  if (name.length < 3) throw new Error('Name must be over 3 characters ❌');
  return { email, password, name };
}

export { verifyUser, hashPassword, checkLogin, checkSignUp };
