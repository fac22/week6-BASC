import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import productStyles from '../styles/product.module.css';

const Product = ({ product }) => {
  return (
    <div>
      <Link href={`/products/${product.id}`}>
        <a className={productStyles.card}>
          <Image
            key={product.id}
            src={`/${product.product_image}`}
            alt={product.product_title}
            width={200}
            height={200}
          />
          <h2>{product.product_title}</h2>
          <p>£{product.product_price}</p>
        </a>
      </Link>
    </div>
  );
};

export default Product;
