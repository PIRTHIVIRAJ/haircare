import SEOHead from "@/components/SEOHead";
import ContentPageLayout from "@/components/ContentPageLayout";
import Breadcrumb from "@/components/Breadcrumb";
import FAQSection from "@/components/FAQSection";
import ChatCTA from "@/components/ChatCTA";
import MedicalDisclaimer from "@/components/MedicalDisclaimer";
import RelatedArticles from "@/components/RelatedArticles";
import ArticleNavigation from "@/components/ArticleNavigation";

const SupplementsPage = () => {
  const faqs = [
    { question: "Do biotin supplements really work?", answer: "Biotin helps if you have a deficiency, which is rare. For those with adequate biotin intake, supplements are unlikely to provide additional hair growth benefits." },
    { question: "Can supplements cause side effects?", answer: "Yes. Iron can cause digestive issues, excess vitamin A can contribute to hair loss, and high-dose biotin can interfere with lab tests. Always follow recommended doses." },
    { question: "How long do supplements take to work?", answer: "If addressing a deficiency, improvements may be visible in 3-6 months as new hair grows. Supplements do not speed up growth beyond normal rates." }
  ];
  const relatedArticles = [
    { title: "Natural Methods for Hair Growth", href: "/hair-growth/natural-methods", description: "Holistic approaches to hair health" },
    { title: "Hair Growth Cycle Explained", href: "/hair-growth/growth-cycle", description: "Understanding how hair develops" }
  ];

  return (
    <>
      <SEOHead title="Supplements for Hair Growth: What Works? | HairCare.ai" description="Learn which supplements may support hair growth, the science behind common ingredients, and when supplementation makes sense." canonicalUrl="https://haircare.ai/hair-growth/supplements" articleSchema={{ headline: "Supplements for Hair Growth", description: "Learn which supplements may support hair growth and when they help." }} />
      <ContentPageLayout>
        <div className="max-w-4xl mx-auto">
          <Breadcrumb items={[{ label: "Hair Growth", href: "/hair-growth" }, { label: "Supplements" }]} />
          <article className="prose prose-lg max-w-none">
            <header className="mb-8">
              <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">Supplements for Hair Growth</h1>
              <p className="text-lg text-muted-foreground">The supplement market is filled with products claiming to boost hair growth. Understanding which nutrients actually matter helps you make informed choices.</p>
            </header>
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-8">
              <h2 className="text-lg font-semibold text-foreground mt-0 mb-2">Quick Answer</h2>
              <p className="text-muted-foreground mb-0">Supplements are most effective when addressing a nutritional deficiency. Key nutrients for hair include iron, zinc, biotin, vitamin D, and omega-3 fatty acids. For those with balanced diets, supplements typically offer limited additional benefit. Testing for deficiencies before supplementing is advisable.</p>
            </div>
            <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">Key Nutrients for Hair Health</h2>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li><strong>Iron:</strong> Essential for oxygen delivery to follicles. Deficiency is a common cause of hair shedding, especially in women.</li>
              <li><strong>Zinc:</strong> Supports follicle health and oil gland function. Deficiency can cause hair loss.</li>
              <li><strong>Biotin:</strong> Involved in keratin production. Deficiency is rare but causes brittle hair and loss.</li>
              <li><strong>Vitamin D:</strong> May influence the hair cycle. Low levels are associated with alopecia.</li>
              <li><strong>Omega-3s:</strong> Support scalp health and may reduce inflammation.</li>
            </ul>
            <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">When Supplements Help</h2>
            <p className="text-muted-foreground mb-4">Supplements are beneficial when a deficiency exists. If blood tests reveal low iron, vitamin D, or other nutrients, correcting this can restore normal hair growth. However, taking supplements when levels are already adequate rarely provides additional benefit.</p>
            <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">Common Myths</h2>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li><strong>"More biotin means faster growth":</strong> Excess biotin is excreted; mega-doses do not enhance results.</li>
              <li><strong>"Hair vitamins work for everyone":</strong> Benefits depend on individual nutritional status.</li>
            </ul>
            <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">When to Seek Professional Help</h2>
            <p className="text-muted-foreground mb-4">Consult a healthcare provider before starting supplements, especially if you have health conditions or take medications. Blood testing can identify specific deficiencies.</p>
            <div className="bg-accent/30 border border-accent rounded-lg p-6 my-8">
              <p className="text-foreground mb-0"><strong>HairCare AI can help personalise this further based on your hair type, scalp condition, and goals.</strong></p>
            </div>
            <ArticleNavigation previous={{ title: "Does Rosemary Oil Help?", href: "/hair-growth/rosemary-oil" }} next={{ title: "Hair Regrowth Timelines", href: "/hair-growth/regrowth-timeline" }} />
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

export default SupplementsPage;
