import Link from "next/link";
import Image from "next/image";
import { Instagram, Linkedin } from "lucide-react";
import { navItems } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <div className="container-shell flex flex-col gap-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <Image
              src="/sociel-logo.png"
              alt="Sociel logo"
              className="h-10 w-auto"
              width={140}
              height={40}
            />
            <p className="mt-1 text-sm text-muted">Content & Brand Studio</p>
          </div>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
          <Link
            href="https://www.instagram.com/bysociel/"
            target="_blank"
            rel="noreferrer"
            className="focus-ring inline-flex items-center gap-2 rounded-full text-sm font-medium text-muted transition hover:text-foreground"
          >
            <Instagram className="h-4 w-4" />
            @bysociel
          </Link>
          <Link
            href="https://www.linkedin.com/company/133813949/"
            target="_blank"
            rel="noreferrer"
            aria-label="Sociel LinkedIn"
            className="focus-ring inline-flex items-center gap-2 rounded-full text-sm font-medium text-muted transition hover:text-foreground"
          >
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </Link>
          <Link
            href="tel:+918767354528"
            aria-label="Call Sociel at +91 87673 54528"
            className="focus-ring rounded-full text-sm font-medium text-muted transition hover:text-foreground"
          >
            +91 87673 54528
          </Link>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="focus-ring rounded-full text-sm font-medium text-muted transition hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
          </div>
        </div>
        <div className="flex flex-col gap-2 border-t border-line pt-5 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; 2026 Sociel. All rights reserved.</p>
          <Link href="/privacy" className="focus-ring w-fit font-medium text-foreground transition hover:text-warm">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
