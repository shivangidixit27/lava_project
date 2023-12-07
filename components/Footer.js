import Link from 'next/link'
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa6";

export default function Footer() {
  return (
<footer className="footer-1 bg-black py-8 sm:py-12 text-customGray">
  <div className="container mx-auto px-4">
    <div className="sm:flex sm:flex-wrap sm:-mx-4 md:py-4">
      <div className="px-4 sm:w-1/1 md:w-1/3 xl:w-1/4">
        <h5 className="text-3xl font-semibold mb-6 text-white">SUPPORT</h5>
        <ul className="list-none footer-links font-light">
          <li className="mb-2">
            <Link href="#" className="border-b border-solid border-transparent hover:border-text-white hover:text-white">Contact us</Link>
          </li>
          <li className="mb-2">
            <Link href="#" className="border-b border-solid border-transparent hover:border-text-white hover:text-white">Sales enquiry</Link>
          </li>
          <li className="mb-2">
            <Link href="#" className="border-b border-solid border-transparent hover:border-text-white hover:text-white">Stores & dealers</Link>
          </li>
          <li className="mb-2">
            <Link href="#" className="border-b border-solid border-transparent hover:border-text-white hover:text-white">Careers</Link>
          </li>
          <li className="mb-2">
            <Link href="#" className="border-b border-solid border-transparent hover:border-text-white hover:text-white">Terms & Conditions</Link>
          </li>
         
        </ul>
      </div>
      <div className="px-4 sm:w-1/1 md:w-1/3 xl:w-1/4">
        <h5 className="text-3xl font-semibold mb-6 text-white">ABOUT US</h5>
        <ul className="list-none footer-links">
          <li className="mb-2">
            <Link href="#" className="border-b border-solid border-transparent hover:border-text-white hover:text-white">About Lava</Link>
          </li>
          <li className="mb-2">
            <Link href="#" className="border-b border-solid border-transparent hover:border-text-white hover:text-white">Press & Media</Link>
          </li>
          <li className="mb-2">
            <Link href="#" className="border-b border-solid border-transparent hover:border-text-white hover:text-white">CSR Policy</Link>
          </li>
          <li className="mb-2">
            <Link href="#" className="border-b border-solid border-transparent hover:border-text-white hover:text-white">Speak Up</Link>
          </li>
        </ul>
      </div>
      <div className="px-4 sm:w-1/1 md:w-1/3 xl:w-1/4  md:mt-0">
        <h5 className="text-3xl font-semibold mb-6 text-white">LAVA CARE</h5>
        <ul className="list-none footer-links">
          <li className="mb-2">
            <Link href="#" className="border-b border-solid border-transparent hover:border-text-white hover:text-white">Service @Home</Link>
          </li>
          <li className="mb-2">
            <Link href="#" className="border-b border-solid border-transparent hover:border-text-white hover:text-white">Extended Warranty</Link>
          </li>
          <li className="mb-2">
            <Link href="#" className="border-b border-solid border-transparent hover:border-text-white hover:text-white">Spare Parts Price List</Link>
          </li>
          <li className="mb-2">
            <Link href="#" className="border-b border-solid border-transparent hover:border-text-white hover:text-white">User Manual</Link>
          </li>
          <li className="mb-2">
            <Link href="#" className="border-b border-solid border-transparent hover:border-text-white hover:text-white">Service Center Locator</Link>
          </li>
        </ul>
      </div>
     
      <div className="px-4 mt-4 sm:w-1/3 xl:w-1/4 sm:mx-auto md:w-1/1 xl:mt-0 xl:ml-auto">
        <h5 className="text-3xl font-semibold mb-6 sm:text-center xl:text-left text-white">Follow Us</h5>
        <div className="flex sm:justify-center xl:justify-start mb-3">
          <Link href="" className="w-8 h-8 text-center py-1 flex items-center">
          <FaFacebook className='w-5 h-5'/>
          </Link>
          <Link href="" className="w-8 h-8  text-center py-1 ml-2 flex items-center">
          <AiFillInstagram  className='w-5 h-5'/>
          </Link>
          <Link href="" className="w-8 h-8  text-center py-1 ml-2 flex items-center">
          <FaTwitter  className='w-5 h-5'/>
          </Link>
        </div>
        <div className="flex sm:justify-center xl:justify-start flex items-center">
          <Link href="" className="w-8 h-8 text-center py-1 flex items-center">
          <FaYoutube className='w-5 h-5'/>
          </Link>
          
          <Link href="" className="w-8 h-8  text-center py-1 ml-2 flex items-center">
          <FaLinkedinIn className='w-5 h-5'/>
          </Link>
          <Link href="" className="w-8 h-8  text-center py-1 ml-2 flex items-center"> 
          <FaPinterest className='w-5 h-5'/>
</Link>
          </div>
      </div>
    </div>

     
  </div>
</footer>
  )
}



