"use client";

import Image from "next/image";
import type { ReactNode } from "react";

type LinkPreviewProps = {
  href: string;
  images: string[];
  children: ReactNode;
  /** Alt text for the preview images; falls back to empty (decorative). */
  alt?: string;
};

export default function LinkPreview({
  href,
  images,
  children,
  alt = "",
}: LinkPreviewProps) {
  const cards = images.slice(0, 3);
  const hasImages = cards.length > 0;

  return (
    <span className="link-preview">
      <a
        className="hyperlink"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
      {hasImages ? (
        <span
          className={`link-preview-stack link-preview-stack--${cards.length}`}
          aria-hidden="true"
        >
          {cards.map((src, i) => (
            <span
              key={src}
              className={`link-preview-card link-preview-card--${i}`}
            >
              <Image
                src={src}
                alt={alt}
                width={440}
                height={280}
                sizes="220px"
                className="link-preview-image"
              />
            </span>
          ))}
        </span>
      ) : null}
    </span>
  );
}
