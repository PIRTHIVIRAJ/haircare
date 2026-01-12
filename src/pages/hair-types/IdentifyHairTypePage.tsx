import SEOHead from "@/components/SEOHead";
import ContentPageLayout from "@/components/ContentPageLayout";
import Breadcrumb from "@/components/Breadcrumb";
import FAQSection from "@/components/FAQSection";
import ChatCTA from "@/components/ChatCTA";
import MedicalDisclaimer from "@/components/MedicalDisclaimer";
import ArticleNavigation from "@/components/ArticleNavigation";

const IdentifyHairTypePage = () => {
  const faqs = [
    {
      question: "Can my hair type change over time?",
      answer: "Yes, hair type can change due to hormonal shifts, aging, pregnancy, medications, and environmental factors. What worked for your hair at 20 may not work at 40. Regular reassessment helps you adapt your routine accordingly."
    },
    {
      question: "How do I know if I have fine or thick hair?",
      answer: "Take a single strand and roll it between your fingers. Fine hair is barely perceptible, medium hair feels like a cotton thread, and thick or coarse hair feels distinctly textured. Compare to sewing thread for reference."
    },
    {
      question: "Is hair typing the same as hair porosity?",
      answer: "No. Hair type describes curl pattern and diameter, while porosity describes how well hair absorbs and retains moisture. Both are important but measure different characteristics. You can have fine, high-porosity hair or coarse, low-porosity hair."
    },
    {
      question: "Do I need different products for different hair types?",
      answer: "Generally, yes. Fine hair benefits from lightweight products to avoid weighing it down, while thick or curly hair often needs richer formulations for moisture. Understanding your type helps you choose appropriate products."
    }
  ];

  const relatedArticles = [
    { title: "Best Care for Curly Hair", href: "/hair-types/curly-hair-care" },
    { title: "Fine Hair vs Thin Hair", href: "/hair-types/fine-vs-thin" },
    { title: "Dry Hair vs Damaged Hair", href: "/hair-types/dry-vs-damaged" }
  ];

  return (
    <>
      <SEOHead 
        title="How to Identify Your Hair Type: Complete Guide | HairCare.ai"
        description="Learn how to identify your hair type including curl pattern, hair diameter, and density. Understand the classification system to build the right hair care routine."
        canonicalUrl="https://haircare.ai/hair-types/identify-your-hair-type"
        articleSchema={{
          headline: "How to Identify Your Hair Type",
          description: "A comprehensive guide to understanding and classifying your hair type for better care.",
          datePublished: "2024-12-28",
          dateModified: "2024-12-28"
        }}
        faqSchema={faqs}
      />
      
      <ContentPageLayout>
        <article className="max-w-4xl mx-auto" itemScope itemType="https://schema.org/Article">
          <Breadcrumb items={[
            { label: "Hair Types", href: "/hair-types" },
            { label: "Identify Your Hair Type" }
          ]} />
          
          <header className="mb-8">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4" itemProp="headline">
              How to Identify Your Hair Type
            </h1>
            <p className="text-lg text-muted-foreground">
              Understanding your unique hair characteristics for better care decisions.
            </p>
          </header>

          <section className="prose prose-lg max-w-none mb-10">
            <p className="text-foreground leading-relaxed">
              Knowing your hair type is the foundation of effective hair care. Without this understanding, you may use products or techniques that work against your hair rather than with it. The right approach depends on several factors: your curl pattern, hair strand diameter, overall density, and porosity.
            </p>
            <p className="text-foreground leading-relaxed">
              This guide walks you through a systematic approach to identifying your hair type, explaining what each classification means and why it matters for your routine.
            </p>
          </section>

          <section className="mb-10 p-6 rounded-xl bg-primary/5 border border-primary/20">
            <h2 className="font-heading text-xl font-semibold text-foreground mb-3">
              Quick Answer
            </h2>
            <p className="text-foreground leading-relaxed">
              Hair type is classified by curl pattern (Type 1-4), strand diameter (fine, medium, coarse), and density (thin, medium, thick). Examine clean, product-free hair to assess curl pattern, perform a strand test for diameter, and check scalp visibility for density. Most people have combinations across different areas of their head.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              The Hair Type Classification System
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              The widely used Andre Walker Hair Typing System classifies hair into four main types based on curl pattern, with subcategories indicating the tightness or looseness of that pattern.
            </p>
            
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Type 1: Straight Hair</h3>
                <p className="text-muted-foreground mb-2">
                  Hair lies flat from root to tip without any natural curve. Tends to be shiny as natural oils travel easily down the shaft.
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 text-sm">
                  <li><strong>1A:</strong> Very fine and flat, often limp with little volume</li>
                  <li><strong>1B:</strong> Medium texture with slight body and movement</li>
                  <li><strong>1C:</strong> Coarse and thick, resistant to curling but holds styles</li>
                </ul>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Type 2: Wavy Hair</h3>
                <p className="text-muted-foreground mb-2">
                  Hair forms an S-shape pattern, typically straight at the roots with waves forming mid-length and below.
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 text-sm">
                  <li><strong>2A:</strong> Fine, loose waves that are easily straightened</li>
                  <li><strong>2B:</strong> More defined S-waves with some frizz tendency</li>
                  <li><strong>2C:</strong> Well-defined waves verging on curls, prone to frizz</li>
                </ul>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Type 3: Curly Hair</h3>
                <p className="text-muted-foreground mb-2">
                  Hair forms distinct spiral curls when dry. Generally more prone to dryness and frizz than straight or wavy types.
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 text-sm">
                  <li><strong>3A:</strong> Loose, springy curls about the size of sidewalk chalk</li>
                  <li><strong>3B:</strong> Tighter ringlets approximately marker-sized</li>
                  <li><strong>3C:</strong> Tight corkscrews about pencil or straw-width</li>
                </ul>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Type 4: Coily or Kinky Hair</h3>
                <p className="text-muted-foreground mb-2">
                  Tightly coiled hair that may appear shorter than its actual length due to shrinkage. Requires significant moisture.
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 text-sm">
                  <li><strong>4A:</strong> Tightly coiled S-pattern, about crochet needle-sized</li>
                  <li><strong>4B:</strong> Z-pattern coils that bend sharply rather than curl</li>
                  <li><strong>4C:</strong> Very tight coils with less definition, maximum shrinkage</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              How to Determine Your Curl Pattern
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              For the most accurate assessment, examine your hair when it is freshly washed and free of styling products. Allow it to air dry completely before evaluating.
            </p>
            
            <div className="space-y-3">
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Step 1: Wash and Detangle</h3>
                <p className="text-muted-foreground">
                  Use a gentle, clarifying shampoo to remove product buildup. Detangle carefully while wet, then refrain from applying any leave-in products or conditioners that might alter your natural pattern.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Step 2: Air Dry Completely</h3>
                <p className="text-muted-foreground">
                  Avoid touching or manipulating your hair as it dries. This reveals your true pattern without interference from styling or heat.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Step 3: Examine Different Sections</h3>
                <p className="text-muted-foreground">
                  Check the crown, sides, nape, and hairline. Many people have multiple curl patterns on their head. Identify the dominant pattern while noting variations.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Understanding Hair Diameter
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              Hair diameter, often called texture, describes the thickness of individual strands. This is separate from density and significantly affects how your hair behaves and what products suit it.
            </p>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Fine Hair</h3>
                <p className="text-muted-foreground text-sm">
                  Individual strands are thin and delicate. Easily weighed down by heavy products. Prone to appearing limp or flat. Needs volumising products and lightweight formulations.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Medium Hair</h3>
                <p className="text-muted-foreground text-sm">
                  The most common diameter. Holds styles reasonably well without being overly heavy or delicate. Versatile in terms of product tolerance.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Coarse Hair</h3>
                <p className="text-muted-foreground text-sm">
                  Thick individual strands that are strong but may feel rough. Can tolerate heavier products. Often needs more moisture but resistant to damage.
                </p>
              </div>
            </div>

            <div className="mt-4 p-4 rounded-lg bg-muted/50 border border-border">
              <p className="font-medium text-foreground mb-1">The Strand Test</p>
              <p className="text-muted-foreground text-sm">
                Take a single shed hair and hold it between your fingers. Fine hair is barely visible and feels like nothing. Medium hair feels like a cotton thread. Coarse hair is distinctly visible and feels textured. Compare to sewing thread for reference.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Assessing Hair Density
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              Density refers to how many individual hairs grow per square centimetre of scalp—essentially, how much hair you have overall. This differs from diameter.
            </p>
            
            <div className="space-y-3">
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Low Density (Thin)</h3>
                <p className="text-muted-foreground">
                  Scalp is easily visible through hair, especially when parted. Ponytails feel small in diameter. May need volumising techniques and products.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Medium Density</h3>
                <p className="text-muted-foreground">
                  Some scalp visible at parting but not extensively. Average ponytail circumference. Most product ranges work without issue.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">High Density (Thick)</h3>
                <p className="text-muted-foreground">
                  Scalp is difficult to see even at parting. Large ponytail diameter. May need more product per application and longer drying times.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Understanding Porosity
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              Porosity describes how well your hair absorbs and retains moisture. It is determined by the condition of the hair cuticle—the outer protective layer.
            </p>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Low Porosity</h3>
                <p className="text-muted-foreground text-sm">
                  Cuticles lie flat and tight. Takes a long time to get wet and to dry. Products sit on top rather than absorbing. Needs heat to open cuticles for conditioning.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Medium Porosity</h3>
                <p className="text-muted-foreground text-sm">
                  Cuticles are slightly open. Absorbs and retains moisture well. Accepts chemical treatments predictably. Generally the healthiest state.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">High Porosity</h3>
                <p className="text-muted-foreground text-sm">
                  Cuticles are open or damaged. Absorbs moisture quickly but loses it fast. Often frizzy and dry. Needs sealants and protein treatments.
                </p>
              </div>
            </div>

            <div className="mt-4 p-4 rounded-lg bg-muted/50 border border-border">
              <p className="font-medium text-foreground mb-1">The Float Test</p>
              <p className="text-muted-foreground text-sm">
                Drop a clean, product-free strand into a glass of room-temperature water. Low porosity hair floats. Medium porosity sinks slowly. High porosity sinks immediately. Note this test has limitations but provides a general indication.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Common Myths About Hair Type
            </h2>
            
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-muted/50 border border-border">
                <p className="font-medium text-foreground mb-1">Myth: Your hair type never changes</p>
                <p className="text-muted-foreground text-sm">
                  Hormones, age, medications, and health conditions can alter curl pattern, diameter, and density. Pregnancy, menopause, and thyroid issues commonly affect hair type. Regular reassessment is worthwhile.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-muted/50 border border-border">
                <p className="font-medium text-foreground mb-1">Myth: Everyone has one consistent hair type</p>
                <p className="text-muted-foreground text-sm">
                  Most people have multiple types on their head. The hairline, crown, and nape often behave differently. Treat different sections according to their needs rather than forcing one approach everywhere.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-muted/50 border border-border">
                <p className="font-medium text-foreground mb-1">Myth: Fine hair and thin hair are the same</p>
                <p className="text-muted-foreground text-sm">
                  Fine refers to strand diameter; thin refers to density. You can have fine but dense hair, or coarse but thin hair. These require different approaches.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              When to Seek Professional Help
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              Consider consulting a trichologist or dermatologist if:
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground mb-4">
              <li>Your hair type has changed suddenly without obvious cause</li>
              <li>You are experiencing significant hair loss alongside texture changes</li>
              <li>You cannot find products that work despite understanding your type</li>
              <li>Scalp issues accompany your hair concerns</li>
              <li>You suspect hormonal or medical causes for changes</li>
            </ul>
          </section>

          <section className="mb-10 p-6 rounded-xl bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20">
            <p className="text-foreground leading-relaxed">
              HairCare AI can help personalise this further based on your hair type, scalp condition, and goals.
            </p>
          </section>

          <FAQSection faqs={faqs} />
          
          <ArticleNavigation 
            next={{ title: "Best Care for Curly Hair", href: "/hair-types/curly-hair-care" }}
            relatedArticles={relatedArticles}
          />
          
          <ChatCTA />
          
          <MedicalDisclaimer />
        </article>
      </ContentPageLayout>
    </>
  );
};

export default IdentifyHairTypePage;
