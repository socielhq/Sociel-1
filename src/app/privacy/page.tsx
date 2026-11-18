import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Sociel",
  description: "Sociel's privacy policy."
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <header className="border-b border-line">
        <div className="container-shell flex h-20 items-center justify-between">
          <Link href="/" className="focus-ring text-lg font-semibold text-foreground">
            Sociel
          </Link>
          <Link href="/" className="focus-ring text-sm font-medium text-muted transition hover:text-foreground">
            Back To Home
          </Link>
        </div>
      </header>

      <section className="section-pad">
        <article className="container-shell max-w-3xl">
          <p className="eyebrow">Privacy Policy</p>
          <h1 className="mt-5 text-balance text-4xl font-semibold tracking-normal sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-5 text-base leading-7 text-muted">Last updated: November 2026</p>

          <div className="mt-12 space-y-10 text-base leading-8 text-muted">
            <section>
              <h2 className="text-2xl font-semibold text-foreground">What We Collect</h2>
              <p className="mt-3">
                When you use the contact form, Sociel collects your name, email address, company, what you need help with, and your message.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground">How We Use It</h2>
              <p className="mt-3">
                This information is used only to reply to your enquiry. Sociel does not sell or share your contact-form information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground">How Long We Keep It</h2>
              <p className="mt-3">We keep enquiry details for up to 12 months, then delete them.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground">Your Data</h2>
              <p className="mt-3">
                To request access to, correction of, or deletion of your contact-form information, email hello@sociel.in.
              </p>
            </section>
          </div>
        </article>
      </section>
    </main>
  );
}
