import React from 'react'
import { Link } from 'react-router-dom'
import Dropdown from './Dropdown'

const Menus = ({ collection }) => {
  return (
    <div className='navLinksContainer'>
      <div className='navLinks '>
        <div>
          <Link to={`/${collection}/newArrivals`}>New</Link>
        </div>
        <div>
          <Link to={`/${collection}/sale`}>Sale</Link>
        </div>
        <div className='collectionDiv'>
          <Link to={`/${collection}`}>Collection</Link>
          <Dropdown collection={collection} />
        </div>
        <div>
          <Link to={`/${collection}/lookbook`}>lookbook</Link>
        </div>
        <div>
          <Link to={`/${collection}/community`}>#Enginecommunity</Link>
        </div>
      </div>
    </div>
  )
}

export default Menus
