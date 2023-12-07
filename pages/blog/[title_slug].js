import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { $ } from 'react-jquery-plugin';
import BlogDetail from './component/BlogDetail';
import BlogSidebar from './component/BlogSidebar';
import BlogBanner from './component/BlogBanner';
function Detail() {
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
                    <BlogDetail/>
                </div>
                </div>
            </div>
            </section>
        </>

    )
}
export default Detail