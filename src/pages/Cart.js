import React from 'react'
import Navbar from '../components/global/navbar'
import Footer from '../components/global/footer/Footer'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
  addToCart,
  decreaseQ,
  removeFromCart,
} from '../redux/features/cartSlice'

const Cart = () => {
  const {collection} = useParams()
  const cartArr = useSelector((store) => store.cart.cartList)
  const dispatch = useDispatch()
  const increaseQ = (prod) => {
    dispatch(addToCart(prod))
  }
  const removeFunc = (prod) => {
    console.log('Payload:', prod)
    dispatch(removeFromCart(prod))
  }
  const decreaseFunc = (prod) => {
    dispatch(decreaseQ(prod))
  }

  const totalPrice = cartArr.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  )
  const last = cartArr.length - 1
  const lastProd = cartArr.find((item,index)=> index === last )
  console.log(lastProd)
  return (
    <div className='cart'>
      <Navbar />
      <div className='cartHeading'>
        <h1>Shopping cart</h1>
      </div>
      <hr />
      {cartArr.length ? (
        <>
          <div className='cartContainer'>
            <table>
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Size</th>
                  <th>Color</th>
                  <th>Units</th>
                  <th>Price</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {cartArr.map((x, index) => (
                  <tr key={index}>
                    <td>
                      <img src={`/${x.images[0]}`} width={80} alt='' />{' '}
                      <span className='cartItemTitle'>{x.title}</span>
                    </td>
                    <td>{x.size}</td>
                    <td>{x.color[0].title}</td>
                    <td>
                      <button onClick={() => increaseQ(x)}>
                        <i className='fas fa-plus'></i>
                      </button>
                      <span className='cartQuanNum'>{x.quantity}</span>
                      <button>
                        <i
                          className='fas fa-minus'
                          onClick={() => decreaseFunc(x)}
                        ></i>
                      </button>
                    </td>
                    <td>Rs,{x.price.toLocaleString()}.00</td>
                    <td className='removeButton' onClick={() => removeFunc(x)}>
                      remove
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className='subtotalSystem'>
            <div className='continueToShopping'>
              <i className='fas fa-angle-left'></i>
              <Link to={`/${collection}/${lastProd.category}`}>Continue to shopping</Link>
            </div>
            <div className='subtotal'>
              <div className='subtotalHeading'>
                <h3>total:</h3>
                <h1>Rs,{totalPrice.toLocaleString()}.00</h1>
              </div>
              <div className='placeButton'>
                <button>place order</button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className='emptyContainer'>
            <h3>Your Cart is Empty!</h3>
            <Link to={'/'}>
              <button>go to the home page</button>
            </Link>
          </div>
        </>
      )}

      <Footer />
    </div>
  )
}

export default Cart
