import React from 'react';
import AVTR1 from '../../assets/avatar1.jpg';
import AVTR2 from '../../assets/avatar2.jpg';
import AVTR3 from '../../assets/avatar3.jpg';
import AVTR4 from '../../assets/avatar4.jpg';
import './testimonials.css'

import {Navigation, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
;


const Testimonials = () => {
  const data=[
    {
      avatar:AVTR1,
      name:"Alicia",
      review:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
    },
    {
      avatar:AVTR2,
      name:"Karl",
      review:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
    },
    {
      avatar:AVTR3,
      name:"Alex",
      review:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
    },
    {
      avatar:AVTR4,
      name:"Sophia",
      review:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
    }
  ]
  return (
    <section id='testimonials'>
       <h5>Review from clients</h5>
       <h2>Testimonials</h2>

       <Swiper className="container testimonials_container"
        modules={[Navigation, Pagination]}
        navigation
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}>
        {
          data.map(({avatar,name,review},index)=>{
            return(
              <SwiperSlide key={index} className="testimonial">
                <div className="client_avatar">
                  <img src={avatar} alt="Image" />
                </div>
                <h5>{name}</h5>
                <small>
                  {review}
                </small>
              </SwiperSlide>
            )
          })
        }
       </Swiper>
    </section>
  )
}

export default Testimonials