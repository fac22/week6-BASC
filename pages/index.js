import React from 'react';
import Head from 'next/head';
import { getAllProducts, getAllCategories, getSession } from '../db/model';
import ProductList from '../components/ProductList';
import Cookies from 'cookies';
import CategoryFilter from '../components/CategoryFilter';

export async function getServerSideProps({ req, res }) {
  const allProducts = await getAllProducts();
  const productData = JSON.stringify(allProducts);
  const allCategories = await getAllCategories();
  const categoryData = JSON.stringify(allCategories);

  const cookies = new Cookies(req, res);

  if (!cookies.get('sid')) {
    return {
      props: {
        session: false,
        productData,
        data: null,
        categoryData,
      },
    };
  }

  const sid = cookies.get('sid');
  const data = await getSession(sid);

  return {
    props: {
      session: true,
      data,
      sid,
      productData,
      categoryData,
    },
  };
}

export default function Home({ productData, categoryData, data }) {
  const productsArray = JSON.parse(productData);
  const categoryArray = JSON.parse(categoryData);
  const [category, setCategory] = React.useState('All');
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
