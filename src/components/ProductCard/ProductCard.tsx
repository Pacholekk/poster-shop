"use client";

import Link from "next/link";

import { AddToCartButton } from "@/components/AddToCartButton";
import { ImageCarousel } from "@/components/ImageCarousel";
import { Product } from "@/types/shop";
import { useI18n } from "@/lib/i18n";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const { t, categoryLabel } = useI18n();
  const paperPrices = Object.values(product.pricing.paper);
  const minPaperPrice = paperPrices.length ? Math.min(...paperPrices) : product.pricing.digital;

  return (
    <article className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm">
      <ImageCarousel
        images={product.images}
        alt={product.name}
        compact
        showDots={false}
        href={`/products/${product.slug}`}
      />

      <div className="space-y-3 p-4">
        <p className="text-xs font-medium uppercase tracking-wide text-black/60">{categoryLabel(product.category)}</p>
        <div>
          <h3 className="text-base font-semibold text-black">
            <Link href={`/products/${product.slug}`} className="hover:underline">
              {product.name}
            </Link>
          </h3>
          <p className="text-sm text-black/65">{product.description}</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-base font-bold">{t("product.from")} {Math.min(product.pricing.digital, minPaperPrice)} PLN</p>
          <AddToCartButton product={product} />
        </div>
      </div>
    </article>
  );
}
