import SEOHead from "@/components/SEOHead";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleNavigation from "@/components/ArticleNavigation";
import RelatedArticles from "@/components/RelatedArticles";
import ContentPageLayout from "@/components/ContentPageLayout";

const faqItems = [
  {
    question: "Does hypothyroidism or hyperthyroidism cause worse hair loss?",
    answer: "Both conditions can cause hair loss, but hypothyroidism more commonly leads to noticeable thinning because the slowed metabolism affects hair follicle activity more directly. The severity depends on how long the condition goes untreated."
  },
  {
    question: "Will my hair grow back after thyroid treatment?",
    answer: "Yes, hair typically begins to recover once thyroid levels stabilize with treatment. Full regrowth may take six to twelve months, and some changes like texture alterations may take longer to resolve."
  },
  {
    question: "Can thyroid medication cause hair loss?",
    answer: "Some people experience temporary increased shedding when starting thyroid medication, but this usually resolves within a few months as levels stabilize. The medication itself is not causing permanent hair loss."
  }
];

const relatedArticles = [
  {
    title: "Iron Deficiency and Hair Loss",
    href: "/womens-hair/iron-deficiency",
    description: "How low iron levels affect hair health and the connection between ferritin and hair shedding."
  },
  {
    title: "Hormonal Hair Loss Treatments",
    href: "/womens-hair/hormonal-hair-loss",
    description: "Evidence-based treatments for hormone-related hair thinning in women."
  },
  {
    title: "When Women Should Seek Medical Help",
    href: "/womens-hair/when-to-seek-help",
    description: "Warning signs that indicate you should consult a healthcare provider about hair loss."
  }
];

