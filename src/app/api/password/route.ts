import { NextRequest, NextResponse } from "next/server";

const SITE_PASSWORD = "DOVISUAL2026";

export async function POST(request: NextRequest) {
  const { password } = await request.json();

  if (password !== SITE_PASSWORD) {
    return NextResponse.json({ error: "Wrong password" }, { status: 401 });
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set("dovisual-access", "1", {
    httpOnly: true,
    path: "/",
    maxAge: 60 * 60 * 24 * 30, // 30 days
    sameSite: "lax",
  });

  return response;
}
