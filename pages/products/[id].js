import { getProduct, getAllProductsID } from '../../db/model';
// import { getAllProducts, getProduct, getAllProductsID } from '../../db/model';
import productStyles from '../../styles/product.module.css';
import Layout from '../../components/Layout';
import Image from 'next/image';
import React from 'react';

export async function getStaticPaths() {
  const pathData = await getAllProductsID();
  const paths = pathData.map(({ id }) => {
    return {
      params: {
        id: id.toString(),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  const product = await getProduct(params.id);
  //   const productData = JSON.stringify(product);
  return {
    props: { product },
  };
}

export default function Product({ product }) {
  // console.log(product);
  return (
    <div>
      {/* Title */}
      <h2>{product.title}</h2>
      {/* Image */}
      <div className={productStyles.productCard}>
        <Image
          key={`img${product.id}`}
          src={`${product.image}`}
          alt={product.title}
          width={200}
          height={200}
        />
        {/* Description */}
        <p>{product.description}</p>
      </div>
      {/* Category */}
      <p>{product.category}</p>

      <form className={productStyles.formCard} action="/api/order">
        {/* Size,  */}
        <label htmlFor="size">
          Size
          <select name="size" id="size">
            <option value={product.size}>{product.size}</option>
          </select>
        </label>
        <label htmlFor="colour">
          Colour
          <select name="colour" id="colour">
            <option value={product.colour}>{product.colour}</option>
          </select>
        </label>
        {/* // Price */}
        <p>£ {product.price}</p>
        {/* Quantitiy */}
        <select name="quantity" id="quantity">
          <option value="12">12</option>
          <option value="52">52</option>
          <option value="356">356</option>
        </select>

        {/* // Button: Add-To-Basket */}
        <button type="submit">Add to Basket</button>
      </form>
    </div>
  );
}
