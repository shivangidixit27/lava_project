import React from 'react'
import Image from 'next/image'
export default function CommonBanner({heading,content,imagesrc}) {
  return (
   <>
    <section>
      <div className='relative'>
      <Image
      src={imagesrc} className='max-w-full w-full  m-auto'
      width={1920}
      height={695}
      alt=""
    />
    <div className='banner-caption absolute inset-0 flex items-center justify-center w-3/4 mx-auto'>
     <div>
     <h2 className='text-white text-center lg:text-custom-94 font-S700 lg:leading-104'>{heading}</h2>   
      <p className="md:text-custom-32  lg:leading-42 text-white text-center font-S400 opacity-80">{content}</p>
    </div> 
    </div>
    </div>  
    </section>
   </>
  )
}
