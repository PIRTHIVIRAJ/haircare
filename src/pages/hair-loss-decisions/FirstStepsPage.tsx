import SEOHead from "@/components/SEOHead";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleNavigation from "@/components/ArticleNavigation";
import RelatedArticles from "@/components/RelatedArticles";
import ContentPageLayout from "@/components/ContentPageLayout";

const faqItems = [
  {
    question: "What should I do first when I notice hair thinning?",
    answer: "Start by documenting your hair loss with photos, noting when it started, and identifying possible triggers from the past few months. Avoid making drastic changes to your routine, and consider scheduling a consultation with a dermatologist for proper diagnosis."
  },
  {
    question: "Should I buy hair loss products immediately?",
    answer: "Resist the urge to buy multiple products before understanding your specific type of hair loss. Some products only work for certain conditions, and using the wrong treatments wastes money and may delay appropriate care."
  },
  {
    question: "Do I need blood tests for hair loss?",
    answer: "Blood tests can identify underlying causes like thyroid disorders, iron deficiency, or hormonal imbalances. While not always necessary, they are particularly useful when hair loss is diffuse, unexplained, or accompanied by other symptoms."
  }
];

const relatedArticles = [
  {
    title: "How to Diagnose Hair Loss",
    href: "/hair-loss/diagnosis",
    description: "Methods doctors use to identify hair loss causes."
  },
  {
    title: "Should I Treat Hair Loss or Wait It Out?",
    href: "/hair-loss-decisions/treat-or-wait",
    description: "Deciding between action and observation."
  },
  {
    title: "When to See a Doctor for Hair Loss",
    href: "/hair-loss/when-to-see-a-doctor",
    description: "Signs that warrant professional evaluation."
  }
];

