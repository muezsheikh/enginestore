import React from 'react'
import { newArrivalsImgs } from '../../data/category'
import { Link } from 'react-router-dom'

const NewSection = () => {
  return (
    <div className='newSectionContainer'>
      {newArrivalsImgs.map((x, index) => (
        <div className='newArrivalImg' key={index}>
          <Link to={`/${x.collection}/${x.type}`}>
            <img src={x.image} alt='' />
          </Link>
          <div className='newBody'>
            <h1 className='newTitle'>{x.title}</h1>
            <button className='newButton'>shop now</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default NewSection
