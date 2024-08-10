import React from 'react'
import Banner from '../components/collection/Banner'
import { useParams } from 'react-router-dom'
import Navbar from '../components/global/navbar'
import Video from '../components/collection/Video'
import Categories from '../components/collection/Categories'
import SaleSection from '../components/collection/SaleSection'
import NewSection from '../components/collection/NewSection'
import Footer from '../components/global/footer/Footer'

const CollectionPg = () => {
  const {collection}  = useParams()
  return (
    <div>
      <Navbar/>
      <Banner collection={collection}/>
      <Video/>
      <Categories collection={collection}/>
      <SaleSection collection={collection}/>
      <NewSection/>
      <Footer/>
    </div>
  )
}

export default CollectionPg