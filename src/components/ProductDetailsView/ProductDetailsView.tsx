"use client";

import Link from "next/link";

import { AddToCartForm } from "@/components/AddToCartForm";
import { ImageCarousel } from "@/components/ImageCarousel";
import { Product } from "@/types/shop";
import { useI18n } from "@/lib/i18n";

type ProductDetailsViewProps = {
  product: Product;
  related: Product[];
};

export function ProductDetailsView({ product, related }: ProductDetailsViewProps) {
  const { t, categoryLabel } = useI18n();
  const paperPrices = Object.values(product.pricing.paper);
  const minPaper = paperPrices.length ? Math.min(...paperPrices) : product.pricing.digital;
  const maxPaper = paperPrices.length ? Math.max(...paperPrices) : product.pricing.digital;

  return (
    <div className="space-y-14">
      <section className="grid gap-8 lg:grid-cols-[1.3fr_1fr]">
        <ImageCarousel images={product.images} alt={product.name} />
        <div className="space-y-5">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-black/60">
            {categoryLabel(product.category)}
          </p>
          <h1 className="text-3xl font-semibold tracking-tight">
            {product.name}
          </h1>
          <p className="text-black/65">{product.description}</p>
          <div className="space-y-1 rounded-xl p-3 text-sm">
            <p className="text-2xl font-bold">
              {t("product.digital")}: {product.pricing.digital} PLN
            </p>
            <p className="text-black/70">
              {t("product.paperRange")}: {minPaper} - {maxPaper} PLN ({t("product.dependsOnSize")})
            </p>
          </div>
          <AddToCartForm product={product} />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">
          {t("product.related")}
        </h2>
        {related.length ? (
          <div className="flex gap-6">
            {related.map((item) => (
              <article
                key={item.id}
                className="w-full max-w-[220px] rounded-xl border border-black/10 p-4 hover:border-black/25"
              >
                <p className="text-sm font-semibold">{item.name}</p>
                <p className="mt-1 text-sm text-black/60">{categoryLabel(item.category)}</p>
                <ImageCarousel
                  images={item.images}
                  alt={item.name}
                  compact
                  showDots={false}
                  className="mt-3 rounded-xl"
                />
                <Link
                  href={`/products/${item.slug}`}
                  className="mt-3 inline-block text-xs font-medium text-black/70 underline"
                >
                  {t("home.viewAll")}
                </Link>
              </article>
            ))}
          </div>
        ) : (
          <p className="text-sm text-black/60">{t("product.noRelated")}</p>
        )}
      </section>
    </div>
  );
}
