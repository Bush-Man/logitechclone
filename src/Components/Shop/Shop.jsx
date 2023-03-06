import React, { useEffect, useState } from 'react'
import './Shop.scss'
import img1 from "../../assets/img/shop-business-mice-keyboards.webp"
import img2 from '../../assets/img/shop-products-headsets-webcams.webp'
import img3 from '../../assets/img/shop-products-accessories.webp'
import img4 from '../../assets/img/shop-products-streaming-2.webp'
import img5 from '../../assets/img/shop-products-speakers-smart-home.webp'
import img6 from '../../assets/img/shop-business-video-conferencing.webp'
import img7 from '../../assets/img/nav-promo-mx-770x268.webp'
import img8 from "../../assets/img/shop-business-meeting-room-feature.webp"
const Shop = ({setIsHovering,setModalOpen}) => { 
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
                  <span className={selected === "products"? "selected" : ""} onClick={() => { setSelected("products")}}>PRODUCTS</span>
                  <span className={selected === "business"? "selected" : ""}  onClick={() => { setSelected("business")}}>FOR BUSINESS </span>
                  <span> FOR CREATORS</span>
              </div> 
              <div className="rightBarShop">
                  {view}
             </div>
              
          </div>        
    </div>
  )
}

export default Shop


//Electronics products
const Products = () => {
    return (
        <div className="electronics">
            <div className="elecCont">
                <div className="left">

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
                    <img src={img2} alt="" />
                    <h1>HEADSETS & WEBCAMS</h1>
                    <div className="itemInfo">
                        <span>Mice</span>
                        <span>Keyboards</span>
                        <span>Combos</span>
                        <span>Ipad Keyboards</span>
                        <span>Tablet Keyboards</span>

                    </div>
                </div>
                <div className="item">
                    <img src={img3} alt="" />
                    <h1>STREAMING</h1>
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
                    <img src={img5} alt="" />
                       <h1>SPEAKERS & SMART HOME</h1>
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
                <div className="right">
                     <div className="rightBarList">
                  <div className='vLine'></div>
                  <h1>FEATURED</h1>
                  <div className="items">
                      <span> MX Master Series</span>
                      <span>Business Products</span>
                      <span>Logitech for Creators</span>
                      <span>Education Products</span>
                      <span>Ergo Products</span>
                      <span>Workspace Configurator</span>
                      <span>Special Offers</span>
                  </div>
                  </div>
                </div>
             </div>
                <div className="promo">
                      <div className='text'>
                          <span>EXPLORE</span>
                          <span>The MX Master Series</span>
                      </div>
                      <img src={img7} alt="" />
                      <span className='exp'>START EXPLORING {'>'}</span>
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