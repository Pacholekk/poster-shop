"use client";

import { Product } from "@/types/shop";
import { useCartStore } from "@/store/cart-store";
import { useI18n } from "@/lib/i18n";

type AddToCartButtonProps = {
  product: Product;
};

export function AddToCartButton({ product }: AddToCartButtonProps) {
  const addItem = useCartStore((state) => state.addItem);
  const { t } = useI18n();

  return (
    <button
      type="button"
      onClick={() => addItem(product, undefined, "Digital", 1)}
      className="rounded-full bg-black px-4 py-2 text-sm font-semibold text-white transition hover:bg-black/85"
    >
      {t("button.quickAddDigital")}
    </button>
  );
}
