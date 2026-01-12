import SEOHead from "@/components/SEOHead";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleNavigation from "@/components/ArticleNavigation";
import RelatedArticles from "@/components/RelatedArticles";
import ContentPageLayout from "@/components/ContentPageLayout";

const faqItems = [
  {
    question: "Should I take iron, zinc, and biotin supplements for hair?",
    answer: "Supplements should only be taken if blood tests confirm a deficiency. Taking these nutrients without a deficiency is unlikely to improve hair and may cause side effects, particularly with iron and zinc, which can be harmful in excess."
  },
  {
    question: "Which is most important for hair: iron, zinc, or biotin?",
    answer: "Iron deficiency is the most common nutritional cause of hair loss. However, all three nutrients play important roles, and the most important one for you depends on your individual levels and dietary intake."
  },
  {
    question: "Can I get enough of these nutrients from food alone?",
    answer: "Most people can obtain adequate iron, zinc, and biotin through a balanced diet. Biotin deficiency is particularly rare. Those with absorption issues or dietary restrictions may need professional guidance."
  }
];

const relatedArticles = [
  {
    title: "Nutrient Deficiencies Linked to Hair Loss",
    href: "/hair-nutrition/deficiencies",
    description: "A broader look at how various nutritional gaps affect hair health."
  },
  {
    title: "Foods That Promote Healthy Hair",
    href: "/hair-nutrition/best-foods",
    description: "Practical dietary choices for supporting hair growth."
  },
  {
    title: "Iron Deficiency and Hair Loss",
    href: "/womens-hair/iron-deficiency",
    description: "An in-depth look at iron's role in hair health."
  }
];

