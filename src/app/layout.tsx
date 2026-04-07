import type { Metadata } from "next";
import { Inter, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dovisual.com"),
  title: {
    default: "DoVisual — Mobile-first cloud platform for developers",
    template: "%s — DoVisual",
  },
  description:
    "Deploy apps, manage containers, and code with AI — all from your phone. Turn any VPS into a full dev environment.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dovisual.com",
    siteName: "DoVisual",
    title: "DoVisual — Mobile-first cloud platform for developers",
    description:
      "Deploy apps, manage containers, and code with AI — all from your phone. Turn any VPS into a full dev environment.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "DoVisual" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "DoVisual — Mobile-first cloud platform for developers",
    description:
      "Deploy apps, manage containers, and code with AI — all from your phone. Turn any VPS into a full dev environment.",
    images: ["/og.png"],
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistMono.variable} ${spaceGrotesk.variable} dark antialiased`}
    >
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
