import SEOHead from "@/components/SEOHead";
import ContentPageLayout from "@/components/ContentPageLayout";
import Breadcrumb from "@/components/Breadcrumb";
import FAQSection from "@/components/FAQSection";
import ChatCTA from "@/components/ChatCTA";
import MedicalDisclaimer from "@/components/MedicalDisclaimer";
import RelatedArticles from "@/components/RelatedArticles";
import ArticleNavigation from "@/components/ArticleNavigation";

const RegrowthTimelinePage = () => {
  const faqs = [
    { question: "How long does hair take to grow back after telogen effluvium?", answer: "Hair typically begins regrowing within 3-6 months after the trigger is resolved, with full recovery taking 6-12 months." },
    { question: "When will I see results from minoxidil?", answer: "Initial signs appear around 3-4 months, with maximum results at 12 months of consistent use." }
  ];
  const relatedArticles = [
    { title: "Signs Your Hair Is Growing Back", href: "/hair-growth/signs-of-regrowth", description: "Recognising early regrowth" },
    { title: "Can You Really Regrow Lost Hair?", href: "/hair-growth/can-hair-regrow", description: "Understanding regrowth possibilities" }
  ];

  return (
    <>
      <SEOHead title="Hair Regrowth Timelines: What to Expect | HairCare.ai" description="Understand realistic timelines for hair regrowth based on different causes of hair loss and treatment approaches." canonicalUrl="https://haircare.ai/hair-growth/regrowth-timeline" articleSchema={{ headline: "Hair Regrowth Timelines", description: "Realistic timelines for hair regrowth." }} />
      <ContentPageLayout>
        <div className="max-w-4xl mx-auto">
          <Breadcrumb items={[{ label: "Hair Growth", href: "/hair-growth" }, { label: "Regrowth Timeline" }]} />
          <article className="prose prose-lg max-w-none">
            <header className="mb-8">
              <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">Hair Regrowth Timelines</h1>
              <p className="text-lg text-muted-foreground">Understanding how long regrowth takes helps set realistic expectations and maintain consistency with treatment.</p>
            </header>
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-8">
              <h2 className="text-lg font-semibold text-foreground mt-0 mb-2">Quick Answer</h2>
              <p className="text-muted-foreground mb-0">Hair regrowth timelines depend on the cause of loss. Telogen effluvium typically resolves in 6-12 months. Treatment for androgenetic alopecia shows results in 3-6 months, with full effects at 12 months. Alopecia areata varies widely—some regrow within months, others take longer.</p>
            </div>
            <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">Timelines by Condition</h2>
            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">Telogen Effluvium</h3>
            <p className="text-muted-foreground mb-4">Once the trigger is addressed, shedding typically slows within 2-3 months. New growth appears around 3-6 months, with full recovery in 6-12 months.</p>
            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">Androgenetic Alopecia</h3>
            <p className="text-muted-foreground mb-4">With minoxidil or finasteride, initial changes appear at 3-4 months. Significant improvement typically occurs between 6-12 months. Continued treatment is needed to maintain results.</p>
            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">Alopecia Areata</h3>
            <p className="text-muted-foreground mb-4">Highly variable. Many experience spontaneous regrowth within 6-12 months. Some cases require treatment and may take longer.</p>
            <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">Why Patience Matters</h2>
            <p className="text-muted-foreground mb-4">Hair grows slowly—about 1 cm per month. Even when follicles are recovering, it takes months for new growth to become visible. Consistency with treatment and patience are essential.</p>
            <div className="bg-accent/30 border border-accent rounded-lg p-6 my-8">
              <p className="text-foreground mb-0"><strong>HairCare AI can help personalise this further based on your hair type, scalp condition, and goals.</strong></p>
            </div>
            <ArticleNavigation previous={{ title: "Supplements for Hair Growth", href: "/hair-growth/supplements" }} next={{ title: "Signs Your Hair Is Growing Back", href: "/hair-growth/signs-of-regrowth" }} />
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

export default RegrowthTimelinePage;
