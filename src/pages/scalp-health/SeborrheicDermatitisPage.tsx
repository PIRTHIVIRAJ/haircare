import SEOHead from "@/components/SEOHead";
import ContentPageLayout from "@/components/ContentPageLayout";
import Breadcrumb from "@/components/Breadcrumb";
import FAQSection from "@/components/FAQSection";
import ChatCTA from "@/components/ChatCTA";
import MedicalDisclaimer from "@/components/MedicalDisclaimer";
import RelatedArticles from "@/components/RelatedArticles";

const SeborrheicDermatitisPage = () => {
  const faqs = [
    {
      question: "Is seborrheic dermatitis the same as dandruff?",
      answer: "Dandruff is a mild form of seborrheic dermatitis affecting only the scalp. When symptoms are more severe or extend beyond the scalp to areas like the face, ears, or chest, it is typically called seborrheic dermatitis. They exist on a spectrum of the same condition."
    },
    {
      question: "Can seborrheic dermatitis cause permanent hair loss?",
      answer: "Seborrheic dermatitis itself does not cause permanent hair loss. However, severe inflammation and scratching can damage follicles. Hair typically regrows once the condition is controlled. If you notice significant hair loss, consult a dermatologist."
    },
    {
      question: "Why does my seborrheic dermatitis keep coming back?",
      answer: "Seborrheic dermatitis is a chronic condition driven by an ongoing sensitivity to Malassezia yeast and sebum. It cannot be cured, only managed. Flares may occur due to stress, weather changes, illness, or discontinuing treatment. Maintenance therapy helps prevent recurrence."
    },
    {
      question: "Is seborrheic dermatitis related to diet?",
      answer: "While there is no strong evidence that diet causes seborrheic dermatitis, some people report improvement by reducing sugar, processed foods, or dairy. A generally healthy diet supports skin health, but dietary changes alone are unlikely to control the condition."
    }
  ];

  const relatedArticles = [
    {
      title: "Dandruff vs Dry Scalp",
      href: "/scalp-health/dandruff-vs-dry-scalp",
      description: "Understanding different causes of scalp flaking."
    },
    {
      title: "Scalp Inflammation and Hair Loss",
      href: "/scalp-health/inflammation-hair-loss",
      description: "How inflammation affects hair growth."
    },
    {
      title: "Best Ingredients for Scalp Health",
      href: "/scalp-health/best-ingredients",
      description: "Active ingredients for treating scalp conditions."
    }
  ];

  return (
    <>
      <SEOHead 
        title="Seborrheic Dermatitis on the Scalp: Causes and Treatment | HairCare.ai"
        description="Comprehensive guide to seborrheic dermatitis of the scalp, including symptoms, causes, treatment options, and long-term management strategies."
        canonicalUrl="https://haircare.ai/scalp-health/seborrheic-dermatitis"
        articleSchema={{
          headline: "Seborrheic Dermatitis on the Scalp: Causes and Treatment",
          description: "Comprehensive guide to seborrheic dermatitis, its causes, and treatment options.",
          datePublished: "2024-12-28",
          dateModified: "2024-12-28"
        }}
        faqSchema={faqs}
      />
      
      <ContentPageLayout>
        <article className="max-w-4xl mx-auto" itemScope itemType="https://schema.org/Article">
          <Breadcrumb items={[
            { label: "Scalp Health", href: "/scalp-health" },
            { label: "Seborrheic Dermatitis" }
          ]} />
          
          <header className="mb-8">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4" itemProp="headline">
              Seborrheic Dermatitis on the Scalp
            </h1>
            <p className="text-lg text-muted-foreground">
              Understanding and managing this common inflammatory scalp condition.
            </p>
          </header>

          <section className="prose prose-lg max-w-none mb-10">
            <p className="text-foreground leading-relaxed">
              Seborrheic dermatitis is a chronic inflammatory skin condition that commonly affects the scalp, causing redness, scaling, and itching. It ranges from mild dandruff to more severe presentations with thick scales and significant discomfort. Though it cannot be cured, it can be effectively managed with appropriate treatment.
            </p>
            <p className="text-foreground leading-relaxed">
              This guide covers everything you need to know about seborrheic dermatitis of the scalp, from understanding its causes to implementing an effective management strategy.
            </p>
          </section>

          <section className="mb-10 p-6 rounded-xl bg-primary/5 border border-primary/20">
            <h2 className="font-heading text-xl font-semibold text-foreground mb-3">
              Quick Answer
            </h2>
            <p className="text-foreground leading-relaxed">
              Seborrheic dermatitis is a chronic scalp condition caused by sensitivity to Malassezia yeast and excess sebum. Symptoms include oily yellow-white scales, redness, and itching. Treatment involves antifungal shampoos (ketoconazole, zinc pyrithione), anti-inflammatory agents, and ongoing maintenance to prevent flares.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              What Causes Seborrheic Dermatitis?
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              The exact cause involves multiple factors working together:
            </p>
            
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Malassezia Yeast</h3>
                <p className="text-muted-foreground">
                  This yeast lives naturally on everyone's skin but causes problems in susceptible individuals. It feeds on sebum and produces inflammatory byproducts that trigger the skin reaction.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Excess Sebum Production</h3>
                <p className="text-muted-foreground">
                  Seborrheic dermatitis typically occurs in areas with many sebaceous glands (scalp, face, upper chest). More oil provides more food for Malassezia and creates a favourable environment for inflammation.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Individual Sensitivity</h3>
                <p className="text-muted-foreground">
                  Not everyone with Malassezia develops seborrheic dermatitis. Individual immune response and skin sensitivity determine who is affected. This explains why it runs in some families.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Contributing Factors</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Stress (often triggers or worsens flares)</li>
                  <li>Cold, dry weather</li>
                  <li>Hormonal changes</li>
                  <li>Neurological conditions (Parkinson's disease)</li>
                  <li>Weakened immune system</li>
                  <li>Certain medications</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Symptoms and Appearance
            </h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Scalp Symptoms</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Greasy, yellowish scales or flakes</li>
                  <li>Redness and inflammation</li>
                  <li>Itching (mild to intense)</li>
                  <li>Thickened patches in severe cases</li>
                  <li>May extend to hairline and behind ears</li>
                </ul>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Other Affected Areas</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Eyebrows and between eyes</li>
                  <li>Sides of nose (nasolabial folds)</li>
                  <li>Behind and inside ears</li>
                  <li>Upper chest and back</li>
                  <li>Skin folds</li>
                </ul>
              </div>
            </div>

            <p className="text-foreground leading-relaxed mt-4">
              Symptoms typically wax and wane, with periods of improvement followed by flares. Many people notice seasonal patterns, with worsening in winter.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Treatment Options
            </h2>
            
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Antifungal Shampoos</h3>
                <p className="text-muted-foreground mb-2">First-line treatment targeting Malassezia:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li><strong>Ketoconazole 1-2%:</strong> Highly effective antifungal; available OTC and prescription</li>
                  <li><strong>Zinc pyrithione:</strong> Antifungal with anti-inflammatory properties</li>
                  <li><strong>Selenium sulfide:</strong> Reduces Malassezia and slows skin cell turnover</li>
                  <li><strong>Ciclopirox:</strong> Antifungal with anti-inflammatory effects</li>
                </ul>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Other Active Ingredients</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li><strong>Salicylic acid:</strong> Helps remove scales and reduce buildup</li>
                  <li><strong>Coal tar:</strong> Slows skin cell production; can be effective but has odour</li>
                  <li><strong>Piroctone olamine:</strong> Antifungal used in cosmetic formulations</li>
                </ul>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Prescription Options</h3>
                <p className="text-muted-foreground mb-2">For moderate to severe cases:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li><strong>Topical corticosteroids:</strong> Short-term use for inflammation (not long-term)</li>
                  <li><strong>Calcineurin inhibitors:</strong> Tacrolimus or pimecrolimus for sensitive areas</li>
                  <li><strong>Higher-strength antifungals:</strong> Prescription ketoconazole or other azoles</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Long-Term Management
            </h2>
            
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Maintenance Strategy</h3>
                <p className="text-muted-foreground">
                  After controlling a flare, continue using medicated shampoo 1-2 times weekly to prevent recurrence. Completely stopping treatment usually leads to return of symptoms within weeks to months.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Rotate Products</h3>
                <p className="text-muted-foreground">
                  If one shampoo stops working (tachyphylaxis), switch to a different active ingredient. Having 2-3 products to rotate between can help maintain effectiveness.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Manage Triggers</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Reduce stress through exercise, sleep, and relaxation techniques</li>
                  <li>Maintain consistent treatment even when feeling well</li>
                  <li>Avoid scratching, which worsens inflammation</li>
                  <li>Address any underlying health conditions</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Common Myths
            </h2>
            
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-muted/50 border border-border">
                <p className="font-medium text-foreground mb-1">Myth: Seborrheic dermatitis is caused by poor hygiene</p>
                <p className="text-muted-foreground text-sm">
                  It is an inflammatory condition related to yeast sensitivity and oil production, not cleanliness. Excessive washing can actually worsen it by irritating the skin.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-muted/50 border border-border">
                <p className="font-medium text-foreground mb-1">Myth: It will go away on its own permanently</p>
                <p className="text-muted-foreground text-sm">
                  Seborrheic dermatitis is typically a lifelong condition that waxes and wanes. While individual flares resolve, the underlying tendency persists and requires ongoing management.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-muted/50 border border-border">
                <p className="font-medium text-foreground mb-1">Myth: You should avoid all oils and moisturisers</p>
                <p className="text-muted-foreground text-sm">
                  Not all oils worsen seborrheic dermatitis. Some (like certain plant oils) may even help. The issue is with sebum and the yeast reaction, not external moisturising per se.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              When to See a Doctor
            </h2>
            <ul className="list-disc list-inside space-y-2 text-foreground mb-4">
              <li>Over-the-counter treatments are not controlling symptoms</li>
              <li>Symptoms are severe, spreading, or affecting daily life</li>
              <li>You are unsure whether you have seborrheic dermatitis or another condition</li>
              <li>There are signs of infection (oozing, crusting, increasing pain)</li>
              <li>Hair loss is accompanying the scalp symptoms</li>
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

export default SeborrheicDermatitisPage;