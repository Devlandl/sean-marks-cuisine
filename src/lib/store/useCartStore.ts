import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CartItem } from '@/types/cart';

interface CartState {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string, portion: 'half' | 'full') => void;
  updateItemQuantity: (id: string, portion: 'half' | 'full', quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (item: CartItem) => {
        set((state) => {
          // Check if item with same id and portion already exists
          const existingItem = state.items.find(
            (i) => i.id === item.id && i.portion === item.portion
          );

          if (existingItem) {
            // Update quantity if item exists
            return {
              items: state.items.map((i) =>
                i.id === item.id && i.portion === item.portion
                  ? { ...i, quantity: i.quantity + item.quantity }
                  : i
              ),
            };
          }

          // Add new item if it doesn't exist
          return {
            items: [...state.items, item],
          };
        });
      },

      removeItem: (id: string, portion: 'half' | 'full') => {
        set((state) => ({
          items: state.items.filter((item) => !(item.id === id && item.portion === portion)),
        }));
      },

      updateItemQuantity: (id: string, portion: 'half' | 'full', quantity: number) => {
        set((state) => ({
          items: state.items.map((item) =>
            item.id === id && item.portion === portion
              ? { ...item, quantity: Math.max(0, quantity) }
              : item
          ),
        }));
      },

      clearCart: () => {
        set({
          items: [],
        });
      },

      getTotalItems: () => {
        return get().items.reduce((sum, item) => sum + item.quantity, 0);
      },

      getTotalPrice: () => {
        return get().items.reduce((sum, item) => sum + item.price * item.quantity, 0);
      },
    }),
    {
      name: 'cart-store',
      version: 1,
    }
  )
);
