import React from 'react'
import './Portfolio.css'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        <article className='portfolio_item'>
          <div className="portfolio_item_img">
            <img src="/real-estate1.png" alt = ""/>
          </div>
          <h3>Real Estate Application</h3>
         <div className="portfolio_item_cta">
          <a href="https://github.com/ogunsinapelumi707/real-estate-client" className='btn'>Github</a>
          <a href="https://real-estate-client-fo8i.onrender.com/"  className='btn btn_primary'>Live Demo</a>
         </div>
        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item_img">
            <img src="/mlm.png" alt = ""/>
          </div>
          <h3>Multi-level Marketing</h3>
         <div className="portfolio_item_cta">
          <a href="https://github.com/ogunsinapelumi707/"  className='btn'>Github</a>
          <a href="https://dailygisttelecoms.com/"  className='btn btn_primary'>Live Demo</a>
         </div>
        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item_img">
            <img src="/chucky.png" alt = ""/>
          </div>
          <h3>Admin Dashboard</h3>
         <div className="portfolio_item_cta">
          <a href="https://github.com/ogunsinapelumi707/Chucky"  className='btn'>Github</a>
          <a href="https://chucky-bds6.onrender.com"  className='btn btn_primary'>Live Demo</a>
         </div>
        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item_img">
            <img src="/redux1.png" alt = ""/>
          </div>
          <h3>Redux CRUD App</h3>
         <div className="portfolio_item_cta">
          <a href="https://github.com/ogunsinapelumi707/products"  className='btn'>Github</a>
          <a href="https://reduxassess.onrender.com"  className='btn btn_primary'>Live Demo</a>
         </div>
        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item_img">
            <img src="/mlm1.png" alt = ""/>
          </div>
          <h3>this is a portfolio item title</h3>
         <div className="portfolio_item_cta">
          <a href=""  className='btn'>Github</a>
          <a href=""  className='btn btn_primary'>Live Demo</a>
         </div>
        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item_img">
          <img src="/chucky.png" alt = ""/>
          </div>
          <h3>this is a portfolio item title</h3>
         <div className="portfolio_item_cta">
          <a href=""  className='btn'>Github</a>
          <a href=""  className='btn btn_primary'>Live Demo</a>
         </div>
        </article>
       
      </div>
    </section>
  )
}

export default Portfolio
