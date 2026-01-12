import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import ContentPageLayout from "@/components/ContentPageLayout";
import Breadcrumb from "@/components/Breadcrumb";
import FAQSection from "@/components/FAQSection";
import ChatCTA from "@/components/ChatCTA";
import MedicalDisclaimer from "@/components/MedicalDisclaimer";
import RelatedArticles from "@/components/RelatedArticles";
import ArticleNavigation from "@/components/ArticleNavigation";

const SeasonalCarePage = () => {
  const faqs = [
    {
      question: "Does hair actually change with the seasons?",
      answer: "Yes. Environmental factors like humidity, temperature, and UV exposure directly affect hair's moisture levels, frizz, and overall condition. Your scalp also responds to seasonal changes, producing more or less oil depending on conditions."
    },
    {
      question: "Why does my hair shed more in autumn?",
      answer: "Increased shedding in autumn is normal. Research suggests hair follicles synchronise somewhat with daylight patterns, with more hairs entering the resting phase in late summer and shedding in autumn. This is typically temporary."
    },
    {
      question: "Should I use different products in summer and winter?",
      answer: "Often, yes. Summer may require lighter products and more UV protection, while winter typically demands richer, more hydrating formulas. Adjust based on how your hair responds to the current climate."
    },
    {
      question: "How do I protect my hair from chlorine in summer?",
      answer: "Wet hair thoroughly with fresh water before swimming—saturated hair absorbs less chlorine. Apply a leave-in conditioner or oil for extra protection. Rinse immediately after swimming and wash with a clarifying or swimmer's shampoo."
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
        title="Seasonal Hair Care Tips: Adjusting Your Routine Year-Round | HairCare.ai"
        description="Learn how to adapt your hair care routine for each season. Expert tips for protecting hair from summer sun, winter dryness, and seasonal transitions."
        canonicalUrl="https://haircare.ai/hair-routines/seasonal-care"
        articleSchema={{
          headline: "Seasonal Hair Care Tips",
          description: "Learn how to adapt your hair care routine for each season. Expert tips for protecting hair from summer sun, winter dryness, and seasonal transitions.",
        }}
      />
      
      <ContentPageLayout>
        <div className="max-w-4xl mx-auto">
          <Breadcrumb items={[
            { label: "Hair Routines", href: "/hair-routines/by-hair-type" },
            { label: "Seasonal Care" }
          ]} />
          
          <article className="prose prose-lg max-w-none">
            <header className="mb-8">
              <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
                Seasonal Hair Care Tips
              </h1>
              <p className="text-lg text-muted-foreground">
                Your hair's needs change throughout the year. Adapting your routine to seasonal conditions helps maintain healthy hair regardless of weather.
              </p>
            </header>

            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-8">
              <h2 className="text-lg font-semibold text-foreground mt-0 mb-2">Quick Answer</h2>
              <p className="text-muted-foreground mb-0">
                Adjust hair care seasonally: summer requires UV protection, more frequent washing, and lighter products; winter demands richer moisture, less frequent washing, and protection from dry indoor heat. Spring and autumn are transitional periods to gradually shift your routine.
              </p>
            </div>

            <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">Why Seasons Affect Hair</h2>
            <p className="text-muted-foreground mb-4">
              Hair responds to environmental conditions. Humidity levels affect how moisture moves in and out of the hair shaft. Temperature influences scalp oil production. UV radiation can damage the hair's protein structure. Understanding these effects helps you protect your hair proactively.
            </p>

            <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">Summer Hair Care</h2>
            <p className="text-muted-foreground mb-4">
              Summer brings UV exposure, chlorine from pools, salt water, humidity, and increased sweating. All of these can affect hair condition.
            </p>
            
            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">Key Summer Challenges</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li><strong>UV damage:</strong> Sun breaks down proteins and fades colour</li>
              <li><strong>Chlorine:</strong> Dries hair, can cause green tinting in light hair</li>
              <li><strong>Salt water:</strong> Dehydrating and can create textured, beachy effects but damages over time</li>
              <li><strong>Humidity:</strong> Causes frizz as hair absorbs moisture from the air</li>
              <li><strong>Increased oil production:</strong> Heat triggers more sebum, leading to oilier scalp</li>
            </ul>

            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">Summer Solutions</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li>Use products with UV filters or wear hats during peak sun hours</li>
              <li>Wet hair with fresh water before swimming; apply leave-in conditioner for a protective barrier</li>
              <li>Rinse thoroughly after swimming and use a clarifying shampoo weekly</li>
              <li>Apply anti-humidity products or serums to seal the cuticle</li>
              <li>Switch to lighter products that won't weigh hair down in heat</li>
              <li>Wash more frequently if needed to manage sweat and oil</li>
              <li>Consider protective styles that keep hair off your neck and reduce sun exposure</li>
            </ul>

            <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">Winter Hair Care</h2>
            <p className="text-muted-foreground mb-4">
              Winter brings cold outdoor air, dry indoor heating, static, and less humidity—all of which strip moisture from hair.
            </p>
            
            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">Key Winter Challenges</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li><strong>Dry air:</strong> Low humidity pulls moisture from hair</li>
              <li><strong>Indoor heating:</strong> Further dehydrates hair and scalp</li>
              <li><strong>Static electricity:</strong> Dry hair generates static, causing flyaways</li>
              <li><strong>Friction from hats and scarves:</strong> Can cause breakage and frizz</li>
              <li><strong>Temperature extremes:</strong> Moving between cold and heated environments stresses hair</li>
            </ul>

            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">Winter Solutions</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li>Switch to richer, more moisturising shampoos and conditioners</li>
              <li>Deep condition weekly or fortnightly</li>
              <li>Use leave-in treatments and hair oils to seal in moisture</li>
              <li>Wash less frequently to preserve natural oils</li>
              <li>Use a humidifier indoors to add moisture to the air</li>
              <li>Apply anti-static products or use a small amount of oil to calm flyaways</li>
              <li>Line hats with satin to reduce friction, or wear satin-lined styles</li>
              <li>Reduce heat styling to avoid adding to dryness</li>
            </ul>

            <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">Spring Hair Care</h2>
            <p className="text-muted-foreground mb-4">
              Spring is a transitional season. Humidity begins to rise, temperatures fluctuate, and hair may still be recovering from winter dryness.
            </p>
            
            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">Spring Strategies</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li>Clarify to remove winter product buildup</li>
              <li>Assess damage from winter and consider a trim</li>
              <li>Gradually transition to lighter products as humidity increases</li>
              <li>Begin incorporating UV protection as sun intensity increases</li>
              <li>Address any scalp issues that developed over winter</li>
              <li>Monitor for increased shedding (common in spring) and don't panic—it's usually normal</li>
            </ul>

            <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">Autumn Hair Care</h2>
            <p className="text-muted-foreground mb-4">
              Autumn signals decreasing humidity and cooling temperatures. It's the time to repair summer damage and prepare for winter.
            </p>
            
            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">Autumn Strategies</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li>Clarify to remove summer residue (chlorine, sunscreen, salt)</li>
              <li>Deep treat to repair UV and environmental damage</li>
              <li>Trim away summer-damaged ends</li>
              <li>Begin transitioning to richer, more hydrating products</li>
              <li>Expect some increased shedding—this is normal in autumn</li>
              <li>Stock up on winter hair care essentials</li>
            </ul>

            <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">Climate Considerations</h2>
            <p className="text-muted-foreground mb-4">
              Not everyone experiences distinct seasons. Adapt these guidelines to your specific climate:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li><strong>Tropical climates:</strong> Focus on humidity control and UV protection year-round</li>
              <li><strong>Arid climates:</strong> Prioritise moisture regardless of season</li>
              <li><strong>Temperate climates:</strong> Follow seasonal transitions as described</li>
              <li><strong>Monsoon regions:</strong> Prepare for humidity spikes and potential fungal issues during rainy seasons</li>
            </ul>

            <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">Common Myths</h2>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li><strong>"Cold weather makes hair grow slower":</strong> Growth rate is internal; cold doesn't directly affect follicle speed</li>
              <li><strong>"You don't need UV protection for hair":</strong> Hair suffers UV damage similar to skin; protection matters</li>
              <li><strong>"Seasonal shedding means something is wrong":</strong> Increased shedding in autumn/spring is often normal and temporary</li>
              <li><strong>"One routine works year-round":</strong> Adapting to conditions yields better results than rigid consistency</li>
            </ul>

            <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">When to Seek Professional Help</h2>
            <p className="text-muted-foreground mb-4">
              Consult a professional if:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li>Seasonal shedding seems excessive or prolonged beyond a few weeks</li>
              <li>Scalp conditions worsen with seasonal changes (eczema, psoriasis flares)</li>
              <li>Hair texture changes dramatically and doesn't recover</li>
              <li>You're struggling to find products that work for your climate</li>
            </ul>
            <p className="text-muted-foreground mb-4">
              A trichologist or dermatologist can assess whether seasonal changes are causing issues beyond normal variation.
            </p>

            <div className="bg-accent/30 border border-accent rounded-lg p-6 my-8">
              <p className="text-foreground mb-0">
                <strong>HairCare AI can help personalise this further based on your hair type, scalp condition, and goals.</strong>
              </p>
            </div>

            <ArticleNavigation 
              previous={{ title: "Common Hair Care Mistakes", href: "/hair-routines/common-mistakes" }}
              next={{ title: "Travel-Friendly Hair Routines", href: "/hair-routines/travel-care" }}
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

export default SeasonalCarePage;