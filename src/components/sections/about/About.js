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

const Section = styled.section`
  font-family: Ayuthaya;
  width: 68%;
  margin: 13em auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: left;
  letter-spacing: 0.02em;
  z-index: 3;
`
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 60%;
  transition: all 0.21s cubic-bezier(0.645,0.045,0.355,1);
  &:hover {
    opacity: 100%;
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
const size = 85

const About = () => {
  const settings = {
    dots: false,
    infinite: true,
    arrows: true,
    autoplay: false,
    speed: 850,
    slidesToShow: 6,
    slidesToScroll: 6,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
    <Section>
      <SectionAbout>
        <Wrapper>
          <Header>About me</Header>
          <Line />
        </Wrapper>
        <Desc>
          I`m a full stack developer with a passion for building outstanding digital experiences. I design, build and improve web applications.
          I`m currently pursuing a Computer Science degree at Birkbeck (University of London), with evening attendence. Expected graduation in 2023.
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
              <span>HTML</span>
          </IconWrapper>
          <IconWrapper>
              <IoLogoCss3 fill={palette.GOLD_COLOR} size={size} className="skillIcon" />
              <span>CSS</span>
          </IconWrapper>
          <IconWrapper>
              <DiSass fill={palette.GOLD_COLOR} size={size} className="skillIcon" />
              <span>SASS</span>
          </IconWrapper><IconWrapper>
              <SiTailwindcss fill={palette.GOLD_COLOR} size={size} className="skillIcon" />
              <span>Tailwind CSS</span>
          </IconWrapper>
          <IconWrapper>
              <DiJavascript fill={palette.GOLD_COLOR} size={size} className="skillIcon" />
              <span>JavaScript</span>
          </IconWrapper>
          <IconWrapper>
              <SiStyledcomponents fill={palette.GOLD_COLOR} size={size} className="skillIcon" />
              <span>Styled Comp.</span>
          </IconWrapper>
          <IconWrapper>
              <DiReact fill={palette.GOLD_COLOR} size={size} className="skillIcon" />
              <span>React</span>
          </IconWrapper>
          <IconWrapper>
              <DiJava fill={palette.GOLD_COLOR} size={size} className="skillIcon" />
              <span>Java</span>
          </IconWrapper>
          <IconWrapper>
              <DiPython fill={palette.GOLD_COLOR} size={size} className="skillIcon" />
              <span>Python</span>
          </IconWrapper>
          <IconWrapper>
              <SiPhp fill={palette.GOLD_COLOR} size={size} className="skillIcon" />
              <span>PHP</span>
          </IconWrapper>
          <IconWrapper>
              <DiNodejsSmall fill={palette.GOLD_COLOR} size={size} className="skillIcon" />
              <span>Node Js</span>
          </IconWrapper>
          <IconWrapper>
              <SiMysql fill={palette.GOLD_COLOR} size={size} className="skillIcon" />
              <span>MySql</span>
          </IconWrapper>
          <IconWrapper>
              <DiMongodb fill={palette.GOLD_COLOR} size={size} className="skillIcon" />
              <span>MongoDB</span>
          </IconWrapper>
          <IconWrapper>
              <NextJs fill={palette.GOLD_COLOR} size={size+10}/>
              <span>Next Js</span>
          </IconWrapper>
          <IconWrapper>
              <AiFillGithub fill={palette.GOLD_COLOR} size={size} className="skillIcon" />
              <span>Github</span>
          </IconWrapper>
          <IconWrapper>
              <SiAdobexd fill={palette.GOLD_COLOR} size={size} className="skillIcon" />
              <span>Adobe XD</span>
          </IconWrapper>
          <IconWrapper>
              <SiAdobephotoshop fill={palette.GOLD_COLOR} size={size} className="skillIcon" />
              <span>Photoshop</span>
          </IconWrapper>
          <IconWrapper>
              <SiAdobeillustrator fill={palette.GOLD_COLOR} size={size} className="skillIcon" />
              <span>Illustrator</span>
          </IconWrapper>
          <IconWrapper>
              <FaFigma fill={palette.GOLD_COLOR} size={size} className="skillIcon" />
              <span>Figma</span>
          </IconWrapper>
        </Slider>
      </SliderWrapper>
    </Section>
  )
}

export default About