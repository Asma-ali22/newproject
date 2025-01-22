'use client'; // Mark this as a Client Component

import { useState } from 'react';
import { client } from '@/sanity/lib/client';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Image from 'next/image';
import Link from 'next/link';
import SearchBar from '../components/SearchBar';

interface Product {
  _id: string;
  title: string;
  description: string;
  imageUrl: string;
  price: number;
  tags?: string[];
  discountPercentage?: number;
  isNew?: boolean;
}

async function getProducts(): Promise<Product[]> {
  const query = `*[_type == "product"] {
    _id,
    title,
    description,
    "imageUrl": productImage.asset->url,
    price,
    tags,
    discountPercentage,
    isNew
  }`;

  const products = await client.fetch(query);
  return products;
}

export default function ProPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  // Fetch products on component mount
  useState(() => {
    getProducts().then((data) => setProducts(data));
  }, );

  // Filter products based on search query
  const filteredProducts = products.filter(
    (product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <Navbar />
      <div className="p-5 max-w-7xl mx-auto">
        <h1 className="text-center text-3xl font-bold mb-8">Products</h1>
        <SearchBar onSearch={(query) => setSearchQuery(query)} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <Link key={product._id} href={`/pro/${product._id}`}>
              <div className="border border-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white flex flex-col items-center text-center cursor-pointer">
                <Image
                  width={500}
                  height={500}
                  src={product.imageUrl}
                  alt={product.title}
                  className="w-[500px] h-[500px] object-cover"
                />
                <div className="p-4 flex flex-col items-center">
                  <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
                  <p className="text-lg font-bold text-gray-800">
                    Price: ${product.price}
                  </p>
                  {product.discountPercentage && (
                    <p className="text-green-600">
                      Discount: {product.discountPercentage}%
                    </p>
                  )}
                  {product.isNew && (
                    <p className="text-red-600 font-semibold">New Product</p>
                  )}
                  {product.tags && (
                    <p className="text-gray-500 text-sm">
                      Tags: {product.tags.join(', ')}
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