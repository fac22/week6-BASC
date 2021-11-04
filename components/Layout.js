import React from 'react';
import styles from '../styles/layout.module.css';

// Components
import Head from 'next/head';
import Navbar from './Nav.js';
import Header from './Header.js';

const Layout = ({ children, home }) => {
  return (
    <>
      <Navbar />
      <Header />
      <div className={styles.container}>
        <main className={styles.main}>{children}</main>
      </div>
    </>
  );
};

export default Layout;
