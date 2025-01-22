import React from 'react'
import Cv from '../../assets/cv.pdf';

const Cta = () => {
  return (
    <div className='cta'>
        <a  href={Cv} download className='btn'>Download CV</a>
        <a className='btn btn_primary' href='#contact'>Let's Talk</a>
    </div>
  )
}

export default Cta