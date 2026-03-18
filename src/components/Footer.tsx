export const Footer = () => {
  return (
    <footer className="border-t border-neon/10 py-8">
      <div className="container-tight">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30 tracking-wide font-mono-custom">
            © {new Date().getFullYear()} MOHAMMAD HASSAN SHAIKH
          </p>
          <p className="text-xs text-white/20 tracking-wide">
            Built with{" "}
            <span className="text-white/40">React</span> &{" "}
            <span className="text-white/40">TypeScript</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
