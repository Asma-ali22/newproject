import React from "react";
import Image from "next/image";

const Jump=()=>{
    return(
    
      
      
    
    <div className="p-4 md:p-8 mt-6 md:mt-10">
  {/* Top Section */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
    {/* Image Section */}
    <div className="col-span-1">
      <div className="bg-gray-200 aspect-w-4 aspect-h-3 rounded-md">
        <Image
          src="/jump1.png"
          alt="pic"
          className="rounded-md max-w-full h-auto"
          width={337}
          height={392}
        />
      </div>
    </div>

    {/* Details Section */}
    <div className="col-span-1 md:col-span-2 flex flex-col">
      <div>
        <h2 className="text-lg md:text-xl lg:text-2xl font-bold">
          The quick fox jumps over
        </h2>
        <p className="text-gray-600 mt-2 md:mt-4 text-sm md:text-base">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
        </p>
        <p className="text-gray-600 mt-2 md:mt-4 text-sm md:text-base">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
        </p>
        <p className="text-gray-600 mt-2 md:mt-4 text-sm md:text-base">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
        </p>
      </div>
    </div>
  </div>

  {/* List Section */}
  <div className="mt-6 md:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
    {/* Column 1 */}
    <div>
      <h3 className="font-bold text-base md:text-lg">The quick fox jumps over</h3>
      <ul className="mt-2 md:mt-4 space-y-2">
        {Array(5)
          .fill("The quick fox jumps over the lazy dog")
          .map((text, idx) => (
            <li key={idx} className="text-gray-600 flex items-center">
              <span className="mr-2">➤</span>
              {text}
            </li>
          ))}
      </ul>
    </div>
    {/* Column 2 */}
    <div>
      <h3 className="font-bold text-base md:text-lg">The quick fox jumps over</h3>
      <ul className="mt-2 md:mt-4 space-y-2">
        {Array(5)
          .fill("The quick fox jumps over the lazy dog")
          .map((text, idx) => (
            <li key={idx} className="text-gray-600 flex items-center">
              <span className="mr-2">➤</span>
              {text}
            </li>
          ))}
      </ul>
    </div>
    {/* Column 3 */}
    <div>
      <h3 className="font-bold text-base md:text-lg">The quick fox jumps over</h3>
      <ul className="mt-2 md:mt-4 space-y-2">
        {Array(5)
          .fill("The quick fox jumps over the lazy dog")
          .map((text, idx) => (
            <li key={idx} className="text-gray-600 flex items-center">
              <span className="mr-2">➤</span>
              {text}
            </li>
          ))}
      </ul>
    </div>
  </div>
</div>

  );
}

export default Jump