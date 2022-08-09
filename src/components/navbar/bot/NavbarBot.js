import styled from "styled-components"
import * as palette from '../../../styleVariables';

const DIV_MAIN = `
  position: fixed;
  bottom: 3.5em;
  z-index: 10;
`
const STROKE = `
  content: "";
  display: inline-block;
  width: 5em;
  height: 1.5px;
  margin-top: 0.7em;
  background-color: ${palette.GOLD_COLOR};
`

const Left = styled.div`
  ${DIV_MAIN}
  width: 40px;
  left: 0;
  right: auto;
  &:before {
    ${STROKE}
  }
`
const LeftItem = styled.a`

`
const Right = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 0.95em;
  ${DIV_MAIN}
  right: 0;
`
const Wrapper = styled.div`
  display: flex;
`
const Text = styled.a`
  text-decoration: none;
  letter-spacing: 0.1em;
  margin-right: 1em;
`
const Line = styled.span`
  ${STROKE}
`

const NavbarBot = () => {
  return (
    <>
      <Left>
        <LeftItem></LeftItem>
        <LeftItem></LeftItem>
      </Left>
      <Right>
        <Wrapper>
          <Text href="#">gontatudor@gmail.com</Text>
          <Line />
        </Wrapper>
      </Right>
    </>
  )
}

export default NavbarBot