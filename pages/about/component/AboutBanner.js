import React from 'react'
import Image from 'next/image'
export default function AboutBanner() {
  return (
  <>
  <section className='about-service'>
        <div className='relative'>
          <Image
            src="/assets/img/about-banner.png" className='max-w-full w-full  m-auto'
            width={1920}
            height={695}
            alt=""
          />
         
        </div>
      </section>
      <section>
      <div className='max-w-custom mx-auto md:mt-[-20%] z-10 relative'>
      <div class="rounded-tl-55 rounded-tr-55  bg-white m-auto  md:py-[50px] md:w-9/12 3xl:w-1/2 w-full">
          <div className='w-5/6 mx-auto'>
          <h2 className='text-black 3xl:text-custom-64-3xl 3xl:leading-74-3xl 2xl:text-custom-64-2xl 2xl:leading-74-2xl text-custom-64 leading-74 uppercase font-S700  mb-2'>OUR CULTURE AND PHILOSOPHY</h2>
        <div className='[&>p]:text-base culture-before'>
          <p>A strong culture is what separates great companies from those that perish sooner or later. As everything else, be it an invention or any technology, it can be equaled, if not bettered. Building a strong culture by working with exceptional, like-minded people and having a strong infrastructure of systems and processes to enable the envisioned culture is our highest priority.</p>
          <p>
          Nothing in nature, whether living or inert, exists for its own sake. Everything exists to serve something other than itself. The sun, the air, the earth, every tree, animal or even natural resources are examples of this. The greater its contribution to others, the greater is the power that is bestowed upon it. As human beings, at the smallest level, we exist for our immediate families. As we allow the radius to expand, it covers the larger community that we are a part of, and eventually we exist for all of humanity. The more number of people we impact, the greater is the power that we receive from the cosmos. It is the fundamental law of nature.
          </p>
          <p> It is the conscious understanding of this simple universal principle that forms the core purpose of Lava - “To empower people to do more, to be more.” This includes all stakeholders – consumers, partners, employees, shareholders and society as a whole.</p>
          <p> External circumstances are more or less the same for everyone, so it stands to reason that the main difference between success and failure is purely internal. For the individual, the internal factor is their character, and for the collective, it is culture, which comprises the shared beliefs, behaviors and actions of a group of people. Lava follows a belief system that anything is possible when conceived with clarity and pursued with commitment, conviction, focus and determination. It is expressed as - Create Possibilities. While belief forms the foundation of a culture, values are its pillars. For Lava, these pillars are built on the dictum of “do what is right and do it right”, which are manifested into our values of integrity, passion for excellence and adaptability.</p>
          </div>

          </div>
          </div>  
      </div>  
      </section>
  </>
  )
}
