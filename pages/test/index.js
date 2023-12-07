// import React, { useState } from 'react';

// const ProductPage = () => {
//   const products = [
//     {
//       id: 1,
//       name: 'Product 1',
//       variants: [
//         { id: 101, name: 'Variant 1' },
//         { id: 102, name: 'Variant 2', },
//         // Add more variants for Product 1 as needed
//       ],
//     },
//     {
//       id: 2,
//       name: 'Product 2',
//       variants: [
//         { id: 201, name: 'Variant A', price: 49.99, description: 'Description for Variant A' },
//         { id: 202, name: 'Variant B', price: 59.99, description: 'Description for Variant B' },
//         // Add more variants for Product 2 as needed
//       ],
//     },
//     // Add more products as needed
//   ];

//   const [selectedProduct, setSelectedProduct] = useState(products[0]);
//   const [selectedVariant, setSelectedVariant] = useState(selectedProduct.variants[0]);

//   const handleProductClick = (product) => {
//     setSelectedProduct(product);
//     setSelectedVariant(product.variants[0]); // Set the default variant when changing products
//   };

//   const handleVariantClick = (variant) => {
//     setSelectedVariant(variant);
//   };

//   return (
//     <div>
//       {/* Display product buttons */}
//       <div>
//         {products.map((product) => (
//           <button key={product.id} onClick={() => handleProductClick(product)}>
//             {product.name}
//           </button>
//         ))}
//       </div>

//       {/* Display variant buttons for the selected product */}
//       <div>
//         {selectedProduct.variants.map((variant) => (
//           <button key={variant.id} onClick={() => handleVariantClick(variant)}>
//             {variant.name}
//           </button>
//         ))}
//       </div>

//       {/* Display selected product and variant details */}
//       <div>
//         <h2>{selectedProduct.name}</h2>
//         <p>{selectedVariant.name}</p>
//         <p>Price: ${selectedVariant.price}</p>
//         <p>{selectedVariant.description}</p>
//       </div>
//     </div>
//   );
// };

// export default ProductPage;
import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import Link from 'next/link';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import { Carousel } from 'react-responsive-carousel';
import { $ } from 'react-jquery-plugin';
export default function Index() {
useEffect(()=>{
    if (typeof window !== "undefined") {

       $(".color-click").on("click",function(){

        var src = $(this).data("target");
        $(this).addClass("thumb-active").siblings().removeClass("thumb-active")
        $(this).parents(".product-box").find(".product-images img").attr("src",src)  

       })
    }
})

const products = [
      {
        id: 1,
        name: 'Product 1',
        images: [
          { id: 201, name: '/assets/img/product-image1.png'},
          { id: 202, name: '/assets/img/product-image2.png'},
          
        ],
        thumbnail:[
          { id: 201, name: '/assets/img/color2.png'},
          { id: 202, name: '/assets/img/color2.png'},
        ]
      },
      {
        id: 2,
        name: 'Product 2',
        images: [
          { id: 201, name: '/assets/img/product-image1.png'},
          { id: 202, name: '/assets/img/product-image2.png'},
          
        ],
        thumbnail:[
          { id: 201, name: '/assets/img/color2.png'},
          { id: 202, name: '/assets/img/color2.png'},
        ]
      },
      // Add more products as needed
    ];

  return ( 
    <>
{/* <div className='flex'>
<div className='overflow-hidden w-1/3 rounded-lg bg-[#F8F8F8] md:px-10 md:pt-10 md:pb-0'>
<Carousel>
<div className='product-box relative overflow-hidden w-1/3 rounded-lg bg-[#F8F8F8] md:px-10 md:pt-10 md:pb-0'>
            <img alt="" src="/assets/img/product-image1.png" />
            <Carousel.Caption>
                <button className="btn btn-danger">Visit Docs</button>
              </Carousel.Caption>
                    <div className='product-content'>
                               <h3 className='sub-heading font-S500'>AGNI 2</h3> 
                               <p className='font-S400 content-para'>Ultra-fast Performance MediaTek D6020</p>
                               <p className='font-s500 price md:mt-4'>₹20,499<span className='strike-rupee line-through'>₹23,499</span></p>
                            </div>
                            <div className='flex justify-between product-buy-now md:space-x-5'>
                            <div className='w-1/2'>
                            <Link href="" className="product-btn product-btn-trans" data-aos="fade-right"  data-aos-duration='1300'>Learn More</Link>
                            </div>
                            <div className='w-1/2'>
                            <Link href="" className="product-btn" data-aos="fade-right"  data-aos-duration='1300'>Buy</Link>   
                            </div>
                            </div>
        </div>
        <div className='product-box relative overflow-hidden w-1/3 rounded-lg bg-[#F8F8F8] md:px-10 md:pt-10 md:pb-0'>
        <img alt="" src="/assets/img/product-image1.png" />
        </div>
        <div className='product-box relative overflow-hidden w-1/3 rounded-lg bg-[#F8F8F8] md:px-10 md:pt-10 md:pb-0'>
        <img alt="" src="/assets/img/product-image1.png" />
        </div>
  
    </Carousel>
</div>
</div> */}
<div className='flex'>
{
   products.map((item,k)=>(
    <div className='product-box'>    
    <div className='product-images'>
    <img src={item.images[0].name} className='m-auto'/>                                        
    </div>
    {
      item.images.map((images,key)=>(
      <div className=''>
            {
              item.thumbnail.map((i,key)=>(
              <button  className='color-click' data-target={images.name}><img src={i.name} /></button> 
              ))
            }
            
          </div> 
      ))
    }
     
    <p>{item.name}</p>  
    </div>
   ))
}

</div>




    </>
  );
}
