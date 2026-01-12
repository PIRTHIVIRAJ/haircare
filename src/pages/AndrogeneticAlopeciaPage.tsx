import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import ContentPageLayout from "@/components/ContentPageLayout";
import Breadcrumb from "@/components/Breadcrumb";
import FAQSection from "@/components/FAQSection";
import ChatCTA from "@/components/ChatCTA";
import MedicalDisclaimer from "@/components/MedicalDisclaimer";
import RelatedArticles from "@/components/RelatedArticles";

const AndrogeneticAlopeciaPage = () => {
  const faqs = [
    {
      question: "Is androgenetic alopecia the same as male pattern baldness?",
      answer: "Yes, androgenetic alopecia is the medical term for pattern hair loss that affects both men and women. In men, it is commonly called male pattern baldness. In women, it is referred to as female pattern hair loss. The underlying mechanism involves genetic sensitivity to androgens (hormones)."
    },
    {
      question: "Can androgenetic alopecia be cured?",
      answer: "There is currently no cure for androgenetic alopecia, but it can be effectively managed with treatments like minoxidil, finasteride (for men), and other therapies. These treatments can slow progression and, in many cases, promote regrowth, but they typically need to be continued to maintain results."
    },
    {
      question: "At what age does androgenetic alopecia start?",
      answer: "Androgenetic alopecia can begin as early as the late teens, though it more commonly becomes noticeable in the 20s to 40s. About 50% of men show some degree of pattern hair loss by age 50, while women often notice it more around or after menopause."
    },
    {
      question: "Is androgenetic alopecia hereditary?",
      answer: "Yes, genetics play a major role. You can inherit the genes for androgenetic alopecia from either parent. Having close relatives with pattern hair loss increases your likelihood of experiencing it, but it is not guaranteed."
    },
    {
      question: "Does DHT blocking really work for hair loss?",
      answer: "Yes, blocking DHT (dihydrotestosterone) has been proven effective for treating androgenetic alopecia, particularly in men. Finasteride, which blocks the enzyme that converts testosterone to DHT, can slow hair loss and promote regrowth in many users."
    },
    {
      question: "Can women take finasteride for pattern hair loss?",
      answer: "Finasteride is not typically prescribed for women and is contraindicated in women who are or may become pregnant due to risks of birth defects. Some post-menopausal women may be prescribed finasteride off-label, but this should only be under close medical supervision."
    }
  ];

  const relatedArticles = [
    {
      title: "Hair Loss in Men",
      href: "/hair-loss/men",
      description: "Specific guidance on male pattern baldness and treatment options for men."
    },
    {
      title: "Hair Loss in Women",
      href: "/hair-loss/women",
      description: "Understanding female pattern hair loss and how it differs from men."
    },
    {
      title: "Minoxidil Treatment",
      href: "/treatments/minoxidil",
      description: "Everything about this first-line treatment for androgenetic alopecia."
    },
    {
      title: "Telogen Effluvium",
      href: "/conditions/telogen-effluvium",
      description: "A different type of hair loss that can occur alongside pattern baldness."
    }
  ];

  return (
    <>
      <SEOHead 
        title="Androgenetic Alopecia: Pattern Hair Loss Guide | HairCare.ai"
        description="Understand androgenetic alopecia (pattern baldness), its causes, progression, and proven treatments for both men and women."
        canonicalUrl="https://haircare.ai/conditions/androgenetic-alopecia"
        articleSchema={{
          headline: "Androgenetic Alopecia (Pattern Hair Loss)",
          description: "Understand androgenetic alopecia (pattern baldness), its causes, progression, and proven treatments.",
          datePublished: "2024-01-15",
          dateModified: "2024-12-27"
        }}
        faqSchema={faqs}
      />
      
      <ContentPageLayout>
        <article className="max-w-4xl mx-auto" itemScope itemType="https://schema.org/Article">
          <Breadcrumb items={[
            { label: "Conditions" },
            { label: "Androgenetic Alopecia" }
          ]} />
          
          <header className="mb-8">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4" itemProp="headline">
              Androgenetic Alopecia (Pattern Hair Loss)
            </h1>
            <p className="text-lg text-muted-foreground">
              The most common form of hair loss, affecting millions of men and women worldwide.
            </p>
          </header>

          {/* Introduction */}
          <section className="prose prose-lg max-w-none mb-10">
            <p className="text-foreground leading-relaxed">
              If you have noticed a receding hairline, thinning at the crown, or a widening part, you may be 
              experiencing androgenetic alopecia—the most common cause of hair loss in both men and women. 
              While the name sounds clinical, it simply refers to hair loss influenced by your genes and hormones.
            </p>
            <p className="text-foreground leading-relaxed">
              Understanding androgenetic alopecia is the key to managing it effectively. While it cannot currently 
              be cured, treatments have come a long way, and many people successfully slow their hair loss or even 
              regrow hair with the right approach.
            </p>
            <p className="text-foreground leading-relaxed">
              This guide explains what happens in androgenetic alopecia, why it affects some people and not others, 
              and what you can realistically expect from treatment.
            </p>
          </section>

          {/* What is Androgenetic Alopecia */}
          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              What is Androgenetic Alopecia?
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              Androgenetic alopecia is a hereditary condition that causes progressive hair thinning and loss. 
              The name breaks down into two parts: "andro-" refers to androgens (male hormones like testosterone 
              and DHT), and "-genetic" refers to the inherited nature of the condition.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              In people with androgenetic alopecia, hair follicles are genetically sensitive to dihydrotestosterone 
              (DHT), a hormone derived from testosterone. When DHT binds to susceptible hair follicles, it causes 
              them to shrink progressively—a process called miniaturisation. Over time, the affected follicles 
              produce thinner, shorter, and less pigmented hairs until they eventually stop producing visible hair 
              altogether.
            </p>
            <p className="text-foreground leading-relaxed">
              Importantly, not all hair follicles are equally sensitive to DHT. This is why pattern baldness affects 
              specific areas (typically the top and front of the head) while the sides and back often remain unaffected.
            </p>
          </section>

          {/* Who is Affected */}
          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Who is Affected?
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              Androgenetic alopecia is extremely common:
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground mb-4">
              <li><strong>Men:</strong> Approximately 50% of men experience noticeable <Link to="/hair-loss/men" className="text-primary hover:underline">hair loss</Link> by age 50, with some studies suggesting up to 80% by age 80</li>
              <li><strong>Women:</strong> About 40% of <Link to="/hair-loss/women" className="text-primary hover:underline">women</Link> show signs of hair loss by age 50, with prevalence increasing after menopause</li>
              <li><strong>Age of onset:</strong> Can begin in the late teens, though typically becomes noticeable in the 20s-40s for men and often later for women</li>
              <li><strong>Ethnicity:</strong> Prevalence varies by ethnic background, with Caucasians most commonly affected</li>
            </ul>
            <p className="text-foreground leading-relaxed">
              If your parents, grandparents, or siblings have pattern hair loss, you are more likely to experience 
              it yourself. However, the inheritance pattern is complex, involving multiple genes from both parents.
            </p>
          </section>

          {/* Signs and Symptoms */}
          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Signs and Symptoms
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              Androgenetic alopecia presents differently in men and women:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-3">In Men</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Receding hairline, often starting at the temples</li>
                  <li>Thinning at the crown (vertex)</li>
                  <li>M-shaped or V-shaped hairline</li>
                  <li>Progressive merging of frontal and crown thinning</li>
                  <li>Eventually, a horseshoe pattern of remaining hair</li>
                </ul>
              </div>
              
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-3">In Women</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Widening of the centre part</li>
                  <li>Diffuse thinning across the top of the scalp</li>
                  <li>Preservation of the frontal hairline</li>
                  <li>Christmas tree pattern when hair is parted</li>
                  <li>Overall reduction in hair density</li>
                </ul>
              </div>
            </div>
            
            <p className="text-foreground leading-relaxed mt-4">
              In both sexes, individual hairs become progressively finer and shorter before eventually disappearing. 
              This process can take years or even decades, which is why early intervention is so valuable.
            </p>
          </section>

          {/* The Science Behind It */}
          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              The Science Behind Androgenetic Alopecia
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              Understanding the biology helps explain why certain treatments work:
            </p>
            
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Step 1: DHT Production</h3>
                <p className="text-muted-foreground">
                  The enzyme 5-alpha reductase converts testosterone into DHT (dihydrotestosterone). DHT is a more 
                  potent androgen than testosterone and plays a role in various bodily functions.
                </p>
              </div>
              
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Step 2: Follicle Sensitivity</h3>
                <p className="text-muted-foreground">
                  In genetically susceptible individuals, certain hair follicles have androgen receptors that are 
                  particularly responsive to DHT. When DHT binds to these receptors, it triggers changes in the follicle.
                </p>
              </div>
              
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Step 3: Miniaturisation</h3>
                <p className="text-muted-foreground">
                  DHT causes affected follicles to shrink over successive hair cycles. The growth phase (anagen) 
                  becomes shorter, and the resting phase (telogen) becomes longer. Each new hair is thinner and 
                  shorter than the last.
                </p>
              </div>
              
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Step 4: Eventual Dormancy</h3>
                <p className="text-muted-foreground">
                  Over time, the follicle may become so small that it only produces fine, nearly invisible vellus 
                  hair—or stops producing hair altogether. However, the follicle itself often remains alive, which 
                  is why some treatments can reactivate dormant follicles.
                </p>
              </div>
            </div>
          </section>

          {/* Treatment Options */}
          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Treatment and Management Options
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              While androgenetic alopecia cannot be cured, several treatments can effectively slow progression and 
              promote regrowth:
            </p>
            
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Minoxidil (First-Line Treatment)</h3>
                <p className="text-muted-foreground mb-2">
                  Available over the counter in topical and foam formulations. Works by increasing blood flow to 
                  follicles and extending the growth phase of the hair cycle. Effective for both men and women. 
                  <Link to="/treatments/minoxidil" className="text-primary hover:underline"> Learn more about minoxidil</Link>.
                </p>
              </div>
              
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Finasteride (Men Only)</h3>
                <p className="text-muted-foreground">
                  A prescription pill that blocks 5-alpha reductase, reducing DHT levels by about 70%. Studies show 
                  it stops progression in about 90% of men and promotes visible regrowth in about 65%. Must be taken 
                  continuously to maintain results.
                </p>
              </div>
              
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Dutasteride (Off-Label)</h3>
                <p className="text-muted-foreground">
                  A more potent DHT blocker than finasteride. Not FDA-approved for hair loss but sometimes prescribed 
                  off-label for men who do not respond adequately to finasteride.
                </p>
              </div>
              
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Spironolactone (Women)</h3>
                <p className="text-muted-foreground">
                  An anti-androgen medication sometimes prescribed for women with female pattern hair loss. Blocks 
                  androgen receptors and can reduce hair loss in women with hormonal imbalances.
                </p>
              </div>
              
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Hair Transplant Surgery</h3>
                <p className="text-muted-foreground">
                  Moves genetically resistant hair follicles from the back and sides of the head to thinning areas. 
                  Results are permanent because transplanted follicles retain their resistance to DHT.
                </p>
              </div>
              
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Low-Level Laser Therapy</h3>
                <p className="text-muted-foreground">
                  FDA-cleared devices that use red light to stimulate hair follicles. Can be used alone or in 
                  combination with other treatments for enhanced results.
                </p>
              </div>
              
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Platelet-Rich Plasma (PRP)</h3>
                <p className="text-muted-foreground">
                  Injections of concentrated platelets from your own blood into the scalp. May stimulate hair growth, 
                  though evidence is still emerging and protocols vary.
                </p>
              </div>
            </div>
          </section>

          {/* What to Expect */}
          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Realistic Expectations
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              Setting realistic expectations is important for treatment success:
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground">
              <li><strong>Time:</strong> Most treatments take 3-6 months before visible improvement, with full results often taking 12 months or more</li>
              <li><strong>Initial shedding:</strong> Some treatments cause temporary increased shedding as dormant hairs are pushed out by new growth</li>
              <li><strong>Maintenance:</strong> Most treatments require ongoing use to maintain results</li>
              <li><strong>Outcomes vary:</strong> Response depends on factors like age, duration of hair loss, and genetics</li>
              <li><strong>Combination therapy:</strong> Using multiple treatments together often produces better results than any single treatment</li>
              <li><strong>Early intervention:</strong> Starting treatment early, when there is more hair to protect, typically yields better outcomes</li>
            </ul>
          </section>

          {/* When to See a Doctor */}
          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              When to See a Doctor
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              Consider consulting a dermatologist or hair loss specialist if:
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground">
              <li>You want to explore prescription treatments</li>
              <li>Over-the-counter treatments have not worked after 6-12 months</li>
              <li>Your hair loss pattern seems unusual or does not fit typical patterns</li>
              <li>You have other symptoms alongside hair loss</li>
              <li>You are considering surgical options</li>
              <li>Hair loss is affecting your quality of life or mental health</li>
            </ul>
          </section>

          <FAQSection faqs={faqs} />
          
          <ChatCTA 
            title="Want to understand your hair loss better?"
            description="Talk to HairCare.ai about your symptoms and get personalised guidance on whether androgenetic alopecia might be affecting you."
          />
          
          <RelatedArticles articles={relatedArticles} />
          
          <MedicalDisclaimer />
        </article>
      </ContentPageLayout>
    </>
  );
};

export default AndrogeneticAlopeciaPage;
