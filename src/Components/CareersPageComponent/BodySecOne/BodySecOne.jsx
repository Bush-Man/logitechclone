import React from 'react'
import "./BodySecOne.scss";
import img1 from "../../../assets/img/T0B3629.jpg"
import img2 from "../../../assets/img/DSC_7125.jpg"
import img3 from "../../../assets/img/DSC_7103.jpg"
import img4 from '../../../assets/img/DSC_7053.jpg'
const BodySecOne = () => {
  return (
      <div className='bodySecOne'>
          <div className="container">
              <div className="contTop">
                  <img src={img1} alt="" />
                  <img src={img2} alt="" />
                  <img src={img3} alt="" />
                  <img src={img4} alt="" />
              </div>
              <div className="contBottom">
                  <div className='item'>
                      <h1><span></span>  DIVERSITY & INCLUSION</h1>
                      <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quasi, saepe facilis sunt, ab dolores, laudantium reiciendis porro sed repellendus excepturi quo tempora quaerat doloremque odit eos praesentium! Saepe, beatae.
                          <br />
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis magni voluptas ducimus, voluptatem commodi nesciunt. Soluta blanditiis enim nesciunt quis, laboriosam laudantium hic! Ullam ut quaerat molestiae quae voluptatibus at!
                      </p>
                      
                  </div>
                   <div className='item'>
                      <h1><span></span> LEARNING AND DEVELOPMENT</h1>
                      <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quasi, saepe facilis sunt, ab dolores, laudantium reiciendis porro sed repellendus excepturi quo tempora quaerat doloremque odit eos praesentium! Saepe, beatae.
                      </p>
                      
                  </div>
                   <div className='item'>
                      <h1> <span></span> LOGITECH CARES</h1>
                      <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quasi, saepe facilis sunt, ab dolores, laudantium reiciendis porro sed repellendus excepturi quo tempora quaerat doloremque odit eos praesentium! Saepe, beatae.
                          
                      </p>
                      
                  </div>
                   <div className='item'>
                      <h1> <span></span> BENEFITS</h1>
                      <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quasi, saepe facilis sunt, ab dolores, laudantium reiciendis porro sed repellendus excepturi quo tempora quaerat doloremque odit eos praesentium! Saepe, beatae.
                          
                     </p>
                      
                  </div>
                  
                  <hr style={{ margin: "1rem 0rem" }} />
                  <ul className='itemLists'>
                      <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime, mollitia.</li>
                      <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime, mollitia.</li>
                      <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime, mollitia.</li>
                      <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime, mollitia.</li>
                      <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime, mollitia.</li>
                      <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime, mollitia.</li>
                      <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime, mollitia.</li>
                      <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime, mollitia.</li>
                      <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime, mollitia.</li>
                      <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime, mollitia.</li>
                      <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime, mollitia.</li>
                      <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime, mollitia.</li>
                      <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime, mollitia.</li>
                  </ul>
                  <div className="item">
                      <h1><span></span>LEARN MORE OF #LOGILIFE</h1>
                      <div className='social'>
                          <span>facbook</span>
                          <span>instagram</span>
                          <span>twitter</span>
                          <span>pinterest</span>

                      </div>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default BodySecOne