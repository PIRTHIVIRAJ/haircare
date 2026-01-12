import SEOHead from "@/components/SEOHead";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleNavigation from "@/components/ArticleNavigation";
import RelatedArticles from "@/components/RelatedArticles";
import ContentPageLayout from "@/components/ContentPageLayout";

const faqItems = [
  {
    question: "How much hair loss is normal at 30?",
    answer: "At 30, losing 50 to 100 hairs daily remains normal. However, some men and women may notice early signs of pattern hair loss by this age. Gradual thinning at the temples or crown may indicate androgenetic alopecia rather than normal shedding."
  },
  {
    question: "Is it normal to lose more hair as you get older?",
    answer: "Yes, hair density naturally decreases with age. Hair growth slows, individual strands become finer, and the growth phase shortens. This is distinct from pathological hair loss but means some reduction is expected."
  },
  {
    question: "When should I worry about hair shedding?",
    answer: "Worry is warranted if shedding increases dramatically over a short period, creates visible thinning or bald patches, follows a distinct pattern, or is accompanied by scalp symptoms like itching, pain, or redness."
  }
];

const relatedArticles = [
  {
    title: "When Is Hair Shedding Normal?",
    href: "/hair-faqs/normal-shedding",
    description: "Understanding the difference between normal and excessive shedding."
  },
  {
    title: "Aging Hair: What Changes Over Time",
    href: "/hair-types/aging-hair",
    description: "How hair naturally evolves as we age."
  },
  {
    title: "Is Hair Loss Normal with Aging?",
    href: "/hair-faqs/aging-hair-loss",
    description: "What to expect as part of natural aging versus hair loss conditions."
  }
];

