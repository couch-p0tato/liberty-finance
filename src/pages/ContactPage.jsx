import React from 'react'
import MiniHero from '../components/MiniHero'
import Contact from '../components/Contact'
import ContactInfo from '../components/ContactInfo'

const ContactPage = () => {
  return (
    <div>
        <MiniHero name="Contact Us" />
        <ContactInfo />
        <Contact />
    </div>
  )
}

export default ContactPage