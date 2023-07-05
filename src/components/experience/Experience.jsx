import React from 'react'
import './experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs';
const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Backend Development</h3>
          <div className="content">
            <article className='experience_details'>
              <BsFillPatchCheckFill className='icon'  />
              <h4>NodeJs</h4>
              <small className='text_light'>Experienced
              </small>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='icon'/>
              <h4>ExpressJS</h4>
              <small className='text_light'>Experienced
              </small>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='icon'/>
              <h4>MongoDB</h4>
              <small className='text_light'>Experienced
              </small>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='icon'/>
              <h4>Python</h4>
              <small className='text_light'>Experienced
              </small>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='icon'/>
              <h4>MYSql</h4>
              <small className='text_light'>Experienced
              </small>
            </article>
          </div>
        </div>
        <div className="experience_backend">
          <h3>Frontend Development</h3>
            <div className="content">
              <article className='experience_details'>
                <BsFillPatchCheckFill className='icon'/>
                <h4>HTML</h4>
                <small className='text_light'>Experienced
                </small>
              </article>
              <article className='experience_details'>
                <BsFillPatchCheckFill className='icon'/>
                <h4>CSS</h4>
                <small className='text_light'>Experienced
                </small>
              </article>
              <article className='experience_details'>
                <BsFillPatchCheckFill className='icon'/>
                <h4>JavaScript</h4>
                <small className='text_light'>Experienced
                </small>
              </article>
              <article className='experience_details'>
                <BsFillPatchCheckFill className='icon'/>
                <h4>Bootstrap</h4>
                <small className='text_light'>Experienced
                </small>
              </article>
              <article className='experience_details'>
                <BsFillPatchCheckFill className='icon'/>
                <h4>React JS</h4>
                <small className='text_light'>Experienced
                </small>
              </article>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Experience