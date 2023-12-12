import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import '../../../src/styles.css';

// import required modules
import { EffectCards } from 'swiper/modules';
import bnr1 from "../../../public/hotelmanagement.png"
import bnr2 from "../../../public/sports.png"
import bnr3 from "../../../public/getjobbd.png"
import bnr4 from "../../../public/course.png"
const Experience = () => {
  return (
    <div>
          <>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        autoplay={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={bnr1}></img>
          </SwiperSlide>
        <SwiperSlide><img src={bnr2}></img></SwiperSlide>
        <SwiperSlide><img src={bnr3}></img></SwiperSlide>
        
        <SwiperSlide><img src={bnr4}></img></SwiperSlide>
        <SwiperSlide><img src={bnr2}></img></SwiperSlide>
        
      </Swiper>
    </>
    </div>
  )
}

export default Experience