import SEOHead from "@/components/SEOHead";
import ContentPageLayout from "@/components/ContentPageLayout";
import Breadcrumb from "@/components/Breadcrumb";
import FAQSection from "@/components/FAQSection";
import ChatCTA from "@/components/ChatCTA";
import MedicalDisclaimer from "@/components/MedicalDisclaimer";
import RelatedArticles from "@/components/RelatedArticles";
import ArticleNavigation from "@/components/ArticleNavigation";

const SuddenHairLossPage = () => {
  const faqs = [
    {
      question: "How much hair loss is considered sudden?",
      answer: "Losing more than 100-150 hairs per day, or noticing clumps of hair on your pillow, in the shower, or while brushing, is typically considered excessive. If this happens over days or weeks rather than months, it qualifies as sudden hair loss."
    },
    {
      question: "Will my hair grow back after sudden hair loss?",
      answer: "In most cases of sudden hair loss caused by stress, illness, or nutritional deficiencies, hair does grow back once the underlying cause is addressed. Recovery typically takes 6-12 months. Permanent hair loss is less common but can occur with certain conditions."
    },
    {
      question: "Can sudden hair loss be a sign of something serious?",
      answer: "While sudden hair loss is often temporary and treatable, it can sometimes indicate thyroid disorders, autoimmune conditions, or other medical issues. If your hair loss is accompanied by other symptoms or does not improve, consult a healthcare provider."
    },
    {
      question: "Should I stop washing my hair if it is falling out?",
      answer: "No. Hair that is ready to shed will fall out regardless of washing. Regular washing with a gentle shampoo helps maintain scalp health. Avoiding washing can lead to product buildup and scalp issues that may worsen hair health."
    }
  ];

  const relatedArticles = [
    {
      title: "Telogen Effluvium Explained",
      href: "/hair-loss/telogen-effluvium",
      description: "Understanding the most common cause of sudden hair shedding."
    },
    {
      title: "Stress-Related Hair Loss",
      href: "/hair-loss/stress-related",
      description: "How emotional and physical stress affect your hair."
    },
    {
      title: "When to See a Doctor for Hair Loss",
      href: "/hair-loss/when-to-see-a-doctor",
      description: "Signs that indicate you should seek professional help."
    }
  ];

  return (
    <>
      <SEOHead 
        title="Why Am I Losing Hair All of a Sudden? Causes and Solutions | HairCare.ai"
        description="Discover why sudden hair loss occurs, common triggers like stress and illness, and what steps you can take to address it effectively."
        canonicalUrl="https://haircare.ai/hair-loss/sudden-hair-loss"
        articleSchema={{
          headline: "Why Am I Losing Hair All of a Sudden?",
          description: "Discover why sudden hair loss occurs, common triggers, and what steps you can take to address it effectively.",
          datePublished: "2024-12-28",
          dateModified: "2024-12-28"
        }}
        faqSchema={faqs}
      />
      
      <ContentPageLayout>
        <article className="max-w-4xl mx-auto" itemScope itemType="https://schema.org/Article">
          <Breadcrumb items={[
            { label: "Hair Loss", href: "/hair-loss" },
            { label: "Sudden Hair Loss" }
          ]} />
          
          <header className="mb-8">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4" itemProp="headline">
              Why Am I Losing Hair All of a Sudden?
            </h1>
            <p className="text-lg text-muted-foreground">
              Understanding the causes of unexpected hair loss and what you can do about it.
            </p>
          </header>

          {/* Introduction */}
          <section className="prose prose-lg max-w-none mb-10">
            <p className="text-foreground leading-relaxed">
              Noticing more hair than usual in your brush, on your pillow, or circling the shower drain can be alarming. When hair loss seems to appear out of nowhere, the natural response is concern. The good news is that sudden hair loss, while distressing, often has identifiable causes and, in many cases, is reversible.
            </p>
            <p className="text-foreground leading-relaxed">
              This guide explores the most common reasons behind unexpected hair shedding, helps you understand what might be happening, and outlines practical steps you can take.
            </p>
          </section>

          {/* Direct Answer Box */}
          <section className="mb-10 p-6 rounded-xl bg-primary/5 border border-primary/20">
            <h2 className="font-heading text-xl font-semibold text-foreground mb-3">
              Quick Answer
            </h2>
            <p className="text-foreground leading-relaxed">
              Sudden hair loss is most commonly caused by physical or emotional stress, hormonal changes, nutritional deficiencies, or illness. This type of shedding, called telogen effluvium, typically appears 2-3 months after the triggering event. Most cases resolve within 6-12 months once the underlying cause is addressed.
            </p>
          </section>

          {/* Understanding Normal vs Excessive Shedding */}
          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Understanding Normal vs Excessive Shedding
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              Before addressing sudden hair loss, it helps to understand what normal shedding looks like. The average person loses between 50 and 100 hairs daily as part of the natural hair growth cycle. These hairs are replaced by new growth, so overall hair density remains stable.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              Sudden hair loss becomes noticeable when you lose significantly more than this baseline. Signs that your shedding has increased beyond normal include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground mb-4">
              <li>Finding clumps of hair on your pillow each morning</li>
              <li>Seeing excessive hair in the shower drain after washing</li>
              <li>Pulling out multiple hairs when running fingers through your hair</li>
              <li>Noticing your ponytail feels thinner or your parting looks wider</li>
              <li>Seeing more scalp than usual when styling your hair</li>
            </ul>
          </section>

          {/* Common Causes */}
          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Common Causes of Sudden Hair Loss
            </h2>
            
            <div className="space-y-6">
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Telogen Effluvium</h3>
                <p className="text-muted-foreground mb-2">
                  The most frequent cause of sudden, diffuse hair loss. A shock to the system pushes a large number of hair follicles into the resting phase simultaneously. About 2-3 months later, these hairs shed. Triggers include:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>High fever or severe illness, including viral infections</li>
                  <li>Major surgery or physical trauma</li>
                  <li>Significant emotional stress</li>
                  <li>Rapid weight loss or crash dieting</li>
                  <li>Childbirth (postpartum hair loss)</li>
                </ul>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Hormonal Changes</h3>
                <p className="text-muted-foreground">
                  Shifts in hormone levels can trigger sudden shedding. This includes thyroid disorders (both overactive and underactive thyroid), stopping or starting hormonal contraceptives, menopause, and postpartum hormone fluctuations. Hormonal hair loss may require medical evaluation and treatment.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Nutritional Deficiencies</h3>
                <p className="text-muted-foreground">
                  Hair requires adequate protein, iron, zinc, biotin, and vitamins D and B12 to grow properly. Deficiencies in any of these nutrients can lead to increased shedding. This is particularly common in people following restrictive diets, those with absorption issues, or during periods of inadequate nutrition.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Medications</h3>
                <p className="text-muted-foreground">
                  Certain medications can cause hair shedding as a side effect. Common culprits include blood thinners, beta-blockers, antidepressants, retinoids, and some cholesterol-lowering medications. Hair loss typically begins 2-4 months after starting the medication.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Autoimmune Conditions</h3>
                <p className="text-muted-foreground">
                  Alopecia areata is an autoimmune condition where the immune system attacks hair follicles, causing sudden patchy hair loss. Unlike telogen effluvium, which causes diffuse thinning, alopecia areata typically creates smooth, round bald patches.
                </p>
              </div>
            </div>
          </section>

          {/* What to Do */}
          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Practical Steps to Address Sudden Hair Loss
            </h2>
            
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">1. Identify the Trigger</h3>
                <p className="text-muted-foreground">
                  Think back 2-3 months before the shedding began. Did you experience illness, surgery, significant stress, dietary changes, or start new medications? Identifying the trigger helps determine whether the shedding is likely temporary.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">2. Optimise Your Nutrition</h3>
                <p className="text-muted-foreground">
                  Ensure you are eating enough protein, as hair is primarily made of protein. Include iron-rich foods, especially if you menstruate or follow a vegetarian diet. Consider having blood tests to check for deficiencies before starting supplements.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">3. Be Gentle with Your Hair</h3>
                <p className="text-muted-foreground">
                  Avoid tight hairstyles, excessive heat styling, and harsh chemical treatments during periods of increased shedding. Use a wide-tooth comb on wet hair and allow hair to air dry when possible.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">4. Manage Stress</h3>
                <p className="text-muted-foreground">
                  Since stress is both a cause and consequence of hair loss, managing stress levels is important. Regular exercise, adequate sleep, and relaxation techniques can help break the cycle of stress and shedding.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">5. Be Patient</h3>
                <p className="text-muted-foreground">
                  If the cause is telogen effluvium, shedding typically slows within 6 months and hair regrows over the following 6-12 months. Recovery takes time because hair grows slowly, approximately 1 centimetre per month.
                </p>
              </div>
            </div>
          </section>

          {/* Common Myths */}
          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Common Myths About Sudden Hair Loss
            </h2>
            
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-muted/50 border border-border">
                <p className="font-medium text-foreground mb-1">Myth: Washing your hair causes hair loss</p>
                <p className="text-muted-foreground text-sm">
                  Hairs that are in the shedding phase will fall out whether you wash your hair or not. Washing simply collects hairs that were already detached or ready to detach. Maintaining a clean, healthy scalp is beneficial for hair growth.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-muted/50 border border-border">
                <p className="font-medium text-foreground mb-1">Myth: Cutting your hair will stop it from falling out</p>
                <p className="text-muted-foreground text-sm">
                  Hair loss occurs at the root, not the ends. Cutting your hair shorter does not affect the hair follicle or the shedding cycle. However, shorter hair may make shedding less noticeable.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-muted/50 border border-border">
                <p className="font-medium text-foreground mb-1">Myth: Hair loss supplements work immediately</p>
                <p className="text-muted-foreground text-sm">
                  Even if a deficiency is corrected, hair takes months to grow. Visible improvement typically requires 3-6 months of consistent supplementation, and supplements only help if you actually have a deficiency.
                </p>
              </div>
            </div>
          </section>

          {/* When to Seek Help */}
          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              When to Seek Professional Help
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              While many cases of sudden hair loss resolve on their own, certain situations warrant medical evaluation:
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground mb-4">
              <li>Hair loss lasting more than 6 months without improvement</li>
              <li>Patchy bald spots rather than diffuse thinning</li>
              <li>Scalp symptoms such as pain, itching, burning, or redness</li>
              <li>Hair loss accompanied by other symptoms like fatigue, weight changes, or skin changes</li>
              <li>Concern about underlying medical conditions</li>
              <li>Hair loss affecting your emotional wellbeing or daily life</li>
            </ul>
            <p className="text-foreground leading-relaxed">
              A dermatologist or trichologist can perform a thorough evaluation, order appropriate tests, and recommend targeted treatment if needed.
            </p>
          </section>

          <FAQSection faqs={faqs} />
          
          <ArticleNavigation 
            next={{ title: "Common Causes of Hair Loss in Women", href: "/hair-loss/causes-in-women" }}
            relatedArticles={relatedArticles.map(a => ({ title: a.title, href: a.href }))}
          />
          
          <ChatCTA />
          
          <MedicalDisclaimer />
        </article>
      </ContentPageLayout>
    </>
  );
};

export default SuddenHairLossPage;