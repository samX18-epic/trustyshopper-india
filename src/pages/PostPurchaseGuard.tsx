import { useState } from "react";
import { ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import FeatureLayout from "@/components/FeatureLayout";
import Navbar from "@/components/Navbar";
import { useAnalyze } from "@/hooks/useAnalyze";

const PostPurchaseGuard = () => {
  const [platform, setPlatform] = useState("");
  const [orderId, setOrderId] = useState("");
  const [issue, setIssue] = useState("");
  const [issueType, setIssueType] = useState("");
  const { result, isLoading, error, analyze } = useAnalyze();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const input = `Platform: ${platform}\nOrder ID: ${orderId || "Not provided"}\nIssue Type: ${issueType}\n\nIssue Description:\n${issue}`;
    analyze("post-purchase", input);
  };

  return (
    <>
      <Navbar />
      <FeatureLayout
        title="Post-Purchase Guard"
        subtitle="Track accountability and resolve purchase issues"
        icon={<ShieldCheck className="w-6 h-6 text-secondary" />}
        iconBg="bg-secondary/10"
        result={result}
        isLoading={isLoading}
        error={error}
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Platform</label>
              <Input value={platform} onChange={(e) => setPlatform(e.target.value)} placeholder="Amazon.in, Flipkart, Meesho..." required />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Order ID (optional)</label>
              <Input value={orderId} onChange={(e) => setOrderId(e.target.value)} placeholder="Order #..." />
            </div>
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">Issue Type</label>
            <Select value={issueType} onValueChange={setIssueType} required>
              <SelectTrigger><SelectValue placeholder="Select issue type" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="refund-delay">Refund Delay</SelectItem>
                <SelectItem value="wrong-product">Wrong Product Received</SelectItem>
                <SelectItem value="defective">Defective Product</SelectItem>
                <SelectItem value="return-rejected">Return Rejected</SelectItem>
                <SelectItem value="seller-unresponsive">Seller Unresponsive</SelectItem>
                <SelectItem value="policy-changed">Policy Changed After Purchase</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">Describe Your Issue</label>
            <Textarea value={issue} onChange={(e) => setIssue(e.target.value)} placeholder="What happened? Include dates, amounts, and seller responses..." rows={4} required />
          </div>
          <Button variant="hero" type="submit" disabled={isLoading} className="w-full">
            {isLoading ? "Analyzing..." : "Get Resolution Help"}
          </Button>
        </form>
      </FeatureLayout>
    </>
  );
};

export default PostPurchaseGuard;
