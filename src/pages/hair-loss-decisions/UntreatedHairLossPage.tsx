import SEOHead from "@/components/SEOHead";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleNavigation from "@/components/ArticleNavigation";
import RelatedArticles from "@/components/RelatedArticles";
import ContentPageLayout from "@/components/ContentPageLayout";

const relatedArticles = [
  { title: "Should I Treat or Wait?", href: "/hair-loss-decisions/treat-or-wait", description: "Deciding between action and observation." },
  { title: "Is Early Hair Loss Reversible?", href: "/hair-loss-decisions/early-reversibility", description: "The potential for reversal." },
  { title: "Male Pattern Baldness Explained", href: "/mens-hair/male-pattern-baldness", description: "Understanding progressive hair loss." }
];

const UntreatedHairLossPage = () => {
  return (
    <ContentPageLayout>
      <SEOHead title="What Happens If Hair Loss Is Left Untreated | HairCare.ai" description="Understand the natural progression of untreated hair loss. Learn what to expect if you choose not to treat different types of hair loss." canonicalUrl="https://haircare.ai/hair-loss-decisions/untreated-hair-loss" />
      <article className="max-w-4xl mx-auto">
        <Breadcrumb items={[{ label: "Hair Loss Decisions", href: "/hair-loss-decisions" }, { label: "Untreated Hair Loss" }]} />
        <header className="mb-8"><h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">What Happens If Hair Loss Is Left Untreated</h1><p className="text-lg text-muted-foreground">Understanding natural progression of different conditions.</p></header>
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-10"><h2 className="font-heading text-xl font-semibold text-foreground mb-3">Quick Answer</h2><p className="text-foreground">Outcomes depend on the type of hair loss. Temporary conditions often resolve naturally. Pattern hair loss continues to progress, eventually reaching its genetic endpoint. Scarring conditions cause permanent, ongoing follicle destruction. Inflammatory conditions may cause increasing damage over time if untreated.</p></div>
        <section className="mb-10"><h2 className="font-heading text-2xl font-semibold text-foreground mb-4">Progression by Condition Type</h2><div className="space-y-4"><div className="p-4 rounded-lg bg-card border border-border"><h3 className="font-semibold text-foreground mb-2">Telogen Effluvium (Temporary)</h3><p className="text-muted-foreground">Usually resolves within 6-12 months after the trigger is removed, even without treatment. Hair returns to normal density in most cases. Treatment accelerates recovery but is not always necessary.</p></div><div className="p-4 rounded-lg bg-card border border-border"><h3 className="font-semibold text-foreground mb-2">Androgenetic Alopecia (Pattern Hair Loss)</h3><p className="text-muted-foreground">Continues to progress over years to decades. Rate varies individually based on genetics. Eventually reaches a stable endpoint where remaining hair is resistant. Without treatment, loss will continue until reaching genetic potential.</p></div><div className="p-4 rounded-lg bg-card border border-border"><h3 className="font-semibold text-foreground mb-2">Scarring Alopecias</h3><p className="text-muted-foreground">Without treatment, inflammation continues destroying follicles permanently. Early treatment is critical to preserve remaining hair. Affected areas cannot regrow hair once scarred.</p></div><div className="p-4 rounded-lg bg-card border border-border"><h3 className="font-semibold text-foreground mb-2">Alopecia Areata</h3><p className="text-muted-foreground">Unpredictable course. May resolve spontaneously or progress to larger areas. Some experience cycles of loss and regrowth. Treatment may help but cannot prevent all recurrences.</p></div></div></section>
        <section className="mb-10"><h2 className="font-heading text-2xl font-semibold text-foreground mb-4">Considerations for Choosing Not to Treat</h2><ul className="list-disc list-inside space-y-2 text-foreground"><li>Some people accept natural progression as part of aging</li><li>Treatment commitment and costs may not suit everyone</li><li>Side effect concerns may outweigh benefits for some</li><li>Hair restoration options remain available later</li><li>Personal comfort with appearance matters most</li></ul></section>
        <section className="mb-10"><h2 className="font-heading text-2xl font-semibold text-foreground mb-4">When Not Treating Is Risky</h2><ul className="list-disc list-inside space-y-2 text-foreground"><li>Scarring conditions that cause permanent damage</li><li>Conditions indicating underlying health issues</li><li>Rapidly progressing hair loss of unknown cause</li><li>Hair loss causing significant psychological distress</li></ul></section>
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-10"><p className="text-foreground">HairCare AI can help personalise this further based on your hair type, scalp condition, and goals.</p></div>
        <ArticleNavigation previous={{ href: "/hair-loss-decisions/choosing-treatment", title: "Choosing the Right Treatment" }} next={{ href: "/hair-loss-decisions", title: "Hair Loss Decisions Overview" }} />
        <RelatedArticles articles={relatedArticles} />
      </article>
    </ContentPageLayout>
  );
};

export default UntreatedHairLossPage;
