import React from 'react'
import './Testimonial.css'
import avatar1 from "../../assets/avatar1.jpg"
import avatar2 from "../../assets/avatar2.jpg"
import avatar3 from "../../assets/avatar3.jpg"
import avatar4 from "../../assets/avatar4.jpg"


// import Swiper core and required modules
import {  Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';




const Testimonial = () => {
  return (
    <section id='testimonial'>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials_container"
           // install Swiper modules
      modules={[ Pagination, ]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}

      >
        <SwiperSlide className="testimonial">
          <div className="client_avatar">
            <img src ={avatar1} alt = "avatar one"/>
          </div>
          <h5 className='client_name'>Ernest Achiever</h5>
            <small className='client_review'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, similique qui! Voluptas magnam 
              autem atque eius sapiente quam, esse modi est, praesentium iusto soluta reiciendis expedita alias, minima eum culpa!
            </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client_avatar">
            <img src ={avatar1} alt = "avatar one"/>
          </div>
          <h5 className='client_name'>Ernest Achiever</h5>
            <small className='client_review'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, similique qui! Voluptas magnam 
              autem atque eius sapiente quam, esse modi est, praesentium iusto soluta reiciendis expedita alias, minima eum culpa!
            </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client_avatar">
            <img src ={avatar1} alt = "avatar one"/>
          </div>
          <h5 className='client_name'>Ernest Achiever</h5>
            <small className='client_review'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, similique qui! Voluptas magnam 
              autem atque eius sapiente quam, esse modi est, praesentium iusto soluta reiciendis expedita alias, minima eum culpa!
            </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client_avatar">
            <img src ={avatar1} alt = "avatar one"/>
          </div>
          <h5 className='client_name'>Ernest Achiever</h5>
            <small className='client_review'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, similique qui! Voluptas magnam 
              autem atque eius sapiente quam, esse modi est, praesentium iusto soluta reiciendis expedita alias, minima eum culpa!
            </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client_avatar">
            <img src ={avatar1} alt = "avatar one"/>
          </div>
          <h5 className='client_name'>Ernest Achiever</h5>
            <small className='client_review'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, similique qui! Voluptas magnam 
              autem atque eius sapiente quam, esse modi est, praesentium iusto soluta reiciendis expedita alias, minima eum culpa!
            </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client_avatar">
            <img src ={avatar1} alt = "avatar one"/>
          </div>
          <h5 className='client_name'>Ernest Achiever</h5>
            <small className='client_review'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, similique qui! Voluptas magnam 
              autem atque eius sapiente quam, esse modi est, praesentium iusto soluta reiciendis expedita alias, minima eum culpa!
            </small>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Testimonial