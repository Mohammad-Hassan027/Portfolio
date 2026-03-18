import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "PathOS",
    subtitle: "Learning Management System",
    description:
      "A full-stack LMS designed to manage courses, users, and structured learning paths. Features secure authentication with Clerk, role-based access (Admin/User), optimized API calls with TanStack Query, and global state via Zustand.",
    tags: [
      "React",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "Clerk",
      "TanStack Query",
      "Zustand",
    ],
    demo: "https://path-os.vercel.app/",
    code: "https://github.com/Mohammad-Hassan027/PathOS",
    featured: true,
    number: "01",
  },
  {
    title: "Bloggr",
    subtitle: "Modern Blogging Platform",
    description:
      "A modern blogging platform that allows users to create, manage, and publish content with a smooth and intuitive experience. Features authentication, protected routes, CRUD functionality, and optimized data fetching.",
    tags: ["React", "TypeScript", "Node.js", "MongoDB", "TanStack Query"],
    demo: "https://blog-app-azure-nu.vercel.app/",
    code: "https://github.com/Mohammad-Hassan027/Blog-App",
    featured: true,
    number: "02",
  },
];

export const Projects = () => {
  return (
    <section id="work" className="section-padding relative overflow-hidden">
      {/* Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 watermark-text text-[clamp(3rem,14vw,14rem)] whitespace-nowrap">
        HALL OF FAME
      </div>

      <div className="container-tight relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="section-divider" />
            <span className="text-xs uppercase tracking-[0.3em] text-neon font-semibold">
              Hall of Fame
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-foreground tracking-tight">
            SELECTED PROJECTS
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg text-sm leading-relaxed">
            A showcase of applications built with attention to detail,
            performance, and user experience.
          </p>
        </motion.div>

        {/* Project cards */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="group relative"
            >
              <div className="relative border border-white/5 bg-[#111111]/60 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:border-neon/20">
                {/* Hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-neon/[0.03] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="relative p-6 sm:p-8 md:p-10">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                    {/* Left: Number + Title */}
                    <div className="lg:w-1/3">
                      <span className="font-display text-5xl sm:text-6xl md:text-7xl text-neon/10 group-hover:text-neon/25 transition-colors duration-500 leading-none block mb-4">
                        {project.number}
                      </span>
                      <h3 className="font-display text-2xl sm:text-3xl text-foreground group-hover:text-neon transition-colors duration-500 mb-2">
                        {project.title}
                      </h3>
                      <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                        {project.subtitle}
                      </p>

                      {/* Actions */}
                      <div className="flex gap-3 mt-6">
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 text-xs uppercase tracking-[0.15em] font-bold bg-neon text-black hover:shadow-[0_0_30px_rgba(204,255,0,0.3)] transition-all duration-300"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          Demo
                        </a>
                        <a
                          href={project.code}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 text-xs uppercase tracking-[0.15em] font-bold border border-white/15 text-foreground hover:border-neon/40 hover:text-neon transition-all duration-300"
                        >
                          <Github className="w-3.5 h-3.5" />
                          Code
                        </a>
                      </div>
                    </div>

                    {/* Right: Description + Tags */}
                    <div className="lg:w-2/3">
                      <p className="text-muted-foreground leading-[1.8] text-[15px] mb-8">
                        {project.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1.5 text-[10px] uppercase tracking-[0.15em] font-semibold border border-white/10 text-muted-foreground hover:border-neon/40 hover:text-neon transition-all duration-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom neon border on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Featured badge */}
                {project.featured && (
                  <div className="absolute top-6 right-6 sm:top-8 sm:right-8">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-neon/60 border border-neon/20 px-3 py-1">
                      Featured
                    </span>
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
