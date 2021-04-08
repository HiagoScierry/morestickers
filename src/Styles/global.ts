import { createGlobalStyle } from "styled-components";
import Theme from "./theme";

const GlobalStyle = createGlobalStyle`
  * { padding: 0;
      margin: 0;
      outline: 0;
      box-sizing: border-box;
  }
  body {
    background-color: ${Theme.primary.background};
    color: ${Theme.primary.main};
    font-family: 'Source Sans Pro', sans-serif;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
  }
  html, body, #root {
    height: 100%;
  }
  input, button {
    font-family: 'Source Sans Pro', sans-serif;
  }
  button {
    cursor: pointer;
  }

  a{
    text-decoration: none !important;
    color: ${Theme.primary.text}
  }

`;
export default GlobalStyle;
