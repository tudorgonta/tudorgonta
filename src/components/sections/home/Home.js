import styled from "styled-components"
import * as palette from '../../../styleVariables';

const Hero = styled.section`
  font-family: Ayuthaya;
  width: 50%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: left;
  margin: 13em auto;
  z-index: 2;
  letter-spacing: 0.02em;
`
const Head = styled.div`
 font-size: 4.65em;
`
const First = styled.div`

`
const Last = styled.div`
  margin-left: 0.8em;
  margin-bottom: 0.1em;
`
const SubHead = styled.div`
  margin-bottom: 5%;
  opacity: 50%;
`
const Desc = styled.p`
  width: 80%;
  opacity: 80%;
`
const Button = styled.a`
  margin-top: 5%;
  width: 24%;
  font-size: 1em;
  border: 1.4px solid ${palette.GOLD_COLOR};
  border-radius: 0.2em;
  padding: 0.9em 1.7em;
  cursor: pointer;
  line-height: 1;
  text-decoration: none;
  transition: all 0.21s cubic-bezier(0.645,0.045,0.355,1);

  &:hover {
    background-color: ${palette.CONTAINER_COLOR};
    outline: none;
  }
`
const Home = () => {
  return (
    <>
    <Hero>
      <Head>
        <First>Tudor</First>
        <Last>Gonta</Last>
      </Head>
      <SubHead>Welcome to my corner of the internet.</SubHead>
      <Desc>I`m a full stack developer with a passion for building outstanding digital experiences. I design, build and improve web applications.</Desc>
      <Button href="#work">Check out my work!</Button>
    </Hero>
    </>
  )
}

export default Home