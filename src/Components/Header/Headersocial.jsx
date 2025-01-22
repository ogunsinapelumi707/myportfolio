import React from 'react'
import {BsLinkedin, BsGithub, BsDribbble} from "react-icons/bs"

const Headersocial = () => {
  return (
    <div className='header_socials'>
        <a href='https://www.linkedin.com/in/ogunsina-pelumi-160459317/' target={'_blank'}><BsLinkedin/></a>
        <a href='https://github.com' target={'_blank'}><BsGithub/></a>
    </div>
  )
}

export default Headersocial