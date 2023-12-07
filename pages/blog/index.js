import React, { useState, useEffect } from 'react'
import BlogBanner from './component/BlogBanner';
import BlogSidebar from './component/BlogSidebar';
import BlogList from './component/BlogList';
function Index() {
  return (
    <>

<BlogBanner/>
<section className='py-custom-padding'>
  <div className='max-w-custom mx-auto'>
    <div className='flex lg:space-x-10'>
      <div className='lg:w-1/4'>
         <BlogSidebar/>
      </div>
      <div className='lg:w-3/4'>
        <BlogList/>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default Index;


