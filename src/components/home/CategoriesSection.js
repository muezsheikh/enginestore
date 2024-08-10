import React from 'react'
import { homeCategory } from './../../data/homeArr'
import { Link } from 'react-router-dom'
const CategoriesSection = () => {
  return (
    <div className='homeCategoryContainer'>
      {homeCategory.map((x, index) => (
        <div className='homeCategory' key={index}>
          <img
            src={x.image}
            alt=''
            className={x.id === 3 ? 'comingSoon' : ''}
          />
          <div className='homeCategoryBody'>
            <h1>{x.title}</h1>
            <Link to={`/${x.title}`}>
              <button className={x.id === 3 ? 'kidsButton' : ''}>{x.id === 3 ? 'Coming Soon' : 'Shop now'}</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CategoriesSection
