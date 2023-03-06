import React from 'react'
import { exploreData } from '../../data';
import ExploreMore from '../ExploreMore/ExploreMore';
import "./ExploreMoreParentComp.scss"

const ExploreMoreParentComp = () => {
  return (
      <div className='exploreMoreParentComp'>
          
          <div className='card'>
              <h1>EXPLORE MORE</h1>
                  
            <div  className="container">
           {exploreData.map(item =>
            <ExploreMore key={item._id} data={item} />
            )}
            </div>
    </div>
    </div>
  )
}

export default ExploreMoreParentComp