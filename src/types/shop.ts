export type PosterSize = "A4" | "A3" | "A2";
export type PrintType = "Digital" | "Paper";

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: string;
  description: string;
  price: number;
  image: string;
  printType: PrintType[];
  sizes: PosterSize[];
  featured?: boolean;
};

export type CartItem = {
  productId: string;
  name: string;
  slug: string;
  image: string;
  size: PosterSize;
  printType: PrintType;
  price: number;
  quantity: number;
};

export type PaymentMethod = "card" | "blik" | "paypal";
