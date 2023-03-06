import React from 'react'
import './AccessoriesGrid.scss'
const AccessoriesGrid = ({data}) => {
  return (
      <div className='accessoriesGrid'>
          
              <div className="columns">
                  <img src={data.image1} alt="" />
                  <img src={data.image2} alt="" />
                  <span>
                  <img src={data.image3} alt="" />
                  <img src={data.image4} alt="" />
                  </span>
             
          </div>
    </div>
  )
}

export default AccessoriesGrid