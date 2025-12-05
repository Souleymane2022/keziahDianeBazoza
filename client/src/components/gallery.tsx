import { motion } from "framer-motion";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { useLanguage } from "@/lib/language-context";
import img1 from "@assets/images_(5)_1764904182439.jpeg";
import img2 from "@assets/UniPod_42_1764904182501.JPG";
import img3 from "@assets/UniPod_38_1764904182530.JPG";
import img4 from "@assets/UniPod_109_1764904182488.JPG";
import img5 from "@assets/UniPod_124_1764904182480.JPG";

const galleryImages = [
  { src: img1, alt: "Professional Portrait" },
  { src: img2, alt: "Strategic Meeting" },
  { src: img3, alt: "Collaborative Session" },
  { src: img4, alt: "Community Engagement" },
  { src: img5, alt: "Partnership Event" },
];

export default function Gallery() {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-primary text-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h4 className="text-secondary font-bold tracking-widest uppercase text-sm mb-3">{t.gallery.label}</h4>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white">
            {t.gallery.title}
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {galleryImages.map((image, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <div className="overflow-hidden rounded-sm aspect-[4/5] relative group">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex bg-white/10 hover:bg-white/20 border-none text-white" />
            <CarouselNext className="hidden md:flex bg-white/10 hover:bg-white/20 border-none text-white" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
