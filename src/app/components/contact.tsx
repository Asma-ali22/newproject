import React from "react";
import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
 import { FaTwitter } from "react-icons/fa";
 import { FaInstagramSquare } from "react-icons/fa"
 import { FaYoutube } from "react-icons/fa";
const Contact=()=>{
    return(
    <div className="mt-10 mx-6 px-24">
  <section className="grid gap-8 items-center md:grid-cols-2 sm:grid-cols-1">
    {/* Left Side */}
    <div className="flex-1">
      <h1 className="font-bold lg:text-4xl md:text-3xl sm:text-2xl">
        Contact us
      </h1>
      <h2 className="text-2xl mt-4">Get In Touch<br/>Today!</h2>
      <p className="text-base lg:text-lg text-gray-600 mt-4">
        We know how large objects will act<br/>But things on a small scale
      </p>
< p className="mt-2">phone:+451 215 215</p>
<p className="mt-2">fax:+451 215 215</p>
<div className="flex gap-3 mt-4"> <FaInstagramSquare />
       <FaYoutube />
       <FaFacebook />
       <FaTwitter /></div>
    </div>

    {/* Right Side */}
    <div className="flex-1 cursor-pointer hover:shadow-xl">
      <Image
        width={1500}
        height={1500}
        src="/about1.png"
        alt="Fashion display"
        className="rounded-lg"
      />
    </div>
  </section></div>
    )
}
export default Contact