import { createGlobalStyle } from 'styled-components';

import background from '../assets/images/background.svg';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700,900&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #191920 url(${background}) no-repeat center top;
    -webkit-font-smoothing: antialiased;
  }

  body,
  input,
  button {
    font: 14 Roboto, sans-serif;
  }

  button {
    cursor: pointer;
  }

  #root {
    max-width: 1020px;
    margin: 0 auto;
    padding: 0 20px 50px;
  }
`;
