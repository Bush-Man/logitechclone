import React from 'react'
import { Link } from 'react-router-dom';
import "./Footer.scss";
const Footer = () => {
  return (
      <div className='footer'>
          <div className="container">
              
          <div className="top">
              <div className="item">
                  <h1>ABOUT</h1>
                  <span><Link to="/about/ourstory" className='links'>
                      Logitech Story
                      </Link> </span>
                      
                      <span>
                          <Link to="/about/careers" className='links'>Careers</Link>
                  </span>
                  <span>Investors</span>
                  <span>Blog</span>
                  <span>Press</span>
                  <span>Contact Us</span>


              </div>
              
               <div className="item">
                  <h1>VALUES</h1>
                  <span>Social Impact</span>
                  <span>Sustainability</span>
                  <span>Recycling</span>
                  <span>Accessibility</span>
                  
              </div>
              <div className="item">
                  <h1>PARTNERS</h1>
                  <span>Affiliate Proggram</span>
                  <span>Influencers</span>
                  

              </div>
               <div className="item">
                  <h1>CUSTOMERS</h1>
                  <span>Return Policy</span>
                  <span>Email Preferences</span>
                  <span>Student Discount</span>
                  
              </div>
              </div>
              <hr style={{border:"none",borderBottom:"1px solid grey"}}/>
          <div className="bottom">
              <div className="socialIcons">
                  <span>fb</span>
                  <span>tw</span>
                  <span>ig</span>
              </div>
              <div className="newsLetter">
                  <div className='letterCont'>
                      <input type="email" name="" id="" placeholder='ENTER EMAIL ADDRESS'/>
                      <span>{'>'}</span>
                  </div>
                  <div className='checkBoxCont'>
                      <input type="checkbox" name="" id="" />
                      <p>Yes, I want to receive news and product emails. Read <br />our privacy policy.</p>
                  </div>
              </div>
              </div>
              <div className="copyRightCont">
                  <div className='center'>
                  <div style={{paddingRight:"10px"}}>
                      ©2023 Logitech. All rights reserved
                  </div>
                      <span>
                          Terms of Use

                      </span>
                      <span>|</span>
                      <span>
                          Web Privacy Policy

                      </span>
                      <span>|</span>
                      <span>
                          Product Privacy Policy

                      </span>
                      <span>|</span>
                      <span>
                          Cookie Settings

                      </span>
                      <span>|</span>
                      <span>
                          Sitemap
                      </span>
                      
                  </div>
                  <div>
                      United States
                  </div>
                  
              </div>
          </div>
    </div>
  )
}

export default Footer