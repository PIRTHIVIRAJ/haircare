import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import ContentPageLayout from "@/components/ContentPageLayout";
import Breadcrumb from "@/components/Breadcrumb";
import FAQSection from "@/components/FAQSection";
import ChatCTA from "@/components/ChatCTA";
import MedicalDisclaimer from "@/components/MedicalDisclaimer";
import RelatedArticles from "@/components/RelatedArticles";
import ArticleNavigation from "@/components/ArticleNavigation";

const CommonMistakesPage = () => {
  const faqs = [
    {
      question: "How do I know if I'm making hair care mistakes?",
      answer: "Signs include persistent dryness, excessive breakage, frizz that doesn't improve with products, scalp issues, and hair that looks dull despite regular washing. If your routine isn't yielding results after several weeks, evaluate your habits."
    },
    {
      question: "Is using multiple styling products a mistake?",
      answer: "Not necessarily, but layering too many products can cause buildup and weigh hair down. Focus on quality over quantity, and ensure you're clarifying regularly to remove residue."
    },
    {
      question: "Should I follow the same routine every day?",
      answer: "Consistency matters, but hair needs vary. Some days warrant more moisture, others need lighter products. Pay attention to how your hair responds and adjust rather than rigidly following a single routine."
    },
    {
      question: "Are salon treatments necessary for healthy hair?",
      answer: "Not essential, but professional treatments can address issues home care cannot fully resolve. Regular trims are valuable for managing split ends. Deep treatments depend on your hair's condition and needs."
    }
  ];

  const relatedArticles = [
    { title: "How to Prevent Hair Breakage", href: "/hair-routines/prevent-breakage", description: "Protecting hair from damage" },
    { title: "The Perfect Routine for Your Hair Type", href: "/hair-routines/by-hair-type", description: "Tailored routines for every texture" },
    { title: "How Often Should You Wash Your Hair?", href: "/hair-routines/how-often-wash", description: "Finding your ideal frequency" }
  ];

  return (
    <>
      <SEOHead 
        title="Hair Care Mistakes Most People Make | HairCare.ai"
        description="Identify common hair care mistakes that may be damaging your hair. Learn what to avoid and how to correct bad habits for healthier hair."
        canonicalUrl="https://haircare.ai/hair-routines/common-mistakes"
        articleSchema={{
          headline: "Hair Care Mistakes Most People Make",
          description: "Identify common hair care mistakes that may be damaging your hair. Learn what to avoid and how to correct bad habits for healthier hair.",
        }}
      />
      
      <ContentPageLayout>
        <div className="max-w-4xl mx-auto">
          <Breadcrumb items={[
            { label: "Hair Routines", href: "/hair-routines/by-hair-type" },
            { label: "Common Mistakes" }
          ]} />
          
          <article className="prose prose-lg max-w-none">
            <header className="mb-8">
              <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
                Hair Care Mistakes Most People Make
              </h1>
              <p className="text-lg text-muted-foreground">
                Even with good intentions, many common hair care habits cause more harm than good. Recognising and correcting these mistakes can transform your hair health.
              </p>
            </header>

            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-8">
              <h2 className="text-lg font-semibold text-foreground mt-0 mb-2">Quick Answer</h2>
              <p className="text-muted-foreground mb-0">
                The most common hair care mistakes include over-washing, using excessive heat without protection, brushing wet hair aggressively, skipping conditioner, applying products incorrectly, and neglecting scalp health. Correcting these habits often improves hair condition within weeks.
              </p>
            </div>

            <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">Washing Mistakes</h2>
            
            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">Over-Washing</h3>
            <p className="text-muted-foreground mb-4">
              Washing too frequently strips natural oils, triggering the scalp to produce more sebum to compensate. This creates a cycle where hair feels oily faster, prompting more washing.
            </p>
            <p className="text-muted-foreground mb-4">
              <strong>The fix:</strong> Gradually extend time between washes. Most people don't need to wash daily. Allow your scalp to adjust over two to four weeks.
            </p>

            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">Using Water That's Too Hot</h3>
            <p className="text-muted-foreground mb-4">
              Hot water opens the cuticle excessively and can strip moisture from the hair shaft. It may also irritate the scalp.
            </p>
            <p className="text-muted-foreground mb-4">
              <strong>The fix:</strong> Wash with lukewarm water and finish with a cool rinse to seal the cuticle and add shine.
            </p>

            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">Shampooing the Wrong Way</h3>
            <p className="text-muted-foreground mb-4">
              Piling hair on top of the head while shampooing creates tangles. Applying shampoo directly to lengths strips moisture unnecessarily.
            </p>
            <p className="text-muted-foreground mb-4">
              <strong>The fix:</strong> Apply shampoo to the scalp only, massaging gently with fingertips. Let the lather run down the lengths when rinsing—this provides sufficient cleansing without over-stripping.
            </p>

            <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">Conditioning Mistakes</h2>
            
            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">Skipping Conditioner</h3>
            <p className="text-muted-foreground mb-4">
              Some people skip conditioner because they fear it will make hair greasy. This leaves hair without the protection and moisture it needs.
            </p>
            <p className="text-muted-foreground mb-4">
              <strong>The fix:</strong> Always condition, but apply only to mid-lengths and ends. If your hair is fine or oily, use a lightweight formula.
            </p>

            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">Applying Conditioner to the Scalp</h3>
            <p className="text-muted-foreground mb-4">
              Unless you have a very dry scalp, applying conditioner to roots weighs hair down and can clog follicles.
            </p>
            <p className="text-muted-foreground mb-4">
              <strong>The fix:</strong> Start applying conditioner a few inches from the roots, focusing on the ends where hair is oldest and driest.
            </p>

            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">Not Leaving Conditioner Long Enough</h3>
            <p className="text-muted-foreground mb-4">
              Rinsing immediately after application doesn't give conditioner time to penetrate.
            </p>
            <p className="text-muted-foreground mb-4">
              <strong>The fix:</strong> Leave conditioner on for two to three minutes. For deep conditioning masks, follow product instructions for optimal time.
            </p>

            <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">Drying and Brushing Mistakes</h2>
            
            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">Rubbing Hair with a Towel</h3>
            <p className="text-muted-foreground mb-4">
              Vigorous rubbing creates friction that roughens the cuticle, causing frizz and breakage.
            </p>
            <p className="text-muted-foreground mb-4">
              <strong>The fix:</strong> Gently squeeze or blot hair with a microfibre towel or soft T-shirt.
            </p>

            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">Brushing Wet Hair Aggressively</h3>
            <p className="text-muted-foreground mb-4">
              Wet hair is at its weakest. Pulling a brush through wet tangles stretches and snaps strands.
            </p>
            <p className="text-muted-foreground mb-4">
              <strong>The fix:</strong> Use a wide-tooth comb or detangling brush on wet hair. Apply conditioner or detangling spray first, and work from ends upward.
            </p>

            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">Brushing from Root to Tip</h3>
            <p className="text-muted-foreground mb-4">
              Starting at the roots pushes tangles downward, creating larger knots and causing breakage.
            </p>
            <p className="text-muted-foreground mb-4">
              <strong>The fix:</strong> Always start detangling from the ends, gradually working upward toward the roots.
            </p>

            <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">Heat Styling Mistakes</h2>
            
            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">Skipping Heat Protectant</h3>
            <p className="text-muted-foreground mb-4">
              Using hot tools without protection allows heat to damage the protein structure of hair, causing brittleness and split ends.
            </p>
            <p className="text-muted-foreground mb-4">
              <strong>The fix:</strong> Always apply heat protectant before blow-drying or using hot tools. Reapply before using additional heated styling tools.
            </p>

            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">Using Maximum Heat Settings</h3>
            <p className="text-muted-foreground mb-4">
              Higher temperatures aren't necessarily better. Fine and damaged hair especially cannot tolerate high heat.
            </p>
            <p className="text-muted-foreground mb-4">
              <strong>The fix:</strong> Use the lowest effective temperature. Fine hair typically needs lower settings; thick, coarse hair can tolerate slightly higher heat.
            </p>

            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">Styling Wet Hair with Hot Tools</h3>
            <p className="text-muted-foreground mb-4">
              Applying a flat iron or curling iron to wet or damp hair causes rapid steam formation, damaging the hair shaft severely.
            </p>
            <p className="text-muted-foreground mb-4">
              <strong>The fix:</strong> Ensure hair is completely dry before using flat irons or curling tools. Blow-dry first if needed.
            </p>

            <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">Product Mistakes</h2>
            
            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">Using Wrong Products for Your Hair Type</h3>
            <p className="text-muted-foreground mb-4">
              Products designed for curly hair may weigh down fine, straight hair. Lightweight products may not provide enough moisture for coily textures.
            </p>
            <p className="text-muted-foreground mb-4">
              <strong>The fix:</strong> Choose products formulated for your specific hair type and adjust based on results.
            </p>

            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">Overloading with Products</h3>
            <p className="text-muted-foreground mb-4">
              Layering too many products causes buildup, weighing hair down and making it look dull or greasy.
            </p>
            <p className="text-muted-foreground mb-4">
              <strong>The fix:</strong> Use fewer products and clarify regularly to remove buildup. Start with small amounts and add more only if needed.
            </p>

            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">Never Clarifying</h3>
            <p className="text-muted-foreground mb-4">
              Even gentle products leave residue over time. Buildup can make hair limp, dull, and unresponsive to conditioning.
            </p>
            <p className="text-muted-foreground mb-4">
              <strong>The fix:</strong> Use a clarifying shampoo every two to four weeks, or more often if you use heavy styling products.
            </p>

            <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">Scalp and Lifestyle Mistakes</h2>
            
            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">Neglecting Scalp Health</h3>
            <p className="text-muted-foreground mb-4">
              Focusing only on hair while ignoring the scalp is like caring for plants while neglecting the soil. A healthy scalp is the foundation for healthy hair.
            </p>
            <p className="text-muted-foreground mb-4">
              <strong>The fix:</strong> Massage the scalp gently while shampooing. Consider occasional scalp treatments or exfoliation if you experience buildup or flaking.
            </p>

            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">Tight Hairstyles Every Day</h3>
            <p className="text-muted-foreground mb-4">
              Constant tension from tight ponytails, buns, or braids can cause traction alopecia—gradual hair loss from repeated pulling.
            </p>
            <p className="text-muted-foreground mb-4">
              <strong>The fix:</strong> Vary your hairstyles and keep tension low. Use soft hair ties and change the position of ponytails and buns regularly.
            </p>

            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">Skipping Trims</h3>
            <p className="text-muted-foreground mb-4">
              Avoiding trims to "grow hair longer" backfires. Split ends travel up the shaft, causing breakage that shortens hair overall.
            </p>
            <p className="text-muted-foreground mb-4">
              <strong>The fix:</strong> Trim every eight to twelve weeks, or whenever split ends become noticeable.
            </p>

            <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">When to Seek Professional Help</h2>
            <p className="text-muted-foreground mb-4">
              Consult a professional if:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li>Correcting mistakes doesn't improve hair condition after several weeks</li>
              <li>Hair is severely damaged from chemical or heat treatments</li>
              <li>You notice unusual hair loss or scalp changes</li>
              <li>You're unsure which products or techniques suit your hair</li>
            </ul>
            <p className="text-muted-foreground mb-4">
              A stylist or trichologist can provide personalised assessment and recommendations.
            </p>

            <div className="bg-accent/30 border border-accent rounded-lg p-6 my-8">
              <p className="text-foreground mb-0">
                <strong>HairCare AI can help personalise this further based on your hair type, scalp condition, and goals.</strong>
              </p>
            </div>

            <ArticleNavigation 
              previous={{ title: "Sleeping Habits That Protect Hair", href: "/hair-routines/sleep-habits" }}
              next={{ title: "Seasonal Hair Care Tips", href: "/hair-routines/seasonal-care" }}
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

export default CommonMistakesPage;