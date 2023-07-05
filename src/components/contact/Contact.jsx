import React from 'react'
import {SiGmail} from 'react-icons/si';
import {BsMessenger} from 'react-icons/bs';
import {BsWhatsapp} from 'react-icons/bs';
import  { useRef } from 'react';
import emailjs from 'emailjs-com';
import './contact.css'
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vx9ixik', 'template_qc0iq3r', form.current, 'tRXGHdq9khvWQWGZd');

    e.target.reset();
  };
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact_container'>
        <div className="contact_links">
          <article className="contact_cards">
            <SiGmail className='contact_icon'/>
            <h3>Email</h3>
            <small>support@gmail.com</small>
            <a href="mailto:gtggtg500@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact_cards">
            <BsMessenger className='contact_icon'/>
            <h3>Messenger</h3>
            <small>supportmessage</small>
            <a href="https://www.facebook.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact_cards">
            <BsWhatsapp className='contact_icon'/>
            <h3>WhatsApp</h3>
            <small>123-4567-890</small>
            <a href="https://api.whatsapp.com/send?phone=+917022255097" target="_blank">Send a message</a>
          </article>
        </div>
        <div className='contact_info'>
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="userName" 
            id="id1" placeholder='Your Name'/>
            <input type="text" name="userEmail" id="id2" 
            placeholder='Your Email'/>
            <textarea name="userMessage" id="id3" cols="50" rows="7"
            placeholder='Your Message'></textarea>
            <button type='submit' className='btn btn-primary' >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact;