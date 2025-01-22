
// import { client } from "@/sanity/lib/client";
// import Navbar from "../components/navbar";
// import Footer from "../components/footer";
// import Image from "next/image";

// interface Product {
//   title: string;
//   // description: string; // Added description back
//   imageUrl: string;
//   price: number;
//   tags?: string[];
//   discountPercentage?: number;
//   isNew?: boolean;
// }

// async function getProducts(): Promise<Product[]> {
//   const query = `*[_type == "product"] {
//     title,
//     // description,
//     "imageUrl": productImage.asset->url,
//     price,
//     tags,
//     discountPercentage,
//     isNew
//   }`;

//   const products = await client.fetch(query);
//   return products;
// }

// export default async function ProPage() {
//   const products = await getProducts();

//   return (
//     <div>
//       <Navbar/>
//     <div className="p-5 max-w-7xl mx-auto">
//       {/* Centered and Responsive Heading */}
//       <h1 className="text-center text-3xl font-bold mb-8">Products</h1>

//       {/* Responsive Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {products.map((product) => (
//           <div
//             key={product.title}
//             className="border border-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white flex flex-col items-center text-center"
//           >
//             {/* Product Image */}
//             <img width={500} height={500}
//               src={product.imageUrl}
//               alt={product.title}
//               className=" w-[500ox] h-[500px] object-cover"
//             />

//             {/* Product Details */}
//             <div className="p-4 flex flex-col items-center">
//               <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
//               {/* <p className="text-gray-600 mb-4">{product.description}</p> */}
//               <p className="text-lg font-bold text-gray-800">
//                 Price: ${product.price}
//               </p>
//               {product.discountPercentage && (
//                 <p className="text-green-600">
//                   Discount: {product.discountPercentage}%
//                 </p>
//               )}
//               {product.isNew && (
//                 <p className="text-red-600 font-semibold">New Product</p>
//               )}
//               {product.tags && (
//                 <p className="text-gray-500 text-sm">
//                   Tags: {product.tags.join(", ")}
//                 </p>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//     <Footer/>
//     </div>
//   );
// }
// import { client } from "@/sanity/lib/client";
// import Navbar from "../components/navbar";
// import Footer from "../components/footer";
// import Image from "next/image";
// import Link from "next/link"; // Import Link from Next.js

// interface Product {
//   title: string;
//   slug: string; // Add slug field
//   imageUrl: string;
//   price: number;
//   tags?: string[];
//   discountPercentage?: number;
//   isNew?: boolean;
// }

// async function getProducts(): Promise<Product[]> {
//   const query = `*[_type == "product"] {
//     title,
//     "slug": slug.current, // Fetch slug
//     "imageUrl": productImage.asset->url,
//     price,
//     tags,
//     discountPercentage,
//     isNew
//   }`;

//   const products = await client.fetch(query);
//   return products;
// }

// export default async function ProPage() {
//   const products = await getProducts();

//   return (
//     <div>
//       <Navbar />
//       <div className="p-5 max-w-7xl mx-auto">
//         <h1 className="text-center text-3xl font-bold mb-8">Products</h1>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {products.map((product) => (
//             <Link key={product.slug} href={`/pro/${product.slug}`}>
//               <div className="border border-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white flex flex-col items-center text-center cursor-pointer">
//                 <img
//                   width={500}
//                   height={500}
//                   src={product.imageUrl}
//                   alt={product.title}
//                   className="w-[500px] h-[500px] object-cover"
//                 />
//                 <div className="p-4 flex flex-col items-center">
//                   <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
//                   <p className="text-lg font-bold text-gray-800">
//                     Price: ${product.price}
//                   </p>
//                   {product.discountPercentage && (
//                     <p className="text-green-600">
//                       Discount: {product.discountPercentage}%
//                     </p>
//                   )}
//                   {product.isNew && (
//                     <p className="text-red-600 font-semibold">New Product</p>
//                   )}
//                   {product.tags && (
//                     <p className="text-gray-500 text-sm">
//                       Tags: {product.tags.join(", ")}
//                     </p>
//                   )}
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }

// import { client } from "@/sanity/lib/client";
// import Navbar from "../components/navbar";
// import Footer from "../components/footer";
// import Image from "next/image";
// import Link from "next/link";

// interface Product {
//   title: string;
//   slug: string;
//   description: string;
//   imageUrl: string;
//   price: number;
//   tags?: string[];
//   discountPercentage?: number;
//   isNew?: boolean;
// }

// async function getProducts(): Promise<Product[]> {
//   const query = `*[_type == "product"] {
//     title,
//     "slug": slug.current,
//     description,
//     "imageUrl": productImage.asset->url,
//     price,
//     tags,
//     discountPercentage,
//     isNew
//   }`;

//   const products = await client.fetch(query);
//   return products;
// }

// export default async function ProPage() {
//   const products = await getProducts();

//   return (
//     <div>
//       <Navbar />
//       <div className="p-5 max-w-7xl mx-auto">
//         <h1 className="text-center text-3xl font-bold mb-8">Products</h1>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {products.map((product) => (
//             <Link key={product.slug} href={`/products/${product.slug}`}>
//               <div className="border border-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white flex flex-col items-center text-center cursor-pointer">
//                 <Image
//                   width={500}
//                   height={500}
//                   src={product.imageUrl}
//                   alt={product.title}
//                   className="w-[500px] h-[500px] object-cover"
//                 />
//                 <div className="p-4 flex flex-col items-center">
//                   <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
//                   <p className="text-lg font-bold text-gray-800">
//                     Price: ${product.price}
//                   </p>
//                   {product.discountPercentage && (
//                     <p className="text-green-600">
//                       Discount: {product.discountPercentage}%
//                     </p>
//                   )}
//                   {product.isNew && (
//                     <p className="text-red-600 font-semibold">New Product</p>
//                   )}
//                   {product.tags && (
//                     <p className="text-gray-500 text-sm">
//                       Tags: {product.tags.join(", ")}
//                     </p>
//                   )}
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }

// import { client } from "@/sanity/lib/client";
// import Navbar from "../components/navbar";
// import Footer from "../components/footer";
// import Image from "next/image";
// import Link from "next/link";

// interface Product {
//   _id: string; // Use _id instead of slug
//   title: string;
//   description: string;
//   imageUrl: string;
//   price: number;
//   tags?: string[];
//   discountPercentage?: number;
//   isNew?: boolean;
// }

// async function getProducts(): Promise<Product[]> {
//   const query = `*[_type == "product"] {
//     _id, // Fetch _id
//     title,
//     description,
//     "imageUrl": productImage.asset->url,
//     price,
//     tags,
//     discountPercentage,
//     isNew
//   }`;

//   const products = await client.fetch(query);
//   return products;
// }

// export default async function ProPage() {
//   const products = await getProducts();

//   return (
//     <div>
//       <Navbar />
//       <div className="p-5 max-w-7xl mx-auto">
//         <h1 className="text-center text-3xl font-bold mb-8">Products</h1>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {products.map((product) => (
//             <Link key={product._id} href={`/pro/${product._id}`}>
//               <div className="border border-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white flex flex-col items-center text-center cursor-pointer">
//                 <Image
//                   width={500}
//                   height={500}
//                   src={product.imageUrl}
//                   alt={product.title}
//                   className="w-[500px] h-[500px] object-cover"
//                 />
//                 <div className="p-4 flex flex-col items-center">
//                   <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
//                   <p className="text-lg font-bold text-gray-800">
//                     Price: ${product.price}
//                   </p>
//                   {product.discountPercentage && (
//                     <p className="text-green-600">
//                       Discount: {product.discountPercentage}%
//                     </p>
//                   )}
//                   {product.isNew && (
//                     <p className="text-red-600 font-semibold">New Product</p>
//                   )}
//                   {product.tags && (
//                     <p className="text-gray-500 text-sm">
//                       Tags: {product.tags.join(", ")}
//                     </p>
//                   )}
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// 'use client'; // Mark this as a Client Component

// import { useState } from 'react';
// import { client } from '@/sanity/lib/client';
// import Navbar from '../components/navbar';
// import Footer from '../components/footer';
// import Image from 'next/image';
// import Link from 'next/link';
// import SearchBar from '../components/SearchBar';

// interface Product {
//   _id: string;
//   title: string;
//   description: string;
//   imageUrl: string;
//   price: number;
//   tags?: string[];
//   discountPercentage?: number;
//   isNew?: boolean;
// }

