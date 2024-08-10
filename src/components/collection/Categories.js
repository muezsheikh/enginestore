import React from 'react'
import { categoriesCollection } from '../../data/category'
import { useNavigate } from 'react-router-dom'
const Categories = ({ collection }) => {
  const navigate = useNavigate()
  const categories = categoriesCollection.filter(
    (item) => item.collection === collection
  )
  console.log(collection)
  return (
    <div className='categoryContainerCollection'>
      {categories.map((x,index) => (
        <div className='categoryDiv' key={index}>
          <div className='categoryImg'>
            <img src={x.image} alt='' />
          </div>
          <div className='categoryBody'>
            <div className='categoryTitle'>
              <h3>{x.title}</h3>
            </div>
            <div className='categoryButton'>
              <button onClick={()=> navigate(`/${collection}/${x.category}`)}>Shop now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Categories
