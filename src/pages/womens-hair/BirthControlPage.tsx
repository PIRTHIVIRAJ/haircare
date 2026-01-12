import SEOHead from "@/components/SEOHead";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleNavigation from "@/components/ArticleNavigation";
import RelatedArticles from "@/components/RelatedArticles";
import ContentPageLayout from "@/components/ContentPageLayout";

const faqItems = [
  {
    question: "Which birth control pills are best for hair loss?",
    answer: "Pills containing anti-androgenic progestins like drospirenone, cyproterone acetate, or norgestimate are generally considered better for hair. Pills with androgenic progestins may worsen hair loss in susceptible women."
  },
  {
    question: "Can stopping birth control cause hair loss?",
    answer: "Yes, stopping hormonal contraception can trigger temporary hair shedding as hormone levels fluctuate and the body adjusts. This typically resolves within six to twelve months."
  },
  {
    question: "How long does birth control-related hair loss last?",
    answer: "Hair shedding triggered by starting or stopping birth control usually begins two to three months after the change and resolves within six to twelve months as the body adjusts to new hormone levels."
  }
];

const relatedArticles = [
  {
    title: "Hair Loss After Stopping Contraception",
    href: "/womens-hair/stopping-contraception",
    description: "What to expect when you stop hormonal birth control and how to manage temporary shedding."
  },
  {
    title: "Hormonal Hair Loss Treatments",
    href: "/womens-hair/hormonal-hair-loss",
    description: "Evidence-based treatments for hormone-related hair thinning in women."
  },
  {
    title: "Hair Loss and PCOS",
    href: "/womens-hair/pcos-hair-loss",
    description: "Understanding the connection between polycystic ovary syndrome and hair thinning."
  }
];

