import React from 'react'
import Link from 'next/link'
export default function BlogList() {
    return (
        <>
            <div className='flex  flex-wrap blog-list'>
                <div className='w-1/2'>
                    <div className='blog-list-box'>
                        <div className='blog-image rounded-tl-24'>
                        <img src="/assets/img/blog1.png" alt="" className='rounded-tl-10 rounded-tr-10 w-full'/>
                        </div>
                        <div className="blog-list-content lg:p-5 lg:pb-10">
                            <div className='text-black'>
                                <span className='lg:text-base font-S500 text-[#565656] uppercase'>MARCH 31,2023</span>
                                <h2 className='lg:text-2xl font-S600 lg:my-2 '>Introducing the Best 5G Mobile Phones</h2>
                                <div>
                                    <p className='lg:text-xl  font-S300'>What a great time to be an Indian! India is stepping on the accelerator wherever I see. Whether it’s the 10,000 kilometers</p>
                                </div>
                                <Link href='' className='btn btn-tag lg:mt-5'>Tag</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-1/2'>
                    <div className='blog-list-box'>
                        <div className='blog-image '> 
                            <img src="/assets/img/blog2.png" alt="" className='rounded-tl-10 rounded-tr-10 w-full'/>
                        </div>
                        <div className="blog-list-content lg:p-5 lg:pb-10">
                            <div className='text-black'>
                                <span className='lg:text-base font-S500 text-[#565656] uppercase'>MARCH 31,2023</span>
                                <h2 className='lg:text-2xl font-S600 lg:my-2'>Introducing the Best 5G Mobile Phones</h2>
                                <div>
                                    <p className='lg:text-xl  font-S300'>What a great time to be an Indian! India is stepping on the accelerator wherever I see. Whether it’s the 10,000 kilometers</p>
                                </div>
                                <Link href='' className='btn btn-tag lg:mt-5'>Tag</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-1/2'>
                    <div className='blog-list-box'>
                        <div className='blog-image '> 
                            <img src="/assets/img/blog2.png" alt="" className='rounded-tl-10 rounded-tr-10 w-full'/>
                        </div>
                        <div className="blog-list-content lg:p-5 lg:pb-10">
                            <div className='text-black'>
                                <span className='lg:text-base font-S500 text-[#565656] uppercase'>MARCH 31,2023</span>
                                <h2 className='lg:text-2xl font-S600 lg:my-2'>Introducing the Best 5G Mobile Phones</h2>
                                <div>
                                    <p className='lg:text-xl  font-S300'>What a great time to be an Indian! India is stepping on the accelerator wherever I see. Whether it’s the 10,000 kilometers</p>
                                </div>
                                <Link href='' className='btn btn-tag lg:mt-5'>Tag</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-1/2'>
                    <div className='blog-list-box'>
                        <div className='blog-image '> 
                            <img src="/assets/img/blog2.png" alt="" className='rounded-tl-10 rounded-tr-10 w-full'/>
                        </div>
                        <div className="blog-list-content lg:p-5 lg:pb-10">
                            <div className='text-black'>
                                <span className='lg:text-base font-S500 text-[#565656] uppercase'>MARCH 31,2023</span>
                                <h2 className='lg:text-2xl font-S600 lg:my-2'>Introducing the Best 5G Mobile Phones</h2>
                                <div>
                                    <p className='lg:text-xl  font-S300'>What a great time to be an Indian! India is stepping on the accelerator wherever I see. Whether it’s the 10,000 kilometers</p>
                                </div>
                                <Link href='' className='btn btn-tag lg:mt-5'>Tag</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
