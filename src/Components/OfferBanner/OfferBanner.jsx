import React,{useState} from 'react'
import "./OfferBanner.scss";

//import logitech from "../../assets/logitech.svg";
//import logitechg from "../../assets/logitechg.svg";
//import blue from "../../assets/blue.svg";
//import jaybird from "../../assets/jaybird.svg";
//import mevo from "../../assets/mevo.svg";
//import streamlabs from "../../assets/streamlabs.svg";
//import ultimateEars from "../../assets/ultimate-ears.svg";
//import astro from "../../assets/astro.svg";

const OfferBanner = () => {

    const [listOpen, setListOpen] = useState(false);
  return (
      <div className="offerBanner">
          <div className="container">
              
          <div className="input">
              <div className="brandTitle" onClick={()=>setListOpen(prev=>(!prev))}>
                  
                  
              <h1>Our Brands</h1>
              <span>v</span>
           
              </div>
              {listOpen && <div name="select" className="selectOptions">
                  <option value="">
                      Logitech
                  </option>
                  <option value="">
                      Logitech G
                  </option>
                  <option value="">
                      Astro
                  </option>
                  <option value="">
                      Blue
                  </option>
                  <option value="">
                      Stream Labs
                  </option>
                  <option value="">
                      Ultimate Ears
                  </option>
                  <option value="">
                      Jay Birds
                  </option>
                  <option value="">
                      Mevo
                  </option>
              </div>
              }
          </div>
          <div className="offerText">
              <h3>Free standard shipping on orders over $29.00.</h3>
          </div>
          <div className="countries">
              <h1>United States</h1>
          </div>
          </div>
    </div>
  )
}

export default OfferBanner