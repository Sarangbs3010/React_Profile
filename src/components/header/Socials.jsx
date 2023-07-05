import React from 'react'
import { BsLinkedin } from "react-icons/bs";
import {BsGithub} from 'react-icons/bs';

const Socials = () => {
  return (
    <div className='socials'>
        <a href="https://in.linkedin.com" className='mb-icons'><BsLinkedin /></a>
        <a href="https://github.com" className='mb-icons' ><BsGithub /></a>
    </div>
  )
}

export default Socials