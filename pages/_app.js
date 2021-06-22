import { createGlobalStyle } from 'styled-components'
import TypoStyles from '../styles/typography';

const GlobalStyle = createGlobalStyle`
  ${TypoStyles}
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

  main {
    padding: 0;
    @media only screen and (min-width: 768px){
      padding: 40px;
    }
  }
`;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
