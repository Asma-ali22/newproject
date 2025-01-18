import React from "react";
import Image from "next/image";

const Classic=()=>{
    return(
     
      <div className="bg-[#23856D] px-4 md:px-16 lg:mx-28 py-12">
  <section className="text-gray-600 body-font">
    <div className="container mx-auto flex flex-col md:flex-row items-center">
      {/* Text Section */}
      <div className="lg:flex-grow md:w-1/2 lg:pr-16 md:pr-8 flex flex-col items-center md:items-start text-center md:text-left mb-8 md:mb-0">
        <h1 className="title-font text-2xl sm:text-3xl lg:text-4xl mb-4 font-medium text-white">
          SUMMER 2020
        </h1>
        <h2 className="text-xl sm:text-2xl lg:text-3xl text-white mb-4">
          Vita Classic <br /> Product
        </h2>
        <p className="leading-relaxed text-sm sm:text-base lg:text-lg text-white mb-6">
          We know how large objects will act. We know how objects will act; we know.
        </p>
        <div className="flex justify-center md:justify-start">
          <button className="inline-flex text-white bg-green-500 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-sm md:text-base">
            16$.48
          </button>
          <button className="ml-4 inline-flex text-white bg-green-300 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-sm md:text-base">
            Add To Cart
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Image
          className="object-cover object-center rounded"
          alt="hero"
          src="/c1.jpeg"
          width={443}
          height={685}
        />
      </div>
    </div>
  </section>
</div>

    )
}
export default Classic