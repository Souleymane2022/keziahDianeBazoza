import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/language-context";

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center bg-gray-100 rounded-full p-1 border border-gray-200">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setLanguage('en')}
        className={`rounded-full px-3 h-7 text-xs font-medium transition-all ${
          language === 'en' 
            ? 'bg-white text-primary shadow-sm' 
            : 'text-gray-500 hover:text-primary bg-transparent'
        }`}
      >
        EN
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setLanguage('fr')}
        className={`rounded-full px-3 h-7 text-xs font-medium transition-all ${
          language === 'fr' 
            ? 'bg-white text-primary shadow-sm' 
            : 'text-gray-500 hover:text-primary bg-transparent'
        }`}
      >
        FR
      </Button>
    </div>
  );
}
