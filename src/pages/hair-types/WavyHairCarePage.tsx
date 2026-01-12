import SEOHead from "@/components/SEOHead";
import ContentPageLayout from "@/components/ContentPageLayout";
import Breadcrumb from "@/components/Breadcrumb";
import FAQSection from "@/components/FAQSection";
import ChatCTA from "@/components/ChatCTA";
import MedicalDisclaimer from "@/components/MedicalDisclaimer";
import ArticleNavigation from "@/components/ArticleNavigation";

const WavyHairCarePage = () => {
  const faqs = [
    {
      question: "Should I treat wavy hair like curly or straight hair?",
      answer: "Wavy hair benefits from a hybrid approach. Use curly techniques like scrunching and avoiding brushing when dry, but with lighter products suited to straighter types. Too heavy and waves fall flat; too light and waves do not define."
    },
    {
      question: "Why do my waves only show on some days?",
      answer: "Wave definition depends on moisture, product, technique, and humidity. Inconsistent results usually indicate you need to refine your routine—try applying products to wetter hair, scrunching more, or adjusting your product combination."
    },
    {
      question: "Can I enhance my natural waves?",
      answer: "Yes. Techniques like scrunching with gel or mousse, diffusing, and plopping encourage wave formation. Many wavies discover more texture than they realised once they stop brushing dry hair and fighting their natural pattern."
    },
    {
      question: "How do I prevent wavy hair from looking frizzy?",
      answer: "Apply products to very wet hair, avoid touching while drying, use anti-frizz serums or gels, and protect from humidity. Deep conditioning helps if frizz stems from dryness. Microfibre towels reduce friction frizz."
    }
  ];

  const relatedArticles = [
    { title: "How to Identify Your Hair Type", href: "/hair-types/identify-your-hair-type" },
    { title: "Frizzy Hair: Causes and Solutions", href: "/hair-types/frizzy-hair" },
    { title: "Best Care for Curly Hair", href: "/hair-types/curly-hair-care" }
  ];

  return (
    <>
      <SEOHead 
        title="Best Care for Wavy Hair: Complete Guide | HairCare.ai"
        description="Learn how to care for wavy hair including enhancing natural waves, managing frizz, choosing products, and styling techniques for defined, healthy waves."
        canonicalUrl="https://haircare.ai/hair-types/wavy-hair-care"
        articleSchema={{
          headline: "Best Care for Wavy Hair",
          description: "A comprehensive guide to caring for wavy hair with techniques that enhance natural texture.",
          datePublished: "2024-12-28",
          dateModified: "2024-12-28"
        }}
        faqSchema={faqs}
      />
      
      <ContentPageLayout>
        <article className="max-w-4xl mx-auto" itemScope itemType="https://schema.org/Article">
          <Breadcrumb items={[
            { label: "Hair Types", href: "/hair-types" },
            { label: "Wavy Hair Care" }
          ]} />
          
          <header className="mb-8">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4" itemProp="headline">
              Best Care for Wavy Hair
            </h1>
            <p className="text-lg text-muted-foreground">
              Embracing and enhancing your natural wave pattern.
            </p>
          </header>

          <section className="prose prose-lg max-w-none mb-10">
            <p className="text-foreground leading-relaxed">
              Wavy hair occupies the middle ground between straight and curly, often misunderstood and mistreated as a result. Many people with wavy hair spend years straightening it or trying curly methods that are too heavy, never quite finding what works. The key is understanding that wavy hair has its own needs—different from both straight and curly care.
            </p>
            <p className="text-foreground leading-relaxed">
              This guide explains how to work with your waves rather than against them, covering everything from washing to styling to product selection.
            </p>
          </section>

          <section className="mb-10 p-6 rounded-xl bg-primary/5 border border-primary/20">
            <h2 className="font-heading text-xl font-semibold text-foreground mb-3">
              Quick Answer
            </h2>
            <p className="text-foreground leading-relaxed">
              Wavy hair needs lightweight moisture, gentle handling, and techniques that enhance rather than flatten waves. Wash 2-4 times weekly, use curl-adjacent techniques like scrunching, but choose lighter products than true curly hair requires. Avoid brushing dry hair and heavy conditioners that weigh waves down.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Understanding Wavy Hair
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              Wavy hair (Type 2) forms an S-pattern that typically begins at mid-length or below, with roots often lying relatively flat. This creates unique challenges:
            </p>
            
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">The In-Between Nature</h3>
                <p className="text-muted-foreground">
                  Wavy hair can behave like straight hair—getting oily at roots, appearing flat—while also experiencing curly hair challenges like frizz and unpredictable texture. This requires a balanced approach.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Wave Types</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li><strong>2A:</strong> Loose, barely-there waves that straighten easily. Fine and prone to limpness.</li>
                  <li><strong>2B:</strong> More defined S-waves starting from mid-length. Some frizz tendency.</li>
                  <li><strong>2C:</strong> Well-defined waves approaching curls. More volume, more frizz, thicker.</li>
                </ul>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Pattern Variability</h3>
                <p className="text-muted-foreground">
                  Waves are often inconsistent across the head—tighter underneath, looser on top. Some sections may appear almost straight while others curl. This is normal and requires adapting technique to different areas.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Washing Wavy Hair
            </h2>
            
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Frequency</h3>
                <p className="text-muted-foreground">
                  Most wavy hair does well with washing every 2-4 days. Unlike curly hair, waves can still become oily at the roots while lengths stay dry. Adjust based on your scalp and how your waves respond.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Shampoo Choice</h3>
                <p className="text-muted-foreground">
                  Sulphate-free shampoos work well for many wavies, though some 2A waves need occasional sulphate cleansing to prevent limpness from buildup. Clarify monthly if using silicones or heavier products.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Conditioner Placement</h3>
                <p className="text-muted-foreground">
                  Apply conditioner mid-length to ends. Avoid roots, especially for 2A and fine 2B waves, to prevent flatness. Heavier 2C waves can handle more conditioner creeping upward. Experiment to find your balance.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Styling Techniques for Waves
            </h2>
            
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Scrunch and Squish</h3>
                <p className="text-muted-foreground">
                  Apply products to very wet hair, then scrunch sections upward repeatedly. This encourages wave formation and helps products distribute evenly. The squish-to-condish technique (squishing conditioner into wet hair) works for deeper hydration.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Microfibre Towel or T-Shirt</h3>
                <p className="text-muted-foreground">
                  Regular towels create friction that disrupts waves and causes frizz. Scrunch excess water out with a microfibre towel or soft t-shirt. Avoid rubbing—scrunch or blot only.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Diffusing</h3>
                <p className="text-muted-foreground">
                  Use a diffuser attachment on low heat and speed. Cup sections in the diffuser and hold near the head without moving. This speeds drying while encouraging wave definition. Alternatively, air dry for looser, more natural waves.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Do Not Touch While Drying</h3>
                <p className="text-muted-foreground">
                  Handling hair as it dries disrupts wave formation and creates frizz. Scrunch once to apply products, then leave alone until fully dry. If using gel, scrunch out the crunch once completely dry.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Products for Wavy Hair
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              Product weight matters significantly for waves. Too heavy and they fall flat; too light and they lack definition.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Mousse</h3>
                <p className="text-muted-foreground text-sm">
                  Excellent for wavy hair—provides hold and volume without weight. Apply to soaking wet hair and scrunch. Particularly good for fine or 2A waves.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Lightweight Gels</h3>
                <p className="text-muted-foreground text-sm">
                  Define waves and combat humidity without crunchiness if scrunched out when dry. Look for water-based formulas. Good for 2B and 2C waves needing more hold.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Leave-In Conditioners</h3>
                <p className="text-muted-foreground text-sm">
                  Choose spray-form or very lightweight versions. Heavier leave-ins designed for curly hair may weigh waves down. Apply sparingly to mid-lengths and ends.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Sea Salt Sprays</h3>
                <p className="text-muted-foreground text-sm">
                  Add texture and enhance wave formation. Can be drying with overuse—best for occasional use or combined with hydrating products. Creates beachy, tousled texture.
                </p>
              </div>
            </div>

            <div className="mt-4 p-4 rounded-lg bg-muted/50 border border-border">
              <p className="font-medium text-foreground mb-1">Products to Avoid or Use Sparingly</p>
              <p className="text-muted-foreground text-sm">
                Heavy curl creams, thick leave-ins, and oils applied liberally can flatten waves. Non-water-soluble silicones may build up over time, requiring clarifying. What works for curly hair is often too heavy for wavy hair.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Refreshing Waves Between Washes
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              Extending your style saves time and reduces washing frequency:
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground mb-4">
              <li><strong>Sleep protection:</strong> Use a loose pineapple (high ponytail) or satin pillowcase to reduce friction overnight</li>
              <li><strong>Morning refresh:</strong> Mist with water and a small amount of leave-in or diluted gel, then scrunch</li>
              <li><strong>Spot treatment:</strong> Wet and restyle only the sections that have flattened rather than the whole head</li>
              <li><strong>Root lift:</strong> Use dry shampoo at roots to absorb oil and add volume without wetting waves</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Managing Frizz in Wavy Hair
            </h2>
            
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Apply to Very Wet Hair</h3>
                <p className="text-muted-foreground">
                  Products distribute more evenly and seal in moisture when applied to dripping wet hair. Applying to damp or nearly-dry hair increases frizz.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Use Anti-Humectants in Humid Weather</h3>
                <p className="text-muted-foreground">
                  Humectants like glycerin attract moisture from the air, causing swelling and frizz in humidity. Look for products without humectants or specifically designed for humid conditions.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Deep Condition Regularly</h3>
                <p className="text-muted-foreground">
                  Dry, porous hair absorbs atmospheric moisture more readily, causing frizz. Weekly deep conditioning keeps hair hydrated and the cuticle sealed, reducing frizz at the source.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Common Myths About Wavy Hair
            </h2>
            
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-muted/50 border border-border">
                <p className="font-medium text-foreground mb-1">Myth: Wavy hair is failed curly hair</p>
                <p className="text-muted-foreground text-sm">
                  Waves are a distinct hair type, not an incomplete version of curls. Trying to force waves into tighter curl patterns usually backfires. Embrace your waves as they are.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-muted/50 border border-border">
                <p className="font-medium text-foreground mb-1">Myth: Wavy hair cannot use heat tools</p>
                <p className="text-muted-foreground text-sm">
                  While embracing natural texture is beneficial, occasional heat styling with proper protection is fine. Some wavies prefer to enhance waves with a curling wand or iron for more consistency.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-muted/50 border border-border">
                <p className="font-medium text-foreground mb-1">Myth: All waves need the same products</p>
                <p className="text-muted-foreground text-sm">
                  2A waves need much lighter products than 2C waves. A product that defines heavy waves may completely flatten fine waves. Experiment based on your specific wave type.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              When to Seek Professional Help
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              Consider consulting a professional if:
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground mb-4">
              <li>Your wave pattern has changed suddenly</li>
              <li>You cannot achieve manageable results despite consistent effort</li>
              <li>You need help finding a cut that works with your waves</li>
              <li>Excessive frizz or dryness persists despite addressing moisture</li>
              <li>You want to transition from heat styling to natural texture</li>
            </ul>
          </section>

          <section className="mb-10 p-6 rounded-xl bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20">
            <p className="text-foreground leading-relaxed">
              HairCare AI can help personalise this further based on your hair type, scalp condition, and goals.
            </p>
          </section>

          <FAQSection faqs={faqs} />
          
          <ArticleNavigation 
            previous={{ title: "Best Care for Straight Hair", href: "/hair-types/straight-hair-care" }}
            next={{ title: "Fine Hair vs Thin Hair", href: "/hair-types/fine-vs-thin" }}
            relatedArticles={relatedArticles}
          />
          
          <ChatCTA />
          
          <MedicalDisclaimer />
        </article>
      </ContentPageLayout>
    </>
  );
};

export default WavyHairCarePage;