const BirthControlPage = () => {
  return (
    <ContentPageLayout>
      <SEOHead
        title="Birth Control and Hair Changes | Contraception Effects on Hair - HairCare.ai"
        description="Learn how different types of birth control affect hair health, which pills are better for hair loss, and what to expect when starting or stopping contraception."
        canonicalUrl="https://haircare.ai/womens-hair/birth-control"
        articleSchema={{
          headline: "Birth Control and Hair Changes: What Every Woman Should Know",
          description: "A comprehensive guide to understanding how hormonal contraception affects hair growth, texture, and shedding, with guidance on choosing hair-friendly options.",
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
            { label: "Birth Control" }
          ]}
        />

        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Birth Control and Hair Changes: What Every Woman Should Know
          </h1>
          <p className="text-lg text-muted-foreground">
            Hormonal contraception can influence hair in various ways, and understanding these effects helps women make informed choices about their birth control options. Whether you are starting, switching, or stopping contraception, knowing what to expect can prevent unnecessary concern about normal hormone-related hair changes.
          </p>
        </header>

        <div className="bg-primary/5 border border-primary/10 rounded-lg p-6 mb-8">
          <h2 className="text-lg font-semibold text-foreground mb-2">Quick Answer</h2>
          <p className="text-muted-foreground">
            Birth control affects hair through its hormonal components. Pills with anti-androgenic progestins may improve hair, while those with androgenic progestins may worsen it. Starting or stopping any hormonal contraception can trigger temporary shedding lasting up to six months.
          </p>
        </div>

        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-foreground">How Hormonal Contraception Works</h2>
            <p className="text-muted-foreground">
              Most hormonal contraceptives contain synthetic versions of estrogen and progesterone, though some contain only progestin. These hormones prevent pregnancy by suppressing ovulation, thickening cervical mucus, and altering the uterine lining.
            </p>
            <p className="text-muted-foreground">
              The same hormones that provide contraception also affect hair follicles. Estrogen generally supports hair growth by prolonging the anagen phase, which is why many women notice fuller hair during pregnancy when estrogen levels are high. Progestins vary in their effects on hair depending on their specific chemical structure.
            </p>
            <p className="text-muted-foreground">
              Understanding the hormonal content of different contraceptive options helps explain why some formulations benefit hair while others may contribute to thinning.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">Types of Progestins and Their Effects</h2>
            <p className="text-muted-foreground">
              The progestin component of birth control pills varies significantly between formulations, and this variation has important implications for hair:
            </p>
            
            <h3 className="text-xl font-medium text-foreground mt-6">Anti-Androgenic Progestins (Hair-Friendly)</h3>
            <p className="text-muted-foreground">
              Some progestins have anti-androgenic properties, meaning they block the effects of androgens on tissues including hair follicles. These are generally preferred for women with hair concerns:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li><strong>Drospirenone:</strong> Found in several popular pills, has mild anti-androgenic activity</li>
              <li><strong>Cyproterone acetate:</strong> Strongly anti-androgenic, used in some countries specifically for hair and acne</li>
              <li><strong>Dienogest:</strong> Anti-androgenic, used in some combination pills</li>
              <li><strong>Chlormadinone acetate:</strong> Anti-androgenic, available in some formulations</li>
            </ul>

            <h3 className="text-xl font-medium text-foreground mt-6">Androgenic Progestins (Potentially Problematic)</h3>
            <p className="text-muted-foreground">
              Other progestins have some androgenic activity, which can potentially worsen hair loss in susceptible women:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li><strong>Levonorgestrel:</strong> Common in many pills and IUDs, has androgenic properties</li>
              <li><strong>Norgestrel:</strong> Androgenic, found in some older formulations</li>
              <li><strong>Norethindrone:</strong> Mildly androgenic, used in various pills and mini-pills</li>
            </ul>

            <h3 className="text-xl font-medium text-foreground mt-6">Neutral Progestins</h3>
            <p className="text-muted-foreground">
              Some progestins fall in between, with minimal androgenic or anti-androgenic effects:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li><strong>Norgestimate:</strong> Generally considered low-androgenic, often well-tolerated for hair</li>
              <li><strong>Desogestrel:</strong> Relatively low androgenic activity</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">When Starting Birth Control</h2>
            <p className="text-muted-foreground">
              Beginning hormonal contraception introduces new hormones into your system, which can affect hair in several ways:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li><strong>Initial shedding:</strong> Some women experience temporary increased shedding in the first few months as the body adjusts to new hormone levels</li>
              <li><strong>Potential improvement:</strong> With anti-androgenic pills, some women notice reduced shedding and improved hair quality after the adjustment period</li>
              <li><strong>Texture changes:</strong> Some women notice subtle changes in hair texture, oiliness, or growth rate</li>
            </ul>
            <p className="text-muted-foreground">
              These initial changes typically stabilize within three to six months. If significant shedding persists longer, discussing alternative formulations with your healthcare provider may be warranted.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">Other Hormonal Contraceptive Methods</h2>
            <p className="text-muted-foreground">
              While combination pills are most studied regarding hair effects, other hormonal methods also warrant consideration:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li><strong>Progestin-only pills (mini-pills):</strong> Effects depend on the specific progestin used</li>
              <li><strong>Hormonal IUDs:</strong> Contain levonorgestrel, which has some androgenic activity, though systemic absorption is limited</li>
              <li><strong>Implants:</strong> Contain etonogestrel, effects on hair vary among individuals</li>
              <li><strong>Depo-Provera injection:</strong> Contains medroxyprogesterone, which some women find affects their hair</li>
              <li><strong>Vaginal rings and patches:</strong> Contain estrogen plus a progestin, with effects depending on the specific progestin</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">Non-Hormonal Alternatives</h2>
            <p className="text-muted-foreground">
              Women concerned about hormonal effects on hair may consider non-hormonal contraceptive options:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li><strong>Copper IUD:</strong> Highly effective without hormones, no direct hair effects</li>
              <li><strong>Barrier methods:</strong> Condoms, diaphragms, and cervical caps have no hormonal effects</li>
              <li><strong>Fertility awareness methods:</strong> Track fertility signs without hormones</li>
            </ul>
            <p className="text-muted-foreground">
              The right choice depends on individual priorities including contraceptive effectiveness, convenience, side effect profile, and any existing hair concerns.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">Common Myths About Birth Control and Hair</h2>
            <p className="text-muted-foreground">
              Several misconceptions exist about how birth control affects hair:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li><strong>Myth: All birth control pills cause hair loss.</strong> This is not true. Many women maintain or even improve their hair on appropriate formulations.</li>
              <li><strong>Myth: The pill always helps hair.</strong> Only certain formulations with anti-androgenic progestins reliably benefit hair. Others may have neutral or negative effects.</li>
              <li><strong>Myth: If my hair thinned on one pill, all pills will affect it.</strong> Switching to a formulation with a different progestin may produce different results.</li>
              <li><strong>Myth: Hormonal IUDs will definitely cause hair loss.</strong> While levonorgestrel-containing IUDs have androgenic progestin, systemic absorption is much lower than oral pills, and many women experience no hair effects.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">When to Seek Professional Help</h2>
            <p className="text-muted-foreground">
              Consider consulting a healthcare provider about your birth control and hair if you experience:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Significant or prolonged hair shedding after starting a new contraceptive</li>
              <li>Progressive thinning that does not stabilize within six months</li>
              <li>Desire to find a more hair-friendly contraceptive option</li>
              <li>Hair loss accompanied by other concerning symptoms</li>
              <li>Uncertainty about whether your contraception could be contributing to hair changes</li>
            </ul>
            <p className="text-muted-foreground">
              A healthcare provider can review your current contraception, discuss alternatives that might be better suited to your hair needs, and evaluate for other potential causes of hair changes.
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
            title: "Thyroid Problems and Hair Thinning",
            href: "/womens-hair/thyroid"
          }}
          next={{
            title: "Hair Loss After Stopping Contraception",
            href: "/womens-hair/stopping-contraception"
          }}
        />
      </article>
    </ContentPageLayout>
  );
};

export default BirthControlPage;
