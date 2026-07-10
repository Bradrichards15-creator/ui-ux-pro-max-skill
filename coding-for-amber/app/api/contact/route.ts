import { NextResponse } from "next/server";

/**
 * "Say hello" contact flow submissions.
 * [CONTACT_ROUTE] — no CRM yet. Routes to console until Amber has a real
 * inbox connected (e.g. forward to email via Resend, or a Zapier/Make hook
 * into WhatsApp/Instagram).
 */
export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  console.log("[contact] say hello submission:", body);

  return NextResponse.json({ ok: true });
}
