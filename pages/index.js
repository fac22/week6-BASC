import Head from 'next/head';
// import Layout from '../components/Layout.js';
import { getAllProducts } from '../db/model';
import ProductList from '../components/ProductList';

export async function getStaticProps({ req, res }) {
  const allProducts = await getAllProducts();
  const productData = JSON.stringify(allProducts);

  return {
    props: { productData },
  };
}

export default function Home({ productData }) {
  console.log(productData);
  const productsArray = JSON.parse(productData);
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Pillow shop" />
        <meta name="title" content="Pillows" />
        <title>Pillow but Title</title>
      </Head>

      <h1> Hello, this is index.js </h1>

      <ProductList productsArray={productsArray} />
    </div>
  );
}
