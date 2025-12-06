import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './components/Hero/Hero'
import Navbar from './components/Hero/Navbar'
import WhyUs from './components/Hero/WhyUs'
import OurPrograms from './components/OurPrograms'
import CardGrid from './components/CardGrid'
import TestimonialCards from './components/TestimonialCard'
import Footer from './components/Footer'
import { Routes, Route } from "react-router-dom";




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Hero/>
      <Navbar/>
      <CardGrid/>
      <OurPrograms/>
      <TestimonialCards/>
      <Footer/>
     
     {/* <Routes>
      <Route path='/' element={<Hero/>}/>
      <Route path='/whyUs' element={CardGrid}></Route>
      <Route path='/Programs' element={OurPrograms}></Route>
      <Route path='/Testimonial' element={TestimonialCards}></Route>
     </Routes> */}
     
    </>
  )
}

export default App
