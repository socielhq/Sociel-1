import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sociel | Content & Brand Studio, Pune",
  description:
    "Sociel is a content and brand studio. We plan, write and design LinkedIn and Instagram content for founders, professional firms and experts, from about 30 minutes of your input a month.",
  openGraph: {
    title: "Sociel | Content & Brand Studio, Pune",
    description:
      "Sociel is a content and brand studio. We plan, write and design LinkedIn and Instagram content for founders, professional firms and experts, from about 30 minutes of your input a month.",
    url: "https://sociel.in",
    siteName: "sociel",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Sociel | Content & Brand Studio, Pune",
    description:
      "Sociel is a content and brand studio. We plan, write and design LinkedIn and Instagram content for founders, professional firms and experts, from about 30 minutes of your input a month."
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
