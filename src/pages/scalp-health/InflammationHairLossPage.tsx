import SEOHead from "@/components/SEOHead";
import ContentPageLayout from "@/components/ContentPageLayout";
import Breadcrumb from "@/components/Breadcrumb";
import FAQSection from "@/components/FAQSection";
import ChatCTA from "@/components/ChatCTA";
import MedicalDisclaimer from "@/components/MedicalDisclaimer";
import RelatedArticles from "@/components/RelatedArticles";

const InflammationHairLossPage = () => {
  const faqs = [
    {
      question: "Can scalp inflammation cause permanent hair loss?",
      answer: "Mild inflammation typically does not cause permanent loss. However, chronic or severe inflammation can damage follicles irreversibly. Scarring alopecias (like lichen planopilaris) destroy follicles permanently. Early treatment of inflammatory conditions is crucial to prevent permanent damage."
    },
    {
      question: "How do I know if my hair loss is from inflammation?",
      answer: "Signs include scalp symptoms (redness, itching, burning, pain, scaling) alongside hair loss. The hair loss pattern may be patchy or diffuse. A dermatologist can examine your scalp with dermoscopy to look for perifollicular inflammation and other signs."
    },
    {
      question: "Can anti-inflammatory diet help scalp inflammation?",
      answer: "While diet alone is unlikely to cure inflammatory scalp conditions, a diet rich in anti-inflammatory foods (omega-3s, antioxidants, vegetables, whole grains) may support overall skin health. It is complementary to, not a replacement for, medical treatment."
    },
    {
      question: "Does stress cause scalp inflammation?",
      answer: "Stress can trigger or worsen inflammatory scalp conditions. It affects the immune system and increases pro-inflammatory signals. Managing stress may help reduce flares of conditions like psoriasis, seborrheic dermatitis, and lichen planopilaris."
    }
  ];

  const relatedArticles = [
    {
      title: "Seborrheic Dermatitis",
      href: "/scalp-health/seborrheic-dermatitis",
      description: "A common inflammatory scalp condition."
    },
    {
      title: "Scalp Psoriasis",
      href: "/scalp-health/psoriasis",
      description: "Autoimmune inflammation affecting the scalp."
    },
    {
      title: "Telogen Effluvium",
      href: "/hair-loss/telogen-effluvium",
      description: "How inflammation can trigger hair shedding."
    }
  ];

  return (
    <>
      <SEOHead 
        title="Scalp Inflammation and Hair Loss: The Connection | HairCare.ai"
        description="Understand how scalp inflammation affects hair growth, which inflammatory conditions cause hair loss, and how treating inflammation can help restore hair."
        canonicalUrl="https://haircare.ai/scalp-health/inflammation-hair-loss"
        articleSchema={{
          headline: "Scalp Inflammation and Hair Loss: The Connection",
          description: "Understand how scalp inflammation affects hair growth and how to address it.",
          datePublished: "2024-12-28",
          dateModified: "2024-12-28"
        }}
        faqSchema={faqs}
      />
      
      <ContentPageLayout>
        <article className="max-w-4xl mx-auto" itemScope itemType="https://schema.org/Article">
          <Breadcrumb items={[
            { label: "Scalp Health", href: "/scalp-health" },
            { label: "Inflammation and Hair Loss" }
          ]} />
          
          <header className="mb-8">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4" itemProp="headline">
              Scalp Inflammation and Hair Loss
            </h1>
            <p className="text-lg text-muted-foreground">
              Understanding the connection between inflammation and hair health.
            </p>
          </header>

          <section className="prose prose-lg max-w-none mb-10">
            <p className="text-foreground leading-relaxed">
              The relationship between scalp inflammation and hair loss is significant and often underappreciated. Inflammation can disrupt the hair growth cycle, damage follicles, and in severe cases, lead to permanent hair loss. Understanding this connection is key to protecting your hair and seeking appropriate treatment when needed.
            </p>
          </section>

          <section className="mb-10 p-6 rounded-xl bg-primary/5 border border-primary/20">
            <h2 className="font-heading text-xl font-semibold text-foreground mb-3">
              Quick Answer
            </h2>
            <p className="text-foreground leading-relaxed">
              Scalp inflammation disrupts the hair follicle environment, potentially causing telogen effluvium (shedding) or, if severe and chronic, permanent scarring hair loss. Inflammatory conditions like seborrheic dermatitis, psoriasis, and scarring alopecias can all affect hair. Treating the inflammation is essential to preserve hair.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              How Inflammation Affects Hair Follicles
            </h2>
            
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Disrupted Growth Cycle</h3>
                <p className="text-muted-foreground">
                  Inflammation around hair follicles can prematurely push hairs from the growth (anagen) phase into the resting (telogen) phase. This leads to increased shedding and reduced hair density.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Impaired Nutrient Supply</h3>
                <p className="text-muted-foreground">
                  Inflammation can affect blood flow and nutrient delivery to hair follicles. This can result in weaker hair production or slowed growth.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Follicle Damage</h3>
                <p className="text-muted-foreground">
                  In severe or prolonged inflammation, the immune cells attacking the area can damage the follicle structure. If the stem cells that regenerate hair are destroyed, loss becomes permanent (scarring alopecia).
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Miniaturisation</h3>
                <p className="text-muted-foreground">
                  There is growing evidence that low-grade inflammation may contribute to follicle miniaturisation in androgenetic alopecia, alongside hormonal factors.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Inflammatory Conditions That Affect Hair
            </h2>
            
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Non-Scarring (Reversible)</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li><strong>Seborrheic dermatitis:</strong> Mild to moderate inflammation, hair usually regrows with treatment</li>
                  <li><strong>Psoriasis:</strong> Can cause temporary hair loss in affected areas</li>
                  <li><strong>Alopecia areata:</strong> Autoimmune attack on follicles, reversible if follicles survive</li>
                  <li><strong>Folliculitis:</strong> Infected follicles, usually heals without scarring if treated</li>
                </ul>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Scarring (Potentially Permanent)</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li><strong>Lichen planopilaris:</strong> Lymphocytic attack destroys follicles</li>
                  <li><strong>Frontal fibrosing alopecia:</strong> Receding hairline variant of lichen planopilaris</li>
                  <li><strong>Discoid lupus:</strong> Autoimmune scarring alopecia</li>
                  <li><strong>Central centrifugal cicatricial alopecia:</strong> Scarring from crown outward</li>
                  <li><strong>Folliculitis decalvans:</strong> Bacterial-associated scarring</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Recognising Inflammatory Hair Loss
            </h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Symptoms to Note</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Scalp redness, especially around follicles</li>
                  <li>Itching, burning, or tenderness</li>
                  <li>Scaling or crusting</li>
                  <li>Pustules or bumps</li>
                  <li>Hair loss with visible scalp changes</li>
                </ul>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Warning Signs (See Doctor Promptly)</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Smooth, shiny patches (possible scarring)</li>
                  <li>Loss of visible follicle openings</li>
                  <li>Rapidly progressive hair loss</li>
                  <li>Persistent symptoms despite treatment</li>
                  <li>Significant pain or tenderness</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Treatment Approaches
            </h2>
            
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Topical Treatments</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Topical corticosteroids to reduce inflammation</li>
                  <li>Calcineurin inhibitors (tacrolimus, pimecrolimus)</li>
                  <li>Antifungal or antibacterial treatments if infection present</li>
                  <li>Medicated shampoos for seborrheic dermatitis or psoriasis</li>
                </ul>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Systemic Treatments</h3>
                <p className="text-muted-foreground mb-2">For moderate to severe conditions:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Oral corticosteroids (short-term)</li>
                  <li>Hydroxychloroquine for scarring alopecias</li>
                  <li>Oral antibiotics if bacterial component</li>
                  <li>Immunosuppressants in severe autoimmune cases</li>
                </ul>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Intralesional Injections</h3>
                <p className="text-muted-foreground">
                  Steroid injections directly into affected areas can be effective for localised conditions like alopecia areata or active scarring alopecia. This delivers anti-inflammatory medication directly to the follicle.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Common Myths</h2>
            
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-muted/50 border border-border">
                <p className="font-medium text-foreground mb-1">Myth: Scalp inflammation is always visible</p>
                <p className="text-muted-foreground text-sm">
                  Inflammation can be subtle or hidden beneath hair. Dermoscopy (magnified examination) often reveals perifollicular redness that is not obvious to the naked eye.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-muted/50 border border-border">
                <p className="font-medium text-foreground mb-1">Myth: If my scalp does not itch, there is no inflammation</p>
                <p className="text-muted-foreground text-sm">
                  Not all inflammation causes itching. Some scarring alopecias progress silently with minimal symptoms until significant hair loss has occurred. Regular scalp checks are important.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-muted/50 border border-border">
                <p className="font-medium text-foreground mb-1">Myth: Inflammatory hair loss always grows back</p>
                <p className="text-muted-foreground text-sm">
                  While many inflammatory conditions cause temporary loss, scarring alopecias destroy follicles permanently. Early intervention is critical to prevent irreversible damage.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              When to See a Doctor
            </h2>
            <ul className="list-disc list-inside space-y-2 text-foreground mb-4">
              <li>Hair loss accompanied by scalp symptoms (redness, pain, scaling)</li>
              <li>Patchy hair loss with visible scalp changes</li>
              <li>Persistent scalp inflammation not responding to OTC treatments</li>
              <li>Smooth, scarred-looking patches of hair loss</li>
              <li>Rapidly progressive hair loss</li>
              <li>Any concern about inflammatory or scarring conditions</li>
            </ul>
            <p className="text-foreground leading-relaxed">
              Early diagnosis and treatment of inflammatory scalp conditions can prevent permanent hair loss. Do not delay seeking evaluation if you notice concerning symptoms.
            </p>
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

export default InflammationHairLossPage;