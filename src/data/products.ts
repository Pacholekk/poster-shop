import { Product } from "@/types/shop";

export const products: Product[] = [
  {
    id: "1",
    slug: "midnight-peaks",
    name: "Midnight Peaks",
    category: "Nature",
    description: "Dramatic mountain landscape in deep blue tones.",
    pricing: {
      digital: 79,
      paper: { A4: 129, A3: 149, A2: 179 },
    },
    images: [
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1464820453369-31d2c0b651af?auto=format&fit=crop&w=1200&q=80",
    ],
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
    pricing: {
      digital: 89,
      paper: { A4: 139, A3: 159, A2: 189 },
    },
    printType: ["Digital", "Paper"],
    images: [
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1200&q=80",
    ],
    sizes: ["A4", "A3", "A2"],
    featured: true,
  },
  {
    id: "3",
    slug: "sand-memory",
    name: "Sand Memory",
    category: "Abstract",
    description: "Soft abstract composition inspired by desert textures.",
    pricing: {
      digital: 69,
      paper: { A4: 119, A3: 139 },
    },
    printType: ["Digital", "Paper"],
    images: [
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80",
    ],
    sizes: ["A4", "A3"],
  },
  {
    id: "4",
    slug: "coastlight",
    name: "Coastlight",
    category: "Nature",
    description: "Warm sunlight falling across the ocean horizon.",
    pricing: {
      digital: 95,
      paper: { A4: 149, A3: 169, A2: 199 },
    },
    printType: ["Digital", "Paper"],
    images: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=1200&q=80",
    ],
    sizes: ["A4", "A3", "A2"],
    featured: true,
  },
  {
    id: "5",
    slug: "monochrome-bloom",
    name: "Monochrome Bloom",
    category: "Art",
    description: "Bold floral study in monochrome contrast.",
    pricing: {
      digital: 75,
      paper: { A4: 125, A3: 145 },
    },
    printType: ["Digital", "Paper"],
    images: [
      "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1463320726281-696a485928c7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    ],
    sizes: ["A4", "A3"],
  },
  {
    id: "6",
    slug: "northern-shape",
    name: "Northern Shape",
    category: "Abstract",
    description: "Graphic form composition with cold northern palette.",
    pricing: {
      digital: 82,
      paper: { A4: 132, A3: 152, A2: 182 },
    },
    printType: ["Digital", "Paper"],
    images: [
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    ],
    sizes: ["A4", "A3", "A2"],
  },
];

export const categories = ["All", ...new Set(products.map((p) => p.category))];

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}