// async function getProducts(): Promise<Product[]> {
//   const query = `*[_type == "product"] {
//     _id,
//     title,
//     description,
//     "imageUrl": productImage.asset->url,
//     price,
//     tags,
//     discountPercentage,
//     isNew
//   }`;

//   const products = await client.fetch(query);
//   return products;
// }

// export default function ProPage() {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [searchQuery, setSearchQuery] = useState('');

//   // Fetch products on component mount
//   useState(() => {
//     getProducts().then((data) => setProducts(data));
//   }, );

//   // Filter products based on search query
//   const filteredProducts = products.filter(
//     (product) =>
//       product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       product.description.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div>
//       <Navbar />
//       <div className="p-5 max-w-7xl mx-auto">
//         <h1 className="text-center text-3xl font-bold mb-8">Products</h1>
//         <SearchBar onSearch={(query) => setSearchQuery(query)} />
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {filteredProducts.map((product) => (
//             <Link key={product._id} href={`/pro/${product._id}`}>
//               <div className="border border-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white flex flex-col items-center text-center cursor-pointer">
//                 <Image
//                   width={500}
//                   height={500}
//                   src={product.imageUrl}
//                   alt={product.title}
//                   className="w-[500px] h-[500px] object-cover"
//                 />
//                 <div className="p-4 flex flex-col items-center">
//                   <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
//                   <p className="text-lg font-bold text-gray-800">
//                     Price: ${product.price}
//                   </p>
//                   {product.discountPercentage && (
//                     <p className="text-green-600">
//                       Discount: {product.discountPercentage}%
//                     </p>
//                   )}
//                   {product.isNew && (
//                     <p className="text-red-600 font-semibold">New Product</p>
//                   )}
//                   {product.tags && (
//                     <p className="text-gray-500 text-sm">
//                       Tags: {product.tags.join(', ')}
//                     </p>
//                   )}
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }
'use client'; // Mark this as a Client Component

import { useState, useEffect } from 'react';
import { client } from '@/sanity/lib/client';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Image from 'next/image';
import Link from 'next/link';
import SearchBar from '../components/SearchBar';

interface Item {
  _id: string;
  name: string;
  description: string;
  price: number;
  discountPrice?: number;
  color?: string;
  sizes?: string[];
  image: {
    asset: {
      url: string;
    };
  };
}

async function getItems(): Promise<Item[]> {
  const query = `*[_type == "items"] {
    _id,
    name,
    // description,
    price,
    discountPrice,
    color,
    sizes,
    image {
      asset -> {
        url
      }
    }
  }`;

  const items = await client.fetch(query);
  return items;
}

export default function ItemsPage() {
  const [items, setItems] = useState<Item[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  // Fetch items on component mount
  useEffect(() => {
    getItems().then((data) => setItems(data));
  }, []);

  
  const filteredItems = items.filter((item) => 
    item.name.toUpperCase().includes(searchQuery.toUpperCase()) ||
    (item.description?.toLowerCase() || '').includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <Navbar />
      <div className="p-5 max-w-7xl mx-auto">
        <h1 className="text-center text-3xl font-bold mb-8">Items</h1>
        <SearchBar onSearch={(query) => setSearchQuery(query)} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            // 
            <Link key={item._id} href={`/pro/${item._id}`}>
              <div className="border border-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white flex flex-col items-center text-center cursor-pointer">
                <Image
                  width={200}
                  height={200}
                  src={item.image.asset.url}
                  alt={item.name}
                  className=" object-cover"
                />
                <div className="p-4 flex flex-col items-center">
                  <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
                   {/* <p className="text-gray-600 mb-2">{item.desction}</p>  */}
                  <p className="text-lg font-bold text-gray-800">
                    Price: ${item.price}
                  </p>
                  {item.discountPrice && (
                    <p className="text-green-600">
                      Discount Price: ${item.discountPrice}
                    </p>
                  )}
                  {item.color && (
                    <p className="text-gray-500">Color: {item.color}</p>
                  )}
                  {item.sizes && (
                    <p className="text-gray-500">
                      Sizes: {item.sizes.join(', ')}
                    </p>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}