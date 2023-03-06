import React from 'react';
import AboutHeroSection from '../../Components/AboutHeroSection/AboutHeroSection';
import Footer from "../../Components/Footer/Footer.jsx";
import "./About.scss";
import img1 from "../../assets/img/bic-ergo-lab.webp";
import img2 from "../../assets/img/bic-lift-design.webp";
import img3 from "../../assets/img/cork-office-building.webp";
import img4 from "../../assets/img/logi-employees-group-photo.webp";
import img5 from "../../assets/img/about-wendy-becker.webp";
import img6 from "../../assets/img/about-bracken-darrell.webp";
import img7 from "../../assets/img/about-chuck-boynton.webp";
import img8 from "../../assets/img/photo-of-three-founders.webp";
import img9 from "../../assets/img/about-logi.webp";
import img10 from "../../assets/img/about-design-awards.webp";
import img11 from "../../assets/img/sustainable-design-g-pro-boxshot.webp";
import ExploreMoreParentComp from '../../Components/ExploreMoreParentComp/ExploreMoreParentComp';
const About = () => {
  return (
      <div className='about'>
          <AboutHeroSection />
           {/* -------------------------------------------------*/}
          <div className='abtStory'>
              <h1>OUR STORY</h1>
              <div className="storyCont">
                   <p>
                  A Swiss company focused on innovation and quality, Logitech designs products and experiences that have an everyday place in people's lives. For more than 40 years, we have expanded both our expertise in product design and our global reach. Our products focus on how customers connect and interact with the digital world. We keep design at the center of everything we create, in every team and every discipline, to create truly unique and meaningful experiences.
                      <br />
                      <br />
With products sold in almost every country in the world, Logitech designs products that help businesses thrive and bring people together through music, gaming, streaming, video and computing. Brands of Logitech include Logitech, Logitech G, ASTRO Gaming, Ultimate Ears, Jaybird, Blue Microphones, and Streamlabs.
             </p>
             </div>
          </div>
           {/* -------------------------------------------------*/}
          <div className="abtImages">
              <div className="container">
                  <img src={img1} alt="" srcset="" />
                  <img src={img2} alt="" srcset="" />
                  <img src={img3} alt="" srcset="" />
                  <img src={img4} alt="" srcset="" />
              </div>
          </div>
           {/* -------------------------------------------------*/}
          <div className="leaderShipTeam">
              <h1>MEET OUR LEADERSHIP TEAM</h1>
              <div className='groups'>
                  <span>BOARD OF DIRECTORS  <span>{">"}</span>   </span>
                  <span>GROUP MANAGEMENT TEAM  <span>{">"}</span>     </span>
              </div>
              <div>
                  {/* -------------------------------------------------*/}
                  <div className="leaderImages">
                      <div className='leader'>
                          <img src={img5} alt="" />
                          <div className='names'>
                              <span>Wendy Beckers </span>
                              <span>Chairperson   </span> 
                          </div>
                      </div>
                      <div className='leader'>
                          <img src={img6} alt="" />
                          <div className='names'>
                              <span>Bracken P. Darrell</span>
                              <span>President and Chief Executive Officer</span>
                          </div>
                      </div>
                      <div className='leader'>
                          <img src={img7} alt="" />
                          <div className='names'>
                              <span>Chuck Boynton</span>
                              <span>Chief Financial Officer</span>
                          </div>
                      </div>
                  </div>
                   
              </div>
          </div>
          {/* -------------------------------------------------*/}
          <div className="historySection">
              <div className="container">
                  
                  <div className="item">
                      <img src={img8} alt="" />
                      <div className='itemInfo'>
                          
                          <h1>OUR HISTORY</h1>
                              
                          <p>
                              Founded in 1981 in Lausanne, Switzerland, and quickly expanding to Silicon Valley, Logitech started connecting people through innovative computer peripherals and many industry firsts, including the infrared cordless mouse, the thumb-operated trackball, the laser mouse, and more. We honor bold innovation and our founders, Pierluigi Zappacosta, Giacomo Marini and Daniel Borel, Chairman Emeritus.
                          </p>
                          
                          
                      </div>
                  </div>

                  <div className="item">
                      <img src={img9} alt="" />
                      <div className='itemInfo'>
                          <h1>CAREERS</h1>
                          <p>
                            We are the sweet spot for people who are passionate about product, making a mark and having fun doing it.
                          </p>
                          <button className='itemBtn'>LOGITECH JOBS</button>
                      </div>
                  </div>

                  <div className="item">
                      <img src={img10} alt="" />
                      <div className='itemInfo'>
                          <h1>DESIGN AWARDS</h1>
                          <p>
                              We keep design at the center of every team and every discipline, to create truly unique and meaningful experiences.
                          </p>
                           <button className='itemBtn'>PRODUCT AWARDS</button>
                      </div>
                  </div>

                  <div className="item">
                      <img src={img11} alt="" />
                      <div className='itemInfo'>
                          <h1>SUSTAINABILITY</h1>
                          <p>
                             At Logitech, sustainability is not a buzzword or an afterthought. It’s a mindful principle we infuse into everything we do.
                          </p>
                          <button className='itemBtn'>SUSTAINABLE DESIGN</button>
                      </div>
                  </div>

              </div>
          </div>
          {/*------------------------------------------------------------------------------------- */}
          <ExploreMoreParentComp />
          {/*------------------------------------------------------------------------------------- */}
          <Footer />
    </div>
  )
}

export default About