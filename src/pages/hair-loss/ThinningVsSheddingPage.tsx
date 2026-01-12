import SEOHead from "@/components/SEOHead";
import ContentPageLayout from "@/components/ContentPageLayout";
import Breadcrumb from "@/components/Breadcrumb";
import FAQSection from "@/components/FAQSection";
import ChatCTA from "@/components/ChatCTA";
import MedicalDisclaimer from "@/components/MedicalDisclaimer";
import RelatedArticles from "@/components/RelatedArticles";

const ThinningVsSheddingPage = () => {
  const faqs = [
    {
      question: "How many hairs should I lose per day?",
      answer: "Normal hair shedding is 50-100 hairs per day. This sounds like a lot but is imperceptible on a head with 100,000+ follicles. Losing 150+ hairs daily, finding clumps on your pillow, or noticing significantly more hair in the shower may indicate excessive shedding."
    },
    {
      question: "Can hair thinning turn into hair shedding?",
      answer: "Hair thinning (miniaturisation) and hair shedding (telogen effluvium) are different processes. However, thinned hairs may eventually shed and not regrow at the same calibre. Conversely, repeated shedding episodes do not typically lead to permanent miniaturisation."
    },
    {
      question: "Which is more serious: thinning or shedding?",
      answer: "Neither is inherently more serious, but they have different implications. Shedding is often temporary and reversible. Thinning from pattern baldness is progressive and permanent without treatment. Both deserve attention, but treatment approaches differ significantly."
    },
    {
      question: "Can you have both thinning and shedding?",
      answer: "Yes, it is common to have both. For example, someone with genetic pattern thinning may also experience a shedding episode triggered by stress or illness. This can accelerate visible hair loss and make the thinning more noticeable."
    }
  ];

  const relatedArticles = [
    {
      title: "Telogen Effluvium Explained",
      href: "/hair-loss/telogen-effluvium",
      description: "Understanding the main cause of temporary hair shedding."
    },
    {
      title: "Genetic vs Hormonal Hair Loss",
      href: "/hair-loss/genetic-vs-hormonal",
      description: "How pattern baldness and hormonal factors affect hair."
    },
    {
      title: "How to Diagnose Hair Loss",
      href: "/hair-loss/diagnosis",
      description: "Methods to determine the type of hair loss you have."
    }
  ];

  return (
    <>
      <SEOHead 
        title="Hair Thinning vs Hair Shedding: What's the Difference? | HairCare.ai"
        description="Learn the key differences between hair thinning and hair shedding, what causes each, and how to identify which type of hair loss you are experiencing."
        canonicalUrl="https://haircare.ai/hair-loss/thinning-vs-shedding"
        articleSchema={{
          headline: "Hair Thinning vs Hair Shedding: What's the Difference?",
          description: "Learn the key differences between hair thinning and hair shedding and how to identify which type you have.",
          datePublished: "2024-12-28",
          dateModified: "2024-12-28"
        }}
        faqSchema={faqs}
      />
      
      <ContentPageLayout>
        <article className="max-w-4xl mx-auto" itemScope itemType="https://schema.org/Article">
          <Breadcrumb items={[
            { label: "Hair Loss", href: "/hair-loss" },
            { label: "Thinning vs Shedding" }
          ]} />
          
          <header className="mb-8">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4" itemProp="headline">
              Hair Thinning vs Hair Shedding
            </h1>
            <p className="text-lg text-muted-foreground">
              Understanding two fundamentally different types of hair loss.
            </p>
          </header>

          {/* Introduction */}
          <section className="prose prose-lg max-w-none mb-10">
            <p className="text-foreground leading-relaxed">
              When people talk about "hair loss," they often use the terms "thinning" and "shedding" interchangeably. However, these describe two distinct processes with different causes, progressions, and treatment approaches. Understanding whether you are experiencing thinning, shedding, or both is essential for finding the right solution.
            </p>
            <p className="text-foreground leading-relaxed">
              This guide clarifies the difference between hair thinning and hair shedding, helps you identify what is happening with your hair, and explains what each type means for your hair's future.
            </p>
          </section>

          {/* Direct Answer Box */}
          <section className="mb-10 p-6 rounded-xl bg-primary/5 border border-primary/20">
            <h2 className="font-heading text-xl font-semibold text-foreground mb-3">
              Quick Answer
            </h2>
            <p className="text-foreground leading-relaxed">
              Hair shedding (telogen effluvium) involves losing full-thickness hairs at an increased rate, typically triggered by stress or illness, and is usually temporary. Hair thinning (miniaturisation) occurs when hair follicles gradually produce thinner, shorter hairs over time, typically due to genetics and hormones, and is progressive without treatment.
            </p>
          </section>

          {/* What is Hair Shedding */}
          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              What is Hair Shedding?
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              Hair shedding, medically termed telogen effluvium, occurs when you lose more hairs than normal from the root. The hairs that fall out are typically full-thickness, healthy-looking hairs with a small white bulb at the end (indicating they came from the follicle).
            </p>
            
            <div className="p-4 rounded-lg bg-card border border-border mb-4">
              <h3 className="font-semibold text-foreground mb-2">Characteristics of Hair Shedding</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Increased number of hairs falling out (more than 100-150 per day)</li>
                <li>Hairs fall out from all over the scalp (diffuse pattern)</li>
                <li>Shed hairs are normal thickness, not miniaturised</li>
                <li>Often appears suddenly, 2-3 months after a trigger</li>
                <li>Hair remaining on the scalp maintains normal thickness</li>
                <li>No visible changes to the hairline pattern</li>
              </ul>
            </div>

            <div className="p-4 rounded-lg bg-card border border-border">
              <h3 className="font-semibold text-foreground mb-2">Common Causes of Shedding</h3>
              <div className="grid md:grid-cols-2 gap-2">
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Physical illness or high fever</li>
                  <li>Major surgery</li>
                  <li>Significant emotional stress</li>
                  <li>Childbirth (postpartum)</li>
                </ul>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Rapid weight loss</li>
                  <li>Nutritional deficiencies</li>
                  <li>Thyroid imbalances</li>
                  <li>Certain medications</li>
                </ul>
              </div>
            </div>
          </section>

          {/* What is Hair Thinning */}
          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              What is Hair Thinning?
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              Hair thinning, also called miniaturisation, is a gradual process where hair follicles produce progressively thinner, shorter, and lighter hairs over time. Eventually, the follicle may only produce very fine, nearly invisible vellus hairs or stop producing visible hair altogether.
            </p>
            
            <div className="p-4 rounded-lg bg-card border border-border mb-4">
              <h3 className="font-semibold text-foreground mb-2">Characteristics of Hair Thinning</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Individual hairs become thinner in diameter</li>
                <li>Hair strands become shorter and lighter in colour</li>
                <li>More scalp becomes visible through the hair</li>
                <li>Changes occur gradually over months or years</li>
                <li>Often follows a pattern (temples, crown, or parting)</li>
                <li>The total number of hairs may stay similar initially</li>
              </ul>
            </div>

            <div className="p-4 rounded-lg bg-card border border-border">
              <h3 className="font-semibold text-foreground mb-2">Common Causes of Thinning</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Androgenetic alopecia (genetic pattern baldness)</li>
                <li>Sensitivity to dihydrotestosterone (DHT)</li>
                <li>Hormonal changes (menopause, PCOS)</li>
                <li>Chronic traction from tight hairstyles</li>
                <li>Scarring conditions affecting follicles</li>
              </ul>
            </div>
          </section>

          {/* Key Differences */}
          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Key Differences at a Glance
            </h2>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-border rounded-lg">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="border border-border p-3 text-left font-semibold text-foreground">Feature</th>
                    <th className="border border-border p-3 text-left font-semibold text-foreground">Hair Shedding</th>
                    <th className="border border-border p-3 text-left font-semibold text-foreground">Hair Thinning</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border p-3 text-foreground font-medium">What falls out</td>
                    <td className="border border-border p-3 text-muted-foreground">Full-thickness hairs</td>
                    <td className="border border-border p-3 text-muted-foreground">Progressively thinner hairs</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 text-foreground font-medium">Onset</td>
                    <td className="border border-border p-3 text-muted-foreground">Sudden, over weeks</td>
                    <td className="border border-border p-3 text-muted-foreground">Gradual, over months/years</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 text-foreground font-medium">Pattern</td>
                    <td className="border border-border p-3 text-muted-foreground">Diffuse, all-over</td>
                    <td className="border border-border p-3 text-muted-foreground">Patterned (temples, crown)</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 text-foreground font-medium">Trigger</td>
                    <td className="border border-border p-3 text-muted-foreground">Usually identifiable event</td>
                    <td className="border border-border p-3 text-muted-foreground">Genetics and hormones</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 text-foreground font-medium">Duration</td>
                    <td className="border border-border p-3 text-muted-foreground">Typically temporary</td>
                    <td className="border border-border p-3 text-muted-foreground">Progressive without treatment</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 text-foreground font-medium">Recovery</td>
                    <td className="border border-border p-3 text-muted-foreground">Usually complete</td>
                    <td className="border border-border p-3 text-muted-foreground">Requires ongoing treatment</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 text-foreground font-medium">Follicle health</td>
                    <td className="border border-border p-3 text-muted-foreground">Follicles remain healthy</td>
                    <td className="border border-border p-3 text-muted-foreground">Follicles shrink over time</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* How to Tell */}
          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              How to Tell Which One You Have
            </h2>
            
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Look at the Shed Hairs</h3>
                <p className="text-muted-foreground">
                  Examine hairs that have fallen out. If they are your normal thickness with a white bulb at the root, this suggests shedding. If many are noticeably thinner, shorter, or lack pigment compared to your normal hair, thinning may be occurring.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Consider the Timeline</h3>
                <p className="text-muted-foreground">
                  Did hair loss start suddenly after an event (shedding)? Or have you noticed gradual changes over months or years (thinning)? Think back to whether you can identify a trigger approximately 2-3 months before the shedding began.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Check the Pattern</h3>
                <p className="text-muted-foreground">
                  Is the loss diffuse across your entire scalp (shedding), or do you notice specific areas like a widening parting, receding temples, or thinning crown (pattern thinning)?
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Examine Your Parting</h3>
                <p className="text-muted-foreground">
                  Look at old photos. Has your parting gradually widened over time? Can you see more scalp through your hair than before? This suggests thinning. Sudden visibility without pattern change suggests shedding.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Family History</h3>
                <p className="text-muted-foreground">
                  Do parents, grandparents, or siblings have thinning hair in a specific pattern? This increases the likelihood that your hair changes involve genetic thinning, even if triggered by other factors.
                </p>
              </div>
            </div>
          </section>

          {/* Common Myths */}
          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Common Myths and Misunderstandings
            </h2>
            
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-muted/50 border border-border">
                <p className="font-medium text-foreground mb-1">Myth: All hair loss is the same</p>
                <p className="text-muted-foreground text-sm">
                  Shedding and thinning involve completely different biological processes. Shedding is a disruption to the hair cycle, while thinning involves structural changes to the follicle itself. Treatments that work for one may not work for the other.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-muted/50 border border-border">
                <p className="font-medium text-foreground mb-1">Myth: If hair is falling out, it means permanent loss</p>
                <p className="text-muted-foreground text-sm">
                  Shedding full-thickness hairs does not damage follicles. Those follicles typically begin producing new hairs immediately. Shedding usually leads to full recovery, unlike progressive thinning.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-muted/50 border border-border">
                <p className="font-medium text-foreground mb-1">Myth: You cannot have both at the same time</p>
                <p className="text-muted-foreground text-sm">
                  Many people experience both. Someone with underlying pattern thinning may also have a shedding episode. Stress or illness can trigger shedding that makes pre-existing thinning more noticeable.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-muted/50 border border-border">
                <p className="font-medium text-foreground mb-1">Myth: Thinning hair cannot become thick again</p>
                <p className="text-muted-foreground text-sm">
                  Early-stage thinning can sometimes be reversed with treatment. Miniaturised follicles may regain the ability to produce thicker hairs if treated before the follicle becomes dormant. Earlier intervention typically yields better results.
                </p>
              </div>
            </div>
          </section>

          {/* When to Seek Help */}
          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              When to Consult a Professional
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              While understanding the difference helps, professional evaluation is valuable in several situations:
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground mb-4">
              <li>You cannot determine whether you have shedding, thinning, or both</li>
              <li>Shedding has continued for more than 6 months</li>
              <li>You notice a specific pattern developing</li>
              <li>Hair loss is accompanied by scalp symptoms</li>
              <li>You want to start treatment and need guidance on the right approach</li>
              <li>Hair loss is affecting your confidence or wellbeing</li>
            </ul>
            <p className="text-foreground leading-relaxed">
              A dermatologist can perform a trichoscopy (scalp examination with magnification), conduct a pull test, and order blood work to determine the exact cause and recommend appropriate treatment.
            </p>
          </section>

          {/* AI CTA */}
          <section className="mb-10 p-6 rounded-xl bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20">
            <p className="text-foreground leading-relaxed">
              HairCare AI can help personalise this further based on your hair type, scalp condition, and goals.
            </p>
          </section>

          <FAQSection faqs={faqs} />
          
          <ChatCTA />
          
          <RelatedArticles articles={relatedArticles} />
          
          <MedicalDisclaimer />
        </article>
      </ContentPageLayout>
    </>
  );
};

export default ThinningVsSheddingPage;