"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

type Status = "idle" | "sending" | "sent" | "error";

const fields = [
  { name: "name", label: "Name", type: "text", rows: 0 },
  { name: "email", label: "Email", type: "email", rows: 0 },
  { name: "message", label: "Message", type: "text", rows: 4 },
] as const;

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    setStatus("sending");
    setErrors({});

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.status === 422) {
        const body = (await response.json()) as { errors?: Record<string, string> };
        setErrors(body.errors ?? {});
        setStatus("idle");
        return;
      }

      if (!response.ok) throw new Error("Request failed");

      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} noValidate className="bg-sand px-6 py-10 sm:px-12 sm:py-14">
      <h2 className="font-display text-3xl tracking-tight sm:text-4xl">Send a message</h2>

      <div className="mt-10 space-y-10">
        {fields.map((field) => (
          <div key={field.name}>
            <label htmlFor={field.name} className="eyebrow block text-forest">
              {field.label}
            </label>

            {field.rows > 0 ? (
              <textarea
                id={field.name}
                name={field.name}
                rows={field.rows}
                aria-invalid={Boolean(errors[field.name])}
                className="mt-3 w-full resize-none border-b border-hairline bg-transparent pb-2 text-ink outline-none transition-colors duration-300 focus:border-forest"
              />
            ) : (
              <input
                id={field.name}
                name={field.name}
                type={field.type}
                aria-invalid={Boolean(errors[field.name])}
                className="mt-3 w-full border-b border-hairline bg-transparent pb-2 text-ink outline-none transition-colors duration-300 focus:border-forest"
              />
            )}

            {errors[field.name] && (
              <p className="mt-2 text-sm text-gold">{errors[field.name]}</p>
            )}
          </div>
        ))}
      </div>

      <Button type="submit" disabled={status === "sending"} className="mt-12">
        {status === "sending" ? "Sending…" : "Send message"}
      </Button>

      <p aria-live="polite" className="mt-4 text-sm text-muted">
        {status === "sent" && "Thank you — we'll be in touch shortly."}
        {status === "error" && "Something went wrong. Please try WhatsApp or email."}
      </p>
    </form>
  );
}
