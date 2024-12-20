import React from "react";
import Image from "next/image";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { BsEyeSlash } from "react-icons/bs";
const Float=()=>{
    
  
    return (
        
        
            <div className="max-w-6xl mx-auto p-4">
              {/* Main Container */}
              <div className="flex flex-col md:flex-row gap-6 bg-white shadow-lg rounded-lg overflow-hidden">
                {/* Left Section - Image */}
                <div className="flex-1">
                  <div className="relative w-full h-72 md:h-full">
                    <Image
                      src="/float1.png"
                      alt="Product Image"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-md"
                    />
                  </div>
                  {/* Thumbnails */}
                  <div className="flex justify-center gap-2 mt-4">
                    <div className="w-16 h-16 border rounded-md overflow-hidden">
                      <Image
                        src="/float2.png"
                        alt="Thumbnail 1"
                        width={64}
                        height={64}
                        objectFit="cover"
                      />
                    </div>
                    <div className="w-16 h-16 border rounded-md overflow-hidden">
                      <Image
                        src="/float3.jpg"
                        alt="Thumbnail 2"
                        width={64}
                        height={64}
                        objectFit="cover"
                      />
                    </div>
                  </div>
                </div>
        
                {/* Right Section - Product Details */}
                <div className="flex-1 p-6">
                  {/* Title */}
                  <h1 className="text-2xl font-semibold mb-2">Floating Phone</h1>
                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    <span className="text-yellow-500 text-lg">&#9733;&#9733;&#9733;&#9733;&#9734;</span>
                    <span className="ml-2 text-sm text-gray-600">(10 Reviews)</span>
                  </div>
                  {/* Price */}
                  <p className="text-2xl font-bold text-gray-800 mb-4">$1,139.33</p>
                  {/* Stock Status */}
                  <p className="text-green-600 font-medium mb-4">Availability: In Stock</p>
                  {/* Description */}
                  <p className="text-gray-500 text-sm mb-4">
                    Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
                    RELIT official consequent door ENIM RELIT Mollie.
                  </p>
                  {/* Color Options */}
                  <div className="flex items-center mb-6">
                    <span className="text-gray-700 font-medium mr-4">Colors:</span>
                    <div className="flex gap-2">
                      <div className="w-6 h-6 bg-blue-500 rounded-full cursor-pointer"></div>
                      <div className="w-6 h-6 bg-green-500 rounded-full cursor-pointer"></div>
                      <div className="w-6 h-6 bg-orange-500 rounded-full cursor-pointer"></div>
                      <div className="w-6 h-6 bg-gray-700 rounded-full cursor-pointer"></div>
                    </div>
                  </div>
                  {/* Buttons */}
                  <div className="flex items-center gap-4">
                    <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600">
                      Select Options
                    </button>
                    <button className="p-2 text-gray-500 hover:text-gray-700">
                      <i className="fas fa-heart"></i>
                    </button>
                    <button className="p-2 text-gray-500 hover:text-gray-700">
                      <i className="fas fa-shopping-cart"></i>
                      <div className="flex gap-4 text-2xl">
                      <CiHeart />
                      <CiShoppingCart />
                      <BsEyeSlash />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        };
        
    

export default Float