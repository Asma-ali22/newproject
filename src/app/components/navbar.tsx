"use client"
import React from 'react';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  
  import { CiSearch } from "react-icons/ci";
  import { CiPhone } from "react-icons/ci";
  import { FaYoutube } from "react-icons/fa";
 import Link from "next/link";
 import { FaFacebook } from "react-icons/fa";
 import { FaTwitter } from "react-icons/fa";
 import { FaInstagramSquare } from "react-icons/fa";
 import { FaCartArrowDown } from "react-icons/fa";
 import { useState } from 'react';
 import { FaHeart } from "react-icons/fa";
 



  
 function Navbar() {
   const [open, setOpen] = useState(false);
   const toggle = () => {
     setOpen(!open);
   };
  return(
   
       <div>
           <div className="w-full bg-black flex justify-center">
   <div className="max-w-screen-xl w-full h-[48px] bg-[#000000] flex items-center justify-between px-4 md:px-8">
     {/* Left Section */}
     <div className='text-white flex items-center space-x-2 mb-2 md:mb-0'>
     <CiPhone  className='text-xl'/>
        <p>(225)555-011B</p>
     </div>
     <div className='text-white px-14 hidden sm:block'>
        <p>michelle.rivera@example.com</p>
     </div>
     <div className="text-white text-[14px] leading-[24px] flex-1 text-center sm:text-left">
       <p className="leading-[24px]">Summer sale for all swim and Free Express Delivery - Off 50%</p>
       
     </div>
     {/* Right Section */}
     <div className="hidden md:flex items-center text-white space-x-2 cursor-pointer">
       <p>Follows Us:</p>
       <FaInstagramSquare />
       <FaYoutube />
       <FaFacebook />
       <FaTwitter />
     </div>
   </div>
 </div>
 
 
 
           {/* Nvabar */}
     <main className='border-b-2 bg-neutral-100'>
       <div className='w-full flex items-center justify-center bg-white h-[70px]'>
         {/* all content */}
         <div className='sm:w-full md:w-[80%] flex items-center justify-between h-[50px]'>
 
           <div>
             {/* logo */}
             <h1 className='sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl font-bold ml-1'>Bandage</h1>
           </div>
 
           {/* links - animated sliding nav */}
           <div
             className={`${
               open ? "translate-x-0" : "-translate-x-full"
             } md:flex md:translate-x-0 md:static w-[50%] md:w-auto bg-gray-800 md:bg-transparent absolute top-0 left-0 h-screen md:h-auto z-40 transition-transform duration-500 ease-in-out`}
           >
             <ul className='flex flex-col md:flex-row md:gap-x-2 lg:gap-x-2 xl:gap-x-5 2xl:gap-x-10 sm:text-md md:text-sm lg:text-md xl:text-md text-white md:text-black '>
               <li className='p-4 hover:underline underline-offset-2'>
                 <Link href="/">Home</Link>
               </li>
               <li className='p-4 hover:underline underline-offset-2'>
                 <Link href="/shop">shop</Link>
               </li>
               <li className='p-4 hover:underline underline-offset-2'>
                 <Link href="/about">About</Link>
               </li>
               <li className='p-4 hover:underline underline-offset-2'>
                 <Link href="/">Blog</Link>
               </li>
               <li className='p-4 hover:underline underline-offset-2'>
                 <Link href="/contact">Contact</Link>
               </li>
               <li className='p-4 hover:underline underline-offset-2'>
                 <Link href="/pricing">Pricing</Link>
               </li>
             </ul>
           </div>
 
           <div className='flex gap-x-4 items-center'>
             {/* Search bar - hidden on small screens */}
             <ul>
                <li className='p-4 hover:underline underline-offset-2 text-blue-400'>
                 <Link href="/">Login/Register</Link>
               </li>
              
             </ul>
 
             {/* Icons */}
             <CiSearch  className='text-blue-400 text-2xl'/>
             <FaHeart  className='text-2xl text-blue-400'/>
             <FaCartArrowDown  className='text-blue-400 mr-1 text-2xl'/>
 
             {/* Toggle Button for mobile */}
             <button
               className="text-black block md:hidden text-3xl z-50"
               onClick={toggle}
             >
               ☰
             </button>
           </div>
 
         </div>
       </div>
     </main>
     
     </div>
     
    )
}
export default Navbar