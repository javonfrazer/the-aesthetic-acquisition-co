import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  spaName?: string;
  message?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: ContactPayload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, phone, spaName, message } = body;

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 }
    );
  }

  if (!EMAIL_RE.test(email.trim())) {
    return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
  }

  // TODO: wire to a transactional email provider (e.g. Resend, Postmark) or CRM webhook.
  console.log("New strategy call inquiry:", {
    name: name.trim(),
    email: email.trim(),
    phone: phone?.trim() ?? "",
    spaName: spaName?.trim() ?? "",
    message: message.trim(),
  });

  return NextResponse.json({ success: true });
}
