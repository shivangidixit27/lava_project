import Link from "next/link"
import { useEffect } from "react"; 
import { $ }  from 'react-jquery-plugin'
 

export default  function Index() {		
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
	
	
	if(typeof window !== "undefined") {
		$(document).on('click','select',function(evt){	
			$(this).addClass('active');
		}); 
	}
    return (
        <>
  
<section className="py-20">
	<div className="mb-4 relative w-full overflow-hidden">
		 
		<div className="container mx-auto px-4">
		<h1 className='text-custom-64 font-S700  mb-14 leading-64' data-aos="fade-up text-customBlack2">Appointment – Service@Home</h1>
			<form> 
				<div className="grid grid-cols-2  gap-10 gap-y-16 mb-8">
					<div className="group relative w-full">
						<label htmlFor="1" className="block w-full pb-4 transition-all duration-200 ease-in-out group-focus-within:text-black text-black font-S500 text-xl">Name *</label>
						<input id="1" placeholder="Enter Full Name" type="text" className="pb-4 pb-4 peer h-11 w-full font-thin outline-none   transition-all duration-200 ease-in-out  border-b border-solid border-[#ACACAC] text-xl font-S400  focus:outline-none focus:border-b focus:border-black" /> </div>
						<div className="group relative w-full">
						<label htmlFor="1" className="block w-full pb-4 transition-all duration-200 ease-in-out group-focus-within:text-black text-black font-S500 text-xl">Your Email ID *</label>
						<input id="1" placeholder="Enter Email ID" type="email" className="pb-4 peer h-11 w-full font-thin outline-none   transition-all duration-200 ease-in-out  border-b border-solid border-[#ACACAC] text-xl font-S400  focus:outline-none focus:border-b focus:border-black" /> </div>

		
						<div className="group relative w-full">
						<label htmlFor="1" className="block w-full pb-4 transition-all duration-200 ease-in-out group-focus-within:text-black text-black font-S500 text-xl">Model</label>
						<select className="block appearance-none pb-4 peer h-11 w-full font-thin outline-none   transition-all duration-200 ease-in-out  border-b border-solid border-[#ACACAC] text-xl font-S400 focus:outline-none focus:border-b text-slate-400 focus:border-black focus:text-black text-slate-400">
							<option>Select Model</option>
							<option>Option 1</option>
							<option>Option 2</option>
							<option>Option 3</option>
						</select>
						<div className="pointer-events-none absolute top-14  right-0 flex items-center">
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="10" viewBox="0 0 16 10" fill="none">
								<path d="M1 1L8 9L15 1" stroke="black" strokelinecap="round" strokelinejoin="round" /> </svg>
						</div>
					</div>
					<div className="group relative w-full">
						<label htmlFor="1" className="block w-full pb-4 transition-all duration-200 ease-in-out group-focus-within:text-black text-black font-S500 text-xl">Phone Number *</label>
						<input id="1" placeholder="Enter Phone Number" type="tel" className="pb-4 peer h-11 w-full font-thin outline-none   transition-all duration-200 ease-in-out  border-b border-solid border-[#ACACAC] text-xl font-S400  focus:outline-none focus:border-b focus:border-black" /> 
						<div className="pointer-events-none absolute top-11  right-0 flex items-center">
							 <Link href="" className="font-S500 text-xl underline text-[#ED1556] hover:text-black">Send OTP</Link>
						</div>
						
						</div>

						<div className="group relative w-full">
						<label htmlFor="1" className="block w-full pb-4 transition-all duration-200 ease-in-out group-focus-within:text-black text-black font-S500 text-xl">State</label>
						<select className="block appearance-none pb-4 peer h-11 w-full font-thin outline-none   transition-all duration-200 ease-in-out  border-b border-solid border-[#ACACAC] text-xl font-S400 focus:outline-none focus:border-b focus:border-black text-slate-400">
							<option>Select State</option>
							<option>Option 1</option>
							<option>Option 2</option>
							<option>Option 3</option>
						</select>
						<div className="pointer-events-none absolute top-14  right-0 flex items-center">
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="10" viewBox="0 0 16 10" fill="none">
								<path d="M1 1L8 9L15 1" stroke="black" strokelinecap="round" strokelinejoin="round" /> </svg>
						</div>
					</div>
					<div className="group relative w-full">
						<label htmlFor="1" className="block w-full pb-4 transition-all duration-200 ease-in-out group-focus-within:text-black text-black font-S500 text-xl">City</label>
						<select className="block appearance-none pb-4 peer h-11 w-full font-thin outline-none   transition-all duration-200 ease-in-out  border-b border-solid border-[#ACACAC] text-xl font-S400 focus:outline-none focus:border-b focus:border-black text-slate-400">
							<option>Select City</option>
							<option>Option 1</option>
							<option>Option 2</option>
							<option>Option 3</option>
						</select>
						<div className="pointer-events-none absolute top-14  right-0 flex items-center">
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="10" viewBox="0 0 16 10" fill="none">
								<path d="M1 1L8 9L15 1" stroke="black" strokelinecap="round" strokelinejoin="round" /> </svg>
						</div>
					</div>

					<div className="group relative w-full">
						<label htmlFor="1" className="block w-full pb-4 transition-all duration-200 ease-in-out group-focus-within:text-black text-black font-S500 text-xl">Address *</label>
						<input id="1" placeholder="Enter Address " type="text" className="pb-4 peer h-11 w-full font-thin outline-none   transition-all duration-200 ease-in-out  border-b border-solid border-[#ACACAC] text-xl font-S400  focus:outline-none focus:border-b focus:border-black" /> </div>
					
					
						<div className="group relative w-full">
						<label htmlFor="1" className="block w-full pb-4 transition-all duration-200 ease-in-out group-focus-within:text-black text-black font-S500 text-xl">Pincode</label>
						<select className="block appearance-none pb-4 peer h-11 w-full font-thin outline-none   transition-all duration-200 ease-in-out  border-b border-solid border-[#ACACAC] text-xl font-S400 focus:outline-none focus:border-b focus:border-black text-slate-400">
							<option>Select Pincode</option>
							<option>Option 1</option>
							<option>Option 2</option>
							<option>Option 3</option>
						</select>
						<div className="pointer-events-none absolute top-14  right-0 flex items-center">
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="10" viewBox="0 0 16 10" fill="none">
								<path d="M1 1L8 9L15 1" stroke="black" strokelinecap="round" strokelinejoin="round" /> </svg>
						</div>
					</div>

					<div className="group relative w-full">
						<label htmlFor="1" className="block w-full pb-4 transition-all duration-200 ease-in-out group-focus-within:text-black text-black font-S500 text-xl">Date *</label>
						<input id="1" placeholder="Select DD-MM-YYYY" type="tel" className="pb-4 peer h-11 w-full font-thin outline-none   transition-all duration-200 ease-in-out  border-b border-solid border-[#ACACAC] text-xl font-S400  focus:outline-none focus:border-b focus:border-black" /> 
						
						
						<div className="pointer-events-none absolute  top-12  right-0 flex items-center">
						<svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" viewBox="0 0 20 22" fill="none">
  <path d="M17 3H3C1.89543 3 1 3.89543 1 5V19C1 20.1046 1.89543 21 3 21H17C18.1046 21 19 20.1046 19 19V5C19 3.89543 18.1046 3 17 3Z" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
  <path d="M14 1V5" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
  <path d="M6 1V5" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
  <path d="M1 9H19" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
  <path d="M6 13H6.01" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
  <path d="M10 13H10.01" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
  <path d="M14 13H14.01" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
  <path d="M6 17H6.01" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
  <path d="M10 17H10.01" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
  <path d="M14 17H14.01" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
</svg>
						</div>
						</div>

 


						<div className="group w-full">
						<label htmlFor="1" className="block w-full pb-5 transition-all duration-200 ease-in-out group-focus-within:text-black text-black font-S500 text-xl">Time *</label>
<div className="flex flex-row gap-x-6 mb-8">
<div className="w-20 relative"><select className="bg-gray-300 block appearance-none pl-4 pb-0 peer h-10 w-full font-thin outline-none   transition-all duration-200 ease-in-out  border-b border-solid border-[#ACACAC] text-xl font-S400 focus:outline-none focus:border-b focus:border-black">
							<option>hh</option>
							<option>Option 1</option>
							<option>Option 2</option>
							<option>Option 3</option>
						</select>
						<div className="pointer-events-none absolute  top-4  right-3 flex items-center">
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="10" viewBox="0 0 16 10" fill="none">
								<path d="M1 1L8 9L15 1" stroke="black" strokelinecap="round" strokelinejoin="round" /> </svg>
						</div></div>

						<div className="w-20 relative"><select className="bg-gray-300 block appearance-none pl-4 pb-0 peer h-10 w-full font-thin outline-none   transition-all duration-200 ease-in-out  border-b border-solid border-[#ACACAC] text-xl font-S400 focus:outline-none focus:border-b focus:border-black">
							<option>mm</option>
							<option>Option 1</option>
							<option>Option 2</option>
							<option>Option 3</option>
						</select>
						<div className="pointer-events-none absolute top-4  right-3 flex items-center">
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="10" viewBox="0 0 16 10" fill="none">
								<path d="M1 1L8 9L15 1" stroke="black" strokelinecap="round" strokelinejoin="round" /> </svg>
						</div></div>



</div>


						
					</div>
			 
			 
					<div className="group relative w-full col-span-2">
						<Link href="" className="btn btnBlc">Submit Details</Link>
					</div>
					
					
				</div>

				<div className="group relative w-full col-span-2">

						<p className="mb-4 font-S300 text-lg text-customGray2">By completing and submitting this form you consent to the use of your data in accordance with LAVA Privacy statement.</p>
						<p><Link className="font-S500 underline text-[#ED1556] hover:text-black " href="">Terms & Conditions</Link></p>
					</div>
			</form>
		</div>

 
	</div>
</section>
 
        </>
    )
}

  
