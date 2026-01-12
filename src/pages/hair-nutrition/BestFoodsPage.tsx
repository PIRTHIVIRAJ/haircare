import SEOHead from "@/components/SEOHead";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleNavigation from "@/components/ArticleNavigation";
import RelatedArticles from "@/components/RelatedArticles";
import ContentPageLayout from "@/components/ContentPageLayout";

const faqItems = [
  {
    question: "Which food is best for hair growth?",
    answer: "No single food guarantees hair growth, but protein-rich foods like eggs, fish, and legumes provide the amino acids hair needs. Combining these with iron-rich leafy greens and vitamin C sources creates an optimal foundation for healthy hair."
  },
  {
    question: "Can diet alone fix hair loss?",
    answer: "Diet can support hair health and may help if hair loss is caused by nutritional deficiencies, but it cannot reverse genetic hair loss or conditions requiring medical treatment. A balanced diet works best alongside appropriate treatment."
  },
  {
    question: "How quickly can food changes improve hair?",
    answer: "Because hair grows slowly, dietary improvements typically take three to six months to show visible results in new hair growth. Consistency with nutritional changes is more important than any quick fix."
  }
];

const relatedArticles = [
  {
    title: "Nutrient Deficiencies Linked to Hair Loss",
    href: "/hair-nutrition/deficiencies",
    description: "Understanding which nutritional gaps can contribute to hair thinning and shedding."
  },
  {
    title: "Iron, Zinc, and Biotin Explained",
    href: "/hair-nutrition/key-nutrients",
    description: "A closer look at the minerals and vitamins most important for hair health."
  },
  {
    title: "Protein Intake and Hair Health",
    href: "/hair-nutrition/protein",
    description: "Why protein matters for hair structure and how much you actually need."
  }
];

