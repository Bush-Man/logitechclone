import React from 'react'
import "./Recommended.scss";
const Recommended = ({item}) => {
  return (
      <div className='recommended'>
          <div className="prodImg">
              <img src={item.image} alt=""/>
          </div>
          <div className="prodInfo">
              <h3>{item.title}</h3>
              <p>{item.desc.substring(0,30)}</p>
              <span>{item.price}</span>
          </div>
    </div>
  )
}

export default Recommended