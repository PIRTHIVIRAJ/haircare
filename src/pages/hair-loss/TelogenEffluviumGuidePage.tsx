import SEOHead from "@/components/SEOHead";
import ContentPageLayout from "@/components/ContentPageLayout";
import Breadcrumb from "@/components/Breadcrumb";
import FAQSection from "@/components/FAQSection";
import ChatCTA from "@/components/ChatCTA";
import MedicalDisclaimer from "@/components/MedicalDisclaimer";
import RelatedArticles from "@/components/RelatedArticles";

const TelogenEffluviumGuidePage = () => {
  const faqs = [
    {
      question: "How can I tell if I have telogen effluvium?",
      answer: "Signs include sudden increased shedding (more than 100-150 hairs daily), diffuse thinning across the scalp rather than patches, a trigger event 2-3 months before shedding began, and no scalp symptoms like itching or pain. A dermatologist can confirm the diagnosis."
    },
    {
      question: "What percentage of hair falls out with telogen effluvium?",
      answer: "In normal conditions, about 10-15% of hair is in the telogen (shedding) phase. With telogen effluvium, up to 30-50% of hairs may shift to the telogen phase, leading to noticeably increased shedding. Despite this, complete baldness does not occur."
    },
    {
      question: "Can I colour or treat my hair during telogen effluvium?",
      answer: "It is generally best to minimise chemical treatments during active shedding to avoid additional stress on vulnerable hair. If you choose to colour, use gentle formulations and ensure your scalp is healthy. The chemicals do not affect hair follicles but may increase breakage."
    },
    {
      question: "Is telogen effluvium different from postpartum hair loss?",
      answer: "Postpartum hair loss is a specific type of telogen effluvium. During pregnancy, hormones keep hair in the growth phase. After delivery, hormones drop and these hairs enter telogen simultaneously, causing pronounced shedding 2-4 months postpartum."
    }
  ];

  const relatedArticles = [
    {
      title: "Hair Thinning vs Hair Shedding",
      href: "/hair-loss/thinning-vs-shedding",
      description: "Understanding the difference between these two types of hair loss."
    },
    {
      title: "Stress-Related Hair Loss",
      href: "/hair-loss/stress-related",
      description: "How stress triggers telogen effluvium and other hair conditions."
    },
    {
      title: "Medical Tests for Hair Loss",
      href: "/hair-loss/medical-tests",
      description: "Diagnostic tests that can identify the cause of your shedding."
    }
  ];

  return (
    <>
      <SEOHead 
        title="Telogen Effluvium Explained: Causes, Timeline, and Recovery | HairCare.ai"
        description="Complete guide to telogen effluvium, the most common cause of sudden hair shedding. Learn about triggers, the hair cycle, and how long recovery takes."
        canonicalUrl="https://haircare.ai/hair-loss/telogen-effluvium"
        articleSchema={{
          headline: "Telogen Effluvium Explained: Causes, Timeline, and Recovery",
          description: "Complete guide to telogen effluvium, the most common cause of sudden hair shedding.",
          datePublished: "2024-12-28",
          dateModified: "2024-12-28"
        }}
        faqSchema={faqs}
      />
      
      <ContentPageLayout>
        <article className="max-w-4xl mx-auto" itemScope itemType="https://schema.org/Article">
          <Breadcrumb items={[
            { label: "Hair Loss", href: "/hair-loss" },
            { label: "Telogen Effluvium" }
          ]} />
          
          <header className="mb-8">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4" itemProp="headline">
              Telogen Effluvium Explained
            </h1>
            <p className="text-lg text-muted-foreground">
              Understanding the most common cause of sudden, diffuse hair shedding.
            </p>
          </header>

          {/* Introduction */}
          <section className="prose prose-lg max-w-none mb-10">
            <p className="text-foreground leading-relaxed">
              If you have noticed handfuls of hair coming out in the shower, on your brush, or accumulating on your pillow, you may be experiencing telogen effluvium. This condition is the most common cause of sudden, diffuse hair shedding and affects both men and women. While alarming, it is typically temporary and reversible.
            </p>
            <p className="text-foreground leading-relaxed">
              This guide provides a comprehensive overview of telogen effluvium, explaining what happens in your hair follicles, what triggers it, and what you can expect during recovery.
            </p>
          </section>

          {/* Direct Answer Box */}
          <section className="mb-10 p-6 rounded-xl bg-primary/5 border border-primary/20">
            <h2 className="font-heading text-xl font-semibold text-foreground mb-3">
              Quick Answer
            </h2>
            <p className="text-foreground leading-relaxed">
              Telogen effluvium occurs when a shock to the body pushes a large number of hair follicles into the resting (telogen) phase simultaneously. About 2-3 months later, these hairs shed, causing noticeable diffuse thinning. Common triggers include illness, surgery, stress, nutritional deficiency, and hormonal changes. Hair typically regrows within 6-12 months.
            </p>
          </section>

          {/* Understanding the Hair Cycle */}
          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Understanding the Hair Growth Cycle
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              To understand telogen effluvium, you need to know how hair grows. Each hair follicle cycles through three distinct phases:
            </p>
            
            <div className="space-y-4 mb-4">
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Anagen Phase (Growth)</h3>
                <p className="text-muted-foreground">
                  The active growth phase lasting 2-7 years. About 85-90% of your hair is normally in this phase. During anagen, the hair shaft grows approximately 1 centimetre per month.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Catagen Phase (Transition)</h3>
                <p className="text-muted-foreground">
                  A brief transitional phase lasting 2-3 weeks. The hair follicle shrinks and detaches from the blood supply. About 1% of hair is in this phase at any time.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Telogen Phase (Resting)</h3>
                <p className="text-muted-foreground">
                  The resting phase lasting about 3 months. The hair remains in the follicle but is not growing. At the end of telogen, the hair sheds and a new anagen hair begins growing. Normally, 10-15% of hair is in telogen.
                </p>
              </div>
            </div>

            <p className="text-foreground leading-relaxed">
              In telogen effluvium, a triggering event causes a significantly higher percentage of hairs (up to 30-50%) to enter the telogen phase at the same time. When these hairs reach the end of the 3-month resting period, they all shed together, causing noticeable hair loss.
            </p>
          </section>

          {/* Common Triggers */}
          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Common Triggers for Telogen Effluvium
            </h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Physical Stressors</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Major surgery or anaesthesia</li>
                  <li>Severe or prolonged illness</li>
                  <li>High fever (especially COVID-19)</li>
                  <li>Significant blood loss</li>
                  <li>Physical trauma or accident</li>
                  <li>Childbirth</li>
                </ul>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Emotional Stressors</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Death of a loved one</li>
                  <li>Divorce or relationship breakdown</li>
                  <li>Job loss or financial stress</li>
                  <li>Major life changes</li>
                  <li>Chronic severe anxiety</li>
                </ul>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Nutritional Factors</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Crash dieting or severe calorie restriction</li>
                  <li>Iron deficiency</li>
                  <li>Protein malnutrition</li>
                  <li>Zinc or vitamin D deficiency</li>
                  <li>Eating disorders</li>
                </ul>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Hormonal Changes</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Stopping birth control pills</li>
                  <li>Thyroid disorders</li>
                  <li>Postpartum hormone shifts</li>
                  <li>Starting or stopping hormone therapy</li>
                </ul>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Medications</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Beta-blockers</li>
                  <li>Retinoids (vitamin A derivatives)</li>
                  <li>Anticoagulants</li>
                  <li>Antidepressants</li>
                  <li>Anticonvulsants</li>
                </ul>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Recent Infections</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>COVID-19 (particularly common trigger)</li>
                  <li>Influenza</li>
                  <li>Other viral infections</li>
                  <li>Severe bacterial infections</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Timeline */}
          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Timeline: What to Expect
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-semibold">Trigger</span>
                </div>
                <div className="pt-2">
                  <h3 className="font-semibold text-foreground mb-1">The Triggering Event</h3>
                  <p className="text-muted-foreground">
                    The stressor occurs—this could be illness, surgery, emotional trauma, or another significant event. At this point, affected follicles begin transitioning from growth to resting phase.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-semibold text-sm text-center leading-tight">
                    2-3<br />month
                  </span>
                </div>
                <div className="pt-2">
                  <h3 className="font-semibold text-foreground mb-1">Shedding Begins</h3>
                  <p className="text-muted-foreground">
                    Increased hair shedding becomes noticeable. This is when most people first notice the problem, often not connecting it to an event that happened months earlier.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-semibold text-sm text-center leading-tight">
                    3-6<br />month
                  </span>
                </div>
                <div className="pt-2">
                  <h3 className="font-semibold text-foreground mb-1">Peak Shedding</h3>
                  <p className="text-muted-foreground">
                    Shedding may continue or intensify. This can be the most distressing period. New hairs are already beginning to grow, but are too short to be visible.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-semibold text-sm text-center leading-tight">
                    6-12<br />month
                  </span>
                </div>
                <div className="pt-2">
                  <h3 className="font-semibold text-foreground mb-1">Recovery</h3>
                  <p className="text-muted-foreground">
                    Shedding slows and new hair growth becomes visible. Short, new hairs may create a frizzy appearance initially. Full recovery to previous density typically takes 12-18 months.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Acute vs Chronic */}
          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Acute vs Chronic Telogen Effluvium
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground text-lg mb-3">Acute Telogen Effluvium</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Lasts less than 6 months</li>
                  <li>Usually has identifiable trigger</li>
                  <li>Resolves spontaneously</li>
                  <li>Full recovery expected</li>
                  <li>Single episode in most cases</li>
                </ul>
              </div>

              <div className="p-5 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground text-lg mb-3">Chronic Telogen Effluvium</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Persists beyond 6 months</li>
                  <li>May lack obvious trigger</li>
                  <li>Fluctuates in severity</li>
                  <li>More common in women 30-60</li>
                  <li>Requires medical evaluation</li>
                  <li>May need treatment of underlying cause</li>
                </ul>
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
                <p className="font-medium text-foreground mb-1">Myth: Telogen effluvium causes permanent baldness</p>
                <p className="text-muted-foreground text-sm">
                  Telogen effluvium does not damage hair follicles. The follicles remain capable of producing new hair. Unless there is an underlying condition like pattern baldness, full recovery is expected.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-muted/50 border border-border">
                <p className="font-medium text-foreground mb-1">Myth: You should avoid washing your hair to prevent more loss</p>
                <p className="text-muted-foreground text-sm">
                  Hair in the telogen phase will shed regardless of washing. The hairs you see coming out during washing were already detached. Regular washing maintains scalp health and does not increase shedding.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-muted/50 border border-border">
                <p className="font-medium text-foreground mb-1">Myth: Supplements will speed up recovery</p>
                <p className="text-muted-foreground text-sm">
                  Unless you have a specific nutritional deficiency, supplements are unlikely to accelerate recovery. Hair regrowth follows its natural timeline. However, correcting a proven deficiency is important.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-muted/50 border border-border">
                <p className="font-medium text-foreground mb-1">Myth: The shedding amount predicts outcome</p>
                <p className="text-muted-foreground text-sm">
                  Even dramatic shedding typically resolves fully. The amount of hair lost during telogen effluvium does not determine long-term outcomes, as follicles remain intact and will produce new hair.
                </p>
              </div>
            </div>
          </section>

          {/* When to Seek Help */}
          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              When to See a Doctor
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              While telogen effluvium often resolves without medical intervention, consult a healthcare provider if:
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground mb-4">
              <li>Shedding continues beyond 6 months without improvement</li>
              <li>You cannot identify a triggering event</li>
              <li>You notice patchy loss rather than diffuse thinning</li>
              <li>Scalp symptoms accompany the hair loss</li>
              <li>You have other symptoms suggesting hormonal or nutritional issues</li>
              <li>Hair loss is causing significant distress</li>
            </ul>
            <p className="text-foreground leading-relaxed">
              A dermatologist can confirm the diagnosis, rule out other conditions, and check for underlying causes that may need treatment.
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

export default TelogenEffluviumGuidePage;