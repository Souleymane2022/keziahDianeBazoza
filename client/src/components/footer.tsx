import { Linkedin, Twitter, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/lib/language-context";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer id="contact" className="bg-primary text-white pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">{t.footer.title}</h2>
            <p className="text-gray-300 text-lg mb-8 max-w-md font-light">
              {t.footer.subtitle}
            </p>
            
            <div className="flex gap-4 mb-10">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="mailto:contact@dianebazozah.com" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all duration-300">
                <Mail className="w-5 h-5" />
              </a>
            </div>

            <div className="space-y-2 text-gray-400 text-sm">
              <p>{t.footer.location}</p>
              <p>{t.footer.role}</p>
            </div>
          </div>

          <div className="bg-white/5 p-8 rounded-lg backdrop-blur-sm border border-white/10">
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">{t.footer.form.firstName}</label>
                  <Input className="bg-white/10 border-white/20 text-white placeholder:text-gray-500 focus:border-secondary focus:ring-secondary" placeholder="Jane" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">{t.footer.form.lastName}</label>
                  <Input className="bg-white/10 border-white/20 text-white placeholder:text-gray-500 focus:border-secondary focus:ring-secondary" placeholder="Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">{t.footer.form.email}</label>
                <Input className="bg-white/10 border-white/20 text-white placeholder:text-gray-500 focus:border-secondary focus:ring-secondary" placeholder="jane@example.com" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">{t.footer.form.message}</label>
                <Textarea className="bg-white/10 border-white/20 text-white placeholder:text-gray-500 focus:border-secondary focus:ring-secondary min-h-[120px]" placeholder={t.footer.form.message} />
              </div>
              <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-medium h-12 text-base">
                {t.footer.form.submit}
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Diane K. Bazozah. {t.footer.rights}</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">{t.footer.privacy}</a>
            <a href="#" className="hover:text-white transition-colors">{t.footer.terms}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
