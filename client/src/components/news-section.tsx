import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNews } from "@/lib/news-context";
import { useLanguage } from "@/lib/language-context";

export default function NewsSection() {
  const { news } = useNews();
  const { t } = useLanguage();

  if (news.length === 0) return null;

  return (
    <section id="news" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h4 className="text-secondary font-bold tracking-widest uppercase text-sm mb-3">{t.news.label}</h4>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary">
              {t.news.title}
            </h2>
          </div>
          {/* <Button variant="outline" className="hidden md:flex">View Archive</Button> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col overflow-hidden group rounded-none">
                {item.image && (
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                )}
                <CardHeader className="pb-3">
                  <div className="flex items-center text-xs text-gray-400 mb-3 font-medium uppercase tracking-wider">
                    <Calendar className="w-3 h-3 mr-2 text-secondary" />
                    {item.date}
                  </div>
                  <CardTitle className="font-serif text-xl text-primary line-clamp-2 group-hover:text-secondary transition-colors">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow pb-3">
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                    {item.excerpt}
                  </p>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button variant="link" className="p-0 h-auto text-primary font-medium hover:text-secondary hover:no-underline group/btn">
                    {t.news.readMore} <ArrowRight className="ml-2 w-3 h-3 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
