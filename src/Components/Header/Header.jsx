import React from 'react'
import './header.css'

import CTA from "./Cta"
import Headersocial from './Headersocial'


const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm </h5>
        <h1>Pelumi Raphael</h1>
        <h5 className="text_ligh">Fullstack Developer</h5>
        <CTA/>
        <Headersocial/>

        <div className="me">
          <img src="/br.png" alt=''/>
        </div>

        <a href='#Contact' className='scroll_down'>Scroll Down</a>

      </div>
    </header>
  )
}

export default Header