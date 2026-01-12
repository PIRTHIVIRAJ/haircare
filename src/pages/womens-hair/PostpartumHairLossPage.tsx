import SEOHead from "@/components/SEOHead";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleNavigation from "@/components/ArticleNavigation";
import RelatedArticles from "@/components/RelatedArticles";
import ContentPageLayout from "@/components/ContentPageLayout";

const faqItems = [
  {
    question: "How long does postpartum hair loss last?",
    answer: "Postpartum hair loss typically begins around three months after delivery and resolves within six to twelve months as hormone levels stabilize and the hair growth cycle returns to normal."
  },
  {
    question: "Is postpartum hair loss preventable?",
    answer: "Postpartum hair loss cannot be prevented as it is a normal physiological response to hormonal changes, but maintaining good nutrition and gentle hair care can support healthy regrowth."
  },
  {
    question: "Should I take supplements for postpartum hair loss?",
    answer: "Supplements are generally not necessary for postpartum hair loss unless you have a diagnosed deficiency. Consult your doctor before starting any supplements, especially while breastfeeding."
  }
];

const relatedArticles = [
  {
    title: "Postpartum Hair Shedding Explained",
    href: "/womens-hair/pregnancy-changes",
    description: "Understanding the science behind pregnancy-related hair changes and what to expect during each trimester."
  },
  {
    title: "Iron Deficiency and Hair Loss",
    href: "/womens-hair/iron-deficiency",
    description: "How low iron levels affect hair health and the connection between ferritin and hair shedding."
  },
  {
    title: "Hormonal Hair Loss Treatments",
    href: "/womens-hair/hormonal-hair-loss",
    description: "Evidence-based treatments for hormone-related hair thinning in women."
  }
];

