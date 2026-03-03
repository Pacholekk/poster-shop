"use client";

import Link from "next/link";
import { useCartStore } from "@/store/cart-store";

export function Navbar() {
  const itemsCount = useCartStore((state) => state.getItemsCount());

  return (
    <header className="border-b border-black/10 bg-white/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          Poster Shop
        </Link>

        <nav className="flex items-center gap-5 text-sm font-medium text-black/70">
          <Link href="/" className="transition hover:text-black">
            Home
          </Link>
          <Link href="/products" className="transition hover:text-black">
            Posters
          </Link>
          <Link href="/checkout" className="transition hover:text-black">
            Checkout
          </Link>
          <Link
            href="/cart"
            className="rounded-full border border-black/10 px-3 py-1.5 text-black transition hover:bg-black hover:text-white"
          >
            Cart ({itemsCount})
          </Link>
        </nav>
      </div>
    </header>
  );
}
