import SEOHead from "@/components/SEOHead";
import ContentPageLayout from "@/components/ContentPageLayout";
import Breadcrumb from "@/components/Breadcrumb";
import FAQSection from "@/components/FAQSection";
import ChatCTA from "@/components/ChatCTA";
import MedicalDisclaimer from "@/components/MedicalDisclaimer";
import RelatedArticles from "@/components/RelatedArticles";

const BestIngredientsPage = () => {
  const faqs = [
    {
      question: "What ingredient is best for dandruff?",
      answer: "Zinc pyrithione, ketoconazole, and selenium sulfide are most effective for dandruff as they target the Malassezia yeast that causes it. Salicylic acid helps remove flakes. Coal tar reduces cell turnover. Choose based on severity and personal response."
    },
    {
      question: "Are natural ingredients effective for scalp health?",
      answer: "Some natural ingredients have scientific support: tea tree oil has antibacterial/antifungal properties, peppermint oil may stimulate circulation, and aloe vera soothes irritation. However, they are often less potent than proven pharmaceutical ingredients for treating conditions."
    },
    {
      question: "Can I use facial skincare ingredients on my scalp?",
      answer: "Many ingredients overlap (salicylic acid, niacinamide, hyaluronic acid). However, scalp products are formulated differently due to hair and sebaceous gland density. Facial products may not rinse easily from hair or may be too concentrated. Scalp-specific formulations are preferable."
    },
    {
      question: "What ingredients should I avoid for sensitive scalp?",
      answer: "Common irritants include sulfates (SLS/SLES), fragrances, alcohol, formaldehyde-releasing preservatives, and some essential oils. If you have a sensitive scalp, choose fragrance-free, gentle formulations and patch test new products."
    }
  ];

  const relatedArticles = [
    {
      title: "What is a Healthy Scalp?",
      href: "/scalp-health/healthy-scalp",
      description: "Understanding optimal scalp health."
    },
    {
      title: "Dandruff vs Dry Scalp",
      href: "/scalp-health/dandruff-vs-dry-scalp",
      description: "Choosing the right ingredients for your condition."
    },
    {
      title: "Seborrheic Dermatitis",
      href: "/scalp-health/seborrheic-dermatitis",
      description: "Key ingredients for treating this condition."
    }
  ];

  return (
    <>
      <SEOHead 
        title="Best Ingredients for Scalp Health: A Complete Guide | HairCare.ai"
        description="Learn about the most effective ingredients for scalp health, from antifungals and exfoliants to soothing and moisturising agents. Evidence-based guide."
        canonicalUrl="https://haircare.ai/scalp-health/best-ingredients"
        articleSchema={{
          headline: "Best Ingredients for Scalp Health: A Complete Guide",
          description: "Learn about the most effective ingredients for scalp health.",
          datePublished: "2024-12-28",
          dateModified: "2024-12-28"
        }}
        faqSchema={faqs}
      />
      
      <ContentPageLayout>
        <article className="max-w-4xl mx-auto" itemScope itemType="https://schema.org/Article">
          <Breadcrumb items={[
            { label: "Scalp Health", href: "/scalp-health" },
            { label: "Best Ingredients" }
          ]} />
          
          <header className="mb-8">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4" itemProp="headline">
              Best Ingredients for Scalp Health
            </h1>
            <p className="text-lg text-muted-foreground">
              A guide to the most effective ingredients for various scalp concerns.
            </p>
          </header>

          <section className="prose prose-lg max-w-none mb-10">
            <p className="text-foreground leading-relaxed">
              Understanding scalp care ingredients helps you choose products tailored to your specific needs. Whether you are dealing with dandruff, dryness, oiliness, or sensitivity, certain ingredients have proven effectiveness. This guide covers the key categories of scalp care ingredients and when to use them.
            </p>
          </section>

          <section className="mb-10 p-6 rounded-xl bg-primary/5 border border-primary/20">
            <h2 className="font-heading text-xl font-semibold text-foreground mb-3">
              Quick Answer
            </h2>
            <p className="text-foreground leading-relaxed">
              Key scalp ingredients include antifungals (ketoconazole, zinc pyrithione) for dandruff, exfoliants (salicylic acid) for buildup and scaling, moisturisers (hyaluronic acid, glycerin) for dry scalp, and soothing agents (aloe, niacinamide) for irritation. Choose based on your specific scalp concern.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Antifungal Ingredients
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              Essential for treating dandruff and seborrheic dermatitis, which involve Malassezia yeast overgrowth:
            </p>
            
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Ketoconazole</h3>
                <p className="text-muted-foreground">
                  One of the most effective antifungals for scalp conditions. Available in 1% (OTC) and 2% (prescription) strengths. Also has anti-inflammatory properties. May help with androgenetic alopecia by reducing scalp inflammation.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Zinc Pyrithione</h3>
                <p className="text-muted-foreground">
                  Widely used, effective antifungal with antibacterial properties. Found in many anti-dandruff shampoos. Generally well-tolerated. Works by disrupting yeast cell function.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Selenium Sulfide</h3>
                <p className="text-muted-foreground">
                  Reduces Malassezia and slows skin cell turnover. Effective for moderate to severe dandruff. May discolour light or chemically treated hair with prolonged contact.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Piroctone Olamine</h3>
                <p className="text-muted-foreground">
                  A gentler antifungal often used in cosmetic formulations. Effective for mild dandruff. Less drying than some alternatives. Good for maintenance.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Tea Tree Oil</h3>
                <p className="text-muted-foreground">
                  Natural antifungal and antibacterial. Studies show 5% tea tree oil can improve dandruff. May cause sensitivity in some people. Usually used as a complementary ingredient.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Exfoliating Ingredients
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              Help remove dead skin cells, scales, and product buildup:
            </p>
            
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Salicylic Acid</h3>
                <p className="text-muted-foreground">
                  A beta hydroxy acid (BHA) that penetrates oil and unclogs pores. Excellent for removing scales in psoriasis and seborrheic dermatitis. Also helps with acne-prone scalps.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Glycolic Acid</h3>
                <p className="text-muted-foreground">
                  An alpha hydroxy acid (AHA) that exfoliates the surface. Less oil-soluble than salicylic acid but effective for general exfoliation. Use with caution on sensitive scalps.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Coal Tar</h3>
                <p className="text-muted-foreground">
                  Slows skin cell production and helps remove scales. Effective for psoriasis and severe dandruff. Has a distinctive smell and may stain. Works well but cosmetically less elegant.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Moisturising and Soothing Ingredients
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              Important for dry, sensitive, or irritated scalps:
            </p>
            
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Hyaluronic Acid</h3>
                <p className="text-muted-foreground">
                  Humectant that draws moisture to the skin. Helps hydrate dry scalps without adding oil. Lightweight and non-irritating. Becoming more common in scalp-specific products.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Glycerin</h3>
                <p className="text-muted-foreground">
                  Classic humectant that helps retain moisture. Found in many shampoos and scalp treatments. Safe and effective for most scalp types.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Aloe Vera</h3>
                <p className="text-muted-foreground">
                  Soothing, anti-inflammatory, and mildly moisturising. Helpful for irritated or sunburned scalps. Well-tolerated by most people.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Niacinamide (Vitamin B3)</h3>
                <p className="text-muted-foreground">
                  Anti-inflammatory, supports skin barrier function, and helps regulate sebum. Increasingly used in scalp care for its versatility and tolerability.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Panthenol (Pro-Vitamin B5)</h3>
                <p className="text-muted-foreground">
                  Moisturises, soothes, and helps with scalp barrier repair. Also benefits hair by adding shine and reducing breakage. Found in many shampoos and conditioners.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Anti-Inflammatory Ingredients
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              Help calm irritation and reduce redness:
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Prescription</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Topical corticosteroids</li>
                  <li>Calcineurin inhibitors</li>
                </ul>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Over-the-Counter</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Niacinamide</li>
                  <li>Allantoin</li>
                  <li>Bisabolol</li>
                  <li>Centella asiatica</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Ingredients by Concern
            </h2>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-border rounded-lg">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="border border-border p-3 text-left font-semibold text-foreground">Concern</th>
                    <th className="border border-border p-3 text-left font-semibold text-foreground">Key Ingredients</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border p-3 text-foreground font-medium">Dandruff</td>
                    <td className="border border-border p-3 text-muted-foreground">Zinc pyrithione, ketoconazole, selenium sulfide, salicylic acid</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 text-foreground font-medium">Dry Scalp</td>
                    <td className="border border-border p-3 text-muted-foreground">Hyaluronic acid, glycerin, aloe vera, oils (argan, jojoba)</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 text-foreground font-medium">Oily Scalp</td>
                    <td className="border border-border p-3 text-muted-foreground">Salicylic acid, zinc, tea tree oil, niacinamide</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 text-foreground font-medium">Psoriasis</td>
                    <td className="border border-border p-3 text-muted-foreground">Coal tar, salicylic acid, prescription steroids, vitamin D analogues</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 text-foreground font-medium">Sensitive Scalp</td>
                    <td className="border border-border p-3 text-muted-foreground">Aloe vera, niacinamide, centella, fragrance-free formulas</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 text-foreground font-medium">Product Buildup</td>
                    <td className="border border-border p-3 text-muted-foreground">Salicylic acid, charcoal, clay, clarifying surfactants</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Common Myths</h2>
            
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-muted/50 border border-border">
                <p className="font-medium text-foreground mb-1">Myth: Natural is always better</p>
                <p className="text-muted-foreground text-sm">
                  "Natural" does not equal safe or effective. Some natural ingredients cause irritation (essential oils), while proven pharmaceutical ingredients are highly effective and well-studied.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-muted/50 border border-border">
                <p className="font-medium text-foreground mb-1">Myth: More ingredients means better products</p>
                <p className="text-muted-foreground text-sm">
                  Complex formulas are not necessarily more effective. Sometimes a simple formula with one or two well-chosen active ingredients works better and causes less irritation.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-muted/50 border border-border">
                <p className="font-medium text-foreground mb-1">Myth: If it works for skin, it works for scalp</p>
                <p className="text-muted-foreground text-sm">
                  The scalp has different characteristics than facial skin, including more hair follicles and sebaceous glands. Products need to be formulated to work through hair and rinse properly.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              When to Seek Professional Guidance
            </h2>
            <ul className="list-disc list-inside space-y-2 text-foreground mb-4">
              <li>Over-the-counter products are not improving your condition</li>
              <li>You have a diagnosed condition requiring specific treatment</li>
              <li>You experience irritation or adverse reactions</li>
              <li>You are unsure which ingredients are right for your concern</li>
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

export default BestIngredientsPage;