import React from 'react'
import Head from '../components/home/Head'
import CategoriesSection from '../components/home/CategoriesSection'
import SocialSection from '../components/home/SocialSection'
import FooterSection from '../components/home/FooterSection'

const Home = () => {
  return (
    <div>
      <Head/>
      <CategoriesSection/>
      <SocialSection/>
      <FooterSection/>
    </div>
  )
}

export default Home