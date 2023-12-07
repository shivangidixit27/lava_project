 
import Image from 'next/image'
import Link from 'next/link';
 
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
 import 'swiper/css';  
 import 'swiper/css/navigation';
 import { Navigation } from 'swiper/modules';
 
 

export default function Newlaunches() {
 
 
    return (
        <section className="bg-gray-200 py-16 overflow-hidden launchSec">
           <div className="container pl-4 mx-auto "> 
            <h2 className='text-gray-800 leading-trim text-cap font-S400 text-2xl leading-normal'>New Launches</h2>  </div>
            <div className="w-screen mt-n40 pl-4 ">
            <Swiper  
        navigation={true} modules={[Navigation]} 
      spaceBetween={0}
      slidesPerView={3}    
      centeredSlides={false}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      loop={false}
      modules={[Navigation]}
      className="NewLaunchesSlider"       
    >
 
 <SwiperSlide>
	<div>
		<div className='p-8 hover:text-red-500'>
			<div className='mb-2'><img src='assets/img/lavaproduct.jpg' className='w-full' /></div>
			<div className='p-4  bg-white [&>div]:text-gray-800'>
           
				<h2 className='font-normal pr-16 text-xl mb-3'>Blaze Pro 5G</h2>
				<p className='font-light pr-16'>
                <Link href="">Ultra-fast Performance MediaTek D6020 33W Fast Charging</Link> </p>
                 </div>
		</div>
	</div>
</SwiperSlide>  
 <SwiperSlide>
	<div>
		<div className='p-8 hover:text-red-500'>
			<div className='mb-2'><img src='assets/img/lavaproduct.jpg' className='w-full' /></div>
			<div className='p-4  bg-white [&>div]:text-gray-800'>
           
				<h2 className='font-normal pr-16 text-xl mb-3'>Blaze Pro 5G</h2>
				<p className='font-light pr-16'>
                <Link href="">Ultra-fast Performance MediaTek D6020 33W Fast Charging</Link> </p>
                 </div>
		</div>
	</div>
</SwiperSlide>  
<SwiperSlide>
	<div>
		<div className='p-8 hover:text-red-500'>
			<div className='mb-2'><img src='assets/img/lavaproduct.jpg' className='w-full' /></div>
			<div className='p-4  bg-white [&>div]:text-gray-800'>
           
				<h2 className='font-normal pr-16 text-xl mb-3'>Blaze Pro 5G</h2>
				<p className='font-light pr-16'>
                <Link href="">Ultra-fast Performance MediaTek D6020 33W Fast Charging</Link> </p>
                 </div>
		</div>
	</div>
</SwiperSlide>
<SwiperSlide>
	<div>
		<div className='p-8 hover:text-red-500'>
			<div className='mb-2'><img src='assets/img/lavaproduct.jpg' className='w-full' /></div>
			<div className='p-4  bg-white [&>div]:text-gray-800'>
           
				<h2 className='font-normal pr-16 text-xl mb-3'>Blaze Pro 5G</h2>
				<p className='font-light pr-16'>
                <Link href="">Ultra-fast Performance MediaTek D6020 33W Fast Charging</Link> </p>
                 </div>
		</div>
	</div>
</SwiperSlide>

    </Swiper> 
</div>
       </section>
    )
}


