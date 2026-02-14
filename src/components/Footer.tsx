export const Footer = () => {
  return (
    <footer className="border-t border-border py-8">
      <div className="container-tight">
        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-4 text-sm text-muted-foreground">
            <p>
              © {new Date().getFullYear()} Mohammad Hassan Shaikh<span className="text-primary">.</span> All rights reserved.
            </p>
            <p>
              Built with{" "}
              <span className="text-foreground">React</span> &{" "}
              <span className="text-foreground">TypeScript</span>
            </p>
          </div>
          
          {/* Lighthouse Badge */}
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 border border-border">
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-primary" aria-hidden="true" />
              <span className="text-xs text-muted-foreground">Lighthouse:</span>
            </div>
            <span className="text-xs font-medium text-foreground">95+ Performance</span>
            <span className="text-xs text-muted-foreground">/</span>
            <span className="text-xs font-medium text-foreground">Accessibility</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
