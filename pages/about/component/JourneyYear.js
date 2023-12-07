import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css'; 
import 'swiper/css/navigation'; 
export default function JourneyYear() {
  return (
    <>
    <section className='py-5 sm:py-16 md:mt-16 bg-year year-journey-slider relative'>
      <div className='max-w-custom m-auto'>
            <Swiper
        navigation={true} 
        modules={[Navigation]} 
        spaceBetween={0}
        slidesPerView={1}    
        centeredSlides={false}
        loop={false}
        breakpoints={{
            1024: {
              slidesPerView: 3,
            },
          }}
        className='swiper-year'
          >
            <SwiperSlide>
              <div className='year-box'>
              <h3 className='3xl:text-custom-32-3xl 3xl:leading-42-3xl 2xl:text-custom-32-2xl 2xl:leading-42-2xl sm:text-custom-32-sm sm:leading-42-sm text-custom-32 leading-42 font-S500 text-white'>2009</h3>
                <p className='text-base text-white font-S300'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='year-box'>
            <h3 className='3xl:text-custom-32-3xl 3xl:leading-42-3xl 2xl:text-custom-32-2xl 2xl:leading-42-2xl sm:text-custom-32-sm sm:leading-42-sm text-custom-32 leading-42 font-S500 text-white'>2011</h3>
                <p className='text-base text-white font-S300'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='year-box'>
            <h3 className='3xl:text-custom-32-3xl 3xl:leading-42-3xl 2xl:text-custom-32-2xl 2xl:leading-42-2xl sm:text-custom-32-sm sm:leading-42-sm text-custom-32 leading-42 font-S500 text-white'>2015</h3>
                <p className='text-base text-white font-S300'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='year-box'>
            <h3 className='3xl:text-custom-32-3xl 3xl:leading-42-3xl 2xl:text-custom-32-2xl 2xl:leading-42-2xl sm:text-custom-32-sm sm:leading-42-sm text-custom-32 leading-42 font-S500 text-white'>2019</h3>
                <p className='text-base text-white font-S300'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='year-box'>
            <h3 className='3xl:text-custom-32-3xl 3xl:leading-42-3xl 2xl:text-custom-32-2xl 2xl:leading-42-2xl sm:text-custom-32-sm sm:leading-42-sm text-custom-32 leading-42 font-S500 text-white'>2020</h3>
                <p className='text-base text-white font-S300'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='year-box'>
                <h3 className='3xl:text-custom-32-3xl 3xl:leading-42-3xl 2xl:text-custom-32-2xl 2xl:leading-42-2xl sm:text-custom-32-sm sm:leading-42-sm text-custom-32 leading-42 font-S500 text-white'>2022</h3>
                <p className='text-base text-white font-S300'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
      </div>
      </section>
    </>
  )
}
