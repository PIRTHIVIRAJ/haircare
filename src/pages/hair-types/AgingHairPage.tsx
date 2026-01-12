import SEOHead from "@/components/SEOHead";
import ContentPageLayout from "@/components/ContentPageLayout";
import Breadcrumb from "@/components/Breadcrumb";
import FAQSection from "@/components/FAQSection";
import ChatCTA from "@/components/ChatCTA";
import MedicalDisclaimer from "@/components/MedicalDisclaimer";
import ArticleNavigation from "@/components/ArticleNavigation";

const AgingHairPage = () => {
  const faqs = [
    { question: "At what age does hair start to change?", answer: "Hair changes are gradual and vary by genetics. Many notice changes in their 30s and 40s—greying, texture shifts, and reduced density. Some experience earlier changes; others maintain youthful hair longer. Hormonal shifts like menopause accelerate changes." },
    { question: "Can aging hair changes be reversed?", answer: "Greying is irreversible without colour. Thinning may be slowed but rarely fully reversed. Texture and dryness changes can be managed with proper care. Focus on adapting your routine rather than reversing natural processes." }
  ];

  const relatedArticles = [
    { title: "Fine Hair vs Thin Hair", href: "/hair-types/fine-vs-thin" },
    { title: "Hair Thinning vs Hair Shedding", href: "/hair-loss/thinning-vs-shedding" }
  ];

  return (
    <>
      <SEOHead title="Aging Hair: What Changes Over Time | HairCare.ai" description="Understand how hair changes as you age including texture, colour, density, and growth rate, plus practical tips for caring for mature hair." canonicalUrl="https://haircare.ai/hair-types/aging-hair" articleSchema={{ headline: "Aging Hair: What Changes Over Time", description: "Understanding and adapting to hair changes as you age.", datePublished: "2024-12-28", dateModified: "2024-12-28" }} faqSchema={faqs} />
      <ContentPageLayout>
        <article className="max-w-4xl mx-auto" itemScope itemType="https://schema.org/Article">
          <Breadcrumb items={[{ label: "Hair Types", href: "/hair-types" }, { label: "Aging Hair" }]} />
          <header className="mb-8"><h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4" itemProp="headline">Aging Hair: What Changes Over Time</h1><p className="text-lg text-muted-foreground">Understanding and adapting to natural hair changes.</p></header>
          <section className="prose prose-lg max-w-none mb-10"><p className="text-foreground leading-relaxed">Hair changes as we age, just like the rest of our body. Colour, texture, density, and growth rate all shift over time. Understanding these changes helps you adapt your hair care routine rather than fighting against natural processes. With the right approach, aging hair can remain healthy and attractive.</p></section>
          <section className="mb-10 p-6 rounded-xl bg-primary/5 border border-primary/20"><h2 className="font-heading text-xl font-semibold text-foreground mb-3">Quick Answer</h2><p className="text-foreground leading-relaxed">Aging hair typically becomes greyer, finer in diameter, lower in density, drier, and grows more slowly. Hormonal changes, reduced melanin production, and slower cell turnover drive these shifts. Adapt by moisturising more, using gentler products, protecting from damage, and considering cuts that work with changed texture.</p></section>
          <section className="mb-10"><h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">How Hair Changes with Age</h2><div className="space-y-4"><div className="p-4 rounded-lg bg-card border border-border"><h3 className="font-semibold text-foreground mb-2">Greying</h3><p className="text-muted-foreground">Melanin production in follicles decreases over time. Hair grows in without pigment, appearing grey, silver, or white. This is genetic—some grey early, others much later. Grey hair often has a different texture: coarser, wiry, and more resistant.</p></div><div className="p-4 rounded-lg bg-card border border-border"><h3 className="font-semibold text-foreground mb-2">Thinning and Reduced Density</h3><p className="text-muted-foreground">Hair follicles may shrink or stop producing hair entirely. This reduces overall density. Individual strands may also become finer in diameter. The combination results in noticeably thinner-looking hair.</p></div><div className="p-4 rounded-lg bg-card border border-border"><h3 className="font-semibold text-foreground mb-2">Dryness</h3><p className="text-muted-foreground">Sebum production decreases with age, leaving hair drier and more brittle. The scalp may also become drier and more sensitive. What worked in your 20s may be too drying in your 50s.</p></div><div className="p-4 rounded-lg bg-card border border-border"><h3 className="font-semibold text-foreground mb-2">Slower Growth</h3><p className="text-muted-foreground">The anagen (growth) phase of the hair cycle shortens with age. Hair grows more slowly and may not reach the same length before shedding. This is why maintaining length becomes harder over time.</p></div></div></section>
          <section className="mb-10"><h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">Caring for Aging Hair</h2><ul className="list-disc list-inside space-y-2 text-foreground"><li>Increase moisture with richer conditioners and weekly treatments</li><li>Use gentle, sulphate-free cleansers to preserve natural oils</li><li>Handle hair gently—aging hair is more fragile</li><li>Minimise heat styling and chemical treatments</li><li>Consider volumising products and cuts that add body</li><li>Protect from sun damage, which affects aging hair more</li></ul></section>
          <section className="mb-10 p-6 rounded-xl bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20"><p className="text-foreground leading-relaxed">HairCare AI can help personalise this further based on your hair type, scalp condition, and goals.</p></section>
          <FAQSection faqs={faqs} />
          <ArticleNavigation previous={{ title: "Oily Scalp but Dry Ends", href: "/hair-types/oily-scalp-dry-ends" }} next={{ title: "Ethnic Hair Care Differences", href: "/hair-types/ethnic-hair-care" }} relatedArticles={relatedArticles} />
          <ChatCTA />
          <MedicalDisclaimer />
        </article>
      </ContentPageLayout>
    </>
  );
};

export default AgingHairPage;
