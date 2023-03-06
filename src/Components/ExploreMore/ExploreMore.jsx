import React from 'react'
import "./ExploreMore.scss"

const ExploreMore = ({data}) => {
    return (
         
        <div className='exploreMore'>
            <img src={data.image} alt="" />
            <div className="postInfo">
                <h1>{data.title}</h1>
                <p>{data.desc.substring(0,75)}</p>
                <span>
                    <span>{data.text} </span>{'>'}</span>
            </div>
     </div>
  )
}

export default ExploreMore