import React from "react";

 import Image from "next/image";
    
     
        const Featured = () => {
          const posts = [
            {
              id: 1,
              title: "Loudest à la Madison #1 (L'intégral)",
              description: "Problems of importance and meaning trying to resolve the conflict.",
              date: "27 April 2024",
              imgSrc: "/fi.jpeg",
            },
            {
              id: 2,
              title: "Loudest à la Madison #1 (L'intégral)",
              description: "Problems of importance and meaning trying to resolve the conflict.",
              date: "27 April 2024",
              imgSrc: "/f2.jpeg",
            },
            {
              id: 3,
              title: "Loudest à la Madison #1 (L'intégral)",
              description: "Problems of importance and meaning trying to resolve the conflict.",
              date: "27 April 2024",
              imgSrc: "/f3.jpeg",
            },
          ];
        
          return (
            <div className="px-4 sm:px-6 lg:px-20 py-10 bg-gray-50 mt-9">
              <h2 className="text-center text-3xl font-bold mb-4">Featured Posts</h2>
              <p className="text-center text-gray-600 max-w-3xl mx-auto">
                Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
              </p>
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {posts.map((post) => (
                  <div key={post.id} className="bg-white shadow-md rounded-md overflow-hidden">
                    <div className="relative">
                      <Image
                        src={post.imgSrc}
                        alt={post.title}
                        width={400}
                        height={250}
                        className="w-full h-48 object-cover"
                      />
                      <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
                        NEW
                      </span>
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
                      <p className="text-sm text-gray-600 mb-4">{post.description}</p>
                      <div className="flex justify-between items-center text-sm text-gray-500">
                        <span>{post.date}</span>
                        <a href="#" className="text-blue-500 hover:underline">
                          Learn More →
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        };
        
      
      

export default Featured