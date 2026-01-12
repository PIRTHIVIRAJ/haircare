import SEOHead from "@/components/SEOHead";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleNavigation from "@/components/ArticleNavigation";
import RelatedArticles from "@/components/RelatedArticles";
import ContentPageLayout from "@/components/ContentPageLayout";

const faqItems = [
  {
    question: "Does smoking cause hair loss?",
    answer: "Smoking is associated with increased risk of hair loss through multiple mechanisms including reduced blood flow to follicles, oxidative stress, and hormonal effects. While not a direct cause, smoking can accelerate or worsen existing hair loss patterns."
  },
  {
    question: "Will my hair improve if I quit smoking?",
    answer: "Quitting smoking removes an ongoing source of damage to hair follicles. While it may not reverse existing genetic hair loss, it can help slow further deterioration and improve overall hair quality over time."
  },
  {
    question: "How long after quitting smoking will hair improve?",
    answer: "Blood circulation begins improving within weeks of quitting. Hair improvements may take several months to become visible as new, healthier hair grows in and damaged hair gradually sheds naturally."
  }
];

const relatedArticles = [
  {
    title: "Alcohol and Hair Thinning",
    href: "/hair-nutrition/alcohol",
    description: "Another lifestyle factor that can affect hair health."
  },
  {
    title: "Nutrient Deficiencies Linked to Hair Loss",
    href: "/hair-nutrition/deficiencies",
    description: "How nutritional gaps affect hair health."
  },
  {
    title: "Scalp Health Overview",
    href: "/scalp-health",
    description: "Maintaining a healthy foundation for hair growth."
  }
];

