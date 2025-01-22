// app/checkout/page.tsx
// 'use client';

// import { useCartStore } from '../store/cartStore';
// import { useState } from 'react';
// import { client } from '@/sanity/lib/client';

// export default function CheckoutPage() {
//   const { cartItems, getTotalPrice } = useCartStore();
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     address: '',
//   });

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     // Create an order object
//     const order = {
//       _type: 'order',
//       customerName: formData.name,
//       customerEmail: formData.email,
//       customerPhone: formData.phone,
//       customerAddress: formData.address,
//       items: cartItems.map((item:any) => ({
//         _type: 'orderItem',
//         product: {
//           _type: 'reference',
//           _ref: item.id,
//         },
//         quantity: item.quantity,
//       })),
//       total: getTotalPrice(),
//     };

//     // Save the order to Sanity
//     try {
//       await client.create(order);
//       alert('Order placed successfully!');
//       // Clear the cart after placing the order
//       useCartStore.getState().cartItems = [];
//     } catch (error) {
//       console.error('Failed to place order:', error);
//       alert('Failed to place order. Please try again.');
//     }
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-3xl font-bold mb-8">Checkout</h1>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label className="block text-gray-700">Name</label>
//           <input
//             type="text"
//             value={formData.name}
//             onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//             className="w-full px-4 py-2 border rounded"
//             required
//           />
//         </div>
//         <div>
//           <label className="block text-gray-700">Email</label>
//           <input
//             type="email"
//             value={formData.email}
//             onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//             className="w-full px-4 py-2 border rounded"
//             required
//           />
//         </div>
//         <div>
//           <label className="block text-gray-700">Phone</label>
//           <input
//             type="tel"
//             value={formData.phone}
//             onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
//             className="w-full px-4 py-2 border rounded"
//             required
//           />
//         </div>
//         <div>
//           <label className="block text-gray-700">Address</label>
//           <input
//             type="text"
//             value={formData.address}
//             onChange={(e) => setFormData({ ...formData, address: e.target.value })}
//             className="w-full px-4 py-2 border rounded"
//             required
//           />
//         </div>
//         <div className="mt-8">
//           <p className="text-xl font-semibold">
//             Total: ${getTotalPrice().toFixed(2)}
//           </p>
//           <button
//             type="submit"
//             className="mt-4 bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
//           >
//             Place Order
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }
'use client';

import { useCartStore } from '../store/cartStore';
import { useState } from 'react';
import { client } from '@/sanity/lib/client';

// Define the CartItem type
interface CartItem {
  id: string; // Ensure this matches your product ID type in Sanity
  title: string;
  price: number;
  imageUrl: string;
  quantity: number;
}

export default function CheckoutPage() {
  const { cartItems, getTotalPrice } = useCartStore();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Create an order object
    const order = {
      _type: 'order',
      customerName: formData.name,
      customerEmail: formData.email,
      customerPhone: formData.phone,
      customerAddress: formData.address,
      items: cartItems.map((item: CartItem) => ({
        _type: 'orderItem',
        product: {
          _type: 'reference',
          _ref: item.id,
        },
        quantity: item.quantity,
      })),
      total: getTotalPrice(),
    };

    try {
      // Save the order to Sanity
      await client.create(order);
      alert('Order placed successfully!');
      // Clear the cart after placing the order
      useCartStore.getState().clearCart(); // Call the store's clearCart method
    } catch (error) {
      console.error('Failed to place order:', error);
      alert('Failed to place order. Please try again.');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Phone</label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-4 py-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Address</label>
          <input
            type="text"
            value={formData.address}
            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
            className="w-full px-4 py-2 border rounded"
            required
          />
        </div>
        <div className="mt-8">
          <p className="text-xl font-semibold">
            Total: ${getTotalPrice().toFixed(2)}
          </p>
          <button
            type="submit"
            className="mt-4 bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
          >
            Place Order
          </button>
        </div>
      </form>
    </div>
  );
}
