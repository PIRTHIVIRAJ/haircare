import SEOHead from "@/components/SEOHead";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleNavigation from "@/components/ArticleNavigation";
import RelatedArticles from "@/components/RelatedArticles";
import ContentPageLayout from "@/components/ContentPageLayout";

const faqItems = [
  {
    question: "Which vitamin deficiency causes the most hair loss?",
    answer: "Iron deficiency is the most common nutritional deficiency associated with hair loss, particularly in women. Low ferritin levels can trigger telogen effluvium, causing increased shedding even before anaemia develops."
  },
  {
    question: "Can taking vitamins regrow hair?",
    answer: "Vitamins can support hair regrowth only if hair loss was caused by a specific deficiency. Supplementing without a diagnosed deficiency typically does not improve hair growth and may cause harm in some cases."
  },
  {
    question: "How do I know if my hair loss is from a deficiency?",
    answer: "Blood tests ordered by a healthcare provider can identify nutritional deficiencies. Symptoms like fatigue, pallor, or brittle nails alongside hair loss may suggest deficiency, but testing provides definitive answers."
  }
];

const relatedArticles = [
  {
    title: "Foods That Promote Healthy Hair",
    href: "/hair-nutrition/best-foods",
    description: "Discover which foods provide the nutrients your hair needs for optimal growth."
  },
  {
    title: "Iron, Zinc, and Biotin Explained",
    href: "/hair-nutrition/key-nutrients",
    description: "Understanding the specific roles of key minerals and vitamins in hair health."
  },
  {
    title: "Iron Deficiency and Hair Loss",
    href: "/womens-hair/iron-deficiency",
    description: "A detailed look at how low iron affects hair and who is most at risk."
  }
];

