import {React, useState} from 'react'
import './Nav.css'

import {AiOutlineHome, AiOutlineUser} from "react-icons/ai"
import {BiBook, BiMessageAltDetail} from "react-icons/bi"
import {RiServiceLine} from "react-icons/ri"


const Nav = () => {
  const [activeNav, setActiveNav] =  useState("#")





  return (
    <nav>
      <a onClick={() => setActiveNav('#')}   className={activeNav === "#" ? 'active': ""} href='#'><AiOutlineHome/></a>
      <a onClick={() => setActiveNav('#about')}   className={activeNav === "#about" ? 'active': ""} href='#About'><AiOutlineUser/></a>
      <a onClick={() => setActiveNav('#experience')}   className={activeNav === "#experience" ? 'active': ""} href='#experience'><BiBook/></a>
      <a onClick={() => setActiveNav('#services')}   className={activeNav === "#services" ? 'active': ""}href='#services'><RiServiceLine/></a>
      <a onClick={() => setActiveNav('#contact')}   className={activeNav === "#contact" ? 'active': ""} href='#Contact'><BiMessageAltDetail/></a>
    </nav>
  )
}

export default Nav