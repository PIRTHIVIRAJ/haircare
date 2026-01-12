import SEOHead from "@/components/SEOHead";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleNavigation from "@/components/ArticleNavigation";
import RelatedArticles from "@/components/RelatedArticles";
import ContentPageLayout from "@/components/ContentPageLayout";

const faqItems = [
  {
    question: "How low does iron have to be to cause hair loss?",
    answer: "Hair loss can occur with ferritin levels below 30 ng/mL, though optimal hair health typically requires levels above 50-70 ng/mL. Some dermatologists recommend even higher levels for those experiencing hair loss."
  },
  {
    question: "How long does it take for hair to grow back after iron deficiency?",
    answer: "After iron levels normalize, hair regrowth typically begins within three to six months. Full recovery may take up to twelve months depending on the severity and duration of deficiency."
  },
  {
    question: "Can iron supplements cause hair loss?",
    answer: "Iron supplements do not cause hair loss when taken appropriately. Excessive iron can be harmful, so supplementation should be based on documented deficiency and monitored by a healthcare provider."
  }
];

const relatedArticles = [
  {
    title: "Thyroid Problems and Hair Thinning",
    href: "/womens-hair/thyroid",
    description: "How thyroid imbalances affect hair growth and what treatment can achieve."
  },
  {
    title: "When Women Should Seek Medical Help",
    href: "/womens-hair/when-to-seek-help",
    description: "Warning signs that indicate you should consult a healthcare provider about hair loss."
  },
  {
    title: "Hormonal Hair Loss Treatments",
    href: "/womens-hair/hormonal-hair-loss",
    description: "Evidence-based treatments for hormone-related hair thinning in women."
  }
];

