import React from 'react'
import "./CareerHeroSection.scss"
import Navbar from '../../Navbar/Navbar.jsx'
const CareerHeroSection = () => {
  return (
      <div className='careerHeroSection'>
          <div className="container">
              <Navbar location='careers' />

              <div className="heroInfo">
                  <h1>WE ARE LOGI</h1>
                  <p>We are the sweet spot for people who are passionate about product, making , a mark and having fun doing it.</p>
              <div className="btns">
                  <button>SIGN UP FOR JOB ALERTS</button>
                  <button>SEARCH OPENINGS</button>
              </div>
              </div>
          </div>
    </div>
  )
}

export default CareerHeroSection