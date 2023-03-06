import React from 'react'
import "./BodySecTwo.scss";
import img1 from "../../../assets/img/logo-black-logitech.png"
import img2 from '../../../assets/img/logo-black-logitech.png'
import img3 from '../../../assets/img/logo-color-jaybird.png'
import img4 from "../../../assets/img/logo-color-astro.png"
import img5 from "../../../assets/img/logo-color-streamlabs.png"
import img6 from "../../../assets/img/logo-color-blue.png"
import img7 from "../../../assets/img/logo-color-ultimate_ears.png"



const BodySecTwo = () => {
  return (
      <div className='bodySecTwo'>
          <div className="container">
              <p>To look at all our Logitech jobs or jobs within specific brands click below</p>
              <div className='logos'>
                  <img src={img1} alt="" />
                  <img src={img2} alt=""/>
                  <img src={img3} alt="" />
                  <img src={img4} alt="" />
                  <img src={img5} alt="" />
                  <img src={img6} alt="" />
                  <img src={img7} alt="" />
                              
              </div>
          </div>
    </div>
  )
}

export default BodySecTwo