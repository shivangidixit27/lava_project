import React from 'react'
import Image from 'next/image'
export default function AboutLava() {
  return (
  <>
  <section className='relative'>
        <div className=' flex lg:w-5/6 lg:ml-auto relative trusted-brand'>
          <div className='brand-ribbon-box z-10'>
            <p className='3xl:text-custom-32-3xl 3xl:leading-42-3xl 2xl:text-custom-32-2xl 2xl:leading-42-2xl sm:text-custom-32-sm sm:leading-42-sm text-custom-32 leading-42 font-S500'>Started in 2009 | 30,000+ people | Most Trusted Brand in India</p>
          </div>
          <div className='relative flex md:flex-row flex-col'>
            <div className='md:w-3/5 w-full md:p-20 md:pr-0 z-10 md:mt-20'>
              <p className='text-base font-S400 text-white'>
                Lava International Limited is a leading Mobile Handset Company in India and has expanded its operations to multiple countries across the world. Right from its inception Lava has been at the forefront of building a strong ecosystem of design and manufacturing of mobile handsets. The company has been building mobile handset design capability including industrial design, mechanical design, hardware design & software design. In line with the Govt. of India’s ‘Make in India’ initiative, Lava has taken a lead in support of this important nation building program and has already set up a design team in India, becoming the first to do so in the country.</p>
              <p className='text-base lg:mt-5 font-S400 text-white'>With this ‘Design in India’ initiative, Lava is now the only Mobile handset company that makes truly “Make In India” phones with complete control on design and manufacturing within India. Lava was also ranked as the ‘Most Trustworthy Brand’ in the CMR Retail Sentiment Index 2018.
                Lava products are available through a nationwide retail network of 1.65 Lakh retailers who in turn are directly served by over 1000 distributors. Lava’s after sales service network is one of the largest in the country with close to 800+ professionally managed service centers focused on speed and quality of service.
              </p>
            </div>
            <div className='md:w-2/5 w-full  h-auto flex align-bottom relative'>
              <Image
                src="/assets/img/brand-img.png" className='m-auto standard-image-size md:absolute md:bottom-0 md:right-0'
                width={724}
                height={598}  
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
  </>
  )
}
