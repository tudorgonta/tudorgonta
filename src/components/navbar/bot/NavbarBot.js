import styled from "styled-components"
import * as palette from '../../../styleVariables';

const Left = styled.ul`
  left:0;
  position: fixed;
  bottom: 1em;
  z-index: 10;
  &:before {
    content: "";
    display: block;
    width: 5em;
    height: 1px;
    margin: 0px auto;
    background-color: ${palette.GOLD_COLOR};
  }
`
const LeftItem = styled.li`

`

const NavbarBot = () => {
  return (
    <>
      <Left>
        <LeftItem></LeftItem>
        <LeftItem></LeftItem>
      </Left>
    </>
  )
}

export default NavbarBot