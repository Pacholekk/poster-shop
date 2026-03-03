import { CartView } from "@/components/cart-view";

export default function CartPage() {
  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Your cart</h1>
        <p className="text-black/65">Manage quantities and continue to checkout.</p>
      </header>
      <CartView />
    </div>
  );
}
