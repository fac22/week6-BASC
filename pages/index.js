import Head from 'next/head';
// import Layout from '../components/Layout.js';
import { getAllProducts } from '../db/model';
import ProductList from '../components/ProductList';
import Cookies from 'cookies';
import { getSession } from '../db/model';

export async function getServerSideProps({ req, res }) {
  const allProducts = await getAllProducts();
  const productData = JSON.stringify(allProducts);
  const cookies = new Cookies(req, res);

  if (!cookies.get('sid')) {
    return {
      props: {
        session: false,
        productData,
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
    },
  };
}

export default function Home({ productData, data }) {
  const productsArray = JSON.parse(productData);
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Pillow shop" />
        <meta name="title" content="Pillows" />
        <title>Pillow but Title</title>
      </Head>
      <h1> {data.name}</h1>
      <ProductList productsArray={productsArray} />
    </div>
  );
}
