import { motion } from "framer-motion";
import { Github, Linkedin, Send } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });

    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs uppercase tracking-widest text-primary font-medium">
            Get in Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-4">
            Let's Work Together
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Have a project in mind? I'd love to hear about it. Send me a message
            and let's create something great.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2 text-foreground"
                >
                  Name
                </label>
                <Input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="bg-card border-border focus:border-primary focus:ring-primary/20"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2 text-foreground"
                >
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="bg-card border-border focus:border-primary focus:ring-primary/20"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2 text-foreground"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="bg-card border-border focus:border-primary focus:ring-primary/20 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-primary text-primary-foreground font-medium transition-all duration-300 hover:shadow-[0_0_30px_hsl(217_91%_60%_/_0.4)] hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
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

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Connect with me</h3>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/Mohammad-Hassan027"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center w-12 h-12 rounded-xl border border-border bg-card hover:bg-secondary hover:border-muted-foreground/30 transition-all duration-300 hover-lift"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/mohammad-hassan-shaikh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center w-12 h-12 rounded-xl border border-border bg-card hover:bg-secondary hover:border-muted-foreground/30 transition-all duration-300 hover-lift"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                  </a>
                </div>
              </div>

              <div className="p-6 rounded-xl border border-border bg-card/50">
                <p className="text-muted-foreground leading-relaxed">
                  Currently open to freelance projects and full-time
                  opportunities. If you have an exciting project or position,
                  don't hesitate to reach out!
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
