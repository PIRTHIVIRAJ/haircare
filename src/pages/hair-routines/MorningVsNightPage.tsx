import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import ContentPageLayout from "@/components/ContentPageLayout";
import Breadcrumb from "@/components/Breadcrumb";
import FAQSection from "@/components/FAQSection";
import ChatCTA from "@/components/ChatCTA";
import MedicalDisclaimer from "@/components/MedicalDisclaimer";
import RelatedArticles from "@/components/RelatedArticles";
import ArticleNavigation from "@/components/ArticleNavigation";

const MorningVsNightPage = () => {
  const faqs = [
    {
      question: "Is it better to wash hair in the morning or at night?",
      answer: "It depends on your needs. Morning washes offer a fresh start for styling, while night washes allow hair to dry naturally before bed. Choose based on your schedule, hair type, and whether you use heat to dry."
    },
    {
      question: "Should I sleep with wet hair?",
      answer: "Sleeping on wet hair increases friction and can cause breakage, tangling, and even scalp issues in humid conditions. If you must sleep with damp hair, braid it loosely and use a satin pillowcase."
    },
    {
      question: "Will overnight treatments clog my pores?",
      answer: "Oils applied to hair lengths won't clog facial pores, but products applied to the scalp could contribute to breakouts along the hairline. Apply scalp treatments carefully and wash your pillowcase regularly."
    },
    {
      question: "Do I need both morning and night routines?",
      answer: "Not necessarily. A full routine once daily is sufficient for most people. The second touchpoint might just be protective styling before bed or a quick refresh in the morning."
    }
  ];

  const relatedArticles = [
    { title: "How Often Should You Wash Your Hair?", href: "/hair-routines/how-often-wash", description: "Finding your ideal wash frequency" },
    { title: "Sleeping Habits That Protect Hair", href: "/hair-routines/sleep-habits", description: "Overnight hair protection tips" },
    { title: "Common Hair Care Mistakes", href: "/hair-routines/common-mistakes", description: "Habits that may harm your hair" }
  ];

  return (
    <>
      <SEOHead 
        title="Morning vs Night Hair Routines: When to Care for Your Hair | HairCare.ai"
        description="Discover whether morning or night hair routines are better for your hair type. Learn the benefits and ideal practices for both timing options."
        canonicalUrl="https://haircare.ai/hair-routines/morning-vs-night"
        articleSchema={{
          headline: "Morning vs Night Hair Routines",
          description: "Discover whether morning or night hair routines are better for your hair type. Learn the benefits and ideal practices for both timing options.",
        }}
      />
      
      <ContentPageLayout>
        <div className="max-w-4xl mx-auto">
          <Breadcrumb items={[
            { label: "Hair Routines", href: "/hair-routines/by-hair-type" },
            { label: "Morning vs Night" }
          ]} />
          
          <article className="prose prose-lg max-w-none">
            <header className="mb-8">
              <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
                Morning vs Night Hair Routines
              </h1>
              <p className="text-lg text-muted-foreground">
                The timing of your hair care routine can affect results. Understanding the benefits of each approach helps you build a schedule that works for your lifestyle and hair type.
              </p>
            </header>

            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-8">
              <h2 className="text-lg font-semibold text-foreground mt-0 mb-2">Quick Answer</h2>
              <p className="text-muted-foreground mb-0">
                Morning routines suit those who need volume, prefer heat styling, or have oily scalps. Night routines work well for those with curly or dry hair, who want air-drying time, or who benefit from overnight treatments. Many people combine both with a simple protective nighttime step and a quick morning refresh.
              </p>
            </div>

            <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">Benefits of Morning Hair Routines</h2>
            <p className="text-muted-foreground mb-4">
              Washing and styling in the morning has distinct advantages:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li><strong>Fresh styling:</strong> Style holds best when hair is freshly washed, especially for straight and wavy textures</li>
              <li><strong>Volume:</strong> Sleeping can flatten hair; morning washing restores lift</li>
              <li><strong>Oil control:</strong> Those with oily scalps may prefer starting the day with clean hair</li>
              <li><strong>Heat styling safety:</strong> Hair is fully dry before using hot tools, reducing damage risk</li>
              <li><strong>Post-workout wash:</strong> If you exercise in the morning, washing afterwards makes sense</li>
            </ul>

            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">Ideal Morning Routine</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li>Shampoo and condition as needed for your hair type</li>
              <li>Apply leave-in products to damp hair</li>
              <li>Blow-dry or air-dry, depending on available time</li>
              <li>Style with hot tools if desired (always use heat protection)</li>
              <li>Finish with any styling products for hold or shine</li>
            </ul>

            <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">Benefits of Night Hair Routines</h2>
            <p className="text-muted-foreground mb-4">
              Evening hair care offers its own set of benefits:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li><strong>Air-drying time:</strong> No rush to leave, allowing hair to dry naturally without heat</li>
              <li><strong>Overnight treatments:</strong> Deep conditioners, oils, and masks can work while you sleep</li>
              <li><strong>Relaxation:</strong> Hair washing can be part of a wind-down routine</li>
              <li><strong>Morning time savings:</strong> Wake up with dry hair ready for minimal styling</li>
              <li><strong>Reduced heat exposure:</strong> Less need for blow-drying if hair dries overnight</li>
            </ul>

            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">Ideal Night Routine</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li>Wash and condition in the evening</li>
              <li>Apply leave-in products and any overnight treatments</li>
              <li>Allow hair to partially air-dry before bed</li>
              <li>Protect hair with a loose braid, bun, or satin bonnet</li>
              <li>Sleep on a satin or silk pillowcase to reduce friction</li>
              <li>In the morning, refresh with water, leave-in spray, or minimal product</li>
            </ul>

            <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">Considerations by Hair Type</h2>
            
            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">Straight and Fine Hair</h3>
            <p className="text-muted-foreground mb-4">
              Often benefits from morning washes because sleeping tends to flatten volume. If washing at night, refresh roots in the morning with dry shampoo and a quick blow-dry at the roots.
            </p>

            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">Wavy Hair</h3>
            <p className="text-muted-foreground mb-4">
              Can work with either timing. Night washing allows waves to set with scrunching and air-drying, while morning washing offers fresh waves for the day. The key is protecting waves during sleep.
            </p>

            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">Curly Hair</h3>
            <p className="text-muted-foreground mb-4">
              Often favours night washing because curls need time to air-dry and set. Many people with curly hair sleep in a pineapple (high, loose ponytail) or bonnet, then refresh curls with water and product in the morning.
            </p>

            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">Coily Hair</h3>
            <p className="text-muted-foreground mb-4">
              Typically benefits from night routines due to lengthy drying times. Overnight stretching methods like banding or twisting can also prep hair for next-day styles. Always protect with satin at night.
            </p>

            <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">Protective Night Steps</h2>
            <p className="text-muted-foreground mb-4">
              Regardless of when you wash, how you protect hair at night affects its condition:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li><strong>Loose braids or twists:</strong> Prevent tangling and breakage, especially for longer hair</li>
              <li><strong>Pineapple method:</strong> A high, loose ponytail that keeps curls and waves intact</li>
              <li><strong>Satin or silk bonnet/scarf:</strong> Reduces friction and moisture loss, particularly for textured hair</li>
              <li><strong>Satin or silk pillowcase:</strong> Less friction than cotton, benefiting all hair types</li>
              <li><strong>Loose bun:</strong> Keeps hair contained without creating creases</li>
            </ul>

            <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">Quick Morning Refresh Tips</h2>
            <p className="text-muted-foreground mb-4">
              If you wash at night and need to revive hair in the morning:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li><strong>Water spray:</strong> Lightly mist hair to reactivate products and reduce frizz</li>
              <li><strong>Leave-in conditioner:</strong> A small amount on dry ends freshens curls and waves</li>
              <li><strong>Dry shampoo:</strong> Absorbs oil at the roots for straight and wavy hair</li>
              <li><strong>Steam:</strong> Stand in a steamy bathroom to help curls rebound</li>
              <li><strong>Minimal manipulation:</strong> Avoid excessive brushing or touching, which creates frizz</li>
            </ul>

            <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">Common Myths</h2>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li><strong>"Washing at night causes fungus":</strong> Only sleeping on soaking wet hair in humid conditions poses a minor risk; partially dried hair is fine</li>
              <li><strong>"Morning showers are always better for hair":</strong> Hair type matters more than timing</li>
              <li><strong>"You must wash every morning":</strong> Daily washing isn't necessary for most hair types</li>
              <li><strong>"Night routines make hair flat":</strong> Proper protection maintains volume and curl definition</li>
            </ul>

            <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">When to Seek Professional Help</h2>
            <p className="text-muted-foreground mb-4">
              Consult a professional if:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li>You're experiencing significant breakage regardless of routine timing</li>
              <li>Your scalp shows signs of irritation, flaking, or infection</li>
              <li>Hair texture has changed suddenly</li>
              <li>You're losing more hair than normal</li>
            </ul>
            <p className="text-muted-foreground mb-4">
              A dermatologist or trichologist can assess whether underlying factors are affecting your hair health.
            </p>

            <div className="bg-accent/30 border border-accent rounded-lg p-6 my-8">
              <p className="text-foreground mb-0">
                <strong>HairCare AI can help personalise this further based on your hair type, scalp condition, and goals.</strong>
              </p>
            </div>

            <ArticleNavigation 
              previous={{ title: "How Often Should You Wash Your Hair?", href: "/hair-routines/how-often-wash" }}
              next={{ title: "Brushing Hair Properly", href: "/hair-routines/brushing-hair" }}
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

export default MorningVsNightPage;