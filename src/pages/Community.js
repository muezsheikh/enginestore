import React from 'react'
import Navbar from '../components/global/navbar'
import Footer from '../components/global/footer/Footer'

const Community = () => {
  return (
    <div>
      <Navbar />
      <div className='lookTop'>
        <div className='lookHead'>
          <h1>#EnginePakistan</h1>
        </div>
        <div className='lookPara'>
          <p>
            We’d love to see how you style your Engine clothes. Share your look
            and give us a mention with @EnginePakistan or tag us with
            #EnginePakistan.
          </p>
        </div>
      </div>
      <div className='saleSectionContainer'>
        <div className='leftSaleImg'>
          <img
            src='https://engine.com.pk/cdn/shop/files/Engine-Community_Web-Banner-758x541_1024x1024_crop_center.jpg?v=1681205080'
            alt=''
          />
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
      <Footer />
    </div>
  )
}

export default Community
