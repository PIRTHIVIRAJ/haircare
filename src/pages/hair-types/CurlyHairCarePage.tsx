import SEOHead from "@/components/SEOHead";
import ContentPageLayout from "@/components/ContentPageLayout";
import Breadcrumb from "@/components/Breadcrumb";
import FAQSection from "@/components/FAQSection";
import ChatCTA from "@/components/ChatCTA";
import MedicalDisclaimer from "@/components/MedicalDisclaimer";
import ArticleNavigation from "@/components/ArticleNavigation";

const CurlyHairCarePage = () => {
  const faqs = [
    {
      question: "How often should I wash curly hair?",
      answer: "Most curly hair benefits from washing 1-3 times per week rather than daily. The natural oils that make straight hair look greasy help keep curls moisturised and defined. Adjust based on your scalp needs and activity level."
    },
    {
      question: "Why is my curly hair so frizzy?",
      answer: "Frizz occurs when the hair cuticle lifts and absorbs moisture from the air. Curly hair is naturally more porous and prone to this. Combat frizz with deep conditioning, avoiding sulphates, applying products to wet hair, and using anti-humectants in humid weather."
    },
    {
      question: "Should I brush curly hair?",
      answer: "Avoid brushing curly hair when dry as this disrupts the curl pattern and causes frizz. Detangle with a wide-tooth comb or fingers while hair is wet and coated with conditioner. Some prefer to never brush and finger-detangle only."
    },
    {
      question: "What is the Curly Girl Method?",
      answer: "A popular approach that eliminates sulphates, silicones, and heat styling to restore curl health. It emphasises co-washing, deep conditioning, and styling techniques like scrunching and plopping. Results vary but many find it transformative."
    }
  ];

  const relatedArticles = [
    { title: "How to Identify Your Hair Type", href: "/hair-types/identify-your-hair-type" },
    { title: "Frizzy Hair: Causes and Solutions", href: "/hair-types/frizzy-hair" },
    { title: "Dry Hair vs Damaged Hair", href: "/hair-types/dry-vs-damaged" }
  ];

  return (
    <>
      <SEOHead 
        title="Best Care for Curly Hair: Complete Guide | HairCare.ai"
        description="Learn how to care for curly hair properly including washing, conditioning, styling techniques, and product selection for healthy, defined curls."
        canonicalUrl="https://haircare.ai/hair-types/curly-hair-care"
        articleSchema={{
          headline: "Best Care for Curly Hair",
          description: "A comprehensive guide to caring for curly hair with proper techniques and products.",
          datePublished: "2024-12-28",
          dateModified: "2024-12-28"
        }}
        faqSchema={faqs}
      />
      
      <ContentPageLayout>
        <article className="max-w-4xl mx-auto" itemScope itemType="https://schema.org/Article">
          <Breadcrumb items={[
            { label: "Hair Types", href: "/hair-types" },
            { label: "Curly Hair Care" }
          ]} />
          
          <header className="mb-8">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4" itemProp="headline">
              Best Care for Curly Hair
            </h1>
            <p className="text-lg text-muted-foreground">
              Techniques and products that work with your natural curl pattern.
            </p>
          </header>

          <section className="prose prose-lg max-w-none mb-10">
            <p className="text-foreground leading-relaxed">
              Curly hair operates by different rules than straight or wavy hair. The same products and techniques that work for other hair types can leave curls dry, frizzy, and undefined. Understanding what curly hair actually needs—and why—allows you to work with your natural texture rather than against it.
            </p>
            <p className="text-foreground leading-relaxed">
              This guide covers the fundamentals of curly hair care, from washing and conditioning to styling and maintenance, with practical techniques you can implement immediately.
            </p>
          </section>

          <section className="mb-10 p-6 rounded-xl bg-primary/5 border border-primary/20">
            <h2 className="font-heading text-xl font-semibold text-foreground mb-3">
              Quick Answer
            </h2>
            <p className="text-foreground leading-relaxed">
              Curly hair needs more moisture and gentler handling than straight hair. Wash less frequently with sulphate-free cleansers, condition generously, detangle only when wet, apply styling products to soaking hair, and avoid heat and brushing. Frizz indicates moisture imbalance or cuticle damage requiring hydration and protection.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Why Curly Hair Needs Different Care
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              The structure of curly hair creates specific challenges. Each bend or twist in the hair shaft is a potential weak point where breakage can occur. The curved shape also prevents natural scalp oils from travelling down the strand efficiently, leaving ends dry while roots may still become oily.
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground mb-4">
              <li><strong>Porosity:</strong> Curly hair cuticles tend to be more open, absorbing moisture quickly but losing it just as fast</li>
              <li><strong>Fragility:</strong> The bends in curly strands create stress points prone to breakage</li>
              <li><strong>Dryness:</strong> Natural oils cannot coat curly strands as easily as straight hair</li>
              <li><strong>Frizz susceptibility:</strong> Open cuticles absorb humidity, causing strands to swell unevenly</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Washing Curly Hair
            </h2>
            
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Frequency</h3>
                <p className="text-muted-foreground">
                  Most curly hair does best with washing 1-3 times per week. Daily washing strips natural oils faster than they can replenish. Between washes, you can wet and restyle without shampooing, or use a gentle co-wash (conditioner-only wash) to refresh curls.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Choosing Cleansers</h3>
                <p className="text-muted-foreground">
                  Sulphates are harsh detergents that effectively remove oil and buildup but can be too stripping for curly hair. Sulphate-free shampoos cleanse more gently. However, periodic clarifying with a stronger cleanser removes accumulated product that can weigh curls down.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Technique</h3>
                <p className="text-muted-foreground">
                  Focus shampoo on the scalp rather than lengths. Massage with fingertips to remove buildup and stimulate circulation. Let suds rinse through lengths without scrubbing. This cleanses effectively while minimising friction damage to delicate curl patterns.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Conditioning and Moisture
            </h2>
            
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Regular Conditioner</h3>
                <p className="text-muted-foreground">
                  Apply generously from mid-length to ends. Use this time to detangle with fingers or a wide-tooth comb, starting from the ends and working upward. Curly hair can handle more conditioner than you might expect—do not be afraid to use enough.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Deep Conditioning</h3>
                <p className="text-muted-foreground">
                  Incorporate a deep conditioning treatment weekly or fortnightly. Apply to clean, wet hair, cover with a plastic cap, and leave for 15-30 minutes. Heat from a warm towel or hooded dryer helps products penetrate. Rinse with cool water to seal the cuticle.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Leave-In Conditioner</h3>
                <p className="text-muted-foreground">
                  A lightweight leave-in provides ongoing moisture and helps with detangling. Apply to soaking wet hair before styling products. This creates a moisture foundation that styling products then seal in.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">The LOC/LCO Method</h3>
                <p className="text-muted-foreground">
                  A layering technique: Liquid (water or leave-in), Oil, Cream—or Liquid, Cream, Oil. This seals moisture into the hair shaft. The order depends on porosity: high porosity often benefits from oil last as a sealant; low porosity may prefer cream last for better absorption.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Styling Techniques
            </h2>
            
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Apply Products to Wet Hair</h3>
                <p className="text-muted-foreground">
                  Styling products work best when applied to soaking wet hair, not damp or towel-dried. Water helps distribute products evenly and enhances curl clumping. Work products through with praying hands motion or scrunching upward.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Scrunching</h3>
                <p className="text-muted-foreground">
                  Cup sections of hair in your palm and squeeze upward toward the scalp. This encourages curl formation and helps product penetration. Scrunch multiple times throughout styling and once hair is fully dry to break any gel cast.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Plopping</h3>
                <p className="text-muted-foreground">
                  Lay a microfibre towel or t-shirt flat. Flip your head forward onto the centre. Wrap the fabric around your head and secure. Leave for 10-30 minutes. This absorbs excess water without friction and encourages curl formation while hair sets.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Diffusing</h3>
                <p className="text-muted-foreground">
                  If you use a hairdryer, attach a diffuser to disperse airflow and reduce frizz. Use low heat and low speed. Cup sections of hair in the diffuser bowl and hold near the head without moving. Limit heat exposure to speed drying without damage.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Essential Products for Curly Hair
            </h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Curl Creams</h3>
                <p className="text-muted-foreground text-sm">
                  Provide moisture, define curls, and reduce frizz. Choose lighter versions for fine or low-porosity hair, richer formulas for thick or high-porosity hair.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Gels</h3>
                <p className="text-muted-foreground text-sm">
                  Hold curl definition and combat humidity. Look for alcohol-free formulas to avoid dryness. Apply to wet hair and scrunch out the cast once dry for soft, defined curls.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Oils</h3>
                <p className="text-muted-foreground text-sm">
                  Seal moisture, add shine, and reduce frizz. Lighter oils like argan suit fine curls; heavier oils like castor work for thick, coarse curls. Apply to ends primarily.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Mousse</h3>
                <p className="text-muted-foreground text-sm">
                  Adds volume and hold without weight. Good for fine or limp curls. Apply to wet hair and scrunch. Often provides less definition than gel but more movement.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Maintaining Curls Between Washes
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              Multi-day styling is common with curly hair. These techniques help extend your style:
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground mb-4">
              <li><strong>Pineapple:</strong> Gather hair in a loose, high ponytail at the crown before bed to preserve curls</li>
              <li><strong>Silk or satin:</strong> Sleep on a silk or satin pillowcase, or wear a satin bonnet to reduce friction</li>
              <li><strong>Refresh spray:</strong> Mist with water and a small amount of leave-in conditioner, then scrunch to revive curls</li>
              <li><strong>Spot styling:</strong> Wet and restyle flattened sections individually rather than rewetting entire head</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Common Myths About Curly Hair
            </h2>
            
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-muted/50 border border-border">
                <p className="font-medium text-foreground mb-1">Myth: You must use silicone-free products</p>
                <p className="text-muted-foreground text-sm">
                  Some silicones build up and require sulphates to remove, creating a problematic cycle. However, water-soluble silicones wash out with gentle cleansers and provide beneficial smoothing. The issue is non-water-soluble silicones combined with co-washing exclusively.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-muted/50 border border-border">
                <p className="font-medium text-foreground mb-1">Myth: Curly hair does not need regular trims</p>
                <p className="text-muted-foreground text-sm">
                  Split ends travel up the hair shaft, causing breakage and frizz. Regular trims every 8-12 weeks remove damaged ends. Seek stylists experienced with curly hair who cut dry and understand curl shrinkage.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-muted/50 border border-border">
                <p className="font-medium text-foreground mb-1">Myth: Products alone determine curl quality</p>
                <p className="text-muted-foreground text-sm">
                  While products help, technique matters equally. How you apply products, whether you scrunch or smooth, and your drying method all significantly impact results. Experiment with technique as much as products.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              When to Seek Professional Help
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              Consult a curl specialist or dermatologist if:
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground mb-4">
              <li>Your curl pattern has changed significantly without obvious cause</li>
              <li>You experience persistent scalp issues alongside curl concerns</li>
              <li>Excessive breakage continues despite proper care</li>
              <li>You need help with a major curl transition or recovery from damage</li>
              <li>You cannot achieve manageable results despite consistent effort</li>
            </ul>
          </section>

          <section className="mb-10 p-6 rounded-xl bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20">
            <p className="text-foreground leading-relaxed">
              HairCare AI can help personalise this further based on your hair type, scalp condition, and goals.
            </p>
          </section>

          <FAQSection faqs={faqs} />
          
          <ArticleNavigation 
            previous={{ title: "How to Identify Your Hair Type", href: "/hair-types/identify-your-hair-type" }}
            next={{ title: "Best Care for Straight Hair", href: "/hair-types/straight-hair-care" }}
            relatedArticles={relatedArticles}
          />
          
          <ChatCTA />
          
          <MedicalDisclaimer />
        </article>
      </ContentPageLayout>
    </>
  );
};

export default CurlyHairCarePage;
