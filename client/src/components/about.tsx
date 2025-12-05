import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";
import portrait from "@assets/images_(4)_1764904182475.jpeg";
import patternBg from "@assets/generated_images/subtle_geometric_pattern_background.png";
import ReactMarkdown from 'react-markdown';

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-30 pointer-events-none">
         <img src={patternBg} alt="" className="w-full h-full object-cover mix-blend-multiply" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto lg:mx-0 overflow-hidden rounded-sm shadow-2xl">
              <img
                src={portrait}
                alt="Diane K. Bazozah"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-primary/80 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <p className="font-serif text-xl italic">"{t.about.quote}"</p>
              </div>
            </div>
            {/* Decorative Element */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-secondary z-10" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-secondary z-10 lg:right-auto lg:left-[calc(100%-5rem)]" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h4 className="text-secondary font-bold tracking-widest uppercase text-sm mb-3">{t.about.label}</h4>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary mb-8 leading-tight">
              {t.about.title} <br />
              <span className="italic text-gray-500">{t.about.titleHighlight}</span>
            </h2>
            
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed font-light">
              <ReactMarkdown components={{ strong: ({node, ...props}) => <strong className="text-primary font-medium" {...props} /> }}>
                {t.about.p1}
              </ReactMarkdown>
              <p>{t.about.p2}</p>
              <p>{t.about.p3}</p>
            </div>

            <div className="mt-10 flex gap-12 border-t border-gray-100 pt-8">
              <div>
                <span className="block text-4xl font-serif font-bold text-secondary">10+</span>
                <span className="text-sm text-gray-500 uppercase tracking-wide mt-1 block">{t.about.stats.exp}</span>
              </div>
              <div>
                <span className="block text-4xl font-serif font-bold text-secondary">East</span>
                <span className="text-sm text-gray-500 uppercase tracking-wide mt-1 block">{t.about.stats.focus}</span>
              </div>
              <div>
                <span className="block text-4xl font-serif font-bold text-secondary">Digital</span>
                <span className="text-sm text-gray-500 uppercase tracking-wide mt-1 block">{t.about.stats.area}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
