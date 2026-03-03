import { Product } from "@/types/shop";

export const products: Product[] = [
  {
    id: "1",
    slug: "midnight-peaks",
    name: "Midnight Peaks",
    category: "Nature",
    description: "Dramatic mountain landscape in deep blue tones.",
    price: 129,
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80",
    printType: ["Digital", "Paper"],
    sizes: ["A4", "A3", "A2"],
    featured: true,
  },
  {
    id: "2",
    slug: "urban-lines",
    name: "Urban Lines",
    category: "City",
    description: "Minimal city architecture with strong geometric rhythm.",
    price: 139,
    printType: ["Digital", "Paper"],
    image:
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1200&q=80",
    sizes: ["A4", "A3", "A2"],
    featured: true,
  },
  {
    id: "3",
    slug: "sand-memory",
    name: "Sand Memory",
    category: "Abstract",
    description: "Soft abstract composition inspired by desert textures.",
    price: 119,
    printType: ["Digital", "Paper"],
    image:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80",
    sizes: ["A4", "A3"],
  },
  {
    id: "4",
    slug: "coastlight",
    name: "Coastlight",
    category: "Nature",
    description: "Warm sunlight falling across the ocean horizon.",
    price: 149,
    printType: ["Digital", "Paper"],
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    sizes: ["A4", "A3", "A2"],
    featured: true,
  },
  {
    id: "5",
    slug: "monochrome-bloom",
    name: "Monochrome Bloom",
    category: "Art",
    description: "Bold floral study in monochrome contrast.",
    price: 125,
    printType: ["Digital", "Paper"],
    image:
      "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1200&q=80",
    sizes: ["A4", "A3"],
  },
  {
    id: "6",
    slug: "northern-shape",
    name: "Northern Shape",
    category: "Abstract",
    description: "Graphic form composition with cold northern palette.",
    price: 132,
    printType: ["Digital", "Paper"],
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80",
    sizes: ["A4", "A3", "A2"],
  },
];

export const categories = ["All", ...new Set(products.map((p) => p.category))];

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}
