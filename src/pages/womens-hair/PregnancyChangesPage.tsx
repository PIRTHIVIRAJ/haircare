import SEOHead from "@/components/SEOHead";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleNavigation from "@/components/ArticleNavigation";
import RelatedArticles from "@/components/RelatedArticles";
import ContentPageLayout from "@/components/ContentPageLayout";

const faqItems = [
  {
    question: "Why is my hair thicker during pregnancy?",
    answer: "Elevated estrogen levels during pregnancy prolong the hair growth phase, reducing normal daily shedding and making hair appear thicker and fuller."
  },
  {
    question: "Will my hair go back to normal after pregnancy?",
    answer: "Yes, hair typically returns to its pre-pregnancy state within six to twelve months after delivery as hormone levels stabilize and the hair growth cycle normalizes."
  },
  {
    question: "Can pregnancy change my hair texture permanently?",
    answer: "While most hair changes during pregnancy are temporary, some women do notice lasting changes to texture or curl pattern, possibly related to hormonal shifts affecting hair follicles."
  }
];

const relatedArticles = [
  {
    title: "Hair Loss After Pregnancy",
    href: "/womens-hair/postpartum-hair-loss",
    description: "What causes postpartum shedding and how long it lasts after delivery."
  },
  {
    title: "Hormonal Hair Loss Treatments",
    href: "/womens-hair/hormonal-hair-loss",
    description: "Evidence-based treatments for hormone-related hair thinning in women."
  },
  {
    title: "Hair Changes During Menopause",
    href: "/womens-hair/menopause",
    description: "How declining estrogen affects hair density and texture during menopause."
  }
];

