import React from 'react'
import Image from 'next/image'
export default function Awards() {
  return (
   <>
         <section className='py-5 sm:py-16'>
        <div className='max-w-custom m-auto'>
          <h2 className='text-black 3xl:text-custom-64-3xl 3xl:leading-74-3xl text-custom-64 leading-74 uppercase font-S700 md:mb-10 mb-5'>AWARDS & RECOGNITIONS</h2>
          <div className='flex flex-col flex-wrap md:flex-row'>
          <div className='lg:w-1/3 w-full'>
              <div className='about-box md:pt-10 md:px-5 p-5'>
              <div className='about-image-box'>
                <Image
                  src="/assets/img/award1.png" className='m-auto'
                  width={252}
                  height={234}
                  alt="Vishal Sehgal"
                />
                </div>
                <div className='md:mt-4 mt-2'>
                  <h3 className='text-black  md:text-2xl text-lg font-S700'>Best Customer Experience Team of The Year Award</h3>
                  <p className='text-black text-base font-S300'>By Kamikaze B2B Media</p>
                </div>
              </div>
            </div>
            <div className='lg:w-1/3 w-full'>
              <div className='about-box md:pt-10 md:px-5 p-5'>
              <div className='about-image-box'>
                <Image
                  src="/assets/img/award2.png" className='m-auto'
                  width={82}
                  height={267}
                  alt=""
                />
                </div>
                <div className='md:mt-4 mt-2'>
                  <h3 className='text-black  md:text-2xl text-lg font-S700'>Best Customer Experience Team of The Year Award</h3>
                  <p className='text-black text-base font-S300'>By Kamikaze B2B Media</p>
                </div>
              </div>
            </div>
            <div className='lg:w-1/3 w-full'>
              <div className='about-box md:pt-10 md:px-5 p-5'>
                <div className='about-image-box'>
                <Image
                  src="/assets/img/award3.png" className='m-auto'
                  width={127}
                  height={242}
                  alt=""
                />
                </div>
                <div className='md:mt-4 mt-2'>
                  <h3 className='text-black  md:text-2xl text-lg font-S700'>Best Customer Experience Team of The Year Award</h3>
                  <p className='text-black text-base font-S300'>By Kamikaze B2B Media</p>
                </div>
              </div>
            </div>
            <div className='lg:w-1/3 w-full'>
              <div className='about-box md:pt-10 md:px-5 p-5'>
                <div className='about-image-box'>
                <Image
                  src="/assets/img/award4.png" className='m-auto'
                  width={183}
                  height={236}
                  alt=""
                />
                </div>
                <div className='md:mt-4 mt-2'>
                  <h3 className='text-black  md:text-2xl text-lg font-S700'>Best Customer Experience Team of The Year Award</h3>
                  <p className='text-black text-base font-S300'>By Kamikaze B2B Media</p>
                </div>
                
              </div>
            </div>
            <div className='lg:w-1/3 w-full'>
              <div className='about-box md:pt-10 md:px-5 p-5'>
                <div className='about-image-box'>
                <Image
                  src="/assets/img/award5.png" className='m-auto'
                  width={193}
                  height={182}
                  alt=""
                />
                </div>
                <div className='md:mt-4 mt-2'>
                  <h3 className='text-black  md:text-2xl text-lg font-S700'>Best Customer Experience Team of The Year Award</h3>
                  <p className='text-black text-base font-S300'>By Kamikaze B2B Media</p>
                </div>
              </div>
            </div>
            <div className='lg:w-1/3 w-full'>
              <div className='about-box md:pt-10 md:px-5 p-5'>
                <div className='about-image-box'>
                <Image
                  src="/assets/img/award6.png" className='m-auto'
                  width={69}
                  height={210}
                  alt=""
                />
                </div>
                <div className='md:mt-4 mt-2'>
                  <h3 className='text-black  md:text-2xl text-lg font-S700'>Best Customer Experience Team of The Year Award</h3>
                  <p className='text-black text-base font-S300'>By Kamikaze B2B Media</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
   </>
  )
}
