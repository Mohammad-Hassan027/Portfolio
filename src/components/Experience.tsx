import { motion } from "framer-motion";

const academicPath = [
  {
    role: "HSC",
    institution: "K.M.E.S High School",
    period: "2023 - 2024",
    year: "2023",
    description:
      "Completed HSC with a strong foundation in Physics, Chemistry, Biology and Mathematics.",
    stats: [
      { label: "Percentage", value: "73%" },
      { label: "Focus", value: "PCMB" },
      { label: "Status", value: "Completed" },
    ],
    skills: ["Physics", "Chemistry", "Biology", "Mathematics"],
  },
  {
    role: "B.E. Electronics and TeleCommunication",
    institution: "Thakur College of Engineering and Technology",
    period: "2024 — PRESENT",
    year: "2024",
    description:
      "Currently strictly focused on Data Structures, Algorithms, and Web Development.",
    stats: [
      { label: "CGPA", value: "8.12" },
      { label: "Focus", value: "DSA + Web" },
      { label: "Status", value: "Active" },
    ],
    skills: ["DSA", "Web Dev", "TypeScript", "React", "Node.js"],
  },
];

export const StudentExperience = () => {
  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      {/* Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 watermark-text text-[clamp(4rem,15vw,14rem)] whitespace-nowrap">
        ON TRACK
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
              On Track
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-foreground tracking-tight">
            CAREER STATS
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg text-sm leading-relaxed">
            My educational background and the milestones that define my growth as a developer.
          </p>
        </motion.div>

        {/* Career stats cards */}
        <div className="space-y-8">
          {academicPath.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="group relative"
            >
              {/* Main card */}
              <div className="relative border border-white/5 bg-[#111111]/60 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:border-neon/20">
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-neon/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative p-6 sm:p-8 md:p-10">
                  {/* Top row: Year badge + Period */}
                  <div className="flex flex-wrap items-center gap-4 mb-6">
                    <span className="font-display text-4xl sm:text-5xl md:text-6xl text-neon/20 group-hover:text-neon/40 transition-colors duration-500 leading-none">
                      {item.year}
                    </span>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-neon animate-pulse" />
                      <span className="text-xs uppercase tracking-[0.2em] text-neon font-semibold font-mono-custom">
                        {item.period}
                      </span>
                    </div>
                  </div>

                  {/* Role and Institution */}
                  <h3 className="font-display text-lg sm:text-xl md:text-2xl text-foreground mb-2 leading-tight">
                    {item.role}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    {item.institution}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed mb-8 max-w-2xl">
                    {item.description}
                  </p>

                  {/* Stats grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mb-8">
                    {item.stats.map((stat, i) => (
                      <div
                        key={i}
                        className="border border-white/5 bg-white/[0.02] p-4 text-center group-hover:border-neon/10 transition-colors duration-500"
                      >
                        <div className="font-display text-base sm:text-lg md:text-xl text-foreground mb-1 truncate">
                          {stat.value}
                        </div>
                        <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Skills badges */}
                  <div className="flex flex-wrap gap-2">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 text-[10px] uppercase tracking-[0.15em] font-semibold border border-white/10 text-muted-foreground hover:border-neon/40 hover:text-neon transition-all duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom neon border on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
