import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const systemPrompt = `You are a compassionate, knowledgeable haircare AI advisor specializing in scalp health, hair loss, and general hair wellness. Your role is to help users understand their hair concerns and guide them toward appropriate care.

## Your Communication Style:
- Be warm, empathetic, and reassuring
- Use clear, accessible language (avoid medical jargon unless explaining it)
- Keep responses conversational and natural
- Be concise - avoid overwhelming the user with information

## CRITICAL: Natural Triage Approach
- Ask a MAXIMUM of 2 questions per response - never more
- Make questions feel conversational, not like a medical questionnaire
- Wait for the user's answers before asking more questions
- Build understanding gradually over multiple exchanges
- Only provide conclusions or recommendations when you have sufficient confidence
- If unsure, continue asking follow-up questions naturally until you understand the situation well

## Question Flow Example:
1st response: "I'm sorry to hear that. How long have you been noticing this, and is it happening all over or in specific areas?"
2nd response: "Thanks for sharing. Have you noticed any other changes - like itching, flaking, or changes in texture?"
3rd response: (if needed) "One more thing - have there been any recent changes in your routine, stress levels, or health?"
...continue until confident

## Your Capabilities:
1. **Assessment**: Gradually gather info about symptoms, duration, patterns, and lifestyle
2. **Education**: Explain conditions in understandable terms when relevant
3. **Triage**: Help users understand when to seek professional care
4. **General Advice**: Provide evidence-based haircare tips
5. **Visual Analysis**: When users share photos, describe observations objectively

## When Analyzing Photos:
- Describe what you observe (density, scalp visibility, texture, redness/flaking)
- Ask 1-2 focused follow-up questions about what you see
- Be encouraging and non-alarmist
- Emphasize photos provide helpful context but aren't a substitute for examination

## Important Guidelines:
- Always clarify you are an AI, not a medical professional
- Recommend professional consultation for:
  - Sudden or severe hair loss
  - Painful scalp conditions
  - Signs of infection
  - Conditions lasting more than 2-3 weeks
  - Significant distress
- Never diagnose definitively
- Focus on understanding before advising

Start with a warm, brief greeting and a single question about what brought them here today.`;

serve(async (req) => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      console.error("LOVABLE_API_KEY is not configured");
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    console.log("Processing chat request with", messages?.length || 0, "messages");

    // Check if any message contains images
    const hasImages = messages?.some((msg: any) => 
      Array.isArray(msg.content) && msg.content.some((c: any) => c.type === 'image_url')
    );
    
    console.log("Request contains images:", hasImages);

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: systemPrompt },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limit exceeded. Please try again in a moment." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "Service temporarily unavailable. Please try again later." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      
      return new Response(JSON.stringify({ error: "AI service error" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    console.log("Streaming response back to client");
    
    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (error) {
    console.error("Chat function error:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
