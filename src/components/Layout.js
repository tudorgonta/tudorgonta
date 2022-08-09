import Home from './sections/home/Home'
import Navbar from './navbar/top/Navbar'
import About from './sections/about/About'
import Work from './sections/work/Work'
import Contact from './sections/contact/Contact'
import NavbarBot from './navbar/bot/NavbarBot'
import BgLogo from '../svg/BgLogo'

import styled from "styled-components"

const BgContainer =styled.div`
  position: absolute;
  right: -33em;
  bottom: 0;
`

const Layout = () => {
  return (
    <>
        <Navbar />
        <BgContainer>
          <BgLogo />
        </BgContainer>
        <NavbarBot />
        <Home />
        <About />
        <Work />
        <Contact />
    </>
  )
}

export default Layout