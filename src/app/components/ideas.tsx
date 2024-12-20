import React from "react";
import { FaPhoneSquare } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Footer from "./footer";
import Image from "next/image";


const Ideas=()=>{
    return(
  <div>
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
        <div className="h-full text-center">
        <FaPhoneSquare  className="text-5xl mx-36 text-blue-600 mb-4"/>
          
          <p className="leading-relaxed">
          georgia.young@example.com<br/>
        georgia.young@ple.com</p>
     <p>Get Support</p>
 <button className=" flex-shrink-0 text-blue-400  border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0">
    Submit Request</button>
          
          
        </div>
      </div>
      <div className="lg:w-1/3 lg:mb-0 mb-6 p-4 bg-[#252B42]">
        <div className="h-full text-center">
          
        <FaMapMarkerAlt className="text-5xl mx-36 text-blue-600 mb-4" />
          <p className="leading-relaxed text-white">
          georgia.young@example.com<br/>
        georgia.young@ple.com</p>
     <p className="text-white">Get Support</p>
 <button className=" flex-shrink-0 text-blue-400  border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0">
    Submit Request</button>
          
          
        </div>
      </div>
      <div className="lg:w-1/3 lg:mb-0 p-4">
        <div className="h-full text-center">
        <MdEmail className="text-5xl mx-36 text-blue-600 mb-4"/>
          <p className="leading-relaxed">
          georgia.young@example.com<br/>
        georgia.young@ple.com</p>
     <p>Get Support</p>
 <button className=" flex-shrink-0 text-blue-400  border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0">
    Submit Request</button>
          
          
         
        </div>
      </div>
    </div>
  </div>
</section>
     
     <div className="text-center px-4 py-12">
  {/* Arrow Icon */}
  <div className="flex justify-center mb-4">
    <Image src="/Arrow 2.png" alt="arrow" width={25} height={72} />
  </div>

  {/* Heading */}
  <h1 className="text-lg md:text-xl font-bold">WE CANT WAIT TO MEET YOU</h1>
  <h2 className="text-2xl md:text-5xl mt-4 font-semibold">Lets Talk</h2>

  {/* Button */}
  <div className="mt-8">
    <button className="inline-flex justify-center items-center text-white bg-indigo-500 border-0 py-2 px-6 text-sm md:text-base focus:outline-none hover:bg-indigo-600 rounded">
      Try It Free Now
    </button>
  </div>
</div>

     <div className="mt-16">
     <Footer/>
</div>
</div>
   


    )
}
export default Ideas