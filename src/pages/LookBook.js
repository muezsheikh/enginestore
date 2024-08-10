import React from 'react'
import Navbar from '../components/global/navbar'
import Footer from '../components/global/footer/Footer'
import { productsArr } from '../data/products'

const LookBook = () => {
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

      <div className='lookProdCon'>
        {productsArr.slice(0, 12).map((x) => (
          <div className='lookProd'>
            <div className='lookProdImg'>
              <img src={`/${x.images[0]}`} alt='' />
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  )
}

export default LookBook
