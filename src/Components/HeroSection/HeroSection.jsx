import React, { useState } from 'react'
import HeroInfo from '../HeroInfo/HeroInfo.jsx';
import Navbar from '../Navbar/Navbar.jsx';
import "./HeroSection.scss";
const HeroSection = () => {
  const [render, setRender] = useState();
  const [modalOpen, setModalOpen] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  return (
      <div className="heroSection">
          <div className="container">
           <Navbar setRender={setRender} setModalOpen={setModalOpen} setIsHovering={setIsHovering}/>
           {isHovering || modalOpen? render : <HeroInfo />}
          </div>
    </div>
  )
}

export default HeroSection