const SmokingPage = () => {
  return (
    <ContentPageLayout>
      <SEOHead
        title="Smoking and Hair Health | How Cigarettes Affect Hair - HairCare.ai"
        description="Learn how smoking affects hair health and contributes to hair loss. Understand the science and what quitting can do for your hair."
        canonicalUrl="https://haircare.ai/hair-nutrition/smoking"
        articleSchema={{
          headline: "Smoking and Hair Health",
          description: "Understanding the relationship between smoking and hair damage.",
          datePublished: "2025-06-28",
          dateModified: "2025-06-28"
        }}
        faqSchema={faqItems}
      />

      <article className="max-w-4xl mx-auto" itemScope itemType="https://schema.org/Article">
        <Breadcrumb items={[
          { label: "Hair Nutrition", href: "/hair-nutrition" },
          { label: "Smoking and Hair" }
        ]} />

        <header className="mb-8">
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4" itemProp="headline">
            Smoking and Hair Health
          </h1>
          <p className="text-lg text-muted-foreground">
            The harmful effects of smoking extend to your hair in ways that are often overlooked.
          </p>
        </header>

        <section className="prose prose-lg max-w-none mb-10">
          <p className="text-foreground leading-relaxed">
            The connection between smoking and lung cancer or heart disease is well known, but smoking also affects nearly every organ system in the body, including the skin and hair. Research has increasingly linked smoking to accelerated hair ageing, premature greying, and increased risk of pattern baldness.
          </p>
          <p className="text-foreground leading-relaxed">
            Understanding how smoking damages hair provides another compelling reason to quit, and for non-smokers, another reason not to start. The good news is that many of the effects on hair health can be mitigated by quitting.
          </p>
        </section>

        <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-10">
          <h2 className="font-heading text-xl font-semibold text-foreground mb-3">Quick Answer</h2>
          <p className="text-foreground">
            Smoking damages hair through reduced blood circulation to follicles, oxidative stress from free radicals, DNA damage to follicle cells, and hormonal disruption. Studies show smokers are significantly more likely to experience hair loss and premature greying than non-smokers.
          </p>
        </div>

        <section className="mb-10">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
            How Smoking Damages Hair
          </h2>
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-card border border-border">
              <h3 className="font-semibold text-foreground mb-2">Reduced Blood Circulation</h3>
              <p className="text-muted-foreground">
                Nicotine constricts blood vessels, reducing blood flow to the scalp and hair follicles. This means less oxygen and fewer nutrients reach the follicles, impairing their ability to produce healthy hair.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-card border border-border">
              <h3 className="font-semibold text-foreground mb-2">Oxidative Stress</h3>
              <p className="text-muted-foreground">
                Cigarette smoke contains thousands of chemicals that generate free radicals. These reactive molecules damage cells, including those in hair follicles, and accelerate ageing of hair-producing structures.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-card border border-border">
              <h3 className="font-semibold text-foreground mb-2">DNA Damage</h3>
              <p className="text-muted-foreground">
                Toxic chemicals in cigarette smoke can directly damage the DNA of hair follicle cells. This genotoxic effect may disrupt the normal hair growth cycle and lead to follicle miniaturisation.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-card border border-border">
              <h3 className="font-semibold text-foreground mb-2">Hormonal Effects</h3>
              <p className="text-muted-foreground">
                Smoking affects hormone levels in ways that may exacerbate hair loss. It can increase androgen levels and affect the enzymes that convert testosterone to DHT.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-card border border-border">
              <h3 className="font-semibold text-foreground mb-2">Inflammation</h3>
              <p className="text-muted-foreground">
                Smoking promotes systemic inflammation, which can affect the scalp and hair follicles. Chronic inflammation is associated with various types of hair loss.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
            Research on Smoking and Hair Loss
          </h2>
          <p className="text-foreground leading-relaxed mb-4">
            Multiple studies have found associations between smoking and hair loss:
          </p>
          <ul className="list-disc list-inside space-y-2 text-foreground">
            <li>Smokers are significantly more likely to have moderate to severe hair loss compared to non-smokers</li>
            <li>There appears to be a dose-response relationship, with heavier smokers at greater risk</li>
            <li>Smoking is associated with earlier onset of greying</li>
            <li>Male smokers show higher rates of androgenetic alopecia</li>
            <li>Smoking during pregnancy may affect hair development in offspring</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
            Smoking and Premature Greying
          </h2>
          <p className="text-foreground leading-relaxed mb-4">
            Beyond hair loss, smoking is linked to premature greying. The oxidative stress caused by cigarette smoke damages melanocytes, the cells responsible for producing hair pigment. Studies suggest smokers are significantly more likely to develop grey hair before age 30 than non-smokers.
          </p>
          <p className="text-foreground leading-relaxed">
            While genetics play the primary role in when hair turns grey, smoking appears to accelerate the process.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
            Effects on Hair Quality
          </h2>
          <p className="text-foreground leading-relaxed mb-4">
            Even before visible thinning occurs, smoking can affect hair quality:
          </p>
          <ul className="list-disc list-inside space-y-2 text-foreground">
            <li>Drier, more brittle hair due to reduced blood flow</li>
            <li>Duller appearance from impaired nutrient delivery</li>
            <li>Increased breakage</li>
            <li>Hair that smells of smoke</li>
            <li>Potential discolouration, particularly in light-coloured hair</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
            Benefits of Quitting for Hair
          </h2>
          <p className="text-foreground leading-relaxed mb-4">
            Quitting smoking offers numerous benefits for hair:
          </p>
          <ul className="list-disc list-inside space-y-2 text-foreground">
            <li>Improved blood circulation begins within hours of quitting</li>
            <li>Reduced oxidative damage allows follicles to recover</li>
            <li>Better nutrient delivery to hair follicles</li>
            <li>Reduced inflammation throughout the body</li>
            <li>Hair quality may improve as new, healthier hair grows in</li>
          </ul>
          <p className="text-foreground leading-relaxed mt-4">
            While quitting cannot reverse genetic hair loss or restore heavily damaged follicles, it removes an ongoing source of harm and allows the body to optimise its natural processes.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
            Common Myths About Smoking and Hair
          </h2>
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/20">
              <h3 className="font-semibold text-foreground mb-2">Myth: Light smoking does not affect hair</h3>
              <p className="text-muted-foreground">
                Even light smoking exposes hair follicles to harmful chemicals and reduces circulation. There is no safe level of smoking for any aspect of health, including hair.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/20">
              <h3 className="font-semibold text-foreground mb-2">Myth: Vaping is safe for hair</h3>
              <p className="text-muted-foreground">
                While research is still emerging, nicotine in e-cigarettes still constricts blood vessels and may affect circulation to hair follicles. Vaping is not harmless for hair or overall health.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/20">
              <h3 className="font-semibold text-foreground mb-2">Myth: Hair supplements can counteract smoking damage</h3>
              <p className="text-muted-foreground">
                No supplement can undo the ongoing damage from smoking. While good nutrition supports hair health, it cannot compensate for the circulatory and oxidative effects of smoking.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
            When to Seek Professional Help
          </h2>
          <p className="text-foreground leading-relaxed mb-4">
            Consider professional support if:
          </p>
          <ul className="list-disc list-inside space-y-2 text-foreground mb-4">
            <li>You want to quit smoking but have struggled on your own</li>
            <li>You are noticing significant hair loss alongside other health concerns</li>
            <li>You have quit smoking but hair problems persist after several months</li>
            <li>You want a comprehensive assessment of factors affecting your hair</li>
          </ul>
          <p className="text-foreground leading-relaxed">
            Healthcare providers can offer smoking cessation support and assess whether other factors may be contributing to hair changes.
          </p>
        </section>

        <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-10">
          <p className="text-foreground">
            HairCare AI can help personalise this further based on your hair type, scalp condition, and goals.
          </p>
        </div>

        <ArticleNavigation
          previous={{ href: "/hair-nutrition/exercise", title: "Exercise and Scalp Circulation" }}
          next={{ href: "/hair-nutrition/alcohol", title: "Alcohol and Hair Thinning" }}
        />

        <RelatedArticles articles={relatedArticles} />
      </article>
    </ContentPageLayout>
  );
};

export default SmokingPage;
