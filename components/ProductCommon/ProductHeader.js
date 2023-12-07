import React,{useEffect} from 'react'
import Link from 'next/link'
export default function ProductHeader() {
    useEffect(()=>{

        window.onscroll = function() {
          var headers = document.getElementsByClassName('product-header');
    
          var scrollPosition = window.scrollY || document.documentElement.scrollTop;
          for (var i = 0; i < headers.length; i++) {
            if (scrollPosition >10) {
              headers[i].classList.add('fixed-header');
            } else {
              headers[i].classList.remove('fixed-header');
            }
          }
        };
    
      },[])
  return (
    <>
    <section className='w-full sticky-position md:py-5 border-b border-solid border-gray-300 custom-padding product-header'>
                <div className='sticky-position mx-auto max-w-custom'>
                    <ul className='sm:flex sm:space-x-10'>
                        <li><Link href="" className='text-black text-base font-S400 leading-10 uppercase'>New Launches</Link></li>
                        <li><Link href="" className="text-black text-base font-S400 leading-10 uppercase product-active">AGNI</Link></li>
                        <li><Link href="" className="text-black text-base font-S400 leading-10 uppercase">Blaze</Link></li>
                        <li><Link href="" className="text-black text-base font-S400 leading-10 uppercase">Storm</Link></li>
                        <li><Link href="" className="text-black text-base font-S400 leading-10 uppercase">YUVA</Link></li>
                    </ul> 
                </div>

            </section>
    </>
  )
}