const PregnancyChangesPage = () => {
  return (
    <ContentPageLayout>
      <SEOHead
        title="Postpartum Hair Shedding Explained | Pregnancy Hair Changes - HairCare.ai"
        description="Learn how pregnancy affects hair growth, why postpartum shedding occurs, and what changes to expect during and after pregnancy."
        canonicalUrl="https://haircare.ai/womens-hair/pregnancy-changes"
        articleSchema={{
          headline: "Postpartum Hair Shedding Explained: Understanding Pregnancy Hair Changes",
          description: "A comprehensive guide to how pregnancy hormones affect hair growth and what to expect during the postpartum shedding phase.",
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
            { label: "Pregnancy Changes" }
          ]}
        />

        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Postpartum Hair Shedding Explained: Understanding Pregnancy Hair Changes
          </h1>
          <p className="text-lg text-muted-foreground">
            Pregnancy triggers remarkable changes throughout the body, and hair is no exception. From the luscious locks many women enjoy during pregnancy to the concerning shedding that often follows delivery, understanding these changes can help you navigate this transformative period with confidence.
          </p>
        </header>

        <div className="bg-primary/5 border border-primary/10 rounded-lg p-6 mb-8">
          <h2 className="text-lg font-semibold text-foreground mb-2">Quick Answer</h2>
          <p className="text-muted-foreground">
            Pregnancy hormones, particularly estrogen, extend the hair growth phase, resulting in thicker hair during pregnancy. After delivery, falling hormone levels trigger synchronized shedding called telogen effluvium, which typically resolves within six to twelve months.
          </p>
        </div>

        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-foreground">How Pregnancy Affects the Hair Growth Cycle</h2>
            <p className="text-muted-foreground">
              To understand pregnancy-related hair changes, it helps to know how hair normally grows. Each hair follicle cycles independently through three phases: anagen (active growth lasting two to seven years), catagen (transition lasting about two weeks), and telogen (resting phase lasting approximately three months before the hair sheds).
            </p>
            <p className="text-muted-foreground">
              At any given time, about 85 to 90 percent of your hair is in the growth phase, while 10 to 15 percent is in the resting or shedding phase. This staggered cycling means you typically lose 50 to 100 hairs daily without noticing significant thinning.
            </p>
            <p className="text-muted-foreground">
              During pregnancy, elevated estrogen levels disrupt this normal cycle by prolonging the anagen phase. Fewer hairs transition to the resting phase, which means fewer hairs shed. The result is a gradual accumulation of hair, often noticed as increased thickness and volume, particularly in the second and third trimesters.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">Common Hair Changes During Pregnancy</h2>
            <p className="text-muted-foreground">
              While increased thickness is the most commonly reported change, pregnancy can affect hair in various ways. Understanding these changes can help you adapt your hair care routine and set realistic expectations.
            </p>
            
            <h3 className="text-xl font-medium text-foreground mt-6">Increased Volume and Thickness</h3>
            <p className="text-muted-foreground">
              The reduced shedding during pregnancy creates the appearance of thicker, more voluminous hair. This is not because individual hairs are thicker, but because more hairs remain on your head at any given time. Many women describe this as their best hair ever, though the effect varies considerably between individuals.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-6">Texture Changes</h3>
            <p className="text-muted-foreground">
              Some women notice changes to their hair texture during pregnancy. Straight hair may develop waves, curly hair may relax somewhat, or hair may become dryer or oilier than usual. These changes relate to hormonal effects on the hair follicle and oil glands.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-6">Increased Body Hair</h3>
            <p className="text-muted-foreground">
              Pregnancy hormones can also stimulate hair growth in areas where hair is normally fine or sparse, such as the face, chest, abdomen, or arms. This hirsutism is temporary for most women and resolves after delivery.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-6">Scalp Changes</h3>
            <p className="text-muted-foreground">
              The scalp may become oilier or dryer during pregnancy, requiring adjustments to your shampooing routine. Some women also notice increased sensitivity to hair products they previously tolerated well.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">The Science of Postpartum Shedding</h2>
            <p className="text-muted-foreground">
              After delivery, estrogen levels plummet rapidly, sometimes dropping within 24 hours to pre-pregnancy levels. This sudden hormonal shift signals all the hairs that were held in the growth phase to simultaneously enter the resting phase and eventually shed.
            </p>
            <p className="text-muted-foreground">
              Because it takes approximately three months for telogen hairs to actually fall out, most women notice the onset of postpartum shedding around two to four months after delivery. This timing surprises many new mothers who may have assumed their pregnancy hair would last indefinitely.
            </p>
            <p className="text-muted-foreground">
              The shedding can appear dramatic because so many hairs are lost simultaneously rather than gradually. However, it is important to understand that you are not actually losing more hair than you would have over the course of your pregnancy, it is simply being released all at once.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">Managing Hair During Pregnancy</h2>
            <p className="text-muted-foreground">
              Caring for your hair during pregnancy may require some adjustments to your usual routine. Here are practical considerations for each trimester and beyond.
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li><strong>Hair coloring:</strong> Many healthcare providers consider hair dye safe after the first trimester, but some women prefer to avoid chemical treatments. Discuss any concerns with your provider.</li>
              <li><strong>Product choices:</strong> Some women develop sensitivities to fragrances or ingredients during pregnancy. Switching to gentle, fragrance-free products may be helpful.</li>
              <li><strong>Styling considerations:</strong> Take advantage of your fuller hair with styles that showcase volume, while being gentle to minimize breakage.</li>
              <li><strong>Nutrition:</strong> Ensure adequate protein and nutrient intake to support healthy hair growth, particularly if experiencing morning sickness that limits your diet.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">Common Myths About Pregnancy Hair Changes</h2>
            <p className="text-muted-foreground">
              Numerous misconceptions surround pregnancy and hair. Separating fact from fiction can help you make informed decisions about your hair care.
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li><strong>Myth: Pregnancy permanently changes hair texture.</strong> While some women report lasting changes, most find their hair returns to its pre-pregnancy state within a year of delivery.</li>
              <li><strong>Myth: Cutting hair during pregnancy makes it grow back thicker.</strong> Hair thickness is determined at the follicle level, not by cutting. Your hair will not grow back thicker after a trim.</li>
              <li><strong>Myth: The baby's gender affects hair changes.</strong> There is no scientific evidence that carrying a boy versus a girl affects hair growth or texture differently.</li>
              <li><strong>Myth: All women experience better hair during pregnancy.</strong> Hair changes vary significantly between individuals and even between pregnancies in the same woman.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">When to Seek Professional Help</h2>
            <p className="text-muted-foreground">
              While most pregnancy-related hair changes are normal, certain symptoms warrant medical evaluation:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Significant hair loss during pregnancy rather than after delivery</li>
              <li>Patchy bald spots at any time during or after pregnancy</li>
              <li>Scalp symptoms including itching, pain, or redness</li>
              <li>Hair loss accompanied by other symptoms such as fatigue, weight changes, or mood disturbances</li>
              <li>Postpartum shedding that continues beyond twelve months</li>
            </ul>
            <p className="text-muted-foreground">
              These symptoms could indicate conditions such as thyroid dysfunction, iron deficiency, or other hormonal imbalances that require treatment. Early evaluation ensures appropriate management.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">Preparing for Postpartum Changes</h2>
            <p className="text-muted-foreground">
              Knowing that postpartum shedding is coming can help you prepare both practically and emotionally. Consider having your hair cut into a style that will look good even if it thins temporarily. Stock up on gentle hair care products and wide-toothed combs. Most importantly, remind yourself that this phase is temporary and that your hair will recover.
            </p>
            <p className="text-muted-foreground">
              Some women find it helpful to take photos of their hair during pregnancy as a reminder that any perceived thinning after delivery is relative to an unusually full period. Connecting with other mothers who have experienced similar changes can provide reassurance and practical tips.
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
            title: "Postpartum Hair Loss",
            href: "/womens-hair/postpartum-hair-loss"
          }}
          next={{
            title: "Hair Loss and PCOS",
            href: "/womens-hair/pcos-hair-loss"
          }}
        />
      </article>
    </ContentPageLayout>
  );
};

export default PregnancyChangesPage;
