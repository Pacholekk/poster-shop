"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n";

export default function CheckoutSuccessPage() {
  const { t } = useI18n();

  return (
    <section className="mx-auto max-w-2xl space-y-5 rounded-2xl border border-black/10 bg-white p-8 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
        {t("success.badge")}
      </p>
      <h1 className="text-3xl font-semibold tracking-tight">{t("success.title")}</h1>
      <p className="text-black/65">
        {t("success.subtitle")}
      </p>
      <div className="flex justify-center gap-3">
        <Link
          href="/products"
          className="rounded-full bg-black px-5 py-2 text-sm font-semibold text-white"
        >
          {t("success.continueShopping")}
        </Link>
        <Link
          href="/"
          className="rounded-full border border-black/15 px-5 py-2 text-sm font-semibold text-black"
        >
          {t("success.backHome")}
        </Link>
      </div>
    </section>
  );
}
