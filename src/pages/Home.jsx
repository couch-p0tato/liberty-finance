import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Affairs from '../components/Affairs'
import CallToAction from '../components/CallToAction'
import Choose from '../components/Choose'

const Home = () => {
  return (
    <div>
        <Hero />
        <About />
        <Services />
        <Affairs />

        <CallToAction />

        <Choose />
    </div>
  )
}

export default Home