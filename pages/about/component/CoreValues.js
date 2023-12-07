import React from 'react'
import Image from 'next/image'
export default function CoreValues() {
  return (
    <>
    <section className='py-5 sm:py-16'>
        <div className='max-w-custom mx-auto'>
          <div className=''>
          <h2 className='text-black 3xl:text-custom-64-3xl 3xl:leading-74-3xl 2xl:text-custom-64-2xl 2xl:leading-74-2xl text-custom-64 leading-74 uppercase font-S700 md:mb-10 mb-5'>CORE VALUES</h2>
          </div>
          <div className='flex flex-col md:flex-row md:space-x-10 space-x-0 md:space-y-0 space-y-10'>
            <div className='md:w-1/3 w-full'>
              <div className=''>
              <div className='core-val-image'>
                <Image
                  src="/assets/img/core-value1.png" className=''
                  width={78}
                  height={77}
                  alt="Integrity"
                />
                </div>
                <h3 className='lg:text-xl font-S700 text-black md:mt-4'>Integrity</h3>
                <p className='text-base text-[#757575] font-S400 md:w-[90%] w-full'>Steadfast adherence to high moral and professional standards. We should have the same qualities that we seek from others, to be of value to others. It is from this premise that we have adopted the value of integrity, which is essentially about doing the right things.</p>
              </div>
            </div>
            <div className='md:w-1/3 w-full'>
              <div className=''>
              <div className='core-val-image'>
                <Image
                  src="/assets/img/core-value2.png" className=''
                  width={100}
                  height={125}
                  alt="Integrity"
                />
                </div>
                <h3 className='lg:text-xl font-S700 text-black md:mt-4'>Passion For Excellence</h3>
                <p className='text-base text-[#757575] font-S400 md:w-[90%] w-full'>Intense keenness to stretch the limits of greatness in everything we do. The desire to go into the details to achieve the highest standards of quality with utmost efficiency so that we can achieve great things, together. Excellence is a continuous cycle of rigorous planning, execution and measurement.</p>
              </div>
            </div>
            <div className='md:w-1/3 w-full'>
              <div className=''>
               <div className='core-val-image'>
               <Image
                  src="/assets/img/core-value3.png" className=''
                  width={96}
                  height={120}
                  alt=""
                />
               </div>
                <h3 className='lg:text-xl font-S700 text-black md:mt-4'>Adaptability</h3>
                <p className='text-base text-[#757575] font-S400 md:w-[90%] w-full'>The ability to quickly evolve in response to changing circumstances. Possessing the humility to truly understand the principle of constant change, along with the nimbleness to quickly evolve and adapt to it, is crucial for survival.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
