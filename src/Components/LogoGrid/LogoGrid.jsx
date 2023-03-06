import React from 'react'
import "./LogoGrid.scss"
const LogoGrid = ({data}) => {
  return (
      <div className='logoGrid'>
          <div className="columns">
              <div className='column1'>
                  <img src={data.image1} alt="" />
                  <img src={data.image2} alt="" />
              </div>
              <div className='column2'>
                  <img src={data.image3} alt="" />
                  
              </div>
          </div>
    </div>
  )
}

export default LogoGrid