const FirstStepsPage = () => {
  return (
    <ContentPageLayout>
      <SEOHead
        title="What to Do First When You Notice Hair Thinning | Hair Loss Decisions - HairCare.ai"
        description="A practical guide to the first steps after noticing hair thinning. Learn what to document, what to avoid, and when to seek professional help."
        canonicalUrl="https://haircare.ai/hair-loss-decisions/first-steps"
        articleSchema={{
          headline: "What to Do First When You Notice Hair Thinning",
          description: "A step-by-step guide to responding appropriately when you first notice hair changes.",
          datePublished: "2025-06-28",
          dateModified: "2025-06-28"
        }}
        faqSchema={faqItems}
      />

      <article className="max-w-4xl mx-auto" itemScope itemType="https://schema.org/Article">
        <Breadcrumb items={[
          { label: "Hair Loss Decisions", href: "/hair-loss-decisions" },
          { label: "First Steps" }
        ]} />

        <header className="mb-8">
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4" itemProp="headline">
            What to Do First When You Notice Hair Thinning
          </h1>
          <p className="text-lg text-muted-foreground">
            A practical guide to responding calmly and effectively.
          </p>
        </header>

        <section className="prose prose-lg max-w-none mb-10">
          <p className="text-foreground leading-relaxed">
            Noticing that your hair seems thinner than before can trigger anxiety and a strong urge to do something immediately. However, a measured approach typically leads to better outcomes than panicking or rushing into purchases without understanding what you are dealing with. The first few weeks after noticing hair changes are about gathering information, not necessarily starting treatment.
          </p>
          <p className="text-foreground leading-relaxed">
            This guide walks you through practical first steps that help you understand your situation, gather useful information, and position yourself to make informed decisions about whether and how to proceed with treatment.
          </p>
        </section>

        <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-10">
          <h2 className="font-heading text-xl font-semibold text-foreground mb-3">Quick Answer</h2>
          <p className="text-foreground">
            When you first notice hair thinning, start by documenting with photos, identify possible triggers from the past three to six months, and assess your overall health and stress levels. Avoid panic purchases and drastic changes. If thinning is significant or you cannot identify a cause, schedule an appointment with a dermatologist for proper diagnosis.
          </p>
        </div>

        <section className="mb-10">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
            Step 1: Document What You Are Seeing
          </h2>
          <p className="text-foreground leading-relaxed mb-4">
            Before doing anything else, create a baseline record of your current hair:
          </p>
          <ul className="list-disc list-inside space-y-2 text-foreground mb-4">
            <li>Take clear photos in good, consistent lighting</li>
            <li>Include shots of the hairline, crown, part line, and temples</li>
            <li>Pull hair back from the face in at least one photo</li>
            <li>Note the date on each photo</li>
            <li>Write down what specifically made you notice changes</li>
          </ul>
          <p className="text-foreground leading-relaxed">
            This documentation serves multiple purposes. It helps you track changes over time, provides useful information if you consult a doctor, and gives you an objective reference point when your perception may be affected by worry.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
            Step 2: Consider Possible Triggers
          </h2>
          <p className="text-foreground leading-relaxed mb-4">
            Think back over the past three to six months for events that commonly trigger hair shedding:
          </p>
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-card border border-border">
              <h3 className="font-semibold text-foreground mb-2">Physical Stressors</h3>
              <p className="text-muted-foreground">
                Major illness, surgery, high fever, significant weight loss, childbirth, or stopping birth control pills can all trigger temporary shedding about two to three months later.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-card border border-border">
              <h3 className="font-semibold text-foreground mb-2">Emotional Stress</h3>
              <p className="text-muted-foreground">
                Intense or prolonged emotional stress, grief, major life changes, or chronic anxiety can affect hair growth cycles and increase shedding.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-card border border-border">
              <h3 className="font-semibold text-foreground mb-2">Dietary Changes</h3>
              <p className="text-muted-foreground">
                Crash dieting, restrictive eating, or significant changes in diet can lead to nutritional gaps that affect hair. This includes very low protein or low calorie diets.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-card border border-border">
              <h3 className="font-semibold text-foreground mb-2">Medication Changes</h3>
              <p className="text-muted-foreground">
                Starting, stopping, or changing medications can sometimes trigger hair shedding. This includes birth control, antidepressants, and many other drug classes.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
            Step 3: Assess Your Overall Health
          </h2>
          <p className="text-foreground leading-relaxed mb-4">
            Hair health reflects overall health. Note whether you are experiencing any other symptoms:
          </p>
          <ul className="list-disc list-inside space-y-2 text-foreground mb-4">
            <li>Unusual fatigue or low energy</li>
            <li>Weight changes without trying</li>
            <li>Changes in skin or nails</li>
            <li>Irregular menstrual cycles</li>
            <li>Feeling unusually cold or hot</li>
            <li>Mood changes or difficulty concentrating</li>
          </ul>
          <p className="text-foreground leading-relaxed">
            These symptoms alongside hair loss may suggest thyroid issues, iron deficiency, hormonal imbalances, or other underlying conditions that require medical evaluation.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
            Step 4: Examine Your Hair Care Practices
          </h2>
          <p className="text-foreground leading-relaxed mb-4">
            Sometimes what appears to be hair loss is actually hair breakage from damaging practices:
          </p>
          <ul className="list-disc list-inside space-y-2 text-foreground">
            <li>Tight hairstyles that pull on the hairline</li>
            <li>Frequent heat styling without protection</li>
            <li>Chemical treatments like bleaching, relaxing, or frequent colouring</li>
            <li>Aggressive brushing or detangling</li>
            <li>Sleeping on rough fabrics that cause friction</li>
            <li>Using harsh products or over-washing</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
            Step 5: What Not to Do
          </h2>
          <p className="text-foreground leading-relaxed mb-4">
            Avoid these common reactive behaviours that often do more harm than good:
          </p>
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/20">
              <h3 className="font-semibold text-foreground mb-2">Panic Buying Multiple Products</h3>
              <p className="text-muted-foreground">
                Purchasing various supplements, shampoos, and treatments without knowing your diagnosis wastes money and may delay appropriate treatment. Some products only work for specific conditions.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/20">
              <h3 className="font-semibold text-foreground mb-2">Obsessive Checking and Counting</h3>
              <p className="text-muted-foreground">
                Constantly examining your hair and counting shed hairs increases anxiety without providing useful information. A degree of shedding is normal, and daily counts fluctuate.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/20">
              <h3 className="font-semibold text-foreground mb-2">Drastically Changing Your Routine</h3>
              <p className="text-muted-foreground">
                Suddenly changing everything about your hair care makes it impossible to identify what helps or harms. Make one change at a time if you change anything.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/20">
              <h3 className="font-semibold text-foreground mb-2">Self-Diagnosing Based on Internet Research</h3>
              <p className="text-muted-foreground">
                While gathering information is helpful, many hair loss conditions look similar to the untrained eye. Incorrect self-diagnosis leads to inappropriate treatment.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
            Step 6: Supportive Measures While Assessing
          </h2>
          <p className="text-foreground leading-relaxed mb-4">
            While gathering information, these gentle measures support hair health without risk:
          </p>
          <ul className="list-disc list-inside space-y-2 text-foreground">
            <li>Ensure adequate protein intake in your diet</li>
            <li>Eat a varied diet with plenty of vegetables and fruits</li>
            <li>Stay hydrated</li>
            <li>Use gentle hair care products</li>
            <li>Minimise heat styling and chemical treatments</li>
            <li>Avoid tight hairstyles</li>
            <li>Prioritise sleep and stress management</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
            Step 7: Decide Whether to Seek Professional Help
          </h2>
          <p className="text-foreground leading-relaxed mb-4">
            Schedule an appointment with a dermatologist if:
          </p>
          <ul className="list-disc list-inside space-y-2 text-foreground mb-4">
            <li>You cannot identify an obvious trigger for your hair loss</li>
            <li>Thinning is following a pattern at the hairline or crown</li>
            <li>You have other symptoms suggesting a health condition</li>
            <li>Hair loss is patchy or creating bald spots</li>
            <li>Your scalp shows signs of irritation, redness, or scaling</li>
            <li>Hair loss is causing significant distress</li>
            <li>You have a family history of early hair loss and are concerned about prevention</li>
          </ul>
          <p className="text-foreground leading-relaxed">
            If you identified a clear trigger and the shedding is diffuse, watching and waiting for three to six months while maintaining good health practices is often reasonable before seeking professional evaluation.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
            Preparing for a Doctor's Appointment
          </h2>
          <p className="text-foreground leading-relaxed mb-4">
            If you decide to consult a professional, come prepared with:
          </p>
          <ul className="list-disc list-inside space-y-2 text-foreground">
            <li>Your timeline of when changes started</li>
            <li>Photos showing the progression if available</li>
            <li>List of potential triggers you have identified</li>
            <li>Current medications and supplements</li>
            <li>Family history of hair loss</li>
            <li>Any other symptoms you have noticed</li>
            <li>Your hair care routine and styling practices</li>
          </ul>
        </section>

        <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-10">
          <p className="text-foreground">
            HairCare AI can help personalise this further based on your hair type, scalp condition, and goals.
          </p>
        </div>

        <ArticleNavigation
          previous={{ href: "/hair-loss-decisions/treat-or-wait", title: "Should I Treat Hair Loss or Wait It Out?" }}
          next={{ href: "/hair-loss-decisions/lifestyle-only", title: "When Lifestyle Changes Are Enough for Hair Loss" }}
        />

        <RelatedArticles articles={relatedArticles} />
      </article>
    </ContentPageLayout>
  );
};

export default FirstStepsPage;
