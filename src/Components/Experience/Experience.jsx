import React from 'react'
import './Experience.css'
import {BsPatchCheckFill} from "react-icons/bs"



const Experience = () => {
  return (
    <section id='experience'>
      <h5>Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className='experience_details'>
              <BsPatchCheckFill className = "experience_icon"/>
              <div>
                <h4>HTML</h4>
                <small className='text_light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className = "experience_icon"/>
             <div>
              <h4>CSS</h4>
              <small className='text_light'>Experienced</small>
             </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className = "experience_icon"/>
              <div>
                <h4>JavaScript</h4>
                <small className='text_light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className = "experience_icon"/>
              <div>
              <h4>BOOTSTRAP</h4>
              <small className='text_light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className = "experience_icon"/>
              <div>
              <h4>TailWind</h4>
              <small className='text_light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className = "experience_icon"/>
             <div>
             <h4>React</h4>
              <small className='text_light'>Experienced</small>
             </div>
            </article>
          </div>
        </div>
        {/* END OF FRONT END */}
        <div className="experience_backend">
        <h3>Backend Development</h3>
          <div className="experience_content">
            <article className='experience_details'>
              <BsPatchCheckFill className = "experience_icon"/>
              <div>
              <h4>Node JS</h4>
              <small className='text_light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className = "experience_icon"/>
              <div>
              <h4>MongoDB</h4>
              <small className='text_light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className = "experience_icon"/>
             <div>
             <h4>PHP</h4>
              <small className='text_light'>Experienced</small>
             </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className = "experience_icon"/>
              <div>
              <h4>Express JS</h4>
              <small className='text_light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className = "experience_icon"/>
              <div>
              <h4>MYSQL</h4>
              <small className='text_light'>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className = "experience_icon"/>
              <div>
              <h4>Typescript</h4>
              <small className='text_light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section >
  )
}

export default Experience