import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import ContentPageLayout from "@/components/ContentPageLayout";
import Breadcrumb from "@/components/Breadcrumb";
import FAQSection from "@/components/FAQSection";
import ChatCTA from "@/components/ChatCTA";
import MedicalDisclaimer from "@/components/MedicalDisclaimer";
import RelatedArticles from "@/components/RelatedArticles";
import ArticleNavigation from "@/components/ArticleNavigation";

const HowOftenWashPage = () => {
  const faqs = [
    {
      question: "Is it bad to wash your hair every day?",
      answer: "It depends on your hair type and scalp. For oily, fine, or straight hair, daily washing may be appropriate. For curly, coily, or dry hair, daily washing can strip necessary moisture and lead to damage. Listen to your scalp rather than following rigid rules."
    },
    {
      question: "Can washing too often cause hair loss?",
      answer: "Washing itself doesn't cause hair loss—you're seeing hairs that were already shed during the hair growth cycle. However, aggressive scrubbing, hot water, or harsh products can contribute to breakage over time."
    },
    {
      question: "What if my hair is oily by the end of the day?",
      answer: "This may indicate your scalp is overproducing oil, possibly from over-washing. Try gradually extending time between washes. Dry shampoo can help absorb excess oil during the transition."
    },
    {
      question: "Should I wash my hair before or after exercise?",
      answer: "If you sweat heavily, rinsing with water and conditioning the ends (without shampooing) can remove sweat without over-cleansing. A full wash after every workout isn't necessary unless needed for scalp comfort."
    }
  ];

  const relatedArticles = [
    { title: "The Perfect Routine for Your Hair Type", href: "/hair-routines/by-hair-type", description: "Tailored routines for every texture" },
    { title: "Morning vs Night Hair Routines", href: "/hair-routines/morning-vs-night", description: "When to care for your hair" },
    { title: "Common Hair Care Mistakes", href: "/hair-routines/common-mistakes", description: "Habits that may harm your hair" }
  ];

  return (
    <>
      <SEOHead 
        title="How Often Should You Wash Your Hair? | HairCare.ai"
        description="Find out how often to wash your hair based on your hair type, scalp condition, and lifestyle. Expert guidance on wash frequency."
        canonicalUrl="https://haircare.ai/hair-routines/how-often-wash"
        articleSchema={{
          headline: "How Often Should You Wash Your Hair?",
          description: "Find out how often to wash your hair based on your hair type, scalp condition, and lifestyle. Expert guidance on wash frequency.",
        }}
      />
      
      <ContentPageLayout>
        <div className="max-w-4xl mx-auto">
          <Breadcrumb items={[
            { label: "Hair Routines", href: "/hair-routines/by-hair-type" },
            { label: "How Often to Wash" }
          ]} />
          
          <article className="prose prose-lg max-w-none">
            <header className="mb-8">
              <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
                How Often Should You Wash Your Hair?
              </h1>
              <p className="text-lg text-muted-foreground">
                The debate over wash frequency continues, but the truth is there's no universal answer. Your ideal schedule depends on multiple factors, from hair type to lifestyle.
              </p>
            </header>

            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-8">
              <h2 className="text-lg font-semibold text-foreground mt-0 mb-2">Quick Answer</h2>
              <p className="text-muted-foreground mb-0">
                Most people do well washing two to three times per week. Oily or fine hair may need daily washing, while curly or coily hair often benefits from once weekly or less. Your scalp's oil production, hair texture, and lifestyle all influence the ideal frequency.
              </p>
            </div>

            <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">Why Wash Frequency Matters</h2>
            <p className="text-muted-foreground mb-4">
              Washing serves two main purposes: cleaning the scalp and removing product buildup from the hair. Your scalp produces sebum, a natural oil that protects both the scalp and hair. This sebum travels down the hair shaft, coating and conditioning it.
            </p>
            <p className="text-muted-foreground mb-4">
              Washing too frequently can strip away sebum faster than your scalp can replenish it, leading to dryness and irritation. This can trigger the scalp to produce even more oil, creating a cycle of over-washing. Conversely, washing too infrequently allows sebum, sweat, dead skin cells, and product residue to accumulate, which can clog follicles and cause scalp issues.
            </p>

            <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">Factors That Determine Your Ideal Frequency</h2>
            
            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">Hair Type and Texture</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li><strong>Straight hair:</strong> Oil travels easily down the shaft, often requiring more frequent washing (daily to every other day)</li>
              <li><strong>Wavy hair:</strong> Moderate oil distribution; typically every two to three days</li>
              <li><strong>Curly hair:</strong> Oil has difficulty travelling along the bends; every three to seven days is common</li>
              <li><strong>Coily hair:</strong> Very slow oil distribution; weekly or even fortnightly washing may suffice</li>
            </ul>

            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">Scalp Type</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li><strong>Oily scalp:</strong> May need more frequent washing to prevent greasiness and scalp issues</li>
              <li><strong>Dry scalp:</strong> Less frequent washing helps preserve natural oils</li>
              <li><strong>Sensitive or problematic scalp:</strong> Follow guidance for your specific condition (dandruff, psoriasis, etc.)</li>
            </ul>

            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">Lifestyle Factors</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li><strong>Exercise frequency:</strong> Sweat and gym environments may necessitate more washing</li>
              <li><strong>Environment:</strong> Polluted or dusty areas require more cleansing</li>
              <li><strong>Product use:</strong> Heavy styling products need regular removal to prevent buildup</li>
              <li><strong>Climate:</strong> Humidity increases oiliness; dry climates may allow less frequent washing</li>
            </ul>

            <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">Guidelines by Hair Type</h2>
            
            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">Straight and Fine Hair</h3>
            <p className="text-muted-foreground mb-4">
              This combination tends to show oil most quickly. Daily or every-other-day washing is often appropriate. Use lightweight, clarifying shampoos that don't add weight.
            </p>

            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">Wavy Hair</h3>
            <p className="text-muted-foreground mb-4">
              Wavy hair typically does well with washing every two to three days. Sulphate-free shampoos help preserve the wave pattern and prevent excess stripping.
            </p>

            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">Curly Hair</h3>
            <p className="text-muted-foreground mb-4">
              Curls benefit from less frequent washing—often every three to seven days. Many people with curly hair use the co-wash method (conditioner-only washing) between shampoo sessions to refresh curls without drying them out.
            </p>

            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">Coily Hair</h3>
            <p className="text-muted-foreground mb-4">
              Coily textures are the driest and most fragile. Washing every seven to fourteen days is common, with co-washing or water-only rinses in between. When washing, focus on the scalp and let shampoo run down the lengths rather than scrubbing.
            </p>

            <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">Signs You're Washing Too Often</h2>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li>Scalp feels tight or dry after washing</li>
              <li>Hair feels straw-like or brittle</li>
              <li>Increased frizz and flyaways</li>
              <li>Scalp produces more oil than usual (overcompensation)</li>
              <li>Colour fades quickly if hair is dyed</li>
            </ul>

            <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">Signs You're Not Washing Enough</h2>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li>Visible greasiness or limp hair</li>
              <li>Scalp itching or irritation</li>
              <li>Unpleasant odour</li>
              <li>Flaking (could indicate buildup or a scalp condition)</li>
              <li>Clogged follicles or scalp acne</li>
            </ul>

            <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">How to Extend Time Between Washes</h2>
            <p className="text-muted-foreground mb-4">
              If you want to wash less frequently, transition gradually:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li>Add one extra day between washes and wait for your scalp to adjust</li>
              <li>Use dry shampoo at the roots to absorb excess oil</li>
              <li>Style hair in braids, buns, or updos to disguise oiliness</li>
              <li>Rinse with water only on non-wash days if needed</li>
              <li>Avoid touching your hair, which transfers oil from hands</li>
            </ul>
            <p className="text-muted-foreground mb-4">
              It typically takes two to four weeks for your scalp to recalibrate its oil production.
            </p>

            <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">Common Myths</h2>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li><strong>"Dirty hair grows faster":</strong> Hair growth rate is determined by follicle activity, not cleanliness. A healthy scalp supports growth.</li>
              <li><strong>"You should wash every day":</strong> This is outdated advice that doesn't account for hair type differences.</li>
              <li><strong>"Training your hair means never washing":</strong> While you can adjust to less frequent washing, completely avoiding cleansing can lead to scalp problems.</li>
              <li><strong>"All shampoos are the same":</strong> Ingredients vary significantly; choose formulas suited to your needs.</li>
            </ul>

            <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">When to Seek Professional Help</h2>
            <p className="text-muted-foreground mb-4">
              Consult a dermatologist or trichologist if you experience:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li>Persistent scalp issues despite adjusting your routine</li>
              <li>Excessive oiliness or dryness that doesn't improve</li>
              <li>Hair loss or thinning</li>
              <li>Flaking, redness, or sores on the scalp</li>
              <li>Sudden changes in scalp behaviour</li>
            </ul>

            <div className="bg-accent/30 border border-accent rounded-lg p-6 my-8">
              <p className="text-foreground mb-0">
                <strong>HairCare AI can help personalise this further based on your hair type, scalp condition, and goals.</strong>
              </p>
            </div>

            <ArticleNavigation 
              previous={{ title: "The Perfect Routine for Your Hair Type", href: "/hair-routines/by-hair-type" }}
              next={{ title: "Morning vs Night Hair Routines", href: "/hair-routines/morning-vs-night" }}
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

export default HowOftenWashPage;