const PostpartumHairLossPage = () => {
  return (
    <ContentPageLayout>
      <SEOHead
        title="Hair Loss After Pregnancy | Postpartum Shedding Guide - HairCare.ai"
        description="Understand why hair loss occurs after pregnancy, how long it lasts, and what you can do to support healthy regrowth during the postpartum period."
        canonicalUrl="https://haircare.ai/womens-hair/postpartum-hair-loss"
        articleSchema={{
          headline: "Hair Loss After Pregnancy: Understanding Postpartum Shedding",
          description: "A comprehensive guide to postpartum hair loss, including causes, timeline, and practical strategies for supporting hair health during recovery.",
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
            { label: "Postpartum Hair Loss" }
          ]}
        />

        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Hair Loss After Pregnancy: Understanding Postpartum Shedding
          </h1>
          <p className="text-lg text-muted-foreground">
            Postpartum hair loss affects the majority of new mothers, typically beginning around three months after delivery. While seeing clumps of hair in your brush can be alarming, this temporary shedding is a normal part of the body's adjustment following childbirth.
          </p>
        </header>

        <div className="bg-primary/5 border border-primary/10 rounded-lg p-6 mb-8">
          <h2 className="text-lg font-semibold text-foreground mb-2">Quick Answer</h2>
          <p className="text-muted-foreground">
            Postpartum hair loss is a normal, temporary condition caused by falling estrogen levels after pregnancy. Most women notice increased shedding around three months postpartum, with hair typically returning to its pre-pregnancy state within six to twelve months without treatment.
          </p>
        </div>

        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-foreground">Why Hair Falls Out After Pregnancy</h2>
            <p className="text-muted-foreground">
              During pregnancy, elevated estrogen levels prolong the growth phase of the hair cycle, meaning fewer hairs enter the shedding phase. This is why many women enjoy thicker, fuller hair during pregnancy. After delivery, estrogen levels drop rapidly, and all the hairs that were held in the growth phase transition to the shedding phase simultaneously.
            </p>
            <p className="text-muted-foreground">
              This synchronized shedding creates the appearance of dramatic hair loss, though in reality, the body is simply releasing hair that would have shed gradually over the previous months. The scientific term for this condition is telogen effluvium, and pregnancy is one of the most common triggers.
            </p>
            <p className="text-muted-foreground">
              The timing of postpartum hair loss typically follows a predictable pattern. Hair begins to shed around two to four months after delivery, peaks around four to six months, and gradually diminishes thereafter. By the time your baby reaches their first birthday, most mothers find their hair has returned to its pre-pregnancy thickness.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">What Normal Postpartum Shedding Looks Like</h2>
            <p className="text-muted-foreground">
              Understanding what constitutes normal postpartum shedding can help alleviate anxiety during this period. While losing up to 100 hairs per day is considered normal outside of pregnancy, postpartum women may lose significantly more, sometimes up to 300 or 400 hairs daily.
            </p>
            <p className="text-muted-foreground">
              You may notice increased hair in your brush, on your pillow, or accumulating in the shower drain. Some women notice their hairline appearing thinner, particularly around the temples. These changes can be distressing, but they are typically temporary and do not indicate a permanent condition.
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Increased hair in brushes and combs after styling</li>
              <li>More hair collecting in the shower drain</li>
              <li>Noticeable hair on pillows and clothing</li>
              <li>Temporary thinning around the temples and hairline</li>
              <li>Hair feeling less voluminous than during pregnancy</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">Supporting Hair Health During Recovery</h2>
            <p className="text-muted-foreground">
              While postpartum hair loss cannot be prevented, there are practical steps you can take to support your hair health during recovery and minimize breakage that could worsen the appearance of thinning.
            </p>
            
            <h3 className="text-xl font-medium text-foreground mt-6">Nutritional Considerations</h3>
            <p className="text-muted-foreground">
              Maintaining adequate nutrition is essential during the postpartum period, particularly if you are breastfeeding. Focus on a balanced diet rich in protein, iron, zinc, and B vitamins, all of which play important roles in hair growth. If you suspect a nutritional deficiency, speak with your healthcare provider about appropriate testing before starting supplements.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-6">Gentle Hair Care Practices</h3>
            <p className="text-muted-foreground">
              Treating your hair gently during this period can help minimize breakage. Avoid tight hairstyles that pull on the hairline, limit heat styling, and use a wide-toothed comb to detangle wet hair. Consider volumizing products to add body while you wait for regrowth.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-6">Managing Appearance</h3>
            <p className="text-muted-foreground">
              Some women find that adjusting their hairstyle helps them feel more confident during the shedding phase. A shorter cut can make thinning less noticeable, while layers can add the appearance of volume. Discuss options with your hairstylist, who may have experience helping clients through postpartum changes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">Common Myths About Postpartum Hair Loss</h2>
            <p className="text-muted-foreground">
              Misconceptions about postpartum hair loss can lead to unnecessary worry or inappropriate treatments. Understanding the facts can help you navigate this period with realistic expectations.
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li><strong>Myth: Breastfeeding causes more hair loss.</strong> Research does not support a direct connection between breastfeeding and increased shedding. Hormonal changes occur regardless of feeding method.</li>
              <li><strong>Myth: Special shampoos can stop the shedding.</strong> No topical product can prevent the natural hormonal process causing postpartum shedding, though gentle products can minimize breakage.</li>
              <li><strong>Myth: Hair loss means permanent thinning.</strong> Postpartum hair loss is almost always temporary, with full recovery expected within a year for most women.</li>
              <li><strong>Myth: Taking prenatal vitamins postpartum prevents shedding.</strong> While good nutrition supports overall health, vitamins cannot prevent hormonally-driven shedding.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">When to Seek Professional Help</h2>
            <p className="text-muted-foreground">
              While postpartum hair loss is normal, certain situations warrant medical evaluation. Schedule an appointment with your healthcare provider if you experience any of the following:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Hair loss that continues beyond twelve months postpartum</li>
              <li>Patchy bald spots rather than overall thinning</li>
              <li>Scalp symptoms such as itching, burning, or redness</li>
              <li>Other symptoms suggesting thyroid dysfunction, such as fatigue or weight changes</li>
              <li>Hair loss that seems disproportionate or leaves visible scalp</li>
            </ul>
            <p className="text-muted-foreground">
              Your doctor may check for underlying conditions that can mimic or exacerbate postpartum shedding, including thyroid disorders, iron deficiency anemia, or other hormonal imbalances. These conditions are treatable once identified.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">The Emotional Impact of Postpartum Hair Loss</h2>
            <p className="text-muted-foreground">
              Beyond the physical changes, postpartum hair loss can affect emotional wellbeing during an already challenging period. Many new mothers report feeling distressed by changes to their appearance, particularly when combined with other postpartum body changes and the demands of caring for a newborn.
            </p>
            <p className="text-muted-foreground">
              If hair loss is causing significant distress, speaking with a healthcare provider or counselor can be helpful. Remember that this is a temporary phase, and connecting with other mothers who have experienced similar changes can provide reassurance and practical tips for coping.
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
            title: "Women's Hair Health",
            href: "/womens-hair"
          }}
          next={{
            title: "Pregnancy Hair Changes",
            href: "/womens-hair/pregnancy-changes"
          }}
        />
      </article>
    </ContentPageLayout>
  );
};

export default PostpartumHairLossPage;
