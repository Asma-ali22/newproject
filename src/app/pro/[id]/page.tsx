
// import { client } from '@/sanity/lib/client';
// import Image from 'next/image';
// import { notFound } from 'next/navigation';
// import AddToCartButton from '@/app/components/addtocartbutton';
// import Footer from '@/app/components/footer';
// import Navbar from '@/app/components/navbar';

// interface Item {
//   _id: string;
//   name: string;
//   description: string;
//   price: number;
//   discountPrice?: number;
//   color?: string;
//   sizes?: string[];
//   image: {
//     asset: {
//       url: string;
//     };
//   };
// }

// async function getItem(id: string): Promise<Item> {
//   const query = `*[_type == "items" && _id == $id][0] {
//     _id,
//     name,
//     description,
//     price,
//     discountPrice,
//     color,
//     sizes,
//     image {
//       asset -> {
//         url
//       }
//     }
//   }`;

//   const item = await client.fetch(query, { id });
//   return item;
// }

// // Optional: Generate static paths for all items
// export async function generateStaticParams() {
//   const query = `*[_type == "items"] {
//     _id
//   }`;

//   const items = await client.fetch(query);
//   return items.map((item: { _id: string }) => ({
//     id: item._id,
//   }));
// }

// export default async function ItemPage({ params }: { params: { id: string } }) {
//   const item = await getItem(params.id);

//   if (!item) {
//     notFound();
//   }

//   return (
//     <div>
//       <Navbar />
//       <h1 className="text-center text-3xl font-bold mb-8">{item.name}</h1>
//       <div className="flex flex-col md:flex-row gap-6 container mx-auto p-4">
//         {/* Item Image */}
//         <div className="w-full md:w-1/2">
//           <Image
//             src={item.image.asset.url}
//             alt={item.name}
//             width={500}
//             height={500}
//             className="object-cover rounded-lg"
//           />
//         </div>

//         {/* Item Details */}
//         <div className="w-full md:w-1/2 flex flex-col justify-center">
//           {/* Description */}
//           <p className="text-gray-600 mb-4">{item.description}</p>

//           {/* Price */}
//           <p className="text-lg font-bold text-gray-800">Price: ${item.price}</p>

//           {/* Discount Price */}
//           {item.discountPrice && (
//             <p className="text-green-600">
//               Discount Price: ${item.discountPrice}
//             </p>
//           )}

//           {/* Color */}
//           {item.color && (
//             <div className="mt-4">
//               <p className="text-gray-800 font-semibold">Color:</p>
//               <div className="flex gap-2 mt-2">
//                 <span className="px-3 py-1 bg-gray-200 rounded">
//                   {item.color}
//                 </span>
//               </div>
//             </div>
//           )}

//           {/* Sizes */}
//           {item.sizes && (
//             <div className="mt-4">
//               <p className="text-gray-800 font-semibold">Available Sizes:</p>
//               <div className="flex gap-2 mt-2">
//                 {item.sizes.map((size) => (
//                   <span key={size} className="px-3 py-1 bg-gray-200 rounded">
//                     {size}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* Add to Cart Button */}
//           <div className="mt-6">
//             <AddToCartButton
//               product={{
//                 id: item._id,
//                 name: item.name, // Map `name` to `title`
//                 price: item.price,
//                 imageUrl: item.image.asset.url,
//                 quantity: 1, // Default quantity
//               }}
//             />
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }
// import { client } from '@/sanity/lib/client';
// import Image from 'next/image';
// import { notFound } from 'next/navigation';
// import AddToCartButton from '@/app/components/addtocartbutton';
// import Footer from '@/app/components/footer';
// import Navbar from '@/app/components/navbar';

// interface Item {
//   _id: string;
//   name: string;
//   description: string;
//   price: number;
//   discountPrice?: number;
//   color?: string;
//   sizes?: string[];
//   image: {
//     asset: {
//       url: string;
//     };
//   };
// }

// interface Params {
//   id: string;
// }

// async function getItem(id: string): Promise<Item | null> {
//   try {
//     const query = `*[_type == "items" && _id == $id][0] {
//       _id,
//       name,
//       description,
//       price,
//       discountPrice,
//       color,
//       sizes,
//       image {
//         asset -> {
//           url
//         }
//       }
//     }`;

//     const item = await client.fetch<Item | null>(query, { id });
//     return item;
//   } catch (error) {
//     console.error('Error fetching item:', error);
//     return null;
//   }
// }

// export async function generateStaticParams(): Promise<Params[]> {
//   const query = `*[_type == "items"] {
//     _id
//   }`;

//   const items = await client.fetch<{ _id: string }[]>(query);
//   return items.map((item) => ({
//     id: item._id,
//   }));
// }

