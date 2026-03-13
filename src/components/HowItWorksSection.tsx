import { motion } from "framer-motion";
import { Link2, Cpu, ShieldCheck, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Link2,
    step: "01",
    title: "Paste Product Link",
    description: "Drop any product URL from Flipkart, Amazon, Meesho, or any Indian marketplace.",
  },
  {
    icon: Cpu,
    step: "02",
    title: "AI Analysis",
    description: "Our AI scans seller credibility, review authenticity, pricing patterns, and return policies.",
  },
  {
    icon: ShieldCheck,
    step: "03",
    title: "Get Protection Report",
    description: "Receive a detailed trust score, policy breakdown, and actionable safety recommendations.",
  },
  {
    icon: CheckCircle,
    step: "04",
    title: "Post-Purchase Tracking",
    description: "We monitor your purchase and alert you about policy changes, delivery issues, or refund delays.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-emerald uppercase tracking-widest">How It Works</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            Protection in 4 Simple Steps
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative text-center"
            >
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-px bg-border" />
              )}
              <div className="w-20 h-20 rounded-2xl bg-card border border-border shadow-card flex items-center justify-center mx-auto mb-4 relative">
                <s.icon className="w-8 h-8 text-emerald" />
                <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-emerald text-emerald-foreground text-xs font-bold flex items-center justify-center font-display">
                  {s.step}
                </span>
              </div>
              <h3 className="text-lg font-bold font-display text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