const DeficienciesPage = () => {
  return (
    <ContentPageLayout>
      <SEOHead
        title="Nutrient Deficiencies Linked to Hair Loss | Hair Nutrition - HairCare.ai"
        description="Learn which vitamin and mineral deficiencies can cause hair loss, how to identify them, and what you can do to address nutritional gaps affecting your hair."
        canonicalUrl="https://haircare.ai/hair-nutrition/deficiencies"
        articleSchema={{
          headline: "Nutrient Deficiencies Linked to Hair Loss",
          description: "A comprehensive guide to understanding how nutritional deficiencies affect hair health and growth.",
          datePublished: "2025-06-28",
          dateModified: "2025-06-28"
        }}
        faqSchema={faqItems}
      />

      <article className="max-w-4xl mx-auto" itemScope itemType="https://schema.org/Article">
        <Breadcrumb items={[
          { label: "Hair Nutrition", href: "/hair-nutrition" },
          { label: "Nutrient Deficiencies" }
        ]} />

        <header className="mb-8">
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4" itemProp="headline">
            Nutrient Deficiencies Linked to Hair Loss
          </h1>
          <p className="text-lg text-muted-foreground">
            When essential nutrients are missing, hair is often one of the first places the body cuts back.
          </p>
        </header>

        <section className="prose prose-lg max-w-none mb-10">
          <p className="text-foreground leading-relaxed">
            Hair follicles are among the most rapidly dividing cells in the human body, requiring a constant supply of nutrients to function properly. When dietary intake falls short or absorption is impaired, the body prioritises vital organs over hair production. This can result in slowed growth, increased shedding, or changes in hair texture and appearance.
          </p>
          <p className="text-foreground leading-relaxed">
            While genetic and hormonal factors are the most common causes of hair loss, nutritional deficiencies represent a treatable and often reversible cause. Identifying and correcting these deficiencies can help restore hair to its healthiest state, though this requires proper diagnosis rather than guesswork with supplements.
          </p>
        </section>

        <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-10">
          <h2 className="font-heading text-xl font-semibold text-foreground mb-3">Quick Answer</h2>
          <p className="text-foreground">
            The nutrient deficiencies most commonly linked to hair loss include iron, zinc, biotin, vitamin D, and protein. Iron deficiency is particularly prevalent and can cause significant shedding even before clinical anaemia develops. Blood testing is essential to identify specific deficiencies before supplementing.
          </p>
        </div>

        <section className="mb-10">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
            How Nutrient Deficiencies Affect Hair
          </h2>
          <p className="text-foreground leading-relaxed mb-4">
            Hair follicles cycle through phases of growth, transition, and rest. Nutritional deficiencies can disrupt this cycle in several ways:
          </p>
          <ul className="list-disc list-inside space-y-2 text-foreground mb-4">
            <li>Pushing more hairs prematurely into the resting phase, leading to increased shedding</li>
            <li>Slowing the rate of hair production during the growth phase</li>
            <li>Weakening hair structure, causing brittleness and breakage</li>
            <li>Affecting hair pigmentation, potentially causing premature greying</li>
          </ul>
          <p className="text-foreground leading-relaxed">
            The type of hair change often depends on which nutrient is lacking and how severe the deficiency has become.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
            Iron Deficiency
          </h2>
          <p className="text-foreground leading-relaxed mb-4">
            Iron is critical for the production of haemoglobin, which carries oxygen to cells including hair follicles. Low iron is the most common nutritional deficiency worldwide and is particularly prevalent in women of reproductive age due to menstrual blood loss.
          </p>
          <div className="p-4 rounded-lg bg-card border border-border mb-4">
            <h3 className="font-semibold text-foreground mb-2">Signs of Iron Deficiency</h3>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Diffuse hair shedding rather than patchy loss</li>
              <li>Fatigue and weakness</li>
              <li>Pale skin and nail beds</li>
              <li>Shortness of breath during activity</li>
              <li>Brittle nails or spoon-shaped nails</li>
            </ul>
          </div>
          <p className="text-foreground leading-relaxed">
            Ferritin, the stored form of iron, is particularly important for hair. Some research suggests that ferritin levels below 70 micrograms per litre may be associated with hair shedding, even when not low enough to cause anaemia.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
            Zinc Deficiency
          </h2>
          <p className="text-foreground leading-relaxed mb-4">
            Zinc plays a role in hair tissue growth and repair, as well as keeping the oil glands around follicles functioning properly. Deficiency can cause hair loss, changes in hair texture, and slow regrowth.
          </p>
          <p className="text-foreground leading-relaxed mb-4">
            Those at higher risk of zinc deficiency include:
          </p>
          <ul className="list-disc list-inside space-y-2 text-foreground">
            <li>People with digestive disorders affecting absorption</li>
            <li>Those following strict vegetarian or vegan diets</li>
            <li>People with chronic kidney disease</li>
            <li>Heavy alcohol consumers</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
            Vitamin D Deficiency
          </h2>
          <p className="text-foreground leading-relaxed mb-4">
            Vitamin D receptors are present in hair follicles, and the vitamin appears to play a role in the hair growth cycle. Low vitamin D levels have been associated with several types of hair loss, including alopecia areata and telogen effluvium.
          </p>
          <p className="text-foreground leading-relaxed mb-4">
            Vitamin D deficiency is common, particularly in:
          </p>
          <ul className="list-disc list-inside space-y-2 text-foreground mb-4">
            <li>People living in northern latitudes with limited sun exposure</li>
            <li>Those who cover their skin or use high SPF sun protection consistently</li>
            <li>People with darker skin, as melanin reduces vitamin D synthesis</li>
            <li>Older adults, whose skin produces vitamin D less efficiently</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
            Biotin Deficiency
          </h2>
          <p className="text-foreground leading-relaxed mb-4">
            Biotin, also known as vitamin B7, is often marketed for hair health. While severe biotin deficiency can indeed cause hair loss, this deficiency is rare in people eating a varied diet because biotin is widely available in foods and also produced by gut bacteria.
          </p>
          <p className="text-foreground leading-relaxed mb-4">
            True biotin deficiency may occur in:
          </p>
          <ul className="list-disc list-inside space-y-2 text-foreground">
            <li>People taking certain anticonvulsant medications</li>
            <li>Those consuming large amounts of raw egg whites over extended periods</li>
            <li>People with rare genetic disorders affecting biotin metabolism</li>
            <li>Heavy alcohol consumers</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
            Protein Deficiency
          </h2>
          <p className="text-foreground leading-relaxed mb-4">
            Hair is primarily composed of a protein called keratin. Severe protein deficiency can cause hair to become brittle, thin, and prone to shedding. In extreme cases, hair may lose its pigmentation.
          </p>
          <p className="text-foreground leading-relaxed">
            Protein deficiency significant enough to affect hair is uncommon in developed countries but may occur with extremely restrictive diets, eating disorders, or malabsorption conditions.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
            Other Nutrients of Note
          </h2>
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-card border border-border">
              <h3 className="font-semibold text-foreground mb-2">Vitamin B12</h3>
              <p className="text-muted-foreground">
                Deficiency can cause hair loss along with fatigue and neurological symptoms. Those at risk include vegans, older adults, and people with pernicious anaemia or digestive conditions.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-card border border-border">
              <h3 className="font-semibold text-foreground mb-2">Vitamin A</h3>
              <p className="text-muted-foreground">
                Both deficiency and excess can cause hair loss. Vitamin A toxicity from over-supplementation is more common than deficiency in developed countries.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-card border border-border">
              <h3 className="font-semibold text-foreground mb-2">Essential Fatty Acids</h3>
              <p className="text-muted-foreground">
                Omega-3 and omega-6 fatty acid deficiency can lead to dry, dull hair and scalp issues, though severe deficiency is uncommon.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
            Common Myths About Deficiencies and Hair
          </h2>
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/20">
              <h3 className="font-semibold text-foreground mb-2">Myth: Everyone with hair loss should take supplements</h3>
              <p className="text-muted-foreground">
                Supplementing without a diagnosed deficiency is often ineffective and can sometimes be harmful. For example, excess vitamin A or selenium can actually cause hair loss.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/20">
              <h3 className="font-semibold text-foreground mb-2">Myth: Hair vitamins work for all types of hair loss</h3>
              <p className="text-muted-foreground">
                Hair supplements can only help if there is a genuine deficiency. They cannot treat genetic hair loss, hormonal hair loss, or autoimmune conditions.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
            When to Seek Professional Help
          </h2>
          <p className="text-foreground leading-relaxed mb-4">
            See a healthcare provider if:
          </p>
          <ul className="list-disc list-inside space-y-2 text-foreground mb-4">
            <li>You notice increased hair shedding or thinning</li>
            <li>You have symptoms suggesting deficiency such as fatigue or weakness</li>
            <li>You follow a restrictive diet</li>
            <li>You have a digestive condition that may affect nutrient absorption</li>
            <li>You are considering starting supplements for hair health</li>
          </ul>
          <p className="text-foreground leading-relaxed">
            A blood test panel can check iron levels, ferritin, vitamin D, B12, zinc, and thyroid function. This information allows for targeted treatment rather than guesswork.
          </p>
        </section>

        <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-10">
          <p className="text-foreground">
            HairCare AI can help personalise this further based on your hair type, scalp condition, and goals.
          </p>
        </div>

        <ArticleNavigation
          previous={{ href: "/hair-nutrition/best-foods", title: "Foods That Promote Healthy Hair" }}
          next={{ href: "/hair-nutrition/protein", title: "Protein Intake and Hair Health" }}
        />

        <RelatedArticles articles={relatedArticles} />
      </article>
    </ContentPageLayout>
  );
};

export default DeficienciesPage;
