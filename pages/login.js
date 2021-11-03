import Head from 'next/head';
import styles from '../styles/login.module.css';

export default function Login() {
  return (
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
  );
}
