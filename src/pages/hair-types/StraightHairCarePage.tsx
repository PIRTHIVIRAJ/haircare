import SEOHead from "@/components/SEOHead";
import ContentPageLayout from "@/components/ContentPageLayout";
import Breadcrumb from "@/components/Breadcrumb";
import FAQSection from "@/components/FAQSection";
import ChatCTA from "@/components/ChatCTA";
import MedicalDisclaimer from "@/components/MedicalDisclaimer";
import ArticleNavigation from "@/components/ArticleNavigation";

const StraightHairCarePage = () => {
  const faqs = [
    {
      question: "Why does my straight hair get oily so quickly?",
      answer: "The smooth surface of straight hair allows sebum to travel easily from scalp to ends. This distribution makes straight hair appear greasy faster than curly types. Washing frequency, product weight, and overwashing (triggering more oil production) all affect this."
    },
    {
      question: "How can I add volume to flat straight hair?",
      answer: "Use volumising products at the roots, blow-dry upside down or with a round brush lifting roots, try root clips while drying, avoid heavy conditioners on the scalp, and consider a layered cut to create movement and body."
    },
    {
      question: "Should I use different products for fine straight hair versus thick straight hair?",
      answer: "Yes. Fine straight hair needs lightweight formulas that add volume without weighing hair down. Thick straight hair can tolerate richer products for smoothing and control. Choose product weight based on your strand diameter."
    },
    {
      question: "Is heat styling more damaging to straight hair?",
      answer: "Straight hair is not inherently more susceptible to heat damage, but it often receives more heat styling since it lacks natural texture. Always use heat protectant, moderate temperatures, and minimise passes to reduce cumulative damage."
    }
  ];

  const relatedArticles = [
    { title: "How to Identify Your Hair Type", href: "/hair-types/identify-your-hair-type" },
    { title: "Fine Hair vs Thin Hair", href: "/hair-types/fine-vs-thin" },
    { title: "How to Prevent Hair Breakage", href: "/hair-routines/prevent-breakage" }
  ];

  return (
    <>
      <SEOHead 
        title="Best Care for Straight Hair: Complete Guide | HairCare.ai"
        description="Learn how to care for straight hair including managing oiliness, adding volume, preventing damage, and choosing the right products for your straight hair type."
        canonicalUrl="https://haircare.ai/hair-types/straight-hair-care"
        articleSchema={{
          headline: "Best Care for Straight Hair",
          description: "A comprehensive guide to caring for straight hair with effective techniques and suitable products.",
          datePublished: "2024-12-28",
          dateModified: "2024-12-28"
        }}
        faqSchema={faqs}
      />
      
      <ContentPageLayout>
        <article className="max-w-4xl mx-auto" itemScope itemType="https://schema.org/Article">
          <Breadcrumb items={[
            { label: "Hair Types", href: "/hair-types" },
            { label: "Straight Hair Care" }
          ]} />
          
          <header className="mb-8">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4" itemProp="headline">
              Best Care for Straight Hair
            </h1>
            <p className="text-lg text-muted-foreground">
              Maintaining healthy, voluminous straight hair with the right approach.
            </p>
          </header>

          <section className="prose prose-lg max-w-none mb-10">
            <p className="text-foreground leading-relaxed">
              Straight hair has its own set of characteristics and challenges. While it may seem lower-maintenance than curly or wavy hair, straight hair requires specific care to look its best—managing oil distribution, adding volume, preventing flatness, and maintaining shine without heaviness.
            </p>
            <p className="text-foreground leading-relaxed">
              This guide covers the essentials of straight hair care, from cleansing strategies to styling techniques that enhance rather than weigh down your natural texture.
            </p>
          </section>

          <section className="mb-10 p-6 rounded-xl bg-primary/5 border border-primary/20">
            <h2 className="font-heading text-xl font-semibold text-foreground mb-3">
              Quick Answer
            </h2>
            <p className="text-foreground leading-relaxed">
              Straight hair needs regular washing to manage oil, lightweight products to avoid flatness, volume-building techniques at the roots, and protection from heat damage. Focus conditioner on mid-lengths and ends only. The main challenges are oiliness, lack of body, and maintaining shine without greasiness.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Understanding Straight Hair
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              Straight hair grows without natural bend or curve. The hair shaft lies flat, which affects how it behaves:
            </p>
            
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Oil Distribution</h3>
                <p className="text-muted-foreground">
                  Sebum travels easily down the smooth hair shaft, reaching the ends more efficiently than in curly hair. This makes straight hair naturally shinier but also means roots become oily faster, sometimes within a day of washing.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Weight Sensitivity</h3>
                <p className="text-muted-foreground">
                  Without natural volume from bends and coils, straight hair is easily weighed down by heavy products. Residue accumulates visibly, making hair look limp and greasy. Lightweight formulas are essential.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Styling Versatility</h3>
                <p className="text-muted-foreground">
                  Straight hair often holds styles well when properly set, though humidity can cause added texture or wave to drop out. It responds well to heat styling but this also creates risk of damage with frequent use.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Washing Straight Hair
            </h2>
            
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Frequency</h3>
                <p className="text-muted-foreground">
                  Straight hair often requires more frequent washing than curly hair—typically every 1-2 days for oily types, every 2-3 days for normal. Fine straight hair may need daily washing. Adjust based on your scalp and lifestyle.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Shampoo Selection</h3>
                <p className="text-muted-foreground">
                  Choose clarifying or volumising shampoos rather than moisturising formulas that can weigh hair down. If your scalp is sensitive, alternate between a gentle daily shampoo and a clarifying option weekly to remove buildup.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Technique</h3>
                <p className="text-muted-foreground">
                  Focus shampoo on the scalp where oil accumulates. Massage thoroughly to remove sebum and product residue. Rinse completely—leftover shampoo causes buildup and dullness. One lather is usually sufficient; double cleanse only if using heavy styling products.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Conditioning Straight Hair
            </h2>
            
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Where to Apply</h3>
                <p className="text-muted-foreground">
                  Apply conditioner from mid-length to ends only. Avoid the roots and scalp entirely—conditioning near the scalp leads to oiliness and flat roots. The ends need moisture most since natural oils reach them less effectively despite hair being straight.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Product Weight</h3>
                <p className="text-muted-foreground">
                  Choose lightweight, volumising conditioners rather than rich, hydrating formulas designed for dry or curly hair. Look for terms like weightless, volumising, or fine hair on packaging. Thick, creamy conditioners will flatten straight hair.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Rinse Thoroughly</h3>
                <p className="text-muted-foreground">
                  Residue is more visible on straight hair. Rinse until water runs completely clear and hair feels slick but not slippery. A final cool rinse helps close the cuticle and adds shine.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Building Volume
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              Flat, limp hair is a common frustration for those with straight hair. These techniques add body and lift:
            </p>
            
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Root Lift Products</h3>
                <p className="text-muted-foreground">
                  Apply volumising mousse, spray, or foam to damp roots before blow-drying. These products add grip and lift at the root without visible residue. Avoid heavy serums or creams near the scalp.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Blow-Drying Technique</h3>
                <p className="text-muted-foreground">
                  Flip your head upside down while rough-drying to lift roots away from the scalp. Use a round brush to lift sections at the root while directing heat at the lifted hair. Cool shot to set the volume before releasing each section.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Root Clipping</h3>
                <p className="text-muted-foreground">
                  Place clips at the roots while hair is damp and leave until completely dry. This trains hair to lift at the root. Velcro rollers placed at the crown work similarly while hair cools after heat styling.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Strategic Layering</h3>
                <p className="text-muted-foreground">
                  A layered haircut removes bulk and creates internal movement that adds the appearance of volume. Face-framing layers and crown layers are particularly effective. Discuss options with your stylist.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Managing Oiliness
            </h2>
            
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Dry Shampoo</h3>
                <p className="text-muted-foreground">
                  A useful tool for extending time between washes. Apply to dry roots, allow to absorb for a minute, then massage in and brush through. Use sparingly—buildup creates its own issues. Works best on day-two hair rather than very oily hair.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Avoid Overwashing</h3>
                <p className="text-muted-foreground">
                  Counterintuitively, washing too frequently can trigger increased oil production. If you currently wash daily, try gradually extending to every other day. The scalp often adjusts over 2-4 weeks, producing less oil.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Touch Less Often</h3>
                <p className="text-muted-foreground">
                  Running fingers through hair transfers oil from hands and distributes scalp oil through lengths. Minimise touching throughout the day. Avoid brushing from root to tip repeatedly, which spreads sebum.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Heat Styling and Protection
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              Straight hair often receives frequent heat styling for volume, waves, or smoothness. Protect your hair from cumulative damage:
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground mb-4">
              <li><strong>Heat protectant:</strong> Apply before every heat tool use, distributing evenly through damp or dry hair depending on product instructions</li>
              <li><strong>Temperature settings:</strong> Use the lowest effective temperature—fine hair rarely needs more than 150°C; medium hair 150-180°C; coarse hair up to 200°C</li>
              <li><strong>Single passes:</strong> One slow pass causes less damage than multiple quick passes</li>
              <li><strong>Heat-free days:</strong> Give hair regular breaks from heat styling to prevent cumulative damage</li>
              <li><strong>Air dry when possible:</strong> Let hair dry naturally before finishing with brief heat styling rather than blow-drying fully wet hair</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Common Myths About Straight Hair
            </h2>
            
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-muted/50 border border-border">
                <p className="font-medium text-foreground mb-1">Myth: Straight hair is low maintenance</p>
                <p className="text-muted-foreground text-sm">
                  While it may not require the complex routines of curly hair, straight hair needs regular washing, careful product selection, and protection from damage. Neglect shows quickly as limpness, greasiness, or split ends.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-muted/50 border border-border">
                <p className="font-medium text-foreground mb-1">Myth: Brushing 100 strokes makes hair shinier</p>
                <p className="text-muted-foreground text-sm">
                  Excessive brushing creates friction damage and can stimulate oil production. Brush only to detangle and style. Straight hair may need less brushing than commonly assumed.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-muted/50 border border-border">
                <p className="font-medium text-foreground mb-1">Myth: Oily hair should skip conditioner entirely</p>
                <p className="text-muted-foreground text-sm">
                  The ends still need moisture, especially with frequent washing. Simply avoid the scalp and roots. Skipping conditioner leads to dry, damaged ends that contrast with oily roots.
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
              <li>Your scalp is excessively oily or dry despite adjusting your routine</li>
              <li>You experience sudden changes in hair texture or density</li>
              <li>Breakage continues despite using heat protection</li>
              <li>You need guidance on styling techniques or cuts that suit your hair</li>
              <li>Scalp issues like flaking, itching, or irritation persist</li>
            </ul>
          </section>

          <section className="mb-10 p-6 rounded-xl bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20">
            <p className="text-foreground leading-relaxed">
              HairCare AI can help personalise this further based on your hair type, scalp condition, and goals.
            </p>
          </section>

          <FAQSection faqs={faqs} />
          
          <ArticleNavigation 
            previous={{ title: "Best Care for Curly Hair", href: "/hair-types/curly-hair-care" }}
            next={{ title: "Best Care for Wavy Hair", href: "/hair-types/wavy-hair-care" }}
            relatedArticles={relatedArticles}
          />
          
          <ChatCTA />
          
          <MedicalDisclaimer />
        </article>
      </ContentPageLayout>
    </>
  );
};

export default StraightHairCarePage;
