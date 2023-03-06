import React from 'react'
import Navbar from '../Navbar/Navbar';
import OfferBanner from '../OfferBanner/OfferBanner';
import "./AboutHeroSection.scss";
const AboutHeroSection = () => {
  return (
      <div className='aboutHeroSection'>
          <div className="container">
              
          <OfferBanner />
          <Navbar />
              
          <span className='abtTitle' >
              ABOUT LOGITECH
              </span>
          </div>
    </div>
  )
}

export default AboutHeroSection