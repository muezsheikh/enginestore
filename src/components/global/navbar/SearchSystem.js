import React, { useState } from 'react'
import { productsArr } from './../../../data/products'
import { Link } from 'react-router-dom'

const SearchSystem = ({ activeSearchFunc }) => {
  const [searchInput, setSearchInput] = useState('')
  const filteredArr = searchInput
    ? productsArr.filter((item) =>
        item.title.toLowerCase().includes(searchInput.toLowerCase())
      )
    : []

  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value)
  }

  const handleClearSearch = () => {
    setSearchInput('') // Clear the search input when the close icon is clicked
    activeSearchFunc() // Call the provided function to handle any other actions related to closing the search
  }

  return (
    <>
      <div className='searchXCrossIcon'>
        <i className='fas fa-times' onClick={handleClearSearch}></i>
      </div>
      <div className='searchInput'>
        <input
          type='text'
          placeholder='Search a product....'
          value={searchInput}
          onChange={handleSearchInputChange}
        />
      </div>
      <div className='searchProductList'>
        {filteredArr.map((x) => (
          <div className='searchProd' key={x.id}>
            <Link to={`/${x.collection}/${x.category}/${x.id}`}>
              <div className='searchProdImg'>
                <img src={`/${x.images[0]}`} alt='' />
              </div>
            </Link>
            <div className='searchProdBody'>
              <h1>{x.title}</h1>
              <h1>{x.price}</h1>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default SearchSystem
