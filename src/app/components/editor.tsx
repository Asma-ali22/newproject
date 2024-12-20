import React from "react";
import Image from "next/image";

const Editor=()=>{
    return(

<div>
  {/* <div className="flex flex-col items-center p-6">
    <h1 className="text-xl font-bold mb-4">EDITORS PICK</h1>
    <p className="text-gray-500 mb-8">

      Problems trying to resolve the conflict between
    </p>
    <div className="gap-1">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-4 sm:mx-8 lg:mx-96">
        <div className="relative">
          <Image src="/edi6.jpeg" alt="kids" height={510} width={500} />
        </div>
        <div className="relative">
          <Image src="/edi5.jpeg" alt="kids" height={500} width={240} />
        </div>
        <div className="grid grid-rows-2 gap-4">
          <div className="relative">
            <Image src="/edi3.jpeg" alt="kids" height={242} width={240} />
            <button className="absolute bottom-4 left-1/4 transform -translate-x-1/2 bg-white px-4 py-2 text-sm font-medium rounded-lg shadow-md">
              ACCESSORIES
            </button>
          </div>
          <div className="relative">
            <Image src="/edi4.jpeg" alt="kids" height={242} width={240} />
            <button className="absolute bottom-4 left-1/4 transform -translate-x-1/2 bg-white px-4 py-2 text-sm font-medium rounded-lg shadow-md">
              KIDS
            </button>
          </div>
        </div>
      </div>
    </div>
  </div> */}
  <div className="flex flex-col items-center p-6">
  <h1 className="text-xl font-bold mb-4">EDITORS PICK</h1>
  <p className="text-gray-500 mb-8">
    Problems trying to resolve the conflict between
  </p>
  <div className="w-full px-4 sm:px-8 lg:px-32">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* First Image */}
      <div className="relative">
        <Image
          src="/edi6.jpeg"
          alt="kids"
          className="w-full h-auto object-cover"
          height={510}
          width={500}
        />
      </div>
      {/* Second Image */}
      <div className="relative">
        <Image
          src="/edi5.jpeg"
          alt="kids"
          className="w-full h-auto object-cover"
          height={500}
          width={240}
        />
      </div>
      {/* Third Section */}
      <div className="grid grid-rows-2 gap-4">
        <div className="relative">
          <Image
            src="/edi3.jpeg"
            alt="kids"
            className="w-full h-auto object-cover"
            height={242}
            width={240}
          />
          <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-4 py-2 text-sm font-medium rounded-lg shadow-md">
            ACCESSORIES
          </button>
        </div>
        <div className="relative">
          <Image
            src="/edi4.jpeg"
            alt="kids"
            className="w-full h-auto object-cover"
            height={242}
            width={240}
          />
          <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-4 py-2 text-sm font-medium rounded-lg shadow-md">
            KIDS
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

</div>

    );
  }
    
export default Editor