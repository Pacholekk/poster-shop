"use client";

import { useMemo, useState } from "react";

import { Product } from "@/types/shop";
import { useCartStore } from "@/store/cart-store";

type AddToCartFormProps = {
  product: Product;
};

export function AddToCartForm({ product }: AddToCartFormProps) {
  const addItem = useCartStore((state) => state.addItem);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedPrintType, setSelectedPrintType] = useState(
    product.printType[0],
  );
  const sizes = useMemo(() => product.sizes, [product.sizes]);
  const printTypes = product.printType;

  return (
    <div className="space-y-4 rounded-xl border border-black/10 p-4">
      <div className="space-y-2">
        <label htmlFor="printType" className="text-sm font-medium">
          Print type
        </label>
        <select
          id="printType"
          value={selectedPrintType}
          onChange={(event) =>
            setSelectedPrintType(event.target.value as typeof selectedPrintType)
          }
          className="w-full rounded-lg border border-black/15 bg-white px-3 py-2 text-sm"
        >
          {printTypes.map((printType) => (
            <option key={printType} value={printType}>
              {printType}
            </option>
          ))}
        </select>
      </div>
      {selectedPrintType === "Paper" && (
        <div className="space-y-2">
          <label htmlFor="size" className="text-sm font-medium">
            Poster size
          </label>
          <select
            id="size"
            value={selectedSize}
            onChange={(event) =>
              setSelectedSize(event.target.value as typeof selectedSize)
            }
            className="w-full rounded-lg border border-black/15 bg-white px-3 py-2 text-sm"
          >
            {sizes.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>
      )}
      <button
        type="button"
        onClick={() => addItem(product, selectedSize, selectedPrintType, 1)}
        className="w-full rounded-full bg-black px-4 py-2 text-sm font-semibold text-white transition hover:bg-black/85"
      >
        Add to cart
      </button>
    </div>
  );
}
