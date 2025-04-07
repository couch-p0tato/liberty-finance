import React from 'react'
import MiniHero from '../components/MiniHero'
import Welcome from '../components/Welcome'
import ChooseUs from '../components/ChooseUs'
import Affairs from '../components/Affairs'
import Planning from '../components/Planning'
import CallToAction from '../components/CallToAction'

const AboutPage = () => {
  return (
    <div>
        <MiniHero name="About Us" />
        <Welcome />
        <ChooseUs />
        <CallToAction />
        <Affairs />
        <Planning />
    </div>
  )
}

export default AboutPage