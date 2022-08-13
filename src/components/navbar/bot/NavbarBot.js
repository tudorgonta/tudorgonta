import styled from "styled-components"
import * as palette from '../../../styleVariables';
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai'
import Fade from 'react-reveal/Fade';
import { useState } from "react";
import { useEffect } from "react";


const STROKE = `
  content: "";
  display: inline-block;
  width: 5em;
  height: 1.5px;
  margin-top: 0.7em;
  background-color: ${palette.GOLD_COLOR};
  @media ${palette.device.tablet} { 
    width: 0.5em;
  }
`
const Wrapper = styled.div`
  display: flex;
`
const Text = styled.a`
  text-decoration: none;
  letter-spacing: 0.1em;
  margin-right: 1em;
  transition: all 0.21s cubic-bezier(0.645,0.045,0.355,1);
  &:hover {
    font-weight: bold;
  }
  ${palette.TRANSITION_FIX()}
`
const Line = styled.span`
  ${STROKE}
`
const SOCIAL_ICON_SIZE = 24


const NavbarBot = () => {

  const [isDesktop, setDesktop] = useState(window.innerWidth > 765);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 765);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  const DIV_MAIN = `
    position: fixed;
    bottom: 3.5em;
    z-index: 13;
    @media ${palette.device.tablet} { 
      position: relative;
    }
  `
  const Left = styled.div`
    ${DIV_MAIN}
    left: 0;
    bottom: 3.5em;
    @media ${palette.device.tablet} { 
      overflow-x: hidden;
    }
  `
  const LeftItem = styled.a`
    margin-left: 1em;
    transition: all 0.21s cubic-bezier(0.645,0.045,0.355,1);
    &:hover {
      opacity: 60%;
    }
  `
  const Right = styled.div`
    font-family: 'Roboto', sans-serif;
    font-size: 0.95em;
    ${DIV_MAIN}
    right: 0;
    bottom: 4.2em;
    @media ${palette.device.tablet} { 
      margin-top: 0.5em;
      overflow-x: hidden;
    }
  `
  const FlexContainer = styled.div`
    @media ${palette.device.tablet} { 
      display: flex;
      justify-content: space-between;
      margin-top: -25%;
    }
  `
  return (
    <FlexContainer>
      <Left>
        <Fade left duration={palette.DURATION} delay={isDesktop ? 0 : palette.DELAY+1000} >
          <Wrapper>
            <Line />
            <LeftItem target="_blank" href="#"><AiFillGithub fill={palette.GOLD_COLOR} size={SOCIAL_ICON_SIZE} /></LeftItem>
            <LeftItem target="_blank" href="#"><AiFillLinkedin fill={palette.GOLD_COLOR} size={SOCIAL_ICON_SIZE} /></LeftItem>
          </Wrapper>
        </Fade>
      </Left>
      <Right>
        <Fade right duration={palette.DURATION} delay={isDesktop ? 0 : palette.DELAY+1000} >
          <Wrapper>
            <Text title="gontatudor@gmail.com" href="#contact">gontatudor@gmail.com</Text>
            <Line />
          </Wrapper>
        </Fade>
      </Right>
    </FlexContainer>
  )
}

export default NavbarBot