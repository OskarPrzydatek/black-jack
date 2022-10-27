import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    color: #2F2F2F;
    font-family: 'Arial', serif;
  }

  body {
    margin: 0;
    background-color: #F2F2F2;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
`;
