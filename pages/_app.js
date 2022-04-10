import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import "@fontsource/ibm-plex-sans"
import { useColorMode } from '@chakra-ui/react'
import { useEffect } from 'react'

function ForceLightMode({ children }) {
  // force light mode b/c of ChakraUI bug
  const { colorMode, toggleColorMode } = useColorMode();

  useEffect(() => {
    if (colorMode === "light") return;
    toggleColorMode();
  }, [colorMode, toggleColorMode]);

  return children;
}

const theme = extendTheme({
  fonts: {
    heading: 'IBM Plex Sans',
    body: 'IBM Plex Sans',
  },
  colors: {

  }
})

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <ForceLightMode>
        <Component {...pageProps} />
      </ForceLightMode>
    </ChakraProvider>
  )
}

export default MyApp