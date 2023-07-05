import React from 'react'
import ME from '../../assets/me-about.jpg'
import {BsAwardFill} from 'react-icons/bs'
import {HiUsers} from 'react-icons/hi'
import {MdFolderCopy} from 'react-icons/md'
import './about.css'
const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className='container about_container'>
        <div className='about_me'>
          <div className="about_me_image">
            <img src={ME} alt="About Image" className='about_img'/>
          </div>
        </div>

        <div className='about_content'>
          <div className="about_cards">
            <article className="about_card">
              <BsAwardFill className='about_icon'/>
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
            <article className="about_card">
              <HiUsers className='about_icon'/>
              <h5>Users</h5>
              <small>300+ Worldwide</small>
            </article>
            <article className="about_card">
              <MdFolderCopy className='about_icon'/>
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </article>
          </div>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem, quam! Soluta quaerat culpa qui non doloremque impedit eaque provident ex adipisci nisi aut et dignissimos sapiente, ea, accusantium aspernatur facere!</p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About