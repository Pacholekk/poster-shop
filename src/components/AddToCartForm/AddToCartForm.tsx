"use client";

import { useMemo, useState } from "react";

import { PrintType, Product } from "@/types/shop";
import { useCartStore } from "@/store/cart-store";
import { useI18n } from "@/lib/i18n";

type AddToCartFormProps = {
  product: Product;
};

export function AddToCartForm({ product }: AddToCartFormProps) {
  const addItem = useCartStore((state) => state.addItem);
  const { t } = useI18n();
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedPrintType, setSelectedPrintType] = useState<PrintType>(
    product.printType[0],
  );
  const sizes = useMemo(() => product.sizes, [product.sizes]);
  const printTypes = product.printType;
  const currentPrice =
    selectedPrintType === "Digital"
      ? product.pricing.digital
      : product.pricing.paper[selectedSize];

  return (
    <div className="space-y-4 rounded-xl border border-black/10 p-4">
      <div className="space-y-2">
        <label htmlFor="printType" className="text-sm font-medium">
          {t("form.printType")}
        </label>
        <select
          id="printType"
          value={selectedPrintType}
          onChange={(event) =>
            setSelectedPrintType(event.target.value as typeof selectedPrintType)
          }
          className="w-full rounded-lg border border-black/15 bg-white px-3 py-2 text-sm"
        >
          {printTypes.map((printType) => (
            <option key={printType} value={printType}>
              {printType === "Digital" ? t("product.digital") : t("product.paperRange")}
            </option>
          ))}
        </select>
      </div>
      {selectedPrintType === "Paper" && (
        <div className="space-y-2">
          <label htmlFor="size" className="text-sm font-medium">
            {t("form.posterSize")}
          </label>
          <select
            id="size"
            value={selectedSize}
            onChange={(event) =>
              setSelectedSize(event.target.value as typeof selectedSize)
            }
            className="w-full rounded-lg border border-black/15 bg-white px-3 py-2 text-sm"
          >
            {sizes.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>
      )}
      <p className="text-sm font-semibold">{t("form.price")}: {currentPrice} PLN</p>
      <button
        type="button"
        onClick={() =>
          addItem(
            product,
            selectedPrintType === "Paper" ? selectedSize : undefined,
            selectedPrintType,
            1,
          )
        }
        className="w-full rounded-full bg-black px-4 py-2 text-sm font-semibold text-white transition hover:bg-black/85"
      >
        {t("button.addToCart")}
      </button>
    </div>
  );
}
