import React from 'react'
import { saleSection } from './../../data/category'

const SaleSection = ({ collection }) => {
  const saleImg = saleSection.find((item) => item.collection === collection)
  return (
    <div className='saleSectionContainer'>
      <div className='leftSaleImg'>
        <img src={saleImg.image} alt='' />
      </div>
      <div className='rightSaleImg'>
        <div className='rightSaleHeading'>
          <h1>Follow Us! @EnginePakistan</h1>
        </div>
        <div className='rightSaleIcons'>
          <div className='iconsTags'>
            <i className='fa-brands fa-facebook-f' />
            <i className='fa-brands fa-instagram' />
            <i className='fa-brands fa-pinterest-p' />
            <i className='fa-brands fa-snapchat' />
            <i className='fa-brands fa-youtube' />
            <i className='fa-brands fa-tiktok' />
            <i className='fa-brands fa-linkedin' />
          </div>
        </div>
        <div className='rightSaleHeading2'>
          <h1>#EnginePakistan</h1>
        </div>
      </div>
    </div>
  )
}

export default SaleSection
