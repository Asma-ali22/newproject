import React from "react";
import Image from "next/image";

const Meet=()=>{
    return(
        <div>
        <div className="text-center">
            <h1 className="text-4xl">Meet Our Team</h1>
  <h2 className="text-2xl mt-4">Problems trying to resolve the conflict between <br/>
the two major realms of Classical physics: Newtonian mechanics </h2>
</div>
  <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <Image
            className=""
            src="/about4.png"
            alt="blog"
            width={520}
            height={260}
          />
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
              username
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              profession
            </h1>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <Image
            width={520}
            height={260}
            src="/about5.png"
            alt="blog"
          />
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
              username
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              profession
            </h1>
            
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <Image
            width={520}
            height={260}
            src="/about6.jpg"
            alt="blog"
          />
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
              username
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              profession
            </h1>
           
            </div>
          </div>
        </div>
      </div>
    
  </div>
</section>
</div>


    )
}
export default Meet