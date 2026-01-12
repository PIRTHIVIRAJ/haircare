import SEOHead from "@/components/SEOHead";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleNavigation from "@/components/ArticleNavigation";
import RelatedArticles from "@/components/RelatedArticles";
import ContentPageLayout from "@/components/ContentPageLayout";

const relatedArticles = [
  { title: "Aging Hair: What Changes Over Time", href: "/hair-types/aging-hair", description: "How hair changes as we age." },
  { title: "Male Pattern Baldness", href: "/mens-hair/male-pattern-baldness", description: "Understanding androgenetic alopecia." },
  { title: "Hair Changes During Menopause", href: "/womens-hair/menopause", description: "Managing hair during hormonal transitions." }
];

const AgingHairLossPage = () => {
  return (
    <ContentPageLayout>
      <SEOHead
        title="Is Hair Loss Normal With Aging? | Age-Related Hair Changes - HairCare.ai"
        description="Learn about normal age-related hair changes versus problematic hair loss. Understand what to expect as you age and when to seek help."
        canonicalUrl="https://haircare.ai/hair-faqs/aging-hair-loss"
      />
      <article className="max-w-4xl mx-auto">
        <Breadcrumb items={[{ label: "Hair FAQs", href: "/hair-faqs" }, { label: "Aging and Hair Loss" }]} />
        <header className="mb-8">
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">Is Hair Loss Normal With Aging?</h1>
          <p className="text-lg text-muted-foreground">Understanding what hair changes are expected with age and what may warrant attention.</p>
        </header>
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-10">
          <h2 className="font-heading text-xl font-semibold text-foreground mb-3">Quick Answer</h2>
          <p className="text-foreground">Yes, some hair thinning is a normal part of aging for most people. Hair growth rate slows, individual strands become finer, and follicles may produce fewer hairs. However, significant baldness is not inevitable and is influenced by genetics. Treatment can slow age-related thinning.</p>
        </div>
        <section className="mb-10">
          <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">Normal Age-Related Hair Changes</h2>
          <ul className="list-disc list-inside space-y-2 text-foreground">
            <li>Hair growth rate slows—hair may take longer to reach the same length</li>
            <li>Individual hair strands become finer in diameter</li>
            <li>Hair may become drier as oil production decreases</li>
            <li>Greying occurs as melanocyte activity decreases</li>
            <li>Overall hair density may decrease slightly</li>
            <li>Hair texture may change, becoming more wiry or coarse</li>
          </ul>
        </section>
        <section className="mb-10">
          <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">When Aging Hair Loss May Need Attention</h2>
          <p className="text-foreground leading-relaxed mb-4">Consult a healthcare provider if:</p>
          <ul className="list-disc list-inside space-y-2 text-foreground">
            <li>Hair loss is rapid or sudden</li>
            <li>You develop bald patches</li>
            <li>Thinning is accompanied by scalp symptoms</li>
            <li>Hair loss is more severe than expected for your age and family history</li>
          </ul>
        </section>
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-10">
          <p className="text-foreground">HairCare AI can help personalise this further based on your hair type, scalp condition, and goals.</p>
        </div>
        <ArticleNavigation previous={{ href: "/hair-faqs/treatment-timeline", title: "Treatment Timeline" }} next={{ href: "/hair-faqs/normal-shedding", title: "When Is Hair Shedding Normal?" }} />
        <RelatedArticles articles={relatedArticles} />
      </article>
    </ContentPageLayout>
  );
};

export default AgingHairLossPage;