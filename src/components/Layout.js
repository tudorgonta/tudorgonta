import Home from './sections/home/Home'
import Navbar from './navbar/top/Navbar'
import About from './sections/about/About'
import Work from './sections/work/Work'
import Contact from './sections/contact/Contact'
import NavbarBot from './navbar/bot/NavbarBot'

const Layout = () => {
  return (
    <>
        <Navbar />
        <NavbarBot />
        <Home />
        <About />
        <Work />
        <Contact />
    </>
  )
}

export default Layout