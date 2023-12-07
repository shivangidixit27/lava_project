import React from 'react'
import Link from 'next/link'
export default function BlogSidebar() {
  return (
   <>
   <div className='card-sidebar lg:py-5'>
    <h3 className='lg:text-2xl text-[#222] font-S600 lg:mb-3 lg:ml-5'>Explore By Categories</h3>
    <ul className='list-disc lg:[&>li]:text-xl lg:[&>li]:font-S400 lg:[&>li]:p-2 lg:[&>li]:pl-0 lg:ml-10'>
        <li><Link href=''  className=''>Latest mobile phones and tablets</Link></li>
        <li><Link href='' className=''>Product</Link></li>
        <li><Link href=''>Brand</Link></li>
        <li><Link href=''>Tips And Tricks</Link></li>
    </ul>
   </div>
   <div className='year-selection lg:mt-5'>
        <select className='w-full lg:text-xl font-S400'>
        <option value="">Select Year</option>
        <option value="">2019</option>
        <option value="">2019</option>
        <option value="">2019</option>
        <option value="">2019</option>
      </select>
   </div>
   </>
  )
}
