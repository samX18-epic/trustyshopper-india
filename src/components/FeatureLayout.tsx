import { ReactNode } from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { Button } from "@/components/ui/button";

interface FeatureLayoutProps {
  title: string;
  subtitle: string;
  icon: ReactNode;
  iconBg: string;
  children: ReactNode;
  result?: string;
  isLoading?: boolean;
  error?: string | null;
}

const FeatureLayout = ({ title, subtitle, icon, iconBg, children, result, isLoading, error }: FeatureLayoutProps) => {
  return (
    <div className="min-h-screen bg-background pt-20 pb-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="flex items-center gap-4 mb-2">
            <div className={`w-12 h-12 rounded-xl ${iconBg} flex items-center justify-center`}>{icon}</div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-foreground">{title}</h1>
              <p className="text-sm text-muted-foreground">{subtitle}</p>
            </div>
          </div>

          <div className="mt-8 bg-card rounded-2xl border border-border shadow-card p-6">
            {children}
          </div>

          {error && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-4 bg-destructive/10 border border-destructive/20 rounded-xl p-4 text-sm text-destructive">
              {error}
            </motion.div>
          )}

          {(result || isLoading) && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-6 bg-card rounded-2xl border border-border shadow-card p-6">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-4">Analysis Result</h3>
              {isLoading && !result && (
                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-5 h-5 border-2 border-emerald border-t-transparent rounded-full animate-spin" />
                  <span className="text-sm">Analyzing with AI...</span>
                </div>
              )}
              {result && (
                <div className="prose prose-sm max-w-none dark:prose-invert prose-headings:font-display prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-li:text-muted-foreground">
                  <ReactMarkdown>{result}</ReactMarkdown>
                  {isLoading && <span className="inline-block w-2 h-4 bg-emerald animate-pulse-glow ml-1" />}
                </div>
              )}
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default FeatureLayout;
