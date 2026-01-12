import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import ContentPageLayout from "@/components/ContentPageLayout";
import Breadcrumb from "@/components/Breadcrumb";
import FAQSection from "@/components/FAQSection";
import ChatCTA from "@/components/ChatCTA";
import MedicalDisclaimer from "@/components/MedicalDisclaimer";
import RelatedArticles from "@/components/RelatedArticles";
import ArticleNavigation from "@/components/ArticleNavigation";

const TravelCarePage = () => {
  const faqs = [
    {
      question: "How do I keep my hair healthy on long flights?",
      answer: "Aircraft cabins are extremely dry. Apply a leave-in conditioner or oil before boarding, avoid washing hair right before the flight, and drink plenty of water. Consider a loose braid to prevent tangling while you sleep."
    },
    {
      question: "Can I bring full-size hair products on a plane?",
      answer: "In carry-on luggage, liquids must be 100ml or less in most countries. Either decant products into travel containers or pack full-size items in checked luggage. Solid products (shampoo bars, dry shampoo powders) bypass liquid restrictions."
    },
    {
      question: "How do I deal with hard water when travelling?",
      answer: "Hard water can leave mineral deposits that make hair dull and dry. Pack a clarifying shampoo or apple cider vinegar rinse. A portable shower filter can also help if you're staying somewhere long-term."
    },
    {
      question: "Should I wash my hair less while travelling?",
      answer: "It depends on your activities and the climate. You might wash less if conditions are mild, but sweat, chlorine, or salt water exposure may require more frequent washing. Dry shampoo helps extend time between washes."
    }
  ];

  const relatedArticles = [
    { title: "Seasonal Hair Care Tips", href: "/hair-routines/seasonal-care", description: "Adapting to environmental changes" },
    { title: "How to Prevent Hair Breakage", href: "/hair-routines/prevent-breakage", description: "Protecting hair from damage" },
    { title: "The Perfect Routine for Your Hair Type", href: "/hair-routines/by-hair-type", description: "Tailored routines for every texture" }
  ];

  return (
    <>
      <SEOHead 
        title="Travel-Friendly Hair Routines: Maintaining Hair Health on the Go | HairCare.ai"
        description="Learn how to care for your hair while travelling. Expert tips on packing essentials, managing different climates, and maintaining routines on the road."
        canonicalUrl="https://haircare.ai/hair-routines/travel-care"
        articleSchema={{
          headline: "Travel-Friendly Hair Routines",
          description: "Learn how to care for your hair while travelling. Expert tips on packing essentials, managing different climates, and maintaining routines on the road.",
        }}
      />
      
      <ContentPageLayout>
        <div className="max-w-4xl mx-auto">
          <Breadcrumb items={[
            { label: "Hair Routines", href: "/hair-routines/by-hair-type" },
            { label: "Travel Care" }
          ]} />
          
          <article className="prose prose-lg max-w-none">
            <header className="mb-8">
              <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
                Travel-Friendly Hair Routines
              </h1>
              <p className="text-lg text-muted-foreground">
                Maintaining healthy hair while travelling requires adapting to new environments, limited luggage space, and disrupted routines. With the right preparation, travel doesn't have to compromise hair health.
              </p>
            </header>

            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-8">
              <h2 className="text-lg font-semibold text-foreground mt-0 mb-2">Quick Answer</h2>
              <p className="text-muted-foreground mb-0">
                Pack multi-purpose products, travel-sized essentials, and solid alternatives where possible. Prepare for different water quality and climate conditions. Use protective styles to minimise daily styling needs. Simplify your routine while keeping key steps—cleansing, conditioning, and protection.
              </p>
            </div>

            <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">Packing Essentials</h2>
            <p className="text-muted-foreground mb-4">
              Strategic packing ensures you have what you need without overpacking:
            </p>
            
            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">Must-Have Products</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li><strong>Shampoo and conditioner:</strong> Travel sizes or decanted into approved containers</li>
              <li><strong>Leave-in conditioner or hair oil:</strong> Essential for moisture and detangling</li>
              <li><strong>Dry shampoo:</strong> Extends time between washes</li>
              <li><strong>Heat protectant:</strong> If you'll use any heat tools</li>
              <li><strong>Hair ties and clips:</strong> For protective styling</li>
              <li><strong>Detangling brush or wide-tooth comb:</strong> Compact versions available</li>
            </ul>

            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">Smart Packing Tips</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li><strong>Solid products:</strong> Shampoo bars, conditioner bars, and dry shampoo powders bypass liquid restrictions</li>
              <li><strong>Multi-use products:</strong> A single oil can serve as leave-in treatment, frizz smoother, and scalp treatment</li>
              <li><strong>Reusable containers:</strong> Invest in quality silicone bottles that won't leak</li>
              <li><strong>Sample sizes:</strong> Collect samples from brands you love for travel use</li>
              <li><strong>Minimal heat tools:</strong> Consider leaving tools behind and embracing natural texture</li>
            </ul>

            <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">Dealing with Different Climates</h2>
            
            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">Humid Destinations</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li>Pack anti-humidity products or serums</li>
              <li>Embrace natural texture rather than fighting frizz</li>
              <li>Opt for updos and braids that contain hair</li>
              <li>Use lighter products that won't weigh hair down in humidity</li>
            </ul>

            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">Dry Destinations</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li>Bring extra moisturising products</li>
              <li>Apply leave-in treatments liberally</li>
              <li>Consider an overnight oil treatment if staying long-term</li>
              <li>Avoid washing too frequently to preserve natural oils</li>
            </ul>

            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">Beach and Pool Trips</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li>Wet hair with fresh water before swimming to reduce salt or chlorine absorption</li>
              <li>Apply leave-in conditioner or oil as a protective barrier</li>
              <li>Rinse thoroughly after every swim</li>
              <li>Pack a clarifying shampoo for weekly use</li>
              <li>Protect hair with a cap in chlorinated pools if possible</li>
            </ul>

            <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">Managing Water Quality</h2>
            <p className="text-muted-foreground mb-4">
              Water quality varies globally. Hard water, chlorine levels, and mineral content affect hair:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li><strong>Hard water:</strong> Leaves mineral deposits that make hair dull, dry, and difficult to manage</li>
              <li><strong>Soft water:</strong> May make it harder to rinse shampoo completely</li>
              <li><strong>High chlorine:</strong> Dries and damages hair over time</li>
            </ul>
            <p className="text-muted-foreground mb-4">
              Solutions include:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li>Portable shower filter (useful for long stays)</li>
              <li>Apple cider vinegar rinse (1 part vinegar to 4 parts water) to remove buildup</li>
              <li>Clarifying shampoo to periodically remove mineral deposits</li>
              <li>Chelating treatments for severe hard water exposure</li>
            </ul>

            <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">Protective Travel Hairstyles</h2>
            <p className="text-muted-foreground mb-4">
              Low-maintenance styles reduce daily styling time and protect hair:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li><strong>Braids:</strong> Single or double braids last for days with minimal touch-ups</li>
              <li><strong>Buns:</strong> Low or high buns keep hair contained and off your neck in heat</li>
              <li><strong>Twist-outs or braid-outs:</strong> Set once and maintain for several days</li>
              <li><strong>Scarves and headwraps:</strong> Cover hair stylishly while providing protection</li>
              <li><strong>Natural texture:</strong> Embrace your hair's natural state rather than fighting it</li>
            </ul>

            <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">Airplane Hair Care</h2>
            <p className="text-muted-foreground mb-4">
              Aircraft cabins have extremely low humidity—often below 20%—which dehydrates hair:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li>Apply leave-in conditioner or oil before boarding</li>
              <li>Don't wash hair right before a flight</li>
              <li>Tie hair in a loose braid to prevent tangling</li>
              <li>Stay hydrated (drink water, not just coffee or alcohol)</li>
              <li>Avoid styling products that could dry out further in low humidity</li>
              <li>Consider a hydrating mist for long-haul flights</li>
            </ul>

            <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">Simplified Travel Routine</h2>
            <p className="text-muted-foreground mb-4">
              A basic travel routine covers the essentials without overwhelming your schedule:
            </p>
            <ol className="list-decimal pl-6 text-muted-foreground space-y-2 mb-4">
              <li><strong>Cleanse:</strong> Shampoo scalp as needed (less frequently than at home is often fine)</li>
              <li><strong>Condition:</strong> Focus on mid-lengths and ends</li>
              <li><strong>Detangle:</strong> Gently comb with conditioner in, or after applying leave-in</li>
              <li><strong>Protect and style:</strong> Apply leave-in or oil, then create a low-maintenance style</li>
              <li><strong>Maintain:</strong> Use dry shampoo between washes; refresh edges or curls with water and product</li>
            </ol>

            <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">Common Myths</h2>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li><strong>"You need your full routine while travelling":</strong> Simplification often works just as well for short trips</li>
              <li><strong>"Hotel products are fine":</strong> Hotel shampoos are often harsh and drying; bring your own or accept the temporary impact</li>
              <li><strong>"Travel ruins hair no matter what":</strong> With preparation, travel's effects can be minimised</li>
              <li><strong>"Dry shampoo is bad for your hair":</strong> Used occasionally, it's a helpful tool; just clarify when you return home</li>
            </ul>

            <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">When to Seek Professional Help</h2>
            <p className="text-muted-foreground mb-4">
              Consult a professional if:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li>Hair doesn't recover within a few weeks of returning home</li>
              <li>Scalp issues develop during or after travel (irritation, persistent flaking)</li>
              <li>Significant damage occurred from environmental exposure (severe dryness, breakage)</li>
              <li>You're planning extended travel and want a protective strategy in advance</li>
            </ul>
            <p className="text-muted-foreground mb-4">
              A stylist can recommend treatments to repair travel damage, and a trichologist can address any scalp concerns that developed.
            </p>

            <div className="bg-accent/30 border border-accent rounded-lg p-6 my-8">
              <p className="text-foreground mb-0">
                <strong>HairCare AI can help personalise this further based on your hair type, scalp condition, and goals.</strong>
              </p>
            </div>

            <ArticleNavigation 
              previous={{ title: "Seasonal Hair Care Tips", href: "/hair-routines/seasonal-care" }}
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

export default TravelCarePage;