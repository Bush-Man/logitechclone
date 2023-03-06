import React, { useState } from 'react'
import "./Navbar.scss";
import Shop from '../Shop/Shop';
import Learn from '../Learn/Learn';
import { Link } from 'react-router-dom';

const Navbar = ({ location, setRender,setModalOpen,setIsHovering }) => {
   // const [current, setCurrent] = useState(false);

    const handleMouseLeave = () => {    
        
        setModalOpen(false);
       setTimeout(() => setIsHovering(false), 6000);
        
    }
    const handleMouseLeave2 = () => {  
        
        setModalOpen(false);
         setTimeout(() => setIsHovering(false), 6000);
    }
     const  handleMouseEnter2 = () => {
        setIsHovering(true);
        setModalOpen(true);
         setRender(<Learn setIsHovering={setIsHovering} setModalOpen={setModalOpen} />);
        // setCurrent(true);
           
     }

    const  handleMouseEnter = () => {
        setIsHovering(true);
        setModalOpen(true);
        setRender(<Shop setIsHovering={setIsHovering} setModalOpen={setModalOpen} />);
       // setCurrent(true);
           
    }

  return (
      <div className="navBar">
          <div className="logo">
              <Link className='links' to="/">
              <h1>Logitech</h1>
              </Link>
          </div> 
          <div className="navLinks">
              <span onMouseLeave={handleMouseLeave}
                  onMouseEnter={handleMouseEnter}
              >SHOP</span>
              <span onMouseLeave={handleMouseLeave2}
                  onMouseEnter={handleMouseEnter2}>LEARN</span>
              <span>BUSINESS</span>
              <span>SUPPORT</span>
     
          </div>
         {location !== "careers" && <div className="navIcons">
              <span>s</span>
              <span>p</span>
              <span>c</span>

          </div>}
    </div>
  )
}

export default Navbar