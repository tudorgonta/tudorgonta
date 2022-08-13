import { createGlobalStyle } from 'styled-components';

import IE9 from './fonts/e50f08c648d677fc2b0f52ac98afb797.eot'
import IE6 from './fonts/e50f08c648d677fc2b0f52ac98afb797.eot?#iefix'
import Chrome from './fonts/e50f08c648d677fc2b0f52ac98afb797.woff2'
import Firefox from './fonts/e50f08c648d677fc2b0f52ac98afb797.woff'
import Safari from './fonts/e50f08c648d677fc2b0f52ac98afb797.ttf'
import Ios from './fonts/e50f08c648d677fc2b0f52ac98afb797.svg'

const GlobalStyle = createGlobalStyle`
  @font-face {font-family: "Ayuthaya";
    src: url(${IE9}); /* IE9*/
    src: url(${IE6}) format("embedded-opentype"), /* IE6-IE8 */
    url(${Chrome}) format("woff2"), /* chrome、firefox */
    url(${Firefox}) format("woff"), /* chrome、firefox */
    url(${Safari}) format("truetype"), /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
    url(${Ios}) format("svg"); /* iOS 4.1- */
  }
  * {
    margin: 0;
    padding: 0;
    background: transparent;
    color: #F9E5C9;
    font-family: 'Ayuthaya',sans-serif;
  }
  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.05);
    border-radius: 10px;
    background-color: #092326;
  }
  ::-webkit-scrollbar {
    width: 8px;
    background-color: #092326;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.1);
    background-color: #061a1c;
  }
  html {
    scroll-behavior: smooth;
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
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
      transition: background-color 5000s ease-in-out 0s;
  }
  input:-webkit-autofill{
    -webkit-text-fill-color: #F9E5C9 !important;
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