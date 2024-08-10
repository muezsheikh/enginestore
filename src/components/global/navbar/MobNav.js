import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { activeMobNav } from '../../../redux/features/mobNavSlice'
import { dropdownArr } from '../../../data/dropdown'

const MobNav = ({ collection }) => {
  const navActive = useSelector((store) => store.mobNav)
  const dispatch = useDispatch()
  const activeNavFunc = () => {
    dispatch(activeMobNav())
  }
  const [dropActive, setDropActive] = useState(false)
  const dropActiveFunc = () => {
    setDropActive(!dropActive)
  }

  const filtered = dropdownArr.filter((item) => item.category === collection)
  
  return (
    <div className={`mobNavContainer ${navActive ? 'activeMobNav' : ''}`}>
      <div className='mobXcrossIcon'>
        <i className='fa-solid fa-x' onClick={activeNavFunc}></i>
      </div>
      <div className='mobNavLog'>
        <img src='/assets/homeLogo.png' width={100} alt='' />
      </div>
      <div className='mobCollectionLinks'>
        <Link
          to={'/men'}
          className={collection === 'men' ? 'activeMobNavLink' : ''}
        >
          Men
        </Link>
        <Link
          to={'/women'}
          className={collection === 'women' ? 'activeMobNavLink' : ''}
        >
          Women
        </Link>
        <Link className={collection === 'kids' ? 'activeMobNavLink' : ''}>
          Kids
        </Link>
      </div>
      <div className='mobNavLinks'>
        <Link to={`/${collection}/newArrivals`}>New</Link>
        <div className='mobSale mobIcon  '>
          <Link to={`/${collection}/sale`}>Sale</Link>
        </div>
        <div className='mobCollection mobIcon'>
          <div className='mobColl' onClick={dropActiveFunc}>
            <Link>Collection</Link>
            <i className={`fas fa-angle-down ${dropActive ? 'activeDropIc' : ''}`} ></i>
          </div>
          <div className={`mobDrop ${dropActive ? 'activeDrop' : ''}`}>
            {filtered.map((x,index) => (
              <Link key={index} to={`/${collection}/${x.type}`}>{x.title}</Link>
            ))}
          </div>
        </div>
        <Link to={`/${collection}/lookbook`} >lookbook</Link>
        <Link to={`/${collection}/community`}>#Enginecommunity</Link>
      </div>
    </div>
  )
}

export default MobNav
