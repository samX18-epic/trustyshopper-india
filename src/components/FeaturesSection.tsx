import { motion } from "framer-motion";
import { ScanSearch, FileText, ShieldCheck, AlertTriangle, BarChart3, Bell, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: ScanSearch,
    title: "Fake Product Detection",
    description: "AI scans product listings, reviews, and seller history to identify counterfeit goods before you buy.",
    color: "bg-emerald/10 text-emerald",
    href: "/fake-detection",
  },
  {
    icon: FileText,
    title: "Policy Analyser",
    description: "Instantly decode complex return and refund policies. Know your rights before checkout.",
    color: "bg-accent/10 text-accent",
    href: "/policy-analyser",
  },
  {
    icon: ShieldCheck,
    title: "Post-Purchase Guard",
    description: "Track your purchase accountability. Get alerts when sellers change terms or delay refunds.",
    color: "bg-secondary/10 text-secondary",
    href: "/post-purchase",
  },
  {
    icon: AlertTriangle,
    title: "Scam Alerts",
    description: "Real-time warnings about known scam sellers, fake discount traps, and phishing attempts.",
    color: "bg-destructive/10 text-destructive",
    href: "/scam-alerts",
  },
  {
    icon: BarChart3,
    title: "Price History",
    description: "Track price trends across marketplaces. Spot fake discounts and find the best genuine deals.",
    color: "bg-emerald/10 text-emerald",
    href: "/price-history",
  },
  {
    icon: Bell,
    title: "Rights Notifications",
    description: "Stay informed about consumer protection law updates and new regulations from CCPA India.",
    color: "bg-accent/10 text-accent",
    href: "/rights",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-emerald uppercase tracking-widest">Features</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            Complete Consumer Protection
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Six powerful AI-driven tools designed specifically for India's e-commerce landscape.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                to={feature.href}
                className="group block bg-card rounded-2xl p-6 border border-border shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-12 h-12 rounded-xl ${feature.color} flex items-center justify-center mb-4`}>
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold font-display text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{feature.description}</p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-emerald group-hover:gap-2 transition-all">
                  Try Now <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
