import CommonBanner from '@/components/CommonSections/CommonBanner'
import Link from 'next/link'
import React from 'react'

export default function Index() {
  return (
   <>
    <CommonBanner heading = "Recycle e-waste for better tomorrow" content="Dispose your old phone or related accessories & contribute towards a safer environment." imagesrc="/assets/img/ewaste-banner.png"/>
    <section className='py-5 sm:py-16 ewaste-section'>
      <div className='max-w-custom mx-auto'>
        <div className='w-2/3 mx-auto border-left lg:pl-10'> 
        <h2 className='lg:text-custom-64 lg:leading-74 font-S700 text-black lg:mb-5'>E-Waste Management</h2>
        <div className='lg:mb-10'>
            <h3 className='lg:text-custom-32 lg:leading-42 font-S600 text-[#222]'>What Is E-Waste?</h3>
            <ul className='lg:[&>li]:text-lg [&>li]:font-S300'>
                <li>E-waste is a popular, informal name for electronic products nearing the end of their "useful life." Mobile Phones and their accessories, Telephones, pay phones, cordless phones, Air Conditioners, Televisions, Refrigerators, Washing Machines, Computers, VCDs, stereos, copiers, and fax machines are common electronic products. Many of these products can be reused, refurbished, or recycled.</li>
                <li>
                E-waste has been one of the fastest growing waste streams in the world. While e-waste contains valuable materials such as aluminium, copper, gold, palladium and silver, it also contains harmful substances like cadmium, lead and mercury. In the absence of proper awareness, disposing e-waste in landfill can result in toxic emissions to the air, water and soil and pose a serious health and environmental hazards.
                </li>
            </ul>
        </div>
        <div className='lg:mb-10'>
        <h3 className='lg:text-custom-32 lg:leading-42 font-S600 text-[#222]'>LAVA Recycling Programme</h3>
            <ul className='lg:[&>li]:text-lg [&>li]:font-S300'>
                <li>At LAVA we understand that our responsibility doesn't end at selling you our products. LAVA has been working in the area of safe disposal of electronic waste. Since mobiles and other electronic items are made of hazardous constituents under our e-waste policy as well the legislation passed by the Ministry of Environment Forests and Climate Change (MoEF & CC) Government of India, called E-waste (Management) Rules, 2016, which comes into effect from 1st Oct 2016.</li>
                <li>
                LAVA will seek shared responsibility and cooperation from customers in reducing the environmental impact of their products.
                </li>
                <li>LAVA will comply with all the applicable laws related to e-waste management. As a part of e-waste recycling initiative, LAVA has partnered with 3R Recycler, Greeniva Recycler, Attero Recycling India's leading electronic asset management and disposal company to comply with E-Waste (Management) Rules, 2016 in providing environmentally sound management of end of life electronics.</li>
                <li>3R Recycler, Greeniva Recycler, Attero Recycling - As part of this partnership with 3R Recyclers, Greeniva Recycler, Attero Recycling the company will ensure environmentally sound management of electronics that have reached their end of life phase. 3R Recyclers, Greeniva Recycler, Attero Recycling has obtained all the necessary authorizations from the appropriate governmental agencies for their processing facilities. 3R Recycler, Greeniva Recycler, Attero Recycling ensures proper recycling and disposal of e-waste. This helps us protect the environment from any hazardous consequences, which would be otherwise caused by the inappropriate waste management of e-waste.</li>
            </ul>
            <div className='dos-dont'>
            <h4 className='lg:text-2xl font-S600 text-[#222] lg:my-3'>Do's</h4>
            <ul className='lg:[&>li]:text-lg [&>li]:font-S300'>
              <li>Follow the instructions for proper handling of end-of-life equipment in our catalogues</li>  
              <li>Make sure that your electronic products are recycled only by authorised recyclers/dismantlers</li>
              <li>Consult your nearest LAVA Collection Point for disposing products that have reached end-of-life</li>
              <li>Drop-off used Mobile Phones, batteries or any accessories at the nearest LAVA Collection Point</li>
              <li>Separate the packaging materials from the electronic products as per safe waste disposal options</li>
              <li>Protect the glass surface of any electronic product to avoid breakage</li>
            </ul>
            </div>
            <div className='dos-dont'>
            <h4 className='lg:text-2xl font-S600 text-[#222] lg:my-3'>Don'ts</h4>
            <ul className='lg:[&>li]:text-lg [&>li]:font-S300'>
              <li>Never dismantle your electronic products yourself</li>  
              <li>Never dispose electronic products in bins having 'Do Not Dispose' sign</li>
              <li>Never sell or give e-waste to informal and unorganised sectors like local scrap dealer/ rag pickers</li>
              <li>Never throw your electronic waste along with municipal waste as they end up reaching landfills.</li>
              <li>Separate the packaging materials from the electronic products as per safe waste disposal options</li>
              <li>Protect the glass surface of any electronic product to avoid breakage</li>
            </ul>
            </div>
        </div>
        <div className='lg:mb-10'>
        <h3 className='lg:text-custom-32 lg:leading-42 font-S600 text-[#222]'>Life Cycle of our products</h3>
            <p className='lg:text-lg lg:font-S300 lg:my-6'>As defined under New E-waste (Management) Rules, 2016 life cycle of our Feature Phone is 7 years and Smartphone is 5 Years.</p>
        </div>
        <div className='lg:mb-10'>
        <h3 className='lg:text-custom-32 lg:leading-42 font-S600 text-[#222]'>Collection Points/Drop Points</h3>
            <ul className='lg:[&>li]:text-lg [&>li]:font-S300'>
                <li>You can find your nearest Collection Points<Link href='' className='block text-[#ED1556] underline font-S500'>Click here</Link></li>  
                <li>
                Annual Report Digital document<Link href="" className='pdf-icon'><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <path d="M19.1248 3.5H8.49997C7.83693 3.5 7.20106 3.76339 6.73222 4.23222C6.26339 4.70106 6 5.33693 6 5.99997V25.9997C6 26.6627 6.26339 27.2986 6.73222 27.7675C7.20106 28.2363 7.83693 28.4997 8.49997 28.4997H23.4998C24.1628 28.4997 24.7987 28.2363 25.2675 27.7675C25.7364 27.2986 25.9997 26.6627 25.9997 25.9997V10.3749L19.1248 3.5Z" stroke="#ED1556" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M18.5 3.5V10.9999H25.9999" stroke="#ED1556" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M21.0018 17.25H11.002" stroke="#ED1556" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M21.0018 22.25H11.002" stroke="#ED1556" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M13.5019 12.25H11.002" stroke="#ED1556" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg></Link>
                </li>
            </ul>
            <p className='lg:text-lg lg:font-S300 lg:mb-6 lg:mt-10'>In case of any queries regarding the proper disposal and/or recycling of electronics, consumers can contact the helpdesk (Toll free) at:</p>
            <div className='contact-details'>
                <ul className='lg:[&>li]:text-custom-22 [&>li]:font-S500 [&>li]:text-black flex flex-wrap lg:[&>li]:w-1/2'>
                <li><Link href="tel:18001028632">1800-102-8632</Link> <span className='text-[#565656] lg:text-lg font-S300'>North India</span></li>
                <li><Link href="tel:18008433303">1800-843-3303</Link> <span className='text-[#565656] lg:text-lg font-S300'>South India</span></li>
                <li><Link href="tel:18008433302">1800-843-3302</Link> <span className='text-[#565656] lg:text-lg font-S300'>West India</span></li>
                <li><Link href="tel:18008433301">1800-843-3301</Link> <span className='text-[#565656] lg:text-lg font-S300'>East India</span></li>
                <li><Link href="info@greenivarecycler.com" className="text-[#ED1556]" target='_blank'>info@greenivarecycler.com</Link> <span className='text-[#565656] lg:text-lg font-S300'>M/s Greeniva Recycler Pvt. Ltd.</span></li>
                <li><Link href="info@3rrecycler.com" className="text-[#ED1556]"  target='_blank'>info@3rrecycler.com</Link> <span className='text-[#565656] lg:text-lg font-S300'>M/s 3R Recycler Pvt. Ltd.</span></li>
                <li><Link href="info@attero.in" className="text-[#ED1556]"  target='_blank'>info@attero.in</Link> <span className='text-[#565656] lg:text-lg font-S300'>M/s Attero Recycling Pvt. Ltd.</span></li>
                </ul>

            </div>
        </div>
        </div>
        </div>  
    </section>
   </>
  )
}
