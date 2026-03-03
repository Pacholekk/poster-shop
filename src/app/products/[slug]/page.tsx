import Image from "next/image";
import { notFound } from "next/navigation";

import { AddToCartForm } from "@/components/add-to-cart-form";
import { getProductBySlug, products } from "@/data/products";

type ProductDetailsPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ProductDetailsPage({
  params,
}: ProductDetailsPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const related = products
    .filter(
      (candidate) =>
        candidate.category === product.category && candidate.id !== product.id,
    )
    .slice(0, 3);

  return (
    <div className="space-y-14">
      <section className="grid gap-8 lg:grid-cols-[1.3fr_1fr]">
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-black/10 bg-white">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="space-y-5">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-black/60">
            {product.category}
          </p>
          <h1 className="text-3xl font-semibold tracking-tight">
            {product.name}
          </h1>
          <p className="text-black/65">{product.description}</p>
          <p className="text-2xl font-bold">{product.price} PLN</p>
          <AddToCartForm product={product} />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">
          Related posters
        </h2>
        {related.length ? (
          <div className="flex gap-6 ">
            {related.map((item) => (
              <a
                key={item.id}
                href={`/products/${item.slug}`}
                className="rounded-xl border border-black/10 p-4 hover:border-black/25"
              >
                <p className="text-sm font-semibold">{item.name}</p>
                <p className="mt-1 text-sm text-black/60">{item.category}</p>
                <Image
                  src={item.image}
                  alt={item.name}
                  width={100}
                  height={100}
                  className="object-cover rounded-2xl mt-2"
                />
              </a>
            ))}
          </div>
        ) : (
          <p className="text-sm text-black/60">No related posters yet.</p>
        )}
      </section>
    </div>
  );
}
