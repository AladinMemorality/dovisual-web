import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const hasAccess = request.cookies.get("dovisual-access")?.value === "1";

  if (!hasAccess) {
    return NextResponse.redirect(new URL("/password", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all paths except:
     * - /password (the gate itself)
     * - /agents.txt (public for AI agents)
     * - /api/ (server routes)
     * - /_next/ (Next.js internals)
     * - Static assets (images, icons, etc.)
     */
    "/((?!password|agents\\.txt|api/|_next/|favicon|og\\.png|apple-touch-icon\\.png|robots\\.txt|sitemap\\.xml).*)",
  ],
};
