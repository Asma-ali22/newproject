
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
    addToCart: (product: CartItem, quantity?: number) => void;
    updateQuantity: (id: string, quantity: number) => void;
    removeFromCart: (id: string) => void;
    getTotalPrice: () => number;
    clearCart: () => void;
}

export const useCartStore = create<CartStore>((set, get) => ({
    cartItems: [],
    addToCart: (product, quantity = 1) =>
        set((state) => {
            const existingItem = state.cartItems.find((item) => item.id === product.id);
            if (existingItem) {
                return {
                    cartItems: state.cartItems.map((item) =>
                        item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
                    ),
                };
            }
            return { cartItems: [...state.cartItems, { ...product, quantity }] };
        }),
    updateQuantity: (id, quantity) =>
        set((state) => ({
            cartItems: state.cartItems.map((item) =>
                item.id === id && quantity > 0 ? { ...item, quantity } : item
            ),
        })),
    removeFromCart: (id) =>
        set((state) => ({
            cartItems: state.cartItems.filter((item) => item.id !== id),
        })),
    getTotalPrice: () =>
        get().cartItems.reduce((total, item) => total + item.price * item.quantity, 0),
    clearCart: () => set({ cartItems: [] }),
}));