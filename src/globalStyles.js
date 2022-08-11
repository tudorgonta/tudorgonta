import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    background: transparent;
    color: #F9E5C9;
  }
  ::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.05);
	border-radius: 10px;
	background-color: #092326;
}

::-webkit-scrollbar
{
	width: 8px;
	background-color: #092326;
}

::-webkit-scrollbar-thumb
{
	border-radius: 10px;
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.1);
	background-color: #061a1c;
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