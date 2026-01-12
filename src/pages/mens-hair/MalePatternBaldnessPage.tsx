import SEOHead from "@/components/SEOHead";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleNavigation from "@/components/ArticleNavigation";
import RelatedArticles from "@/components/RelatedArticles";
import ContentPageLayout from "@/components/ContentPageLayout";

const faqItems = [
  {
    question: "Is male pattern baldness genetic?",
    answer: "Yes, male pattern baldness is primarily genetic, inherited from either or both parents. The condition involves sensitivity of hair follicles to dihydrotestosterone (DHT), a hormone derived from testosterone."
  },
  {
    question: "Can male pattern baldness be reversed?",
    answer: "Early-stage male pattern baldness can often be slowed and sometimes partially reversed with treatment. Once follicles are completely dormant or scarred, regrowth becomes unlikely, making early intervention important."
  },
  {
    question: "At what age does male pattern baldness start?",
    answer: "Male pattern baldness can begin as early as the late teens or early twenties, though it commonly becomes noticeable in the thirties and forties. By age fifty, approximately half of men show visible signs."
  }
];

const relatedArticles = [
  {
    title: "When Does Male Hair Loss Start?",
    href: "/mens-hair/when-it-starts",
    description: "Understanding the typical timeline and early warning signs of male pattern baldness."
  },
  {
    title: "Best Treatments for Men's Hair Loss",
    href: "/mens-hair/treatments",
    description: "Evidence-based treatment options for slowing and reversing male hair loss."
  },
  {
    title: "Finasteride: Benefits and Risks",
    href: "/mens-hair/finasteride",
    description: "What you need to know about this prescription treatment for hair loss."
  }
];

