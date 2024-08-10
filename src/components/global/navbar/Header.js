import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { activeMobNav } from '../../../redux/features/mobNavSlice'
import SearchSystem from './SearchSystem'
const Header = ({ collection }) => {
  const cartL = useSelector((store) => store.cart.cartList)
  const [activeSearch, setActiveSearch] = useState(false)
  const activeSearchFunc = () => {
    setActiveSearch(!activeSearch)
  }
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const activeNavFunc = () => {
    dispatch(activeMobNav())
  }

  return (
    <div className='HeaderContainer'>
      <div className='collectionHeadings'>
        <p
          onClick={() => navigate('/men')}
          className={collection === 'men' ? 'active' : ''}
        >
          Men
        </p>
        <hr />
        <p
          onClick={() => navigate('/women')}
          className={collection === 'women' ? 'active' : ''}
        >
          Women
        </p>
        <hr />
        <p className={collection === 'kids' ? 'active' : ''}>Kids</p>
      </div>
      <div className='headerLogo'>
        <div className='barsIcon'>
          <i className='fa-solid fa-bars-staggered' onClick={activeNavFunc}></i>
        </div>
        <div className='headLogoDiv'>
          <Link to={'/'}>
            <img src='/assets/homeLogo.png' alt='' width={100} />
          </Link>
        </div>
      </div>
      <div className='headerIcons'>
        <i className='fas fa-search' onClick={activeSearchFunc}></i>
        <i className='fas fa-user'></i>
        <Link to={`/${collection}/cart`}>
          <div className='cartDivIcon'>
            <i className='fas fa-shopping-cart'></i>
            <span className='cartNum'>{cartL.length}</span>
          </div>
        </Link>
      </div>
      <div className={`searchSystem ${activeSearch ? 'activeSearch' : ''}`}>
        <SearchSystem activeSearchFunc={activeSearchFunc} />
      </div>
    </div>
  )
}

export default Header
