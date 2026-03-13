import { useState } from "react";
import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import FeatureLayout from "@/components/FeatureLayout";
import Navbar from "@/components/Navbar";
import { useAnalyze } from "@/hooks/useAnalyze";

const RightsNotifications = () => {
  const [query, setQuery] = useState("");
  const { result, isLoading, error, analyze } = useAnalyze();

  const quickTopics = [
    "What are my rights when a product delivered is different from what was shown online?",
    "Can a seller refuse return if the product packaging is opened?",
    "What to do if an e-commerce platform doesn't process my refund within 15 days?",
    "Are dark patterns in checkout illegal in India?",
    "What are the latest CCPA guidelines for e-commerce in 2024?",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    analyze("rights-notifications", query);
  };

  return (
    <>
      <Navbar />
      <FeatureLayout
        title="Consumer Rights Advisor"
        subtitle="Know your rights under Indian consumer protection law"
        icon={<Bell className="w-6 h-6 text-accent" />}
        iconBg="bg-accent/10"
        result={result}
        isLoading={isLoading}
        error={error}
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">Ask about your consumer rights</label>
            <Textarea
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Describe your situation or ask a question about consumer rights in India..."
              rows={4}
              required
            />
          </div>
          <Button variant="hero" type="submit" disabled={isLoading} className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
            {isLoading ? "Researching..." : "Get Legal Guidance"}
          </Button>
        </form>

        <div className="mt-6 pt-4 border-t border-border">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-3">Quick Topics</p>
          <div className="space-y-2">
            {quickTopics.map((topic) => (
              <button
                key={topic}
                type="button"
                onClick={() => { setQuery(topic); analyze("rights-notifications", topic); }}
                className="w-full text-left text-sm px-3 py-2 rounded-lg bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
              >
                {topic}
              </button>
            ))}
          </div>
        </div>
      </FeatureLayout>
    </>
  );
};

export default RightsNotifications;
