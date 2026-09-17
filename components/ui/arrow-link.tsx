import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * The uppercase text link with a trailing arrow that nudges on hover.
 */
export function ArrowLink({
  href,
  children,
  className,
  external,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
}) {
  const content = (
    <>
      {children}
      <span
        aria-hidden
        className="inline-block transition-transform duration-300 group-hover:translate-x-1"
      >
        →
      </span>
    </>
  );

  const classes = cn(
    "group eyebrow inline-flex items-center gap-2 text-current hover:text-gold transition-colors duration-300",
    className,
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={classes}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
