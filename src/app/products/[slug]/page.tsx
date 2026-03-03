import { notFound } from "next/navigation";

import { ProductDetailsView } from "@/components/ProductDetailsView";
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
  return <ProductDetailsView product={product} related={related} />;
}
