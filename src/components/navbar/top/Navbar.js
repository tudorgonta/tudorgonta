import styled from "styled-components"
import LogoTG from "../../../svg/LogoTG"
import * as palette from '../../../styleVariables';

const Nav = styled.nav`
  position: fixed;
  font-family: 'Roboto', sans-serif;
  position: fixed; 
  width: 100%;
  display: flex;
  top: 2em;
  justify-content: space-between;
  align-items: center;
  z-index:10;
`
const Logo = styled.a`
  cursor: pointer;
  font-size: 16px;
  margin-left: 3.2em;
  margin-top: 0.75em;
`
const List = styled.ul`
  letter-spacing: 0.08em;
  height: 2.7em;
  display: flex;
  list-style: none;
  font-size: 0.95em;
  margin-block-start: 1em;
  margin-block-end: 1em;
  padding-inline-start: 40px;
  margin-right: 3.2em;
  margin-top: 1.5em;
`
const Item = styled.li`
  margin-right: 3.5em;
  margin-top: 0.61em;
`
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
  return (
    <Nav>
      <Logo href="#home">
        <LogoTG width={65}/>
      </Logo>
      <List>
        <Item><Link href="#about" title="About">About</Link></Item>
        <Item><Link href="#work" title="Work">Work</Link></Item>
        <Item><Link href="#contact" title="Contact">Contact</Link></Item>
        <Button title="Resume">Resume</Button>
      </List>
    </Nav>
  )
}

export default Navbar