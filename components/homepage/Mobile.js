
import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function RedMobile() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

    const bg = {         
        height: '600px', // Adjust the height as needed
       };
    return (     
        
        <section className="py-56 mb-4 relative bg-gray-100 w-full overflow-hidden"   style={bg}>
         	<div className="container mx-auto px-4">
		<div className="sm:flex sm:flex-wrap">
			<div className="sm:w-1/1 md:w-1/2 xl:w-1/2 h-full">
				<h2 className='text-gray-800   text-4xl  font-S400' data-aos="fade-up">O1</h2>
				<p className="text-gray-800  text-lg  font-S300 leading-normal uppercase mb-8" data-aos="fade-up" data-aos-duration='1000'>There is no one like o1</p>
				<button className="btn" data-aos="fade-up" data-aos-duration='1300'> Learn More </button>
			</div>
			<div className="px-2 sm:w-1/1 md:w-1/2 xl:w-1/2"> </div>
		</div>
	</div>
         
         <img src="../assets/img/abstract.png" className="absolute right-0 bottom-0 w-2/4  " data-aos="fade-left" data-aos-duration='1000'/>

  <img src="../assets/img/red_mobile.png" className="absolute right-0 bottom-0 w-2/4  "    />

        </section>
    )
}


