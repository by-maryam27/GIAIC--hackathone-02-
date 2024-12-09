import React from 'react'
import Home from './(routes)/home/page'
import Shop from './(routes)/shop/page'
import About from './(routes)/about/page'
import Contact from './(routes)/contact/page'

function Mainpage() {
  return (
    <div>
      <Home/>
      <Shop/>
      <About/>
      <Contact/>
    </div>
  )
}

export default Mainpage