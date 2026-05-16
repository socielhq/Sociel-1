import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "focus-ring group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold transition duration-300",
        variant === "primary" &&
          "bg-surface text-surface-ink shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_14px_42px_rgba(0,0,0,0.22)] hover:-translate-y-0.5 hover:bg-warm hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.45),0_18px_54px_rgba(216,196,160,0.18)] active:translate-y-0",
        variant === "secondary" &&
          "border border-line bg-white/[0.035] text-foreground shadow-[inset_0_1px_0_rgba(244,239,229,0.06)] hover:-translate-y-0.5 hover:border-warm/50 hover:bg-white/[0.075] active:translate-y-0",
        className
      )}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
    </Link>
  );
}
