import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { productsArr } from './../data/products'
import Navbar from '../components/global/navbar'
import Footer from '../components/global/footer/Footer'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/features/cartSlice'

const SingleProd = () => {
  const [quantity, setQuantity] = useState(1)
  const [size, setSize] = useState({ title: 'LARGE', code: '00L' })
  const sizeFunc = (s) => {
    setSize(s)
  }
  const { collection, category } = useParams()
  const dispatch = useDispatch()
  const [image, setImage] = useState(0)
  const handleImage = (ind) => {
    setImage(ind)
  }

  const [activeSizeChart, setActiveSizeChart] = useState(false)
  const [activeDeliveryChart, setDeliveryChart] = useState(false)
  const [activeInfo, setActiveInfo] = useState(false)
  const [activeNote, setActiveNote] = useState(false)

  const activeSizeChartFunc = () => {
    setActiveSizeChart(!activeSizeChart)
  }
  const activeDeliveryChartFunc = () => {
    setDeliveryChart(!activeDeliveryChart)
  }
  const activeNoteFunc = () => {
    setActiveNote(!activeNote)
  }
  const activeInfoFunc = () => {
    setActiveInfo(!activeInfo)
  }
  const { id } = useParams()
  const singleProd = productsArr.find((item) => item.id === id)
  const lengthOfImages = singleProd.images.length - 1
  const rightImageFunc = () => {
    image === lengthOfImages ? setImage(0) : setImage(image + 1)
  }
  const leftImageFunc = () => {
    if (image === 0) {
      setImage(lengthOfImages)
    } else {
      setImage(image - 1)
    }
  }

  const addCart = () => {
    const newProd = { ...singleProd, quantity: quantity, size: size.title }
    dispatch(addToCart(newProd))
  }
  return (
    <>
      <Navbar />
      <div className='singleHead'>
        <Link to={`/${collection}`}>Home</Link>
        <Link>{category}</Link>
        <Link>{singleProd.title}</Link>
      </div>
      <div className='singleProdContainer'>
        <div className='sideImages'>
          {singleProd.images.map((x, index) => (
            <img
              src={`/${x}`}
              alt=''
              width={100}
              className={index === image ? 'activeImage' : ''}
              onClick={() => handleImage(index)}
              key={index}
            />
          ))}
        </div>
        <div className='singleProdImg'>
          <img
            src={`/${singleProd.images[image]}`}
            className={singleProd.images[image] && 'activeImg'}
            alt=''
          />
          <div className='sideImgLeft '>
            <i
              className='fa-solid fa-circle-arrow-left'
              onClick={leftImageFunc}
            ></i>
          </div>
          <div className='sideImgRight '>
            <i
              className='fa-solid fa-circle-arrow-right'
              onClick={rightImageFunc}
            ></i>
          </div>
        </div>
        <div className='singleProdContent'>
          <div className='singleTitleID'>
            <h1>{singleProd.title}</h1>
            <p>
              {singleProd.id}-{size.code}-{singleProd.color[0].code}
            </p>
          </div>
          <hr />
          <div className='singleMiddle'>
            <div className='singlePrice'>
              <h1>Rs,{singleProd.price.toLocaleString()}.00</h1>
            </div>
            <div className='singleColor'>
              <p>
                Color : <span>{singleProd.color[0].title}</span>
              </p>
              <img src={`/${singleProd.images[0]}`} alt='' width={80} />
            </div>
            <div className='singleSizesQuantity'>
              <div className='sizesDiv'>
                <p>Select your size :</p>
                <div className='sizesButtons'>
                  {singleProd.sizes.map((x, index) => (
                    <button
                      key={index}
                      className={x === size ? 'activeSize' : ''}
                      onClick={() => sizeFunc(x)}
                    >
                      {x.title}
                    </button>
                  ))}
                </div>
              </div>
              <div className='quantityButtons'>
                <p>Quantity :</p>
                <div className='quantity-box'>
                  <button onClick={() => setQuantity(quantity + 1)}>
                    <i className='fas fa-plus'></i>
                  </button>
                  <span className='quantityNum'>{quantity}</span>
                  <button
                    onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                  >
                    <i className='fas fa-minus'></i>
                  </button>
                </div>
              </div>
            </div>
            <p className='size-chart' onClick={activeSizeChartFunc}>
              Size Chart
            </p>
          </div>
          <div className='singleButtons'>
            <button className='addToCartButton' onClick={addCart}>
              <span>Add to Cart</span>
              <i className='fas fa-shopping-cart'></i>
            </button>
          </div>
          <div className='singleProdInfoContainer'>
            <div className='singleProdInfo' onClick={activeInfoFunc}>
              <h1>Product information</h1>
              <div className='singleProdInfoIcon'>
                <i
                  className={`fas fa-angle-up ${
                    activeInfo ? 'activeIcon' : ''
                  }`}
                ></i>
              </div>
            </div>
            <div className={`singleProdText ${activeInfo ? 'activeInfo' : ''}`}>
              <p>Graphic Tee</p>
            </div>
          </div>

          <hr />
          <div className='singleProdInfoContainer'>
            <div className='singleProdInfo' onClick={activeNoteFunc}>
              <h1>Note: </h1>
              <div className='singleProdInfoIcon'>
                <i
                  className={`fas fa-angle-up ${
                    activeNote ? 'activeIcon' : ''
                  }`}
                ></i>
              </div>
            </div>
            <div className={`singleProdText ${activeNote ? 'activeNote' : ''}`}>
              <p>
                Actual Fabric Style & Color May Be Slightly Differ from Product
                Image.
              </p>
            </div>
          </div>
          <div className='singleDelivery'>
            <p onClick={activeDeliveryChartFunc}>Delivery and returns</p>
          </div>
        </div>
      </div>
      <div
        className={`sizeChartDiv ${activeSizeChart ? 'activeSizeChart' : ''}`}
      ></div>
      <div className='sizeChartContainer'>
        <div
          className={`deliveryChartDiv ${
            activeDeliveryChart ? 'activeDeliveryChart' : ''
          }`}
        >
          <div className='sizeCrossIcon'>
            <i className='fas fa-xmark' onClick={activeDeliveryChartFunc}></i>
          </div>

          <div className='deliveryBoxHead'>
            <h1>Deliveries and returns</h1>
          </div>
          <hr />
          <div className='deliveryBoxMiddle'>
            <h3>DELIVERIES:</h3>
            <p>
              Free Home Delivery for orders exceeding PKR 2500,Otherwise PKR 150
              will be charged. All orders may take up to 3 working days to be
              delivered to your doorstep
            </p>
          </div>
          <hr />
          <div className='deliveryBoxCenter'>
            <h3>RETURNS:</h3>
            <p>
              All products purchased from engine.com.pk can be exchanged within
              14 days of purchase only if:- The item(s) is faulty, damaged or
              defective at the time of delivery. The item(s) does not match the
              original specifications of the product or is found to be not the
              same as you had actually purchased.
            </p>
            <h3>NOTE:</h3>
            <p>Sales item will not be Exchanged or Refundable.</p>
          </div>
          <hr />
          <div className='deliveryBoxFooter'>
            <p>Click Here for further information regarding exchanges policy</p>
            <p>Click Here for more details regarding returns</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default SingleProd
