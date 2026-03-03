"use client";

import { useI18n } from "@/lib/i18n";

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className="mt-16 border-t border-black/10">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-3 px-4 py-6 text-sm text-black/60 sm:flex-row sm:px-6 lg:px-8">
        <p>© {new Date().getFullYear()} Poster Shop</p>
        <p>{t("footer.tagline")}</p>
      </div>
    </footer>
  );
}
