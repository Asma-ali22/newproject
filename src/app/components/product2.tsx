import React from "react";
import Image from "next/image";

const Product=()=>{
    
        const items = [
            { id: 1, title: "CLOTHS", count: "5 items", Image: "/card1.png" },
            { id: 2, title: "CLOTHS", count: "8 items",  Image: "/card2.png" },
            { id: 3, title: "CLOTHS", count: "7 items", Image: "/card3.png" },
            { id: 4, title: "CLOTHS", count: "6 items", Image: "/card4.png" },
          ];
        
          return (
            <div className="container mx-auto px-4 py-8">
              <h1 className="text-2xl font-bold mb-4">Shop</h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="relative rounded-lg shadow-md overflow-hidden group"
                  >
                    <Image
                      src={item.Image}
                      alt={item.title}
                      height={205}
                      width={223}
                      
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h2 className="text-lg font-semibold">{item.title}</h2>
                      <p>{item.count}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-14 place-items-center ">
    <Image src="/c1.png" alt="Company Logo 1" width={153} height={34} />
    <Image src="/c2.png" alt="Company Logo 2" width={83} height={59} />
    <Image src="/c3.png" alt="Company Logo 3" width={152} height={72} />
    <Image src="/c4.png" alt="Company Logo 4" width={103} height={42} />
    <Image src="/c5.png" alt="Company Logo 5" width={104} height={62} />
  </div>
            </div>
          );
        }
    
export default Product