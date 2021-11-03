import Head from 'next/head';
import styles from '../styles/login.module.css';

export default function Login() {
  return (
    <>
      LOGIN
      <form action="/api/login" method="POST">
        <label>
          Email
          <input id="email" name="email" type="text"></input>
        </label>

        <label>
          Password
          <input id="password" name="password" type="password"></input>
        </label>
        <button type="submit">Login</button>
      </form>
      SIGNUP
      <form action="/api/createuser" method="POST">
        <label>
          Name
          <input id="name" name="name" type="text"></input>
        </label>

        <label>
          Email
          <input id="email" name="email" type="text"></input>
        </label>

        <label>
          Password
          <input id="password" name="password" type="password"></input>
        </label>
        <button type="submit">Signup</button>
      </form>
    </>
  );
}
