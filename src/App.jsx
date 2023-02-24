import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Service from './components/service/Service'
import Portofolio from './components/portofolio/Portofolio'
import Testimoni from './components/testimoni/Testimoni'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Service />
      <Portofolio />
      <Testimoni />
      <Contact />
      <Footer />
    </>

  )
}

export default App