// export default async function ItemPage({ params }: { params: Params }) {
//   const item = await getItem(params.id);

//   if (!item) {
//     notFound();
//   }

//   return (
//     <div>
//       <Navbar />
//       <h1 className="text-center text-3xl font-bold mb-8">{item.name}</h1>
//       <div className="flex flex-col md:flex-row gap-6 container mx-auto p-4">
//         {/* Item Image */}
//         <div className="w-full md:w-1/2">
//           <Image
//             src={item.image.asset.url}
//             alt={item.name}
//             width={500}
//             height={500}
//             className="object-cover rounded-lg"
//           />
//         </div>

//         {/* Item Details */}
//         <div className="w-full md:w-1/2 flex flex-col justify-center">
//           {/* Description */}
//           <p className="text-gray-600 mb-4">{item.description}</p>

//           {/* Price */}
//           <p className="text-lg font-bold text-gray-800">Price: ${item.price}</p>

//           {/* Discount Price */}
//           {item.discountPrice && (
//             <p className="text-green-600">
//               Discount Price: ${item.discountPrice}
//             </p>
//           )}

//           {/* Color */}
//           {item.color && (
//             <div className="mt-4">
//               <p className="text-gray-800 font-semibold">Color:</p>
//               <div className="flex gap-2 mt-2">
//                 <span className="px-3 py-1 bg-gray-200 rounded">
//                   {item.color}
//                 </span>
//               </div>
//             </div>
//           )}

//           {/* Sizes */}
//           {item.sizes && (
//             <div className="mt-4">
//               <p className="text-gray-800 font-semibold">Available Sizes:</p>
//               <div className="flex gap-2 mt-2">
//                 {item.sizes.map((size) => (
//                   <span key={size} className="px-3 py-1 bg-gray-200 rounded">
//                     {size}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* Add to Cart Button */}
//           <div className="mt-6">
//             <AddToCartButton
//               product={{
//                 id: item._id,
//                 name: item.name,
//                 price: item.price,
//                 imageUrl: item.image.asset.url,
//                 quantity: 1,
//               }}
//             />
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }
import { client } from '@/sanity/lib/client';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import AddToCartButton from '@/app/components/addtocartbutton';
import Footer from '@/app/components/footer';
import Navbar from '@/app/components/navbar';

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

interface Params {
  id: string;
}

interface PageProps {
  params: Params;
}

async function getItem(id: string): Promise<Item | null> {
  try {
    const query = `*[_type == "items" && _id == $id][0] {
      _id,
      name,
      description,
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

    const item = await client.fetch<Item | null>(query, { id });
    return item;
  } catch (error) {
    console.error('Error fetching item:', error);
    return null;
  }
}

export async function generateStaticParams(): Promise<Params[]> {
  try {
    const query = `*[_type == "items"] {
      _id
    }`;

    const items = await client.fetch<{ _id: string }[]>(query);
    return items.map((item) => ({
      id: item._id,
    }));
  } catch (error) {
    console.error('Error fetching static params:', error);
    return [];
  }
}

export default async function ItemPage({ params }: PageProps) {
  const item = await getItem(params.id);

  if (!item) {
    notFound();
  }

  return (
    <div>
      <Navbar />
      <h1 className="text-center text-3xl font-bold mb-8">{item.name}</h1>
      <div className="flex flex-col md:flex-row gap-6 container mx-auto p-4">
        {/* Item Image */}
        <div className="w-full md:w-1/2 relative h-96">
          <Image
            src={item.image.asset.url}
            alt={item.name}
            fill
            className="object-cover rounded-lg"
          />
        </div>

        {/* Item Details */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <p className="text-gray-600 mb-4">{item.description}</p>
          <p className="text-lg font-bold text-gray-800">Price: ${item.price}</p>
          {item.discountPrice && (
            <p className="text-green-600">
              Discount Price: ${item.discountPrice}
            </p>
          )}
          {item.color && (
            <div className="mt-4">
              <p className="text-gray-800 font-semibold">Color:</p>
              <div className="flex gap-2 mt-2">
                <span className="px-3 py-1 bg-gray-200 rounded">
                  {item.color}
                </span>
              </div>
            </div>
          )}
          {item.sizes && (
            <div className="mt-4">
              <p className="text-gray-800 font-semibold">Available Sizes:</p>
              <div className="flex gap-2 mt-2">
                {item.sizes.map((size) => (
                  <span key={size} className="px-3 py-1 bg-gray-200 rounded">
                    {size}
                  </span>
                ))}
              </div>
            </div>
          )}
          <div className="mt-6">
            <AddToCartButton
              product={{
                id: item._id,
                name: item.name,
                price: item.price,
                imageUrl: item.image.asset.url,
                quantity: 1,
              }}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}