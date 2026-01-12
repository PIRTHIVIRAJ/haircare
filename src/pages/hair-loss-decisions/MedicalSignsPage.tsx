import SEOHead from "@/components/SEOHead";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleNavigation from "@/components/ArticleNavigation";
import RelatedArticles from "@/components/RelatedArticles";
import ContentPageLayout from "@/components/ContentPageLayout";

const faqItems = [
  { question: "What signs indicate hair loss needs medical treatment?", answer: "Patterned thinning at temples or crown, rapid progression, scalp symptoms like redness or pain, patchy bald spots, and hair loss accompanied by other health symptoms all suggest medical evaluation is warranted." },
  { question: "Can a doctor help with hair loss?", answer: "Yes, dermatologists specialise in hair and scalp conditions. They can diagnose the type of hair loss, identify underlying causes, and prescribe treatments not available over the counter." }
];

const relatedArticles = [
  { title: "Red Flags in Hair Loss", href: "/hair-loss-decisions/red-flags", description: "Warning signs requiring urgent attention." },
  { title: "When to See a Doctor", href: "/hair-loss/when-to-see-a-doctor", description: "Signs that warrant professional evaluation." },
  { title: "How to Diagnose Hair Loss", href: "/hair-loss/diagnosis", description: "Methods doctors use to identify causes." }
];

const MedicalSignsPage = () => {
  return (
    <ContentPageLayout>
      <SEOHead title="Signs Your Hair Loss May Need Medical Treatment | HairCare.ai" description="Learn which signs indicate your hair loss may require professional medical treatment rather than home remedies or lifestyle changes." canonicalUrl="https://haircare.ai/hair-loss-decisions/medical-signs" articleSchema={{ headline: "Signs Your Hair Loss May Need Medical Treatment", description: "Recognising when professional intervention is necessary.", datePublished: "2025-06-28", dateModified: "2025-06-28" }} faqSchema={faqItems} />
      <article className="max-w-4xl mx-auto">
        <Breadcrumb items={[{ label: "Hair Loss Decisions", href: "/hair-loss-decisions" }, { label: "Medical Signs" }]} />
        <header className="mb-8"><h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">Signs Your Hair Loss May Need Medical Treatment</h1><p className="text-lg text-muted-foreground">Recognising when professional help is needed.</p></header>
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-10"><h2 className="font-heading text-xl font-semibold text-foreground mb-3">Quick Answer</h2><p className="text-foreground">Medical treatment is likely needed when hair loss follows a pattern, progresses rapidly, involves scalp symptoms, creates bald patches, or accompanies other health changes. A dermatologist can provide accurate diagnosis and prescription treatments unavailable over the counter.</p></div>
        <section className="mb-10"><h2 className="font-heading text-2xl font-semibold text-foreground mb-4">Key Indicators for Medical Evaluation</h2><ul className="list-disc list-inside space-y-2 text-foreground"><li>Thinning following a pattern at hairline, temples, or crown</li><li>Visible scalp through hair that was not previously visible</li><li>Rapid progression over weeks or months</li><li>Patchy bald spots appearing suddenly</li><li>Scalp redness, scaling, itching, or pain</li><li>Hair loss with other symptoms like fatigue or weight changes</li><li>Family history of early or significant hair loss</li><li>No improvement after addressing obvious triggers</li></ul></section>
        <section className="mb-10"><h2 className="font-heading text-2xl font-semibold text-foreground mb-4">Conditions Requiring Medical Treatment</h2><div className="space-y-4"><div className="p-4 rounded-lg bg-card border border-border"><h3 className="font-semibold text-foreground mb-2">Androgenetic Alopecia</h3><p className="text-muted-foreground">Pattern hair loss benefits from prescription treatments like finasteride or stronger minoxidil formulations that require medical supervision.</p></div><div className="p-4 rounded-lg bg-card border border-border"><h3 className="font-semibold text-foreground mb-2">Scarring Alopecias</h3><p className="text-muted-foreground">These inflammatory conditions destroy follicles permanently and require prompt medical treatment to halt progression.</p></div><div className="p-4 rounded-lg bg-card border border-border"><h3 className="font-semibold text-foreground mb-2">Alopecia Areata</h3><p className="text-muted-foreground">Autoimmune hair loss may benefit from prescription treatments including corticosteroids or immunotherapy.</p></div><div className="p-4 rounded-lg bg-card border border-border"><h3 className="font-semibold text-foreground mb-2">Underlying Medical Conditions</h3><p className="text-muted-foreground">Thyroid disorders, hormonal imbalances, and autoimmune diseases require treatment of the root cause.</p></div></div></section>
        <section className="mb-10"><h2 className="font-heading text-2xl font-semibold text-foreground mb-4">Benefits of Early Medical Intervention</h2><ul className="list-disc list-inside space-y-2 text-foreground"><li>More hair preserved before further loss occurs</li><li>Access to prescription treatments with proven efficacy</li><li>Accurate diagnosis prevents wasted time and money</li><li>Underlying conditions identified and treated</li><li>Better long-term outcomes than delayed treatment</li></ul></section>
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-10"><p className="text-foreground">HairCare AI can help personalise this further based on your hair type, scalp condition, and goals.</p></div>
        <ArticleNavigation previous={{ href: "/hair-loss-decisions/lifestyle-only", title: "When Lifestyle Changes Are Enough" }} next={{ href: "/hair-loss-decisions/red-flags", title: "Red Flags in Hair Loss" }} />
        <RelatedArticles articles={relatedArticles} />
      </article>
    </ContentPageLayout>
  );
};

export default MedicalSignsPage;
