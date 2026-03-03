"use client";

import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from "react";

export type Language = "en" | "pl";

type Dictionary = Record<string, string>;

const dictionaries: Record<Language, Dictionary> = {
  en: {
    "nav.home": "Home",
    "nav.posters": "Posters",
    "nav.checkout": "Checkout",
    "nav.cart": "Cart",
    "nav.language": "Language",
    "hero.badge": "Poster Shop Collection",
    "hero.title": "Modern posters designed for your home and workspace.",
    "hero.subtitle":
      "Discover premium wall art in multiple sizes, curated categories and secure checkout.",
    "hero.shopNow": "Shop now",
    "hero.openCart": "Open cart",
    "home.featured": "Featured posters",
    "home.viewAll": "View all",
    "products.title": "All posters",
    "products.subtitle": "Choose a category and add your favorite poster to the cart.",
    "products.empty": "No posters available in this category yet.",
    "product.related": "Related posters",
    "product.noRelated": "No related posters yet.",
    "product.digital": "Digital",
    "product.paperRange": "Paper",
    "product.dependsOnSize": "depends on size",
    "form.printType": "Print type",
    "form.posterSize": "Poster size",
    "form.price": "Price",
    "button.addToCart": "Add to cart",
    "button.quickAddDigital": "Quick add (Digital)",
    "button.remove": "Remove",
    "button.goToPosters": "Go to posters",
    "button.proceedToCheckout": "Proceed to checkout",
    "cart.title": "Your cart",
    "cart.subtitle": "Manage quantities and continue to checkout.",
    "cart.emptyTitle": "Your cart is empty",
    "cart.emptySubtitle": "Browse posters and add your favorites.",
    "cart.type": "Type",
    "cart.size": "Size",
    "cart.summary": "Order summary",
    "cart.subtotal": "Subtotal",
    "cart.shipping": "Shipping",
    "cart.total": "Total",
    "checkout.title": "Checkout",
    "checkout.subtitle": "Complete shipping details and choose payment method.",
    "checkout.emptyTitle": "No items in checkout",
    "checkout.emptySubtitle": "Add products to your cart first.",
    "checkout.browse": "Browse posters",
    "checkout.shippingDetails": "Shipping details",
    "checkout.firstName": "First name",
    "checkout.lastName": "Last name",
    "checkout.email": "Email",
    "checkout.address": "Address",
    "checkout.city": "City",
    "checkout.postalCode": "Postal code",
    "checkout.paymentMethod": "Payment method",
    "checkout.summary": "Summary",
    "checkout.payNow": "Pay now",
    "success.badge": "Payment confirmed",
    "success.title": "Thank you for your order!",
    "success.subtitle":
      "Your poster order has been placed successfully. You will receive confirmation by email.",
    "success.continueShopping": "Continue shopping",
    "success.backHome": "Back home",
    "product.from": "from",
    "footer.tagline": "Premium posters for modern interiors.",
  },
  pl: {
    "nav.home": "Start",
    "nav.posters": "Plakaty",
    "nav.checkout": "Kasa",
    "nav.cart": "Koszyk",
    "nav.language": "Jezyk",
    "hero.badge": "Kolekcja Poster Shop",
    "hero.title": "Nowoczesne plakaty do domu i przestrzeni pracy.",
    "hero.subtitle":
      "Odkryj premium wall art w wielu rozmiarach, z kategoriami i bezpieczna platnoscia.",
    "hero.shopNow": "Kup teraz",
    "hero.openCart": "Otworz koszyk",
    "home.featured": "Polecane plakaty",
    "home.viewAll": "Zobacz wszystkie",
    "products.title": "Wszystkie plakaty",
    "products.subtitle": "Wybierz kategorie i dodaj ulubiony plakat do koszyka.",
    "products.empty": "Brak plakatow w tej kategorii.",
    "product.related": "Podobne plakaty",
    "product.noRelated": "Brak podobnych plakatow.",
    "product.digital": "Cyfrowy",
    "product.paperRange": "Papier",
    "product.dependsOnSize": "zalezy od rozmiaru",
    "form.printType": "Typ wydruku",
    "form.posterSize": "Rozmiar plakatu",
    "form.price": "Cena",
    "button.addToCart": "Dodaj do koszyka",
    "button.quickAddDigital": "Szybko dodaj (Cyfrowy)",
    "button.remove": "Usun",
    "button.goToPosters": "Przejdz do plakatow",
    "button.proceedToCheckout": "Przejdz do kasy",
    "cart.title": "Twoj koszyk",
    "cart.subtitle": "Zarzadzaj ilosciami i przejdz do kasy.",
    "cart.emptyTitle": "Koszyk jest pusty",
    "cart.emptySubtitle": "Przegladaj plakaty i dodaj ulubione.",
    "cart.type": "Typ",
    "cart.size": "Rozmiar",
    "cart.summary": "Podsumowanie zamowienia",
    "cart.subtotal": "Suma",
    "cart.shipping": "Dostawa",
    "cart.total": "Razem",
    "checkout.title": "Kasa",
    "checkout.subtitle": "Uzupelnij dane dostawy i wybierz metode platnosci.",
    "checkout.emptyTitle": "Brak produktow w kasie",
    "checkout.emptySubtitle": "Najpierw dodaj produkty do koszyka.",
    "checkout.browse": "Przegladaj plakaty",
    "checkout.shippingDetails": "Dane dostawy",
    "checkout.firstName": "Imie",
    "checkout.lastName": "Nazwisko",
    "checkout.email": "Email",
    "checkout.address": "Adres",
    "checkout.city": "Miasto",
    "checkout.postalCode": "Kod pocztowy",
    "checkout.paymentMethod": "Metoda platnosci",
    "checkout.summary": "Podsumowanie",
    "checkout.payNow": "Zaplac teraz",
    "success.badge": "Platnosc potwierdzona",
    "success.title": "Dziekujemy za zamowienie!",
    "success.subtitle":
      "Twoje zamowienie na plakaty zostalo przyjete. Potwierdzenie wyslemy emailem.",
    "success.continueShopping": "Kontynuuj zakupy",
    "success.backHome": "Wroc na start",
    "product.from": "od",
    "footer.tagline": "Premium plakaty do nowoczesnych wnetrz.",
  },
};

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
  categoryLabel: (value: string) => string;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window === "undefined") return "en";
    const stored = window.localStorage.getItem("poster-shop-language");
    return stored === "pl" ? "pl" : "en";
  });

  useEffect(() => {
    window.localStorage.setItem("poster-shop-language", language);
  }, [language]);

  const value = useMemo<LanguageContextValue>(() => {
    const t = (key: string) => dictionaries[language][key] ?? key;
    const categoryLabel = (category: string) => {
      if (language === "pl") {
        const map: Record<string, string> = {
          All: "Wszystkie",
          Nature: "Natura",
          City: "Miasto",
          Abstract: "Abstrakcja",
          Art: "Sztuka",
        };
        return map[category] ?? category;
      }
      return category;
    };

    return { language, setLanguage, t, categoryLabel };
  }, [language]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useI18n() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useI18n must be used within LanguageProvider");
  }
  return context;
}
