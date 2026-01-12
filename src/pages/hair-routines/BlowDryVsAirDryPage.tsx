import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import ContentPageLayout from "@/components/ContentPageLayout";
import Breadcrumb from "@/components/Breadcrumb";
import FAQSection from "@/components/FAQSection";
import ChatCTA from "@/components/ChatCTA";
import MedicalDisclaimer from "@/components/MedicalDisclaimer";
import RelatedArticles from "@/components/RelatedArticles";
import ArticleNavigation from "@/components/ArticleNavigation";

const BlowDryVsAirDryPage = () => {
  const faqs = [
    {
      question: "Is air-drying healthier than blow-drying?",
      answer: "Not always. While air-drying avoids heat damage, leaving hair wet too long can cause hygral fatigue—swelling and weakening of the hair shaft. A combination approach, partially air-drying then finishing with low heat, often works best."
    },
    {
      question: "What temperature should I use on my blow dryer?",
      answer: "Use the lowest effective temperature. Medium heat works for most hair types; reserve high heat for very thick, coarse hair and use briefly. Cool shot settings help seal the cuticle and set styles."
    },
    {
      question: "How far should the dryer be from my hair?",
      answer: "Maintain at least 15 centimetres (6 inches) between the nozzle and your hair. Keep the dryer moving constantly rather than focusing heat on one spot."
    },
    {
      question: "Can I sleep with wet hair?",
      answer: "It's not ideal. Wet hair is more fragile and prone to breakage from friction. If necessary, braid loosely and use a satin pillowcase. Allow hair to be at least 80% dry before sleeping."
    }
  ];

  const relatedArticles = [
    { title: "How to Prevent Hair Breakage", href: "/hair-routines/prevent-breakage", description: "Protecting hair from damage" },
    { title: "The Perfect Routine for Your Hair Type", href: "/hair-routines/by-hair-type", description: "Tailored routines for every texture" },
    { title: "Common Hair Care Mistakes", href: "/hair-routines/common-mistakes", description: "Habits that may harm your hair" }
  ];

  return (
    <>
      <SEOHead 
        title="Blow-Drying vs Air-Drying: Which Is Better for Your Hair? | HairCare.ai"
        description="Compare blow-drying and air-drying methods to understand which is healthier for your hair. Learn proper techniques to minimise damage with either approach."
        canonicalUrl="https://haircare.ai/hair-routines/blow-dry-vs-air-dry"
        articleSchema={{
          headline: "Blow-Drying vs Air-Drying: Which Is Better?",
          description: "Compare blow-drying and air-drying methods to understand which is healthier for your hair. Learn proper techniques to minimise damage with either approach.",
        }}
      />
      
      <ContentPageLayout>
        <div className="max-w-4xl mx-auto">
          <Breadcrumb items={[
            { label: "Hair Routines", href: "/hair-routines/by-hair-type" },
            { label: "Blow-Dry vs Air-Dry" }
          ]} />
          
          <article className="prose prose-lg max-w-none">
            <header className="mb-8">
              <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
                Blow-Drying vs Air-Drying
              </h1>
              <p className="text-lg text-muted-foreground">
                The assumption that air-drying is always healthier doesn't tell the whole story. Both methods have benefits and drawbacks depending on your hair type and technique.
              </p>
            </header>

            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-8">
              <h2 className="text-lg font-semibold text-foreground mt-0 mb-2">Quick Answer</h2>
              <p className="text-muted-foreground mb-0">
                Neither method is universally better. Air-drying avoids heat damage but can cause hygral fatigue if hair stays wet too long. Blow-drying with proper technique and heat protection can be gentler than prolonged wetness. The healthiest approach for many is a combination: air-dry until 70-80% dry, then finish with low heat.
              </p>
            </div>

            <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">The Science of Wet Hair</h2>
            <p className="text-muted-foreground mb-4">
              Understanding why drying method matters requires knowing what happens to hair when it's wet. Water temporarily breaks hydrogen bonds within the hair structure, causing strands to swell and become more flexible—but also more fragile.
            </p>
            <p className="text-muted-foreground mb-4">
              The cuticle—the protective outer layer—lifts when hair absorbs water. The longer hair remains wet, the longer the cuticle stays open and vulnerable. This is why both extreme heat and prolonged wetness can damage hair.
            </p>

            <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">Air-Drying: Benefits and Drawbacks</h2>
            
            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">Benefits</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li><strong>No heat damage:</strong> Avoids the protein damage caused by high temperatures</li>
              <li><strong>Time-saving:</strong> No active drying time required</li>
              <li><strong>Natural texture:</strong> Allows curls and waves to form without disruption</li>
              <li><strong>Cost-effective:</strong> No electricity or tool wear</li>
              <li><strong>Gentle on scalp:</strong> No heat exposure to the scalp</li>
            </ul>

            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">Drawbacks</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li><strong>Hygral fatigue:</strong> Repeated or prolonged swelling from water can weaken hair over time</li>
              <li><strong>Frizz:</strong> Humid environments or touching hair while drying increases frizz</li>
              <li><strong>Long drying time:</strong> Thick or coily hair may take hours to dry completely</li>
              <li><strong>Scalp issues:</strong> A damp scalp for extended periods can encourage bacterial or fungal growth</li>
              <li><strong>Less styling control:</strong> Limited ability to create volume or specific shapes</li>
            </ul>

            <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">Blow-Drying: Benefits and Drawbacks</h2>
            
            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">Benefits</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li><strong>Faster drying:</strong> Reduces time hair remains wet and vulnerable</li>
              <li><strong>Seals the cuticle:</strong> Finishing with cool air smooths the cuticle layer</li>
              <li><strong>Styling versatility:</strong> Creates volume, smoothness, or curl definition</li>
              <li><strong>Scalp hygiene:</strong> Dries scalp quickly, reducing moisture-related issues</li>
              <li><strong>Reduced hygral fatigue:</strong> Less time swollen means less structural stress</li>
            </ul>

            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">Drawbacks</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li><strong>Heat damage:</strong> High temperatures can break protein bonds and cause brittleness</li>
              <li><strong>Moisture loss:</strong> Excessive heat strips moisture from the hair shaft</li>
              <li><strong>Time-consuming:</strong> Active drying requires effort, especially for long or thick hair</li>
              <li><strong>Skill required:</strong> Improper technique can cause damage or poor results</li>
            </ul>

            <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">The Hybrid Approach</h2>
            <p className="text-muted-foreground mb-4">
              Research suggests a combination often works best:
            </p>
            <ol className="list-decimal pl-6 text-muted-foreground space-y-2 mb-4">
              <li>Gently squeeze excess water with a microfibre towel or T-shirt (avoid rubbing)</li>
              <li>Apply heat protectant and any styling products</li>
              <li>Allow hair to air-dry until 70-80% dry</li>
              <li>Finish with a blow dryer on medium heat, keeping it moving and at least 15cm away</li>
              <li>Use the cool shot to seal the cuticle and set the style</li>
            </ol>
            <p className="text-muted-foreground mb-4">
              This approach limits both heat exposure and the time hair spends fully saturated.
            </p>

            <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">Best Method by Hair Type</h2>
            
            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">Fine or Thin Hair</h3>
            <p className="text-muted-foreground mb-4">
              Most vulnerable to heat damage. Air-dry partially, then use the lowest heat setting briefly. Focus on roots for volume and let ends dry naturally.
            </p>

            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">Thick or Coarse Hair</h3>
            <p className="text-muted-foreground mb-4">
              Can tolerate slightly higher heat. Air-drying thick hair completely may take too long, increasing hygral fatigue risk. A diffuser on medium heat speeds drying while protecting texture.
            </p>

            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">Curly Hair</h3>
            <p className="text-muted-foreground mb-4">
              A diffuser is preferable to direct airflow, which disrupts curl pattern. Scrunch curls into the diffuser and dry on low heat. Many people air-dry first, then diffuse briefly to set curls and reduce drying time.
            </p>

            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">Coily Hair</h3>
            <p className="text-muted-foreground mb-4">
              Most prone to dryness and breakage. Air-drying is often preferred, but can take many hours. A hooded dryer provides gentle, evenly distributed heat. If using a handheld dryer, keep it on low and maintain distance.
            </p>

            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">Damaged Hair</h3>
            <p className="text-muted-foreground mb-4">
              Already weakened hair is vulnerable to both heat and hygral fatigue. Air-dry partially, then use the lowest effective heat with a quality heat protectant. Avoid high heat entirely.
            </p>

            <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">Heat Protection</h2>
            <p className="text-muted-foreground mb-4">
              If you blow-dry, heat protectant is essential:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li>Apply to damp hair before drying</li>
              <li>Choose products that specify protection up to your dryer's temperature</li>
              <li>Reapply if you're doing extended styling with hot tools afterwards</li>
              <li>Silicone-based protectants coat hair and reduce direct heat contact</li>
              <li>Water-based protectants are lighter but may need more frequent application</li>
            </ul>

            <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">Common Myths</h2>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li><strong>"Air-drying is always healthier":</strong> Prolonged wetness causes its own type of damage called hygral fatigue</li>
              <li><strong>"The higher the heat, the faster and better":</strong> High heat damages proteins; medium heat with proper technique is more effective</li>
              <li><strong>"Blow-drying causes hair loss":</strong> Drying doesn't affect follicles; only extreme heat can damage the visible shaft</li>
              <li><strong>"You should towel-dry vigorously first":</strong> Rubbing creates friction and breakage; blot or squeeze instead</li>
            </ul>

            <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">When to Seek Professional Help</h2>
            <p className="text-muted-foreground mb-4">
              Consult a professional if:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li>Hair breaks or snaps during drying regardless of method</li>
              <li>Scalp becomes irritated, itchy, or develops sores after drying</li>
              <li>Hair texture has changed significantly and doesn't improve with adjusted technique</li>
              <li>You notice excessive shedding during the drying process</li>
            </ul>
            <p className="text-muted-foreground mb-4">
              A trichologist can assess hair structure and recommend the best drying approach for your specific situation.
            </p>

            <div className="bg-accent/30 border border-accent rounded-lg p-6 my-8">
              <p className="text-foreground mb-0">
                <strong>HairCare AI can help personalise this further based on your hair type, scalp condition, and goals.</strong>
              </p>
            </div>

            <ArticleNavigation 
              previous={{ title: "Brushing Hair Properly", href: "/hair-routines/brushing-hair" }}
              next={{ title: "How to Prevent Hair Breakage", href: "/hair-routines/prevent-breakage" }}
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

export default BlowDryVsAirDryPage;