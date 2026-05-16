import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { Process } from "@/components/process";
import { Services } from "@/components/services";
import { Testimonials } from "@/components/testimonials";
import { WhyUs } from "@/components/why-us";
import { Work } from "@/components/work";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <Navbar />
      <Hero />
      <Services />
      <Work />
      <WhyUs />
      <Process />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
