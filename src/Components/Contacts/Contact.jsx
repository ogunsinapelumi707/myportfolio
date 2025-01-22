import React, {useRef} from 'react'

import emailjs from 'emailjs-com'

import './Contact.css'
import {MdOutlineMailOutline} from "react-icons/md"
import {RiMessengerLine} from "react-icons/ri"
import {BsWhatsapp} from "react-icons/bs"

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_yc87w07', 'template_442xfop', form.current, 'PUDP61EAzNf3lxVEi')
    e.target.reset()
     
  };


  return (
    <section id='Contact'>
      <h5>Get In Touch </h5>
      <h2>Contact Me</h2>
      <div className="container contact_contianer">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineMailOutline className='contact_icon'/>
            <h4>Email</h4>
            <h5>pelumiogunsina4@gmail.com</h5>
            <a href="mailto:pelumiogunsina4@gmail.com" target={'_blank'}>Send a Message</a>
          </article>
          <article className="contact_option">
            <RiMessengerLine  className='contact_icon'/>
            <h4>Messenger</h4>
            <h5>Brown Feran</h5>
            <a href="https://m.me/username" target={'_blank'}>Send a Message</a>{/* url */}
          </article>
          <article className="contact_option">
            <BsWhatsapp  className='contact_icon'/>
            <h4>WhatsApp</h4>
            <h5>+2348155917955</h5>
            <a href="https://api.whatsapp.com/send?phone=+2348155917944" target={'_blank'}>Send a Message</a>
          </article>
        </div>
        <form ref={form} onSubmit = {sendEmail}>
          <input
            type="text"
            name='name' 
            placeholder='Your Full Name'
            required
          />
          <input
            type="email"
            name='email' 
            placeholder='Your Email'
            required
          />
          <textarea 
            name="message" 
            id="" 
            rows="7"
            required
            ></textarea>
            <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact