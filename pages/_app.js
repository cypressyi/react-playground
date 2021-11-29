import '../styles/globals.css';

import Head from 'next/head';

import Header from '../components/Header';
import Box from '@mui/material/Box';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>React Playground</title>
        <meta name="description" content="Just for testing some react feature" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Box sx={{ p: 1 }}>
        <Component {...pageProps} />
      </Box>
    </>
  );
}

export default MyApp;
