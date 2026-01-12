import SEOHead from "@/components/SEOHead";
import ContentPageLayout from "@/components/ContentPageLayout";
import Breadcrumb from "@/components/Breadcrumb";
import FAQSection from "@/components/FAQSection";
import ChatCTA from "@/components/ChatCTA";
import MedicalDisclaimer from "@/components/MedicalDisclaimer";
import RelatedArticles from "@/components/RelatedArticles";

const ScalpAcnePage = () => {
  const faqs = [
    {
      question: "Can hair products cause scalp acne?",
      answer: "Yes, heavy or comedogenic hair products (oils, pomades, waxes, silicone-heavy products) can clog pores and trigger scalp acne. This is sometimes called 'pomade acne' or 'acne cosmetica'. Switching to lighter, non-comedogenic products often helps."
    },
    {
      question: "Should I pop scalp pimples?",
      answer: "No, you should not pop or squeeze scalp pimples. This can push bacteria deeper, cause infection, damage hair follicles, and lead to scarring. Let them heal naturally or see a dermatologist for persistent or painful lesions."
    },
    {
      question: "Does scalp acne cause hair loss?",
      answer: "Mild scalp acne typically does not cause permanent hair loss. However, severe or recurring folliculitis can damage follicles over time. Picking or squeezing pimples increases this risk. Treat scalp acne promptly to minimise any impact on hair."
    },
    {
      question: "Is scalp acne different from folliculitis?",
      answer: "They overlap significantly. Scalp acne refers to comedones (blackheads/whiteheads) and inflammatory lesions. Folliculitis specifically refers to infected or inflamed hair follicles. Many cases of 'scalp acne' are actually folliculitis. Treatment approaches are similar."
    }
  ];

  const relatedArticles = [
    {
      title: "Fungal Scalp Infections",
      href: "/scalp-health/fungal-infections",
      description: "Another cause of scalp bumps and irritation."
    },
    {
      title: "What is a Healthy Scalp?",
      href: "/scalp-health/healthy-scalp",
      description: "Understanding optimal scalp health."
    },
    {
      title: "Best Ingredients for Scalp Health",
      href: "/scalp-health/best-ingredients",
      description: "Ingredients that help treat scalp conditions."
    }
  ];

  return (
    <>
      <SEOHead 
        title="Scalp Acne: Causes, Treatment, and Prevention | HairCare.ai"
        description="Learn about scalp acne and folliculitis, what causes pimples on the scalp, effective treatments, and how to prevent recurrence."
        canonicalUrl="https://haircare.ai/scalp-health/acne"
        articleSchema={{
          headline: "Scalp Acne: Causes, Treatment, and Prevention",
          description: "Learn about scalp acne, what causes it, and effective treatments.",
          datePublished: "2024-12-28",
          dateModified: "2024-12-28"
        }}
        faqSchema={faqs}
      />
      
      <ContentPageLayout>
        <article className="max-w-4xl mx-auto" itemScope itemType="https://schema.org/Article">
          <Breadcrumb items={[
            { label: "Scalp Health", href: "/scalp-health" },
            { label: "Scalp Acne" }
          ]} />
          
          <header className="mb-8">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4" itemProp="headline">
              Scalp Acne: Causes and Treatment
            </h1>
            <p className="text-lg text-muted-foreground">
              Understanding and treating pimples and bumps on the scalp.
            </p>
          </header>

          <section className="prose prose-lg max-w-none mb-10">
            <p className="text-foreground leading-relaxed">
              Pimples on the scalp are more common than many people realise. Like facial acne, scalp acne occurs when hair follicles become clogged with oil, dead skin cells, and sometimes bacteria. It can be uncomfortable and, if severe, may affect hair health. Fortunately, scalp acne usually responds well to treatment.
            </p>
          </section>

          <section className="mb-10 p-6 rounded-xl bg-primary/5 border border-primary/20">
            <h2 className="font-heading text-xl font-semibold text-foreground mb-3">
              Quick Answer
            </h2>
            <p className="text-foreground leading-relaxed">
              Scalp acne develops when follicles become clogged with sebum, dead cells, and bacteria. Common causes include heavy hair products, infrequent washing, sweat, and hormonal factors. Treatment involves regular cleansing with salicylic acid or benzoyl peroxide, avoiding pore-clogging products, and sometimes prescription medications.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              What Causes Scalp Acne?
            </h2>
            
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Clogged Follicles</h3>
                <p className="text-muted-foreground">
                  The scalp has many sebaceous glands. When excess oil combines with dead skin cells and product residue, it can block hair follicles, creating an environment for bacteria to thrive.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Hair Products</h3>
                <p className="text-muted-foreground">
                  Oils, pomades, waxes, heavy conditioners, and styling products can clog pores. Products that are not fully rinsed out accumulate and contribute to blockages.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Infrequent Washing</h3>
                <p className="text-muted-foreground">
                  Allowing oil and product to build up between washes increases the risk of clogged follicles. People with oily scalps may need more frequent washing.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Sweat and Headwear</h3>
                <p className="text-muted-foreground">
                  Exercise, hot weather, and wearing hats or helmets create a warm, moist environment that promotes bacterial growth. Not washing after sweating increases risk.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Hormonal Factors</h3>
                <p className="text-muted-foreground">
                  Like facial acne, scalp acne can be influenced by hormonal fluctuations. This is why it may worsen during puberty, menstruation, or times of hormonal change.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Types of Scalp Breakouts
            </h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Scalp Acne</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Comedones (blackheads/whiteheads)</li>
                  <li>Papules (small red bumps)</li>
                  <li>Pustules (pus-filled pimples)</li>
                  <li>Similar to facial acne</li>
                </ul>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Scalp Folliculitis</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Infected/inflamed hair follicles</li>
                  <li>May be bacterial, fungal, or viral</li>
                  <li>Often itchy or painful</li>
                  <li>Can occur from shaving or friction</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Treatment Options
            </h2>
            
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Medicated Shampoos</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li><strong>Salicylic acid:</strong> Exfoliates and unclogs pores</li>
                  <li><strong>Benzoyl peroxide:</strong> Kills bacteria (may bleach hair)</li>
                  <li><strong>Tea tree oil:</strong> Natural antibacterial properties</li>
                  <li><strong>Zinc pyrithione:</strong> Antibacterial and antifungal</li>
                </ul>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Topical Treatments</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Spot treatments with salicylic acid or benzoyl peroxide</li>
                  <li>Topical antibiotics (clindamycin, erythromycin)</li>
                  <li>Topical retinoids for persistent cases</li>
                </ul>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Prescription Options</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Oral antibiotics for bacterial folliculitis</li>
                  <li>Antifungal medications if yeast-related</li>
                  <li>Isotretinoin for severe, resistant cases</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Prevention Strategies
            </h2>
            
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Cleansing Habits</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Wash hair regularly, especially after sweating</li>
                  <li>Focus shampoo on the scalp, not just hair</li>
                  <li>Rinse thoroughly to remove all product</li>
                  <li>Use a clarifying shampoo weekly if you use many products</li>
                </ul>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Product Choices</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Choose lightweight, non-comedogenic products</li>
                  <li>Avoid heavy oils and waxes on the scalp</li>
                  <li>Apply styling products to hair lengths, not roots</li>
                  <li>Check ingredient lists for common cloggers</li>
                </ul>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Lifestyle Factors</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Wash or wipe down helmets and hats regularly</li>
                  <li>Change pillowcases frequently</li>
                  <li>Avoid touching or scratching the scalp</li>
                  <li>Shower after exercise</li>
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
                <p className="font-medium text-foreground mb-1">Myth: Scalp acne means your scalp is dirty</p>
                <p className="text-muted-foreground text-sm">
                  Scalp acne is not caused by poor hygiene alone. It is related to oil production, product use, bacteria, and sometimes hormones. Over-washing with harsh products can actually worsen it.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-muted/50 border border-border">
                <p className="font-medium text-foreground mb-1">Myth: Popping pimples helps them heal faster</p>
                <p className="text-muted-foreground text-sm">
                  Popping or picking at scalp pimples spreads bacteria, increases inflammation, and can cause scarring or permanent follicle damage. Leave them alone or seek professional treatment.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              When to See a Doctor
            </h2>
            <ul className="list-disc list-inside space-y-2 text-foreground mb-4">
              <li>Scalp acne is severe, painful, or spreading</li>
              <li>Over-the-counter treatments are not working after 4-6 weeks</li>
              <li>Pimples are deep, cystic, or leave scars</li>
              <li>You notice hair loss in affected areas</li>
              <li>There are signs of infection (increased pain, pus, fever)</li>
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

export default ScalpAcnePage;