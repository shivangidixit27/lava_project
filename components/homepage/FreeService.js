 
import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function FreeService() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return (     
        
        <section className="py-20 pt-16 w-full">
         <div className="container mx-auto px-4">
         <div className="bg-gray-100 rounded-3xl overflow-hidden">

         <div className="sm:flex sm:flex-wrap  pt-99 pb-99">
         <div className="sm:w-1/1 md:w-1/2 xl:w-1/2 "> 
         <img src="../assets/img/free_service.jpg" className="w-full" />
         
           </div>


         <div className="sm:w-1/1 md:w-1/2 xl:w-1/2 relative h-full w-full "> 
         <div className="absolute left-0  pl-28 transform translate-y-1/3 "> 
         <h2 className='text-gray-800   text-4xl  font-S400 mb-5' data-aos="fade-up">FREE REPLACEMENT <br />AT HOME</h2> 
         <p className="text-gray-800 text-3xl  font-S300 leading-normal uppercase mb-5" data-aos="fade-up"  data-aos-duration='1000'>Free Service@ Home</p> 
         <button className="btn" data-aos="fade-up"  data-aos-duration='1300'>
         Learn More
</button>
 
 
 </div>
         </div>
         
     
</div>

         </div>
         
     </div>   
  

        </section>
    )
}


