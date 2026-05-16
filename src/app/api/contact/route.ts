import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  brand?: string;
  platform?: string;
  message?: string;
};

export async function POST(request: Request) {
  const payload = (await request.json()) as ContactPayload;
  const name = payload.name?.trim();
  const email = payload.email?.trim();
  const brand = payload.brand?.trim() || "Not provided";
  const platform = payload.platform?.trim() || "Not provided";
  const message = payload.message?.trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 }
    );
  }

  const apiKey = cleanEnv(process.env.RESEND_API_KEY);
  const to = cleanEnv(process.env.CONTACT_TO_EMAIL);
  const from = cleanEnv(process.env.CONTACT_FROM_EMAIL) || "Sociel <onboarding@resend.dev>";

  if (!apiKey || !to) {
    return NextResponse.json(
      { error: "Contact email is not configured yet." },
      { status: 500 }
    );
  }

  const resendResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from,
      to,
      reply_to: email,
      subject: `New Sociel project inquiry from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Brand / company: ${brand}`,
        `Platform focus: ${platform}`,
        "",
        "Message:",
        message
      ].join("\n")
    })
  });

  if (!resendResponse.ok) {
    console.error("Resend contact send failed", {
      status: resendResponse.status,
      body: await resendResponse.text()
    });

    return NextResponse.json(
      { error: "Unable to send message right now." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}

function cleanEnv(value?: string) {
  return value?.trim().replace(/^["']|["']$/g, "");
}
