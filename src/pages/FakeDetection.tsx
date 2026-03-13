import { useState } from "react";
import { ScanSearch } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import FeatureLayout from "@/components/FeatureLayout";
import Navbar from "@/components/Navbar";
import { useAnalyze } from "@/hooks/useAnalyze";

const FakeDetection = () => {
  const [url, setUrl] = useState("");
  const [details, setDetails] = useState("");
  const { result, isLoading, error, analyze } = useAnalyze();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const input = `Product URL: ${url}\n\nAdditional Details: ${details || "None provided"}`;
    analyze("fake-detection", input);
  };

  return (
    <>
      <Navbar />
      <FeatureLayout
        title="Fake Product Detection"
        subtitle="AI-powered authenticity verification for Indian marketplaces"
        icon={<ScanSearch className="w-6 h-6 text-emerald" />}
        iconBg="bg-emerald/10"
        result={result}
        isLoading={isLoading}
        error={error}
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">Product URL</label>
            <Input
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://www.amazon.in/dp/... or https://www.flipkart.com/..."
              required
            />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">Additional Details (optional)</label>
            <Textarea
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              placeholder="Product name, seller name, price, any concerns..."
              rows={3}
            />
          </div>
          <Button variant="hero" type="submit" disabled={isLoading} className="w-full">
            {isLoading ? "Analyzing..." : "Scan for Authenticity"}
          </Button>
        </form>
      </FeatureLayout>
    </>
  );
};

export default FakeDetection;
