import React from 'react';
import navStyles from '../styles/nav.module.css';
import Link from 'next/link';
import Image from 'next/image';

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
      <ul>
        <li>
          <Link href="/">
            <img
              src="/image/subcomfy-cropped.png"
              alt="logo"
              width={200}
              height={53}
            />
          </Link>
        </li>
        <li>
          <Link href="/"> Home</Link>
        </li>
        {/* <li>
          <Link href="/"> Cushions</Link>
        </li> */}
        <li>
          <Link href="/login"> Log-in</Link>
        </li>
        <li>
          <Link href="/basket">Basket</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
