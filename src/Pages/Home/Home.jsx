import React from 'react'
import Featured from '../../Components/Featured/Featured.jsx';
import HeroSection from '../../Components/HeroSection/HeroSection.jsx';
import OfferBanner from '../../Components/OfferBanner/OfferBanner.jsx';
import SliderComp from '../../Components/SliderComp/SliderComp.jsx';
import SliderGrids from '../../Components/SliderGrids/SliderGrids.jsx';
import "./Home.scss";
import Recommended from '../../Components/Recommended/Recommended.jsx';
import { logoImages, recommendedProd } from '../../data.js';
import Footer from '../../Components/Footer/Footer.jsx';
import ProductsGrid from '../../Components/ProductsGrid/ProductsGrid.jsx';
import { gridData } from '../../data.js';
import { AccessoriesImages } from '../../data.js';
import AccessoriesGrid from '../../Components/AccessoriesGrid/AccessoriesGrid.jsx';
import LogoGrid from '../../Components/LogoGrid/LogoGrid.jsx';
import HomePageComp from '../../Components/HomePageComp/HomePageComp.jsx';
import HomePageComp2 from '../../Components/HomePageComp2/HomePageComp2.jsx';
const Home = () => {
  return (
      <div className="home">
      <OfferBanner />
      <HeroSection />
      <Featured />
      <div className='reccomend'>
       <h1>RECOMMENDED FOR YOU</h1>
      <SliderComp slidesToScroll={5} slidesToShow={5}>
        {recommendedProd.map(prod =>
        (  <Recommended item={prod} key={prod._id} />)
        )}
      </SliderComp>
      </div>   
      <div className='gridSliders'>
      
        <SliderGrids slidesToScroll={1} slidesToShow={1} >
      {gridData.map(grid =>
        (<ProductsGrid data={grid} key={grid._id}/>)
        )
      }
      {
        AccessoriesImages.map(imageData => (
          <AccessoriesGrid key={imageData._id} data={imageData}/>
        ))
      }
      {
        logoImages.map(dataImage => (
          <LogoGrid data={dataImage} key={dataImage._id} />
          ))
        }
     
        </SliderGrids>   
      </div>

      <HomePageComp />
      <HomePageComp2 />
      <Footer />
       
       
        
    </div>
  )
}

export default Home