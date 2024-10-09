
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import About from './components/About'
import Product from './components/Product'
import Pricing from './components/Pricing'
import Integration from './components/integration';
import FooterSection from './components/FooterSection'
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  useEffect(() => {
    AOS.init({
      duration:1000
    });
  }, []);
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