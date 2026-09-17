import { ButtonLink } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="shell py-24 lg:py-36">
      <p className="eyebrow text-gold">404</p>
      <h1 className="mt-6 font-display text-5xl leading-tight tracking-tight sm:text-6xl">
        This piece isn&rsquo;t here.
      </h1>
      <p className="mt-6 max-w-md text-muted">
        The page you were looking for has moved or never existed. The collection is
        still waiting.
      </p>
      <ButtonLink href="/shop" className="mt-10">
        Shop all jewelry
      </ButtonLink>
    </div>
  );
}
