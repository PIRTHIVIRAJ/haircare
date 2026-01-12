import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import ContentPageLayout from "@/components/ContentPageLayout";
import Breadcrumb from "@/components/Breadcrumb";
import FAQSection from "@/components/FAQSection";
import ChatCTA from "@/components/ChatCTA";
import MedicalDisclaimer from "@/components/MedicalDisclaimer";
import RelatedArticles from "@/components/RelatedArticles";
import ArticleNavigation from "@/components/ArticleNavigation";

const PreventBreakagePage = () => {
  const faqs = [
    {
      question: "What's the difference between breakage and shedding?",
      answer: "Shedding involves hair falling from the root with a white bulb attached—this is normal. Breakage is hair snapping along the shaft, resulting in shorter pieces without a root. Breakage indicates damage; shedding is a natural part of the hair cycle."
    },
    {
      question: "Can broken hair be repaired?",
      answer: "Once hair breaks, the damage is permanent because hair is not living tissue. However, you can prevent further breakage with proper care and mask the appearance of damage with conditioning treatments until new growth replaces it."
    },
    {
      question: "How long does it take to see improvement?",
      answer: "Hair grows about half an inch per month. With consistent protective practices, you may notice reduced breakage within two to four weeks, but it takes months for new, healthier hair to become visible along the length."
    },
    {
      question: "Does cutting hair prevent breakage?",
      answer: "Regular trims remove split ends before they travel up the shaft and cause further damage. However, cutting alone doesn't prevent breakage—you also need to address the underlying causes."
    }
  ];

  const relatedArticles = [
    { title: "Blow-Drying vs Air-Drying", href: "/hair-routines/blow-dry-vs-air-dry", description: "Which drying method is healthier" },
    { title: "Brushing Hair Properly", href: "/hair-routines/brushing-hair", description: "Gentle detangling techniques" },
    { title: "Sleeping Habits That Protect Hair", href: "/hair-routines/sleep-habits", description: "Overnight hair protection" }
  ];

  return (
    <>
      <SEOHead 
        title="How to Prevent Hair Breakage: Expert Tips | HairCare.ai"
        description="Learn proven strategies to prevent hair breakage. Understand the causes and discover daily habits, products, and techniques that protect your hair."
        canonicalUrl="https://haircare.ai/hair-routines/prevent-breakage"
        articleSchema={{
          headline: "How to Prevent Hair Breakage",
          description: "Learn proven strategies to prevent hair breakage. Understand the causes and discover daily habits, products, and techniques that protect your hair.",
        }}
      />
      
      <ContentPageLayout>
        <div className="max-w-4xl mx-auto">
          <Breadcrumb items={[
            { label: "Hair Routines", href: "/hair-routines/by-hair-type" },
            { label: "Prevent Breakage" }
          ]} />
          
          <article className="prose prose-lg max-w-none">
            <header className="mb-8">
              <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
                How to Prevent Hair Breakage
              </h1>
              <p className="text-lg text-muted-foreground">
                Breakage happens when hair strands become weakened and snap. Unlike natural shedding, breakage is preventable with the right approach to hair care.
              </p>
            </header>

            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-8">
              <h2 className="text-lg font-semibold text-foreground mt-0 mb-2">Quick Answer</h2>
              <p className="text-muted-foreground mb-0">
                Prevent breakage by maintaining adequate moisture, minimising heat and chemical processing, handling hair gently when wet, sleeping on satin or silk, and getting regular trims. Identify your specific breakage triggers—whether mechanical, chemical, or thermal—and address them systematically.
              </p>
            </div>

            <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">Understanding Hair Structure</h2>
            <p className="text-muted-foreground mb-4">
              Each hair strand consists of three layers: the medulla (inner core), cortex (main body containing proteins and pigment), and cuticle (protective outer layer of overlapping scales). Breakage occurs when the cuticle is damaged or lifted, exposing the vulnerable cortex.
            </p>
            <p className="text-muted-foreground mb-4">
              Hair is made primarily of keratin, a protein. When keratin bonds are compromised—by heat, chemicals, or mechanical stress—the hair weakens. Unlike skin, hair cannot heal itself because it's not living tissue once it emerges from the follicle.
            </p>

            <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">Common Causes of Breakage</h2>
            
            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">Mechanical Damage</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li>Aggressive brushing or detangling, especially when wet</li>
              <li>Tight hairstyles that pull on the hair shaft (ponytails, braids, buns)</li>
              <li>Friction from rough fabrics (cotton pillowcases, wool hats)</li>
              <li>Towel-drying by rubbing rather than blotting</li>
              <li>Backcombing or teasing hair for volume</li>
            </ul>

            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">Heat Damage</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li>Blow-drying on high heat or too close to the hair</li>
              <li>Flat irons and curling irons used without heat protection</li>
              <li>Excessive heat tool use without allowing recovery time</li>
              <li>Using higher temperatures than necessary for your hair type</li>
            </ul>

            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">Chemical Damage</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li>Overlapping relaxer or permanent applications</li>
              <li>Bleaching or highlighting, especially repeated treatments</li>
              <li>Overuse of products with drying alcohols or harsh surfactants</li>
              <li>Colouring hair too frequently without allowing recovery</li>
            </ul>

            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">Environmental and Lifestyle Factors</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li>Sun exposure without protection</li>
              <li>Chlorine and salt water without rinsing</li>
              <li>Dry indoor heating or air conditioning</li>
              <li>Nutritional deficiencies affecting hair protein synthesis</li>
            </ul>

            <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">Strategies to Prevent Breakage</h2>
            
            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">Maintain Moisture Balance</h3>
            <p className="text-muted-foreground mb-4">
              Dry hair is brittle hair. Regular conditioning replaces moisture lost through washing and environmental exposure:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li>Use conditioner after every shampoo, focusing on mid-lengths and ends</li>
              <li>Deep condition weekly or fortnightly, depending on hair needs</li>
              <li>Apply leave-in conditioner or hair oil to damp hair before styling</li>
              <li>Consider overnight oil treatments for severely dry hair</li>
              <li>Avoid products with high concentrations of drying alcohols</li>
            </ul>

            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">Handle Wet Hair with Care</h3>
            <p className="text-muted-foreground mb-4">
              Hair is most vulnerable when wet because the hydrogen bonds that give it structure are temporarily broken:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li>Squeeze excess water with a microfibre towel instead of rubbing</li>
              <li>Detangle with a wide-tooth comb, starting from ends and working up</li>
              <li>Apply detangling spray or leave-in conditioner before combing</li>
              <li>Wait until hair is at least 80% dry before brushing with a standard brush</li>
            </ul>

            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">Reduce Heat Exposure</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li>Air-dry partially before blow-drying</li>
              <li>Always use heat protectant before heat styling</li>
              <li>Use the lowest effective temperature for your hair type</li>
              <li>Limit heat styling to two or three times per week maximum</li>
              <li>Keep blow dryers at least 15cm from hair and keep them moving</li>
            </ul>

            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">Protect During Sleep</h3>
            <p className="text-muted-foreground mb-4">
              Hours of friction against a pillow each night adds up:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li>Sleep on a satin or silk pillowcase to reduce friction</li>
              <li>Wrap hair in a satin or silk scarf or bonnet</li>
              <li>Braid hair loosely or put it in a high, loose ponytail (pineapple)</li>
              <li>For long hair, position braids or buns to avoid sleeping directly on them</li>
            </ul>

            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">Choose Protective Styles</h3>
            <p className="text-muted-foreground mb-4">
              Protective styles minimise daily manipulation and exposure:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li>Wear hair loose when possible to avoid tension</li>
              <li>When tying hair back, use fabric-covered elastics or spiral ties</li>
              <li>Vary the position of ponytails and buns to prevent stress on one area</li>
              <li>Consider protective styles like braids or twists for textured hair</li>
              <li>Avoid styles that pull tightly at the hairline or edges</li>
            </ul>

            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">Get Regular Trims</h3>
            <p className="text-muted-foreground mb-4">
              Split ends travel up the hair shaft if left untreated, causing breakage higher up:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li>Trim every eight to twelve weeks, or as needed</li>
              <li>Search and destroy individual split ends between trims if desired</li>
              <li>Don't skip trims to gain length—damaged ends prevent healthy growth</li>
            </ul>

            <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">Common Myths</h2>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li><strong>"Products can repair split ends":</strong> No product can permanently fuse a split—only cutting removes it. Products can temporarily bind splits and prevent further splitting.</li>
              <li><strong>"Breakage means hair isn't growing":</strong> Hair is still growing from the root; it's breaking before it can reach its potential length.</li>
              <li><strong>"Healthy hair doesn't break":</strong> All hair can break under enough stress. The goal is to minimise stress, not expect invincibility.</li>
              <li><strong>"More conditioning is always better":</strong> Over-conditioning can lead to hygral fatigue or product buildup. Balance is key.</li>
            </ul>

            <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">When to Seek Professional Help</h2>
            <p className="text-muted-foreground mb-4">
              Consult a professional if:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li>Breakage continues despite changing your routine</li>
              <li>Breakage is concentrated at the scalp rather than the ends</li>
              <li>Hair texture has changed significantly</li>
              <li>Breakage is accompanied by scalp symptoms</li>
              <li>You suspect underlying health issues (thyroid, nutritional deficiency)</li>
            </ul>
            <p className="text-muted-foreground mb-4">
              A trichologist or dermatologist can examine your hair and scalp to determine whether there's an underlying cause requiring treatment.
            </p>

            <div className="bg-accent/30 border border-accent rounded-lg p-6 my-8">
              <p className="text-foreground mb-0">
                <strong>HairCare AI can help personalise this further based on your hair type, scalp condition, and goals.</strong>
              </p>
            </div>

            <ArticleNavigation 
              previous={{ title: "Blow-Drying vs Air-Drying", href: "/hair-routines/blow-dry-vs-air-dry" }}
              next={{ title: "Sleeping Habits That Protect Hair", href: "/hair-routines/sleep-habits" }}
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

export default PreventBreakagePage;