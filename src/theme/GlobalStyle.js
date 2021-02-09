import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html {
  font-size: 62.5%;

  @media only screen and (max-width: 31.25rem) {
    font-size: 50%;
  }
}

body {
  font-size: 1.6rem;
  font-family: 'Montserrat', sans-serif;
  padding: 10px 40px;
  @media only screen and (max-width: 31.25rem) {
    padding: 0;
  }
}
`;

export default GlobalStyle;
