import styled from "styled-components"
import * as palette from '../../../styleVariables';
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai'

const DIV_MAIN = `
  position: fixed;
  bottom: 3.5em;
  z-index: 10;
  background: transparent;
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
  left: 0;
  bottom: 3.5em;
  background: transparent;
`
const LeftItem = styled.a`
  margin-left: 1em;
  background: transparent;
`
const Right = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 0.95em;
  ${DIV_MAIN}
  right: 0;
  bottom: 4.2em;
  background: transparent;
`
const Wrapper = styled.div`
  display: flex;
  background: transparent;
`
const Text = styled.a`
  text-decoration: none;
  letter-spacing: 0.1em;
  margin-right: 1em;
  background: transparent;
`
const Line = styled.span`
  ${STROKE}
`
const SOCIAL_ICON_SIZE = 24
const NavbarBot = () => {
  return (
    <>
      <Left>
        <Wrapper>
          <Line />
          <LeftItem target="_blank" href="#"><AiFillGithub fill={palette.GOLD_COLOR} size={SOCIAL_ICON_SIZE} /></LeftItem>
          <LeftItem target="_blank" href="#"><AiFillLinkedin fill={palette.GOLD_COLOR} size={SOCIAL_ICON_SIZE} /></LeftItem>
        </Wrapper>
      </Left>
      <Right>
        <Wrapper>
          <Text href="#contact">gontatudor@gmail.com</Text>
          <Line />
        </Wrapper>
      </Right>
    </>
  )
}

export default NavbarBot