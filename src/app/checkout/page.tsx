import { CheckoutView } from "@/components/checkout-view";

export default function CheckoutPage() {
  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Checkout</h1>
        <p className="text-black/65">Complete shipping details and choose payment method.</p>
      </header>
      <CheckoutView />
    </div>
  );
}
