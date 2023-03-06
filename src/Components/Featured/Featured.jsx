import React from 'react'
import "./Featured.scss";
import img1 from "../../assets/img/mk470-slim-combo-feature.webp";
import img2 from "../../assets/img/k580-slim-multi-device-wireless-kb-feature.webp";
import img3 from "../../assets/img/hpb-crayon.webp";
const Featured = () => {
  return (
      <div className="featured">
          <div className="container">
              
              <div className="item">
                  <img src={img1} alt="" />
              
              <div className="itemBody">
                  <h1>OWN YOUR SPACE</h1>
                  <p>MK470 Slim Keyboard Mouse Combo</p>
                  <span className="itemLink">
                      <h1>DISCOVER MK470</h1>
                      <h3>{'>'}</h3>
                  </span>
                  </div>
                  
              </div>

               <div className="item">
                  <img src={img2} alt="" />
              
              <div className="itemBody">
                  <h1>OWN YOUR SPACE</h1>
                  <p>K580 Slim Multi-Device Wireless Keyboard</p>
                  <span className="itemLink">
                      <h1>DISCOVER K580</h1>
                      <h3>{'>'}</h3>
                  </span>
                  </div>
                  
              </div>
              <div className="item">
                  <img src={img3} alt="" />
              
              <div className="itemBody">
                  <h1>DISCOVER WHAT'S POSSIBLE</h1>
                      <p>
                          Sketch, write and annotate with Logitech Crayon for iPad, powered by Apple Pencil® technology.
                  </p>
                  <span className="itemLink">
                      <h1>DISCOVER LOGITECH CRAYON</h1>
                      <h3>{'>'}</h3>
                  </span>
                  </div>
                  
              </div>
              
          </div>
          </div>
  )
}

export default Featured