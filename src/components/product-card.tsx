import Image from "next/image";
import Link from "next/link";

import { AddToCartButton } from "@/components/add-to-cart-button";
import { Product } from "@/types/shop";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm">
      <Link href={`/products/${product.slug}`} className="block">
        <div className="relative aspect-[4/5]">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition duration-300 hover:scale-[1.03]"
          />
        </div>
      </Link>

      <div className="space-y-3 p-4">
        <p className="text-xs font-medium uppercase tracking-wide text-black/60">{product.category}</p>
        <div>
          <h3 className="text-base font-semibold text-black">{product.name}</h3>
          <p className="text-sm text-black/65">{product.description}</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-base font-bold">{product.price} PLN</p>
          <AddToCartButton product={product} />
        </div>
      </div>
    </article>
  );
}
