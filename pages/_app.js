import '../styles/globals.css'

import Head from 'next/head'

if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
  require('../mocks')
}

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>React Playground</title>
        <meta name="description" content="Just for testing some react feature" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default App