const MalePatternBaldnessPage = () => {
  return (
    <ContentPageLayout>
      <SEOHead
        title="Male Pattern Baldness Explained | HairCare.ai"
        description="Comprehensive guide to understanding male pattern baldness, including causes, stages, and treatment options. Learn what androgenetic alopecia is and how it progresses."
        canonicalUrl="https://haircare.ai/mens-hair/male-pattern-baldness"
      />

      <article className="max-w-4xl mx-auto">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Men's Hair Health", href: "/mens-hair" },
            { label: "Male Pattern Baldness" }
          ]}
        />

        <header className="mb-8">
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Male Pattern Baldness Explained
          </h1>
          <p className="text-lg text-muted-foreground">
            A comprehensive guide to understanding androgenetic alopecia in men
          </p>
        </header>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <p className="text-muted-foreground leading-relaxed">
              Male pattern baldness, medically known as androgenetic alopecia, is the most common form of hair loss in men. It affects approximately 50 percent of men by age 50 and up to 80 percent by age 70. Despite its prevalence, the condition is often misunderstood, leading to misinformation about causes, progression, and treatment options.
            </p>
          </section>

          <section className="bg-primary/5 rounded-lg p-6 my-8">
            <h2 className="text-xl font-semibold text-foreground mb-3">Quick Answer</h2>
            <p className="text-muted-foreground">
              Male pattern baldness is a genetic condition where hair follicles become progressively sensitive to dihydrotestosterone (DHT), causing them to shrink and produce thinner, shorter hairs until growth eventually stops. It typically follows predictable patterns starting at the temples or crown and can be treated effectively if caught early.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">What Causes Male Pattern Baldness?</h2>
            <p className="text-muted-foreground">
              The primary cause is genetic sensitivity to dihydrotestosterone (DHT), a hormone derived from testosterone through the action of an enzyme called 5-alpha reductase. When DHT binds to susceptible hair follicles, it triggers a process called follicular miniaturization.
            </p>
            <p className="text-muted-foreground">
              During miniaturization, affected follicles gradually shrink with each growth cycle. The hairs they produce become progressively finer, shorter, and lighter in color. Eventually, the follicles may stop producing visible hair altogether, though they typically remain alive beneath the skin surface.
            </p>
            <p className="text-muted-foreground">
              Genetics determine which follicles are sensitive to DHT and how quickly the miniaturization process occurs. This genetic predisposition can be inherited from either parent, and multiple genes are involved, making inheritance patterns complex.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">The Stages of Male Pattern Baldness</h2>
            <p className="text-muted-foreground">
              Male pattern baldness typically follows predictable patterns, most commonly described using the Norwood-Hamilton scale, which identifies seven stages of progression.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li><strong>Stage 1:</strong> No significant hair loss or recession of the hairline.</li>
              <li><strong>Stage 2:</strong> Slight recession at the temples, often called a mature hairline. This is common and not necessarily indicative of progressive balding.</li>
              <li><strong>Stage 3:</strong> The first stage that dermatologists typically consider baldness. Deep recession at the temples creates an M, U, or V shape.</li>
              <li><strong>Stage 4:</strong> Further hairline recession with thinning or bald spot at the crown. A band of hair separates the two areas.</li>
              <li><strong>Stage 5:</strong> The areas of hair loss at the temples and crown begin to connect, with the separating band becoming narrower.</li>
              <li><strong>Stage 6:</strong> The bridge of hair between the front and back areas is lost, leaving a single large bald area.</li>
              <li><strong>Stage 7:</strong> The most advanced stage, with only a band of hair around the sides and back of the head remaining.</li>
            </ul>
            <p className="text-muted-foreground">
              Not everyone progresses through all stages, and the rate of progression varies significantly between individuals. Some men may stabilize at an early stage, while others progress more rapidly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">Why Only Certain Areas Are Affected</h2>
            <p className="text-muted-foreground">
              Hair follicles in different parts of the scalp have different genetic programming. Follicles at the front and top of the scalp are genetically coded to be sensitive to DHT, while those at the sides and back are typically resistant.
            </p>
            <p className="text-muted-foreground">
              This is why hair transplantation works: follicles from the resistant areas maintain their genetic programming when transplanted to balding areas, continuing to grow normally even in their new location.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">Common Myths About Male Pattern Baldness</h2>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li><strong>Myth: Baldness comes only from your mother's side.</strong> While the androgen receptor gene is on the X chromosome inherited from your mother, many other genes from both parents influence hair loss susceptibility.</li>
              <li><strong>Myth: Wearing hats causes baldness.</strong> Hats do not cause or accelerate hair loss. This is a persistent myth with no scientific basis.</li>
              <li><strong>Myth: High testosterone causes baldness.</strong> It is sensitivity to DHT, not testosterone levels, that determines hair loss. Men with normal or even low testosterone can still experience significant balding.</li>
              <li><strong>Myth: Shampooing too often causes hair loss.</strong> Normal hair washing does not cause or worsen male pattern baldness. The hairs that fall during washing were already in the shedding phase.</li>
              <li><strong>Myth: Only older men experience baldness.</strong> Male pattern baldness can begin in the late teens or early twenties. Earlier onset often indicates more aggressive progression.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">Treatment Options</h2>
            <p className="text-muted-foreground">
              Several evidence-based treatments can slow progression and sometimes promote regrowth.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li><strong>Minoxidil:</strong> A topical treatment that extends the growth phase of hair and may stimulate dormant follicles. Available over the counter in liquid or foam formulations.</li>
              <li><strong>Finasteride:</strong> A prescription medication that blocks the conversion of testosterone to DHT, reducing the hormone that causes follicular miniaturization.</li>
              <li><strong>Low-level laser therapy:</strong> Devices that use specific wavelengths of light to stimulate hair follicles. Evidence supports modest benefits for some users.</li>
              <li><strong>Hair transplantation:</strong> Surgical redistribution of DHT-resistant follicles from the back and sides to balding areas.</li>
              <li><strong>Combination approaches:</strong> Many dermatologists recommend combining treatments for optimal results.</li>
            </ul>
            <p className="text-muted-foreground">
              Treatment effectiveness varies between individuals, and early intervention typically produces better outcomes. Once follicles have been miniaturized for extended periods, the potential for reversal diminishes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">When to Seek Professional Help</h2>
            <p className="text-muted-foreground">
              Consider consulting a dermatologist if you notice:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Progressive thinning at the temples or crown</li>
              <li>More hair than usual on pillows, in the shower, or on brushes</li>
              <li>Scalp becoming more visible, especially in certain lighting</li>
              <li>Sudden or patchy hair loss, which may indicate a different condition</li>
              <li>Hair loss accompanied by scalp symptoms like itching or pain</li>
            </ul>
            <p className="text-muted-foreground">
              A dermatologist can confirm the diagnosis, rule out other causes of hair loss, and discuss treatment options based on your specific situation and goals.
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
            title: "Men's Hair Health",
            href: "/mens-hair"
          }}
          next={{
            title: "When Does Male Hair Loss Start?",
            href: "/mens-hair/when-it-starts"
          }}
        />
      </article>
    </ContentPageLayout>
  );
};

export default MalePatternBaldnessPage;
