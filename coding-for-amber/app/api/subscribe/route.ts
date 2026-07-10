import { NextResponse } from "next/server";

/**
 * "Not ready yet" soft capture — offers the free guide "Understanding Your
 * Anxiety" in exchange for an email. TODO: connect a real email provider
 * (ConvertKit/MailerLite) and attach the guide PDF to its welcome automation.
 */
export async function POST(request: Request) {
  let email: unknown;
  try {
    ({ email } = await request.json());
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  if (typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address" },
      { status: 400 }
    );
  }

  console.log(`[subscribe] guide requested by: ${email}`);
  return NextResponse.json({ ok: true });
}
