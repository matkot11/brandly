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
}

body {
  font-size: 1.6rem;
  font-family: 'Montserrat', sans-serif;
}

h2, h1, h3 {
    margin: 0;
  }

  ul {
    padding: 0;
    margin: 0;
  }

  p {
    margin: 0;
  }
`;

export default GlobalStyle;
