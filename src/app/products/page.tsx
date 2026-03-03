import { ProductCard } from "@/components/product-card";
import { categories, products } from "@/data/products";

type ProductsPageProps = {
  searchParams?: Promise<{ category?: string }>;
};

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
  const resolvedSearchParams = await searchParams;
  const selectedCategory = resolvedSearchParams?.category ?? "All";

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">All posters</h1>
        <p className="text-black/65">
          Choose a category and add your favorite poster to the cart.
        </p>
      </header>

      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <a
            key={category}
            href={`/products${category === "All" ? "" : `?category=${encodeURIComponent(category)}`}`}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
              selectedCategory === category
                ? "bg-black text-white"
                : "border border-black/15 text-black/70 hover:text-black"
            }`}
          >
            {category}
          </a>
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
          No posters available in this category yet.
        </p>
      )}
    </div>
  );
}
