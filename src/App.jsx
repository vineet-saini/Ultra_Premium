import { useState } from 'react'
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from './components/Header'
import Navbar from './components/Navbar'
import PremiumSol from './components/PremiumSol'
import WhyUs from './components/WhyUs'
import Card from './components/Card'
import Tickbox from './components/Tickbox'
import Testimonial from './components/Testimonial'
import Clientcard from './components/Clientcard'
import Footer from './components/Footer'
import Quicklinks from './components/Quicklinks'
import share from '../src/assets/images/share.png'
import clockimg from '../src/assets/images/clockimg.png'
import bulb from '../src/assets/images/bulb.png'
import rectangle from '../src/assets/images/Rectangle.png'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { Route, Router } from 'react-router-dom'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <WhyUs/>
    },
    {
      path: "/Tickbox",
      element: <Tickbox/>
    },
    {
      path: "Testimonials",
      element: <Testimonial/>
    }
  ])

  return (
    <>
      <Header />
     
      <Navbar /> 
      <PremiumSol />
      <WhyUs />
      <div className="cards">
        <Card img={share} />
        <img src={rectangle} alt="" />
        <Card img={bulb} />
        <img src={rectangle} alt="" />
        <Card img={clockimg} />
        
      </div> <br />
      <Tickbox />
      <Testimonial />
      <div className="clientcards">
        <Clientcard />
        <Clientcard />
        <Clientcard />
      </div>
      <div className="footerall">
        <Footer />
        <Quicklinks />
        <Quicklinks />
        <Quicklinks />
      </div>
      
    </>
  )
}

export default App