const ThyroidPage = () => {
  return (
    <ContentPageLayout>
      <SEOHead
        title="Thyroid Problems and Hair Thinning | Thyroid Hair Loss Guide - HairCare.ai"
        description="Understand how thyroid disorders cause hair loss, recognize the signs, and learn what treatments can restore healthy hair growth when thyroid function is compromised."
        canonicalUrl="https://haircare.ai/womens-hair/thyroid"
        articleSchema={{
          headline: "Thyroid Problems and Hair Thinning: Understanding the Connection",
          description: "A comprehensive guide to thyroid-related hair loss, including how thyroid disorders affect hair, diagnosis, and recovery expectations with treatment.",
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
            { label: "Thyroid" }
          ]}
        />

        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Thyroid Problems and Hair Thinning: Understanding the Connection
          </h1>
          <p className="text-lg text-muted-foreground">
            Thyroid disorders are common, affecting an estimated one in eight women at some point in their lives. Because thyroid hormones regulate metabolism throughout the body, including in hair follicles, thyroid dysfunction frequently manifests as changes in hair growth, texture, and thickness.
          </p>
        </header>

        <div className="bg-primary/5 border border-primary/10 rounded-lg p-6 mb-8">
          <h2 className="text-lg font-semibold text-foreground mb-2">Quick Answer</h2>
          <p className="text-muted-foreground">
            Both underactive and overactive thyroid conditions can cause diffuse hair thinning by disrupting the hair growth cycle. Hair loss typically improves after thyroid levels are normalized with treatment, though recovery may take several months as the hair cycle resets.
          </p>
        </div>

        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-foreground">How the Thyroid Affects Hair</h2>
            <p className="text-muted-foreground">
              The thyroid gland produces hormones that regulate metabolism in virtually every cell of the body, including those in hair follicles. Thyroid hormones influence the rate at which cells divide and how quickly the hair growth cycle progresses.
            </p>
            <p className="text-muted-foreground">
              In hypothyroidism, when the thyroid produces insufficient hormones, cellular processes slow down. Hair follicles may remain in the resting phase longer than normal, leading to less active growth and more shedding. The result is often diffuse thinning across the entire scalp rather than patterned loss.
            </p>
            <p className="text-muted-foreground">
              In hyperthyroidism, excessive thyroid hormones speed up metabolism. While this might seem like it would benefit hair, the accelerated cycle actually causes hairs to progress through their growth phase too quickly and shed prematurely. Additionally, the nutritional demands of a revved-up metabolism may outpace intake, affecting hair health.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">Recognizing Thyroid-Related Hair Changes</h2>
            <p className="text-muted-foreground">
              Thyroid-related hair loss has certain characteristics that may help distinguish it from other causes:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li><strong>Diffuse pattern:</strong> Thinning typically occurs evenly across the scalp rather than in specific areas</li>
              <li><strong>Texture changes:</strong> Hair may become dry, coarse, and brittle with hypothyroidism, or fine and limp with hyperthyroidism</li>
              <li><strong>Slow growth:</strong> Hair may seem to grow more slowly than before</li>
              <li><strong>Eyebrow thinning:</strong> Notably, the outer third of the eyebrows often thins with hypothyroidism</li>
              <li><strong>Body hair changes:</strong> Similar changes may occur in body hair, though this is less commonly noticed</li>
            </ul>

            <h3 className="text-xl font-medium text-foreground mt-6">Hypothyroidism Symptoms</h3>
            <p className="text-muted-foreground">
              Hair changes typically occur alongside other symptoms of an underactive thyroid:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Fatigue and sluggishness</li>
              <li>Weight gain despite unchanged diet</li>
              <li>Cold intolerance</li>
              <li>Dry skin</li>
              <li>Constipation</li>
              <li>Depression or low mood</li>
              <li>Heavy or irregular periods</li>
              <li>Muscle weakness or joint pain</li>
            </ul>

            <h3 className="text-xl font-medium text-foreground mt-6">Hyperthyroidism Symptoms</h3>
            <p className="text-muted-foreground">
              An overactive thyroid presents differently:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Unexplained weight loss</li>
              <li>Rapid or irregular heartbeat</li>
              <li>Heat intolerance and increased sweating</li>
              <li>Anxiety and irritability</li>
              <li>Trembling hands</li>
              <li>Lighter or irregular periods</li>
              <li>Difficulty sleeping</li>
              <li>Bulging eyes in some cases</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">Diagnosis and Testing</h2>
            <p className="text-muted-foreground">
              If thyroid dysfunction is suspected, blood tests can confirm the diagnosis. The primary tests include:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li><strong>TSH (Thyroid Stimulating Hormone):</strong> The most sensitive initial screening test. Elevated TSH suggests hypothyroidism, while low TSH suggests hyperthyroidism</li>
              <li><strong>Free T4:</strong> Measures the active form of thyroid hormone. Low levels confirm hypothyroidism when TSH is elevated</li>
              <li><strong>Free T3:</strong> Another active thyroid hormone that may be measured in certain situations</li>
              <li><strong>Thyroid antibodies:</strong> May be tested to identify autoimmune thyroid conditions like Hashimoto's thyroiditis or Graves' disease</li>
            </ul>
            <p className="text-muted-foreground">
              Because thyroid disease is so common in women and can develop gradually, routine screening is often recommended, particularly for women over 35, those with a family history of thyroid disease, or those with symptoms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">Treatment and Hair Recovery</h2>
            
            <h3 className="text-xl font-medium text-foreground mt-6">Treating Hypothyroidism</h3>
            <p className="text-muted-foreground">
              Treatment involves replacing deficient thyroid hormone, typically with levothyroxine, a synthetic version of T4. Finding the optimal dose may require several adjustments over weeks to months, guided by repeated blood tests.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-6">Treating Hyperthyroidism</h3>
            <p className="text-muted-foreground">
              Several treatment options exist for overactive thyroid, including anti-thyroid medications that reduce hormone production, radioactive iodine that decreases thyroid function, or in some cases, surgical removal of part or all of the thyroid gland.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-6">What to Expect for Hair</h3>
            <p className="text-muted-foreground">
              Hair recovery typically follows thyroid hormone normalization, but patience is required. The hair growth cycle takes time to reset, and visible improvement may not occur for several months after treatment begins. Many people notice:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Reduced shedding within two to three months of starting treatment</li>
              <li>Visible regrowth beginning around three to six months</li>
              <li>Improved texture and quality as new hairs grow in</li>
              <li>Full recovery potentially taking up to a year</li>
            </ul>
            <p className="text-muted-foreground">
              Some individuals experience temporary increased shedding when first starting thyroid medication. This is usually the hair cycle resynchronizing and should resolve within a few months.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">Common Myths About Thyroid and Hair</h2>
            <p className="text-muted-foreground">
              Misconceptions about thyroid disease and hair can cause unnecessary concern or delays in seeking help:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li><strong>Myth: If my TSH is normal, my thyroid is not causing my hair loss.</strong> Sometimes hair loss occurs at thyroid levels considered technically normal but suboptimal for that individual. Symptoms matter alongside numbers.</li>
              <li><strong>Myth: Thyroid medication causes permanent hair loss.</strong> Properly dosed thyroid medication supports hair health. Temporary shedding when starting treatment is not permanent.</li>
              <li><strong>Myth: Only severe thyroid problems affect hair.</strong> Even mild thyroid dysfunction can impact hair, though more subtle effects may not be immediately recognized.</li>
              <li><strong>Myth: Hair should improve immediately when starting treatment.</strong> The hair cycle takes time. Improvement is gradual over months, not immediate.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">When to Seek Professional Help</h2>
            <p className="text-muted-foreground">
              Given how common thyroid problems are in women and their impact on hair, screening is worthwhile when experiencing unexplained hair changes. Seek evaluation if you notice:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Diffuse hair thinning without obvious cause</li>
              <li>Changes in hair texture alongside thinning</li>
              <li>Eyebrow thinning, particularly the outer portion</li>
              <li>Hair loss accompanied by symptoms suggesting thyroid dysfunction</li>
              <li>Family history of thyroid disease</li>
              <li>Previous thyroid problems, even if previously treated</li>
            </ul>
            <p className="text-muted-foreground">
              A simple blood test can identify or rule out thyroid problems, making it an important early step in evaluating hair loss in women.
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
            title: "Iron Deficiency and Hair Loss",
            href: "/womens-hair/iron-deficiency"
          }}
          next={{
            title: "Birth Control and Hair Changes",
            href: "/womens-hair/birth-control"
          }}
        />
      </article>
    </ContentPageLayout>
  );
};

export default ThyroidPage;
