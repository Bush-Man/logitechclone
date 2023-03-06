import React from 'react'
import "./SubHero.scss"
import img1 from '../../../assets/img/video-still-life.jpg'
const SubHero = () => {
  return (
      <div className='subHero'>
          <div className="container">
              <div className='subHeroInfo'>
                  
              <h1>LIFE AT LOGITECH</h1>
              <p>As a company, we're just the right size for every person to take initiative and make things happen. And we're big enough in our portfolio for those actions to have a global impact. That's a pretty sweet spot to be in and we're always striving to keep it that way.
                  
              </p>
              <div>
                  <img src={img1} alt="" />

              </div>
              <p>Logitech couldn't be more proud to announce that we were voted one of Forbes's Most Female Friendly Companies!
                  
              </p>
              <button>CHECK OUT THE ARTICLE</button>
              </div>
          </div>
    </div>
  )
}

export default SubHero