"use client";

import Link from "next/link";
import { useCartStore } from "@/store/cart-store";
import { useI18n } from "@/lib/i18n";

export function Navbar() {
  const itemsCount = useCartStore((state) => state.getItemsCount());
  const { language, setLanguage, t } = useI18n();

  return (
    <header className="border-b border-black/10 bg-white/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          Poster Shop
        </Link>

        <nav className="flex items-center gap-5 text-sm font-medium text-black/70">
          <label className="flex items-center gap-2 text-xs">
            <span>{t("nav.language")}:</span>
            <select
              value={language}
              onChange={(event) => setLanguage(event.target.value as "en" | "pl")}
              className="rounded-md border border-black/20 bg-white px-1 py-0.5 text-xs"
            >
              <option value="en">EN</option>
              <option value="pl">PL</option>
            </select>
          </label>
          <Link href="/" className="transition hover:text-black">
            {t("nav.home")}
          </Link>
          <Link href="/products" className="transition hover:text-black">
            {t("nav.posters")}
          </Link>
          <Link href="/checkout" className="transition hover:text-black">
            {t("nav.checkout")}
          </Link>
          <Link
            href="/cart"
            className="rounded-full border border-black/10 px-3 py-1.5 text-black transition hover:bg-black hover:text-white"
          >
            {t("nav.cart")} ({itemsCount})
          </Link>
        </nav>
      </div>
    </header>
  );
}
