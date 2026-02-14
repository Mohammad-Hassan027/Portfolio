import { motion } from "framer-motion";

const academicPath = [
  {
    role: "B.E. Electronics and TeleCommunication",
    institution: "Thakur College of Engineering and Technology",
    period: "2024-2028 - Present",
    description:
      "Currently strictly focused on Data Structures, Algorithms, and Web Development (CGPA: 8.12).",
  },
];

export const StudentExperience = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="container-tight">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs uppercase tracking-widest text-primary font-medium">
            Timeline
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-4">
            Academic Journey
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            My educational background, internships, and the milestones that
            define my growth.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-2xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

          {academicPath.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative pl-8 md:pl-0 pb-12 last:pb-0 ${index % 2 === 0
                ? "md:pr-[calc(50%+2rem)]"
                : "md:pl-[calc(50%+2rem)]"
                }`}
            >
              {/* Timeline Dot */}
              <div
                className={`absolute left-0 md:left-1/2 top-0 w-3 h-3 rounded-full bg-primary border-4 border-background md:-translate-x-1/2`}
              />

              {/* Content Card */}
              <div className="p-6 rounded-xl border border-border bg-card/50 hover:bg-card hover:border-muted-foreground/30 transition-all duration-300">
                <span className="text-xs text-primary font-medium">
                  {item.period}
                </span>
                <h3 className="text-lg font-semibold mt-2">{item.role}</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {item.institution}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
