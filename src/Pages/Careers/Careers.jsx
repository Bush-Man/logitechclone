import React from 'react'
import BodySection from '../../Components/CareersPageComponent/BodySection/BodySection';
import CareerHeroSection from '../../Components/CareersPageComponent/CareerHeroSection/CareerHeroSection';
import SubHero from '../../Components/CareersPageComponent/SubHero/SubHero';
import "./Careers.scss";
const Careers = () => {
  return (
      <div className='careers'>
          <CareerHeroSection /> 
          <SubHero />
          <BodySection />
    </div>
  )
}

export default Careers