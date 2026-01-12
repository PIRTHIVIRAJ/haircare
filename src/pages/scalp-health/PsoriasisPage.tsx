import SEOHead from "@/components/SEOHead";
import ContentPageLayout from "@/components/ContentPageLayout";
import Breadcrumb from "@/components/Breadcrumb";
import FAQSection from "@/components/FAQSection";
import ChatCTA from "@/components/ChatCTA";
import MedicalDisclaimer from "@/components/MedicalDisclaimer";
import RelatedArticles from "@/components/RelatedArticles";

const PsoriasisPage = () => {
  const faqs = [
    {
      question: "Does scalp psoriasis cause permanent hair loss?",
      answer: "Scalp psoriasis itself does not destroy hair follicles, so hair loss is typically temporary. However, aggressive scratching, picking at scales, or harsh treatments can damage follicles. Hair usually regrows once the psoriasis is controlled and treated gently."
    },
    {
      question: "How can I tell if I have scalp psoriasis or dandruff?",
      answer: "Scalp psoriasis produces thicker, silvery-white scales with well-defined red patches. Dandruff causes smaller, oilier, yellowish flakes without the thick plaques or sharp borders. Psoriasis may also affect other body areas and nails."
    },
    {
      question: "Can stress trigger scalp psoriasis flares?",
      answer: "Yes, stress is a well-documented trigger for psoriasis flares. Managing stress through exercise, adequate sleep, and relaxation techniques can help reduce the frequency and severity of flares alongside medical treatment."
    },
    {
      question: "Is scalp psoriasis contagious?",
      answer: "No, psoriasis is not contagious. It is an autoimmune condition caused by genetic and environmental factors, not infection. You cannot catch psoriasis from someone who has it."
    }
  ];

  const relatedArticles = [
    {
      title: "Scalp Inflammation and Hair Loss",
      href: "/scalp-health/inflammation-hair-loss",
      description: "How inflammation affects hair growth."
    },
    {
      title: "Seborrheic Dermatitis",
      href: "/scalp-health/seborrheic-dermatitis",
      description: "A condition often confused with psoriasis."
    },
    {
      title: "Best Ingredients for Scalp Health",
      href: "/scalp-health/best-ingredients",
      description: "Ingredients that can help scalp conditions."
    }
  ];

  return (
    <>
      <SEOHead 
        title="Scalp Psoriasis Explained: Symptoms, Causes, and Treatment | HairCare.ai"
        description="Comprehensive guide to scalp psoriasis, including how it differs from dandruff, treatment options, and strategies for managing this chronic condition."
        canonicalUrl="https://haircare.ai/scalp-health/psoriasis"
        articleSchema={{
          headline: "Scalp Psoriasis Explained: Symptoms, Causes, and Treatment",
          description: "Comprehensive guide to scalp psoriasis, treatment options, and management strategies.",
          datePublished: "2024-12-28",
          dateModified: "2024-12-28"
        }}
        faqSchema={faqs}
      />
      
      <ContentPageLayout>
        <article className="max-w-4xl mx-auto" itemScope itemType="https://schema.org/Article">
          <Breadcrumb items={[
            { label: "Scalp Health", href: "/scalp-health" },
            { label: "Psoriasis" }
          ]} />
          
          <header className="mb-8">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4" itemProp="headline">
              Scalp Psoriasis Explained
            </h1>
            <p className="text-lg text-muted-foreground">
              Understanding this common and manageable autoimmune scalp condition.
            </p>
          </header>

          <section className="prose prose-lg max-w-none mb-10">
            <p className="text-foreground leading-relaxed">
              Scalp psoriasis affects approximately 45-56% of people with psoriasis, making the scalp one of the most commonly affected areas. It can range from mild, barely noticeable patches to severe cases covering the entire scalp with thick, crusted plaques. While chronic, scalp psoriasis can be effectively managed with appropriate treatment.
            </p>
          </section>

          <section className="mb-10 p-6 rounded-xl bg-primary/5 border border-primary/20">
            <h2 className="font-heading text-xl font-semibold text-foreground mb-3">
              Quick Answer
            </h2>
            <p className="text-foreground leading-relaxed">
              Scalp psoriasis is an autoimmune condition causing rapid skin cell turnover, resulting in thick, silvery scales over red, inflamed patches. Treatment includes medicated shampoos (coal tar, salicylic acid), topical steroids, vitamin D analogues, and systemic medications for severe cases. It is chronic but manageable.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              What Causes Scalp Psoriasis?
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              Psoriasis is an autoimmune condition where the immune system mistakenly attacks healthy skin cells, triggering rapid cell production:
            </p>
            
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">The Autoimmune Process</h3>
                <p className="text-muted-foreground">
                  In psoriasis, T-cells (immune cells) become overactive and attack skin cells. This triggers inflammation and accelerates skin cell production from the normal 28-day cycle to just 3-4 days. Cells pile up on the surface, forming scales.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Genetic Factors</h3>
                <p className="text-muted-foreground">
                  Psoriasis has a strong genetic component. If one parent has psoriasis, there is about a 10% chance their child will develop it. With two affected parents, the risk rises to 50%. However, not everyone with the genes develops psoriasis.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Common Triggers</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Stress (emotional or physical)</li>
                  <li>Skin injury (cuts, scrapes, sunburn)</li>
                  <li>Infections (strep throat, skin infections)</li>
                  <li>Certain medications (lithium, beta-blockers, antimalarials)</li>
                  <li>Cold, dry weather</li>
                  <li>Smoking and alcohol</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Symptoms and Appearance
            </h2>
            
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Characteristic Features</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Raised, reddish patches with silvery-white scales</li>
                  <li>Well-defined borders around affected areas</li>
                  <li>Thick, adherent scales that may resist removal</li>
                  <li>May extend beyond hairline onto forehead, ears, or neck</li>
                  <li>Itching (mild to severe)</li>
                  <li>Burning sensation or soreness</li>
                </ul>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Severity Spectrum</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li><strong>Mild:</strong> Fine scaling, similar to dandruff</li>
                  <li><strong>Moderate:</strong> Visible plaques with thicker scales</li>
                  <li><strong>Severe:</strong> Thick, crusted plaques covering much of scalp, extending beyond hairline</li>
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
                <h3 className="font-semibold text-foreground mb-2">Over-the-Counter Options</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li><strong>Coal tar shampoos:</strong> Slow skin cell turnover and reduce inflammation</li>
                  <li><strong>Salicylic acid:</strong> Helps soften and remove scales</li>
                  <li><strong>Zinc pyrithione:</strong> May provide mild benefit</li>
                </ul>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Prescription Topicals</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li><strong>Topical corticosteroids:</strong> Reduce inflammation; available in various strengths</li>
                  <li><strong>Vitamin D analogues:</strong> Calcipotriol/calcipotriene slows cell production</li>
                  <li><strong>Combination products:</strong> Steroid + vitamin D analogue</li>
                  <li><strong>Calcineurin inhibitors:</strong> For sensitive areas like face and ears</li>
                </ul>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Systemic Treatments</h3>
                <p className="text-muted-foreground mb-2">For moderate to severe cases not controlled by topicals:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Oral medications (methotrexate, cyclosporine, apremilast)</li>
                  <li>Biologic medications (targeting specific immune pathways)</li>
                  <li>Phototherapy (UVB light treatment)</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Practical Tips for Management
            </h2>
            
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Removing Scales Safely</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Apply oil or scale-softening product and leave overnight</li>
                  <li>Use a fine-toothed comb gently to remove loosened scales</li>
                  <li>Never pick or scratch aggressively (causes Koebner phenomenon)</li>
                  <li>Be patient—gentle repeated treatment works better than force</li>
                </ul>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Hair Care Considerations</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Use gentle shampoos between medicated treatments</li>
                  <li>Avoid excessive heat styling</li>
                  <li>Be gentle when brushing or styling</li>
                  <li>Consider shorter hairstyles for easier treatment application</li>
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
                <p className="font-medium text-foreground mb-1">Myth: Psoriasis is just a skin problem</p>
                <p className="text-muted-foreground text-sm">
                  Psoriasis is a systemic inflammatory condition associated with increased risk of psoriatic arthritis, cardiovascular disease, and other conditions. Proper management addresses overall health.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-muted/50 border border-border">
                <p className="font-medium text-foreground mb-1">Myth: Psoriasis can be cured with the right treatment</p>
                <p className="text-muted-foreground text-sm">
                  There is currently no cure for psoriasis. It is a chronic condition that can be effectively managed. Many people achieve clear or nearly clear skin with treatment, but the underlying condition persists.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              When to See a Doctor
            </h2>
            <ul className="list-disc list-inside space-y-2 text-foreground mb-4">
              <li>You suspect you have psoriasis (for proper diagnosis)</li>
              <li>Over-the-counter treatments are not helping</li>
              <li>Psoriasis is affecting your quality of life</li>
              <li>You develop joint pain or stiffness</li>
              <li>Symptoms are spreading or worsening</li>
              <li>You are interested in systemic treatments</li>
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

export default PsoriasisPage;