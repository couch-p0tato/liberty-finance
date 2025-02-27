import React from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import About from './components/About'
import Services from './components/Services'
import Affairs from './components/Affairs'
import Contact from './components/Contact'
import CallToAction from './components/CallToAction'
import Choose from './components/Choose'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='px-4 sm:px-[1.5vw] lg:px-[2vw] main-font'>
      <Navbar />

      <Hero />

      <About />

      <Services />

      <Affairs />

      <Contact />

      {/* <CallToAction /> */}

      <Choose />

      <Footer />
    </div>
  )
}

export default App;