const KeyNutrientsPage = () => {
  return (
    <ContentPageLayout>
      <SEOHead
        title="Iron, Zinc, and Biotin for Hair Health | Key Nutrients Explained - HairCare.ai"
        description="Understand the roles of iron, zinc, and biotin in hair health. Learn how deficiencies affect hair and when supplementation may be appropriate."
        canonicalUrl="https://haircare.ai/hair-nutrition/key-nutrients"
        articleSchema={{
          headline: "Iron, Zinc, and Biotin Explained",
          description: "A comprehensive guide to three of the most discussed nutrients for hair health.",
          datePublished: "2025-06-28",
          dateModified: "2025-06-28"
        }}
        faqSchema={faqItems}
      />

      <article className="max-w-4xl mx-auto" itemScope itemType="https://schema.org/Article">
        <Breadcrumb items={[
          { label: "Hair Nutrition", href: "/hair-nutrition" },
          { label: "Key Nutrients" }
        ]} />

        <header className="mb-8">
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4" itemProp="headline">
            Iron, Zinc, and Biotin Explained
          </h1>
          <p className="text-lg text-muted-foreground">
            Three nutrients frequently discussed in relation to hair health, each with distinct roles.
          </p>
        </header>

        <section className="prose prose-lg max-w-none mb-10">
          <p className="text-foreground leading-relaxed">
            Iron, zinc, and biotin are among the most commonly mentioned nutrients when discussing hair health. They appear in countless hair supplement formulas and are often promoted as solutions for hair loss. However, understanding what each nutrient actually does, who might be deficient, and when supplementation is genuinely helpful requires looking beyond marketing claims.
          </p>
          <p className="text-foreground leading-relaxed">
            Each of these nutrients plays a specific role in hair biology. Deficiencies can indeed cause hair problems, but taking supplements when you are not deficient is unlikely to improve your hair and may even cause harm. This guide examines the science behind each nutrient to help you make informed decisions.
          </p>
        </section>

        <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-10">
          <h2 className="font-heading text-xl font-semibold text-foreground mb-3">Quick Answer</h2>
          <p className="text-foreground">
            Iron carries oxygen to hair follicles and is the most common nutritional deficiency linked to hair loss. Zinc supports hair tissue growth and oil gland function. Biotin helps metabolise nutrients but deficiency is rare. All three should only be supplemented when a deficiency is confirmed through blood testing.
          </p>
        </div>

        <section className="mb-10">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
            Iron and Hair Health
          </h2>
          <p className="text-foreground leading-relaxed mb-4">
            Iron is essential for producing haemoglobin, the protein in red blood cells that carries oxygen throughout the body, including to hair follicles. When iron levels are low, less oxygen reaches the follicles, which can disrupt the hair growth cycle.
          </p>
          
          <div className="p-4 rounded-lg bg-card border border-border mb-4">
            <h3 className="font-semibold text-foreground mb-2">How Iron Deficiency Affects Hair</h3>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Triggers telogen effluvium, causing excessive shedding</li>
              <li>Diffuse thinning rather than patchy loss</li>
              <li>May affect hair even before anaemia develops</li>
              <li>Particularly common in women due to menstrual blood loss</li>
            </ul>
          </div>

          <p className="text-foreground leading-relaxed mb-4">
            Ferritin, the stored form of iron, appears particularly important for hair. Some research suggests optimal ferritin levels for hair may be higher than the minimum needed to prevent anaemia, though specific thresholds remain debated.
          </p>

          <div className="p-4 rounded-lg bg-card border border-border">
            <h3 className="font-semibold text-foreground mb-2">Food Sources of Iron</h3>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Red meat and liver (heme iron, well absorbed)</li>
              <li>Shellfish, particularly clams and oysters</li>
              <li>Spinach and other dark leafy greens</li>
              <li>Legumes including lentils and chickpeas</li>
              <li>Fortified cereals and breads</li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
            Zinc and Hair Health
          </h2>
          <p className="text-foreground leading-relaxed mb-4">
            Zinc is involved in hundreds of enzymatic reactions in the body, including those related to hair follicle function. It plays a role in hair tissue growth and repair, as well as maintaining the oil glands that keep hair moisturised.
          </p>

          <div className="p-4 rounded-lg bg-card border border-border mb-4">
            <h3 className="font-semibold text-foreground mb-2">How Zinc Deficiency Affects Hair</h3>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Causes hair loss and thinning</li>
              <li>May change hair texture</li>
              <li>Can slow regrowth after shedding</li>
              <li>Associated with alopecia areata in some studies</li>
            </ul>
          </div>

          <p className="text-foreground leading-relaxed mb-4">
            Those at higher risk of zinc deficiency include people with digestive disorders, strict vegetarians and vegans, pregnant and breastfeeding women, and heavy alcohol consumers.
          </p>

          <div className="p-4 rounded-lg bg-card border border-border">
            <h3 className="font-semibold text-foreground mb-2">Food Sources of Zinc</h3>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Oysters (highest food source of zinc)</li>
              <li>Red meat and poultry</li>
              <li>Beans and nuts</li>
              <li>Whole grains</li>
              <li>Dairy products</li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
            Biotin and Hair Health
          </h2>
          <p className="text-foreground leading-relaxed mb-4">
            Biotin, also known as vitamin B7, helps the body convert food into energy and is involved in the metabolism of amino acids that are used to build keratin, the protein that makes up hair. Despite its popularity in hair supplements, biotin deficiency is rare in people eating a varied diet.
          </p>

          <div className="p-4 rounded-lg bg-card border border-border mb-4">
            <h3 className="font-semibold text-foreground mb-2">When Biotin Deficiency Occurs</h3>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Taking certain anticonvulsant medications</li>
              <li>Consuming large amounts of raw egg whites over time</li>
              <li>Having rare genetic conditions affecting biotin metabolism</li>
              <li>Chronic alcohol use</li>
              <li>Prolonged antibiotic use affecting gut bacteria</li>
            </ul>
          </div>

          <p className="text-foreground leading-relaxed mb-4">
            For the vast majority of people, biotin supplements will not improve hair because they are not deficient. Biotin is widely available in foods and is also produced by beneficial gut bacteria.
          </p>

          <div className="p-4 rounded-lg bg-card border border-border">
            <h3 className="font-semibold text-foreground mb-2">Food Sources of Biotin</h3>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Eggs (cooked, as raw whites can impair absorption)</li>
              <li>Nuts, especially almonds and peanuts</li>
              <li>Seeds and legumes</li>
              <li>Sweet potatoes</li>
              <li>Mushrooms and cauliflower</li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
            Important Considerations About Supplementation
          </h2>
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-card border border-border">
              <h3 className="font-semibold text-foreground mb-2">Iron Supplementation Caution</h3>
              <p className="text-muted-foreground">
                Iron supplements should only be taken when a deficiency is confirmed. Excess iron can cause serious health problems including liver damage. Iron overload is a genuine risk, particularly for men and postmenopausal women.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-card border border-border">
              <h3 className="font-semibold text-foreground mb-2">Zinc Supplementation Caution</h3>
              <p className="text-muted-foreground">
                High doses of zinc can interfere with copper absorption and cause nausea, vomiting, and immune dysfunction. The upper limit for adults is 40 mg daily from all sources.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-card border border-border">
              <h3 className="font-semibold text-foreground mb-2">Biotin and Lab Tests</h3>
              <p className="text-muted-foreground">
                High-dose biotin supplements can interfere with certain blood tests, including thyroid function tests and cardiac biomarkers. Always inform healthcare providers about biotin supplementation before testing.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
            Common Myths About These Nutrients
          </h2>
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/20">
              <h3 className="font-semibold text-foreground mb-2">Myth: Biotin supplements help everyone with hair loss</h3>
              <p className="text-muted-foreground">
                Biotin only helps hair when there is a genuine deficiency, which is rare. Most hair loss has other causes that biotin cannot address.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/20">
              <h3 className="font-semibold text-foreground mb-2">Myth: More is better when supplementing</h3>
              <p className="text-muted-foreground">
                The body can only use what it needs. Excess iron and zinc can cause harm, and excess biotin simply passes through the body unused.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/20">
              <h3 className="font-semibold text-foreground mb-2">Myth: You can tell you are deficient without testing</h3>
              <p className="text-muted-foreground">
                Symptoms of deficiency can overlap with many other conditions. Blood tests are essential for accurate diagnosis before supplementing.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
            When to Seek Professional Help
          </h2>
          <p className="text-foreground leading-relaxed mb-4">
            See a healthcare provider for testing if:
          </p>
          <ul className="list-disc list-inside space-y-2 text-foreground mb-4">
            <li>You are experiencing hair loss or changes in hair texture</li>
            <li>You have symptoms suggesting deficiency such as fatigue or weakness</li>
            <li>You follow a restrictive diet or have absorption issues</li>
            <li>You are considering starting supplements for hair health</li>
          </ul>
          <p className="text-foreground leading-relaxed">
            A comprehensive blood panel can check iron, ferritin, zinc, and other nutrients. This allows for targeted treatment rather than guesswork with supplements.
          </p>
        </section>

        <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-10">
          <p className="text-foreground">
            HairCare AI can help personalise this further based on your hair type, scalp condition, and goals.
          </p>
        </div>

        <ArticleNavigation
          previous={{ href: "/hair-nutrition/protein", title: "Protein Intake and Hair Health" }}
          next={{ href: "/hair-nutrition/crash-dieting", title: "Crash Dieting and Hair Loss" }}
        />

        <RelatedArticles articles={relatedArticles} />
      </article>
    </ContentPageLayout>
  );
};

export default KeyNutrientsPage;
