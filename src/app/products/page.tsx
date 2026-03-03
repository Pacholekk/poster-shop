"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ProductCard } from "@/components/ProductCard";
import { categories, products } from "@/data/products";
import { useI18n } from "@/lib/i18n";

export default function ProductsPage() {
  const params = useSearchParams();
  const selectedCategory = params.get("category") ?? "All";
  const { t, categoryLabel } = useI18n();

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">{t("products.title")}</h1>
        <p className="text-black/65">
          {t("products.subtitle")}
        </p>
      </header>

      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <Link
            key={category}
            href={`/products${category === "All" ? "" : `?category=${encodeURIComponent(category)}`}`}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
              selectedCategory === category
                ? "bg-black text-white"
                : "border border-black/15 text-black/70 hover:text-black"
            }`}
          >
            {categoryLabel(category)}
          </Link>
        ))}
      </div>

      {filteredProducts.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="rounded-xl border border-dashed border-black/20 p-6 text-sm text-black/65">
          {t("products.empty")}
        </p>
      )}
    </div>
  );
}
