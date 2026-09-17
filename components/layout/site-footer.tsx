import Link from "next/link";
import { Wordmark } from "@/components/ui/wordmark";
import { footerNav, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-noir text-cream">
      <div className="shell py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_repeat(3,minmax(0,0.7fr))]">
          <Wordmark tone="light" size="lg" />

          {footerNav.map((column) => (
            <div key={column.title}>
              <h2 className="eyebrow text-gold">{column.title}</h2>
              <ul className="mt-5 space-y-3">
                {column.links.map((link) => {
                  const external = link.href.startsWith("http");
                  return (
                    <li key={link.href}>
                      {external ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                          className="text-sm text-cream/80 transition-colors duration-300 hover:text-gold"
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="text-sm text-cream/80 transition-colors duration-300 hover:text-gold"
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-cream/15 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="eyebrow text-cream/60">
            Concept design / Created for S&amp;S Jewelry
          </p>
          <p className="eyebrow text-cream/60">
            © {new Date().getFullYear()} {site.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
