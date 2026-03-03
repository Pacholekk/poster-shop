import Link from "next/link";

export default function CheckoutSuccessPage() {
  return (
    <section className="mx-auto max-w-2xl space-y-5 rounded-2xl border border-black/10 bg-white p-8 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
        Payment confirmed
      </p>
      <h1 className="text-3xl font-semibold tracking-tight">Thank you for your order!</h1>
      <p className="text-black/65">
        Your poster order has been placed successfully. You will receive confirmation by email.
      </p>
      <div className="flex justify-center gap-3">
        <Link
          href="/products"
          className="rounded-full bg-black px-5 py-2 text-sm font-semibold text-white"
        >
          Continue shopping
        </Link>
        <Link
          href="/"
          className="rounded-full border border-black/15 px-5 py-2 text-sm font-semibold text-black"
        >
          Back home
        </Link>
      </div>
    </section>
  );
}
