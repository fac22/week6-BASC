import Head from 'next/head';
// import Layout from '../components/Layout.js';
import { getAllProducts, getSession } from '../db/model';
import ProductList from '../components/ProductList';
import Cookies from 'cookies';
import Navbar from '../components/Nav';

export async function getServerSideProps({ req, res }) {
  const allProducts = await getAllProducts();
  const productData = JSON.stringify(allProducts);
  const cookies = new Cookies(req, res);

  if (!cookies.get('sid')) {
    return {
      props: {
        session: false,
        productData,
        data: null,
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
        <title>SUBCOMFY</title>
      </Head>

      <ProductList productsArray={productsArray} />
    </div>
  );
}
