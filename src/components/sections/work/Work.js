import styled from "styled-components"
import * as palette from '../../../styleVariables';
import {AiFillGithub} from 'react-icons/ai'
import {BiLinkExternal} from 'react-icons/bi'
import EV from '../../../assets/ev.png'

const Section = styled.section`
  font-family: Ayuthaya;
  width: 68%;
  margin: 13em auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: left;
  z-index: 2;
  letter-spacing: 0.02em;
`
const SectionWork = styled.section`
  width: 81%;
  margin: 0 auto;
  display: flex;
  flex-direction:column;
  align-items: left;
`
const Header = styled.section`
  font-size: 1.6em;
  margin-bottom: 4%;
`
const Line = styled.span`
  opacity: 80%;
  content: "";
  display: inline-block;
  width: 13em;
  height: 1.5px;
  margin-top: 1.15em;
  margin-left: 1.5em;
  background-color: ${palette.GOLD_COLOR};
`
const Wrapper = styled.div`
  display: flex;
  margin-bottom: 1em;
`
const BodyWrapper = styled.div`
  display: flex;
`
const Left = styled.div`
  flex: 1;
  margin-right: -4.5em;
  z-index:1
`
const H3 = styled.h3`
  font-size: 0.8em;
  opacity: 40%;
`
const Title = styled.h1`
  font-size: 1.3em;
  margin-top: 0.3em;
  margin-bottom: 1em;
`
const Desc = styled.p`
  background-color: ${palette.CONTAINER_COLOR};
  padding: 2em;
  font-size: 0.8em;
  color: rgb(249, 229, 201, 0.8);
  width: 87%;
  line-height: 1.25em;
  box-shadow: 0 10px 30px -15px #071e21;
  transition: all 0.21s cubic-bezier(0.645,0.045,0.355,1);
  &:hover{
    box-shadow: 0 20px 30px -15px #071e21;
    color: rgb(249, 229, 201, 1);
  }
`

const Social = styled.div`
  margin-top: 1.5em;
  displat: flex;
`
const Image = styled.div`
  background-image: url(${EV});
  height: 100%; 
  width: 100%; 
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`
const ImgContainer = styled.div`
  height: 100%;
  width: 100%;
  box-shadow: 0 20px 30px -15px #071e21;
`
const Right = styled.div`
  flex:1;

`
const Work = () => {
  return (
    <Section>
      <SectionWork>
        <Wrapper>
          <Header>My Work</Header>
          <Line />
        </Wrapper>
        <BodyWrapper>
          <Left>
            <H3>Featured Project</H3>
            <Title>EV Charging</Title>
            <Desc>A full stack web app built with Next Js, MongoDB, Tailwind CSS, NextAuth. Make enquiries and manage them in the admin panel. 
                  Create users and assign roles. A minimal and responsive 
                  front-end design. 
            </Desc>
            <Social>
              <AiFillGithub fill={palette.GOLD_COLOR} size={28} style={{marginRight: "1em"}} className="social"/>
              <BiLinkExternal fill={palette.GOLD_COLOR} size={28} className="social"/>
            </Social>
          </Left>
          <Right>
            <ImgContainer>
              <Image />
            </ImgContainer>
          </Right>
        </BodyWrapper>
      </SectionWork>
    </Section>
  )
}

export default Work