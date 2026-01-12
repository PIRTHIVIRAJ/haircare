import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import ContentPageLayout from "@/components/ContentPageLayout";
import Breadcrumb from "@/components/Breadcrumb";
import { useChatContext } from "@/contexts/ChatContext";

const sitemapData = {
  hairLoss: {
    title: "Hair Loss Causes & Diagnosis",
    description: "Understanding hair loss causes, types, diagnosis, and when to seek help",
    landingPage: { title: "Hair Loss Overview", href: "/hair-loss" },
    pages: [
      { title: "Hair Loss in Men", href: "/hair-loss/men", description: "Male pattern baldness and treatment options" },
      { title: "Hair Loss in Women", href: "/hair-loss/women", description: "Female hair thinning causes and solutions" },
      { title: "Why Am I Losing Hair All of a Sudden?", href: "/hair-loss/sudden-hair-loss", description: "Understanding sudden hair loss causes" },
      { title: "Common Causes of Hair Loss in Women", href: "/hair-loss/causes-in-women", description: "Female-specific hair loss factors" },
      { title: "Common Causes of Hair Loss in Men", href: "/hair-loss/causes-in-men", description: "Male-specific hair loss factors" },
      { title: "Genetic vs Hormonal Hair Loss", href: "/hair-loss/genetic-vs-hormonal", description: "Understanding the difference" },
      { title: "Stress-Related Hair Loss", href: "/hair-loss/stress-related", description: "How stress affects your hair" },
      { title: "Telogen Effluvium Explained", href: "/hair-loss/telogen-effluvium", description: "Complete guide to telogen effluvium" },
      { title: "Hair Thinning vs Hair Shedding", href: "/hair-loss/thinning-vs-shedding", description: "Understanding the difference" },
      { title: "How to Diagnose Hair Loss", href: "/hair-loss/diagnosis", description: "Methods and approaches for diagnosis" },
      { title: "Medical Tests for Hair Loss", href: "/hair-loss/medical-tests", description: "Tests your doctor may recommend" },
      { title: "When to See a Doctor for Hair Loss", href: "/hair-loss/when-to-see-a-doctor", description: "Signs that warrant professional help" },
      { title: "Androgenetic Alopecia", href: "/conditions/androgenetic-alopecia", description: "Pattern baldness in men and women" },
      { title: "Hair Shedding", href: "/symptoms/hair-shedding", description: "Understanding excessive shedding" },
    ]
  },
  womensHair: {
    title: "Women's Hair Health",
    description: "Hormonal hair loss, pregnancy-related changes, and treatments for women",
    landingPage: { title: "Women's Hair Overview", href: "/womens-hair" },
    pages: [
      { title: "Hair Loss After Pregnancy", href: "/womens-hair/postpartum-hair-loss", description: "Why hair sheds after childbirth" },
      { title: "Postpartum Hair Shedding Explained", href: "/womens-hair/pregnancy-changes", description: "Hair changes during and after pregnancy" },
      { title: "Hair Loss and PCOS", href: "/womens-hair/pcos-hair-loss", description: "Managing PCOS-related hair thinning" },
      { title: "Hair Changes During Menopause", href: "/womens-hair/menopause", description: "Managing hair during hormonal transitions" },
      { title: "Hormonal Hair Loss Treatments", href: "/womens-hair/hormonal-hair-loss", description: "Options for hormone-related thinning" },
      { title: "Iron Deficiency and Hair Loss", href: "/womens-hair/iron-deficiency", description: "The connection between iron and hair" },
      { title: "Thyroid Problems and Hair Thinning", href: "/womens-hair/thyroid", description: "How thyroid conditions affect hair" },
      { title: "Birth Control and Hair Changes", href: "/womens-hair/birth-control", description: "How contraceptives can affect hair" },
      { title: "Hair Loss After Stopping Contraception", href: "/womens-hair/stopping-contraception", description: "Why hair may shed after stopping birth control" },
      { title: "When Women Should Seek Medical Help", href: "/womens-hair/when-to-seek-help", description: "Signs that warrant professional evaluation" },
    ]
  },
  mensHair: {
    title: "Men's Hair Health",
    description: "Male pattern baldness, treatments, and hair restoration options",
    landingPage: { title: "Men's Hair Overview", href: "/mens-hair" },
    pages: [
      { title: "Male Pattern Baldness Explained", href: "/mens-hair/male-pattern-baldness", description: "Understanding androgenetic alopecia" },
      { title: "When Does Male Hair Loss Usually Start?", href: "/mens-hair/when-it-starts", description: "Age patterns and early signs" },
      { title: "Receding Hairline vs Crown Thinning", href: "/mens-hair/hairline-vs-crown", description: "Different patterns and what they mean" },
      { title: "Best Treatments for Men's Hair Loss", href: "/mens-hair/treatments", description: "Evidence-based treatment options" },
      { title: "Finasteride: Benefits and Risks", href: "/mens-hair/finasteride", description: "Complete guide to oral DHT blockers" },
      { title: "Minoxidil Foam vs Liquid", href: "/mens-hair/minoxidil-foam-vs-liquid", description: "Comparing formulations" },
      { title: "Hair Loss Myths for Men", href: "/mens-hair/myths", description: "Separating fact from fiction" },
      { title: "Can Stress Cause Hair Loss in Men?", href: "/mens-hair/stress", description: "Stress and hair health" },
      { title: "Hair Transplant Basics Explained", href: "/mens-hair/hair-transplant", description: "Surgical hair restoration" },
      { title: "Maintaining Hair Density Long-Term", href: "/mens-hair/maintenance", description: "Preserving hair over time" },
    ]
  },
  scalpHealth: {
    title: "Scalp Health & Conditions",
    description: "Understanding and maintaining a healthy scalp",
    landingPage: { title: "Scalp Health Overview", href: "/scalp-health" },
    pages: [
      { title: "What is a Healthy Scalp?", href: "/scalp-health/healthy-scalp", description: "Signs and characteristics of scalp health" },
      { title: "Dandruff vs Dry Scalp", href: "/scalp-health/dandruff-vs-dry-scalp", description: "How to tell the difference" },
      { title: "Seborrheic Dermatitis on the Scalp", href: "/scalp-health/seborrheic-dermatitis", description: "Causes, symptoms, and treatment" },
      { title: "Scalp Psoriasis Explained", href: "/scalp-health/psoriasis", description: "Understanding and managing scalp psoriasis" },
      { title: "Scalp Acne: Causes and Treatment", href: "/scalp-health/acne", description: "Why it happens and how to treat it" },
      { title: "Itchy Scalp Without Dandruff", href: "/scalp-health/itchy-scalp-no-dandruff", description: "Other causes of scalp itching" },
      { title: "Fungal Scalp Infections", href: "/scalp-health/fungal-infections", description: "Types, symptoms, and treatments" },
      { title: "Scalp Inflammation and Hair Loss", href: "/scalp-health/inflammation-hair-loss", description: "The connection between inflammation and shedding" },
      { title: "How to Exfoliate Your Scalp Safely", href: "/scalp-health/exfoliation", description: "Safe and effective scalp exfoliation" },
      { title: "Best Ingredients for Scalp Health", href: "/scalp-health/best-ingredients", description: "Science-backed ingredients for your scalp" },
    ]
  },
  hairGrowth: {
    title: "Hair Growth & Regrowth",
    description: "Understanding hair growth cycles, stimulating regrowth, and treatments",
    landingPage: { title: "Hair Growth Overview", href: "/hair-growth" },
    pages: [
      { title: "How Fast Does Hair Grow?", href: "/hair-growth/how-fast-does-hair-grow", description: "Understanding normal growth rates" },
      { title: "Can You Really Regrow Lost Hair?", href: "/hair-growth/can-hair-regrow", description: "What's actually possible with regrowth" },
      { title: "Hair Growth Cycle Explained", href: "/hair-growth/growth-cycle", description: "The science of hair growth phases" },
      { title: "Natural Methods for Hair Growth", href: "/hair-growth/natural-methods", description: "Evidence-based natural approaches" },
      { title: "Minoxidil: How It Works", href: "/hair-growth/minoxidil", description: "Complete guide to minoxidil treatment" },
      { title: "Does Rosemary Oil Help Hair Growth?", href: "/hair-growth/rosemary-oil", description: "The evidence behind rosemary oil" },
      { title: "Supplements for Hair Growth", href: "/hair-growth/supplements", description: "Which supplements actually work" },
      { title: "Hair Regrowth Timelines", href: "/hair-growth/regrowth-timeline", description: "What to expect during regrowth" },
      { title: "Signs Your Hair Is Growing Back", href: "/hair-growth/signs-of-regrowth", description: "How to identify new growth" },
      { title: "Myths About Hair Growth", href: "/hair-growth/myths", description: "Separating fact from fiction" },
      { title: "Minoxidil Treatment Guide", href: "/treatments/minoxidil", description: "Uses, results, and side effects" },
    ]
  },
  hairProducts: {
    title: "Hair Products & Ingredients",
    description: "Understanding products, ingredients, and treatments for healthy hair",
    landingPage: { title: "Hair Products Overview", href: "/hair-products" },
    pages: [
      { title: "Choosing the Right Shampoo", href: "/hair-products/choose-shampoo", description: "How to match shampoo to your needs" },
      { title: "Sulfate-Free Shampoos: Pros and Cons", href: "/hair-products/sulfate-free", description: "When to go sulfate-free" },
      { title: "Silicones in Hair Products", href: "/hair-products/silicones", description: "Are silicones good or bad for hair?" },
      { title: "Best Ingredients for Hair Repair", href: "/hair-products/repair-ingredients", description: "Science-backed repair ingredients" },
      { title: "Protein vs Moisture Balance", href: "/hair-products/protein-vs-moisture", description: "What your hair really needs" },
      { title: "Hair Oils Compared", href: "/hair-products/hair-oils-comparison", description: "Finding the best oil for your hair" },
      { title: "Leave-In Conditioners Explained", href: "/hair-products/leave-in-conditioners", description: "How and when to use them" },
      { title: "Heat Protectants Explained", href: "/hair-products/heat-protectants", description: "Protecting hair from heat damage" },
      { title: "Hair Masks: How Often to Use Them", href: "/hair-products/hair-masks", description: "Getting the most from hair masks" },
      { title: "Salon Treatments vs At-Home Care", href: "/hair-products/salon-vs-home", description: "When professional treatment is worth it" },
    ]
  },
  hairTypes: {
    title: "Hair Types & Concerns",
    description: "Understanding your hair type and addressing specific concerns",
    landingPage: { title: "Hair Types Overview", href: "/hair-types" },
    pages: [
      { title: "How to Identify Your Hair Type", href: "/hair-types/identify-your-hair-type", description: "Find your hair type and texture" },
      { title: "Best Care for Curly Hair", href: "/hair-types/curly-hair-care", description: "Maintaining healthy, defined curls" },
      { title: "Best Care for Straight Hair", href: "/hair-types/straight-hair-care", description: "Keeping straight hair healthy and shiny" },
      { title: "Best Care for Wavy Hair", href: "/hair-types/wavy-hair-care", description: "Enhancing natural wave patterns" },
      { title: "Fine Hair vs Thin Hair", href: "/hair-types/fine-vs-thin", description: "Understanding the key differences" },
      { title: "Dry Hair vs Damaged Hair", href: "/hair-types/dry-vs-damaged", description: "Identifying and treating each condition" },
      { title: "Frizzy Hair: Causes and Solutions", href: "/hair-types/frizzy-hair", description: "Taming frizz effectively" },
      { title: "Oily Scalp but Dry Ends", href: "/hair-types/oily-scalp-dry-ends", description: "Managing combination hair" },
      { title: "Aging Hair: What Changes Over Time", href: "/hair-types/aging-hair", description: "Adapting care as hair ages" },
      { title: "Ethnic Hair Care Differences", href: "/hair-types/ethnic-hair-care", description: "Care for different hair textures" },
    ]
  },
  hairRoutines: {
    title: "Hair Care Routines & Habits",
    description: "Building effective hair care routines",
    landingPage: { title: "Hair Routines Overview", href: "/hair-routines" },
    pages: [
      { title: "The Perfect Hair Care Routine for Your Hair Type", href: "/hair-routines/by-hair-type", description: "Personalised routine building" },
      { title: "How Often Should You Wash Your Hair?", href: "/hair-routines/how-often-wash", description: "Finding optimal wash frequency" },
      { title: "Morning vs Night Hair Routines", href: "/hair-routines/morning-vs-night", description: "Timing your hair care" },
      { title: "Brushing Hair Properly", href: "/hair-routines/brushing-hair", description: "Techniques to avoid damage" },
      { title: "Blow-Drying vs Air-Drying", href: "/hair-routines/blow-dry-vs-air-dry", description: "Pros and cons of each method" },
      { title: "How to Prevent Hair Breakage", href: "/hair-routines/prevent-breakage", description: "Protecting hair from damage" },
      { title: "Sleeping Habits That Protect Hair", href: "/hair-routines/sleep-habits", description: "Overnight hair protection" },
      { title: "Hair Care Mistakes Most People Make", href: "/hair-routines/common-mistakes", description: "Common errors to avoid" },
      { title: "Seasonal Hair Care Tips", href: "/hair-routines/seasonal-care", description: "Adjusting care for the weather" },
      { title: "Travel-Friendly Hair Routines", href: "/hair-routines/travel-care", description: "Maintaining hair health on the go" },
    ]
  },
  hairNutrition: {
    title: "Nutrition, Lifestyle & Hair",
    description: "How diet, sleep, exercise, and lifestyle habits affect hair health",
    landingPage: { title: "Nutrition & Lifestyle Overview", href: "/hair-nutrition" },
    pages: [
      { title: "Foods That Promote Healthy Hair", href: "/hair-nutrition/best-foods", description: "Diet choices for optimal hair health" },
      { title: "Nutrient Deficiencies Linked to Hair Loss", href: "/hair-nutrition/deficiencies", description: "Key deficiencies that affect hair" },
      { title: "Protein Intake and Hair Health", href: "/hair-nutrition/protein", description: "The role of protein in hair growth" },
      { title: "Iron, Zinc, and Biotin Explained", href: "/hair-nutrition/key-nutrients", description: "Essential nutrients for hair" },
      { title: "Crash Dieting and Hair Loss", href: "/hair-nutrition/crash-dieting", description: "How rapid weight loss affects hair" },
      { title: "Sleep and Hair Growth", href: "/hair-nutrition/sleep", description: "The connection between rest and hair health" },
      { title: "Exercise and Scalp Circulation", href: "/hair-nutrition/exercise", description: "How physical activity supports hair" },
      { title: "Smoking and Hair Health", href: "/hair-nutrition/smoking", description: "Effects of tobacco on hair" },
      { title: "Alcohol and Hair Thinning", href: "/hair-nutrition/alcohol", description: "How drinking affects hair health" },
      { title: "Gut Health and Hair Connection", href: "/hair-nutrition/gut-health", description: "The microbiome's role in hair health" },
    ]
  },
  hairFaqs: {
    title: "FAQs, Myths & Quick Answers",
    description: "Common questions about hair care answered with evidence-based information",
    landingPage: { title: "Hair FAQs Overview", href: "/hair-faqs" },
    pages: [
      { title: "Does Cutting Hair Make It Grow Faster?", href: "/hair-faqs/cutting-hair-growth", description: "The truth about haircuts and growth" },
      { title: "Can Hats Cause Hair Loss?", href: "/hair-faqs/do-hats-cause-hair-loss", description: "Separating fact from fiction" },
      { title: "Does Washing Hair Daily Cause Hair Fall?", href: "/hair-faqs/washing-daily", description: "The truth about daily washing" },
      { title: "Can Stress Turn Hair Grey?", href: "/hair-faqs/stress-grey-hair", description: "The science behind greying" },
      { title: "Are Natural Hair Products Better?", href: "/hair-faqs/natural-vs-chemical", description: "Comparing natural and synthetic ingredients" },
      { title: "Can Hair Loss Be Reversed Permanently?", href: "/hair-faqs/can-hair-loss-be-reversed", description: "What is actually possible" },
      { title: "How Long Before Treatments Show Results?", href: "/hair-faqs/treatment-timeline", description: "Realistic expectations for treatments" },
      { title: "Is Hair Loss Normal with Aging?", href: "/hair-faqs/aging-hair-loss", description: "Age-related hair changes explained" },
      { title: "When Is Hair Shedding Normal?", href: "/hair-faqs/normal-shedding", description: "Understanding normal vs excessive shedding" },
      { title: "Common Hair Care Myths Debunked", href: "/hair-faqs/common-myths", description: "Evidence-based myth busting" },
    ]
  },
  hairLossDecisions: {
    title: "Hair Loss Decisions",
    description: "Practical guidance for understanding your hair loss and deciding when and how to act",
    landingPage: { title: "Hair Loss Decisions Overview", href: "/hair-loss-decisions" },
    pages: [
      { title: "Is My Hair Loss Temporary or Permanent?", href: "/hair-loss-decisions/temporary-vs-permanent", description: "Understanding whether hair loss can be reversed" },
      { title: "Is My Hair Shedding Normal for My Age?", href: "/hair-loss-decisions/normal-for-age", description: "What to expect at different life stages" },
      { title: "Should I Treat Hair Loss or Wait It Out?", href: "/hair-loss-decisions/treat-or-wait", description: "Weighing early intervention vs waiting" },
      { title: "What to Do First When You Notice Thinning", href: "/hair-loss-decisions/first-steps", description: "Initial steps after noticing hair changes" },
      { title: "When Lifestyle Changes Are Enough", href: "/hair-loss-decisions/lifestyle-only", description: "When diet and habits can address concerns" },
      { title: "Signs Hair Loss Needs Medical Treatment", href: "/hair-loss-decisions/medical-signs", description: "When professional intervention is needed" },
      { title: "Red Flags in Hair Loss", href: "/hair-loss-decisions/red-flags", description: "Warning signs not to ignore" },
      { title: "Is Early Hair Loss Reversible?", href: "/hair-loss-decisions/early-reversibility", description: "Potential for reversal when caught early" },
      { title: "How to Choose the Right Treatment Path", href: "/hair-loss-decisions/choosing-treatment", description: "Navigating treatment options" },
      { title: "What Happens If Hair Loss Is Left Untreated", href: "/hair-loss-decisions/untreated-hair-loss", description: "Natural progression of different conditions" },
    ]
  },
  about: {
    title: "About & Legal",
    description: "Learn about HairCare.ai and our policies",
    pages: [
      { title: "About HairCare.ai", href: "/about", description: "Our mission, standards, and how we can help" },
      { title: "Privacy Policy", href: "/privacy-policy", description: "How we protect your data and privacy" },
      { title: "Terms of Service", href: "/terms-of-service", description: "Terms and conditions of use" },
    ]
  }
};

