import React, { useEffect, useState } from 'react'
import './Learn.scss'
import img1 from "../../assets/img/shop-business-mice-keyboards.webp"
import img4 from '../../assets/img/shop-products-streaming-2.webp'
import img6 from '../../assets/img/shop-business-video-conferencing.webp'
import img8 from "../../assets/img/shop-business-meeting-room-feature.webp"
import img9 from '../../assets/img/learn-stories-defy-logic-feature-us.webp'
const Learn = ({setIsHovering,setModalOpen}) => { 
   //const products = false;
   // const [product, setProduct] = useState(true);
    //const [business, setBusiness] = useState(false);
    const [selected, setSelected] = useState("products");
    const [view,setView] = useState(<Products />)
    
    const handleMouseIn = () => {
        setModalOpen(true);
        setIsHovering(true);
    }
    const handleMouseOt = () => {
        setModalOpen(false);
        setIsHovering(false)
        
    }

    useEffect(() => {
        if(selected === "products") {
                 
            setView(<Products />);
        }else{
            setView(<Business/>);
         }
                 
    },[selected])
  return (
      <div className='shop'onMouseEnter={handleMouseIn} onMouseLeave={handleMouseOt}>
          <div className="containerShop">
              <div className="leftBarShop">
                  <span className={selected === "products"? "selected" : ""} onClick={() => { setSelected("products")}}>LOGI STORIES</span>
                  <span className={selected === "business"? "selected" : ""}  onClick={() => { setSelected("business")}}>TECHNOLOGIES</span>
                  <span>ABOUT US</span>
                  <span>OUR BRANDS</span>
              </div> 
              <div className="rightBarShop">
                  {view}
             </div>
              
          </div>        
    </div>
  )
}

export default Learn


//Electronics products
const Products = () => {
    return (
        <div className="electronics">
            <div className="elecCont">
                <div className="left">

                <div className="item">
                   
                    <h1>FOR EDUCATION</h1>
                    <div className="itemInfo">
                        <span>Teaching from Home</span>
                        <span>Learning from Home</span>
                        <span>Hybrid Learning</span>
                        <span>Education Center</span>
                        
                    </div>
                </div>
                <div className="item">
                   <h1> ERGONOMICS</h1>
                    <div className="itemInfo">
                        <span>Healthy Computing</span>
                        <span>Ergo Lab</span>
                        <span>Wellbeing Tips  </span>

                    </div>
                    </div>
                    




                <div className="item">
                    <h1>FOR CREATORS</h1>
                    <div className="itemInfo">
                        <span>Logitech for Creators</span>
                        <span>Streaming</span>
                        <span>Professional Streamers</span>
                        <span>Advanced Capture Techniques</span>
                                           
                        </div>
                    </div>

                <div className="item">
                    
                      <h1>PRODUCTIVITY</h1>
                    <div className="itemInfo">
                        <span>Working from Home</span>
                        <span>MX Master Series</span>
                        <span>MX for Creativity</span>
                        <span>MX for Coding</span>
                    </div>
                </div>
                <div className="item">



                    <h1> COMPATIBILITY</h1>
                    <div className="itemInfo">
                        <span>For Mac</span>
                        <span>For iPad</span>
                        <span>For Chromebook</span>
                        

                    </div>
                </div>
                
                </div>
                <div className="right">
                    <div className='info'>
                  <div className='vLine'></div>

                  <div className='infoBody'>
                      <img src={img9} alt="" />
                      <p>
                          <span>
                              
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde necessitatibus culpa et atque eum, ipsam esse repellendus explicabo eligendi facilis! 
                          </span>
                              {'>'}
                      </p>
                  </div>
                  
              </div>
                </div>
             </div>
                
        </div>


    )
}

//Business component
const Business = () => {
    return (
        <div className="business">
            <div className="busCont">
                <div className="itemList">

                <div className="item">
                    <img src={img1} alt="" />
                    <h1>MICE & KEYBOARDS</h1>
                    <div className="itemInfo">
                        <span>Mice</span>
                        <span>Keyboards</span>
                        <span>Combos</span>
                        <span>Ipad Keyboards</span>
                        <span>Tablet Keyboards</span>

                    </div>
                </div>
                
                
                <div className="item">
                    <img src={img4} alt="" />
                      <h1>ACCESSORIES</h1>
                    <div className="itemInfo">
                        <span>Mice</span>
                        <span>Keyboards</span>
                        <span>Combos</span>
                        <span>Ipad Keyboards</span>
                        <span>Tablet Keyboards</span>

                    </div>
                </div>
                
                <div className="item">
                    <img src={img6} alt="" />
                    <h1>VIDEO CONFERENCING</h1>
                    <div className="itemInfo">
                        <span>Mice</span>
                        <span>Keyboards</span>
                        <span>Combos</span>
                        <span>Ipad Keyboards</span>
                        <span>Tablet Keyboards</span>

                    </div>
                </div>
                </div>
                <div className="infoCont">
                    <div className='info'>
                  <div className='vLineBs'></div>

                  <div className='bsBody'>
                      <img src={img8} alt="" />
                      <p>
                          <span>
                              
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde necessitatibus culpa et atque eum, ipsam esse repellendus explicabo eligendi facilis! 
                          </span>
                              {'>'}
                      </p>
                  </div>
                  
              </div>
                </div>
             </div>
        </div>


    )
}