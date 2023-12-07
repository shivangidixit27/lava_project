import React from 'react'
import Image from 'next/image'
export default function Leadership() {
  return (
    <>
    <section className='py-5 sm:py-16'>
        <div className='mx-auto max-w-custom'>
          <div className=''>
            <h2 className='text-black 3xl:text-custom-64-3xl 3xl:leading-74-3xl 2xl:text-custom-64-2xl 2xl:leading-74-2xl text-custom-64 leading-74 uppercase font-S700 md:mb-10 mb-5'>LEADERSHIP</h2>
          </div>
          <div className='flex md:flex-row flex-col items-center relative'>
            <div className='md:w-1/2 w-full'>
              <Image src="/assets/img/leadership.png" width={640} height={384} className='max-w-full w-full' />

            </div>
            <div className="relative md:top-1/2 md:right-40 md:w-1/2 w-full custom-gradient h-auto lg:pt-5 lg:pb-10 lg:px-10">
              <div className='flex lg:mb-6'>
                <h3 className='text-white font-Siri text-xl font-S700'>Hari Om Rai</h3>
                <p className='text-white font-Siri text-xl font-S300 lg:ml-4'>Chairman & Managing Director</p>
              </div>
              <p className='text-white text-base font-S400'>
                In 2009, Hari Om Rai established Lava International with the vision - “To empower people to do more, to be more”. Lava has shown tremendous growth over the years with its annual turnover crossing $1.2 Billion.</p>
              <p className='text-white text-base font-S400'> Hari Om Rai is the Co-Chairman of Government of India’s Fast Track Task Force to catalyze and re-establish the mobile handsets manufacturing eco-system in India. He is also the proud winner of the coveted ‘Entrepreneur of The Year’ award at The 9th Asia Pacific Entrepreneurship Awards 2018 India
              </p>

            </div>
          </div>
          <div className='md:pt-10'>
          <div className='flex flex-col md:flex-row md:space-x-10 space-x-0 md:space-y-0 space-y-10'>
            <div className='lg:w-1/3 w-full'>
              <div className=''>
                <Image
                  src="/assets/img/sunil.png" className='w-full'
                  width={439}
                  height={275}
                  alt="Sunil Bhalla"
                />
                <div className='flex flex-col md:flex-row lg:my-4'>
                  <h3 className='text-black font-Siri text-xl font-S700'>Sunil Bhalla</h3>
                  <p className='text-black font-Siri text-xl font-S300 lg:ml-4'>Co-founder and Director</p>
                </div>
                <p className='text-black text-base font-S400'>Sunil Bhalla is a professional turned serial entrepreneur. A Mechanical engineer & an MBA from IMT, he has worked with Maruti Udyog Limited in the past. At Lava International Limited, he contributes in Strategic Planning.</p>
              </div>
            </div>
            <div className='lg:w-1/3 w-full'>
              <div className=''>
                <Image
                  src="/assets/img/shailendra.png" className='w-full'
                  width={439}
                  height={275}
                  alt="Shailendra Nath Rai"
                />
                <div className='flex flex-col md:flex-row lg:my-4'>
                  <h3 className='text-black font-Siri text-xl font-S700'>Shailendra Nath Rai</h3>
                  <p className='text-black font-Siri text-xl font-S300 lg:ml-4'>Co-founder & Director</p>
                </div>
                <p className='text-black text-base font-S400'>A renowned business professional with over 24 years of varied industry experience, Shailendra Nath Rai is fondly known as SNR. With a degree in Mechanical Engineering and a Green Belt Certification in Six Sigma, SNR is one of the leading professionals in Supply Chain Management in the country today. He has been a part of the greatly acclaimed sponsored research on “Perpetual Supply Demand Balancing” with the Indian School of Business (ISB).</p>
              </div>
            </div>
            <div className='lg:w-1/3 w-full'>

              <div className=''>
                <Image
                  src="/assets/img/vishal.png" className='w-full'
                  width={439}
                  height={275}
                  alt="Vishal Sehgal"
                />
                <div className='flex flex-col md:flex-row lg:my-4'>
                  <h3 className='text-black font-Siri text-xl font-S700'>Vishal Sehgal</h3>
                  <p className='text-black font-Siri text-xl font-S300 lg:ml-4'>Co-founder & Director</p>
                </div>
                <p className='text-black text-base font-S400'>From management trainee at Marico to CEO at Airtel Rajasthan, Vishal has seen business in its various hues. Having worked both in startups like Marico (1992) and Zip Telecom (2001), as well as large organizations like Pepsico India (1998) and Airtel (2005), Vishal has a rich blend of entrepreneurial and professional experience. In his last stint at Airtel Rajasthan before co-founding Lava International, he led the business to a dominant 45% revenue market share in a multi-player industry.</p>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>
    </>
  )
}
