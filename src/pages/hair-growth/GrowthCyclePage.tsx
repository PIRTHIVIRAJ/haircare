import SEOHead from "@/components/SEOHead";
import ContentPageLayout from "@/components/ContentPageLayout";
import Breadcrumb from "@/components/Breadcrumb";
import FAQSection from "@/components/FAQSection";
import ChatCTA from "@/components/ChatCTA";
import MedicalDisclaimer from "@/components/MedicalDisclaimer";
import RelatedArticles from "@/components/RelatedArticles";
import ArticleNavigation from "@/components/ArticleNavigation";

const GrowthCyclePage = () => {
  const faqs = [
    {
      question: "How long does a complete hair growth cycle take?",
      answer: "A complete hair cycle can last 2 to 7 years for scalp hair, with the anagen (growth) phase comprising most of this time. The catagen phase lasts about 2 to 3 weeks, and the telogen phase lasts about 3 months. Each follicle operates independently."
    },
    {
      question: "Why does my hair only grow to a certain length?",
      answer: "Your hair's maximum length is determined by the duration of your anagen phase. If your growth phase lasts 2 years, your hair can grow approximately 24 to 30 centimetres before naturally shedding. Longer anagen phases allow for longer potential length."
    },
    {
      question: "Can you extend the anagen phase?",
      answer: "While genetics primarily determine anagen duration, certain factors may support a healthy growth phase: good nutrition, stress management, treating scalp conditions, and avoiding hair damage. Some treatments like minoxidil may also prolong anagen."
    },
    {
      question: "Is it normal to shed hair every day?",
      answer: "Yes, shedding 50 to 100 hairs daily is normal as hairs complete their telogen phase and make way for new growth. This is part of the natural renewal process. Significantly higher shedding may indicate a disruption to the cycle."
    }
  ];

  const relatedArticles = [
    { title: "How Fast Does Hair Grow?", href: "/hair-growth/how-fast-does-hair-grow", description: "Average growth rates explained" },
    { title: "Signs Your Hair Is Growing Back", href: "/hair-growth/signs-of-regrowth", description: "Recognising healthy regrowth" },
    { title: "Hair Regrowth Timelines", href: "/hair-growth/regrowth-timeline", description: "What to expect during recovery" }
  ];

  return (
    <>
      <SEOHead 
        title="Hair Growth Cycle Explained: Anagen, Catagen, Telogen | HairCare.ai"
        description="Understand the three phases of hair growth—anagen, catagen, and telogen—and how they affect hair length, shedding, and overall hair health."
        canonicalUrl="https://haircare.ai/hair-growth/growth-cycle"
        articleSchema={{
          headline: "Hair Growth Cycle Explained",
          description: "Understand the three phases of hair growth—anagen, catagen, and telogen—and how they affect hair length, shedding, and overall hair health.",
        }}
      />
      
      <ContentPageLayout>
        <div className="max-w-4xl mx-auto">
          <Breadcrumb items={[
            { label: "Hair Growth", href: "/hair-growth" },
            { label: "Growth Cycle" }
          ]} />
          
          <article className="prose prose-lg max-w-none">
            <header className="mb-8">
              <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
                Hair Growth Cycle Explained
              </h1>
              <p className="text-lg text-muted-foreground">
                Every strand of hair on your body follows a predictable pattern of growth, transition, rest, and shedding. Understanding this cycle helps explain why hair behaves the way it does and why certain treatments work.
              </p>
            </header>

            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-8">
              <h2 className="text-lg font-semibold text-foreground mt-0 mb-2">Quick Answer</h2>
              <p className="text-muted-foreground mb-0">
                Hair grows in a three-phase cycle: anagen (active growth lasting 2 to 7 years), catagen (transition lasting 2 to 3 weeks), and telogen (rest and shedding lasting about 3 months). Each follicle operates independently, ensuring continuous overall coverage while individual hairs are replaced.
              </p>
            </div>

            <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">The Three Phases of Hair Growth</h2>
            <p className="text-muted-foreground mb-4">
              Unlike some animals that shed seasonally, human hair follicles cycle asynchronously. This means each follicle is at a different stage of the cycle at any given time, preventing noticeable patches of hair loss during normal shedding.
            </p>

            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">Anagen: The Growth Phase</h3>
            <p className="text-muted-foreground mb-4">
              Anagen is the active growth phase during which the hair follicle produces the hair shaft. This is the longest phase, lasting anywhere from 2 to 7 years for scalp hair. During anagen:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li>Cells in the hair bulb divide rapidly, adding to the hair shaft</li>
              <li>The hair grows approximately 1 to 1.5 centimetres per month</li>
              <li>The follicle is deeply anchored in the skin</li>
              <li>About 85 to 90 percent of scalp hairs are in this phase at any time</li>
            </ul>
            <p className="text-muted-foreground mb-4">
              The length of your anagen phase determines your hair's maximum potential length. Someone with a 2-year anagen phase will have shorter maximum length than someone whose phase lasts 6 years, even if their daily growth rate is identical.
            </p>

            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">Catagen: The Transition Phase</h3>
            <p className="text-muted-foreground mb-4">
              Catagen is a brief transitional phase lasting approximately 2 to 3 weeks. During this phase:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li>Cell division stops and the hair stops growing</li>
              <li>The hair follicle shrinks to about one-sixth of its original length</li>
              <li>The lower part of the follicle is destroyed</li>
              <li>The hair becomes detached from its blood supply</li>
              <li>The hair becomes what is known as a "club hair"</li>
            </ul>
            <p className="text-muted-foreground mb-4">
              Only about 1 to 2 percent of hairs are in catagen at any given time. This phase signals the end of active growth and prepares the follicle for the resting phase.
            </p>

            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">Telogen: The Resting Phase</h3>
            <p className="text-muted-foreground mb-4">
              Telogen is the resting phase, lasting approximately 3 months. During telogen:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li>The hair does not grow but remains attached to the follicle</li>
              <li>The follicle rests and regenerates</li>
              <li>A new hair begins to form at the base of the follicle</li>
              <li>About 10 to 15 percent of scalp hairs are in this phase</li>
            </ul>
            <p className="text-muted-foreground mb-4">
              At the end of telogen, the old hair is shed (sometimes called the exogen phase) and the follicle re-enters anagen, beginning a new growth cycle.
            </p>

            <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">Why Understanding the Cycle Matters</h2>
            
            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">Normal Hair Shedding</h3>
            <p className="text-muted-foreground mb-4">
              Knowing that hair shedding is a normal part of the cycle helps reduce unnecessary worry. Losing 50 to 100 hairs per day is typical—these are hairs that have completed their telogen phase and are making way for new growth.
            </p>

            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">Treatment Timing</h3>
            <p className="text-muted-foreground mb-4">
              The hair cycle explains why treatments take time to show results. Since only actively growing (anagen) hairs respond to most treatments, and hairs move through phases at different times, it can take 3 to 6 months to see visible changes. This is why consistency and patience are essential.
            </p>

            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">Hair Loss Conditions</h3>
            <p className="text-muted-foreground mb-4">
              Many hair loss conditions involve disruptions to the normal cycle:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li><strong>Telogen effluvium:</strong> A trigger causes many hairs to enter telogen prematurely, resulting in excessive shedding 2 to 3 months later</li>
              <li><strong>Androgenetic alopecia:</strong> The anagen phase becomes progressively shorter, producing thinner, shorter hairs until follicles eventually stop producing visible hair</li>
              <li><strong>Anagen effluvium:</strong> A disruption during the growth phase (often from chemotherapy) causes hair to break or fall out while still growing</li>
            </ul>

            <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">Factors That Influence the Hair Cycle</h2>
            
            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">Genetics</h3>
            <p className="text-muted-foreground mb-4">
              Your genetic makeup largely determines the duration of each phase, particularly the anagen phase. This is why some people can grow hair to their waist while others find their hair never grows past shoulder length.
            </p>

            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">Age</h3>
            <p className="text-muted-foreground mb-4">
              As we age, the anagen phase tends to shorten, and the rate of cell division slows. This is why hair often grows more slowly and may not reach the same lengths as in youth.
            </p>

            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">Hormones</h3>
            <p className="text-muted-foreground mb-4">
              Hormonal changes can significantly impact the hair cycle. Pregnancy often extends the anagen phase, resulting in thicker hair, followed by post-partum shedding as those hairs enter telogen. Thyroid imbalances and changes in androgen levels also affect cycling.
            </p>

            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">Nutrition</h3>
            <p className="text-muted-foreground mb-4">
              Adequate nutrients, particularly protein, iron, and B vitamins, support the rapid cell division required during anagen. Deficiencies can lead to a shortened growth phase or premature transition to telogen.
            </p>

            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">Stress</h3>
            <p className="text-muted-foreground mb-4">
              Significant physical or emotional stress can trigger a shift of many hairs from anagen to telogen, causing noticeable shedding 2 to 3 months after the stressful event.
            </p>

            <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">Hair Cycle Across the Body</h2>
            <p className="text-muted-foreground mb-4">
              Different body areas have different cycle durations, which explains why body hair grows to specific lengths:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li><strong>Scalp hair:</strong> Anagen lasts 2 to 7 years, allowing for long growth</li>
              <li><strong>Eyebrows and eyelashes:</strong> Anagen lasts only 1 to 6 months, keeping them short</li>
              <li><strong>Body hair:</strong> Short anagen phases limit growth to a few centimetres</li>
              <li><strong>Beard hair:</strong> Can have anagen phases similar to scalp hair, allowing for long growth if untrimmed</li>
            </ul>

            <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">Common Myths About the Hair Cycle</h2>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li><strong>"Cutting hair makes it grow faster":</strong> Cutting only affects the visible hair shaft, not the follicle or growth rate</li>
              <li><strong>"Hair keeps growing after death":</strong> Hair does not grow after death; the skin dehydrates and retracts, making hair appear longer</li>
              <li><strong>"Shaving resets the cycle":</strong> Shaving has no effect on the underlying cycle or growth rate</li>
              <li><strong>"Plucking hair makes it grow back thicker":</strong> Plucking may temporarily damage the follicle but does not change hair thickness</li>
            </ul>

            <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">When to Seek Professional Help</h2>
            <p className="text-muted-foreground mb-4">
              Consult a dermatologist or trichologist if you experience:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li>Excessive shedding (significantly more than 100 hairs per day)</li>
              <li>Noticeable thinning or bald patches</li>
              <li>Changes in hair texture or growth patterns</li>
              <li>Scalp symptoms accompanying hair changes</li>
              <li>Hair that breaks easily or does not grow beyond a certain length</li>
            </ul>

            <div className="bg-accent/30 border border-accent rounded-lg p-6 my-8">
              <p className="text-foreground mb-0">
                <strong>HairCare AI can help personalise this further based on your hair type, scalp condition, and goals.</strong>
              </p>
            </div>

            <ArticleNavigation 
              previous={{ title: "Can You Really Regrow Lost Hair?", href: "/hair-growth/can-hair-regrow" }}
              next={{ title: "Natural Methods to Stimulate Hair Growth", href: "/hair-growth/natural-methods" }}
            />
          </article>

          <FAQSection faqs={faqs} />
          <ChatCTA />
          <RelatedArticles articles={relatedArticles} />
          <MedicalDisclaimer />
        </div>
      </ContentPageLayout>
    </>
  );
};

export default GrowthCyclePage;
