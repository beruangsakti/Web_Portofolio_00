import React from 'react'

import { About, Footer, Header, Skills, Testimonials, Work } from './container';
import { Navbar } from "./components";


const app = () => {
  return (
    <div className='app'>
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonials />
      <Work />
      <Footer />
    </div>
  )
}

export default app;