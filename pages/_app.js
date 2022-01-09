import '../styles/globals.css'

import Head from 'next/head'

import Header from 'components/Header'
import Sidebar from 'components/Sidebar'
import ContentWrapper from 'components/ContentWrapper'
import Content from 'components/Content'

if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
  require('../mocks')
}

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>React Playground</title>
        <meta
          name="description"
          content="Just for testing some react feature"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-slate-50">
        <Header />
        <div className="container mx-auto relative">
          <ContentWrapper>
            <Sidebar />
            <Content>
              <Component {...pageProps} />
            </Content>
          </ContentWrapper>
        </div>
      </div>
    </>
  )
}

export default App
