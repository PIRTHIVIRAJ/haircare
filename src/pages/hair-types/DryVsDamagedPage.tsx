import SEOHead from "@/components/SEOHead";
import ContentPageLayout from "@/components/ContentPageLayout";
import Breadcrumb from "@/components/Breadcrumb";
import FAQSection from "@/components/FAQSection";
import ChatCTA from "@/components/ChatCTA";
import MedicalDisclaimer from "@/components/MedicalDisclaimer";
import ArticleNavigation from "@/components/ArticleNavigation";

const DryVsDamagedPage = () => {
  const faqs = [
    { question: "Can dry hair become damaged?", answer: "Yes. Chronically dry hair is more brittle and prone to breakage, which constitutes damage. Additionally, attempting to add moisture through heat or harsh treatments can cause further damage. Addressing dryness early prevents damage." },
    { question: "How long does it take to repair damaged hair?", answer: "Damage cannot be truly repaired—only cut off. However, you can improve the appearance and prevent further damage. New healthy growth takes months to become noticeable. Focus on protecting existing hair while waiting for regrowth." },
    { question: "Why is my hair dry even though I condition it?", answer: "Your conditioner may not suit your hair type, you may not be leaving it on long enough, or underlying factors like hard water, heat styling, or health issues may be causing persistent dryness. Try deep conditioning and eliminating potential causes." }
  ];

  const relatedArticles = [
    { title: "How to Prevent Hair Breakage", href: "/hair-routines/prevent-breakage" },
    { title: "Best Ingredients for Scalp Health", href: "/scalp-health/best-ingredients" }
  ];

  return (
    <>
      <SEOHead title="Dry Hair vs Damaged Hair: Understanding the Difference | HairCare.ai" description="Learn the difference between dry and damaged hair, how to identify each, and the specific treatments needed to address these distinct hair concerns." canonicalUrl="https://haircare.ai/hair-types/dry-vs-damaged" articleSchema={{ headline: "Dry Hair vs Damaged Hair", description: "Understanding and treating dry versus damaged hair.", datePublished: "2024-12-28", dateModified: "2024-12-28" }} faqSchema={faqs} />
      <ContentPageLayout>
        <article className="max-w-4xl mx-auto" itemScope itemType="https://schema.org/Article">
          <Breadcrumb items={[{ label: "Hair Types", href: "/hair-types" }, { label: "Dry vs Damaged" }]} />
          <header className="mb-8"><h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4" itemProp="headline">Dry Hair vs Damaged Hair</h1><p className="text-lg text-muted-foreground">Two related but distinct conditions requiring different approaches.</p></header>
          <section className="prose prose-lg max-w-none mb-10"><p className="text-foreground leading-relaxed">Dry hair and damaged hair are often confused because they share symptoms like roughness and lack of shine. However, they have different causes and require different solutions. Dry hair lacks moisture; damaged hair has structural harm to the hair shaft. Understanding which you have—or whether you have both—determines the most effective treatment approach.</p></section>
          <section className="mb-10 p-6 rounded-xl bg-primary/5 border border-primary/20"><h2 className="font-heading text-xl font-semibold text-foreground mb-3">Quick Answer</h2><p className="text-foreground leading-relaxed">Dry hair lacks moisture but has intact structure—it needs hydration through deep conditioning and moisture-sealing products. Damaged hair has structural harm (broken bonds, lifted cuticles) from heat, chemicals, or mechanical stress—it needs protein treatments, bond repair, and ultimately trimming. Many people have both conditions simultaneously.</p></section>
          <section className="mb-10"><h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">Understanding Dry Hair</h2><div className="space-y-4"><div className="p-4 rounded-lg bg-card border border-border"><h3 className="font-semibold text-foreground mb-2">Causes of Dryness</h3><p className="text-muted-foreground">Insufficient sebum production, environmental factors (sun, wind, dry climate), harsh shampoos, hard water, infrequent conditioning, or naturally porous hair that loses moisture quickly.</p></div><div className="p-4 rounded-lg bg-card border border-border"><h3 className="font-semibold text-foreground mb-2">Signs of Dry Hair</h3><ul className="list-disc list-inside text-muted-foreground space-y-1"><li>Dull, lacklustre appearance</li><li>Rough texture when touched</li><li>Flyaways and static</li><li>Tangles easily</li><li>May feel straw-like</li></ul></div><div className="p-4 rounded-lg bg-card border border-border"><h3 className="font-semibold text-foreground mb-2">Treating Dry Hair</h3><p className="text-muted-foreground">Deep conditioning masks, leave-in conditioners, oils to seal moisture, gentle sulphate-free shampoos, reducing wash frequency, and protecting from environmental stressors.</p></div></div></section>
          <section className="mb-10"><h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">Understanding Damaged Hair</h2><div className="space-y-4"><div className="p-4 rounded-lg bg-card border border-border"><h3 className="font-semibold text-foreground mb-2">Causes of Damage</h3><p className="text-muted-foreground">Heat styling, chemical treatments (colouring, bleaching, perming), mechanical stress (rough brushing, tight styles), UV exposure, and chlorine or salt water.</p></div><div className="p-4 rounded-lg bg-card border border-border"><h3 className="font-semibold text-foreground mb-2">Signs of Damage</h3><ul className="list-disc list-inside text-muted-foreground space-y-1"><li>Split ends and breakage</li><li>Hair snaps when stretched</li><li>Gummy texture when wet</li><li>Highly porous (absorbs water instantly)</li><li>Colour fades quickly</li><li>Cannot hold styles</li></ul></div><div className="p-4 rounded-lg bg-card border border-border"><h3 className="font-semibold text-foreground mb-2">Treating Damaged Hair</h3><p className="text-muted-foreground">Protein treatments to temporarily strengthen, bond-repair products, minimal heat, regular trims to remove split ends, and preventing further damage. True repair requires new growth.</p></div></div></section>
          <section className="mb-10"><h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">When to Seek Professional Help</h2><ul className="list-disc list-inside space-y-2 text-foreground"><li>Severe breakage despite proper care</li><li>Chemical damage from treatments gone wrong</li><li>Need guidance on transitioning from damaged hair</li><li>Persistent dryness despite hydrating treatments</li></ul></section>
          <section className="mb-10 p-6 rounded-xl bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20"><p className="text-foreground leading-relaxed">HairCare AI can help personalise this further based on your hair type, scalp condition, and goals.</p></section>
          <FAQSection faqs={faqs} />
          <ArticleNavigation previous={{ title: "Fine Hair vs Thin Hair", href: "/hair-types/fine-vs-thin" }} next={{ title: "Frizzy Hair: Causes and Solutions", href: "/hair-types/frizzy-hair" }} relatedArticles={relatedArticles} />
          <ChatCTA />
          <MedicalDisclaimer />
        </article>
      </ContentPageLayout>
    </>
  );
};

export default DryVsDamagedPage;
