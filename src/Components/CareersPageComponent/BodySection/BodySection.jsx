import React from 'react'
import "./BodySection.scss"
import BodySecOne from '../BodySecOne/BodySecOne'
import BodySecTwo from '../BodySecTwo/BodySecTwo'
import BodySecThree from '../BodySecThree/BodySecThree'
import CareerFooter from '../CareerFooter/CareerFooter'
const BodySection = () => {
  return (
      <div className='bodySection'>
        <div className="container">
              
        <BodySecOne />
        <BodySecTwo />
        <BodySecThree />
        <CareerFooter />
        </div>
    </div>
  )
}

export default BodySection