const NormalForAgePage = () => {
  return (
    <ContentPageLayout>
      <SEOHead
        title="Is My Hair Shedding Normal for My Age? | Hair Loss Decisions - HairCare.ai"
        description="Learn what constitutes normal hair shedding at different ages. Understand age-related hair changes and when shedding becomes a concern worth investigating."
        canonicalUrl="https://haircare.ai/hair-loss-decisions/normal-for-age"
        articleSchema={{
          headline: "Is My Hair Shedding Normal for My Age?",
          description: "Understanding normal hair shedding patterns across different life stages.",
          datePublished: "2025-06-28",
          dateModified: "2025-06-28"
        }}
        faqSchema={faqItems}
      />

      <article className="max-w-4xl mx-auto" itemScope itemType="https://schema.org/Article">
        <Breadcrumb items={[
          { label: "Hair Loss Decisions", href: "/hair-loss-decisions" },
          { label: "Normal for Age" }
        ]} />

        <header className="mb-8">
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4" itemProp="headline">
            Is My Hair Shedding Normal for My Age?
          </h1>
          <p className="text-lg text-muted-foreground">
            Understanding what to expect at different life stages.
          </p>
        </header>

        <section className="prose prose-lg max-w-none mb-10">
          <p className="text-foreground leading-relaxed">
            Concerns about hair shedding often include the question of whether what you are experiencing is simply a normal part of aging or something that requires attention. Hair naturally changes throughout life, and understanding these changes helps you distinguish between normal evolution and genuine hair loss conditions that may benefit from treatment.
          </p>
          <p className="text-foreground leading-relaxed">
            The reality is that some degree of change in hair density, texture, and shedding patterns is expected as we age. However, this does not mean all hair loss should be attributed to aging or that significant thinning should be dismissed as inevitable.
          </p>
        </section>

        <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-10">
          <h2 className="font-heading text-xl font-semibold text-foreground mb-3">Quick Answer</h2>
          <p className="text-foreground">
            Losing 50 to 100 hairs daily is normal at any age. What changes with age is hair density, thickness of individual strands, and growth rate. Sudden increases in shedding, patterned thinning, or visible scalp at younger ages typically warrants investigation regardless of age, as these suggest conditions beyond normal aging.
          </p>
        </div>

        <section className="mb-10">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
            Normal Hair Shedding at Any Age
          </h2>
          <p className="text-foreground leading-relaxed mb-4">
            Before examining age-specific patterns, it helps to understand what constitutes normal shedding across all ages:
          </p>
          <ul className="list-disc list-inside space-y-2 text-foreground mb-4">
            <li>Losing 50 to 100 hairs daily is typical and reflects the normal hair growth cycle</li>
            <li>Each hair goes through growth, rest, and shedding phases independently</li>
            <li>Approximately 10 to 15 percent of hair is in the shedding phase at any time</li>
            <li>Shedding may seem greater on wash days because loose hairs accumulate</li>
            <li>Seasonal variations can cause temporary increases in shedding for some people</li>
          </ul>
          <p className="text-foreground leading-relaxed">
            If your shedding stays within these parameters and your overall hair density appears stable, your shedding is likely normal regardless of your age.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
            Hair in Your Teens and Twenties
          </h2>
          <p className="text-foreground leading-relaxed mb-4">
            Hair is typically at its thickest and most robust during these years. However, hair concerns can still arise:
          </p>
          <ul className="list-disc list-inside space-y-2 text-foreground mb-4">
            <li>Male pattern baldness can begin in the late teens, though this is less common</li>
            <li>Hormonal changes during puberty and early adulthood can affect hair</li>
            <li>Stress from education or career pressures may trigger temporary shedding</li>
            <li>Nutritional habits, including restrictive dieting, can cause hair changes</li>
            <li>Hair damage from styling and heat tools may cause breakage that mimics shedding</li>
          </ul>
          <p className="text-foreground leading-relaxed">
            Significant hair loss in your teens or twenties is not a normal part of this life stage and warrants investigation for underlying causes.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
            Hair in Your Thirties
          </h2>
          <p className="text-foreground leading-relaxed mb-4">
            The thirties often mark the beginning of noticeable changes for many people:
          </p>
          <ul className="list-disc list-inside space-y-2 text-foreground mb-4">
            <li>Pattern hair loss becomes more apparent in those genetically predisposed</li>
            <li>Women may experience postpartum shedding if having children during this decade</li>
            <li>Slight reduction in hair diameter may begin, making hair feel less voluminous</li>
            <li>Grey hairs typically start appearing, though this does not affect shedding</li>
            <li>Overall density usually remains good if no underlying conditions exist</li>
          </ul>
          <p className="text-foreground leading-relaxed">
            Noticeable thinning at temples or crown in your thirties suggests pattern hair loss rather than normal aging and responds better to early treatment.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
            Hair in Your Forties and Fifties
          </h2>
          <p className="text-foreground leading-relaxed mb-4">
            More noticeable changes become common during these decades:
          </p>
          <ul className="list-disc list-inside space-y-2 text-foreground mb-4">
            <li>Hair naturally begins to thin as part of aging in many people</li>
            <li>Individual hair strands become finer, reducing overall volume</li>
            <li>Hair growth rate may slow slightly</li>
            <li>Women approaching or experiencing menopause often notice hair changes due to hormonal shifts</li>
            <li>Pattern hair loss progression continues in those affected</li>
            <li>Scalp may become more visible, particularly at the crown and part line</li>
          </ul>
          <p className="text-foreground leading-relaxed">
            Some reduction in density is normal, but rapid or significant thinning still warrants evaluation for treatable causes including thyroid issues, nutritional deficiencies, or hormonal imbalances.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
            Hair in Your Sixties and Beyond
          </h2>
          <p className="text-foreground leading-relaxed mb-4">
            Hair continues to change as aging progresses:
          </p>
          <ul className="list-disc list-inside space-y-2 text-foreground mb-4">
            <li>Hair density reduction is common and expected</li>
            <li>Hair often becomes finer, drier, and more fragile</li>
            <li>Growth rate slows further, with hair spending less time in the growth phase</li>
            <li>Scalp visibility increases, particularly at the crown</li>
            <li>Thinning across the entire scalp, known as senescent alopecia, can occur</li>
          </ul>
          <p className="text-foreground leading-relaxed">
            While these changes are normal, treatable conditions can still occur at any age. New or rapidly progressing hair loss should not be dismissed as simply aging without appropriate evaluation.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
            Signs Your Shedding May Not Be Normal
          </h2>
          <p className="text-foreground leading-relaxed mb-4">
            Regardless of age, certain patterns suggest something beyond normal aging:
          </p>
          <ul className="list-disc list-inside space-y-2 text-foreground">
            <li>Sudden dramatic increase in shedding over days or weeks</li>
            <li>Patchy bald spots appearing anywhere on the scalp</li>
            <li>Visible scalp at a younger age than family members experienced</li>
            <li>Receding hairline or thinning crown in your twenties or early thirties</li>
            <li>Hair loss accompanied by scalp symptoms like itching, redness, or pain</li>
            <li>Shedding associated with other symptoms such as fatigue or weight changes</li>
            <li>Rapid progression of thinning over months</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
            Common Myths About Age and Hair Loss
          </h2>
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/20">
              <h3 className="font-semibold text-foreground mb-2">Myth: Hair loss after 40 is just aging and cannot be treated</h3>
              <p className="text-muted-foreground">
                Many causes of hair loss remain treatable regardless of age. Pattern hair loss responds to treatment at any age, and other causes like thyroid issues or deficiencies are correctable.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/20">
              <h3 className="font-semibold text-foreground mb-2">Myth: Young people do not experience significant hair loss</h3>
              <p className="text-muted-foreground">
                Hair loss conditions can begin at any age. Some men show signs of pattern baldness in their late teens, and conditions like alopecia areata or telogen effluvium can occur in children and young adults.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
            When to Seek Professional Help
          </h2>
          <p className="text-foreground leading-relaxed mb-4">
            Consider consulting a healthcare provider if:
          </p>
          <ul className="list-disc list-inside space-y-2 text-foreground">
            <li>You are losing more hair than seems normal compared to your previous baseline</li>
            <li>Thinning is more advanced than expected for your age based on family history</li>
            <li>Hair loss began suddenly rather than gradually</li>
            <li>You notice bald patches or unusual patterns</li>
            <li>Your scalp shows signs of inflammation or irritation</li>
            <li>Hair loss coincides with other health changes</li>
          </ul>
        </section>

        <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-10">
          <p className="text-foreground">
            HairCare AI can help personalise this further based on your hair type, scalp condition, and goals.
          </p>
        </div>

        <ArticleNavigation
          previous={{ href: "/hair-loss-decisions/temporary-vs-permanent", title: "Is My Hair Loss Temporary or Permanent?" }}
          next={{ href: "/hair-loss-decisions/treat-or-wait", title: "Should I Treat Hair Loss or Wait It Out?" }}
        />

        <RelatedArticles articles={relatedArticles} />
      </article>
    </ContentPageLayout>
  );
};

export default NormalForAgePage;
