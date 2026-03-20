import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
    {
        name: "Alex Johnson",
        role: "CTO @ TechNova",
        text: "Hassan's ability to translate complex logic into seamless user experiences is unmatched. The platform he built for us scales beautifully.",
    },
    {
        name: "Sarah Lee",
        role: "Product Manager",
        text: "A true professional. Hassan doesn't just write code; he thinks about the product holistically. His work on our MERN stack migration saved us months.",
    },
    {
        name: "David Chen",
        role: "Founder @ StartupX",
        text: "Working with Hassan was a game-changer. His attention to detail and performance optimization directly impacted our user retention.",
    }
];

export const Testimonials = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

    return (
        <section className="section-padding relative overflow-hidden bg-[#050505]">
            <div className="container-tight relative z-10">
                <div className="flex items-center justify-between mb-16">
                    <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                        <h2 className="font-display text-3xl md:text-5xl text-foreground tracking-tight">CLIENT <span className="text-neon">VOICES</span></h2>
                    </motion.div>
                    <div className="flex gap-4">
                        <button onClick={scrollPrev} className="p-3 border border-white/10 hover:border-neon hover:text-neon transition-colors"><ChevronLeft size={20} /></button>
                        <button onClick={scrollNext} className="p-3 border border-white/10 hover:border-neon hover:text-neon transition-colors"><ChevronRight size={20} /></button>
                    </div>
                </div>

                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex">
                        {testimonials.map((t, i) => (
                            <div key={i} className="flex-[0_0_100%] md:flex-[0_0_50%] min-w-0 pl-4">
                                <div className="p-8 border border-white/5 bg-white/[0.02] relative group hover:border-neon/30 transition-colors h-full">
                                    <Quote className="text-neon/20 w-12 h-12 absolute top-6 right-6 group-hover:text-neon/40 transition-colors" />
                                    <p className="text-muted-foreground text-lg leading-relaxed mb-8 relative z-10">"{t.text}"</p>
                                    <div>
                                        <h4 className="text-foreground font-display tracking-wider text-sm">{t.name}</h4>
                                        <p className="text-neon text-xs tracking-widest uppercase mt-1">{t.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};