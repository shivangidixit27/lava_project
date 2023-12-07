import React from 'react'
import Image from 'next/image'
export default function ProductBanner() {
 
  return (
    <>
    <section className='py-5 sm:py-16 no-banner-space'>
                <div className='mx-auto max-w-custom'>
                    <div className='relative product-banner'>
                        <Image src="/assets/img/agni-banner.png" width={1408} height={332} className='w-full' alt="" />
                        <div className='absolute inset-0 flex items-center justify-center'>
                            <div className="p-4">
                                <h2 className='md:text-5xl text-white font-Siri font-S400 leading-58'>AGNI Series</h2>
                                <p className='text-white text-center font-Siri md:text-xl font-S300 leading-100'>Ahead of the Curve</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </>
  )
}
