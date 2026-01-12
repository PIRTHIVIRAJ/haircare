import SEOHead from "@/components/SEOHead";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleNavigation from "@/components/ArticleNavigation";
import RelatedArticles from "@/components/RelatedArticles";
import ContentPageLayout from "@/components/ContentPageLayout";

const relatedArticles = [
  { title: "Does Cutting Hair Make It Grow Faster?", href: "/hair-faqs/cutting-hair-growth", description: "Examining another popular myth." },
  { title: "Can Hats Cause Hair Loss?", href: "/hair-faqs/do-hats-cause-hair-loss", description: "The truth about hats and baldness." },
  { title: "Are Natural Products Better?", href: "/hair-faqs/natural-vs-chemical", description: "Natural versus synthetic debate examined." }
];

const CommonMythsPage = () => {
  return (
    <ContentPageLayout>
      <SEOHead
        title="Common Hair Care Myths Debunked | Hair Science - HairCare.ai"
        description="Separate fact from fiction with our guide to common hair care myths. Learn what the science actually says about popular hair beliefs."
        canonicalUrl="https://haircare.ai/hair-faqs/common-myths"
      />
      <article className="max-w-4xl mx-auto">
        <Breadcrumb items={[{ label: "Hair FAQs", href: "/hair-faqs" }, { label: "Common Myths" }]} />
        <header className="mb-8">
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">Common Hair Care Myths Debunked</h1>
          <p className="text-lg text-muted-foreground">Popular beliefs about hair examined through the lens of science.</p>
        </header>
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-10">
          <h2 className="font-heading text-xl font-semibold text-foreground mb-3">Quick Answer</h2>
          <p className="text-foreground">Many common beliefs about hair care are myths. Cutting does not make hair grow faster, brushing 100 strokes is not beneficial, cold water does not seal cuticles, and plucking grey hairs does not cause more to grow. Following evidence-based practices leads to healthier hair.</p>
        </div>
        <section className="mb-10">
          <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">Myths Debunked</h2>
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/20">
              <h3 className="font-semibold text-foreground mb-2">Myth: Brush 100 strokes daily for healthy hair</h3>
              <p className="text-muted-foreground">Excessive brushing causes breakage and damage. Gentle detangling as needed is sufficient.</p>
            </div>
            <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/20">
              <h3 className="font-semibold text-foreground mb-2">Myth: Cold water rinses seal the cuticle</h3>
              <p className="text-muted-foreground">Hair cuticles do not open and close in response to temperature like pores. Conditioner smooths cuticles chemically.</p>
            </div>
            <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/20">
              <h3 className="font-semibold text-foreground mb-2">Myth: You can repair split ends</h3>
              <p className="text-muted-foreground">Products may temporarily bind splits but cannot permanently repair them. Cutting is the only true solution.</p>
            </div>
            <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/20">
              <h3 className="font-semibold text-foreground mb-2">Myth: Hair adapts to products, so you need to switch</h3>
              <p className="text-muted-foreground">Hair does not build tolerance. If products seem less effective, buildup or changing hair needs may be responsible.</p>
            </div>
            <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/20">
              <h3 className="font-semibold text-foreground mb-2">Myth: Air drying is always better than blow drying</h3>
              <p className="text-muted-foreground">Both methods can cause damage. Wet hair is fragile, and prolonged wetness may harm the cuticle. Moderate heat drying can be gentler.</p>
            </div>
          </div>
        </section>
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-10">
          <p className="text-foreground">HairCare AI can help personalise this further based on your hair type, scalp condition, and goals.</p>
        </div>
        <ArticleNavigation previous={{ href: "/hair-faqs/normal-shedding", title: "When Is Hair Shedding Normal?" }} next={{ href: "/hair-nutrition", title: "Hair Nutrition Overview" }} />
        <RelatedArticles articles={relatedArticles} />
      </article>
    </ContentPageLayout>
  );
};

export default CommonMythsPage;