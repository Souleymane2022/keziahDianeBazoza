import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Impact from "@/components/impact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-secondary selection:text-secondary-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Impact />
      </main>
      <Footer />
    </div>
  );
}
