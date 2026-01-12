import SEOHead from "@/components/SEOHead";
import ContentPageLayout from "@/components/ContentPageLayout";
import Breadcrumb from "@/components/Breadcrumb";
import FAQSection from "@/components/FAQSection";
import ChatCTA from "@/components/ChatCTA";
import MedicalDisclaimer from "@/components/MedicalDisclaimer";
import RelatedArticles from "@/components/RelatedArticles";

const DandruffVsDryScalpPage = () => {
  const faqs = [
    {
      question: "Can you have both dandruff and dry scalp?",
      answer: "While they are distinct conditions, it is possible to have elements of both, or to develop one while treating the other. For example, using harsh anti-dandruff shampoos too frequently can dry out the scalp. A balanced approach is important."
    },
    {
      question: "Does dandruff cause hair loss?",
      answer: "Dandruff itself does not typically cause hair loss, but severe scratching from itching can damage follicles. Additionally, severe seborrheic dermatitis with significant inflammation may affect hair growth. Treating the dandruff usually resolves any related hair issues."
    },
    {
      question: "Why do I still have flakes after using anti-dandruff shampoo?",
      answer: "If flakes persist, you may have dry scalp (not dandruff), the shampoo may not contain the right active ingredient for your condition, or you may need to use it more consistently. If products are not working after several weeks, consult a dermatologist."
    },
    {
      question: "Is dandruff contagious?",
      answer: "No, dandruff is not contagious. While the Malassezia yeast associated with dandruff is present on all scalps, dandruff develops due to individual sensitivity and sebum production, not transmission from others."
    }
  ];

  const relatedArticles = [
    {
      title: "Seborrheic Dermatitis on the Scalp",
      href: "/scalp-health/seborrheic-dermatitis",
      description: "Understanding the more severe form of dandruff."
    },
    {
      title: "What is a Healthy Scalp?",
      href: "/scalp-health/healthy-scalp",
      description: "Characteristics of optimal scalp health."
    },
    {
      title: "Best Ingredients for Scalp Health",
      href: "/scalp-health/best-ingredients",
      description: "Active ingredients that treat scalp conditions."
    }
  ];

  return (
    <>
      <SEOHead 
        title="Dandruff vs Dry Scalp: How to Tell the Difference | HairCare.ai"
        description="Learn to distinguish between dandruff and dry scalp, understand their different causes, and find the right treatment approach for each condition."
        canonicalUrl="https://haircare.ai/scalp-health/dandruff-vs-dry-scalp"
        articleSchema={{
          headline: "Dandruff vs Dry Scalp: How to Tell the Difference",
          description: "Learn to distinguish between dandruff and dry scalp and find the right treatment approach.",
          datePublished: "2024-12-28",
          dateModified: "2024-12-28"
        }}
        faqSchema={faqs}
      />
      
      <ContentPageLayout>
        <article className="max-w-4xl mx-auto" itemScope itemType="https://schema.org/Article">
          <Breadcrumb items={[
            { label: "Scalp Health", href: "/scalp-health" },
            { label: "Dandruff vs Dry Scalp" }
          ]} />
          
          <header className="mb-8">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4" itemProp="headline">
              Dandruff vs Dry Scalp
            </h1>
            <p className="text-lg text-muted-foreground">
              Understanding two commonly confused scalp conditions.
            </p>
          </header>

          <section className="prose prose-lg max-w-none mb-10">
            <p className="text-foreground leading-relaxed">
              Both dandruff and dry scalp cause flaking and can be uncomfortable, leading many people to assume they are the same condition. However, they have different causes and require different treatments. Using the wrong approach can worsen your symptoms or fail to address the underlying issue.
            </p>
            <p className="text-foreground leading-relaxed">
              This guide explains the key differences between dandruff and dry scalp, how to identify which you have, and the most effective treatment strategies for each.
            </p>
          </section>

          <section className="mb-10 p-6 rounded-xl bg-primary/5 border border-primary/20">
            <h2 className="font-heading text-xl font-semibold text-foreground mb-3">
              Quick Answer
            </h2>
            <p className="text-foreground leading-relaxed">
              Dandruff produces oily, yellowish flakes and is caused by yeast overgrowth on an oily scalp. Dry scalp produces smaller, white flakes and results from insufficient moisture. Dandruff needs antifungal treatment; dry scalp needs gentle moisturising care. The appearance of flakes and scalp condition are key distinguishing features.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              What is Dandruff?
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              Dandruff (seborrheic dermatitis of the scalp) is a common condition affecting up to 50% of adults at some point. It is characterised by flaking, itching, and sometimes redness, occurring on a scalp that is typically oily rather than dry.
            </p>
            
            <div className="p-4 rounded-lg bg-card border border-border mb-4">
              <h3 className="font-semibold text-foreground mb-2">What Causes Dandruff</h3>
              <p className="text-muted-foreground mb-2">
                Dandruff is primarily associated with Malassezia, a yeast that naturally lives on the scalp. In some individuals:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>The yeast feeds on scalp oils (sebum), producing oleic acid as a byproduct</li>
                <li>Sensitivity to oleic acid triggers inflammation and rapid skin cell turnover</li>
                <li>Dead cells clump together with oil, forming visible flakes</li>
                <li>More sebum often means more severe dandruff</li>
              </ul>
            </div>

            <div className="p-4 rounded-lg bg-card border border-border">
              <h3 className="font-semibold text-foreground mb-2">Dandruff Characteristics</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Flakes are larger, yellowish or white, and often oily</li>
                <li>Scalp may appear greasy between washes</li>
                <li>Often accompanied by redness, especially around the hairline</li>
                <li>Tends to be worse in areas with more oil glands</li>
                <li>May affect eyebrows, sides of nose, and behind ears</li>
                <li>Often improves in summer, worsens in winter</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              What is Dry Scalp?
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              Dry scalp occurs when the skin lacks sufficient moisture or natural oils to remain supple and hydrated. It is essentially the same as dry skin elsewhere on the body and shares similar causes and treatments.
            </p>
            
            <div className="p-4 rounded-lg bg-card border border-border mb-4">
              <h3 className="font-semibold text-foreground mb-2">What Causes Dry Scalp</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Cold, dry weather with low humidity</li>
                <li>Over-washing or using harsh, stripping shampoos</li>
                <li>Hot water when washing hair</li>
                <li>Dehydration or insufficient water intake</li>
                <li>Age-related decrease in natural oil production</li>
                <li>Irritation from certain hair products</li>
              </ul>
            </div>

            <div className="p-4 rounded-lg bg-card border border-border">
              <h3 className="font-semibold text-foreground mb-2">Dry Scalp Characteristics</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Flakes are smaller, white, and dry (not oily)</li>
                <li>Scalp feels tight and may be sensitive</li>
                <li>Hair may also appear dry and dull</li>
                <li>Skin elsewhere on the body may also be dry</li>
                <li>Usually no redness or inflammation</li>
                <li>Often worse in winter or dry climates</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              How to Tell the Difference
            </h2>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-border rounded-lg">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="border border-border p-3 text-left font-semibold text-foreground">Feature</th>
                    <th className="border border-border p-3 text-left font-semibold text-foreground">Dandruff</th>
                    <th className="border border-border p-3 text-left font-semibold text-foreground">Dry Scalp</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border p-3 text-foreground font-medium">Flake appearance</td>
                    <td className="border border-border p-3 text-muted-foreground">Larger, yellowish, oily</td>
                    <td className="border border-border p-3 text-muted-foreground">Smaller, white, dry</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 text-foreground font-medium">Scalp condition</td>
                    <td className="border border-border p-3 text-muted-foreground">Oily, may be red</td>
                    <td className="border border-border p-3 text-muted-foreground">Dry, tight feeling</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 text-foreground font-medium">Hair appearance</td>
                    <td className="border border-border p-3 text-muted-foreground">Often oily at roots</td>
                    <td className="border border-border p-3 text-muted-foreground">Often dry and dull</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 text-foreground font-medium">Itching</td>
                    <td className="border border-border p-3 text-muted-foreground">Often intense</td>
                    <td className="border border-border p-3 text-muted-foreground">Usually mild</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 text-foreground font-medium">After washing</td>
                    <td className="border border-border p-3 text-muted-foreground">Temporary improvement</td>
                    <td className="border border-border p-3 text-muted-foreground">May feel worse</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Treatment for Dandruff
            </h2>
            
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Anti-Dandruff Shampoos</h3>
                <p className="text-muted-foreground mb-2">Look for active ingredients that target yeast or reduce cell turnover:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li><strong>Zinc pyrithione:</strong> Antifungal and antibacterial</li>
                  <li><strong>Ketoconazole:</strong> Antifungal (available over-the-counter and prescription)</li>
                  <li><strong>Selenium sulfide:</strong> Slows cell turnover and reduces Malassezia</li>
                  <li><strong>Salicylic acid:</strong> Helps remove scales</li>
                  <li><strong>Coal tar:</strong> Slows skin cell production</li>
                </ul>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Usage Tips</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Use anti-dandruff shampoo 2-3 times per week initially</li>
                  <li>Leave shampoo on scalp for 3-5 minutes before rinsing</li>
                  <li>Rotate between different active ingredients if one stops working</li>
                  <li>Continue maintenance use even after improvement</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Treatment for Dry Scalp
            </h2>
            
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Moisturising Approach</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Switch to a gentle, moisturising shampoo (sulphate-free)</li>
                  <li>Reduce washing frequency if possible</li>
                  <li>Use lukewarm rather than hot water</li>
                  <li>Consider a pre-shampoo scalp oil treatment</li>
                  <li>Look for shampoos with glycerin, hyaluronic acid, or aloe</li>
                </ul>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Lifestyle Adjustments</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Increase water intake</li>
                  <li>Use a humidifier in dry environments</li>
                  <li>Protect scalp from extreme cold and wind</li>
                  <li>Avoid products with alcohol or other drying ingredients</li>
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
                <p className="font-medium text-foreground mb-1">Myth: Dandruff means you have a dirty scalp</p>
                <p className="text-muted-foreground text-sm">
                  Dandruff is not caused by poor hygiene. It is a response to yeast and oils on the scalp. Over-washing with harsh products can actually worsen both dandruff and dry scalp.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-muted/50 border border-border">
                <p className="font-medium text-foreground mb-1">Myth: All flakes are dandruff</p>
                <p className="text-muted-foreground text-sm">
                  Dry scalp, psoriasis, product buildup, and other conditions also cause flaking. Correct identification is essential for effective treatment.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-muted/50 border border-border">
                <p className="font-medium text-foreground mb-1">Myth: Dandruff can be permanently cured</p>
                <p className="text-muted-foreground text-sm">
                  Dandruff is a chronic condition that can be effectively controlled but not permanently eliminated. Ongoing maintenance treatment is typically needed.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              When to See a Doctor
            </h2>
            <ul className="list-disc list-inside space-y-2 text-foreground mb-4">
              <li>Over-the-counter treatments are not working after 4-6 weeks</li>
              <li>Symptoms are severe, spreading, or worsening</li>
              <li>There is significant redness, swelling, or oozing</li>
              <li>Hair loss accompanies the scalp symptoms</li>
              <li>Symptoms spread beyond the scalp to face or body</li>
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

export default DandruffVsDryScalpPage;