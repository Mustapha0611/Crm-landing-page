import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import About from './components/About'
import Product from './components/Product'
import Pricing from './components/Pricing'
import Integration from './components/integration';
import FooterSection from './components/FooterSection'

const App = () => {
  return (
    <>
    <NavBar className="sticky top-0" />
    <Hero />
    <About  />
    <Product />
    <Pricing/>
    <Integration  />
    <FooterSection />
    </>
  )
}

export default App