const SitemapPage = () => {
  const chatContext = useChatContext();

  const handleOpenChat = () => {
    if (chatContext) {
      chatContext.openChat();
    }
  };

  return (
    <>
      <SEOHead 
        title="Sitemap | HairCare.ai"
        description="Browse all HairCare.ai content pages organized by category. Find information on hair loss, scalp health, hair types, routines, and treatments."
        canonicalUrl="https://haircare.ai/sitemap"
      />
      
      <ContentPageLayout>
        <div className="max-w-4xl mx-auto">
          <Breadcrumb items={[{ label: "Sitemap" }]} />
          
          <header className="mb-10">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
              Sitemap
            </h1>
            <p className="text-lg text-muted-foreground">
              Browse all HairCare.ai content pages organized by category.
            </p>
          </header>

          <div className="space-y-10">
            {Object.entries(sitemapData).map(([key, category]) => (
              <section key={key} className="border border-border rounded-lg p-6 bg-card">
                <h2 className="font-heading text-2xl font-semibold text-foreground mb-2">
                  {category.title}
                </h2>
                <p className="text-muted-foreground mb-6">{category.description}</p>
                
                {"landingPage" in category && category.landingPage && (
                  <div className="mb-4 pb-4 border-b border-border">
                    <Link 
                      to={category.landingPage.href}
                      className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
                    >
                      {category.landingPage.title} →
                    </Link>
                  </div>
                )}
                
                <ul className="space-y-4">
                  {category.pages.map((page) => (
                    <li key={page.href} className="border-l-2 border-primary/30 pl-4 hover:border-primary transition-colors">
                      <Link 
                        to={page.href}
                        className="block group"
                      >
                        <h3 className="text-foreground font-medium group-hover:text-primary transition-colors">
                          {page.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">{page.description}</p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>

          <div className="mt-10 p-6 bg-primary/5 rounded-lg border border-primary/20">
            <h2 className="font-heading text-xl font-semibold text-foreground mb-2">
              Can't find what you're looking for?
            </h2>
            <p className="text-muted-foreground mb-4">
              Our AI assistant can help answer your specific questions about hair loss, treatments, and hair health.
            </p>
            <button 
              onClick={handleOpenChat}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors"
            >
              Chat with HairCare.ai
            </button>
          </div>

          {/* Sitemap XML Link */}
          <div className="mt-8 text-center">
            <a 
              href="/sitemap.xml" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary transition-colors underline"
            >
              View XML Sitemap
            </a>
          </div>
        </div>
      </ContentPageLayout>
    </>
  );
};

export default SitemapPage;
