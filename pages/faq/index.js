import React,{useEffect,useState} from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

import 'react-accessible-accordion/dist/fancy-example.css';
export default function Index() {
    useEffect(() => {

        if (typeof window !== "undefined") {

            document.body.classList.add('no-banner');
        }

        return () => {
            if (typeof window !== "undefined") {

                document.body.classList.remove('no-banner');
            }
        }


    }, [])
  return (
    
    <>        
<section class="py-5 sm:py-16 text-black faq-accordian">
   <div className='max-w-custom mx-auto'>
    <h2 className='lg:text-custom-64 lg:leading-74 lg:my-10 font-S700'>Frequently Asked Questions</h2>
    <Accordion allowZeroExpanded preExpanded={['a']}>
            <AccordionItem uuid="a" className='item-bg'>
                <AccordionItemHeading className='font-S500 lg:text-custom-22 lg:leading-32'>
                    <AccordionItemButton>
                        What harsh truths do you prefer to ignore?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p className='lg:text-custom-22 font-S300 lg:w-5/6'>
                    Lava Mobiles currently offer smartphones under three categories, beginner, youth centric, and gaming smartphones. The Yuva series is our beginner range of smartphones. The Blaze smartphones focus on providing a balanced performance for youth buying their first smartphone, and the Agni series features the best gaming phones in their category.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className='item-bg'>
                <AccordionItemHeading className='font-S500 lg:text-custom-22 lg:leading-32'>
                    <AccordionItemButton>
                        Is free will real or just an illusion?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p className='lg:text-lg font-S300 lg:w-5/6'>
                    Lava Mobiles currently offer smartphones under three categories, beginner, youth centric, and gaming smartphones. The Yuva series is our beginner range of smartphones. The Blaze smartphones focus on providing a balanced performance for youth buying their first smartphone, and the Agni series features the best gaming phones in their category.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className='item-bg'>
                <AccordionItemHeading className='font-S500 lg:text-custom-22 lg:leading-32'>
                    <AccordionItemButton>
                    What is the latest Android version supported by Lava Mobiles?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p className='lg:text-lg font-S300 lg:w-5/6'>
                    Lava Mobiles currently offer smartphones under three categories, beginner, youth centric, and gaming smartphones. The Yuva series is our beginner range of smartphones. The Blaze smartphones focus on providing a balanced performance for youth buying their first smartphone, and the Agni series features the best gaming phones in their category.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className='item-bg'>
                <AccordionItemHeading className='font-S500 lg:text-custom-22 lg:leading-32'>
                    <AccordionItemButton>
                    What is the storage capacity of Lava Mobiles?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p className='lg:text-lg font-S300 lg:w-5/6'>
                    Lava Mobiles currently offer smartphones under three categories, beginner, youth centric, and gaming smartphones. The Yuva series is our beginner range of smartphones. The Blaze smartphones focus on providing a balanced performance for youth buying their first smartphone, and the Agni series features the best gaming phones in their category.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className='item-bg'>
                <AccordionItemHeading className='font-S500 lg:text-custom-22 lg:leading-32'>
                    <AccordionItemButton>
                    What are the important features to consider when buying a smartphone?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p className='lg:text-lg font-S300 lg:w-5/6'>
                    Lava Mobiles currently offer smartphones under three categories, beginner, youth centric, and gaming smartphones. The Yuva series is our beginner range of smartphones. The Blaze smartphones focus on providing a balanced performance for youth buying their first smartphone, and the Agni series features the best gaming phones in their category.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className='item-bg'>
                <AccordionItemHeading className='font-S500 lg:text-custom-22 lg:leading-32'>
                    <AccordionItemButton>
                        Is free will real or just an illusion?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p className='lg:text-lg font-S300 lg:w-5/6'>
                    Lava Mobiles currently offer smartphones under three categories, beginner, youth centric, and gaming smartphones. The Yuva series is our beginner range of smartphones. The Blaze smartphones focus on providing a balanced performance for youth buying their first smartphone, and the Agni series features the best gaming phones in their category.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className='item-bg'>
                <AccordionItemHeading className='font-S500 lg:text-custom-22 lg:leading-32'>
                    <AccordionItemButton>
                        Is free will real or just an illusion?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p className='lg:text-lg font-S300 lg:w-5/6'>
                    Lava Mobiles currently offer smartphones under three categories, beginner, youth centric, and gaming smartphones. The Yuva series is our beginner range of smartphones. The Blaze smartphones focus on providing a balanced performance for youth buying their first smartphone, and the Agni series features the best gaming phones in their category.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
   </div>
</section>
    </>
  )
}
