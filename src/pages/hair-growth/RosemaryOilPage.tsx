import SEOHead from "@/components/SEOHead";
import ContentPageLayout from "@/components/ContentPageLayout";
import Breadcrumb from "@/components/Breadcrumb";
import FAQSection from "@/components/FAQSection";
import ChatCTA from "@/components/ChatCTA";
import MedicalDisclaimer from "@/components/MedicalDisclaimer";
import RelatedArticles from "@/components/RelatedArticles";
import ArticleNavigation from "@/components/ArticleNavigation";

const RosemaryOilPage = () => {
  const faqs = [
    { question: "How often should I use rosemary oil?", answer: "Most studies used applications 1-2 times daily. Start with 2-3 times weekly to test tolerance, then increase if no irritation occurs." },
    { question: "Can rosemary oil replace minoxidil?", answer: "While one study showed comparable results, more research is needed. Consult a healthcare provider before replacing proven treatments." },
    { question: "How long until I see results?", answer: "Studies showed improvements after 3-6 months of consistent use. Patience and consistency are essential." }
  ];
  const relatedArticles = [
    { title: "Natural Methods for Hair Growth", href: "/hair-growth/natural-methods", description: "Evidence-based natural approaches" },
    { title: "Minoxidil: How It Works", href: "/hair-growth/minoxidil", description: "The proven treatment option" }
  ];

  return (
    <>
      <SEOHead title="Does Rosemary Oil Help Hair Growth? | HairCare.ai" description="Explore the scientific evidence on rosemary oil for hair growth, how to use it safely, and realistic expectations for results." canonicalUrl="https://haircare.ai/hair-growth/rosemary-oil" articleSchema={{ headline: "Does Rosemary Oil Help Hair Growth?", description: "Explore the scientific evidence on rosemary oil for hair growth." }} />
      <ContentPageLayout>
        <div className="max-w-4xl mx-auto">
          <Breadcrumb items={[{ label: "Hair Growth", href: "/hair-growth" }, { label: "Rosemary Oil" }]} />
          <article className="prose prose-lg max-w-none">
            <header className="mb-8">
              <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">Does Rosemary Oil Help Hair Growth?</h1>
              <p className="text-lg text-muted-foreground">Rosemary oil has gained popularity as a natural hair growth treatment. But does the science support the claims?</p>
            </header>
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-8">
              <h2 className="text-lg font-semibold text-foreground mt-0 mb-2">Quick Answer</h2>
              <p className="text-muted-foreground mb-0">Preliminary research suggests rosemary oil may help stimulate hair growth and could be comparable to minoxidil 2% for androgenetic alopecia. It appears to work by improving scalp circulation and reducing DHT effects. However, more large-scale studies are needed to confirm these findings.</p>
            </div>
            <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">The Science Behind Rosemary Oil</h2>
            <p className="text-muted-foreground mb-4">A 2015 study compared rosemary oil to 2% minoxidil in people with androgenetic alopecia over 6 months. Both groups showed similar improvements in hair count, with rosemary oil users experiencing less scalp itching.</p>
            <p className="text-muted-foreground mb-4">Rosemary oil may work through several mechanisms: improving blood circulation to follicles, providing anti-inflammatory effects, and potentially inhibiting 5-alpha reductase (the enzyme that converts testosterone to DHT).</p>
            <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">How to Use Rosemary Oil</h2>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li>Always dilute: Mix 3-5 drops with a tablespoon of carrier oil (jojoba, coconut, or olive)</li>
              <li>Apply directly to scalp and massage for 2-3 minutes</li>
              <li>Leave on for at least 30 minutes or overnight</li>
              <li>Wash out with regular shampoo</li>
              <li>Perform a patch test before first use</li>
            </ul>
            <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">Realistic Expectations</h2>
            <p className="text-muted-foreground mb-4">While promising, rosemary oil is not a guaranteed solution. Results vary between individuals, and it may work best as part of a comprehensive hair care approach. Those with significant hair loss should consult a healthcare provider.</p>
            <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">When to Seek Professional Help</h2>
            <p className="text-muted-foreground mb-4">Consult a dermatologist if you experience scalp irritation, see no improvement after 6 months, or have significant hair loss requiring medical evaluation.</p>
            <div className="bg-accent/30 border border-accent rounded-lg p-6 my-8">
              <p className="text-foreground mb-0"><strong>HairCare AI can help personalise this further based on your hair type, scalp condition, and goals.</strong></p>
            </div>
            <ArticleNavigation previous={{ title: "Minoxidil: How It Works", href: "/hair-growth/minoxidil" }} next={{ title: "Supplements for Hair Growth", href: "/hair-growth/supplements" }} />
          </article>
          <FAQSection faqs={faqs} />
          <ChatCTA />
          <RelatedArticles articles={relatedArticles} />
          <MedicalDisclaimer />
        </div>
      </ContentPageLayout>
    </>
  );
};

export default RosemaryOilPage;
