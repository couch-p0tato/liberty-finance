import React from 'react'
import MiniHero from '../components/MiniHero'
import MoreServices from '../components/MoreServices'
import ChooseUs from '../components/ChooseUs'
import CallToAction from '../components/CallToAction'

const ServicesPage = () => {
  return (
    <div>
        <MiniHero name="Services" />
        <MoreServices />
        <CallToAction />
        <ChooseUs />
    </div>
  )
}

export default ServicesPage