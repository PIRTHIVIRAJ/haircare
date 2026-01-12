import SEOHead from "@/components/SEOHead";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleNavigation from "@/components/ArticleNavigation";
import RelatedArticles from "@/components/RelatedArticles";
import ContentPageLayout from "@/components/ContentPageLayout";

const faqItems = [
  {
    question: "Does alcohol cause hair loss?",
    answer: "Moderate alcohol consumption is unlikely to directly cause hair loss in healthy individuals. However, heavy or chronic drinking can affect hair through nutritional deficiencies, hormonal disruption, and dehydration."
  },
  {
    question: "How much alcohol is too much for hair health?",
    answer: "There is no specific threshold for hair, but heavy drinking as defined by health guidelines poses risks. For most adults, limiting alcohol to moderate levels supports overall health, including hair."
  },
  {
    question: "Will my hair recover if I stop drinking heavily?",
    answer: "If alcohol-related nutritional deficiencies or liver damage contributed to hair loss, addressing these issues by reducing alcohol and improving nutrition can support hair recovery over time."
  }
];

const relatedArticles = [
  {
    title: "Smoking and Hair Health",
    href: "/hair-nutrition/smoking",
    description: "Another lifestyle factor that affects hair."
  },
  {
    title: "Nutrient Deficiencies Linked to Hair Loss",
    href: "/hair-nutrition/deficiencies",
    description: "How nutritional gaps affect hair health."
  },
  {
    title: "Foods That Promote Healthy Hair",
    href: "/hair-nutrition/best-foods",
    description: "Dietary choices that support optimal hair growth."
  }
];

