import React from 'react'
import { dropNew, dropdownArr } from '../../../data/dropdown'
import { Link } from 'react-router-dom'

const Dropdown = ({ collection }) => {
  const filteredProd = dropdownArr.filter(
    (item) => item.category === collection
  )
  const findNew = dropNew.find((item) => item.category === collection)
  return (
    <div className='dropdownContainer'>
      <div className='dropdownC'>
        <div className='dropNewImg'>
          <Link to={`/${collection}/${findNew.type}`}>
            <img src={`/${findNew.image}`} alt='' />
          </Link>
          <div className='dropNewButton'>
            <h2>{findNew.title}</h2>
          </div>
        </div>
        <div className='dropCatContainer'>
          {filteredProd.map((x, index) => (
            <div className='dropProd' key={index}>
              <Link to={`/${collection}/${x.type}`}>
                <div className='dropProdImg'>
                  <img src={`/${x.image}`} alt='' />
                </div>
              </Link>
              <div className='dropProdBody'>
                <h2>{x.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Dropdown
