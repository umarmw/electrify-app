import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

  @font-face {
  font-family: 'Omnes';
  font-style: normal;
  font-weight: normal;
  src: local('Omnes'), url('./fonts/omnes-regular-webfont.woff') format('woff');
  }

  @font-face {
    font-family: 'Omnes';
    font-style: normal;
    font-weight: 600;
    src: local('Omnes'), url('./fonts/omnes_medium-webfont.woff') format('woff');
  }

  @font-face {
    font-family: 'Omnes';
    font-style: normal;
    font-weight: 700;
    src: local('Omnes'), url('./fonts/omnes-semibold-webfont.woff') format('woff');
  }
  
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Omnes, Arial, sans-serif';
  }
  .img--responsive {
    width: 100%;
  }
  .img--rounded {
    border-radius: 4px;
  }
`

function MyApp({ Component, pageProps }) {
  return <>
    <GlobalStyle />
    <Component {...pageProps} />
  </>
}

export default MyApp
