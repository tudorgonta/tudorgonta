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
    overflow-x: hidden;
    background-color: #0c2f34;
  }
  *, :before, :after {
    box-sizing: inherit;
  }
  .slick-slider {
    display: flex;
    width: 100%;
    margin: 0 auto;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  .arrow {
    cursor: pointer;
    opacity: 60%;
    transition: all 0.21s cubic-bezier(0.645,0.045,0.355,1);
  }
  .social {
    cursor: pointer;
    transition: all 0.21s cubic-bezier(0.645,0.045,0.355,1);
  }
  .social:hover {
    opacity: 60%;
  }
  .arrow:hover{
    opacity:100%;
  }
  .left {
    margin-right: 1em;
  }
  .right {
    margin-left: 1em;
  }
  .skillIcon {
    display: flex;
    margin: 0 auto;
    margin-bottom: 0.5em;
  }
`;
 
export default GlobalStyle;