import { motion } from "framer-motion";
import { Shield, ScanSearch, FileCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background */}
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(160_60%_40%/0.15),transparent_60%)]" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />

      <div className="container relative mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald/10 border border-emerald/20 mb-6">
              <Shield className="w-4 h-4 text-emerald" />
              <span className="text-sm font-medium text-emerald">AI-Powered Protection</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
              Your Digital
              <br />
              <span className="text-gradient-hero">Consumer Shield</span>
            </h1>

            <p className="text-lg text-primary-foreground/70 max-w-lg mb-8 font-body">
              Detect fake products, analyse return policies, and ensure post-purchase accountability across India's digital marketplace — all powered by AI.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg" className="gap-2">
                Start Protecting <ArrowRight className="w-4 h-4" />
              </Button>
              <Button variant="heroOutline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                Learn More
              </Button>
            </div>

            <div className="flex items-center gap-8 mt-10">
              {[
                { value: "50K+", label: "Products Verified" },
                { value: "98%", label: "Detection Accuracy" },
                { value: "₹2Cr+", label: "Refunds Recovered" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-bold font-display text-emerald">{stat.value}</p>
                  <p className="text-xs text-primary-foreground/50">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Floating cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="bg-card/10 backdrop-blur-lg border border-primary-foreground/10 rounded-2xl p-6 mb-4"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald/20 flex items-center justify-center">
                    <ScanSearch className="w-5 h-5 text-emerald" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-primary-foreground">Fake Product Scan</p>
                    <p className="text-xs text-primary-foreground/50">AI analysis complete</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-primary-foreground/70">
                    <span>Authenticity Score</span>
                    <span className="text-emerald font-semibold">94%</span>
                  </div>
                  <div className="h-2 bg-primary-foreground/10 rounded-full overflow-hidden">
                    <div className="h-full w-[94%] bg-emerald rounded-full" />
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="bg-card/10 backdrop-blur-lg border border-primary-foreground/10 rounded-2xl p-6 ml-8"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center">
                    <FileCheck className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-primary-foreground">Refund Policy</p>
                    <p className="text-xs text-primary-foreground/50">Amazon.in — Electronics</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["7-Day Return", "No Questions", "Free Pickup"].map((tag) => (
                    <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-emerald/15 text-emerald border border-emerald/20">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
