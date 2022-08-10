import Home from './sections/home/Home'
import Navbar from './navbar/top/Navbar'
import About from './sections/about/About'
import Work from './sections/work/Work'
import Contact from './sections/contact/Contact'
import NavbarBot from './navbar/bot/NavbarBot'
import BgLogo from '../svg/BgLogo'

import styled from "styled-components"

const BgContainer =styled.div`
  position: fixed;
  right: -33em;
  bottom: 0;
  z-index: -1;
`
const Div = styled.div`
  opacity: 0;
`
const DivAbout = styled.div`
  opacity: 0;
`
const DivWork = styled.div`
  opacity: 0;
`
const DivContact = styled.div`
  opacity: 0;
`
const Layout = () => {
  return (
    <>
        <Div id="home">.</Div>
        <Navbar />
        <NavbarBot />
        <Home />
        <DivAbout id="about">.</DivAbout>
        <About />
        <DivWork id="work">.</DivWork>
        <Work />
        <DivContact id="contact">.</DivContact>
        <Contact />
        <BgContainer>
          <BgLogo />
        </BgContainer>
    </>
  )
}

export default Layout