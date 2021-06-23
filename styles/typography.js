import { css } from 'styled-components';

export const typoStyles = css`

    @font-face {
    font-family: 'Omnes';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: url('/fonts/omnes_extralight-webfont.woff') format('woff');
    }

    @font-face {
    font-family: 'Omnes';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url('/fonts/omnes-regular-webfont.woff') format('woff');
    }
    

    @font-face {
    font-family: 'Omnes';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: url('/fonts/omnes_medium-webfont.woff') format('woff');
    }
    

    @font-face {
    font-family: 'Omnes';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url('/fonts/omnes-semibold-webfont.woff') format('woff');
    }

`;

export default typoStyles;