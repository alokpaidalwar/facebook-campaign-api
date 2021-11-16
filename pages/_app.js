import { ChakraProvider } from "@chakra-ui/react"
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="#" />
        <title>Facebook-Campaign-API</title>
      </Head>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  )
}

export default MyApp