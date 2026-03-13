import { motion } from "framer-motion";
import { Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl bg-hero-gradient overflow-hidden p-12 md:p-16 text-center"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(160_60%_40%/0.2),transparent_60%)]" />
          <div className="relative">
            <div className="w-16 h-16 rounded-2xl bg-emerald/20 flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-emerald" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4 font-display">
              Start Protecting Your Purchases Today
            </h2>
            <p className="text-primary-foreground/70 max-w-xl mx-auto mb-8">
              Join thousands of smart Indian consumers who verify before they buy. Free to start, powered by AI.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="lg" className="gap-2">
                Get Started Free <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
