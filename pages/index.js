import Head from 'next/head';
// import Layout from '../components/Layout.js';

export default function Home() {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Pillow shop" />
        <meta name="title" content="Pillows" />
        <title>Pillow but Title</title>
      </Head>

      <h1> Hello, this is index.js </h1>
    </div>
  );
}
