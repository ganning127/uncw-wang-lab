import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import "@fontsource/ibm-plex-sans"

const theme = extendTheme({
  fonts: {
    heading: 'IBM Plex Sans',
    body: 'IBM Plex Sans',
  },
})

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp