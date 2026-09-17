"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button, ButtonLink } from "@/components/ui/button";
import { useCart } from "@/lib/use-cart";
import { formatPrice } from "@/lib/format";
import { site, whatsappLink } from "@/lib/site";

type Fields = { name: string; phone: string; address: string };

const emptyFields: Fields = { name: "", phone: "", address: "" };

function validate({ name, phone, address }: Fields) {
  const errors: Partial<Record<keyof Fields, string>> = {};
  if (name.trim().length < 2) errors.name = "Please enter your full name.";
  // Permissive on purpose — Ghanaian numbers get written a lot of ways.
  if (phone.replace(/\D/g, "").length < 9) {
    errors.phone = "Please enter a reachable phone or WhatsApp number.";
  }
  if (address.trim().length < 6) errors.address = "Please enter a delivery address.";
  return errors;
}

export function CheckoutView() {
  const router = useRouter();
  const { items, subtotal, ready, clear } = useCart();
  const [fields, setFields] = useState<Fields>(emptyFields);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});

  if (!ready) return <div className="h-64" aria-hidden />;

  if (items.length === 0) {
    return (
      <div className="border-t border-hairline py-16">
        <p className="text-muted">There&rsquo;s nothing to check out yet.</p>
        <ButtonLink href="/shop" className="mt-8">
          Shop the collection
        </ButtonLink>
      </div>
    );
  }

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors = validate(fields);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const lines = items
      .map(
        (item) =>
          `• ${item.product.name} × ${item.quantity} — ${formatPrice(
            item.product.price * item.quantity,
          )}`,
      )
      .join("\n");

    const message = [
      `Hi ${site.name}! I'd like to place an order.`,
      "",
      lines,
      "",
      `Total: ${formatPrice(subtotal)}`,
      "",
      `Name: ${fields.name.trim()}`,
      `Phone / WhatsApp: ${fields.phone.trim()}`,
      `Delivery address: ${fields.address.trim()}`,
    ].join("\n");

    // Hand the order to WhatsApp, then leave the shopper on a confirmation page.
    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
    clear();
    router.push("/checkout/confirmed");
  }

  const inputs: { name: keyof Fields; label: string; type: string; rows?: number }[] = [
    { name: "name", label: "Full name", type: "text" },
    { name: "phone", label: "Phone / WhatsApp", type: "tel" },
    { name: "address", label: "Delivery address", type: "text", rows: 3 },
  ];

  return (
    <div className="grid gap-14 lg:grid-cols-[1fr_24rem] lg:gap-20">
      <form id="checkout-form" onSubmit={onSubmit} noValidate>
        <h2 className="eyebrow text-forest">Contact &amp; delivery</h2>

        <div className="mt-10 space-y-10">
          {inputs.map((input) => (
            <div key={input.name}>
              <label htmlFor={input.name} className="eyebrow block text-muted">
                {input.label}
              </label>

              {input.rows ? (
                <textarea
                  id={input.name}
                  name={input.name}
                  rows={input.rows}
                  value={fields[input.name]}
                  onChange={(event) =>
                    setFields((current) => ({ ...current, [input.name]: event.target.value }))
                  }
                  aria-invalid={Boolean(errors[input.name])}
                  className="mt-3 w-full resize-none border-b border-hairline bg-transparent pb-2 text-ink outline-none transition-colors duration-300 focus:border-forest"
                />
              ) : (
                <input
                  id={input.name}
                  name={input.name}
                  type={input.type}
                  value={fields[input.name]}
                  onChange={(event) =>
                    setFields((current) => ({ ...current, [input.name]: event.target.value }))
                  }
                  aria-invalid={Boolean(errors[input.name])}
                  className="mt-3 w-full border-b border-hairline bg-transparent pb-2 text-ink outline-none transition-colors duration-300 focus:border-forest"
                />
              )}

              {errors[input.name] && (
                <p className="mt-2 text-sm text-gold">{errors[input.name]}</p>
              )}
            </div>
          ))}
        </div>

        <Button type="submit" className="mt-12 w-full lg:hidden">
          Place order
        </Button>
      </form>

      <aside className="lg:sticky lg:top-28 lg:self-start">
        <h2 className="eyebrow text-forest">Your order</h2>

        <ul className="mt-8 space-y-6">
          {items.map((item) => (
            <li key={item.slug} className="flex gap-5">
              <span className="relative block h-28 w-24 shrink-0 overflow-hidden bg-sand">
                <Image
                  src={item.product.images[0].src}
                  alt=""
                  fill
                  sizes="96px"
                  className="object-cover"
                />
              </span>
              <span className="flex-1">
                <span className="block text-ink">{item.product.name}</span>
                <span className="eyebrow mt-2 block text-forest">
                  {formatPrice(item.product.price)}
                </span>
                {item.quantity > 1 && (
                  <span className="mt-2 block text-sm text-muted">
                    Qty {item.quantity}
                  </span>
                )}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex items-center justify-between border-t border-hairline pt-6">
          <span className="eyebrow text-forest">Total</span>
          <span className="text-2xl text-ink">{formatPrice(subtotal)}</span>
        </div>

        {/* Lives in the summary column on desktop, so it submits the form by id. */}
        <Button
          type="submit"
          form="checkout-form"
          className="mt-8 hidden w-full lg:inline-flex"
        >
          Place order
        </Button>

        <p className="mt-4 text-sm text-muted">
          Your order will be confirmed via WhatsApp.
        </p>
      </aside>
    </div>
  );
}
