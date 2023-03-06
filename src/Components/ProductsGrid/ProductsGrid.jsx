import React from 'react'
import './ProductsGrid.scss';
const ProductsGrid = ({data}) => {
  return (
      <div className='prodGrid'>
      <div className="grid">
        <div className="column column1">
               <img src={data.image1} alt="" />
            <div className="row row1" >
            <img src={data.image2} alt="" /> 
            <img src={data.image3} alt="" />
            
              </div>
          </div>
             
            <div className="column column2 ">
               <img src={data.image4} alt="" />
               <img src={data.image5} alt="" />
            </div>
              
          </div>


    </div>
  )
}

export default ProductsGrid