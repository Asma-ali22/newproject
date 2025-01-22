import React from "react";
import Image from "next/image";
import Link from "next/link";

const About=()=>{
    return(
    
<div>
    
 <header className="bg-white shadow-md px-4 py-3 md:px-6 md:py-4 flex flex-wrap justify-between items-center">
  {/* Logo */}
  <div className="text-xl md:text-2xl font-bold w-full md:w-auto text-center md:text-left">
    Bandage
  </div>

  {/* Navigation */}
  <nav className="w-full md:w-auto mt-4 md:mt-0">
    <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 space-x-0 md:space-x-6 text-gray-600 text-center md:text-left">
      <li>
        <Link href="/" className="hover:text-blue-500">
          Home
        </Link>
      </li>
      <li>
        <Link href="/product" className="hover:text-blue-500">
          Product
        </Link>
      </li>
      <li>
        <Link href="/pricing" className="hover:text-blue-500">
          Pricing
        </Link>
      </li>
      <li>
        <Link href="/contact" className="hover:text-blue-500">
          Contact
        </Link>
      </li>
    </ul>
  </nav>

  {/* Buttons */}
  <div className="w-full md:w-auto mt-4 md:mt-0 flex justify-center md:justify-end">
    <button className="mr-2 md:mr-4 px-3 md:px-4 py-2 text-sm font-medium text-blue-500 border border-blue-500 rounded hover:bg-blue-500 hover:text-white">
      Login
    </button>
    <button className="px-3 md:px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded hover:bg-blue-600">
      Become a member
    </button>
  </div>
</header>



  {/* About Section */}
  

  <section className="text-gray-600 body-font mx-4 sm:mx-8 md:mx-16 lg:mx-48">
  <div className="container mx-auto flex flex-col-reverse md:flex-row items-center px-5 py-12 md:py-24">
    {/* Text Section */}
    <div className="lg:flex-grow md:w-1/2 lg:pr-12 md:pr-8 flex flex-col items-center md:items-start text-center md:text-left">
      <h1 className="title-font text-2xl sm:text-3xl md:text-4xl font-medium text-black mb-4">
        About Company
      </h1>
      <h2 className="text-xl sm:text-2xl md:text-3xl text-black mb-4">About Us</h2>
      <p className="leading-relaxed text-black mb-6">
        We know how large objects will act; we know how objects will act; we know.
      </p>
      <button className="inline-flex text-white bg-blue-400 py-2 px-6 rounded text-lg hover:bg-blue-500">
        Get Quote Now
      </button>
    </div>
    {/* Image Section */}
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full sm:w-4/5 mb-8 md:mb-0">
      <Image
        className="object-cover object-center rounded"
        alt="hero"
        src="/about2.png"
        width={443}
        height={685}
        priority
      />
    </div>
  </div>
</section>


  {/* Problem Section */}
  <section className="text-gray-600 body-font mx-4 md:mx-16 lg:mx-48">
    <h1 className="text-red-600 text-center text-lg md:text-2xl mb-4">Problem Trying</h1>
    <div className="container flex flex-wrap px-5 py-12">
      <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-900 font-medium md:w-2/5 mb-4 md:mb-0">
        Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
      </h2>
      <div className="md:w-3/5 md:pl-6">
        <p className="leading-relaxed text-base">
          Problems trying to resolve the conflict between the two major realms of<br />
          Classical physics: Newtonian mechanics.
        </p>
      </div>
    </div>
  </section>

  {/* Statistics Section */}
  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mx-4 md:mx-16 lg:mx-48 mt-12">
    <div>
      <h3 className="text-3xl md:text-4xl font-bold">15K</h3>
      <p className="text-gray-600">Happy Customers</p>
    </div>
    <div>
      <h3 className="text-3xl md:text-4xl font-bold">150K</h3>
      <p className="text-gray-600">Monthly Visitors</p>
    </div>
    <div>
      <h3 className="text-3xl md:text-4xl font-bold">15</h3>
      <p className="text-gray-600">Countries Worldwide</p>
    </div>
    <div>
      <h3 className="text-3xl md:text-4xl font-bold">100+</h3>
      <p className="text-gray-600">Top Partners</p>
    </div>
  </div>

  {/* Image Section */}
  <div className="flex justify-center mx-4 md:mx-16 lg:mx-48 mt-12">
    <Image src="/about3.png" alt="pic" width={1050} height={774} />
  </div>
  
</div>

      
    );
  }
  
    
export default About