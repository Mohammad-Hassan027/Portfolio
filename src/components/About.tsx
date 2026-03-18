import { motion } from "framer-motion";

const statements = [
  {
    big: "REDEFINING LIMITS",
    sub: "Defining a legacy in code",
  },
  {
    big: "BUILDING AT SCALE",
    sub: "Performance-first. Always.",
  },
  {
    big: "CRAFTING EXPERIENCES",
    sub: "Where engineering meets design",
  },
];

export const About = () => {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 watermark-text text-[clamp(5rem,18vw,16rem)] whitespace-nowrap">
        ABOUT
      </div>

      <div className="container-tight relative z-10">
        {/* Section label */}
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
              Off Track
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-foreground tracking-tight">
            THE STORY
          </h2>
        </motion.div>

        {/* Editorial layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left column: Mission statements */}
          <div className="lg:col-span-5 space-y-12">
            {statements.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                className="group"
              >
                <h3 className="font-display text-xl sm:text-2xl md:text-3xl text-foreground leading-tight mb-2 group-hover:text-neon transition-colors duration-500">
                  {item.big}
                </h3>
                <p className="text-sm text-muted-foreground tracking-wide">
                  {item.sub}
                </p>
                {index < statements.length - 1 && (
                  <div className="mt-8 w-8 h-px bg-white/10" />
                )}
              </motion.div>
            ))}
          </div>

          {/* Right column: Bio content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="space-y-6 text-muted-foreground leading-[1.8] text-[15px]">
              <p>
                I'm a{" "}
                <span className="text-foreground font-semibold">
                  Full-Stack MERN Developer
                </span>{" "}
                who enjoys turning complex problems into clean, scalable, and
                user-focused web applications.
              </p>

              <p>
                I work primarily with{" "}
                <span className="text-foreground">TypeScript</span>,{" "}
                <span className="text-foreground">React</span>,{" "}
                <span className="text-foreground">Node.js</span>, and{" "}
                <span className="text-foreground">MongoDB</span>, and I care
                deeply about performance, maintainability, and real-world
                usability. My approach to development is simple: build things
                that feel fast, work reliably, and scale without becoming
                painful to maintain.
              </p>

              <p>
                Over time, I've built complete full-stack products like{" "}
                <span className="text-neon font-medium">PathOS</span>, a
                learning management system, and{" "}
                <span className="text-neon font-medium">Bloggr</span>, a modern
                blogging platform with authentication, role-based access, and
                optimized data fetching. I actively use tools like{" "}
                <span className="text-foreground">TanStack Query</span> for
                server state,{" "}
                <span className="text-foreground">Zustand</span> for
                predictable global state, and{" "}
                <span className="text-foreground">Clerk</span> for secure
                authentication.
              </p>

              <p>
                I'm continuously improving my craft by shipping projects,
                refining UX details, and focusing on performance and
                accessibility. My goal is to work on meaningful products where
                good engineering and great user experience go hand in hand.
              </p>

              {/* Quote */}
              <div className="border-l-2 border-neon/40 pl-6 mt-8">
                <p className="text-sm italic text-muted-foreground">
                  When I'm not coding, I'm usually learning new patterns,
                  refining existing projects, or exploring better ways to build
                  fast and scalable web apps.
                </p>
              </div>
            </div>

            {/* Quick stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/5"
            >
              {[
                { value: "2+", label: "Projects Shipped" },
                { value: "12+", label: "Technologies" },
                { value: "8.12", label: "CGPA" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="font-display text-2xl sm:text-3xl text-neon mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
