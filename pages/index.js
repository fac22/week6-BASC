import React from 'react';
import Head from 'next/head';
// import Layout from '../components/Layout.js';
import { getAllProducts, getAllCategories } from '../db/model';
import ProductList from '../components/ProductList';
import CategoryFilter from '../components/CategoryFilter';

export async function getStaticProps({ req, res }) {
  const allProducts = await getAllProducts();
  const productData = JSON.stringify(allProducts);
  const allCategories = await getAllCategories();
  const categoryData = JSON.stringify(allCategories);

  return {
    props: { productData, categoryData },
  };
}

export default function Home({ productData, categoryData }) {
  const productsArray = JSON.parse(productData);
  const categoryArray = JSON.parse(categoryData);
  const [category, setCategory] = React.useState('All');
  // console.log(category);
  // console.log(categoryArray);
  return (
    <div>
      <Head>
        <link rel="icon" href="/image/cushion.png" />
        <meta name="description" content="Pillow shop" />
        <meta name="title" content="Pillows" />
        <title>Subcomfy</title>
      </Head>
      <CategoryFilter
        categoryArray={categoryArray}
        category={category}
        setCategory={setCategory}
      />
      <ProductList productsArray={productsArray} category={category} />
    </div>
  );
}
