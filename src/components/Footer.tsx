import { Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-emerald flex items-center justify-center">
              <Shield className="w-4 h-4 text-emerald-foreground" />
            </div>
            <span className="font-display font-bold text-lg text-foreground">
              Consumer<span className="text-emerald">Guard</span>
            </span>
          </div>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms</a>
            <a href="#" className="hover:text-foreground transition-colors">Contact</a>
          </div>
          <p className="text-xs text-muted-foreground">
            © 2026 ConsumerGuard. Protecting Indian consumers.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
