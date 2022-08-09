import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    background-color: #0c2f34;
    color: #F9E5C9;
  }
  body {
    width: 100%;
    min-height: 100%;
    -webkit-font-smoothing: antialiased;
    line-height: 1.3;
  }
  *, :before, :after {
    box-sizing: inherit;
  }
  ul {
    display: block;
    list-style-type: none;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
  }
`;
 
export default GlobalStyle;