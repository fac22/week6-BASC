import Head from 'next/head';
import LoginForm from '../components/Login';
import SignUpForm from '../components/SignUp';
import styles from '../styles/login.module.css';

export default function Login() {
  return (
    <>
      <LoginForm />
      <SignUpForm />
    </>
  );
}
