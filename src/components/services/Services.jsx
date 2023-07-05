import React from 'react'
import {AiFillCheckCircle} from 'react-icons/ai';
import './services.css'
const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h3>Sevices</h3>
      <div className='container services_container'>
        <article className='service'>
          <div className='service_head'>
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service_list'>
            <li>
              <AiFillCheckCircle className='service_icon'/>
              <p>Lorem ipsum, dolor sit?</p>  
            </li>
            <li>
              <AiFillCheckCircle className='service_icon'/>
              <p>Lorem ipsum, dolor sit </p>  
            </li>
            <li>
              <AiFillCheckCircle className='service_icon'/>
              <p>Lorem ipsum, dolor sit </p>  
            </li>
            <li>
              <AiFillCheckCircle className='service_icon'/>
              <p>Lorem ipsum, dolor sit </p>  
            </li>
          </ul>
        </article>
        <article className='service'>
          <div className='service_head'>
            <h3>Web Development</h3>
          </div>
          <ul className='service_list'>
            <li>
              <AiFillCheckCircle className='service_icon'/>
              <p>Lorem ipsum, dolor sit</p>  
            </li>
            <li>
              <AiFillCheckCircle className='service_icon'/>
              <p>Lorem ipsum, dolor sit </p>  
            </li>
            <li>
              <AiFillCheckCircle className='service_icon'/>
              <p>Lorem ipsum, dolor sit </p>  
            </li>
            <li>
              <AiFillCheckCircle className='service_icon'/>
              <p>Lorem ipsum, dolor sit </p>  
            </li>
          </ul>
        </article>
        <article className='service'>
          <div className='service_head'>
            <h3>Machine Learning</h3>
          </div>
          <ul className='service_list'>
            <li>
              <AiFillCheckCircle className='service_icon'/>
              <p>Lorem ipsum, dolor sit </p>  
            </li>
            <li>
              <AiFillCheckCircle className='service_icon'/>
              <p>Lorem ipsum, dolor sit </p>  
            </li>
            <li>
              <AiFillCheckCircle className='service_icon'/>
              <p>Lorem ipsum, dolor sit a?</p>  
            </li>
            <li>
              <AiFillCheckCircle className='service_icon'/>
              <p>Lorem ipsum, dolor sit </p>  
            </li>
          </ul>
        </article>
      </ div>
    </section>
  )
}

export default Services