import { NextResponse } from "next/server";

/**
 * Free-guide email capture endpoint.
 *
 * TODO before launch: connect a real email provider (ConvertKit, MailerLite,
 * Mailchimp…) and attach the "Understanding Your Anxiety" PDF to the welcome
 * automation. Until then this validates and accepts the address so the UI
 * flow works end-to-end.
 */
export async function POST(request: Request) {
  let email: unknown;
  try {
    ({ email } = await request.json());
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  if (
    typeof email !== "string" ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  ) {
    return NextResponse.json(
      { error: "Please enter a valid email address" },
      { status: 400 }
    );
  }

  const provider = process.env.EMAIL_PROVIDER_API_KEY;
  if (!provider) {
    // No provider configured yet — log so signups aren't silently lost in dev.
    console.log(`[subscribe] guide requested by: ${email}`);
  }

  return NextResponse.json({ ok: true });
}
