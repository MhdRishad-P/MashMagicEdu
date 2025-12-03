import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './components/Hero/Hero'
import Navbar from './components/Hero/Navbar'
import WhyUs from './components/Hero/WhyUs'
import OurPrograms from './components/OurPrograms'
import CardGrid from './components/CardGrid'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Hero/>
      <Navbar/>
      <CardGrid/>
      <OurPrograms/>
     
    </>
  )
}

export default App
