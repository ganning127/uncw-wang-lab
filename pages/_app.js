import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import "@fontsource/ibm-plex-sans"
import { useColorMode } from '@chakra-ui/react'
import { useEffect } from 'react'
import { Global, css } from '@emotion/react'

const GlobalStyle = ({ children }) => {
  return (
    <>
      <Global
        styles={css`
          html {
            min-width: 356px;
            scroll-behavior: smooth;
            overflow-x: hidden;
          }
          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            background: #FAF9F6;
          }
        `}
      />
      {children}
    </>
  )
}

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
      <GlobalStyle>
        <ForceLightMode>
          <Component {...pageProps} />
        </ForceLightMode>
      </GlobalStyle>
    </ChakraProvider>
  )
}

export default MyApp