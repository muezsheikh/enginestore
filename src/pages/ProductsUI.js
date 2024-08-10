import React from 'react'
import { productsArr } from '../data/products'
import Navbar from '../components/global/navbar'
import Footer from '../components/global/footer/Footer'
import { Link, useParams } from 'react-router-dom'

const ProductsUI = () => {
  const { collection, category } = useParams()
  const filtered = productsArr.filter((item) => {
    if (collection === item.collection && category === 'sale') {
      return item.onSale
    }
    if (collection === item.collection && category === 'newArrivals') {
      return item.newArrival
    }
    if (item.category === category) {
      return true
    }
    return false
  })

 

  return (
    <>
      <Navbar />
      <div className='productsContainer'>
        {filtered.map((x, index) => (
          <div className='productDiv' key={index}>
            <Link to={`/${collection}/${category}/${x.id}`}>
              <div className='prodImg'>
                <img src={`/${x.images[0]}`} alt='' />
                {x.onSale && <span className='imgSaleNum'>-50%</span>}
                {x.newArrival && <span className='imgNewNotify'>New</span>}
              </div>
            </Link>

            <div className='prodBody'>
              <h3>{x.title}</h3>
              <div className='pricesDiv'>
                {x.onSale && (
                  <p className='salePrice'> Rs,{x.price.toLocaleString()}.00</p>
                )}
                <p className={x.onSale && 'afterSale'}>
                  Rs,
                  {x.onSale
                    ? (x.price * (0.5)).toLocaleString()
                    : x.price.toLocaleString()}
                  .00
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  )
}

export default ProductsUI
