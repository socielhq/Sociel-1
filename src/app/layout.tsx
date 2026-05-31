import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "sociel | social media management studio",
  description:
    "Sociel is a premium social media management studio for Instagram, LinkedIn, short-form content, visual content design, and platform execution.",
  openGraph: {
    title: "sociel | social media management studio",
    description:
      "A modern social media studio helping businesses maintain a strong, consistent, internet-native presence.",
    url: "https://sociel.in",
    siteName: "sociel",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "sociel | social media management studio",
    description:
      "Premium social media management for brands that need consistency, taste, and reliable execution."
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
