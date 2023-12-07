import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { $ } from 'react-jquery-plugin';
import Image from 'next/image';
export default function BlogBanner() {

  return (
    <>
		<section className="blog-banner">
				<div className="relative">
						<Image
							src="/assets/img/blog-banner.png" className='max-w-full w-full  m-auto'
							width={1920}
							height={695}
							alt=""
							/>
							<div className="banner-content  absolute lg:bottom-[100px] lg:left-[200px] flex items-center justify-center w-3/4 mx-auto">
							<div className='text-white'>
							<span className='lg:text-2xl font-S500 uppercase'>MARCH 31,2023</span>	
							<h2 className='lg:text-custom-64 lg:leading-74 font-S700'>Introducing the Best 5G Mobile Phones</h2>			
							<div>
							<p className='lg:text-custom-32 lg:leading-42 w-4/5 opacity-80 font-S300'>What a great time to be an Indian! India is stepping on the accelerator wherever I see. Whether it’s the 10,000 kilometers</p>	
							</div>	
							<Link href='' className='btn btn-white lg:mt-5'>Read More</Link>
							</div>
							</div>


					
				</div>
		</section>
    </>
  )
}
