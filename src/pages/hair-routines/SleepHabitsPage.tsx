import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import ContentPageLayout from "@/components/ContentPageLayout";
import Breadcrumb from "@/components/Breadcrumb";
import FAQSection from "@/components/FAQSection";
import ChatCTA from "@/components/ChatCTA";
import MedicalDisclaimer from "@/components/MedicalDisclaimer";
import RelatedArticles from "@/components/RelatedArticles";
import ArticleNavigation from "@/components/ArticleNavigation";

const SleepHabitsPage = () => {
  const faqs = [
    {
      question: "Is it better to sleep with hair up or down?",
      answer: "For short hair, down is usually fine. For medium to long hair, a loose protective style like a braid or high ponytail (pineapple) reduces tangling and friction. The key is keeping it loose enough to avoid tension while containing hair to prevent matting."
    },
    {
      question: "Do satin pillowcases really make a difference?",
      answer: "Yes. Satin and silk create less friction than cotton, reducing breakage and frizz. They also absorb less moisture from hair and skin. The smoother surface allows hair to glide rather than catch and pull."
    },
    {
      question: "Should I apply products before bed?",
      answer: "Light leave-in products or oils on the ends can provide overnight conditioning. Avoid heavy products near the scalp, which can clog pores. Always use a protective covering to avoid transferring product to pillows."
    },
    {
      question: "How can I preserve my curls overnight?",
      answer: "The pineapple method—a high, loose ponytail at the crown—works well. Alternatively, loosely gather curls in a satin bonnet or scarf. Refresh curls in the morning with water and a small amount of styling product."
    }
  ];

  const relatedArticles = [
    { title: "How to Prevent Hair Breakage", href: "/hair-routines/prevent-breakage", description: "Protecting hair from damage" },
    { title: "Morning vs Night Hair Routines", href: "/hair-routines/morning-vs-night", description: "When to care for your hair" },
    { title: "Common Hair Care Mistakes", href: "/hair-routines/common-mistakes", description: "Habits that may harm your hair" }
  ];

  return (
    <>
      <SEOHead 
        title="Sleeping Habits That Protect Hair | HairCare.ai"
        description="Discover overnight hair care strategies to prevent breakage and maintain style. Learn the best sleeping positions, protective styles, and bedding choices."
        canonicalUrl="https://haircare.ai/hair-routines/sleep-habits"
        articleSchema={{
          headline: "Sleeping Habits That Protect Hair",
          description: "Discover overnight hair care strategies to prevent breakage and maintain style. Learn the best sleeping positions, protective styles, and bedding choices.",
        }}
      />
      
      <ContentPageLayout>
        <div className="max-w-4xl mx-auto">
          <Breadcrumb items={[
            { label: "Hair Routines", href: "/hair-routines/by-hair-type" },
            { label: "Sleep Habits" }
          ]} />
          
          <article className="prose prose-lg max-w-none">
            <header className="mb-8">
              <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
                Sleeping Habits That Protect Hair
              </h1>
              <p className="text-lg text-muted-foreground">
                We spend roughly a third of our lives sleeping. During those hours, hair is subjected to friction, pressure, and movement that can cause tangles, frizz, and breakage over time.
              </p>
            </header>

            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-8">
              <h2 className="text-lg font-semibold text-foreground mt-0 mb-2">Quick Answer</h2>
              <p className="text-muted-foreground mb-0">
                Protect your hair during sleep by using a satin or silk pillowcase, wearing a loose protective style like a braid or pineapple, and ensuring hair is mostly dry before bed. These habits reduce friction-related breakage and help maintain styles and curl patterns.
              </p>
            </div>

            <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">Why Nighttime Hair Care Matters</h2>
            <p className="text-muted-foreground mb-4">
              Every time you shift position during sleep, your hair rubs against your pillow. Over six to eight hours, this friction accumulates. Cotton and other rough fabrics catch and pull at the hair cuticle, causing roughness, frizz, and eventually breakage.
            </p>
            <p className="text-muted-foreground mb-4">
              Long hair tangles easily when loose at night, leading to knots that require pulling to remove. Curls and waves flatten under pressure or stretch out of shape. The good news is that simple adjustments can mitigate most of this damage.
            </p>

            <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">Choosing the Right Pillowcase</h2>
            <p className="text-muted-foreground mb-4">
              The surface your hair touches all night significantly impacts its condition:
            </p>
            
            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">Satin and Silk</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li><strong>Low friction:</strong> Smooth fibres allow hair to glide rather than catch</li>
              <li><strong>Moisture retention:</strong> Absorb less moisture from hair than cotton</li>
              <li><strong>Frizz reduction:</strong> Less cuticle disruption means smoother hair in the morning</li>
              <li><strong>Skin benefits:</strong> Also gentler on facial skin</li>
            </ul>
            <p className="text-muted-foreground mb-4">
              True silk is more expensive but highly breathable. Satin (typically polyester) offers similar smoothness at lower cost. Both are effective for hair protection.
            </p>

            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">Cotton and Other Materials</h3>
            <p className="text-muted-foreground mb-4">
              Standard cotton pillowcases have a rougher texture that creates friction. They also absorb moisture, potentially drying out hair. If you prefer cotton, look for high thread count options and consider adding a satin hair covering.
            </p>

            <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">Protective Hairstyles for Sleep</h2>
            
            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">The Pineapple</h3>
            <p className="text-muted-foreground mb-4">
              Popular for curly and wavy hair, the pineapple is a high, loose ponytail positioned at the crown of the head:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li>Gather hair loosely at the very top of your head</li>
              <li>Secure with a satin scrunchie or spiral tie (not tight elastic)</li>
              <li>The position keeps curls from being compressed under your head</li>
              <li>In the morning, remove and shake out gently</li>
            </ul>

            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">Loose Braids</h3>
            <p className="text-muted-foreground mb-4">
              Braiding prevents tangling for long or medium-length hair:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li>One loose braid down the back works for most</li>
              <li>Two braids prevent sleeping directly on one braid</li>
              <li>Keep braids loose enough to avoid tension</li>
              <li>Secure with soft ties, not tight elastics</li>
            </ul>

            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">Loose Buns</h3>
            <p className="text-muted-foreground mb-4">
              A very loose bun at the top of the head keeps hair contained:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li>Position high enough that you don't sleep on it</li>
              <li>Twist loosely and secure with a soft scrunchie</li>
              <li>Not suitable for those who want to preserve curl definition</li>
            </ul>

            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">Bonnets and Scarves</h3>
            <p className="text-muted-foreground mb-4">
              Satin or silk head coverings provide comprehensive protection:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li><strong>Bonnets:</strong> Easy to put on; choose adjustable ones to prevent slipping</li>
              <li><strong>Scarves:</strong> More secure when wrapped properly; some prefer the look</li>
              <li>Both reduce friction even if you move during sleep</li>
              <li>Particularly beneficial for textured and chemically treated hair</li>
            </ul>

            <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">Recommendations by Hair Type</h2>
            
            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">Straight Hair</h3>
            <p className="text-muted-foreground mb-4">
              Straight hair is less prone to tangling but still benefits from protection. A satin pillowcase is often sufficient. For long straight hair, a loose braid or low ponytail prevents knots.
            </p>

            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">Wavy Hair</h3>
            <p className="text-muted-foreground mb-4">
              The pineapple method or loose braids help maintain wave pattern. Avoid anything too tight that might stretch waves out. A satin pillowcase reduces morning frizz.
            </p>

            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">Curly Hair</h3>
            <p className="text-muted-foreground mb-4">
              The pineapple is ideal for preserving curls. Combine with a satin pillowcase or bonnet for maximum protection. Refresh curls in the morning with water and product if needed.
            </p>

            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">Coily Hair</h3>
            <p className="text-muted-foreground mb-4">
              A satin bonnet or scarf is essential for coily textures. Consider protective styles like twists or braids that last multiple days. Moisturise ends before bed and seal with oil if needed.
            </p>

            <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">Additional Nighttime Tips</h2>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li><strong>Don't sleep on wet hair:</strong> Wet hair is fragile and more likely to break. It can also encourage scalp issues in humid conditions.</li>
              <li><strong>Apply leave-in products sparingly:</strong> A light oil or serum on the ends provides overnight conditioning without making pillows greasy.</li>
              <li><strong>Consider overnight treatments:</strong> For deep conditioning, apply a mask to the lengths, cover with a shower cap, then add your bonnet. Wash out in the morning.</li>
              <li><strong>Avoid metal clips or hard accessories:</strong> These can create dents and cause breakage.</li>
              <li><strong>Keep hair off your face:</strong> Reduces product transfer to skin and prevents facial breakouts.</li>
            </ul>

            <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">Common Myths</h2>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li><strong>"Sleeping with hair down is healthier":</strong> For long hair, this often leads to more tangling and friction damage.</li>
              <li><strong>"Any pillowcase is fine":</strong> Material matters—smooth surfaces reduce friction significantly.</li>
              <li><strong>"Bonnets are only for certain hair types":</strong> All hair types can benefit from reduced friction during sleep.</li>
              <li><strong>"Tight braids protect hair better":</strong> Tight braids cause tension and can lead to breakage and even traction alopecia over time.</li>
            </ul>

            <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">When to Seek Professional Help</h2>
            <p className="text-muted-foreground mb-4">
              Consult a professional if:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li>You wake up with significant hair on your pillow (could indicate a shedding issue)</li>
              <li>Hair is matting or tangling severely despite protective measures</li>
              <li>You notice thinning around the hairline from frequent tight styles</li>
              <li>Scalp issues develop from wearing head coverings</li>
            </ul>
            <p className="text-muted-foreground mb-4">
              A trichologist or dermatologist can assess whether underlying issues are contributing to nighttime hair problems.
            </p>

            <div className="bg-accent/30 border border-accent rounded-lg p-6 my-8">
              <p className="text-foreground mb-0">
                <strong>HairCare AI can help personalise this further based on your hair type, scalp condition, and goals.</strong>
              </p>
            </div>

            <ArticleNavigation 
              previous={{ title: "How to Prevent Hair Breakage", href: "/hair-routines/prevent-breakage" }}
              next={{ title: "Common Hair Care Mistakes", href: "/hair-routines/common-mistakes" }}
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

export default SleepHabitsPage;