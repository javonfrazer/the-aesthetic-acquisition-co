import { NextResponse } from "next/server";
import { createHash } from "node:crypto";
type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  spaName?: string;
  message?: string;
  eventId?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: ContactPayload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, phone, spaName, message, eventId } = body;

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 }
    );
  }

  if (!EMAIL_RE.test(email.trim())) {
    return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
  }

  const pixelId = process.env.META_PIXEL_ID;
const accessToken = process.env.META_ACCESS_TOKEN;

if (!pixelId || !accessToken) {
console.error("Meta environment variables are missing.");
} else {
const hash = (value: string) =>
createHash("sha256")
.update(value)
.digest("hex");

const userData: Record<string, unknown> = {
em: [hash(email.trim().toLowerCase())],
client_user_agent: request.headers.get("user-agent") ?? "",
};

const ip = request.headers
.get("x-forwarded-for")
?.split(",")[0]
.trim();

if (ip) userData.client_ip_address = ip;

const normalizedPhone = phone?.replace(/\D/g, "");
if (normalizedPhone) {
userData.ph = [hash(normalizedPhone)];
}

const metaResponse = await fetch(
`https://graph.facebook.com/v25.0/${pixelId}/events?access_token=${encodeURIComponent(accessToken)}`,
{
method: "POST",
headers: {
"Content-Type": "application/json",
},
body: JSON.stringify({
data: [
{
event_name: "Lead",
event_time: Math.floor(Date.now() / 1000),
event_id: eventId,
action_source: "website",
event_source_url:
request.headers.get("referer") ||
"https://www.theaestheticacquisitionco.com",
user_data: userData,
},
],
}),
}
);

const metaResult = await metaResponse.json();

if (!metaResponse.ok) {
console.error("Meta CAPI error:", metaResult);
} else {
console.log("Meta Lead event sent:", metaResult);
}
}

    

  return NextResponse.json({ success: true });
}
