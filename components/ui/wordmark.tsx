import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * The stacked "S&S / JEWELRY" lockup. Inverted on the dark sections.
 */
export function Wordmark({
  className,
  tone = "dark",
  size = "md",
}: {
  className?: string;
  tone?: "dark" | "light";
  size?: "md" | "lg";
}) {
  return (
    <Link
      href="/"
      aria-label="S&S Jewelry — home"
      className={cn("inline-block leading-none", className)}
    >
      <span
        className={cn(
          "block font-display tracking-tight",
          size === "lg" ? "text-4xl" : "text-3xl",
          tone === "dark" ? "text-forest" : "text-cream",
        )}
      >
        S&amp;S
      </span>
      <span
        className={cn(
          "eyebrow mt-1 block",
          tone === "dark" ? "text-ink" : "text-cream/80",
        )}
      >
        Jewelry
      </span>
    </Link>
  );
}
