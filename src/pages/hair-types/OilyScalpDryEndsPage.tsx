import SEOHead from "@/components/SEOHead";
import ContentPageLayout from "@/components/ContentPageLayout";
import Breadcrumb from "@/components/Breadcrumb";
import FAQSection from "@/components/FAQSection";
import ChatCTA from "@/components/ChatCTA";
import MedicalDisclaimer from "@/components/MedicalDisclaimer";
import ArticleNavigation from "@/components/ArticleNavigation";

const OilyScalpDryEndsPage = () => {
  const faqs = [
    { question: "Why is my scalp oily but my ends are dry?", answer: "Sebum produced at the scalp cannot travel down long or textured hair efficiently. Meanwhile, ends are oldest and most exposed to damage. Over-washing to address oiliness strips ends further. This creates the oily-roots-dry-ends pattern." },
    { question: "Should I wash more or less often?", answer: "Focus on washing the scalp while protecting ends. Wash when your scalp needs it, but apply conditioner only to mid-lengths and ends. Pre-treatment with oil on ends before washing can also help." }
  ];

  const relatedArticles = [
    { title: "Best Care for Straight Hair", href: "/hair-types/straight-hair-care" },
    { title: "How Often Should You Wash Your Hair?", href: "/hair-routines/how-often-wash" }
  ];

  return (
    <>
      <SEOHead title="Oily Scalp but Dry Ends: Causes and Solutions | HairCare.ai" description="Learn why you might have an oily scalp but dry ends simultaneously, and discover the best approach to caring for this common combination hair concern." canonicalUrl="https://haircare.ai/hair-types/oily-scalp-dry-ends" articleSchema={{ headline: "Oily Scalp but Dry Ends", description: "Managing the combination of oily roots and dry ends.", datePublished: "2024-12-28", dateModified: "2024-12-28" }} faqSchema={faqs} />
      <ContentPageLayout>
        <article className="max-w-4xl mx-auto" itemScope itemType="https://schema.org/Article">
          <Breadcrumb items={[{ label: "Hair Types", href: "/hair-types" }, { label: "Oily Scalp Dry Ends" }]} />
          <header className="mb-8"><h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4" itemProp="headline">Oily Scalp but Dry Ends</h1><p className="text-lg text-muted-foreground">Managing this common combination effectively.</p></header>
          <section className="prose prose-lg max-w-none mb-10"><p className="text-foreground leading-relaxed">Having an oily scalp while your ends are dry and damaged is one of the most frustrating hair concerns. Products for oily hair dry out ends further; products for dry hair make roots greasy. The solution lies in treating different parts of your hair differently rather than using a one-size-fits-all approach.</p></section>
          <section className="mb-10 p-6 rounded-xl bg-primary/5 border border-primary/20"><h2 className="font-heading text-xl font-semibold text-foreground mb-3">Quick Answer</h2><p className="text-foreground leading-relaxed">Treat your scalp and ends as separate zones. Shampoo the scalp thoroughly but avoid scrubbing ends. Apply conditioner only to mid-lengths and ends, never roots. Consider pre-wash oil treatments on ends, lighter leave-ins, and regular trims to remove damaged portions.</p></section>
          <section className="mb-10"><h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">Why This Happens</h2><div className="space-y-4"><div className="p-4 rounded-lg bg-card border border-border"><h3 className="font-semibold text-foreground mb-2">Sebum Distribution</h3><p className="text-muted-foreground">Natural oils are produced at the scalp. In straight, short hair, they travel down easily. In long, curly, or damaged hair, sebum cannot reach the ends, leaving them dry while roots become oily.</p></div><div className="p-4 rounded-lg bg-card border border-border"><h3 className="font-semibold text-foreground mb-2">Over-Washing</h3><p className="text-muted-foreground">Washing frequently to combat oily roots strips moisture from ends. The scalp may also produce more oil in response to being stripped, worsening the cycle.</p></div><div className="p-4 rounded-lg bg-card border border-border"><h3 className="font-semibold text-foreground mb-2">Damaged Ends</h3><p className="text-muted-foreground">Ends are the oldest part of your hair and have endured the most heat, environmental exposure, and mechanical stress. This damage makes them porous and unable to retain moisture.</p></div></div></section>
          <section className="mb-10"><h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">How to Manage This Combination</h2><div className="space-y-4"><div className="p-4 rounded-lg bg-card border border-border"><h3 className="font-semibold text-foreground mb-2">Zone-Based Washing</h3><p className="text-muted-foreground">Apply shampoo only to the scalp. Massage thoroughly, then let suds rinse through lengths without scrubbing. This cleanses roots without stripping ends.</p></div><div className="p-4 rounded-lg bg-card border border-border"><h3 className="font-semibold text-foreground mb-2">Targeted Conditioning</h3><p className="text-muted-foreground">Apply conditioner from mid-length to ends only. Never let conditioner touch your scalp—this adds weight and oil to already-greasy roots.</p></div><div className="p-4 rounded-lg bg-card border border-border"><h3 className="font-semibold text-foreground mb-2">Pre-Wash Oil Treatment</h3><p className="text-muted-foreground">Before shampooing, apply a light oil to ends. This protects them from the stripping effect of shampoo while still allowing you to cleanse your scalp properly.</p></div><div className="p-4 rounded-lg bg-card border border-border"><h3 className="font-semibold text-foreground mb-2">Regular Trims</h3><p className="text-muted-foreground">Remove the driest, most damaged ends regularly. This prevents splits from travelling up and keeps ends healthier overall.</p></div></div></section>
          <section className="mb-10 p-6 rounded-xl bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20"><p className="text-foreground leading-relaxed">HairCare AI can help personalise this further based on your hair type, scalp condition, and goals.</p></section>
          <FAQSection faqs={faqs} />
          <ArticleNavigation previous={{ title: "Frizzy Hair: Causes and Solutions", href: "/hair-types/frizzy-hair" }} next={{ title: "Aging Hair: What Changes Over Time", href: "/hair-types/aging-hair" }} relatedArticles={relatedArticles} />
          <ChatCTA />
          <MedicalDisclaimer />
        </article>
      </ContentPageLayout>
    </>
  );
};

export default OilyScalpDryEndsPage;
