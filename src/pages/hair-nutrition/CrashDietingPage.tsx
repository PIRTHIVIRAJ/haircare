import SEOHead from "@/components/SEOHead";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleNavigation from "@/components/ArticleNavigation";
import RelatedArticles from "@/components/RelatedArticles";
import ContentPageLayout from "@/components/ContentPageLayout";

const faqItems = [
  {
    question: "How long after crash dieting does hair loss start?",
    answer: "Hair loss from crash dieting typically begins two to three months after starting severe calorie restriction, as this is when hairs pushed prematurely into the resting phase begin to shed."
  },
  {
    question: "Will hair grow back after crash diet hair loss?",
    answer: "Yes, hair typically regrows once adequate nutrition is restored, usually within six to twelve months. However, repeated cycles of severe dieting may cause cumulative damage to hair health."
  },
  {
    question: "How few calories trigger hair loss?",
    answer: "There is no exact threshold, as individual responses vary. Generally, diets below 1200 calories or those severely lacking in protein and key nutrients are most likely to affect hair."
  }
];

const relatedArticles = [
  {
    title: "Nutrient Deficiencies Linked to Hair Loss",
    href: "/hair-nutrition/deficiencies",
    description: "Understanding which nutritional gaps can lead to hair problems."
  },
  {
    title: "Protein Intake and Hair Health",
    href: "/hair-nutrition/protein",
    description: "Why adequate protein matters for maintaining healthy hair."
  },
  {
    title: "Telogen Effluvium Explained",
    href: "/hair-loss/telogen-effluvium",
    description: "Understanding the stress-related shedding that crash dieting can trigger."
  }
];

