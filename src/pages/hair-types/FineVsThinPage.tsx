import SEOHead from "@/components/SEOHead";
import ContentPageLayout from "@/components/ContentPageLayout";
import Breadcrumb from "@/components/Breadcrumb";
import FAQSection from "@/components/FAQSection";
import ChatCTA from "@/components/ChatCTA";
import MedicalDisclaimer from "@/components/MedicalDisclaimer";
import ArticleNavigation from "@/components/ArticleNavigation";

const FineVsThinPage = () => {
  const faqs = [
    {
      question: "Can you have fine but thick hair?",
      answer: "Yes. Fine refers to strand diameter; thick refers to density (how many strands). Someone can have many fine strands (fine + high density) or few coarse strands (coarse + low density). These combinations require different approaches."
    },
    {
      question: "Does fine hair grow slower than thick hair?",
      answer: "Hair growth rate is determined by follicle activity, not strand diameter. Fine and thick strands grow at roughly the same rate—about 1 cm per month on average. Fine hair may seem slower because it is more prone to breakage at the ends."
    },
    {
      question: "Will my hair get thinner as I age?",
      answer: "Both diameter and density can decrease with age due to hormonal changes and reduced follicle activity. Hair often becomes finer (thinner individual strands) and may also thin (fewer strands overall). This varies greatly by genetics."
    },
    {
      question: "Can thin hair become thick again?",
      answer: "If thinning is caused by temporary factors like stress, deficiency, or medication, hair may regrow once the cause is addressed. Genetic or age-related thinning is generally permanent, though treatments like minoxidil may help in some cases."
    }
  ];

  const relatedArticles = [
    { title: "How to Identify Your Hair Type", href: "/hair-types/identify-your-hair-type" },
    { title: "How to Prevent Hair Breakage", href: "/hair-routines/prevent-breakage" },
    { title: "Hair Thinning vs Hair Shedding", href: "/hair-loss/thinning-vs-shedding" }
  ];

  return (
    <>
      <SEOHead 
        title="Fine Hair vs Thin Hair: Understanding the Difference | HairCare.ai"
        description="Learn the difference between fine hair and thin hair, why it matters for your hair care routine, and how to care for each type effectively."
        canonicalUrl="https://haircare.ai/hair-types/fine-vs-thin"
        articleSchema={{
          headline: "Fine Hair vs Thin Hair: What is the Difference?",
          description: "Understanding the crucial difference between hair diameter and hair density.",
          datePublished: "2024-12-28",
          dateModified: "2024-12-28"
        }}
        faqSchema={faqs}
      />
      
      <ContentPageLayout>
        <article className="max-w-4xl mx-auto" itemScope itemType="https://schema.org/Article">
          <Breadcrumb items={[
            { label: "Hair Types", href: "/hair-types" },
            { label: "Fine vs Thin Hair" }
          ]} />
          
          <header className="mb-8">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4" itemProp="headline">
              Fine Hair vs Thin Hair: What Is the Difference?
            </h1>
            <p className="text-lg text-muted-foreground">
              Two distinct characteristics that are often confused.
            </p>
          </header>

          <section className="prose prose-lg max-w-none mb-10">
            <p className="text-foreground leading-relaxed">
              The terms fine and thin are frequently used interchangeably when describing hair, but they refer to entirely different characteristics. Confusing them leads to using wrong products and techniques—what helps fine hair may not help thin hair, and vice versa. Understanding this distinction is foundational to effective hair care.
            </p>
            <p className="text-foreground leading-relaxed">
              This guide clarifies the difference between fine and thin hair, explains how each affects your hair care needs, and provides practical guidance for each type.
            </p>
          </section>

          <section className="mb-10 p-6 rounded-xl bg-primary/5 border border-primary/20">
            <h2 className="font-heading text-xl font-semibold text-foreground mb-3">
              Quick Answer
            </h2>
            <p className="text-foreground leading-relaxed">
              Fine hair refers to strand diameter—each individual hair is narrow in circumference. Thin hair refers to density—fewer total hairs per square centimetre of scalp. You can have fine but dense hair, or coarse but thin hair. Fine hair needs lightweight products; thin hair needs volumising techniques and gentle handling to prevent further loss.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Defining Fine Hair
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              Fine hair describes the diameter or circumference of each individual hair strand. Strand diameter exists on a spectrum from very fine to coarse:
            </p>
            
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Fine</h3>
                <p className="text-muted-foreground text-sm">
                  Strands are barely visible to the naked eye. When held between fingers, fine hair feels like almost nothing—difficult to detect. Approximately 50-70 micrometres in diameter.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Medium</h3>
                <p className="text-muted-foreground text-sm">
                  Strands are visible and feel like a thread between fingers. The most common diameter. Approximately 70-100 micrometres.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Coarse</h3>
                <p className="text-muted-foreground text-sm">
                  Strands are easily visible and distinctly textured when rolled between fingers. Feels wiry or thick. Approximately 100-120+ micrometres.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-muted/50 border border-border">
              <p className="font-medium text-foreground mb-1">The Strand Test</p>
              <p className="text-muted-foreground text-sm">
                Take a single shed hair and hold it between your thumb and forefinger. Roll gently. If you can barely feel it, your hair is fine. If it feels like cotton thread, it is medium. If it feels distinctly textured, it is coarse. Compare to sewing thread for reference.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Defining Thin Hair
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              Thin hair describes density—how many individual hairs grow per square centimetre of scalp, or the total number of hairs on your head:
            </p>
            
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Low Density (Thin)</h3>
                <p className="text-muted-foreground text-sm">
                  Scalp is easily visible through hair, even without parting. Ponytail circumference is small. Often fewer than 100,000 hairs total.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Medium Density</h3>
                <p className="text-muted-foreground text-sm">
                  Scalp visible at parting but not extensively through lengths. Average ponytail size. Approximately 100,000-150,000 hairs total.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">High Density (Thick)</h3>
                <p className="text-muted-foreground text-sm">
                  Scalp difficult to see even at the parting. Large ponytail circumference. May have 150,000+ individual hairs.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-muted/50 border border-border">
              <p className="font-medium text-foreground mb-1">The Ponytail Test</p>
              <p className="text-muted-foreground text-sm">
                Gather all your hair into a ponytail and measure its circumference. Less than 5 cm suggests low density. 5-10 cm is medium density. Greater than 10 cm indicates high density. This combines with the strand test to give a complete picture.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Why the Distinction Matters
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              Understanding whether you have fine hair, thin hair, or both determines your approach:
            </p>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Combination</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Characteristics</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Care Focus</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 text-foreground">Fine + Thin</td>
                    <td className="py-3 px-4 text-muted-foreground">Narrow strands, fewer of them. Most prone to flatness and fragility.</td>
                    <td className="py-3 px-4 text-muted-foreground">Volumising, lightweight products, gentle handling</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 text-foreground">Fine + Dense</td>
                    <td className="py-3 px-4 text-muted-foreground">Many narrow strands. Can look thick but weighed down easily.</td>
                    <td className="py-3 px-4 text-muted-foreground">Lightweight products, avoid heaviness</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 text-foreground">Coarse + Thin</td>
                    <td className="py-3 px-4 text-muted-foreground">Thick individual strands but fewer of them. May need moisture but show scalp.</td>
                    <td className="py-3 px-4 text-muted-foreground">Moisturising without weight, volumising at roots</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 text-foreground">Coarse + Dense</td>
                    <td className="py-3 px-4 text-muted-foreground">Many thick strands. Can tolerate heavy products. May be difficult to manage.</td>
                    <td className="py-3 px-4 text-muted-foreground">Smoothing, moisture, taming bulk</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Caring for Fine Hair
            </h2>
            
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Choose Lightweight Products</h3>
                <p className="text-muted-foreground">
                  Fine strands are easily weighed down by heavy products. Look for volumising shampoos, lightweight conditioners applied only to ends, and styling products specifically designed for fine hair. Avoid thick creams and heavy oils.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Build Volume</h3>
                <p className="text-muted-foreground">
                  Use volumising mousse at roots, blow-dry with a round brush lifting sections, or try root-lifting sprays. Fine hair responds well to these techniques but also loses volume quickly if products are too heavy.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Wash More Frequently</h3>
                <p className="text-muted-foreground">
                  Fine hair shows oil more quickly because sebum spreads easily along narrow strands. Washing every day or every other day may be necessary. Use gentle shampoos to avoid over-stripping.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Handle Gently</h3>
                <p className="text-muted-foreground">
                  Fine hair is more fragile and prone to breakage. Use wide-tooth combs, avoid tight hairstyles, and minimise heat styling. When heat is necessary, use lower temperatures.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Caring for Thin Hair
            </h2>
            
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Create the Illusion of Fullness</h3>
                <p className="text-muted-foreground">
                  Volumising products, strategic haircuts with layers, and root-lifting techniques make thin hair appear fuller. Avoid one-length cuts that emphasise lack of density.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Protect Existing Hair</h3>
                <p className="text-muted-foreground">
                  When density is low, each strand matters more. Minimise breakage through gentle handling, heat protection, and avoiding harsh treatments. Be especially careful with wet hair when it is most vulnerable.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Address Underlying Causes</h3>
                <p className="text-muted-foreground">
                  If thinning is recent, investigate potential causes: stress, nutritional deficiencies, hormonal changes, or medical conditions. Addressing the root cause may allow regrowth.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Consider Scalp Health</h3>
                <p className="text-muted-foreground">
                  A healthy scalp supports optimal hair growth. Keep the scalp clean, address any dandruff or inflammation, and consider scalp treatments that may support follicle health.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Common Myths</h2>
            
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-muted/50 border border-border">
                <p className="font-medium text-foreground mb-1">Myth: Fine and thin mean the same thing</p>
                <p className="text-muted-foreground text-sm">
                  As explained, these are distinct characteristics. Someone with fine, dense hair has different needs than someone with coarse, thin hair. Using the wrong approach leads to poor results.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-muted/50 border border-border">
                <p className="font-medium text-foreground mb-1">Myth: Fine hair cannot grow long</p>
                <p className="text-muted-foreground text-sm">
                  Fine hair can grow as long as other types, though it may be more prone to breakage that limits apparent length. With proper care and minimal damage, fine hair reaches the same terminal length as coarse hair.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-muted/50 border border-border">
                <p className="font-medium text-foreground mb-1">Myth: Thin hair will always stay thin</p>
                <p className="text-muted-foreground text-sm">
                  Some causes of thinning are reversible. Temporary shedding from stress or deficiency typically resolves. Genetic or age-related thinning is harder to reverse but may respond to treatments.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              When to Seek Professional Help
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              Consult a dermatologist or trichologist if:
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground mb-4">
              <li>Hair is thinning noticeably without obvious cause</li>
              <li>You see increased shedding alongside thinning</li>
              <li>Scalp is visible in areas where it was not before</li>
              <li>Thinning is patchy rather than diffuse</li>
              <li>Fine hair has become even finer suddenly</li>
              <li>You want to explore medical treatments for thinning</li>
            </ul>
          </section>

          <section className="mb-10 p-6 rounded-xl bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20">
            <p className="text-foreground leading-relaxed">
              HairCare AI can help personalise this further based on your hair type, scalp condition, and goals.
            </p>
          </section>

          <FAQSection faqs={faqs} />
          
          <ArticleNavigation 
            previous={{ title: "Best Care for Wavy Hair", href: "/hair-types/wavy-hair-care" }}
            next={{ title: "Dry Hair vs Damaged Hair", href: "/hair-types/dry-vs-damaged" }}
            relatedArticles={relatedArticles}
          />
          
          <ChatCTA />
          
          <MedicalDisclaimer />
        </article>
      </ContentPageLayout>
    </>
  );
};

export default FineVsThinPage;
