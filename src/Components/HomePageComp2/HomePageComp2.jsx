import React from 'react'
import './HomePageComp2.scss'
import img1 from "../../assets/img/unnamed-2.webp"
import img2 from "../../assets/img/Ingram-Image.webp"
import img3 from "../../assets/img/mzinterop-1.webp"
const HomePageComp2 = () => {
  return (
      <div className='homePageComp2'>
          <div className="container">
              <div className="item">
                  <img src={img1} alt="" />
                  <h1>Lorem ipsum dolor sit amet.</h1>
              </div>
              <div className="item">
                  <img src={img2} alt="" />
                  <h1>Lorem ipsum dolor sit amet  ipsum dolor sit amet</h1>
              </div>
              <div className="item">
                  <img src={img3} alt="" />
                  <h1>Lorem ipsum dolor sit amet.</h1>
              </div>
          </div>
    </div>
  )
}

export default HomePageComp2