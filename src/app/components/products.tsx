import React from "react";


import Image from "next/image";

        
          
          
                const products = [
                    { id: 1, title: "Graphic Design", department: "English Department", price: "$16.48", discount: "$6.48", img: "/p1.jpeg" },
                    { id: 2, title: "Graphic Design", department: "English Department", price: "$16.48", discount: "$6.48", img: "/p2.jpeg" },
                    { id: 3, title: "Graphic Design", department: "English Department", price: "$16.48", discount: "$6.48", img: "/p3.jpeg" },
                    { id: 4, title: "Graphic Design", department: "English Department", price: "$16.48", discount: "$6.48", img: "/p4.jpeg" },
                    { id: 5, title: "Graphic Design", department: "English Department", price: "$16.48", discount: "$6.48", img: "/p5.jpeg" },
                    { id: 6, title: "Graphic Design", department: "English Department", price: "$16.48", discount: "$6.48", img: "/p6.jpeg" },
                    { id: 7, title: "Graphic Design", department: "English Department", price: "$16.48", discount: "$6.48", img: "/p7.jpeg" },
                    { id: 8, title: "Graphic Design", department: "English Department", price: "$16.48", discount: "$6.48", img: "/p8.jpeg" },
                  ];
                  
                  const Products=()=>{
                    return(
                      <div className="container mx-auto px-28 py-8">
                        <h1 className="text-2xl font-bold mb-6 text-center text-gray-600">Featured Product</h1>
                        <h2 className="text-4xl font-bold mb-6 text-center">Bestseller Products</h2>
                        <p className="text-1xl font-bold mb-6 text-center text-gray-600">problem trying to resolve the conflict  between</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                          {products.map((product) => (
                            <div key={product.id} className="bg-white shadow-md rounded-md p-4">
                              <div className="relative w-full h-48">
                                <Image
                                  src={product.img}
                                  alt={product.title}
                                  fill
                                  className="object-cover rounded-md"
                                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                />
                              </div>
                              <h3 className="text-lg font-medium mt-4">{product.title}</h3>
                              <p className="text-gray-500">{product.department}</p>
                              <div className="flex justify-between items-center mt-2">
                                <span className="text-red-500 line-through">{product.price}</span>
                                <span className="text-green-500 font-bold">{product.discount}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                  
    )
}
export default Products