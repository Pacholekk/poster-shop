"use client";

import Link from "next/link";
import { FormEvent, useMemo, useState } from "react";
import { useRouter } from "next/navigation";

import { useCartStore } from "@/store/cart-store";
import { PaymentMethod } from "@/types/shop";
import { useI18n } from "@/lib/i18n";

export function CheckoutView() {
  const router = useRouter();
  const items = useCartStore((state) => state.items);
  const total = useCartStore((state) => state.getTotal());
  const clearCart = useCartStore((state) => state.clearCart);
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("card");
  const { t } = useI18n();

  const canOrder = useMemo(() => items.length > 0, [items.length]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!canOrder) return;

    clearCart();
    router.push("/checkout/success");
  };

  if (!canOrder) {
    return (
      <section className="space-y-4 rounded-2xl border border-dashed border-black/20 p-8 text-center">
        <h2 className="text-2xl font-semibold">{t("checkout.emptyTitle")}</h2>
        <p className="text-black/60">{t("checkout.emptySubtitle")}</p>
        <Link
          href="/products"
          className="inline-flex rounded-full bg-black px-5 py-2 text-sm font-semibold text-white"
        >
          {t("checkout.browse")}
        </Link>
      </section>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-8 lg:grid-cols-[2fr_1fr]">
      <section className="space-y-6">
        <div className="rounded-xl border border-black/10 p-5">
          <h2 className="text-lg font-semibold">
            {t("checkout.shippingDetails")}
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <input
              required
              placeholder={t("checkout.firstName")}
              className="rounded-lg border border-black/15 px-3 py-2 text-sm"
            />
            <input
              required
              placeholder={t("checkout.lastName")}
              className="rounded-lg border border-black/15 px-3 py-2 text-sm"
            />
            <input
              required
              type="email"
              placeholder={t("checkout.email")}
              className="rounded-lg border border-black/15 px-3 py-2 text-sm sm:col-span-2"
            />
            <input
              required
              placeholder={t("checkout.address")}
              className="rounded-lg border border-black/15 px-3 py-2 text-sm sm:col-span-2"
            />
            <input
              required
              placeholder={t("checkout.city")}
              className="rounded-lg border border-black/15 px-3 py-2 text-sm"
            />
            <input
              required
              placeholder={t("checkout.postalCode")}
              className="rounded-lg border border-black/15 px-3 py-2 text-sm"
            />
          </div>
        </div>

        <div className="rounded-xl border border-black/10 p-5">
          <h2 className="text-lg font-semibold">
            {t("checkout.paymentMethod")}
          </h2>
          <div className="mt-4 space-y-3 text-sm">
            {[
              { value: "card", label: "Card" },
              { value: "blik", label: "BLIK" },
              { value: "paypal", label: "PayPal" },
            ].map((method) => (
              <label
                key={method.value}
                className="flex cursor-pointer items-center gap-3 rounded-lg border border-black/10 px-3 py-2"
              >
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === method.value}
                  onChange={() =>
                    setPaymentMethod(method.value as PaymentMethod)
                  }
                />
                <span>{method.label}</span>
              </label>
            ))}
          </div>
        </div>
      </section>

      <aside className="h-fit rounded-xl border border-black/10 p-5">
        <h3 className="text-lg font-semibold">{t("checkout.summary")}</h3>
        <div className="mt-4 space-y-2 text-sm">
          {items.map((item) => (
            <div
              key={`${item.productId}-${item.size ?? "no-size"}-${item.printType}`}
              className="flex justify-between gap-4"
            >
              <span className="truncate">
                {item.name} x{item.quantity}
              </span>
              <span>{item.price * item.quantity} PLN</span>
            </div>
          ))}
        </div>
        <div className="mt-4 flex items-center justify-between border-t border-black/10 pt-3 text-base font-bold">
          <span>{t("cart.total")}</span>
          <span>{total} PLN</span>
        </div>
        <button
          type="submit"
          className="mt-5 w-full rounded-full bg-black px-4 py-2 text-sm font-semibold text-white"
        >
          {t("checkout.payNow")}
        </button>
      </aside>
    </form>
  );
}
