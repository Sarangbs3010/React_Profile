import React from 'react'
import {FiTwitter} from 'react-icons/fi';
import {AiOutlineGoogle} from 'react-icons/ai'
import {BsFacebook} from 'react-icons/bs'
import './footer.css'
const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo">
        Sarang
      </a>
      <ul className="links">
        <li><a href="#" className='location'>Home</a></li>
        <li><a href="#about" className='location'>About</a></li>
        <li><a href="#experience" className='location'>Experience</a></li>
        <li><a href="#services" className='location'>Services</a></li>
        <li><a href="#portfolio" className='location'>Portfolio</a></li>
        <li><a href="#testimonials" className='location'>Testimonial</a></li>
        <li><a href="#contact" className='location'>Contact</a></li>
      </ul>
      <div className='footer_socials'>
        <a href="https://www.facebook.com" target="_blank"><BsFacebook /></a>
        <a href="https://www.google.com" target="_blank"><AiOutlineGoogle /></a>
        <a href="https://twitter.com" target="_blank">
          <FiTwitter/>
        </a>
      </div>
    </footer>
  )
}

export default Footer