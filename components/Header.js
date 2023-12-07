 
import Link from "next/link"
import Image from "next/image"
import { useEffect } from "react";
 
import { FiSearch } from "react-icons/fi";
import Logo from "../public/assets/img/Logo";


export default function Header() {     
  useEffect(()=>{
    window.onscroll = function() {
      var headers = document.getElementsByClassName('lava-header');

      var scrollPosition = window.scrollY || document.documentElement.scrollTop;
      for (var i = 0; i < headers.length; i++) {
        if (scrollPosition > 100) {
          headers[i].classList.add('fixed-header');
        } else {
          headers[i].classList.remove('fixed-header');
        }
      }
    };

  },[])
    return (
     <>
    <div className="py-[29px] top-0 fixed w-full z-40 bg-gradient-to-r from-[rgba(255, 255, 255, 0.25)] via-[rgba(255, 255, 255, 0.25)] to-#4D4D4D bg-opacity-100 backdrop-blur-[16px] lava-header">
	<div className="container px-4 mx-auto">
		<div className="flex">
			<div className="flex-none">
				<Logo /> </div>
			<div className="flex-auto ml-5">
				<ul className="flex [&>li]:text-white 	[&>li]:mx-5 ">
					<li className="">
						<Link href="">Smartphones</Link>
					</li>
					<li className="relative">
						<Link href="">Feature Phones</Link>
						<div className="subMenu fixed left-0 w-full text-center top-[82px]">
							<ul className="flex text-center gap-x-20 justify-center w-full mb-12  pt-[22px]">
								<li>
									<Link href=""> <span className="rounded-[10px] bg-[#F8F8F8] w-[162px] h-[162px] flex items-center justify-center text-center mb-7"><img src="../assets/img/new_launch.svg" className="h-[130px]"/></span> <span className="font-S300 text-xl">New Launch</span> </Link>
								</li>
								<li>
									<Link href=""> <span className="rounded-[10px] bg-[#F8F8F8] w-[162px] h-[162px] flex items-center justify-center text-center mb-7"><img src="../assets/img/new_launch.svg" className="h-[130px]"/></span> <span className="font-S300 text-xl">New Launch</span> </Link>
								</li>
								<li>
									<Link href=""> <span className="rounded-[10px] bg-[#F8F8F8] w-[162px] h-[162px] flex items-center justify-center text-center mb-7"><img src="../assets/img/new_launch.svg" className="h-[130px]"/></span> <span className="font-S300 text-xl">New Launch</span> </Link>
								</li>
								<li>
									<Link href=""> <span className="rounded-[10px] bg-[#F8F8F8] w-[162px] h-[162px] flex items-center justify-center text-center mb-7"><img src="../assets/img/new_launch.svg" className="h-[130px]"/></span> <span className="font-S300 text-xl">New Launch</span> </Link>
								</li>
								<li>
									<Link href=""> <span className="rounded-[10px] bg-[#F8F8F8] w-[162px] h-[162px] flex items-center justify-center text-center mb-7"><img src="../assets/img/new_launch.svg" className="h-[130px]"/></span> <span className="font-S300 text-xl">New Launch</span> </Link>
								</li>
							</ul>
							<Link className="btn bg-white mb-7" href="">All Products</Link>
						</div>
					</li>
					<li>
						<Link href="">Tablets & Laptops</Link>
            <div className="subMenu fixed left-0 w-full text-center top-[82px]">
							<ul className="flex text-center gap-x-20 justify-center w-full mb-12  pt-[22px]">
								<li>
									<Link href=""> <span className="rounded-[10px] bg-[#F8F8F8] w-[162px] h-[162px] flex items-center justify-center text-center mb-7"><img src="../assets/img/new_launch.svg" className="h-[130px]"/></span> <span className="font-S300 text-xl">New Launch</span> </Link>
								</li>
								<li>
									<Link href=""> <span className="rounded-[10px] bg-[#F8F8F8] w-[162px] h-[162px] flex items-center justify-center text-center mb-7"><img src="../assets/img/new_launch.svg" className="h-[130px]"/></span> <span className="font-S300 text-xl">New Launch</span> </Link>
								</li>
								<li>
									<Link href=""> <span className="rounded-[10px] bg-[#F8F8F8] w-[162px] h-[162px] flex items-center justify-center text-center mb-7"><img src="../assets/img/new_launch.svg" className="h-[130px]"/></span> <span className="font-S300 text-xl">New Launch</span> </Link>
								</li>
								 
							</ul>
							<Link className="btn bg-white mb-7" href="">All Products</Link>
						</div>
					</li>
					<li>
						<Link href="">Accessories</Link>
					</li>
				</ul>
			</div>
			<div className="flex">
				<ul className="flex [&>li]:text-white [&>li]:mx-5">
					<li>
						<Link href="">Lava Care</Link>
					</li>
					<li>
						<Link href="">Store</Link>
					</li>
				</ul>
				<div className="ml-5 search-icon">
					<FiSearch className="h-[24px] w-[24px] text-white " />
				</div>
			</div>
		</div>
	</div>
</div> </>
    )
}