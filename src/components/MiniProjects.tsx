import { motion } from "framer-motion";
import { Github, ExternalLink, Code2 } from "lucide-react";

const experiments = [
    {
        title: "Cyber Guardian APK Analyzer",
        tech: "Python, Jupyter Notebook, FastAPI",
        link: "https://cyber-guardian-apk-analyzer.vercel.app/",
        repo: "https://github.com/Mohammad-Hassan027/cyber-guardian-apk-analyzer"
    },
    {
        title: "Asset-Management-System",
        tech: "Java, JDBC, MySQL, Apache server",
        link: "#",
        repo: "https://github.com/Mohammad-Hassan027/Asset-Management-System"
    },
    {
        title: "Civic Connect",
        tech: "React, Framer Motion",
        link: "https://civic-connect-theta.vercel.app/",
        repo: "https://github.com/Mohammad-Hassan027/civic-connect"
    },
    {
        title: "Fusion Draw",
        tech: "React, Node.js, MongoDB",
        link: "https://fusion-draw.onrender.com/",
        repo: "https://github.com/Mohammad-Hassan027/Fusion-Draw"
    },

];

export const MiniProjects = () => {
    return (
        <section className="py-24 relative">
            <div className="container-tight">
                <div className="flex items-center gap-4 mb-12">
                    <Code2 className="text-neon w-6 h-6" />
                    <h3 className="font-display text-2xl text-foreground">EXPERIMENTS & ARCHIVES</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {experiments.map((exp, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group p-6 border border-white/5 hover:border-neon/50 bg-[#0a0a0a] transition-all flex justify-between items-center"
                        >
                            <div>
                                <h4 className="text-foreground font-medium group-hover:text-neon transition-colors">{exp.title}</h4>
                                <p className="text-muted-foreground text-xs mt-2">{exp.tech}</p>
                            </div>
                            <div className="flex gap-3 opacity-50 group-hover:opacity-100 transition-opacity">
                                <a href={exp.repo} className="hover:text-neon"><Github size={18} /></a>
                                <a href={exp.link} className="hover:text-neon"><ExternalLink size={18} /></a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};