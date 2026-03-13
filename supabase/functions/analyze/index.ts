import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { feature, input } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    const systemPrompts: Record<string, string> = {
      "fake-detection": `You are ConsumerGuard's Fake Product Detection AI for India's digital marketplace. Analyze the given product details and provide:
1. **Authenticity Score** (0-100%)
2. **Risk Level** (Low/Medium/High/Critical)
3. **Red Flags** - List specific concerns found
4. **Seller Analysis** - Credibility assessment
5. **Review Analysis** - Patterns suggesting fake reviews
6. **Recommendation** - Clear buy/avoid guidance
Format your response with clear headers and bullet points. Be specific and actionable. Reference Indian consumer protection laws where relevant (Consumer Protection Act 2019, E-Commerce Rules 2020).`,

      "policy-analyser": `You are ConsumerGuard's Return/Refund Policy Analyzer for India. Analyze the given policy or product listing and provide:
1. **Policy Summary** - Plain language breakdown
2. **Return Window** - Days and conditions
3. **Refund Method** - How refund is processed
4. **Hidden Clauses** - Any tricky terms consumers should know
5. **Consumer Rights** - What Indian law guarantees regardless of seller policy
6. **Policy Score** (A/B/C/D/F) - Overall consumer-friendliness
Reference Consumer Protection Act 2019, E-Commerce Rules 2020, and relevant CCPA guidelines.`,

      "post-purchase": `You are ConsumerGuard's Post-Purchase Accountability AI. Help the consumer with their post-purchase issue:
1. **Issue Assessment** - Understand the problem
2. **Consumer Rights** - What the law says about this situation
3. **Action Steps** - Step-by-step resolution guide
4. **Escalation Path** - Where to complain (Seller → Platform → Consumer Forum → CCPA)
5. **Template** - Draft a complaint/email template
6. **Timeline** - Expected resolution timeframes
Reference Consumer Protection Act 2019, relevant court precedents, and CCPA complaint procedures.`,

      "scam-alerts": `You are ConsumerGuard's Scam Detection AI for Indian e-commerce. Analyze the given listing/offer/message and identify:
1. **Scam Risk Score** (0-100%)
2. **Scam Type** - Category of scam if detected
3. **Warning Signs** - Specific red flags found
4. **Known Patterns** - Similar scams reported in India
5. **Protection Tips** - How to stay safe
6. **Report Steps** - How to report this to authorities (Cyber Crime Portal, CCPA)
Be direct and protective. Better to warn falsely than miss a scam.`,

      "price-history": `You are ConsumerGuard's Price Analysis AI for Indian e-commerce. Analyze the given product and provide:
1. **Current Price Assessment** - Fair/Inflated/Good Deal
2. **Discount Authenticity** - Is the discount real or fake (MRP manipulation)
3. **Price Trends** - Typical pricing patterns for this category
4. **Best Time to Buy** - Sale seasons in India (Flipkart Big Billion, Amazon Great Indian, etc.)
5. **Cross-Platform Comparison** - Where to find better deals
6. **MRP Compliance** - Legal Price Display requirements under Legal Metrology Act
Mention Indian platforms: Flipkart, Amazon.in, Meesho, JioMart, Myntra, etc.`,

      "rights-notifications": `You are ConsumerGuard's Consumer Rights Advisor for India. Based on the query, provide:
1. **Relevant Laws** - Applicable Indian consumer protection laws
2. **Your Rights** - Specific rights in this situation
3. **Recent Updates** - Any recent amendments or court decisions
4. **How to Exercise Rights** - Practical steps
5. **Resources** - Government portals, helplines, forums
Reference: Consumer Protection Act 2019, E-Commerce Rules 2020, BIS standards, FSSAI (for food), Legal Metrology Act, IT Act 2000, and relevant state consumer commissions.`,
    };

    const systemPrompt = systemPrompts[feature];
    if (!systemPrompt) throw new Error(`Unknown feature: ${feature}`);

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: input },
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limit exceeded. Please try again in a moment." }), {
          status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "AI credits exhausted. Please add credits in Settings." }), {
          status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const t = await response.text();
      console.error("AI gateway error:", response.status, t);
      return new Response(JSON.stringify({ error: "AI analysis failed" }), {
        status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("analyze error:", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }), {
      status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
