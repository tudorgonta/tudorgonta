import styled from "styled-components"
import LogoTG from "../../../svg/LogoTG"
import * as palette from '../../../styleVariables';
import Fade from 'react-reveal/Fade';
import { useState } from "react";
import Hamburger from "./Hamburger";


const Nav = styled.nav`
  font-family: 'Roboto', sans-serif;
  position: fixed; 
  width: 100%;
  display: flex;
  top: 2em;
  justify-content: space-between;
  z-index: 12;
  @media ${palette.device.tablet} { 
    flex-direction: column;
    width: 80%;
  }
`
const Logo = styled.a`
  cursor: pointer;
  font-size: 16px;
  margin-left: 3.2em;
  margin-top: 0.75em;
  text-decoration: none;
`
const Item = styled.li`
  margin-right: 3.5em;
  margin-top: 0.61em;
  @media ${palette.device.tablet} { 
    margin-bottom: 1.5em;
    width: 100%;
    &:nth-child(3) {
      margin-bottom: 2em;
  }
  }
`
const Link = styled.a`
  transition: all 0.21s cubic-bezier(0.645,0.045,0.355,1);
  text-decoration: none;
  &:hover {
    font-weight: bold;
  }
  ${palette.TRANSITION_FIX()}
`

const Navbar = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen)
  }
  const closeHamburger = () => {
    setHamburgerOpen(false)
  }

  const Button = styled.a`
  border: 1.4px solid ${palette.GOLD_COLOR};
  border-radius: 0.2em;
  padding: 0.65em 1.5em;
  cursor: pointer;
  line-height: 1;
  text-decoration: none;
  transition: all 0.21s cubic-bezier(0.645,0.045,0.355,1);
  
  &:hover {
    background-color: ${palette.CONTAINER_COLOR};
    outline: none;
    font-weight: bold;
  }
  ${palette.TRANSITION_FIX()}
  @media ${palette.device.tablet} { 
    width: 100%;
    ${palette.TRANSITION_FIX_MOBILE()}
  }
`
  const HamWrapper = styled.div`
    `
  const List = styled.ul`
    display: flex;
    letter-spacing: 0.08em;
    height: 2.7em;
    list-style: none;
    font-size: 0.95em;
    margin-block-start: 1em;
    margin-block-end: 1em;
    padding-inline-start: 40px;
    margin-top: 1.5em;
    margin-right: 4em;
    z-index: 14;
    @media ${palette.device.tablet} { 
      display: ${hamburgerOpen ? 'block' : 'none'};
      margin-top: 30%;
      text-align: center;
      font-size: 1.5em;
      width: 100%;
      z-index: 14;
    }
  `
  return (
    <>
      <Nav >
        <Fade top duration={palette.DURATION}>
        <Logo href="/">
          <LogoTG width={65}/>
        </Logo>
        
        <List>
          <Item><Link onClick={closeHamburger} href="#about" title="About">About</Link></Item>
          <Item><Link onClick={closeHamburger} href="#work" title="Work">Work</Link></Item>
          <Item><Link onClick={closeHamburger} href="#contact" title="Contact">Contact</Link></Item>
          <Button title="Resume">Resume</Button>
        </List>
        </Fade>
      </Nav>
      <HamWrapper onClick={toggleHamburger}>
          <Hamburger isOpen={hamburgerOpen}  />
      </HamWrapper>
    </>
  )
}

export default Navbar