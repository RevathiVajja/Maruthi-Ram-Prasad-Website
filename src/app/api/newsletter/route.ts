import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email, name } = await request.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const PUBLICATION_ID = process.env.BEEHIVE_PUBLICATION_ID;
    const API_KEY = process.env.BEEHIVE_API_KEY;

    if (!PUBLICATION_ID || !API_KEY) {
      return NextResponse.json(
        { error: "Beehiiv configuration is missing. Please check your .env file." },
        { status: 500 }
      );
    }

    const response = await fetch(
      `https://api.beehiiv.com/v2/publications/${PUBLICATION_ID}/subscriptions`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({
          email: email,
          reactivate_existing: false,
          send_welcome_email: true,
          utm_source: "website",
          utm_medium: "footer",
          first_name: name || "",
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error("Beehiiv API Error:", errorData);
      return NextResponse.json(
        { error: errorData.message || "Failed to subscribe" },
        { status: response.status }
      );
    }

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    console.error("Newsletter subscription error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
