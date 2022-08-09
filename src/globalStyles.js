import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    background: transparent;
    color: #F9E5C9;
  }
  body {
    width: 100%;
    min-height: 100%;
    -webkit-font-smoothing: antialiased;
    line-height: 1.3;
    overflow: hidden;
    background-color: #0c2f34;
  }
  *, :before, :after {
    box-sizing: inherit;
  }
  
`;
 
export default GlobalStyle;