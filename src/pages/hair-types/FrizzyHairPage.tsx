import SEOHead from "@/components/SEOHead";
import ContentPageLayout from "@/components/ContentPageLayout";
import Breadcrumb from "@/components/Breadcrumb";
import FAQSection from "@/components/FAQSection";
import ChatCTA from "@/components/ChatCTA";
import MedicalDisclaimer from "@/components/MedicalDisclaimer";
import ArticleNavigation from "@/components/ArticleNavigation";

const FrizzyHairPage = () => {
  const faqs = [
    { question: "Why is my hair frizzy even when it is healthy?", answer: "Some hair types are naturally more prone to frizz due to cuticle structure and porosity. Curly and wavy hair is inherently frizzier than straight hair. In humid conditions, even healthy hair may frizz. This is normal texture, not necessarily a problem to fix." },
    { question: "Does brushing cause frizz?", answer: "Brushing dry curly or wavy hair disrupts the curl pattern and lifts the cuticle, causing frizz. Even straight hair can frizz from over-brushing. Detangle wet hair with conditioner using fingers or a wide-tooth comb instead." },
    { question: "Can frizz be permanently eliminated?", answer: "Frizz can be managed but rarely eliminated completely, especially for naturally textured hair. Treatments like keratin straightening temporarily reduce frizz but require maintenance and may cause damage over time." }
  ];

  const relatedArticles = [
    { title: "Best Care for Curly Hair", href: "/hair-types/curly-hair-care" },
    { title: "Dry Hair vs Damaged Hair", href: "/hair-types/dry-vs-damaged" }
  ];

  return (
    <>
      <SEOHead title="Frizzy Hair: Causes and Solutions | HairCare.ai" description="Understand why hair becomes frizzy and learn effective solutions including product recommendations, styling techniques, and lifestyle changes to manage frizz." canonicalUrl="https://haircare.ai/hair-types/frizzy-hair" articleSchema={{ headline: "Frizzy Hair: Causes and Solutions", description: "Understanding and managing frizzy hair effectively.", datePublished: "2024-12-28", dateModified: "2024-12-28" }} faqSchema={faqs} />
      <ContentPageLayout>
        <article className="max-w-4xl mx-auto" itemScope itemType="https://schema.org/Article">
          <Breadcrumb items={[{ label: "Hair Types", href: "/hair-types" }, { label: "Frizzy Hair" }]} />
          <header className="mb-8"><h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4" itemProp="headline">Frizzy Hair: Causes and Solutions</h1><p className="text-lg text-muted-foreground">Understanding what causes frizz and how to manage it effectively.</p></header>
          <section className="prose prose-lg max-w-none mb-10"><p className="text-foreground leading-relaxed">Frizz occurs when the outer layer of hair (the cuticle) lifts and allows moisture from the air to penetrate, causing strands to swell unevenly. While often seen as a problem to eliminate, frizz is simply hair responding to its environment. Understanding the underlying causes helps you manage frizz effectively without fighting your natural texture.</p></section>
          <section className="mb-10 p-6 rounded-xl bg-primary/5 border border-primary/20"><h2 className="font-heading text-xl font-semibold text-foreground mb-3">Quick Answer</h2><p className="text-foreground leading-relaxed">Frizz happens when the hair cuticle is raised, allowing humidity to enter the strand. Causes include dryness, damage, humidity, friction, and naturally porous hair. Solutions include deep conditioning, smoothing products, avoiding brushing dry hair, using microfibre towels, and applying products to wet hair to seal the cuticle.</p></section>
          <section className="mb-10"><h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">Common Causes of Frizz</h2><div className="space-y-4"><div className="p-4 rounded-lg bg-card border border-border"><h3 className="font-semibold text-foreground mb-2">Humidity</h3><p className="text-muted-foreground">Hair is hygroscopic—it absorbs moisture from the air. When humidity is high, porous hair absorbs excess water, causing strands to swell and lift. This is why hair frizzes more in humid climates.</p></div><div className="p-4 rounded-lg bg-card border border-border"><h3 className="font-semibold text-foreground mb-2">Dryness and Damage</h3><p className="text-muted-foreground">Dry or damaged hair has a compromised cuticle layer that does not lie flat. This allows moisture in and out unpredictably, causing frizz. Heat styling, chemical treatments, and rough handling all contribute.</p></div><div className="p-4 rounded-lg bg-card border border-border"><h3 className="font-semibold text-foreground mb-2">Friction</h3><p className="text-muted-foreground">Rubbing with regular towels, brushing vigorously, and sleeping on cotton pillowcases creates friction that roughs up the cuticle. Each instance of friction contributes to frizz.</p></div></div></section>
          <section className="mb-10"><h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">How to Manage Frizz</h2><div className="space-y-4"><div className="p-4 rounded-lg bg-card border border-border"><h3 className="font-semibold text-foreground mb-2">Deep Condition Regularly</h3><p className="text-muted-foreground">Well-moisturised hair is less likely to seek moisture from the air. Weekly deep conditioning keeps the cuticle smooth and sealed.</p></div><div className="p-4 rounded-lg bg-card border border-border"><h3 className="font-semibold text-foreground mb-2">Apply Products to Wet Hair</h3><p className="text-muted-foreground">Products distribute more evenly on wet hair and help seal in moisture before it can escape. Apply leave-ins and styling products to soaking wet hair, then dry.</p></div><div className="p-4 rounded-lg bg-card border border-border"><h3 className="font-semibold text-foreground mb-2">Use Microfibre or T-Shirt</h3><p className="text-muted-foreground">Replace regular towels with microfibre or a soft t-shirt. Scrunch rather than rub. This reduces friction and keeps the cuticle smooth.</p></div><div className="p-4 rounded-lg bg-card border border-border"><h3 className="font-semibold text-foreground mb-2">Anti-Humidity Products</h3><p className="text-muted-foreground">Look for anti-humectant products in humid weather. These form a barrier that prevents atmospheric moisture from entering the hair shaft.</p></div></div></section>
          <section className="mb-10 p-6 rounded-xl bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20"><p className="text-foreground leading-relaxed">HairCare AI can help personalise this further based on your hair type, scalp condition, and goals.</p></section>
          <FAQSection faqs={faqs} />
          <ArticleNavigation previous={{ title: "Dry Hair vs Damaged Hair", href: "/hair-types/dry-vs-damaged" }} next={{ title: "Oily Scalp but Dry Ends", href: "/hair-types/oily-scalp-dry-ends" }} relatedArticles={relatedArticles} />
          <ChatCTA />
          <MedicalDisclaimer />
        </article>
      </ContentPageLayout>
    </>
  );
};

export default FrizzyHairPage;