const CrashDietingPage = () => {
  return (
    <ContentPageLayout>
      <SEOHead
        title="Crash Dieting and Hair Loss | Weight Loss Effects on Hair - HairCare.ai"
        description="Learn how crash diets and rapid weight loss affect hair health. Understand the science behind diet-related hair loss and how to prevent it."
        canonicalUrl="https://haircare.ai/hair-nutrition/crash-dieting"
        articleSchema={{
          headline: "Crash Dieting and Hair Loss",
          description: "A comprehensive guide to understanding how severe calorie restriction affects hair growth.",
          datePublished: "2025-06-28",
          dateModified: "2025-06-28"
        }}
        faqSchema={faqItems}
      />

      <article className="max-w-4xl mx-auto" itemScope itemType="https://schema.org/Article">
        <Breadcrumb items={[
          { label: "Hair Nutrition", href: "/hair-nutrition" },
          { label: "Crash Dieting" }
        ]} />

        <header className="mb-8">
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4" itemProp="headline">
            Crash Dieting and Hair Loss
          </h1>
          <p className="text-lg text-muted-foreground">
            Rapid weight loss can come at a cost to your hair that may not become apparent for months.
          </p>
        </header>

        <section className="prose prose-lg max-w-none mb-10">
          <p className="text-foreground leading-relaxed">
            The promise of rapid weight loss makes crash diets appealing, but the body often responds to severe calorie restriction in ways that extend far beyond the scale. One of the less discussed consequences is hair loss, which can begin weeks or months after starting an extreme diet. Understanding this connection can help you make informed decisions about weight management that protect your overall health, including your hair.
          </p>
          <p className="text-foreground leading-relaxed">
            Hair requires a steady supply of nutrients and energy to grow. When the body perceives a shortage, it prioritises vital organs and functions, redirecting resources away from hair production. This survival mechanism served our ancestors well during famines, but in the context of intentional crash dieting, it results in an unwanted side effect.
          </p>
        </section>

        <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-10">
          <h2 className="font-heading text-xl font-semibold text-foreground mb-3">Quick Answer</h2>
          <p className="text-foreground">
            Crash dieting can trigger telogen effluvium, a type of hair shedding that typically begins two to three months after starting severe calorie restriction. The hair loss is usually temporary and resolves once adequate nutrition is restored, but recovery can take six months to a year.
          </p>
        </div>

        <section className="mb-10">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
            How Crash Dieting Affects Hair
          </h2>
          <p className="text-foreground leading-relaxed mb-4">
            Severe calorie restriction affects hair through several mechanisms:
          </p>
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-card border border-border">
              <h3 className="font-semibold text-foreground mb-2">Triggering Telogen Effluvium</h3>
              <p className="text-muted-foreground">
                The body perceives severe calorie restriction as a stressor. In response, it pushes more hair follicles than normal into the telogen, or resting, phase. After two to three months in this phase, these hairs fall out, leading to noticeable shedding.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-card border border-border">
              <h3 className="font-semibold text-foreground mb-2">Protein Deficiency</h3>
              <p className="text-muted-foreground">
                Many crash diets are too low in protein. Since hair is primarily made of protein, inadequate intake means the body lacks the building blocks needed for healthy hair production.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-card border border-border">
              <h3 className="font-semibold text-foreground mb-2">Micronutrient Deficiencies</h3>
              <p className="text-muted-foreground">
                Restrictive diets often lack adequate iron, zinc, biotin, and other nutrients essential for hair health. These deficiencies compound the stress on hair follicles.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-card border border-border">
              <h3 className="font-semibold text-foreground mb-2">Hormonal Changes</h3>
              <p className="text-muted-foreground">
                Severe calorie restriction can disrupt hormones including thyroid function, which plays a role in hair growth. These hormonal shifts add another layer of stress to the hair cycle.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
            Types of Diets Most Likely to Cause Hair Loss
          </h2>
          <p className="text-foreground leading-relaxed mb-4">
            Not all weight loss causes hair loss. The risk is highest with:
          </p>
          <ul className="list-disc list-inside space-y-2 text-foreground mb-4">
            <li>Very low calorie diets, typically under 1200 calories daily</li>
            <li>Diets that severely restrict or eliminate protein sources</li>
            <li>Juice cleanses and liquid-only diets lasting more than a few days</li>
            <li>Elimination diets that cut out multiple food groups</li>
            <li>Rapid weight loss of more than one kilogram per week</li>
          </ul>
          <p className="text-foreground leading-relaxed">
            Weight loss surgery can also cause hair loss due to rapid weight reduction and changes in nutrient absorption, though this is typically temporary and managed with appropriate supplementation.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
            Timeline of Diet-Related Hair Loss
          </h2>
          <p className="text-foreground leading-relaxed mb-4">
            Understanding the timeline helps explain why the connection between dieting and hair loss is not always immediately obvious:
          </p>
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-card border border-border">
              <h3 className="font-semibold text-foreground mb-2">Weeks 1-4: Initial Restriction</h3>
              <p className="text-muted-foreground">
                No visible hair changes. Follicles begin responding to reduced nutrient availability by shifting into the resting phase.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-card border border-border">
              <h3 className="font-semibold text-foreground mb-2">Months 2-3: Shedding Begins</h3>
              <p className="text-muted-foreground">
                Hairs that entered the resting phase begin to fall out. This is when most people first notice increased shedding.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-card border border-border">
              <h3 className="font-semibold text-foreground mb-2">Months 3-6: Peak Shedding</h3>
              <p className="text-muted-foreground">
                Shedding may continue or intensify. Thinning becomes noticeable. This period can be alarming but is usually temporary.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-card border border-border">
              <h3 className="font-semibold text-foreground mb-2">Months 6-12: Recovery</h3>
              <p className="text-muted-foreground">
                With restored nutrition, new hair growth begins. Full recovery typically takes six months to a year.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
            Preventing Hair Loss While Losing Weight
          </h2>
          <p className="text-foreground leading-relaxed mb-4">
            It is possible to lose weight without sacrificing hair health by following these principles:
          </p>
          <ul className="list-disc list-inside space-y-2 text-foreground">
            <li>Aim for gradual weight loss of 0.5 to 1 kilogram per week</li>
            <li>Maintain adequate protein intake, at least 0.8 grams per kilogram of body weight</li>
            <li>Include iron-rich foods and pair them with vitamin C for better absorption</li>
            <li>Do not eliminate entire food groups without medical necessity</li>
            <li>Consider a multivitamin if concerned about micronutrient gaps</li>
            <li>Stay hydrated, as water supports nutrient transport</li>
            <li>Consult a healthcare provider before starting any very low calorie diet</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
            What to Do If Hair Loss Has Already Started
          </h2>
          <p className="text-foreground leading-relaxed mb-4">
            If you are experiencing hair loss that you suspect is related to dieting:
          </p>
          <ul className="list-disc list-inside space-y-2 text-foreground mb-4">
            <li>Gradually increase calorie intake to a sustainable level</li>
            <li>Prioritise protein and nutrient-dense foods</li>
            <li>Consider blood tests to check for deficiencies</li>
            <li>Be patient, as hair takes time to recover</li>
            <li>Avoid additional stressors to hair like harsh treatments or tight styles</li>
          </ul>
          <p className="text-foreground leading-relaxed">
            In most cases, hair will begin to recover once adequate nutrition is restored, though this process takes months rather than weeks.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
            Common Myths About Dieting and Hair
          </h2>
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/20">
              <h3 className="font-semibold text-foreground mb-2">Myth: Hair loss from dieting is permanent</h3>
              <p className="text-muted-foreground">
                Diet-related telogen effluvium is typically temporary. Hair usually regrows once nutrition normalises, though recovery takes time.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/20">
              <h3 className="font-semibold text-foreground mb-2">Myth: Taking hair supplements prevents diet-related hair loss</h3>
              <p className="text-muted-foreground">
                Supplements cannot compensate for severe calorie restriction. The body needs adequate overall energy and protein, not just specific vitamins.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/20">
              <h3 className="font-semibold text-foreground mb-2">Myth: Cutting carbs causes hair loss</h3>
              <p className="text-muted-foreground">
                Low-carbohydrate diets do not inherently cause hair loss if they provide adequate calories and protein. Extreme carb restriction combined with overall calorie deficit is more problematic.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
            When to Seek Professional Help
          </h2>
          <p className="text-foreground leading-relaxed mb-4">
            Consult a healthcare provider if:
          </p>
          <ul className="list-disc list-inside space-y-2 text-foreground mb-4">
            <li>Hair loss is severe or continues for more than six months after restoring nutrition</li>
            <li>You notice patchy bald spots rather than diffuse thinning</li>
            <li>You have other symptoms like extreme fatigue, dizziness, or irregular periods</li>
            <li>You are struggling to establish healthy eating patterns after dieting</li>
            <li>You are concerned about an eating disorder</li>
          </ul>
          <p className="text-foreground leading-relaxed">
            Professional guidance can help identify underlying issues and develop a sustainable approach to both weight management and hair health.
          </p>
        </section>

        <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-10">
          <p className="text-foreground">
            HairCare AI can help personalise this further based on your hair type, scalp condition, and goals.
          </p>
        </div>

        <ArticleNavigation
          previous={{ href: "/hair-nutrition/key-nutrients", title: "Iron, Zinc, and Biotin Explained" }}
          next={{ href: "/hair-nutrition/sleep", title: "Sleep and Hair Growth" }}
        />

        <RelatedArticles articles={relatedArticles} />
      </article>
    </ContentPageLayout>
  );
};

export default CrashDietingPage;
