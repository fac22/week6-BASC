import { getProduct, getAllProductsID } from '../../db/model';
// import { getAllProducts, getProduct, getAllProductsID } from '../../db/model';

import Layout from '../../components/Layout';
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
  return <Layout>{product.product_title}</Layout>;
}
