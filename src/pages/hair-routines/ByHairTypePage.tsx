import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import ContentPageLayout from "@/components/ContentPageLayout";
import Breadcrumb from "@/components/Breadcrumb";
import FAQSection from "@/components/FAQSection";
import ChatCTA from "@/components/ChatCTA";
import MedicalDisclaimer from "@/components/MedicalDisclaimer";
import RelatedArticles from "@/components/RelatedArticles";
import ArticleNavigation from "@/components/ArticleNavigation";

const ByHairTypePage = () => {
  const faqs = [
    {
      question: "How do I know what my hair type is?",
      answer: "Hair type is determined by texture (straight, wavy, curly, coily), diameter (fine, medium, coarse), and density (thin, medium, thick). Let hair air-dry without products, then observe its natural pattern and feel individual strands to assess diameter."
    },
    {
      question: "Can I use the same routine if I have multiple concerns?",
      answer: "Yes, but prioritise based on what's most problematic. For example, if you have wavy hair that's also damaged, focus on moisture and gentle handling while adjusting styling products for your wave pattern."
    },
    {
      question: "How long until I see results from a new routine?",
      answer: "Allow four to six weeks for improvements to become noticeable. Hair grows approximately half an inch per month, so changes to the shaft itself take time to grow out and become visible."
    },
    {
      question: "Should I use the same routine year-round?",
      answer: "Most people benefit from adjusting their routine seasonally. Humidity, temperature, and indoor heating all affect hair behaviour, so flexibility is more effective than rigidity."
    }
  ];

  const relatedArticles = [
    { title: "How to Identify Your Hair Type", href: "/hair-types/identify-your-hair-type", description: "Understanding your hair's texture and needs" },
    { title: "How Often Should You Wash Your Hair?", href: "/hair-routines/how-often-wash", description: "Finding your ideal wash frequency" },
    { title: "Common Hair Care Mistakes", href: "/hair-routines/common-mistakes", description: "Habits that may be harming your hair" }
  ];

  return (
    <>
      <SEOHead 
        title="The Perfect Hair Care Routine for Your Hair Type | HairCare.ai"
        description="Learn how to build a personalised hair care routine based on your hair type. Expert guidance for straight, wavy, curly, and coily hair textures."
        canonicalUrl="https://haircare.ai/hair-routines/by-hair-type"
        articleSchema={{
          headline: "The Perfect Hair Care Routine for Your Hair Type",
          description: "Learn how to build a personalised hair care routine based on your hair type. Expert guidance for straight, wavy, curly, and coily hair textures.",
        }}
      />
      
      <ContentPageLayout>
        <div className="max-w-4xl mx-auto">
          <Breadcrumb items={[
            { label: "Hair Routines", href: "/hair-routines/by-hair-type" },
            { label: "Routine by Hair Type" }
          ]} />
          
          <article className="prose prose-lg max-w-none">
            <header className="mb-8">
              <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
                The Perfect Hair Care Routine for Your Hair Type
              </h1>
              <p className="text-lg text-muted-foreground">
                A tailored routine can transform your hair from unmanageable to healthy and vibrant. Understanding what your specific hair type needs is the first step toward better results.
              </p>
            </header>

            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-8">
              <h2 className="text-lg font-semibold text-foreground mt-0 mb-2">Quick Answer</h2>
              <p className="text-muted-foreground mb-0">
                The ideal hair care routine depends on your hair type. Straight hair benefits from lightweight products and regular cleansing, wavy hair needs moisture with volume preservation, curly hair requires deep hydration and minimal manipulation, and coily hair thrives with rich moisture, protective styling, and gentle detangling.
              </p>
            </div>

            <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">Why Hair Type Matters</h2>
            <p className="text-muted-foreground mb-4">
              Hair type influences how oils travel down the shaft, how moisture is retained, and how susceptible strands are to damage. A routine designed for straight hair may leave curly hair dry and frizzy, while products for coily textures may weigh down fine, straight hair.
            </p>
            <p className="text-muted-foreground mb-4">
              Beyond texture, consider your hair's porosity (how well it absorbs moisture), density (how many strands you have), and diameter (thickness of individual strands). These factors refine your routine further.
            </p>

            <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">Routine for Straight Hair (Type 1)</h2>
            <p className="text-muted-foreground mb-4">
              Straight hair lacks the bends that slow sebum from travelling down the shaft, which means it can become oily quickly. However, this also means the hair is naturally well-conditioned.
            </p>
            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">Key Steps</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li><strong>Wash frequency:</strong> Every one to two days, or as needed based on oil production</li>
              <li><strong>Shampoo:</strong> Lightweight, clarifying formulas to prevent buildup</li>
              <li><strong>Conditioner:</strong> Apply to mid-lengths and ends only to avoid weighing down roots</li>
              <li><strong>Styling:</strong> Volumising products at the roots, light serums at the ends</li>
              <li><strong>Deep treatment:</strong> Once weekly with a lightweight mask focusing on ends</li>
            </ul>
            <p className="text-muted-foreground mb-4">
              Avoid heavy oils and butters, which can make straight hair look greasy. If your hair is fine as well as straight, look for products specifically designed for fine hair.
            </p>

            <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">Routine for Wavy Hair (Type 2)</h2>
            <p className="text-muted-foreground mb-4">
              Wavy hair sits between straight and curly, often experiencing both oiliness at the roots and dryness at the ends. The waves can range from loose bends to defined S-patterns.
            </p>
            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">Key Steps</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li><strong>Wash frequency:</strong> Every two to three days</li>
              <li><strong>Shampoo:</strong> Sulphate-free formulas to preserve natural oils without stripping</li>
              <li><strong>Conditioner:</strong> Medium-weight conditioner, focusing on ends and any dry areas</li>
              <li><strong>Styling:</strong> Mousse or light gel to enhance waves without crunchiness</li>
              <li><strong>Drying method:</strong> Scrunch with a microfibre towel, then air-dry or diffuse</li>
              <li><strong>Deep treatment:</strong> Hydrating mask every one to two weeks</li>
            </ul>
            <p className="text-muted-foreground mb-4">
              Many people with wavy hair find success with modified curly hair methods, adapting them to be lighter and less product-heavy.
            </p>

            <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">Routine for Curly Hair (Type 3)</h2>
            <p className="text-muted-foreground mb-4">
              Curly hair has a defined curl pattern ranging from loose loops to tight corkscrews. The bends in the hair shaft make it more difficult for natural oils to coat the entire strand, leaving curls prone to dryness.
            </p>
            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">Key Steps</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li><strong>Wash frequency:</strong> Every three to seven days, depending on scalp needs</li>
              <li><strong>Shampoo:</strong> Gentle, sulphate-free or co-wash (conditioner-only washing)</li>
              <li><strong>Conditioner:</strong> Rich, hydrating formula; consider leaving some in</li>
              <li><strong>Detangling:</strong> Finger-comb or wide-tooth comb while conditioner is in</li>
              <li><strong>Styling:</strong> Cream or gel applied to soaking wet hair, then scrunch</li>
              <li><strong>Drying:</strong> Diffuse on low heat or air-dry; avoid touching while drying</li>
              <li><strong>Deep treatment:</strong> Weekly deep conditioning mask</li>
            </ul>
            <p className="text-muted-foreground mb-4">
              The key to healthy curls is consistent moisture. Many curly hair routines involve layering products (leave-in, cream, gel) to lock in hydration.
            </p>

            <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">Routine for Coily Hair (Type 4)</h2>
            <p className="text-muted-foreground mb-4">
              Coily hair has tight curls or zig-zag patterns that make it especially vulnerable to dryness and breakage. This texture requires the most moisture and the gentlest handling.
            </p>
            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">Key Steps</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li><strong>Wash frequency:</strong> Every seven to fourteen days, with co-washing in between if needed</li>
              <li><strong>Pre-wash:</strong> Apply oil or conditioner before washing to protect strands</li>
              <li><strong>Shampoo:</strong> Gentle, hydrating formula or co-wash</li>
              <li><strong>Conditioner:</strong> Heavy, buttery formula; deep condition with heat for better penetration</li>
              <li><strong>Detangling:</strong> Only when hair is saturated with conditioner; work in sections</li>
              <li><strong>Styling:</strong> Layer leave-in, cream, and oil; seal with butter if needed</li>
              <li><strong>Protective styling:</strong> Braids, twists, or updos to reduce daily manipulation</li>
              <li><strong>Night care:</strong> Sleep on satin or silk to prevent friction</li>
            </ul>
            <p className="text-muted-foreground mb-4">
              Shrinkage is normal and healthy for coily hair. Stretched styles like twist-outs or braid-outs can showcase length while minimising daily manipulation.
            </p>

            <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">Adjusting for Other Factors</h2>
            <p className="text-muted-foreground mb-4">
              Hair type is just one variable. Consider these additional factors when building your routine:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li><strong>Porosity:</strong> Low porosity hair resists moisture (use heat to help products absorb); high porosity hair loses moisture quickly (layer heavier products to seal)</li>
              <li><strong>Climate:</strong> Humid environments may require anti-humidity products; dry climates demand extra hydration</li>
              <li><strong>Chemical processing:</strong> Coloured or chemically treated hair needs more moisture and protein balance</li>
              <li><strong>Heat styling frequency:</strong> Regular heat use requires additional protection and conditioning</li>
            </ul>

            <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">Common Myths</h2>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li><strong>"Expensive products work better":</strong> Effectiveness depends on ingredients and suitability for your hair type, not price</li>
              <li><strong>"You need dozens of products":</strong> A simple, consistent routine often outperforms a complicated one</li>
              <li><strong>"One routine works forever":</strong> Hair changes with age, hormones, seasons, and health; adapt accordingly</li>
              <li><strong>"Natural is always better":</strong> Some synthetic ingredients are highly effective and safe; judge products by results</li>
            </ul>

            <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">When to Seek Professional Help</h2>
            <p className="text-muted-foreground mb-4">
              If you've tried adjusting your routine for several weeks without improvement, consider consulting a professional. Signs that warrant expert advice include:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li>Persistent dryness despite regular conditioning</li>
              <li>Breakage that doesn't improve with gentler handling</li>
              <li>Scalp issues like itching, flaking, or tenderness</li>
              <li>Sudden changes in texture or density</li>
              <li>Hair loss beyond normal shedding</li>
            </ul>
            <p className="text-muted-foreground mb-4">
              A trichologist or dermatologist can assess your hair and scalp health, while a skilled stylist can recommend products suited to your specific needs.
            </p>

            <div className="bg-accent/30 border border-accent rounded-lg p-6 my-8">
              <p className="text-foreground mb-0">
                <strong>HairCare AI can help personalise this further based on your hair type, scalp condition, and goals.</strong>
              </p>
            </div>

            <ArticleNavigation 
              previous={{ title: "Best Ingredients for Scalp Health", href: "/scalp-health/best-ingredients" }}
              next={{ title: "How Often Should You Wash Your Hair?", href: "/hair-routines/how-often-wash" }}
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

export default ByHairTypePage;