
'use client';

import Image from 'next/image';
import { useCartStore } from '../store/cartStore';
import Link from 'next/link';

// Define the type for Cart Items
interface CartItem {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  quantity: number;
}

export default function CartPage() {
  const { cartItems, updateQuantity, removeFromCart, getTotalPrice } = useCartStore();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item: CartItem) => (
            <div key={item.id} className="flex items-center justify-between border-b pb-4">
              <div className="flex items-center">
                <Image
                  width={64}
                  height={64}
                  src={item.imageUrl}
                  alt={item.title}
                  className="object-cover rounded"
                />
                <div className="ml-4">
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-gray-600">${item.price.toFixed(2)}</p>
                </div>
              </div>
              <div className="flex items-center">
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => updateQuantity(item.id, parseInt(e.target.value, 10))}
                  className="w-16 text-center border rounded"
                  min="1"
                />
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="ml-4 text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="mt-8">
            <p className="text-xl font-semibold">
              Total: ${getTotalPrice().toFixed(2)}
            </p>
            <Link
              href="/checkout"
              className="mt-4 inline-block bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
