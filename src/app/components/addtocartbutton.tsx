
'use client'; // Mark this as a Client Component

import { useCartStore } from "../store/cartStore";

interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  quantity: number;
}

interface AddToCartButtonProps {
  product: Product;
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  // Properly type the Zustand state
  const addToCart = useCartStore((state:any) => state.addToCart as (product: Product) => void);

  const handleAddToCart = () => {
    addToCart(product);
    alert('Product added to cart!');
  };

  return (
    <button
      onClick={handleAddToCart}
      className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
    >
      Add to Cart
    </button>
  );
}
