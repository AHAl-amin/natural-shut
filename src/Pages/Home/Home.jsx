import React from 'react'
import Banner from './BussinessGreeting'
import ProductsImg from './ProductsImg'
import DetoxPlanRules from './DetoxPlanRules'
import DetoxPlanAdventage from './DetoxPlanAdventage'
import Review from './Review'
import WhyMeFromBuy from './WhyMeFromBuy'
import NeedCourses from './NeedCourses'
import WhatsAppAndMassengerContact from './WhatsAppAndMassengerContact'
import Checkout from './Checkout'



const Home = () => {
  return (
    <div>
      <Banner/>
      <ProductsImg/>
      <DetoxPlanAdventage/>
      <DetoxPlanRules/>
      <Review/>
      <WhyMeFromBuy/>
      <NeedCourses/>
      <WhatsAppAndMassengerContact/>
      <Checkout/>

     

    </div>
  )
}

export default Home
