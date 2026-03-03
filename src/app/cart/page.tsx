"use client";

import { CartView } from "@/components/CartView";
import { useI18n } from "@/lib/i18n";

export default function CartPage() {
  const { t } = useI18n();

  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">{t("cart.title")}</h1>
        <p className="text-black/65">{t("cart.subtitle")}</p>
      </header>
      <CartView />
    </div>
  );
}
