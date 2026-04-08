import React from 'react'
import Hero from '../component/Hero'
import Navbar from '../component/Navbar'
import FeatureDestination from '../component/FeatureDestination'
import ExclusiveOffers from '../component/ExclusiveOffers'
import Testimonial from '../component/Testimonial'
import Letter from '../component/Letter'
import Footer from '../component/Footer'
import MostHotel from '../component/MostHotel'

const Home = () => {
  return (
    <>
        <Hero/>
        <MostHotel/>
        <FeatureDestination/>
        <ExclusiveOffers/>
        <Testimonial />
        <Letter/>
 

      
    </>
  )
}

export default Home