const AlcoholPage = () => {
  return (
    <ContentPageLayout>
      <SEOHead
        title="Alcohol and Hair Thinning | How Drinking Affects Hair - HairCare.ai"
        description="Learn how alcohol consumption affects hair health. Understand the mechanisms by which excessive drinking can contribute to hair problems."
        canonicalUrl="https://haircare.ai/hair-nutrition/alcohol"
        articleSchema={{
          headline: "Alcohol and Hair Thinning",
          description: "Understanding the relationship between alcohol consumption and hair health.",
          datePublished: "2025-06-28",
          dateModified: "2025-06-28"
        }}
        faqSchema={faqItems}
      />

      <article className="max-w-4xl mx-auto" itemScope itemType="https://schema.org/Article">
        <Breadcrumb items={[
          { label: "Hair Nutrition", href: "/hair-nutrition" },
          { label: "Alcohol and Hair" }
        ]} />

        <header className="mb-8">
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4" itemProp="headline">
            Alcohol and Hair Thinning
          </h1>
          <p className="text-lg text-muted-foreground">
            Heavy drinking can affect hair through multiple pathways, though moderate consumption is less concerning.
          </p>
        </header>

        <section className="prose prose-lg max-w-none mb-10">
          <p className="text-foreground leading-relaxed">
            The occasional glass of wine is unlikely to affect your hair, but chronic heavy drinking is another matter. Alcohol affects the body in numerous ways that can indirectly impact hair health, from depleting essential nutrients to disrupting hormones and damaging the liver that processes many substances important for hair.
          </p>
          <p className="text-foreground leading-relaxed">
            Understanding these connections helps provide a realistic picture of how lifestyle choices affect hair. The goal is not to promote fear about moderate drinking, but to recognise when alcohol consumption may be contributing to hair problems alongside other factors.
          </p>
        </section>

        <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-10">
          <h2 className="font-heading text-xl font-semibold text-foreground mb-3">Quick Answer</h2>
          <p className="text-foreground">
            Heavy alcohol consumption can affect hair through nutritional depletion, dehydration, hormonal disruption, and liver damage. Moderate drinking is unlikely to significantly impact hair in otherwise healthy individuals. Reducing alcohol intake and addressing nutritional gaps can support hair recovery.
          </p>
        </div>

        <section className="mb-10">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
            How Alcohol Affects Hair
          </h2>
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-card border border-border">
              <h3 className="font-semibold text-foreground mb-2">Nutritional Depletion</h3>
              <p className="text-muted-foreground">
                Alcohol interferes with the absorption and utilisation of several nutrients essential for hair, including zinc, iron, B vitamins, and protein. Chronic heavy drinking often leads to deficiencies that affect hair growth.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-card border border-border">
              <h3 className="font-semibold text-foreground mb-2">Dehydration</h3>
              <p className="text-muted-foreground">
                Alcohol is a diuretic, increasing water loss. Chronic dehydration can affect hair texture and scalp health, making hair appear drier and more brittle.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-card border border-border">
              <h3 className="font-semibold text-foreground mb-2">Hormonal Disruption</h3>
              <p className="text-muted-foreground">
                Alcohol can affect hormone levels, including oestrogen and testosterone. In men, chronic drinking may increase conversion of testosterone to oestrogen while also affecting DHT levels.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-card border border-border">
              <h3 className="font-semibold text-foreground mb-2">Liver Damage</h3>
              <p className="text-muted-foreground">
                The liver processes proteins and stores nutrients essential for hair. Alcohol-related liver damage impairs these functions, affecting the body's ability to maintain healthy hair.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-card border border-border">
              <h3 className="font-semibold text-foreground mb-2">Sleep Disruption</h3>
              <p className="text-muted-foreground">
                While alcohol may help people fall asleep initially, it disrupts sleep quality. Poor sleep affects the body's repair processes, including those involving hair follicles.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
            Specific Nutrients Affected by Alcohol
          </h2>
          <p className="text-foreground leading-relaxed mb-4">
            Heavy drinking particularly affects these hair-relevant nutrients:
          </p>
          <ul className="list-disc list-inside space-y-2 text-foreground">
            <li><strong>Zinc:</strong> Alcohol increases zinc excretion and interferes with absorption</li>
            <li><strong>Iron:</strong> Chronic drinking can cause iron deficiency or, paradoxically, iron overload with liver damage</li>
            <li><strong>B vitamins:</strong> Folate, B12, and other B vitamins are commonly depleted in heavy drinkers</li>
            <li><strong>Protein:</strong> Alcohol can impair protein absorption and increase protein loss</li>
            <li><strong>Vitamin A:</strong> Liver damage affects vitamin A storage and metabolism</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
            What Counts as Heavy Drinking?
          </h2>
          <p className="text-foreground leading-relaxed mb-4">
            Health guidelines define moderate and heavy drinking as:
          </p>
          <div className="p-4 rounded-lg bg-card border border-border mb-4">
            <h3 className="font-semibold text-foreground mb-2">Moderate Drinking</h3>
            <p className="text-muted-foreground">
              Up to one standard drink per day for women and up to two for men. This level is generally not associated with significant hair effects in healthy individuals.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border">
            <h3 className="font-semibold text-foreground mb-2">Heavy Drinking</h3>
            <p className="text-muted-foreground">
              More than three drinks per day or seven per week for women; more than four drinks per day or fourteen per week for men. This level increases risk of the health effects that can impact hair.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
            Signs That Alcohol May Be Affecting Your Hair
          </h2>
          <p className="text-foreground leading-relaxed mb-4">
            Consider whether alcohol may be a factor if you notice:
          </p>
          <ul className="list-disc list-inside space-y-2 text-foreground">
            <li>Hair that has become noticeably drier or more brittle</li>
            <li>Increased shedding alongside other signs of nutritional deficiency</li>
            <li>Hair changes that correlate with periods of heavier drinking</li>
            <li>Slow hair growth or poor hair quality</li>
            <li>Skin changes that parallel hair changes</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
            Supporting Hair While Reducing Alcohol
          </h2>
          <p className="text-foreground leading-relaxed mb-4">
            If reducing alcohol intake, support hair recovery with:
          </p>
          <ul className="list-disc list-inside space-y-2 text-foreground">
            <li>Adequate hydration to counteract previous dehydration effects</li>
            <li>A balanced diet rich in protein and the nutrients depleted by alcohol</li>
            <li>Blood tests to identify specific deficiencies needing supplementation</li>
            <li>Patience, as hair takes months to show improvement</li>
            <li>Good sleep habits to support body repair processes</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
            Common Myths About Alcohol and Hair
          </h2>
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/20">
              <h3 className="font-semibold text-foreground mb-2">Myth: Beer is good for hair when applied topically</h3>
              <p className="text-muted-foreground">
                The belief that rinsing hair with beer adds shine or volume is largely unfounded. Any temporary effect comes from the sugars coating the hair shaft, which can actually build up and cause dryness.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/20">
              <h3 className="font-semibold text-foreground mb-2">Myth: Wine is healthy for hair due to antioxidants</h3>
              <p className="text-muted-foreground">
                While red wine contains antioxidants, the alcohol content negates any potential benefits for hair. The same antioxidants can be obtained from grapes without the negative effects of alcohol.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/20">
              <h3 className="font-semibold text-foreground mb-2">Myth: Only alcoholics experience alcohol-related hair problems</h3>
              <p className="text-muted-foreground">
                Regular heavy drinking that does not meet the clinical definition of alcoholism can still affect nutrient status and overall health enough to impact hair.
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
            <li>You are concerned about your alcohol consumption and want support reducing it</li>
            <li>You have noticed significant hair or skin changes alongside heavy drinking</li>
            <li>You have symptoms of liver problems or nutritional deficiency</li>
            <li>Hair loss continues despite reducing alcohol and improving nutrition</li>
          </ul>
          <p className="text-foreground leading-relaxed">
            A healthcare provider can assess overall health, check for deficiencies, and provide appropriate support for both alcohol reduction and hair concerns.
          </p>
        </section>

        <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-10">
          <p className="text-foreground">
            HairCare AI can help personalise this further based on your hair type, scalp condition, and goals.
          </p>
        </div>

        <ArticleNavigation
          previous={{ href: "/hair-nutrition/smoking", title: "Smoking and Hair Health" }}
          next={{ href: "/hair-nutrition/gut-health", title: "Gut Health and Hair Connection" }}
        />

        <RelatedArticles articles={relatedArticles} />
      </article>
    </ContentPageLayout>
  );
};

export default AlcoholPage;
