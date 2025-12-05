import { motion } from "framer-motion";
import { Users, Briefcase, Globe, Lightbulb, HandHeart, Network } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const expertiseAreas = [
  {
    title: "Youth Development",
    description: "Designing and implementing programs that equip young Africans with the skills needed for the digital age.",
    icon: Users,
  },
  {
    title: "SME Support",
    description: "Strengthening small and medium enterprises through capacity building and access to digital tools.",
    icon: Briefcase,
  },
  {
    title: "Regional Coordination",
    description: "Harmonizing policies and initiatives across East Africa to create a unified digital market.",
    icon: Globe,
  },
  {
    title: "Digital Innovation",
    description: "Promoting ecosystems where technology-driven solutions can thrive and scale.",
    icon: Lightbulb,
  },
  {
    title: "Women's Inclusion",
    description: "Ensuring gender equity in the tech sector by creating targeted opportunities for women.",
    icon: HandHeart,
  },
  {
    title: "Strategic Partnerships",
    description: "Facilitating collaboration between governments, private sector, and development partners.",
    icon: Network,
  },
];

export default function Impact() {
  return (
    <section id="expertise" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h4 className="text-secondary font-bold tracking-widest uppercase text-sm mb-3">My Expertise</h4>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
            Building a Resilient <br /> Digital Ecosystem
          </h2>
          <p className="text-gray-600 text-lg font-light">
            Through my role at Smart Africa and various initiatives, I focus on these key pillars to drive sustainable growth and impact.
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
