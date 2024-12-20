import React from "react";

import Link from "next/link";
import FreePricing from "../components/pricing";
import Footer from "../components/footer";

const Pricing=()=>{
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
         <Link href="/home" className="hover:text-blue-500">
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
 {/* ================================================ */}
 <section className="bg-white py-12">
      <div className="container mx-auto text-center px-4">
        {/* Subheading */}
        <h2 className="text-sm font-medium text-gray-500 tracking-wide uppercase">
          Pricing
        </h2>

        {/* Main Heading */}
        <h1 className="text-4xl font-bold text-gray-900 my-4">
          Simple Pricing
        </h1>

        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500">
          <ol className="list-reset inline-flex space-x-2">
            <li>
              <a href="/" className="text-blue-500 hover:underline">
                Home
              </a>
            </li>
            <li>/</li>
            <li>Pricing</li>
          </ol>
        </nav>
      </div>
    </section>
    <FreePricing/>
{/* ============================================= */}
    <section className="max-w-screen-lg mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-4">Pricing FAQs</h2>
      <p className="text-center text-gray-500 mb-12">
        Problems trying to resolve the conflict between the two major realms of Classical physics
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="space-y-2">
            <h3 className="text-lg font-semibold text-gray-800">
              <span className="text-blue-500">&#x279E; </span>
              the quick fox jumps over the lazy dog
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
              RELIT official consequent door ENIM RELIT Mollie. Excilation venial
              consequent sent nostrum met.
            </p>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <p className="text-gray-600 mb-4">Haven’t got your answer? Contact our support</p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md transition">
          Ask to edit
        </button>
      </div>
    </section>

{/* ========================================================== */}

    <section className="flex flex-col items-center justify-center text-center py-16 px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#252B42];
]">
        Start your 14 days free trial
      </h2>
      <p className="text-[#737373] mb-8">
        Met minim Mollie non desert Alamo est sit cliquey dolor do met <br/>sent. RELIT official consequent.
      </p>
      <button className="bg-[#23A6F0] hover:bg-blue-600 w-[186px] h-[52px] text-white px-6 py-2 rounded-md transition mb-8">
        Try it free now
      </button>
      
    </section>
 <Footer/>
 </div>
    )
}
export default Pricing