import { NextResponse } from "next/server";

/**
 * Demo endpoint. It validates the payload and returns success — no email
 * provider is wired up yet. Plug in Resend/Postmark/etc. where noted below.
 */
export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, message } = (payload ?? {}) as Record<string, unknown>;

  const errors: Record<string, string> = {};
  if (typeof name !== "string" || name.trim().length < 2) {
    errors.name = "Please tell us your name.";
  }
  if (typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (typeof message !== "string" || message.trim().length < 10) {
    errors.message = "A little more detail helps us help you.";
  }

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ errors }, { status: 422 });
  }

  // TODO: forward to the S&S inbox via an email provider.
  console.info("[contact] new enquiry", { name, email });

  return NextResponse.json({ ok: true });
}
