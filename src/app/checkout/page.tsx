"use client";

import { CheckoutView } from "@/components/CheckoutView";
import { useI18n } from "@/lib/i18n";

export default function CheckoutPage() {
  const { t } = useI18n();

  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">{t("checkout.title")}</h1>
        <p className="text-black/65">{t("checkout.subtitle")}</p>
      </header>
      <CheckoutView />
    </div>
  );
}
