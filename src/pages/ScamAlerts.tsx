import { useState } from "react";
import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import FeatureLayout from "@/components/FeatureLayout";
import Navbar from "@/components/Navbar";
import { useAnalyze } from "@/hooks/useAnalyze";

const ScamAlerts = () => {
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");
  const { result, isLoading, error, analyze } = useAnalyze();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const input = `URL/Link: ${url || "Not provided"}\n\nDescription of suspicious listing/offer/message:\n${description}`;
    analyze("scam-alerts", input);
  };

  return (
    <>
      <Navbar />
      <FeatureLayout
        title="Scam Alerts"
        subtitle="Detect scams, fake offers, and phishing attempts"
        icon={<AlertTriangle className="w-6 h-6 text-destructive" />}
        iconBg="bg-destructive/10"
        result={result}
        isLoading={isLoading}
        error={error}
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">Suspicious URL (optional)</label>
            <Input value={url} onChange={(e) => setUrl(e.target.value)} placeholder="Paste the suspicious link here..." />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">Describe the offer/listing/message</label>
            <Textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe what you received — a WhatsApp message, too-good-to-be-true deal, suspicious seller, fake website..."
              rows={5}
              required
            />
          </div>
          <Button variant="hero" type="submit" disabled={isLoading} className="w-full bg-destructive text-destructive-foreground hover:bg-destructive/90">
            {isLoading ? "Scanning..." : "Check for Scam"}
          </Button>
        </form>
      </FeatureLayout>
    </>
  );
};

export default ScamAlerts;
