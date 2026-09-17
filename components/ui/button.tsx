import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "pill" | "solid" | "outline";

const base =
  "inline-flex items-center justify-center text-[0.6875rem] font-semibold uppercase tracking-[0.14em] transition-colors duration-300 disabled:cursor-not-allowed disabled:opacity-50";

const variants: Record<Variant, string> = {
  // The rounded gold CTA used on the dark homepage sections.
  pill: "rounded-full bg-gold px-10 py-4 text-ink hover:bg-gold-soft",
  // The square forest CTA used on light commerce pages.
  solid: "bg-forest px-8 py-4 text-cream hover:bg-forest-deep",
  outline:
    "border border-forest px-8 py-4 text-forest hover:bg-forest hover:text-cream",
};

type CommonProps = { variant?: Variant; className?: string; children: React.ReactNode };

export function ButtonLink({
  href,
  variant = "solid",
  className,
  children,
  ...rest
}: CommonProps & { href: string } & React.ComponentProps<typeof Link>) {
  return (
    <Link href={href} className={cn(base, variants[variant], className)} {...rest}>
      {children}
    </Link>
  );
}

export function Button({
  variant = "solid",
  className,
  children,
  ...rest
}: CommonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={cn(base, variants[variant], className)} {...rest}>
      {children}
    </button>
  );
}