const IronDeficiencyPage = () => {
  return (
    <ContentPageLayout>
      <SEOHead
        title="Iron Deficiency and Hair Loss | Anemia and Hair Health - HairCare.ai"
        description="Learn how iron deficiency causes hair loss in women, what ferritin levels mean for your hair, and how to restore healthy hair growth through proper treatment."
        canonicalUrl="https://haircare.ai/womens-hair/iron-deficiency"
        articleSchema={{
          headline: "Iron Deficiency and Hair Loss: What Women Need to Know",
          description: "A comprehensive guide to understanding the connection between iron deficiency and hair loss, including diagnosis, treatment, and prevention strategies.",
          datePublished: "2025-06-28",
          dateModified: "2025-06-28"
        }}
        faqSchema={faqItems}
      />

      <article className="max-w-4xl mx-auto">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Women's Hair Health", href: "/womens-hair" },
            { label: "Iron Deficiency" }
          ]}
        />

        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Iron Deficiency and Hair Loss: What Women Need to Know
          </h1>
          <p className="text-lg text-muted-foreground">
            Iron deficiency is one of the most common nutritional deficiencies worldwide and a frequent contributor to hair loss in women. Understanding how iron affects hair growth and recognizing the signs of deficiency can help you take steps to protect and restore your hair.
          </p>
        </header>

        <div className="bg-primary/5 border border-primary/10 rounded-lg p-6 mb-8">
          <h2 className="text-lg font-semibold text-foreground mb-2">Quick Answer</h2>
          <p className="text-muted-foreground">
            Iron is essential for hair follicle function, and deficiency can cause diffuse hair shedding. Blood tests measuring ferritin levels help diagnose the condition. Treatment through diet and supplementation typically leads to hair regrowth within three to six months after levels normalize.
          </p>
        </div>

        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-foreground">Why Iron Matters for Hair</h2>
            <p className="text-muted-foreground">
              Iron plays several crucial roles in the body that directly affect hair growth. It is a component of hemoglobin, the protein in red blood cells that carries oxygen throughout the body, including to hair follicles. Adequate oxygen supply is essential for the rapid cell division that occurs during the hair growth phase.
            </p>
            <p className="text-muted-foreground">
              Iron is also involved in the production of collagen, DNA synthesis, and various enzymatic processes within hair follicles. When iron stores become depleted, the body prioritizes vital organs over hair follicles, which are considered non-essential. This can disrupt the normal hair growth cycle and lead to increased shedding.
            </p>
            <p className="text-muted-foreground">
              The type of hair loss associated with iron deficiency is typically telogen effluvium, characterized by diffuse shedding across the entire scalp rather than patterned thinning. Many women notice more hair in their brush, on their pillow, or accumulating in the shower drain.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">Why Women Are Particularly Vulnerable</h2>
            <p className="text-muted-foreground">
              Women are at significantly higher risk of iron deficiency than men for several reasons:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li><strong>Menstruation:</strong> Monthly blood loss depletes iron stores, particularly in women with heavy periods</li>
              <li><strong>Pregnancy:</strong> Iron demands increase dramatically during pregnancy to support fetal development and increased blood volume</li>
              <li><strong>Breastfeeding:</strong> Iron continues to be lost through breast milk after delivery</li>
              <li><strong>Diet:</strong> Vegetarian and vegan diets may provide less absorbable iron, and many women restrict calories in ways that limit iron intake</li>
              <li><strong>Medical conditions:</strong> Conditions affecting iron absorption, such as celiac disease or inflammatory bowel disease, increase risk</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">Recognizing Iron Deficiency</h2>
            <p className="text-muted-foreground">
              Hair loss may be an early sign of iron deficiency, sometimes appearing before other symptoms become obvious. However, other signs often accompany the hair changes:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Fatigue and weakness, even with adequate sleep</li>
              <li>Pale skin, particularly noticeable in the inner lower eyelids, nail beds, and gums</li>
              <li>Shortness of breath during normal activities</li>
              <li>Dizziness or lightheadedness</li>
              <li>Cold hands and feet</li>
              <li>Brittle nails that may develop a spoon shape</li>
              <li>Headaches, particularly with exertion</li>
              <li>Unusual cravings for non-food items like ice or starch</li>
            </ul>
            <p className="text-muted-foreground">
              It is important to note that significant hair loss can occur even with mild deficiency, before more obvious symptoms appear. This is why blood testing is essential when hair loss is a concern.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">Understanding Your Blood Tests</h2>
            <p className="text-muted-foreground">
              Several blood tests assess iron status, with ferritin being the most important for evaluating hair loss:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li><strong>Ferritin:</strong> Measures stored iron. Levels below 30 ng/mL are associated with hair loss, and many dermatologists recommend levels above 50-70 ng/mL for optimal hair health</li>
              <li><strong>Serum iron:</strong> Measures iron currently circulating in the blood</li>
              <li><strong>TIBC and transferrin saturation:</strong> Indicate how much iron the blood can carry and how much is being carried</li>
              <li><strong>Hemoglobin and hematocrit:</strong> Measure red blood cell quantity, which decreases in anemia</li>
            </ul>
            <p className="text-muted-foreground">
              Standard reference ranges for ferritin are quite broad, often starting as low as 10 or 12 ng/mL. However, hair follicles may require higher levels to function optimally. Discussing your specific levels and hair concerns with a knowledgeable healthcare provider is important.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">Treatment Approaches</h2>
            
            <h3 className="text-xl font-medium text-foreground mt-6">Dietary Modifications</h3>
            <p className="text-muted-foreground">
              Increasing iron intake through diet is a foundational approach. Iron comes in two forms: heme iron from animal sources, which is more easily absorbed, and non-heme iron from plant sources, which requires optimization for absorption.
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li><strong>Best heme iron sources:</strong> Red meat, organ meats, poultry, fish, and shellfish</li>
              <li><strong>Good non-heme sources:</strong> Legumes, fortified cereals, spinach, tofu, and dried fruits</li>
              <li><strong>Absorption enhancers:</strong> Vitamin C foods paired with iron sources, cooking in cast iron</li>
              <li><strong>Absorption inhibitors to avoid:</strong> Coffee, tea, and calcium-rich foods consumed at the same time as iron sources</li>
            </ul>

            <h3 className="text-xl font-medium text-foreground mt-6">Iron Supplementation</h3>
            <p className="text-muted-foreground">
              When diet alone is insufficient, iron supplements may be necessary. Various forms are available, including ferrous sulfate, ferrous gluconate, and ferrous fumarate. Some formulations are designed to reduce gastrointestinal side effects that make compliance difficult.
            </p>
            <p className="text-muted-foreground">
              Iron supplements are best absorbed when taken on an empty stomach with vitamin C, though taking them with food may be necessary to reduce stomach upset. Your healthcare provider will recommend appropriate dosing and monitoring to ensure levels normalize without reaching excessive levels.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-6">Addressing Underlying Causes</h3>
            <p className="text-muted-foreground">
              Sustainable improvement requires identifying and addressing why iron levels dropped in the first place. This might involve treating heavy menstrual bleeding, managing absorption disorders, or adjusting medications that interfere with iron status.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">Common Myths About Iron and Hair</h2>
            <p className="text-muted-foreground">
              Misconceptions about iron and hair can lead to inappropriate treatment or missed diagnoses:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li><strong>Myth: If I am not anemic, my iron is fine.</strong> Hair loss can occur with low ferritin even when hemoglobin remains normal. These are separate measurements.</li>
              <li><strong>Myth: Iron supplements work quickly.</strong> It takes time to rebuild iron stores and for the hair growth cycle to respond. Expect gradual improvement over months.</li>
              <li><strong>Myth: More iron is always better.</strong> Excessive iron is harmful and can cause serious health problems. Supplementation should be based on documented need.</li>
              <li><strong>Myth: All iron supplements are the same.</strong> Absorption and tolerability vary between formulations. What works for one person may not work for another.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">When to Seek Professional Help</h2>
            <p className="text-muted-foreground">
              Medical evaluation is important for proper diagnosis and treatment of iron deficiency. Seek consultation if you experience:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Significant or progressive hair shedding</li>
              <li>Symptoms suggesting iron deficiency or anemia</li>
              <li>Heavy menstrual periods or other unexplained blood loss</li>
              <li>Dietary restrictions that may limit iron intake</li>
              <li>Gastrointestinal symptoms that could affect absorption</li>
              <li>Pregnancy or recent childbirth</li>
            </ul>
            <p className="text-muted-foreground">
              Self-treating with high-dose iron supplements is not recommended, as iron toxicity can be serious. A healthcare provider can order appropriate tests, determine the right treatment approach, and monitor your progress safely.
            </p>
          </section>

          <section className="bg-secondary/20 rounded-lg p-6">
            <p className="text-muted-foreground italic">
              HairCare AI can help personalize this further based on your hair type, scalp condition, and goals.
            </p>
          </section>
        </div>

        <RelatedArticles articles={relatedArticles} />

        <ArticleNavigation
          previous={{
            title: "Hormonal Hair Loss Treatments",
            href: "/womens-hair/hormonal-hair-loss"
          }}
          next={{
            title: "Thyroid Problems and Hair Thinning",
            href: "/womens-hair/thyroid"
          }}
        />
      </article>
    </ContentPageLayout>
  );
};

export default IronDeficiencyPage;
