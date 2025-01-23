
'use client'; // Mark this as a Client Component

import Image from "next/image";
import { useCartStore } from "../store/cartStore";

export default function CartDropdown() {
  const { cartItems, updateQuantity, removeFromCart, getTotalPrice } = useCartStore();

  const handleQuantityChange = (id: string, quantity: number) => {
    if (quantity < 1) return;
    updateQuantity(id, quantity);
  };

  return (
    <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-4">Your Cart</h2>
        {cartItems.length === 0 ? (
          <p className="text-gray-600">Your cart is empty.</p>
        ) : (
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between">
                <div className="flex items-center">
                  <Image width={10} height={10}
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-10 h-10 object-cover rounded"
                  />
                  <div className="ml-3">
                    <p className="text-sm font-medium">{item.title}</p>
                    <p className="text-xs text-gray-500">${item.price} x {item.quantity}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                    className="w-12 text-center border rounded"
                  />
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="ml-2 text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
            <div className="border-t pt-4">
              <p className="text-lg font-semibold">
                Total: ${getTotalPrice().toFixed(2)}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}