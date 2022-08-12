import styled from "styled-components"
import * as palette from '../../../styleVariables';
import {AiFillGithub} from 'react-icons/ai'
import {BiLinkExternal} from 'react-icons/bi'
import EV from '../../../assets/ev.png'
import PR from '../../../assets/pr.png'
import { Fade } from "react-reveal";
import { useEffect } from "react";
import { useState } from "react";
const SectionWork = styled.section`
  width: 81%;
  margin: 0 auto;
  display: flex;
  flex-direction:column;
  align-items: left;
`
const Header = styled.section`
  font-size: 1.6em;
  margin-bottom: 8%;
`
const Work = () => {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 765);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 765);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });
  const Wrapper = styled.div`
    display: flex;
    margin-bottom: 1em;
    margin-left: 12%;
  `
  const Section = styled.section`
    font-family: Ayuthaya;
    width: 63%;
    margin: 13em auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: left;
    z-index: 2;
    letter-spacing: 0.02em;
    @media ${palette.device.tablet} { 
      width: 100%;
    }
  `
  const Line = styled.span`
    opacity: 80%;
    content: "";
    display: inline-block;
    width: 12em;
    height: 1.5px;
    margin-top: 1.15em;
    margin-left: 1.5em;
    background-color: ${palette.GOLD_COLOR};
    @media ${palette.device.tablet} { 
      margin-top: 2em;
      margin-left: 1em;
    }
  `

  const BodyWrapper = styled.div`
    display: flex;
    margin-bottom: 15%;
    @media ${palette.device.tablet} { 
      margin-bottom: 35%;
    }
  `
  const Left= styled.div`
    flex: 1;
    margin-right: -4.5em;
    z-index:1
  `
  const Left2 = styled.div`
    flex: 1;
    margin-left: -4.5em;
    text-align:right;
    @media ${palette.device.tablet} { 
    }
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
    height: 100%; 
    width: 100%; 
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    @media ${palette.device.tablet} { 
      box-shadow: inset 0 0 0 1000px rgba(8, 32, 36,.8);
    }
  `
  const ImgContainer = styled.div`
    height: 100%;
    width: 100%;
    box-shadow: 0 20px 30px -15px #071e21;
    @media ${palette.device.tablet} { 
      margin-top: 1.4em;
      margin-left: -10%;
      height: 100%;
      width: 200%;
    }
  `
  const Mobile = styled.div`
    height: 100%;
    width: 100%;
    @media ${palette.device.tablet} { 
      margin-left: -80%;
    }
  `
  const Right = styled.div`
    flex:1;

  `
  return (
    <Section>
        <SectionWork>
        <Fade bottom duration={palette.DURATION} delay={palette.SCROLL_DELAY}>
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
                    front-end design. Deployed on Vercel.
              </Desc>
              <Social>
                <AiFillGithub fill={palette.GOLD_COLOR} size={28} style={{marginRight: "1em"}} className="social"/>
                <BiLinkExternal fill={palette.GOLD_COLOR} size={28} className="social"/>
              </Social>
            </Left>
            
            <Right>
              <ImgContainer>
                <Image style={{ backgroundImage: `url(${EV})` }} />
              </ImgContainer>
            </Right>
          </BodyWrapper>
          </Fade>
          <Fade bottom duration={palette.DURATION} delay={palette.DELAY+palette.SCROLL_DELAY}>
          <BodyWrapper>

            <Right>
              <Mobile>
              <ImgContainer>
                <Image style={{ backgroundImage: `url(${PR})` }}  />
              </ImgContainer>
              </Mobile>
            </Right>
            <Left2>
              <H3>Featured Project</H3>
              <Title>PublicRepublic</Title>
              <Desc>A web app for a photo	&amp; video company. Built with Next Js, Tailwind CSS and Sanity.io as a CMS. Custom Sanity dashboard with editable components. Deployed on Vercel.
              </Desc>
              <Social>
                <AiFillGithub fill={palette.GOLD_COLOR} size={28} style={{marginRight: "1em"}} className="social"/>
                <BiLinkExternal fill={palette.GOLD_COLOR} size={28} className="social"/>
              </Social>
            </Left2>
          </BodyWrapper>
          </Fade>
        </SectionWork>
    </Section>
  )
}

export default Work