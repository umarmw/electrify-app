import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

function MyApp({ Component, pageProps }) {
  return <>
    <GlobalStyle />
    <Component {...pageProps} />
  </>
}

export default MyApp
