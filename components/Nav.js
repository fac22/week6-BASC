import React from 'react';
import navStyles from '../styles/nav.module.css';
import Link from 'next/link';

const Nav = () => {
  return (

    <>
      <li className={navStyles.nav}>
        <Link href="/">
          <img
            src="/image/subcomfy-cropped.png"
            alt="logo"
            width={200}
            height={53}
          />
        </Link>
      </li>

      <nav className={navStyles.nav}>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>

          <li>
            <Link href="/basket">Basket</Link>
          </li>

          <li>
            <Link href="/login">Log-in / Signup</Link>
          </li>

          <li>
            <Link href="/api/logout">Log-out</Link>
          </li>
        </ul>
      </nav>
    </>

  );
};

export default Nav;
