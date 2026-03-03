"use client";

import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/products";
import { useI18n } from "@/lib/i18n";

export default function Home() {
  const { t } = useI18n();
  const featuredProducts = products.filter((product) => product.featured).slice(0, 3);

  return (
    <div className="space-y-14">
      <section className="rounded-3xl bg-black px-6 py-14 text-white sm:px-10">
        <p className="text-sm uppercase tracking-[0.18em] text-white/70">{t("hero.badge")}</p>
        <h1 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
          {t("hero.title")}
        </h1>
        <p className="mt-4 max-w-xl text-white/75">
          {t("hero.subtitle")}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/products"
            className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black"
          >
            {t("hero.shopNow")}
          </Link>
          <Link
            href="/cart"
            className="rounded-full border border-white/35 px-5 py-2.5 text-sm font-semibold text-white"
          >
            {t("hero.openCart")}
          </Link>
        </div>
      </section>

      <section className="space-y-5">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl font-semibold tracking-tight">{t("home.featured")}</h2>
          <Link href="/products" className="text-sm font-medium text-black/70 hover:text-black">
            {t("home.viewAll")}
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
