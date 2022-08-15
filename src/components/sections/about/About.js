import styled from "styled-components"
import * as palette from '../../../styleVariables';
import Slider from "react-slick";
import {AiFillGithub, AiFillHtml5} from 'react-icons/ai'
import {IoLogoCss3} from 'react-icons/io'
import {DiSass, DiJavascript, DiJava, DiReact, DiPython, DiNodejsSmall, DiMongodb} from 'react-icons/di'
import {SiPhp, SiMysql, SiAdobexd, SiAdobephotoshop, SiAdobeillustrator, SiTailwindcss, SiStyledcomponents} from 'react-icons/si'
import {FaFigma} from 'react-icons/fa'
import NextJs from "../../../svg/Next";
import {BsChevronLeft, BsChevronRight} from 'react-icons/bs'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Fade } from "react-reveal";
import { useEffect } from "react";
import { useState } from "react";

const SectionAbout = styled.section`
  width: 81%;
  margin:0 auto;
  display: flex;
  flex-direction:column;
  align-items: left;
`
const Header = styled.section`
  font-size: 1.6em;
  margin-bottom: 4%;
`
const Desc = styled.section`
  width: 70%;
  font-size: 0.95em;
  opacity: 80%;
  margin-bottom: 10%;
  @media ${palette.device.tablet} { 
    width: 100%;
  }
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
`
const IconWrapper = styled.div`
  display: flex; 
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  opacity: 60%;
  transition: all 0.21s cubic-bezier(0.645,0.045,0.355,1);
  
  &:hover {
    opacity: 100%;
  }
  @media ${palette.device.tablet} { 
    font-size: 0.8em;
  }
`
const SliderWrapper = styled.div`
  margin-top: 2em;
`

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className="button"> 
      <BsChevronRight fill={palette.GOLD_COLOR} size={55} onClick={onClick} className="arrow right"  />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="button"> 
      <BsChevronLeft fill={palette.GOLD_COLOR} size={55} onClick={onClick} className="arrow left" />
    </div>
  );
}

const About = () => {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 765);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 765);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  const size = isDesktop ? 85 : 55

  const Section = styled.section`
    font-family: Ayuthaya;
    width: 63%;
    margin: 13em auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: left;
    letter-spacing: 0.02em;
    z-index: 3;
    @media ${palette.device.tablet} { 
      width: 80%;
      margin: 8em auto;
    }
  `
  
  const settings = {
    dots: false,
    infinite: true,
    arrows: true,
    autoplay: false,
    speed: 850,
    slidesToShow: isDesktop ? 6 : 2,
    slidesToScroll: isDesktop ? 6 : 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
    <Section>
      <Fade bottom duration={palette.DURATION} delay={palette.SCROLL_DELAY}>
        <SectionAbout>
          <Wrapper>
            <Header>About me</Header>
            <Line />
          </Wrapper>
          <Desc>
            I`m a full stack developer with a passion for building outstanding digital experiences. I design, build and improve web applications.
            I`m currently pursuing a Bsc Degree in Computer Science at Birkbeck (University of London), with evening attendence. Expected graduation in 2023.
          </Desc>
          <Wrapper>
            <Header>Skills</Header>
            <Line />
          </Wrapper>
        </SectionAbout>
        <SliderWrapper>
          <Slider {...settings}>
            <IconWrapper style={{display: "flex"}}>
                <AiFillHtml5 fill={palette.GOLD_COLOR} size={size} className="skillIcon" />
                <br></br>
                <span>HTML</span>
            </IconWrapper>
            <IconWrapper>
                <IoLogoCss3 fill={palette.GOLD_COLOR} size={size} className="skillIcon" />
                <br></br>
                <span>CSS</span>
            </IconWrapper>
            <IconWrapper>
                <DiSass fill={palette.GOLD_COLOR} size={size} className="skillIcon" />
                <br></br>
                <span>SASS</span>
            </IconWrapper><IconWrapper>
                <SiTailwindcss fill={palette.GOLD_COLOR} size={size} className="skillIcon" />
                <br></br>
                <span>Tailwind CSS</span>
            </IconWrapper>
            <IconWrapper>
                <DiJavascript fill={palette.GOLD_COLOR} size={size} className="skillIcon" />
                <br></br>
                <span>JavaScript</span>
            </IconWrapper>
            <IconWrapper>
                <SiStyledcomponents fill={palette.GOLD_COLOR} size={size} className="skillIcon" />
                <br></br>
                <span>Styled Comp.</span>
            </IconWrapper>
            <IconWrapper>
                <DiReact fill={palette.GOLD_COLOR} size={size} className="skillIcon" />
                <br></br>
                <span>React</span>
            </IconWrapper>
            <IconWrapper>
                <NextJs fill={palette.GOLD_COLOR} size={size+10}/>
                <br></br>
                <span>Next Js</span>
            </IconWrapper>
            <IconWrapper>
                <DiJava fill={palette.GOLD_COLOR} size={size} className="skillIcon" />
                <br></br>
                <span>Java</span>
            </IconWrapper>
            <IconWrapper>
                <DiPython fill={palette.GOLD_COLOR} size={size} className="skillIcon" />
                <br></br>
                <span>Python</span>
            </IconWrapper>
            <IconWrapper>
                <SiPhp fill={palette.GOLD_COLOR} size={size} className="skillIcon" />
                <br></br>
                <span>PHP</span>
            </IconWrapper>
            <IconWrapper>
                <DiNodejsSmall fill={palette.GOLD_COLOR} size={size} className="skillIcon" />
                <br></br>
                <span>Node Js</span>
            </IconWrapper>
            <IconWrapper>
                <SiMysql fill={palette.GOLD_COLOR} size={size} className="skillIcon" />
                <br></br>
                <span>MySql</span>
            </IconWrapper>
            <IconWrapper>
                <DiMongodb fill={palette.GOLD_COLOR} size={size} className="skillIcon" />
                <br></br>
                <span>MongoDB</span>
            </IconWrapper>
            <IconWrapper>
                <AiFillGithub fill={palette.GOLD_COLOR} size={size} className="skillIcon" />
                <br></br>
                <span>Git</span>
            </IconWrapper>
            <IconWrapper>
                <SiAdobexd fill={palette.GOLD_COLOR} size={size} className="skillIcon" />
                <br></br>
                <span>Adobe XD</span>
            </IconWrapper>
            <IconWrapper>
                <SiAdobephotoshop fill={palette.GOLD_COLOR} size={size} className="skillIcon" />
                <br></br>
                <span>Photoshop</span>
            </IconWrapper>
            <IconWrapper>
                <SiAdobeillustrator fill={palette.GOLD_COLOR} size={size} className="skillIcon" />
                <br></br>
                <span>Illustrator</span>
            </IconWrapper>
            <IconWrapper>
                <FaFigma fill={palette.GOLD_COLOR} size={size} className="skillIcon" />
                <br></br>
                <span>Figma</span>
            </IconWrapper>
          </Slider>
        </SliderWrapper>
      </Fade>
    </Section>
  )
}

export default About