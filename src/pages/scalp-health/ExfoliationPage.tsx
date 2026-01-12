import SEOHead from "@/components/SEOHead";
import ContentPageLayout from "@/components/ContentPageLayout";
import Breadcrumb from "@/components/Breadcrumb";
import FAQSection from "@/components/FAQSection";
import ChatCTA from "@/components/ChatCTA";
import MedicalDisclaimer from "@/components/MedicalDisclaimer";
import RelatedArticles from "@/components/RelatedArticles";

const ExfoliationPage = () => {
  const faqs = [
    {
      question: "How often should I exfoliate my scalp?",
      answer: "For most people, once a week is sufficient. Those with very oily scalps or heavy product use may benefit from twice weekly. If you have a sensitive scalp or inflammatory condition, less frequent exfoliation (every 2 weeks) may be better. Observe how your scalp responds."
    },
    {
      question: "Can I exfoliate with scalp psoriasis or eczema?",
      answer: "Use caution with active inflammatory conditions. Gentle chemical exfoliation may help with scale removal, but harsh scrubbing can worsen irritation. Consult a dermatologist for personalised advice. Prescription treatments often incorporate appropriate exfoliation."
    },
    {
      question: "Is scalp exfoliation good for hair growth?",
      answer: "While exfoliation can create a healthier scalp environment by removing buildup and improving circulation, it does not directly stimulate hair growth. A clean, healthy scalp supports optimal conditions for hair follicles but does not change genetic or hormonal factors affecting growth."
    },
    {
      question: "Can I make a DIY scalp scrub?",
      answer: "Yes, simple DIY options include mixing sugar or salt with oil (coconut, olive), or using diluted apple cider vinegar for gentle chemical exfoliation. Avoid harsh, irregular particles and always be gentle. Commercial products are formulated for appropriate particle size and pH."
    }
  ];

  const relatedArticles = [
    {
      title: "What is a Healthy Scalp?",
      href: "/scalp-health/healthy-scalp",
      description: "Understanding optimal scalp health."
    },
    {
      title: "Best Ingredients for Scalp Health",
      href: "/scalp-health/best-ingredients",
      description: "Key ingredients including exfoliants."
    },
    {
      title: "Dandruff vs Dry Scalp",
      href: "/scalp-health/dandruff-vs-dry-scalp",
      description: "When exfoliation can help."
    }
  ];

  return (
    <>
      <SEOHead 
        title="How to Exfoliate Your Scalp Safely: Methods and Tips | HairCare.ai"
        description="Learn the proper techniques for scalp exfoliation, including physical and chemical methods, frequency, and how to avoid common mistakes."
        canonicalUrl="https://haircare.ai/scalp-health/exfoliation"
        articleSchema={{
          headline: "How to Exfoliate Your Scalp Safely",
          description: "Learn the proper techniques for scalp exfoliation and how to avoid common mistakes.",
          datePublished: "2024-12-28",
          dateModified: "2024-12-28"
        }}
        faqSchema={faqs}
      />
      
      <ContentPageLayout>
        <article className="max-w-4xl mx-auto" itemScope itemType="https://schema.org/Article">
          <Breadcrumb items={[
            { label: "Scalp Health", href: "/scalp-health" },
            { label: "Exfoliation" }
          ]} />
          
          <header className="mb-8">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4" itemProp="headline">
              How to Exfoliate Your Scalp Safely
            </h1>
            <p className="text-lg text-muted-foreground">
              Proper techniques for removing buildup and maintaining scalp health.
            </p>
          </header>

          <section className="prose prose-lg max-w-none mb-10">
            <p className="text-foreground leading-relaxed">
              Scalp exfoliation has gained popularity as a way to remove product buildup, dead skin cells, and excess oil. When done correctly, it can contribute to a healthier scalp environment. However, improper technique or over-exfoliation can cause irritation and damage. This guide explains how to exfoliate safely and effectively.
            </p>
          </section>

          <section className="mb-10 p-6 rounded-xl bg-primary/5 border border-primary/20">
            <h2 className="font-heading text-xl font-semibold text-foreground mb-3">
              Quick Answer
            </h2>
            <p className="text-foreground leading-relaxed">
              Scalp exfoliation removes dead cells, oil, and product buildup through physical (scrubs, brushes) or chemical (salicylic acid, AHAs) methods. Most people benefit from weekly exfoliation. Be gentle, avoid broken skin, and choose the right method for your scalp type. Over-exfoliation causes irritation.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Benefits of Scalp Exfoliation
            </h2>
            
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Removes Buildup</h3>
                <p className="text-muted-foreground">
                  Product residue from styling products, dry shampoo, and even regular shampoo can accumulate on the scalp. Exfoliation helps clear this buildup, allowing the scalp to breathe and function normally.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Clears Dead Skin Cells</h3>
                <p className="text-muted-foreground">
                  The scalp sheds skin cells continuously. Without occasional exfoliation, these cells can accumulate and mix with oil, potentially clogging follicles or contributing to flaking.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Improves Circulation</h3>
                <p className="text-muted-foreground">
                  The massaging action involved in physical exfoliation stimulates blood flow to the scalp. This may support nutrient delivery to hair follicles.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Enhances Product Effectiveness</h3>
                <p className="text-muted-foreground">
                  A clean scalp free of buildup allows medicated shampoos and treatments to work more effectively by improving contact with the scalp.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Types of Scalp Exfoliation
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground text-lg mb-3">Physical Exfoliation</h3>
                <p className="text-muted-foreground mb-3">
                  Uses physical particles or tools to manually remove dead cells:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Scalp scrubs with sugar, salt, or other granules</li>
                  <li>Scalp brushes or massagers</li>
                  <li>Silicone shampoo brushes</li>
                </ul>
                <p className="text-muted-foreground mt-3 text-sm">
                  <strong>Best for:</strong> Product buildup, oily scalps, those who enjoy massage
                </p>
              </div>

              <div className="p-5 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground text-lg mb-3">Chemical Exfoliation</h3>
                <p className="text-muted-foreground mb-3">
                  Uses acids or enzymes to dissolve dead cells:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Salicylic acid (BHA)</li>
                  <li>Glycolic or lactic acid (AHAs)</li>
                  <li>Enzyme-based treatments</li>
                </ul>
                <p className="text-muted-foreground mt-3 text-sm">
                  <strong>Best for:</strong> Sensitive scalps, flaking, more even exfoliation
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              How to Exfoliate Safely
            </h2>
            
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Step 1: Wet Your Hair</h3>
                <p className="text-muted-foreground">
                  Start with wet hair to help products spread more easily and reduce friction. Warm water helps open pores and loosen buildup.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Step 2: Apply Product in Sections</h3>
                <p className="text-muted-foreground">
                  Part your hair into sections to ensure even application. Apply the scrub or treatment directly to the scalp, not just the hair.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Step 3: Massage Gently</h3>
                <p className="text-muted-foreground">
                  Use your fingertips (not nails) to massage in circular motions. Apply light to moderate pressure. With physical scrubs, let the product do the work—aggressive scrubbing causes irritation.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Step 4: Rinse Thoroughly</h3>
                <p className="text-muted-foreground">
                  Rinse completely to remove all product and loosened debris. Residue left behind defeats the purpose and may cause irritation.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Step 5: Follow with Shampoo and Conditioner</h3>
                <p className="text-muted-foreground">
                  After exfoliating, cleanse with a gentle shampoo and condition the lengths. Some exfoliating products are designed to be used in place of shampoo.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Common Mistakes to Avoid
            </h2>
            
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Over-Exfoliating</h3>
                <p className="text-muted-foreground">
                  More is not better. Exfoliating too frequently strips natural oils, disrupts the skin barrier, and causes irritation. Weekly is usually sufficient.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Being Too Aggressive</h3>
                <p className="text-muted-foreground">
                  Harsh scrubbing causes micro-tears, inflammation, and can damage hair follicles. The scalp is skin—treat it gently.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Using Harsh Particles</h3>
                <p className="text-muted-foreground">
                  Avoid scrubs with irregular, sharp particles (like crushed shells). Choose products with smooth, round granules or chemical exfoliants.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Exfoliating Irritated or Broken Skin</h3>
                <p className="text-muted-foreground">
                  If you have sores, cuts, sunburn, or active inflammatory conditions, skip exfoliation until healed. Exfoliating will worsen irritation.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Common Myths</h2>
            
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-muted/50 border border-border">
                <p className="font-medium text-foreground mb-1">Myth: Scalp exfoliation promotes hair growth</p>
                <p className="text-muted-foreground text-sm">
                  While exfoliation creates a healthier scalp environment, there is no evidence it directly increases hair growth. It does not change the growth cycle or affect genetic factors.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-muted/50 border border-border">
                <p className="font-medium text-foreground mb-1">Myth: You should feel tingling for it to work</p>
                <p className="text-muted-foreground text-sm">
                  Tingling or burning indicates irritation, not effectiveness. Gentle exfoliation should not cause significant sensation. If it stings, the product may be too harsh.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-muted/50 border border-border">
                <p className="font-medium text-foreground mb-1">Myth: Everyone needs to exfoliate their scalp</p>
                <p className="text-muted-foreground text-sm">
                  If you have minimal product use, do not have buildup issues, and your scalp is healthy, regular shampooing may be sufficient. Exfoliation is beneficial but not essential for everyone.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              When to Avoid Exfoliation
            </h2>
            <ul className="list-disc list-inside space-y-2 text-foreground mb-4">
              <li>Active scalp inflammation (psoriasis flare, severe dermatitis)</li>
              <li>Open wounds, sores, or recent procedures</li>
              <li>Sunburned scalp</li>
              <li>Immediately before or after chemical hair treatments</li>
              <li>Very sensitive or reactive scalps (try gentle chemical exfoliants first)</li>
            </ul>
          </section>

          <section className="mb-10 p-6 rounded-xl bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20">
            <p className="text-foreground leading-relaxed">
              HairCare AI can help personalise this further based on your hair type, scalp condition, and goals.
            </p>
          </section>

          <FAQSection faqs={faqs} />
          
          <ChatCTA />
          
          <RelatedArticles articles={relatedArticles} />
          
          <MedicalDisclaimer />
        </article>
      </ContentPageLayout>
    </>
  );
};

export default ExfoliationPage;