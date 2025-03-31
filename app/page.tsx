import React from 'react'
import Navbar from './components/navbar'
import Footer from './components/footer'
import AutoPlayCarousel from './pages/Carousel'

function Page() {
  return (
    <div>
      <Navbar />
      <AutoPlayCarousel />
      <Footer />
    </div>
  )
}

export default Page
