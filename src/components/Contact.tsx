import { motion } from "framer-motion";
import { Github, Linkedin, Send, Mail } from "lucide-react";
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useForm, ValidationError } from '@formspree/react';

export const Contact = () => {
  const [state, handleSubmit] = useForm("mnjbdjrw");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { toast } = useToast();

  useEffect(() => {
    if (state.succeeded) {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    }
  }, [state.succeeded, toast]);

  const socialLinks = [
    {
      name: "GITHUB",
      href: "https://github.com/Mohammad-Hassan027",
      icon: <Github className="w-5 h-5" />,
    },
    {
      name: "LINKEDIN",
      href: "https://www.linkedin.com/in/mohammad-hassan-shaikh",
      icon: <Linkedin className="w-5 h-5" />,
    },
    {
      name: "EMAIL",
      href: "mailto:hassanshaikh@example.com",
      icon: <Mail className="w-5 h-5" />,
    },
  ];

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 watermark-text text-[clamp(3rem,12vw,12rem)] whitespace-nowrap">
        FINAL LAP
      </div>

      <div className="container-tight relative z-10">
        {/* Section header */}
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
              Final Lap
            </span>
          </div>
        </motion.div>

        {/* Big bold headline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24"
        >
          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-foreground leading-[1.1] tracking-tight">
            ALWAYS BRINGING
            <br />
            THE FIGHT<span className="text-neon">.</span>
            <br />
            <span className="text-neon">LET'S WORK.</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-[10px] uppercase tracking-[0.25em] font-semibold mb-3 text-muted-foreground"
                >
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="bg-[#111111] border-white/10 rounded-none px-4 py-6 text-foreground placeholder:text-white/20 focus:border-neon focus:ring-neon/20 transition-colors"
                  placeholder="Your name"
                />
                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-[10px] uppercase tracking-[0.25em] font-semibold mb-3 text-muted-foreground"
                >
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="bg-[#111111] border-white/10 rounded-none px-4 py-6 text-foreground placeholder:text-white/20 focus:border-neon focus:ring-neon/20 transition-colors"
                  placeholder="you@example.com"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-[10px] uppercase tracking-[0.25em] font-semibold mb-3 text-muted-foreground"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="bg-[#111111] border-white/10 rounded-none px-4 py-4 text-foreground placeholder:text-white/20 focus:border-neon focus:ring-neon/20 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <button
                type="submit"
                disabled={state.submitting}
                className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-neon text-black text-xs uppercase tracking-[0.2em] font-bold transition-all duration-300 hover:shadow-[0_0_40px_rgba(204,255,0,0.3)] hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {state.submitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Right side: Socials + Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col justify-between"
          >
            {/* Social links */}
            <div className="space-y-4">
              <h3 className="text-[10px] uppercase tracking-[0.25em] font-semibold text-muted-foreground mb-6">
                Connect
              </h3>
              {socialLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="group flex items-center justify-between p-5 border border-white/5 bg-[#111111]/40 hover:border-neon/30 hover:bg-[#111111]/80 transition-all duration-500"
                >
                  <div className="flex items-center gap-4">
                    <div className="text-white/30 group-hover:text-neon transition-colors duration-500">
                      {link.icon}
                    </div>
                    <span className="font-display text-sm tracking-widest text-foreground group-hover:text-neon transition-colors duration-500">
                      {link.name}
                    </span>
                  </div>
                  <svg
                    className="w-4 h-4 text-white/20 group-hover:text-neon group-hover:translate-x-1 transition-all duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </motion.a>
              ))}
            </div>

            {/* Info card */}
            <div className="mt-8 p-6 border border-white/5 bg-[#111111]/40">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Currently open to freelance projects and full-time
                opportunities. If you have an exciting project or position,
                don't hesitate to reach out!
              </p>
              <div className="flex items-center gap-2 mt-4">
                <div className="w-2 h-2 rounded-full bg-neon animate-pulse" />
                <span className="text-xs uppercase tracking-[0.15em] text-neon font-medium">
                  Available now
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