const BestFoodsPage = () => {
  return (
    <ContentPageLayout>
      <SEOHead
        title="Foods That Promote Healthy Hair | Nutrition for Hair Growth - HairCare.ai"
        description="Discover which foods support healthy hair growth, from protein-rich options to vitamin-packed vegetables. Evidence-based dietary guidance for stronger hair."
        canonicalUrl="https://haircare.ai/hair-nutrition/best-foods"
        articleSchema={{
          headline: "Foods That Promote Healthy Hair",
          description: "A comprehensive guide to the best foods for supporting hair health, including proteins, vitamins, and minerals essential for growth.",
          datePublished: "2025-06-28",
          dateModified: "2025-06-28"
        }}
        faqSchema={faqItems}
      />

      <article className="max-w-4xl mx-auto" itemScope itemType="https://schema.org/Article">
        <Breadcrumb items={[
          { label: "Hair Nutrition", href: "/hair-nutrition" },
          { label: "Best Foods for Hair" }
        ]} />

        <header className="mb-8">
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4" itemProp="headline">
            Foods That Promote Healthy Hair
          </h1>
          <p className="text-lg text-muted-foreground">
            What you eat provides the raw materials your body uses to build and maintain hair.
          </p>
        </header>

        <section className="prose prose-lg max-w-none mb-10">
          <p className="text-foreground leading-relaxed">
            Hair is primarily made of a protein called keratin, and its growth depends on a steady supply of nutrients delivered through the bloodstream to hair follicles. While genetics play the dominant role in hair characteristics, nutrition provides the foundation that allows hair to reach its full potential. Poor dietary habits can contribute to hair that grows slowly, breaks easily, or appears dull and lifeless.
          </p>
          <p className="text-foreground leading-relaxed">
            Understanding which foods support hair health allows you to make informed dietary choices. This does not mean any single food will transform your hair overnight, but a consistently balanced diet rich in specific nutrients creates optimal conditions for healthy growth.
          </p>
        </section>

        <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-10">
          <h2 className="font-heading text-xl font-semibold text-foreground mb-3">Quick Answer</h2>
          <p className="text-foreground">
            The best foods for healthy hair include protein sources like eggs, fish, and legumes; iron-rich foods such as spinach and red meat; omega-3 fatty acids from oily fish and walnuts; and vitamin-rich fruits and vegetables. A varied diet that meets overall nutritional needs typically provides what hair requires for healthy growth.
          </p>
        </div>

        <section className="mb-10">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
            Why Nutrition Matters for Hair
          </h2>
          <p className="text-foreground leading-relaxed mb-4">
            Hair follicles are among the most metabolically active tissues in the body. They require a constant supply of energy and nutrients to produce new hair cells. When nutritional intake falls short, the body prioritises vital organs over hair, which can slow growth or trigger shedding.
          </p>
          <p className="text-foreground leading-relaxed mb-4">
            Key nutrients for hair include:
          </p>
          <ul className="list-disc list-inside space-y-2 text-foreground mb-4">
            <li><strong>Protein:</strong> The structural building block of hair</li>
            <li><strong>Iron:</strong> Helps red blood cells carry oxygen to follicles</li>
            <li><strong>Zinc:</strong> Supports hair tissue growth and repair</li>
            <li><strong>B vitamins:</strong> Aid in creating red blood cells and energy metabolism</li>
            <li><strong>Vitamin C:</strong> Assists iron absorption and collagen production</li>
            <li><strong>Vitamin D:</strong> May play a role in hair follicle cycling</li>
            <li><strong>Omega-3 fatty acids:</strong> Nourish hair and support scalp health</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
            Best Protein Sources for Hair
          </h2>
          <p className="text-foreground leading-relaxed mb-4">
            Since hair is approximately 80 to 85 percent protein, adequate protein intake is essential. Both animal and plant sources can provide what hair needs.
          </p>
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-card border border-border">
              <h3 className="font-semibold text-foreground mb-2">Eggs</h3>
              <p className="text-muted-foreground">
                Eggs provide complete protein along with biotin, a B vitamin associated with hair health. They also contain zinc and selenium, both important for hair growth.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-card border border-border">
              <h3 className="font-semibold text-foreground mb-2">Fish and Seafood</h3>
              <p className="text-muted-foreground">
                Fatty fish like salmon, mackerel, and sardines provide protein alongside omega-3 fatty acids, which may help reduce inflammation and support scalp health. Oysters are particularly high in zinc.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-card border border-border">
              <h3 className="font-semibold text-foreground mb-2">Lean Meats</h3>
              <p className="text-muted-foreground">
                Chicken, turkey, and lean beef provide high-quality protein and iron. Red meat in particular offers heme iron, which the body absorbs more efficiently than plant-based iron.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-card border border-border">
              <h3 className="font-semibold text-foreground mb-2">Legumes and Pulses</h3>
              <p className="text-muted-foreground">
                Beans, lentils, and chickpeas offer plant-based protein along with iron, zinc, and biotin. They are excellent options for vegetarian and vegan diets.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
            Iron-Rich Foods for Hair Health
          </h2>
          <p className="text-foreground leading-relaxed mb-4">
            Iron deficiency is one of the most common nutritional causes of hair loss, particularly in women. Including iron-rich foods in your diet supports oxygen delivery to hair follicles.
          </p>
          <ul className="list-disc list-inside space-y-2 text-foreground mb-4">
            <li>Spinach and other dark leafy greens</li>
            <li>Red meat and liver</li>
            <li>Fortified cereals and breads</li>
            <li>Tofu and tempeh</li>
            <li>Pumpkin seeds and quinoa</li>
          </ul>
          <p className="text-foreground leading-relaxed">
            Pairing iron-rich foods with vitamin C sources like citrus fruits, bell peppers, or tomatoes enhances iron absorption, particularly from plant sources.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
            Vitamins and Minerals from Fruits and Vegetables
          </h2>
          <p className="text-foreground leading-relaxed mb-4">
            A colourful variety of fruits and vegetables provides the vitamins and antioxidants that support overall health, including hair.
          </p>
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-card border border-border">
              <h3 className="font-semibold text-foreground mb-2">Vitamin C Sources</h3>
              <p className="text-muted-foreground">
                Citrus fruits, strawberries, kiwi, and bell peppers support collagen production and iron absorption. Collagen provides amino acids that can be used to build hair proteins.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-card border border-border">
              <h3 className="font-semibold text-foreground mb-2">Vitamin A Sources</h3>
              <p className="text-muted-foreground">
                Sweet potatoes, carrots, and pumpkin contain beta-carotene, which the body converts to vitamin A. This vitamin helps produce sebum, the natural oil that keeps hair moisturised.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-card border border-border">
              <h3 className="font-semibold text-foreground mb-2">Berries and Antioxidants</h3>
              <p className="text-muted-foreground">
                Blueberries, raspberries, and other berries contain antioxidants that may help protect hair follicles from damage caused by free radicals.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
            Healthy Fats for Hair
          </h2>
          <p className="text-foreground leading-relaxed mb-4">
            Omega-3 fatty acids support scalp health and may contribute to hair shine and flexibility. Good sources include:
          </p>
          <ul className="list-disc list-inside space-y-2 text-foreground mb-4">
            <li>Fatty fish like salmon, mackerel, and herring</li>
            <li>Walnuts and flaxseeds</li>
            <li>Chia seeds</li>
            <li>Avocados, which also provide vitamin E</li>
          </ul>
          <p className="text-foreground leading-relaxed">
            These fats are not just beneficial for hair but support overall cardiovascular and brain health as well.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
            Common Myths About Food and Hair
          </h2>
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/20">
              <h3 className="font-semibold text-foreground mb-2">Myth: Specific superfoods can cure hair loss</h3>
              <p className="text-muted-foreground">
                No single food can reverse genetic hair loss or treat medical conditions causing hair thinning. Foods support hair health as part of an overall balanced diet, not as miracle cures.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/20">
              <h3 className="font-semibold text-foreground mb-2">Myth: More biotin means faster hair growth</h3>
              <p className="text-muted-foreground">
                Biotin deficiency is rare in people eating a varied diet. Taking excess biotin supplements when you are not deficient has not been proven to accelerate hair growth.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/20">
              <h3 className="font-semibold text-foreground mb-2">Myth: Eating gelatin strengthens hair</h3>
              <p className="text-muted-foreground">
                While gelatin contains amino acids, there is limited evidence that consuming it specifically improves hair strength. A diet adequate in overall protein is more reliably beneficial.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
            Practical Dietary Tips
          </h2>
          <ul className="list-disc list-inside space-y-2 text-foreground">
            <li>Aim for protein at every meal to ensure consistent supply</li>
            <li>Include at least five portions of fruits and vegetables daily</li>
            <li>Choose whole grains over refined carbohydrates</li>
            <li>Eat oily fish at least twice per week or include plant-based omega-3 sources</li>
            <li>Stay hydrated, as water supports nutrient transport</li>
            <li>Avoid restrictive diets that eliminate entire food groups</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
            When to Seek Professional Help
          </h2>
          <p className="text-foreground leading-relaxed mb-4">
            Consult a healthcare provider or registered dietitian if:
          </p>
          <ul className="list-disc list-inside space-y-2 text-foreground mb-4">
            <li>You are experiencing significant hair loss despite eating well</li>
            <li>You follow a restrictive diet and are concerned about nutritional gaps</li>
            <li>You have symptoms suggesting deficiency, such as fatigue or brittle nails</li>
            <li>You are considering supplements and want guidance on what you actually need</li>
          </ul>
          <p className="text-foreground leading-relaxed">
            Blood tests can identify specific deficiencies, allowing for targeted dietary changes or appropriate supplementation.
          </p>
        </section>

        <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-10">
          <p className="text-foreground">
            HairCare AI can help personalise this further based on your hair type, scalp condition, and goals.
          </p>
        </div>

        <ArticleNavigation
          previous={{ href: "/hair-nutrition", title: "Hair Nutrition Overview" }}
          next={{ href: "/hair-nutrition/deficiencies", title: "Nutrient Deficiencies Linked to Hair Loss" }}
        />

        <RelatedArticles articles={relatedArticles} />
      </article>
    </ContentPageLayout>
  );
};

export default BestFoodsPage;
