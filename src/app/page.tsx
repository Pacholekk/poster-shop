import Link from "next/link";
import { ProductCard } from "@/components/product-card";
import { products } from "@/data/products";

export default function Home() {
  const featuredProducts = products.filter((product) => product.featured).slice(0, 3);

  return (
    <div className="space-y-14">
      <section className="rounded-3xl bg-black px-6 py-14 text-white sm:px-10">
        <p className="text-sm uppercase tracking-[0.18em] text-white/70">Poster Shop Collection</p>
        <h1 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
          Modern posters designed for your home and workspace.
        </h1>
        <p className="mt-4 max-w-xl text-white/75">
          Discover premium wall art in multiple sizes, curated categories and secure checkout.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/products"
            className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black"
          >
            Shop now
          </Link>
          <Link
            href="/cart"
            className="rounded-full border border-white/35 px-5 py-2.5 text-sm font-semibold text-white"
          >
            Open cart
          </Link>
        </div>
      </section>

      <section className="space-y-5">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl font-semibold tracking-tight">Featured posters</h2>
          <Link href="/products" className="text-sm font-medium text-black/70 hover:text-black">
            View all
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
