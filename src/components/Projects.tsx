import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { useState, useEffect } from "react";

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
  },
];

const ProjectSkeleton = () => (
  <div className="relative p-6 sm:p-8 rounded-2xl border border-border bg-card/50">
    <Skeleton className="h-6 w-32 mb-2" />
    <Skeleton className="h-4 w-48 mb-4" />
    <Skeleton className="h-20 w-full mb-6" />
    <div className="flex gap-2 mb-6">
      <Skeleton className="h-6 w-16 rounded-full" />
      <Skeleton className="h-6 w-16 rounded-full" />
      <Skeleton className="h-6 w-20 rounded-full" />
    </div>
    <div className="flex gap-3">
      <Skeleton className="h-10 w-24 rounded-lg" />
      <Skeleton className="h-10 w-24 rounded-lg" />
    </div>
  </div>
);

export const Projects = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="work" className="section-padding">
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs uppercase tracking-widest text-primary font-medium">
            Featured Work
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-4">
            Selected Projects
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            A showcase of applications built with attention to detail,
            performance, and user experience.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {loading
            ? Array(2)
                .fill(0)
                .map((_, i) => <ProjectSkeleton key={i} />)
            : projects.map((project, index) => (
                <motion.article
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative p-6 sm:p-8 rounded-2xl border border-border bg-card/50 hover:bg-card hover:border-primary/30 transition-all duration-300 hover-lift hover-glow"
                >
                  {/* Project badge */}
                  {project.featured && (
                    <span className="absolute top-4 right-4 text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium">
                      Featured
                    </span>
                  )}

                  {/* Content */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {project.subtitle}
                      </p>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3 pt-2">
                      <a
                        href={project.demo}
                        className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-lg bg-primary text-primary-foreground hover:shadow-[0_0_20px_hsl(217_91%_60%_/_0.3)] transition-all duration-300"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Demo
                      </a>
                      <a
                        href={project.code}
                        className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-lg border border-border hover:bg-secondary transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    </div>
                  </div>
                </motion.article>
              ))}
        </div>
      </div>
    </section>
  );
};
