import { motion } from "framer-motion";
import { Users, Briefcase, Globe, Lightbulb, HandHeart, Network } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/lib/language-context";

export default function Impact() {
  const { t } = useLanguage();

  const expertiseAreas = [
    {
      title: t.impact.areas.youth.title,
      description: t.impact.areas.youth.desc,
      icon: Users,
    },
    {
      title: t.impact.areas.sme.title,
      description: t.impact.areas.sme.desc,
      icon: Briefcase,
    },
    {
      title: t.impact.areas.regional.title,
      description: t.impact.areas.regional.desc,
      icon: Globe,
    },
    {
      title: t.impact.areas.innovation.title,
      description: t.impact.areas.innovation.desc,
      icon: Lightbulb,
    },
    {
      title: t.impact.areas.women.title,
      description: t.impact.areas.women.desc,
      icon: HandHeart,
    },
    {
      title: t.impact.areas.partnerships.title,
      description: t.impact.areas.partnerships.desc,
      icon: Network,
    },
  ];

  return (
    <section id="expertise" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h4 className="text-secondary font-bold tracking-widest uppercase text-sm mb-3">{t.impact.label}</h4>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
            {t.impact.title}
          </h2>
          <p className="text-gray-600 text-lg font-light">
            {t.impact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseAreas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white group">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/5 rounded-lg flex items-center justify-center mb-4 group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                    <area.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <CardTitle className="font-serif text-xl text-primary">{area.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed font-light">{area.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
