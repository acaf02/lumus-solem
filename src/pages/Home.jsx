import React from 'react'
import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import MVV from '../components/MVV'
import BestSeller from '../components/BestSeller'
import LatestProduct from '../components/LatestProducts'

const Home = () => {
  return (
    <div>
      <Navigation />
      <Hero />
      <LatestProduct />
      <BestSeller />
      <MVV />
    </div>
  )
}

export default Home
