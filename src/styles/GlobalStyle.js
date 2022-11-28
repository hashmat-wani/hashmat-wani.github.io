import { createGlobalStyle } from "styled-components";
import PrismJsStyles from "./prismjs.style";
import scrollBar from "./scrollbar.style";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body, html {
    height: 100%;
    font-size: calc(12px + 0.4vw);
    font-family: ${(p) => p.theme.fontFamily};
    /* -webkit-font-smoothing: antialiased; */
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    font-display: fallback !important;
  }

  body {
    /* overflow hidden for SmallProject's 100vw width div */
    overflow-x: hidden;
    background-color: ${(p) => p.theme.bg};
    color: ${(p) => p.theme.primaryText};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    color: ${(p) => p.theme.primaryColor};
    text-decoration: none;
  }
  a:hover {
    color: ${(p) => p.theme.primaryText};
  }
  
  h1, h2, h3, h4, h5, h6 {
    margin: 10px 0;
    line-height: 140%;
    color: ${(p) => p.theme.primaryText};
  }
  
  p {
    font-size: 16px;
    margin: 0;
    line-height: 150%;
    font-family: ${(p) => p.theme.secondaryFontFamily};
    color: ${(p) => p.theme.primaryText};
  }
  
  ul {
    list-style: none;
    padding: 0;
    font-size: 14px;
    line-height: 150%;
  }

  .invalid {
    color: #e81b1b !important;
    box-shadow: 0 0 0px 1px #e81b1b;
  }

  .active {
    color: #383838;
  }

  hr {
    border: 1px solid ${(p) => p.theme.accentColor};
    margin: 30px 0;
  }

  @media all and (min-width: 450px) {
    ${scrollBar};
  }

 
  
  /*             */
  /* Prismjs STYLES */
  /*             */
  ${PrismJsStyles}
`;
export default GlobalStyle;
