
"use client";
import { useEffect, useState } from 'react';
import { client } from '@/sanity/lib/client';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';

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

export default function ProductDetail({ params }: { params: { id: string } }) {
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const query = `*[_type == "product" && _id == $id][0] {
        _id,
        title,
        description,
        "imageUrl": productImage.asset->url,
        price,
        tags,
        discountPercentage,
        isNew
      }`;

      const product = await client.fetch(query, { id: params.id });
      setProduct(product);
    };

    fetchProduct();
  }, [params.id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar />
      <div className="p-5 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Side: Image */}
          <div className="w-full md:w-1/2">
            <div className="border border-gray-200 rounded-lg overflow-hidden shadow-lg">
              <Image
                width={500}
                height={500}
                src={product.imageUrl}
                alt={product.title}
                className=" object-cover"
              />
            </div>
          </div>

          {/* Right Side: Product Details */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-4">{product.title}</h2>
            <p className="text-lg text-gray-700 mb-4">{product.description}</p>
            <p className="text-2xl font-bold text-gray-800 mb-4">
              Price: ${product.price}
            </p>
            {product.discountPercentage && (
              <p className="text-green-600 text-lg mb-4">
                Discount: {product.discountPercentage}%
              </p>
            )}
            {product.isNew && (
              <p className="text-red-600 font-semibold text-lg mb-4">
                New Product
              </p>
            )}
            {product.tags && (
              <div className="mb-4">
                <p className="text-gray-500 text-sm">
                  Tags: {product.tags.join(', ')}
                </p>
              </div>
            )}
            {/* Add a button or link if needed */}
            <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}