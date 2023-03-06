import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SliderGrids.scss"
const SliderGrids = ({children,slidesToScroll,slidesToShow})=> {
  
  const settings = {
    //dots: true,
    infinite: true,
   //speed: 500,
    slidesToShow,
    slidesToScroll,
    autoplay: true,
  }
  return (
     <div className="sliderGrids">
      <div className="container">
        <Slider {...settings} className="slider" >
        
        {children}
      
        </Slider>
         </div>
         </div>
      
    );
}
  export default SliderGrids
