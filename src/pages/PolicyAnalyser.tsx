import { useState } from "react";
import { FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import FeatureLayout from "@/components/FeatureLayout";
import Navbar from "@/components/Navbar";
import { useAnalyze } from "@/hooks/useAnalyze";

const PolicyAnalyser = () => {
  const [url, setUrl] = useState("");
  const [policyText, setPolicyText] = useState("");
  const { result, isLoading, error, analyze } = useAnalyze();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const input = url
      ? `Product/Policy URL: ${url}\n\nPolicy text (if provided): ${policyText || "Not provided"}`
      : `Policy text to analyze:\n${policyText}`;
    analyze("policy-analyser", input);
  };

  return (
    <>
      <Navbar />
      <FeatureLayout
        title="Policy Analyser"
        subtitle="Decode complex return & refund policies instantly"
        icon={<FileText className="w-6 h-6 text-accent" />}
        iconBg="bg-accent/10"
        result={result}
        isLoading={isLoading}
        error={error}
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">Product or Store URL</label>
            <Input
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://www.amazon.in/dp/... or store policy page URL"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">Or paste policy text directly</label>
            <Textarea
              value={policyText}
              onChange={(e) => setPolicyText(e.target.value)}
              placeholder="Paste the return/refund policy text here..."
              rows={5}
            />
          </div>
          <Button variant="hero" type="submit" disabled={isLoading || (!url && !policyText)} className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
            {isLoading ? "Analyzing..." : "Analyse Policy"}
          </Button>
        </form>
      </FeatureLayout>
    </>
  );
};

export default PolicyAnalyser;
