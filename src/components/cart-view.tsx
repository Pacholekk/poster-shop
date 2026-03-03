"use client";

import Image from "next/image";
import Link from "next/link";

import { CartItem } from "@/types/shop";
import { useCartStore } from "@/store/cart-store";

export function CartView() {
  const items = useCartStore((state) => state.items);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const removeItem = useCartStore((state) => state.removeItem);
  const total = useCartStore((state) => state.getTotal());

  if (items.length === 0) {
    return (
      <section className="space-y-4 rounded-2xl border border-dashed border-black/20 p-8 text-center">
        <h2 className="text-2xl font-semibold">Your cart is empty</h2>
        <p className="text-black/60">Browse posters and add your favorites.</p>
        <Link
          href="/products"
          className="inline-flex rounded-full bg-black px-5 py-2 text-sm font-semibold text-white"
        >
          Go to posters
        </Link>
      </section>
    );
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
      <section className="space-y-4">
        {items.map((item: CartItem) => (
          <article
            key={`${item.productId}-${item.size}-${item.printType}`}
            className="flex gap-4 rounded-xl border border-black/10 p-4"
          >
            <div className="relative h-24 w-20 overflow-hidden rounded-md">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col justify-between">
              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-sm text-black/60">Type: {item.printType}</p>
                {item.printType === "Paper" && (
                  <p className="text-sm text-black/60">Size: {item.size}</p>
                )}
              </div>
              <div className="mt-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() =>
                      updateQuantity(
                        item.productId,
                        item.size,
                        item.printType,
                        item.quantity - 1,
                      )
                    }
                    className="h-8 w-8 rounded-full border border-black/20 text-sm"
                  >
                    -
                  </button>
                  <span className="w-6 text-center text-sm">
                    {item.quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() =>
                      updateQuantity(
                        item.productId,
                        item.size,
                        item.printType,
                        item.quantity + 1,
                      )
                    }
                    className="h-8 w-8 rounded-full border border-black/20 text-sm"
                  >
                    +
                  </button>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold">
                    {item.price * item.quantity} PLN
                  </p>
                  <button
                    type="button"
                    onClick={() =>
                      removeItem(item.productId, item.size, item.printType)
                    }
                    className="text-xs text-red-600"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>

      <aside className="h-fit rounded-xl border border-black/10 p-5">
        <h3 className="text-lg font-semibold">Order summary</h3>
        <div className="mt-4 space-y-2 text-sm">
          <div className="flex items-center justify-between">
            <span>Subtotal</span>
            <span>{total} PLN</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Shipping</span>
            <span>0 PLN</span>
          </div>
          <div className="mt-3 flex items-center justify-between border-t border-black/10 pt-3 text-base font-bold">
            <span>Total</span>
            <span>{total} PLN</span>
          </div>
        </div>
        <Link
          href="/checkout"
          className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-black px-4 py-2 text-sm font-semibold text-white"
        >
          Proceed to checkout
        </Link>
      </aside>
    </div>
  );
}
