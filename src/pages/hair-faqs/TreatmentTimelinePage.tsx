import SEOHead from "@/components/SEOHead";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleNavigation from "@/components/ArticleNavigation";
import RelatedArticles from "@/components/RelatedArticles";
import ContentPageLayout from "@/components/ContentPageLayout";

const relatedArticles = [
  { title: "Can Hair Loss Be Reversed?", href: "/hair-faqs/can-hair-loss-be-reversed", description: "Understanding what is possible with treatment." },
  { title: "Minoxidil: How It Works", href: "/hair-growth/minoxidil", description: "Complete guide to minoxidil treatment." },
  { title: "Finasteride: Benefits and Risks", href: "/mens-hair/finasteride", description: "Understanding oral DHT blockers." }
];

const TreatmentTimelinePage = () => {
  return (
    <ContentPageLayout>
      <SEOHead
        title="How Long Before Hair Loss Treatments Show Results? - HairCare.ai"
        description="Learn realistic timelines for hair loss treatments including minoxidil, finasteride, and other options. Understand what to expect and when."
        canonicalUrl="https://haircare.ai/hair-faqs/treatment-timeline"
      />
      <article className="max-w-4xl mx-auto">
        <Breadcrumb items={[{ label: "Hair FAQs", href: "/hair-faqs" }, { label: "Treatment Timeline" }]} />
        <header className="mb-8">
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">How Long Before Treatments Show Results?</h1>
          <p className="text-lg text-muted-foreground">Hair treatments require patience—understanding timelines helps set realistic expectations.</p>
        </header>
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-10">
          <h2 className="font-heading text-xl font-semibold text-foreground mb-3">Quick Answer</h2>
          <p className="text-foreground">Most hair loss treatments require 3 to 6 months of consistent use before visible results appear. Full effects may take 12 months or longer. Minoxidil typically shows initial results at 4 months, finasteride at 6 to 12 months. Early shedding is normal and does not indicate treatment failure.</p>
        </div>
        <section className="mb-10">
          <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">Why Results Take Time</h2>
          <p className="text-foreground leading-relaxed mb-4">Hair grows slowly—approximately 1.25 cm per month. Treatments work by affecting the hair growth cycle, which means new hairs must grow from treated follicles before improvements become visible. Additionally, some treatments initially cause shedding of weak hairs before stronger regrowth occurs.</p>
        </section>
        <section className="mb-10">
          <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">Timeline by Treatment</h2>
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-card border border-border">
              <h3 className="font-semibold text-foreground mb-2">Minoxidil: 3-6 months</h3>
              <p className="text-muted-foreground">Initial shedding may occur in weeks 2-8. Visible improvement typically begins around month 4. Maximum benefit reached by 12-24 months of use.</p>
            </div>
            <div className="p-4 rounded-lg bg-card border border-border">
              <h3 className="font-semibold text-foreground mb-2">Finasteride: 6-12 months</h3>
              <p className="text-muted-foreground">Slowing of hair loss may be noticed within 3-6 months. Visible regrowth typically requires 6-12 months. Continue for 2 years for full assessment.</p>
            </div>
            <div className="p-4 rounded-lg bg-card border border-border">
              <h3 className="font-semibold text-foreground mb-2">Hair Transplant: 9-12 months</h3>
              <p className="text-muted-foreground">Transplanted hair sheds initially. New growth begins around month 3-4. Final results visible at 12-18 months.</p>
            </div>
          </div>
        </section>
        <section className="mb-10">
          <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">When to Seek Help</h2>
          <p className="text-foreground leading-relaxed">Consult your doctor if you see no improvement after 12 months of consistent treatment, or if you experience significant side effects. Treatment plans may need adjustment.</p>
        </section>
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-10">
          <p className="text-foreground">HairCare AI can help personalise this further based on your hair type, scalp condition, and goals.</p>
        </div>
        <ArticleNavigation previous={{ href: "/hair-faqs/can-hair-loss-be-reversed", title: "Can Hair Loss Be Reversed?" }} next={{ href: "/hair-faqs/aging-hair-loss", title: "Is Hair Loss Normal With Aging?" }} />
        <RelatedArticles articles={relatedArticles} />
      </article>
    </ContentPageLayout>
  );
};

export default TreatmentTimelinePage;