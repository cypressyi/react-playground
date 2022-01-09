import nodeFetch from 'node-fetch'
import { useState, useEffect } from 'react'

export default function Home(pageProps) {
  const [clientData, setClientData] = useState()
  useEffect(() => {
    async function get() {
      const res = await fetch('/api/test')
      const data = await res.json()
      setClientData(data)
    }
    get()
  }, [])

  return (
    <>
      <div>Client Data: {JSON.stringify(clientData)}</div>
      <div>Server Data: {JSON.stringify(pageProps)}</div>
    </>
  )
}

export async function getServerSideProps() {
  const res = await nodeFetch('https://test.com')
  const data = await res.json()

  if (!data) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      data
    }
  }
}
