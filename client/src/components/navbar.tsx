import { useLocation } from "wouter";
import { Menu, UserCircle } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import LanguageToggle from "./language-toggle";
import { useLanguage } from "@/lib/language-context";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useLanguage();
  const [, setLocation] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.about, href: "#about" },
    { name: t.nav.expertise, href: "#expertise" },
    { name: t.nav.impact, href: "#impact" },
    { name: t.nav.news, href: "#news" },
    { name: t.nav.contact, href: "#contact" },
  ];

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
        isScrolled
          ? "bg-white/90 backdrop-blur-md py-3 shadow-sm border-gray-100"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <button 
          onClick={() => setLocation('/')}
          className="text-xl md:text-2xl font-serif font-bold text-primary tracking-tight flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          Diane K. Bazozah
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className="text-sm font-medium text-gray-700 hover:text-secondary transition-colors uppercase tracking-wider"
            >
              {link.name}
            </button>
          ))}
          
          <div className="h-4 w-[1px] bg-gray-300 mx-2" />
          
          <LanguageToggle />

          <button
            onClick={() => setLocation('/admin')}
            className="text-gray-400 hover:text-primary transition-colors"
            title={t.nav.admin}
          >
            <UserCircle className="w-5 h-5" />
          </button>
          
          <Button 
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-medium rounded-none px-6 ml-2"
            onClick={() => scrollToSection('#contact')}
          >
            {t.nav.cta}
          </Button>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden flex items-center gap-4">
          <LanguageToggle />
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6 text-primary" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-8 mt-10">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => scrollToSection(link.href)}
                    className="text-lg font-serif font-medium text-left text-primary hover:text-secondary transition-colors"
                  >
                    {link.name}
                  </button>
                ))}
                
                <div className="flex gap-4 mt-4 border-t pt-6">
                  <button
                    onClick={() => { setIsMobileMenuOpen(false); setLocation('/admin'); }}
                    className="text-sm font-medium text-gray-500 hover:text-primary flex items-center gap-2"
                  >
                    <UserCircle className="w-4 h-4" /> Admin Login
                  </button>
                </div>

                <Button 
                  className="bg-secondary hover:bg-secondary/90 text-secondary-foreground w-full mt-4"
                  onClick={() => scrollToSection('#contact')}
                >
                  {t.nav.cta}
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
