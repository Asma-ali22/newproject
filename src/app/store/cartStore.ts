// import { create } from 'zustand';

// // Define the CartItem interface
// interface CartItem {
//   id: string;
//   title: string;
//   price: number;
//   quantity: number;
//   imageUrl: string;
// }

// // Define the CartStore interface
// interface CartStore {
//   cartItems: CartItem[];
//   addToCart: (product: CartItem) => void;
//   updateQuantity: (id: string, quantity: number) => void;
//   removeFromCart: (id: string) => void;
// }

// // Create the cart store
// export const useCartStore = create<CartStore>((set) => ({
//   cartItems: [],
//   addToCart: (product) =>
//     set((state) => {
//       const existingItem = state.cartItems.find((item) => item.id === product.id);
//       if (existingItem) {
//         return {
//           cartItems: state.cartItems.map((item) =>
//             item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
//           ),
//         };
//       }
//       return { cartItems: [...state.cartItems, { ...product, quantity: 1 }] };
//     }),
//   updateQuantity: (id, quantity) =>
//     set((state) => ({
//       cartItems: state.cartItems.map((item) =>
//         item.id === id ? { ...item, quantity } : item
//       ),
//     })),
//   removeFromCart: (id) =>
//     set((state) => ({
//       cartItems: state.cartItems.filter((item) => item.id !== id),
//     })),
// }));

// import { create } from 'zustand';

// // Define the CartItem interface
// interface CartItem {
//   id: string;
//   title: string;
//   price: number;
//   quantity: number;
//   imageUrl: string;
// }

// // Define the CartStore interface
// interface CartStore {
//   cartItems: CartItem[];
//   addToCart: (product: CartItem) => void;
//   updateQuantity: (id: string, quantity: number) => void;
//   removeFromCart: (id: string) => void;
//   getTotalPrice: () => number; // Add a function to calculate the total price
// }

// // Create the cart store
// export const useCartStore = create<CartStore>((set, get) => ({
//   cartItems: [],
//   addToCart: (product) =>
//     set((state) => {
//       const existingItem = state.cartItems.find((item) => item.id === product.id);
//       if (existingItem) {
//         return {
//           cartItems: state.cartItems.map((item) =>
//             item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
//           ),
//         };
//       }
//       return { cartItems: [...state.cartItems, { ...product, quantity: 1 }] };
//     }),
//   updateQuantity: (id, quantity) =>
//     set((state) => ({
//       cartItems: state.cartItems.map((item) =>
//         item.id === id ? { ...item, quantity } : item
//       ),
//     })),
//   removeFromCart: (id) =>
//     set((state) => ({
//       cartItems: state.cartItems.filter((item) => item.id !== id),
//     })),
//   getTotalPrice: () => {
//     const { cartItems } = get();
//     return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
//   },
// }));



// store/cartStore.ts
import { create } from 'zustand';

interface CartItem {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  quantity: number;
}

interface CartStore {
  cartItems: CartItem[];
  addToCart: (product: CartItem) => void;
  updateQuantity: (id: string, quantity: number) => void;
  removeFromCart: (id: string) => void;
  getTotalPrice: () => number;
}

export const useCartStore :any= create<CartStore>((set) => ({
  cartItems: [],
  addToCart: (product) =>
    set((state) => {
      const existingItem = state.cartItems.find((item) => item.id === product.id);
      if (existingItem) {
        return {
          cartItems: state.cartItems.map((item) =>
            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
          ),
        };
      }
      return { cartItems: [...state.cartItems, { ...product, quantity: 1 }] };
    }),
  updateQuantity: (id, quantity) =>
    set((state) => ({
      cartItems: state.cartItems.map((item) =>
        item.id === id ? { ...item, quantity } : item
      ),
    })),
  removeFromCart: (id) =>
    set((state) => ({
      cartItems: state.cartItems.filter((item) => item.id !== id),
    })),
  getTotalPrice: () =>
    useCartStore.getState().cartItems.reduce(
      (total:any, item:any) => total + item.price * item.quantity,
      0
    ),
}));