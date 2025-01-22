import React from 'react'
import './About.css'
import {FaAward} from "react-icons/fa"
import {FiUsers} from "react-icons/fi"
import {VscFolderLibrary} from "react-icons/vsc"


const About = () => {
  return (
    <section id='About'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me_img">
            <img src="/brown.jpg" alt="About image"  />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className='about_card' >
              <FaAward className='about_icon'/>
              <h5>Experience</h5>
              <small>3+ years working </small>
            </article>
            <article className='about_card' >
              <FiUsers className='about_icon'/>
              <h5>Clients</h5>
              <small>300+ Worldwide </small>
            </article>
            <article className='about_card' >
              <VscFolderLibrary className='about_icon'/>
              <h5>Portfolio</h5>
              <small>80+ completed Projects </small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore tempora
             assumenda quae quia sunt facere saepe voluptate inventore quasi est ipsam 
             nam sequi praesentium laborum illum vitae, sapiente omnis. Ipsam?
          </p>

          <a href='#contact' className='btn btn_primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About