import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import CollectionPg from '../pages/CollectionPg'
import ProductsUI from '../pages/ProductsUI'
import SingleProd from '../pages/SingleProd'
import Cart from '../pages/Cart'
import LookBook from '../pages/LookBook'
import Community from '../pages/Community'
import Error from './../pages/Error';
import PageNotFound from './../pages/PageNotFound';

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/:collection' element={<CollectionPg/>} />
        <Route path='/:collection/:category' element={<ProductsUI/>} />
        <Route path='/:collection/:category/:id' element={<SingleProd/>} />
        <Route path='/:collection/lookbook' element={<LookBook/>} />
        <Route path='/:collection/community' element={<Community/>} />
        <Route path='/:collection/cart' element={<Cart/>} />
        <Route path='/*'  element={<PageNotFound/>} />
      </Routes>
    </div>
  )
}

export default Routing
