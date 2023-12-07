
import React, { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Thumbs, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/thumbs';
import 'swiper/css/effect-fade';
import { $ } from 'react-jquery-plugin';
export default function ProductList() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [thumbsSwiper1, setThumbsSwiper1] = useState(null);
    const [thumbsSwiper2, setThumbsSwiper2] = useState(null);
    useEffect(() => {
        if (typeof window !== "undefined") {

            $(".color-click").on("click", function () {

                var src = $(this).data("target");
                $(this).addClass("thumb-active").siblings().removeClass("thumb-active")
                $(this).parents(".product-box").find(".product-images img").attr("src", src)

            })
        }
    })

    return (
        <>
            <section className='py-5 sm:py-16'>
                <div className='mx-auto max-w-custom'>
                    <div className='flex space-x-32'>
                        <div className='product-box relative overflow-hidden w-1/3 rounded-lg bg-[#F8F8F8] md:px-10 md:pt-10 md:pb-0'>
                            <div className='product-image-box relative'>
                                <Swiper
                                    spaceBetween={10}
                                    thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                                    modules={[Thumbs, EffectFade]}
                                    className="product-slider"
                                    effect='fade'
                                >
                                    <SwiperSlide>
                                        <div className='product-images'>
                                            <img src="/assets/img/product-image1.png" className='m-auto' />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='product-images'>
                                            <img src="/assets/img/product-image2.png" className='m-auto' />
                                        </div>
                                    </SwiperSlide>

                                </Swiper>

                                <Swiper
                                    onSwiper={setThumbsSwiper}
                                    spaceBetween={10}
                                    slidesPerView={4}
                                    watchSlidesProgress={true}
                                    modules={[Thumbs]}
                                    className="thumb-slider md:my-5"
                                >
                                    <SwiperSlide>
                                        <img src="/assets/img/color2.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/assets/img/color2.png" />
                                    </SwiperSlide>

                                </Swiper>
                            </div>
                            <div className='product-content'>
                                <h3 className='sub-heading font-S500'>AGNI 2</h3>
                                <p className='font-S400 content-para'>Ultra-fast Performance MediaTek D6020</p>
                                <p className='font-S500 price md:mt-4'>₹20,499<span className='strike-rupee line-through'>₹23,499</span></p>
                            </div>
                            <div className='flex justify-between product-buy-now md:space-x-5'>
                                <div className='w-1/2'>
                                    <Link href="" className="product-btn product-btn-trans" data-aos="fade-right" data-aos-duration='1300'>Learn More</Link>
                                </div>
                                <div className='w-1/2'>
                                    <Link href="" className="product-btn" data-aos="fade-right" data-aos-duration='1300'>Buy</Link>
                                </div>
                            </div>
                        </div>
                        <div className='product-box relative overflow-hidden w-1/3 rounded-lg bg-[#F8F8F8] md:px-10 md:pt-10 md:pb-0'>
                            <div className='product-image-box relative'>
                                <Swiper
                                    spaceBetween={10}
                                    thumbs={{ swiper: thumbsSwiper1 && !thumbsSwiper1.destroyed ? thumbsSwiper1 : null }}
                                    modules={[Thumbs, EffectFade]}
                                    className="product-slider"
                                    effect='fade'
                                >
                                    <SwiperSlide>
                                        <div className='product-images'>
                                            <img src="/assets/img/product-image1.png" className='m-auto' />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='product-images'>
                                            <img src="/assets/img/product-image2.png" className='m-auto' />
                                        </div>
                                    </SwiperSlide>

                                </Swiper>

                                <Swiper
                                    onSwiper={setThumbsSwiper1}
                                    spaceBetween={10}
                                    slidesPerView={4}
                                    watchSlidesProgress={true}
                                    modules={[Thumbs]}
                                    className="thumb-slider md:my-5"
                                >
                                    <SwiperSlide className='mr-10'>
                                        <img src="/assets/img/color2.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/assets/img/color2.png" />
                                    </SwiperSlide>

                                </Swiper>
                            </div>
                            <div className='product-content'>
                                <h3 className='sub-heading font-S500'>AGNI 2</h3>
                                <p className='font-S400 content-para'>Ultra-fast Performance MediaTek D6020</p>
                                <p className='font-S500 price md:mt-4'>₹20,499<span className='strike-rupee line-through'>₹23,499</span></p>
                            </div>
                            <div className='flex justify-between product-buy-now md:space-x-5'>
                                <div className='w-1/2'>
                                    <Link href="" className="product-btn product-btn-trans" data-aos="fade-right" data-aos-duration='1300'>Learn More</Link>
                                </div>
                                <div className='w-1/2'>
                                    <Link href="" className="product-btn" data-aos="fade-right" data-aos-duration='1300'>Buy</Link>
                                </div>
                            </div>
                        </div>
                        <div className='product-box relative overflow-hidden w-1/3 rounded-lg bg-[#F8F8F8] md:px-10 md:pt-10 md:pb-0'>

                            <div className='product-image-box relative'>
                                <div className='product-images'>
                                    <img src="/assets/img/product-image1.png" className='m-auto' />
                                </div>
                                <div className='flex space-x-5 justify-center lg:my-10 thumb-slider'>

                                    <button className='color-click thumb-active' data-target="/assets/img/product-image1.png"><img src="/assets/img/color2.png" /></button>
                                    <button className='color-click' data-target="/assets/img/product-image2.png"><img src="/assets/img/color2.png" /></button>

                                </div>
                                </div>
                                <div className='product-content'>
                                    <h3 className='sub-heading font-S500'>AGNI 2</h3>
                                    <p className='font-S400 content-para'>Ultra-fast Performance MediaTek D6020</p>
                                    <p className='font-S500 price md:mt-4'>₹20,499<span className='strike-rupee line-through'>₹23,499</span></p>
                                </div>
                                <div className='flex justify-between product-buy-now md:space-x-5'>
                                    <div className='w-1/2'>
                                        <Link href="" className="product-btn product-btn-trans" data-aos="fade-right" data-aos-duration='1300'>Learn More</Link>
                                    </div>
                                    <div className='w-1/2'>
                                        <Link href="" className="product-btn" data-aos="fade-right" data-aos-duration='1300'>Buy</Link>
                                    </div>
                                </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
