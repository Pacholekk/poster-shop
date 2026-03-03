"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

import { CartItem, PosterSize, PrintType, Product } from "@/types/shop";

type CartStore = {
  items: CartItem[];
  addItem: (
    product: Product,
    size: PosterSize | undefined,
    printType: PrintType,
    quantity?: number,
  ) => void;
  removeItem: (
    productId: string,
    size: PosterSize | undefined,
    printType: PrintType,
  ) => void;
  updateQuantity: (
    productId: string,
    size: PosterSize | undefined,
    printType: PrintType,
    quantity: number,
  ) => void;
  clearCart: () => void;
  getItemsCount: () => number;
  getTotal: () => number;
};

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (product, size, printType, quantity = 1) =>
        set((state) => {
          const unitPrice =
            printType === "Digital"
              ? product.pricing.digital
              : product.pricing.paper[size ?? product.sizes[0]];

          if (!unitPrice) return state;

          const existingItem = state.items.find(
            (item) =>
              item.productId === product.id &&
              item.size === size &&
              item.printType === printType,
          );

          if (existingItem) {
            return {
              items: state.items.map((item) =>
                item.productId === product.id &&
                item.size === size &&
                item.printType === printType
                  ? { ...item, quantity: item.quantity + quantity }
                  : item,
              ),
            };
          }

          return {
            items: [
              ...state.items,
              {
                productId: product.id,
                name: product.name,
                slug: product.slug,
                image: product.images[0],
                size,
                printType,
                price: unitPrice,
                quantity,
              },
            ],
          };
        }),
      removeItem: (productId, size, printType) =>
        set((state) => ({
          items: state.items.filter(
            (item) =>
              !(
                item.productId === productId &&
                item.size === size &&
                item.printType === printType
              ),
          ),
        })),
      updateQuantity: (productId, size, printType, quantity) =>
        set((state) => ({
          items: state.items
            .map((item) =>
              item.productId === productId &&
              item.size === size &&
              item.printType === printType
                ? { ...item, quantity: Math.max(1, quantity) }
                : item,
            )
            .filter((item) => item.quantity > 0),
        })),
      clearCart: () => set({ items: [] }),
      getItemsCount: () =>
        get().items.reduce((sum, item) => sum + item.quantity, 0),
      getTotal: () =>
        get().items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    }),
    { name: "poster-shop-cart" },
  ),
);
