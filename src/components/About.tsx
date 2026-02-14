import { motion } from "framer-motion";

export const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-xs uppercase tracking-widest text-primary font-medium">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-4">
            Mohammad Hassan Shaikh
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-3xl mx-auto"
        >
          <div className="p-8 rounded-2xl border border-border bg-card/50 space-y-6 text-muted-foreground leading-relaxed">
            <p>
              I'm a <span className="text-foreground font-medium">Full-Stack MERN Developer</span> who enjoys turning complex problems into clean, scalable, and user-focused web applications.
            </p>
            
            <p>
              I work primarily with <span className="text-foreground">TypeScript</span>, <span className="text-foreground">React</span>, <span className="text-foreground">Node.js</span>, and <span className="text-foreground">MongoDB</span>, and I care deeply about performance, maintainability, and real-world usability. My approach to development is simple: build things that feel fast, work reliably, and scale without becoming painful to maintain.
            </p>
            
            <p>
              Over time, I've built complete full-stack products like <span className="text-primary">PathOS</span>, a learning management system, and <span className="text-primary">Bloggr</span>, a modern blogging platform with authentication, role-based access, and optimized data fetching. I actively use tools like <span className="text-foreground">TanStack Query</span> for server state, <span className="text-foreground">Zustand</span> for predictable global state, and <span className="text-foreground">Clerk</span> for secure authentication.
            </p>
            
            <p>
              I'm continuously improving my craft by shipping projects, refining UX details, and focusing on performance and accessibility. My goal is to work on meaningful products where good engineering and great user experience go hand in hand.
            </p>
            
            <p className="text-sm italic border-l-2 border-primary/50 pl-4">
              When I'm not coding, I'm usually learning new patterns, refining existing projects, or exploring better ways to build fast and scalable web apps.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
