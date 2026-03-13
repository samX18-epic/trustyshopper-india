import { useState } from "react";
import { BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import FeatureLayout from "@/components/FeatureLayout";
import Navbar from "@/components/Navbar";
import { useAnalyze } from "@/hooks/useAnalyze";

const PriceHistory = () => {
  const [url, setUrl] = useState("");
  const [details, setDetails] = useState("");
  const { result, isLoading, error, analyze } = useAnalyze();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const input = `Product URL: ${url}\n\nProduct details: ${details || "Not provided"}\n\nPlease analyze the pricing, check if discounts are genuine, suggest best time to buy, and compare across Indian platforms.`;
    analyze("price-history", input);
  };

  return (
    <>
      <Navbar />
      <FeatureLayout
        title="Price History & Analysis"
        subtitle="Track prices and spot fake discounts across marketplaces"
        icon={<BarChart3 className="w-6 h-6 text-emerald" />}
        iconBg="bg-emerald/10"
        result={result}
        isLoading={isLoading}
        error={error}
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">Product URL</label>
            <Input value={url} onChange={(e) => setUrl(e.target.value)} placeholder="https://www.amazon.in/dp/... or https://www.flipkart.com/..." required />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">Product Details (optional)</label>
            <Textarea
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              placeholder="Product name, listed price, claimed discount percentage..."
              rows={3}
            />
          </div>
          <Button variant="hero" type="submit" disabled={isLoading} className="w-full">
            {isLoading ? "Analyzing..." : "Analyse Price"}
          </Button>
        </form>
      </FeatureLayout>
    </>
  );
};

export default PriceHistory;
