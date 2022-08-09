import styled from "styled-components"
import LogoTG from "../../../svg/LogoTG"

const Nav = styled.nav`
  position: relative; 
  font-family: 'Roboto', sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 2em;
`
const Logo = styled.h1`
  font-size: 16px;
  margin-left: 4.2em;
  margin-top: 0.75em;
`
const List = styled.ul`
  height: 2.7em;
  display: flex;
  list-style: none;
  font-size: 1.15em;
  margin-right: 4.2em;
  margin-top: 1.7em;
`
const Item = styled.li`
  margin-right: 3.5em;
  margin-top: 0.61em;
`
const Button = styled.a`
  border: 1.4px solid #F9E5C9;
  border-radius: 0.2em;
  padding: 0.65em 1.5em;
  cursor: pointer;
  line-height: 1.15;
  text-decoration: none;
  transition: all 0.21s cubic-bezier(0.645,0.045,0.355,1);

  &:hover {
    background-color: #103A40;
    outline: none;
  }
`
const Link = styled.a`
  transition: all 0.21s cubic-bezier(0.645,0.045,0.355,1);
  text-decoration: none;

  &:hover {
    font-weight: bold;
  }
  &:before{
    display: block;
    content: attr(title);
    font-weight: bold;
    height: 1px;
    color: transparent;
    overflow: hidden;
    visibility: hidden;
  }
`
const Navbar = () => {
  return (
    <Nav>
      <Logo>
        <LogoTG width={75}/>
      </Logo>
      <List>
        <Item><Link href="#about" title="About">About</Link></Item>
        <Item><Link href="#work" title="Work">Work</Link></Item>
        <Item><Link href="#contact" title="Contact">Contact</Link></Item>
        <Button>Resume</Button>
      </List>
    </Nav>
  )
}

export default Navbar