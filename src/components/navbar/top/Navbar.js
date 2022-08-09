import styled from "styled-components"

const Nav = styled.nav`
  display:flex;
  justify-content: space-between;
  width:100%;
  margin-top: 3em;
`
const Logo = styled.h1`
  font-size: 16px;
  margin-left: 4.2em;
  margin-top: 0.75em;
`
const List = styled.ul`
  display: flex;
  margin-right: 4.2em;
  font-size: 1.15em;
`
const Item = styled.li`
  display: inline-block;
  margin-right: 4em;
  margin-top: 0.75em;
`
const Button = styled.span`
  border: 1.4px solid #F9E5C9;
  border-radius: 0.2em;
  padding: 0.75em 1.5em;
`

const Navbar = () => {
  return (
    <Nav>
      <Logo>TG</Logo>
      <List>
        <Item>About</Item>
        <Item>Work</Item>
        <Item>Contact</Item>
        <Button>Resume</Button>
      </List>
    </Nav>
  )
}

export default Navbar