 'use effect'

import { Pagination} from 'swiper/modules';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
 import 'swiper/css';  
import 'swiper/css/pagination';

export default function MainBanner() {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };
  return (
    <section className="overflow-hidden">
      <div className="relative w-screen h-screen overflow-hidden">
      <Swiper
      modules={[Pagination]}
      spaceBetween={0}
      slidesPerView={1}    
      pagination={pagination}  
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      effect={"fade"}
      loop={true}
      speed={1500}
      autoplay={{delay: 5500}} centeredSlides={true}     
      className="mainBanner"       
    >
      <SwiperSlide>  
      <div className="relative w-screen h-screen overflow-hidden">
              <video
                className="absolute top-0 left-0 object-cover w-full h-full"
                autoPlay
                loop
                muted
              >
                <source src="../assets/video/background-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              {/* <div className="absolute inset-0 bg-/ opacity-0">nsjdfbao</div> */}
          
            </div></SwiperSlide>
      <SwiperSlide><img src='assets/img/banner.jpg'  className="w-full h-full"/></SwiperSlide>
      <SwiperSlide><img src='assets/img/banner.jpg'  className="w-full h-full"/></SwiperSlide>
      
      ...
    </Swiper>






        
      </div>





    </section>
  )
}


