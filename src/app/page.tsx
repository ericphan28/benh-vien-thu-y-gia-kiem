import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Strengths from "@/components/Strengths";
import Team from "@/components/Team";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <Team />
      <Strengths />
      <Gallery />
      <Contact />
    </main>
  );
}
