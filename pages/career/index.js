import React,{useEffect} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import CommonBanner from '@/components/CommonSections/CommonBanner'
export default function Index() {

  return (
    <>
    <CommonBanner imagesrc="/assets/img/career.png" heading="Join Us" content="It isn’t just a career. It’s an opportunity that lets you create possibilities. An opportunity to do more and be more."/>
    <section className='md:py-custom-padding  py-custom-padding'>
        <div className='max-w-custom mx-auto'>
           <div className='flex space-x-10'>
            <div className='w-1/2'>
              <div>
              <Image
                    src="/assets/img/join-us.png" className='max-w-full w-full  m-auto'
                    width={746}
                    height={620}
                    alt=""
                    />
                </div>  
            </div>
            <div className='w-1/2'>
                <div className='join-content'>
                    <h3 className='lg:text-custom-64 lg:leading-74 text-black font-S700 leading-normal'>Join Us</h3>
                    <p className='text-[#565656] lg:text-lg  lg:my-5'>Join two of the fastest growing consumer brands in India - Lava. Whether it’s product design, research & development, product management, marketing & communication, sales & support or any other opportunity, we promise to challenge you enough to make your best achievements possible.</p>
                    <p className='text-[#565656] lg:text-lg  lg:my-5'>Our work culture in aligned to our values and emphasises on entrepreneurship and empowerment, on doing the right thing, on constant learning and on filling the world with positive energy. We believe that every challenge is an opportunity and every problem has a solution. We create fun and happiness for ourselves and for everyone else.</p>
                    <p className='text-[#565656] lg:text-lg  lg:my-5'>Come join us and together lets create products that make a difference for the rest of the world.</p>
                    <p className='text-[#565656] lg:text-lg'>To explore the opportunities at Lava, please share your updated Resume on mail id :
                  <Link href="careers@lavainternational.in" className="font-S700 underline text-[#ED1556]" target="_blank">careers@lavainternational.in</Link></p>
                    
                    
                </div>
            </div>
            
            </div> 
        </div>
    </section>
    </>
  )
}
