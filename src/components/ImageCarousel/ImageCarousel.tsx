"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type ImageCarouselProps = {
  images: string[];
  alt: string;
  className?: string;
  compact?: boolean;
  showDots?: boolean;
  href?: string;
};

export function ImageCarousel({
  images,
  alt,
  className,
  compact = false,
  showDots = true,
  href,
}: ImageCarouselProps) {
  const [index, setIndex] = useState(0);

  if (!images.length) {
    return null;
  }

  const prev = () => setIndex((current) => (current - 1 + images.length) % images.length);
  const next = () => setIndex((current) => (current + 1) % images.length);

  return (
    <div
      className={`relative aspect-[4/5] overflow-hidden rounded-2xl border border-black/10 bg-white ${className ?? ""}`}
    >
      <Image src={images[index]} alt={alt} fill className="object-cover" />
      {href && (
        <Link
          href={href}
          aria-label={alt}
          className="absolute inset-0 z-10"
        />
      )}

      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={prev}
            className={`absolute left-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/70 text-white ${
              compact ? "px-2 py-1 text-xs" : "px-3 py-1 text-sm"
            }`}
          >
            {"<"}
          </button>
          <button
            type="button"
            onClick={next}
            className={`absolute right-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/70 text-white ${
              compact ? "px-2 py-1 text-xs" : "px-3 py-1 text-sm"
            }`}
          >
            {">"}
          </button>
          {showDots && (
            <div className="absolute bottom-3 left-1/2 z-20 flex -translate-x-1/2 gap-2">
              {images.map((_, dotIndex) => (
                <button
                  key={dotIndex}
                  type="button"
                  onClick={() => setIndex(dotIndex)}
                  className={`h-2.5 w-2.5 rounded-full ${
                    dotIndex === index ? "bg-white" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}
