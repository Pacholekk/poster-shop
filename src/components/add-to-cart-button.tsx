"use client";

import { Product } from "@/types/shop";
import { useCartStore } from "@/store/cart-store";

type AddToCartButtonProps = {
  product: Product;
};

export function AddToCartButton({ product }: AddToCartButtonProps) {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <button
      type="button"
      onClick={() =>
        addItem(product, product.sizes[0], product.printType[0], 1)
      }
      className="rounded-full bg-black px-4 py-2 text-sm font-semibold text-white transition hover:bg-black/85"
    >
      Add to cart
    </button>
  );
}
