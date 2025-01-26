
 // Mark this as a Client Component
"use client"
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
  title:string
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
    title,
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
                  <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                  
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