import Head from 'next/head';
import { parseComplete } from 'pg-protocol/dist/messages';
import styles from '../styles/login.module.css';

import { cookieCheck } from '../db/auth';

export async function getServerSideProps({ req, res }) {
  return await cookieCheck(req, res);
}

export default function Success({ session, data, sid }) {
  if (!session) return <p>NOT LOGGED IN</p>;
  return (
    <p>
      LOGGED IN {data.name} + {sid}
    </p>
  );
}
