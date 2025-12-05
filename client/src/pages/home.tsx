import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Impact from "@/components/impact";
import NewsSection from "@/components/news-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-secondary selection:text-secondary-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Impact />
        <NewsSection />
      </main>
      <Footer />
    </div>
  );
}
