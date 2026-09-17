"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";
import type { Product } from "@/lib/products";

/**
 * Product layout from the design: one large frame on the left, a row of
 * thumbnails at the top of the right column, and the buy panel beneath them.
 */
export function ProductMedia({
  images,
  children,
}: {
  images: Product["images"];
  children: React.ReactNode;
}) {
  const [active, setActive] = useState(0);
  const current = images[active] ?? images[0];
  const thumbnails = images.length > 1 ? images : [];

  return (
    <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
      <div className="relative aspect-[3/4] overflow-hidden bg-sand lg:aspect-[4/5]">
        <Image
          key={current.src}
          src={current.src}
          alt={current.alt}
          fill
          priority
          sizes="(min-width: 1024px) 45vw, 100vw"
          className="object-cover"
        />
      </div>

      <div>
        {thumbnails.length > 0 && (
          <ul
            className={cn(
              "grid grid-cols-3 gap-4",
              // Keep the thumbnails on one row, as in the design.
              thumbnails.length > 2 ? "lg:grid-cols-3" : "lg:grid-cols-2",
            )}
          >
            {thumbnails.map((image, index) => (
              <li key={image.src}>
                <button
                  type="button"
                  onClick={() => setActive(index)}
                  aria-label={`View image ${index + 1} of ${images.length}`}
                  aria-current={index === active}
                  className={cn(
                    "relative block aspect-[4/3] w-full overflow-hidden bg-sand transition-opacity duration-300",
                    index === active ? "opacity-100" : "opacity-55 hover:opacity-100",
                  )}
                >
                  <Image
                    src={image.src}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 22vw, 33vw"
                    className="object-cover"
                  />
                </button>
              </li>
            ))}
          </ul>
        )}

        <div className={thumbnails.length > 0 ? "mt-12 lg:mt-16" : ""}>{children}</div>
      </div>
    </div>
  );
}
