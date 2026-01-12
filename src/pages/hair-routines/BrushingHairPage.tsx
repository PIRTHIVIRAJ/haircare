import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import ContentPageLayout from "@/components/ContentPageLayout";
import Breadcrumb from "@/components/Breadcrumb";
import FAQSection from "@/components/FAQSection";
import ChatCTA from "@/components/ChatCTA";
import MedicalDisclaimer from "@/components/MedicalDisclaimer";
import RelatedArticles from "@/components/RelatedArticles";
import ArticleNavigation from "@/components/ArticleNavigation";

const BrushingHairPage = () => {
  const faqs = [
    {
      question: "How often should I brush my hair?",
      answer: "For straight and wavy hair, once or twice daily is sufficient. For curly and coily hair, brushing or combing is typically done only during washing when hair is saturated with conditioner. Over-brushing causes unnecessary friction and breakage."
    },
    {
      question: "Is brushing wet hair bad?",
      answer: "Wet hair is more vulnerable to stretching and breakage. If you must detangle wet hair, use a wide-tooth comb or wet brush, work gently from ends to roots, and apply conditioner or detangling product first."
    },
    {
      question: "Can brushing stimulate hair growth?",
      answer: "Gentle brushing increases blood flow to the scalp, which may support follicle health, but it doesn't directly cause hair to grow faster. Aggressive brushing causes more harm than any potential benefit."
    },
    {
      question: "Should I brush my hair before washing?",
      answer: "Yes, brushing before washing removes loose hairs and tangles, making the washing process easier and reducing breakage when hair is wet. This is particularly helpful for longer hair."
    }
  ];

  const relatedArticles = [
    { title: "How to Prevent Hair Breakage", href: "/hair-routines/prevent-breakage", description: "Protecting hair from damage" },
    { title: "Common Hair Care Mistakes", href: "/hair-routines/common-mistakes", description: "Habits that may harm your hair" },
    { title: "The Perfect Routine for Your Hair Type", href: "/hair-routines/by-hair-type", description: "Tailored routines for every texture" }
  ];

  return (
    <>
      <SEOHead 
        title="How to Brush Your Hair Properly | HairCare.ai"
        description="Learn the correct way to brush your hair to prevent breakage and damage. Expert tips on brushing technique, tools, and frequency by hair type."
        canonicalUrl="https://haircare.ai/hair-routines/brushing-hair"
        articleSchema={{
          headline: "How to Brush Your Hair Properly",
          description: "Learn the correct way to brush your hair to prevent breakage and damage. Expert tips on brushing technique, tools, and frequency by hair type.",
        }}
      />
      
      <ContentPageLayout>
        <div className="max-w-4xl mx-auto">
          <Breadcrumb items={[
            { label: "Hair Routines", href: "/hair-routines/by-hair-type" },
            { label: "Brushing Hair" }
          ]} />
          
          <article className="prose prose-lg max-w-none">
            <header className="mb-8">
              <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
                Brushing Hair Properly
              </h1>
              <p className="text-lg text-muted-foreground">
                Brushing seems simple, but doing it incorrectly can cause breakage, split ends, and scalp irritation. The right technique varies significantly by hair type.
              </p>
            </header>

            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-8">
              <h2 className="text-lg font-semibold text-foreground mt-0 mb-2">Quick Answer</h2>
              <p className="text-muted-foreground mb-0">
                Always start from the ends and work upward to avoid pulling tangles through the hair. Choose the right tool for your texture—paddle brushes for straight hair, wide-tooth combs for curly and coily textures. Brush dry hair gently, and if detangling wet hair, use conditioner and a gentle tool.
              </p>
            </div>

            <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">Why Brushing Technique Matters</h2>
            <p className="text-muted-foreground mb-4">
              Each stroke of a brush creates friction. When done correctly, brushing distributes natural oils, removes tangles, and stimulates the scalp. When done incorrectly, it stretches hair to breaking point, damages the cuticle, and pulls hair from the root.
            </p>
            <p className="text-muted-foreground mb-4">
              The cuticle—the outer layer of each hair strand—consists of overlapping scales. Rough brushing lifts these scales, making hair more porous, frizzy, and prone to damage. Gentle, directional brushing keeps cuticles smooth.
            </p>

            <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">Choosing the Right Tool</h2>
            
            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">Paddle Brush</h3>
            <p className="text-muted-foreground mb-4">
              Best for straight, wavy, or thick hair. The flat, wide surface covers more area and works well for smoothing and distributing oils from scalp to ends.
            </p>

            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">Round Brush</h3>
            <p className="text-muted-foreground mb-4">
              Used during blow-drying to create volume and shape. Not suitable for detangling—use only on mostly dry hair with heat styling.
            </p>

            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">Boar Bristle Brush</h3>
            <p className="text-muted-foreground mb-4">
              Natural bristles are gentle and excellent for distributing sebum along the hair shaft. Works best on fine to medium straight hair. May not have enough tension for thick or textured hair.
            </p>

            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">Wide-Tooth Comb</h3>
            <p className="text-muted-foreground mb-4">
              Essential for curly and coily hair. Glides through without disrupting curl patterns. Also ideal for detangling wet hair of any type when used with conditioner.
            </p>

            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">Detangling Brush</h3>
            <p className="text-muted-foreground mb-4">
              Features flexible bristles designed to bend around knots rather than pulling through them. Good for fragile, fine, or damaged hair.
            </p>

            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">Fingers</h3>
            <p className="text-muted-foreground mb-4">
              Many people with curly and coily hair prefer finger-detangling, which allows you to feel tangles and work through them without the friction of tools.
            </p>

            <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">The Correct Technique</h2>
            
            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">Start from the Ends</h3>
            <p className="text-muted-foreground mb-4">
              Hold the section of hair above where you're brushing to prevent pulling at the scalp. Begin at the very ends, gently working through tangles. Once the ends are smooth, move up a few inches and repeat until you can brush from root to tip without resistance.
            </p>

            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">Work in Sections</h3>
            <p className="text-muted-foreground mb-4">
              For thick or long hair, clip the top layers up and work through the underneath sections first. This ensures thorough detangling without missing hidden knots.
            </p>

            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">Be Gentle at Tangles</h3>
            <p className="text-muted-foreground mb-4">
              When you encounter a knot, don't force the brush through. Hold the hair above the tangle and gently work the brush or comb through the knot from below, using short strokes.
            </p>

            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">Brush in the Direction of Growth</h3>
            <p className="text-muted-foreground mb-4">
              Brushing from root to tip (once detangled) smooths the cuticle. Brushing against the direction lifts the cuticle and creates frizz.
            </p>

            <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">Brushing by Hair Type</h2>
            
            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">Straight Hair</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li>Brush once or twice daily to distribute oils</li>
              <li>Use a paddle or boar bristle brush</li>
              <li>Can brush when dry or damp (with care)</li>
              <li>Helpful to brush before washing to remove loose hairs</li>
            </ul>

            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">Wavy Hair</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li>Brush or comb when dry or while conditioning in the shower</li>
              <li>Avoid brushing styled waves—this causes frizz</li>
              <li>Use a wide-tooth comb or detangling brush</li>
              <li>Scrunch rather than brush to refresh waves</li>
            </ul>

            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">Curly Hair</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li>Detangle only when saturated with conditioner during washing</li>
              <li>Use a wide-tooth comb, detangling brush, or fingers</li>
              <li>Never brush dry curls—this disrupts curl pattern and causes frizz</li>
              <li>Consider "squish to condish" method: apply conditioner, scrunch, then gently detangle</li>
            </ul>

            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">Coily Hair</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li>Detangle only when wet and saturated with conditioner or oil</li>
              <li>Work in small sections, starting from ends</li>
              <li>Finger-detangling is often gentlest</li>
              <li>If using a tool, choose a wide-tooth comb or specific detangling brush</li>
              <li>Never brush dry coily hair</li>
            </ul>

            <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">Wet Hair Considerations</h2>
            <p className="text-muted-foreground mb-4">
              Hair is most vulnerable when wet. The hydrogen bonds that give hair structure are temporarily broken by water, making strands stretch up to 30% more than when dry. This means wet hair breaks more easily under tension.
            </p>
            <p className="text-muted-foreground mb-4">
              If you must detangle wet hair:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li>Apply conditioner or detangling spray first for slip</li>
              <li>Use a wide-tooth comb or flexible detangling brush</li>
              <li>Work in sections, starting from ends</li>
              <li>Be extremely gentle—if resistance is high, add more conditioner</li>
            </ul>

            <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">Common Myths</h2>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li><strong>"100 brush strokes a day for healthy hair":</strong> This outdated advice leads to over-brushing and breakage. Quality of brushing matters more than quantity.</li>
              <li><strong>"Brushing removes knots best":</strong> For textured hair, combs or fingers are gentler and more effective than brushes.</li>
              <li><strong>"All brushes are the same":</strong> Tool choice significantly impacts hair health; match your tool to your texture.</li>
              <li><strong>"You should brush from root to tip":</strong> This pulls tangles down the shaft, causing breakage. Always start at the ends.</li>
            </ul>

            <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">When to Seek Professional Help</h2>
            <p className="text-muted-foreground mb-4">
              Consult a professional if:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li>Hair tangles excessively despite proper technique</li>
              <li>You notice significant breakage during brushing</li>
              <li>Brushing causes scalp pain or irritation</li>
              <li>Hair texture has changed, becoming matted or unusually knotted</li>
            </ul>
            <p className="text-muted-foreground mb-4">
              Severe tangling can sometimes indicate damage, dryness, or changes in hair structure that benefit from professional assessment.
            </p>

            <div className="bg-accent/30 border border-accent rounded-lg p-6 my-8">
              <p className="text-foreground mb-0">
                <strong>HairCare AI can help personalise this further based on your hair type, scalp condition, and goals.</strong>
              </p>
            </div>

            <ArticleNavigation 
              previous={{ title: "Morning vs Night Hair Routines", href: "/hair-routines/morning-vs-night" }}
              next={{ title: "Blow-Drying vs Air-Drying", href: "/hair-routines/blow-dry-vs-air-dry" }}
            />
          </article>

          <FAQSection faqs={faqs} />
          <ChatCTA />
          <RelatedArticles articles={relatedArticles} />
          <MedicalDisclaimer />
        </div>
      </ContentPageLayout>
    </>
  );
};

export default BrushingHairPage;