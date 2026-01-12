import SEOHead from "@/components/SEOHead";
import ContentPageLayout from "@/components/ContentPageLayout";
import Breadcrumb from "@/components/Breadcrumb";
import FAQSection from "@/components/FAQSection";
import ChatCTA from "@/components/ChatCTA";
import MedicalDisclaimer from "@/components/MedicalDisclaimer";
import ArticleNavigation from "@/components/ArticleNavigation";

const EthnicHairCarePage = () => {
  const faqs = [
    { question: "Is ethnic hair care really different?", answer: "Yes. Hair structure varies significantly between ethnic groups—curl pattern, strand shape, porosity, and density all differ. These structural differences require different products and techniques for optimal results." },
    { question: "What are protective styles?", answer: "Hairstyles that tuck away ends and minimise daily manipulation—braids, twists, buns, and wigs. These reduce breakage and retain length for fragile or highly textured hair types. They should not be too tight or left in too long." }
  ];

  const relatedArticles = [
    { title: "Best Care for Curly Hair", href: "/hair-types/curly-hair-care" },
    { title: "How to Identify Your Hair Type", href: "/hair-types/identify-your-hair-type" }
  ];

  return (
    <>
      <SEOHead title="Ethnic Hair Care Differences Explained | HairCare.ai" description="Understand how hair structure varies between ethnic backgrounds and learn specific care techniques for different hair types including Afro-textured, Asian, and European hair." canonicalUrl="https://haircare.ai/hair-types/ethnic-hair-care" articleSchema={{ headline: "Ethnic Hair Care Differences Explained", description: "Understanding hair structure variations across ethnic backgrounds.", datePublished: "2024-12-28", dateModified: "2024-12-28" }} faqSchema={faqs} />
      <ContentPageLayout>
        <article className="max-w-4xl mx-auto" itemScope itemType="https://schema.org/Article">
          <Breadcrumb items={[{ label: "Hair Types", href: "/hair-types" }, { label: "Ethnic Hair Care" }]} />
          <header className="mb-8"><h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4" itemProp="headline">Ethnic Hair Care Differences Explained</h1><p className="text-lg text-muted-foreground">Understanding structural differences and tailored care approaches.</p></header>
          <section className="prose prose-lg max-w-none mb-10"><p className="text-foreground leading-relaxed">Hair varies significantly across ethnic backgrounds—not just in appearance but in fundamental structure. These structural differences affect everything from moisture retention to breakage patterns to how products interact with hair. Understanding your specific hair structure helps you choose appropriate care methods rather than applying generic advice that may not suit your hair.</p></section>
          <section className="mb-10 p-6 rounded-xl bg-primary/5 border border-primary/20"><h2 className="font-heading text-xl font-semibold text-foreground mb-3">Quick Answer</h2><p className="text-foreground leading-relaxed">Hair structure varies by ethnic background in curl pattern, strand shape (round vs oval vs flat), density, growth rate, and porosity. Afro-textured hair needs maximum moisture and gentle handling. Asian hair is often thick and resistant. European hair varies widely. Tailor your routine to your actual hair characteristics rather than assumptions.</p></section>
          <section className="mb-10"><h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">Structural Differences</h2><div className="space-y-4"><div className="p-4 rounded-lg bg-card border border-border"><h3 className="font-semibold text-foreground mb-2">Afro-Textured Hair</h3><p className="text-muted-foreground">Typically Type 3C-4C. Strand cross-section is flat/elliptical. Naturally drier due to curl structure preventing sebum distribution. Most fragile at twist points. Needs intensive moisture, gentle handling, and protective styling. Often high porosity.</p></div><div className="p-4 rounded-lg bg-card border border-border"><h3 className="font-semibold text-foreground mb-2">Asian Hair</h3><p className="text-muted-foreground">Often Type 1. Round strand cross-section. Typically coarse diameter but smooth cuticle. Grows fastest of all types. Very strong but can be resistant to chemical treatments. Often low porosity—products may sit on surface.</p></div><div className="p-4 rounded-lg bg-card border border-border"><h3 className="font-semibold text-foreground mb-2">European/Caucasian Hair</h3><p className="text-muted-foreground">Most variable—Types 1-3 common. Oval cross-section. Medium density on average. Widest range of colours. Responds readily to styling and chemical treatments. Care needs vary greatly by individual.</p></div></div></section>
          <section className="mb-10"><h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">Key Care Principles by Hair Type</h2><div className="space-y-4"><div className="p-4 rounded-lg bg-card border border-border"><h3 className="font-semibold text-foreground mb-2">High-Texture Afro Hair</h3><ul className="list-disc list-inside text-muted-foreground space-y-1"><li>Moisture is the priority—deep condition weekly</li><li>Detangle only when wet with conditioner</li><li>Use protective styles to prevent breakage</li><li>Minimise heat and chemical relaxers</li><li>Seal moisture with oils and butters</li></ul></div><div className="p-4 rounded-lg bg-card border border-border"><h3 className="font-semibold text-foreground mb-2">Straight Asian Hair</h3><ul className="list-disc list-inside text-muted-foreground space-y-1"><li>May need clarifying to prevent buildup</li><li>Lightweight products to avoid weighing down</li><li>Heat opens cuticle for better product absorption</li><li>Can tolerate more frequent washing</li><li>Volumising techniques help with flatness</li></ul></div></div></section>
          <section className="mb-10 p-6 rounded-xl bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20"><p className="text-foreground leading-relaxed">HairCare AI can help personalise this further based on your hair type, scalp condition, and goals.</p></section>
          <FAQSection faqs={faqs} />
          <ArticleNavigation previous={{ title: "Aging Hair: What Changes Over Time", href: "/hair-types/aging-hair" }} relatedArticles={relatedArticles} />
          <ChatCTA />
          <MedicalDisclaimer />
        </article>
      </ContentPageLayout>
    </>
  );
};

export default EthnicHairCarePage;
