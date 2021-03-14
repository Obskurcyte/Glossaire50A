import '../styles/globals.css';
import Head from 'next/head';
import React from 'react';

function MyApp({ Component, pageProps }) {
  return (
      <div>
      <Head>
          <title>Glossaire</title>
          <meta name="viewport" content="inital-scale=1.0, width=device-width"/>
      </Head>
      <Component {...pageProps} />
      </div>

  )
}

export default MyApp
