"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Wordmark } from "@/components/ui/wordmark";
import { SearchOverlay } from "./search-overlay";
import { useCart } from "@/lib/use-cart";
import { nav } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const { count, ready } = useCart();
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);
  const bagLabel = `Bag (${ready ? count : 0})`;

  return (
    /* The overlays are siblings of <header>, not children: the header's
       backdrop-blur would otherwise become their containing block and clip
       them to the header's own box. */
    <>
      <header className="sticky top-0 z-40 border-b border-hairline bg-cream/95 backdrop-blur-sm">
        <div className="shell flex h-24 items-center justify-between">
          <Wordmark />

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-14">
              {nav.map((item) => {
                const active = pathname.startsWith(item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "eyebrow transition-colors duration-300 hover:text-gold",
                        active ? "text-gold" : "text-forest",
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="hidden items-center gap-12 lg:flex">
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              className="eyebrow text-forest transition-colors duration-300 hover:text-gold"
            >
              Search
            </button>
            <Link
              href="/cart"
              className="eyebrow text-forest transition-colors duration-300 hover:text-gold"
            >
              {bagLabel}
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-[5px] lg:hidden"
          >
            <span
              className={cn(
                "block h-px w-6 bg-forest transition-transform duration-300",
                menuOpen && "translate-y-[6px] rotate-45",
              )}
            />
            <span
              className={cn(
                "block h-px w-6 bg-forest transition-opacity duration-300",
                menuOpen && "opacity-0",
              )}
            />
            <span
              className={cn(
                "block h-px w-6 bg-forest transition-transform duration-300",
                menuOpen && "-translate-y-[6px] -rotate-45",
              )}
            />
          </button>
        </div>
      </header>

      {menuOpen && (
        /* Sits under the sticky header (z-40) and clears it with pt-24. */
        <div className="fixed inset-0 z-30 overflow-y-auto bg-cream pt-24 lg:hidden">
          <nav aria-label="Mobile" className="shell py-10">
            <ul className="space-y-6">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={closeMenu}
                    className="block font-display text-4xl text-forest"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-12 space-y-6 border-t border-hairline pt-8">
              <button
                type="button"
                onClick={() => {
                  closeMenu();
                  setSearchOpen(true);
                }}
                className="eyebrow block text-forest"
              >
                Search
              </button>
              <Link href="/cart" onClick={closeMenu} className="eyebrow block text-forest">
                {bagLabel}
              </Link>
              <Link href="/faq" onClick={closeMenu} className="eyebrow block text-forest">
                Help &amp; FAQ
              </Link>
            </div>
          </nav>
        </div>
      )}

      {searchOpen && <SearchOverlay onClose={() => setSearchOpen(false)} />}
    </>
  );
}
