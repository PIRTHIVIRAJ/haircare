import SEOHead from "@/components/SEOHead";
import ContentPageLayout from "@/components/ContentPageLayout";
import Breadcrumb from "@/components/Breadcrumb";
import FAQSection from "@/components/FAQSection";
import ChatCTA from "@/components/ChatCTA";
import MedicalDisclaimer from "@/components/MedicalDisclaimer";
import RelatedArticles from "@/components/RelatedArticles";

const StressRelatedPage = () => {
  const faqs = [
    {
      question: "How long after stress does hair fall out?",
      answer: "Hair typically begins falling out 2-3 months after a stressful event. This delay occurs because stress pushes hairs into the resting (telogen) phase, and it takes about 3 months for these hairs to complete the resting cycle and shed."
    },
    {
      question: "Can anxiety cause permanent hair loss?",
      answer: "Stress-related hair loss (telogen effluvium) is typically temporary and reversible. Once stress is managed and the body recovers, hair usually regrows within 6-12 months. However, chronic ongoing stress may prolong the shedding phase."
    },
    {
      question: "Does stress cause grey hair too?",
      answer: "Research suggests that stress may accelerate greying by depleting melanocyte stem cells in hair follicles. A 2020 study in Nature showed that stress-induced norepinephrine can damage these cells. Some grey hairs from stress may potentially reverse when stress is reduced."
    },
    {
      question: "Can stress make pattern baldness worse?",
      answer: "Yes, stress may accelerate genetic hair loss. Elevated cortisol can increase inflammation and potentially influence hormone levels. Managing stress may help slow progression, though it cannot prevent genetic hair loss entirely."
    }
  ];

  const relatedArticles = [
    {
      title: "Telogen Effluvium Explained",
      href: "/hair-loss/telogen-effluvium",
      description: "The main mechanism behind stress-related hair shedding."
    },
    {
      title: "Sudden Hair Loss",
      href: "/hair-loss/sudden-hair-loss",
      description: "Understanding unexpected hair loss and its causes."
    },
    {
      title: "When to See a Doctor",
      href: "/hair-loss/when-to-see-a-doctor",
      description: "Signs that your hair loss needs professional evaluation."
    }
  ];

  return (
    <>
      <SEOHead 
        title="Stress-Related Hair Loss: Causes, Symptoms, and Recovery | HairCare.ai"
        description="Understand how stress causes hair loss, the different types of stress-related shedding, and evidence-based strategies for recovery and prevention."
        canonicalUrl="https://haircare.ai/hair-loss/stress-related"
        articleSchema={{
          headline: "Stress-Related Hair Loss: Causes, Symptoms, and Recovery",
          description: "Understand how stress causes hair loss, the types of stress-related shedding, and strategies for recovery.",
          datePublished: "2024-12-28",
          dateModified: "2024-12-28"
        }}
        faqSchema={faqs}
      />
      
      <ContentPageLayout>
        <article className="max-w-4xl mx-auto" itemScope itemType="https://schema.org/Article">
          <Breadcrumb items={[
            { label: "Hair Loss", href: "/hair-loss" },
            { label: "Stress-Related" }
          ]} />
          
          <header className="mb-8">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4" itemProp="headline">
              Stress-Related Hair Loss
            </h1>
            <p className="text-lg text-muted-foreground">
              How stress affects your hair and what you can do about it.
            </p>
          </header>

          {/* Introduction */}
          <section className="prose prose-lg max-w-none mb-10">
            <p className="text-foreground leading-relaxed">
              The connection between stress and hair loss is real and well-documented. Whether triggered by a major life event, chronic anxiety, or physical illness, stress can significantly impact your hair. The silver lining is that stress-related hair loss is typically temporary and reversible once the underlying stressor is addressed.
            </p>
            <p className="text-foreground leading-relaxed">
              This guide explains the science behind stress-related hair loss, helps you identify whether stress is causing your shedding, and provides practical strategies for recovery.
            </p>
          </section>

          {/* Direct Answer Box */}
          <section className="mb-10 p-6 rounded-xl bg-primary/5 border border-primary/20">
            <h2 className="font-heading text-xl font-semibold text-foreground mb-3">
              Quick Answer
            </h2>
            <p className="text-foreground leading-relaxed">
              Stress causes hair loss by pushing hair follicles prematurely into the resting phase, leading to increased shedding 2-3 months later (telogen effluvium). Severe stress can also trigger alopecia areata or compulsive hair-pulling (trichotillomania). Recovery typically occurs within 6-12 months once stress is managed.
            </p>
          </section>

          {/* How Stress Affects Hair */}
          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              How Stress Affects Hair Growth
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              Hair growth is surprisingly sensitive to the body's stress response. When you experience significant stress, several biological changes occur that can impact your hair:
            </p>
            
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Cortisol and Hair Follicles</h3>
                <p className="text-muted-foreground">
                  Chronic stress elevates cortisol levels. Research shows that cortisol can inhibit hair follicle cycling and prematurely push hairs into the catagen (transitional) phase, shortening the active growth period.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Inflammation Response</h3>
                <p className="text-muted-foreground">
                  Stress triggers inflammatory responses throughout the body, including in the scalp. Inflammation around hair follicles can disrupt normal growth cycles and contribute to hair loss.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Nutrient Diversion</h3>
                <p className="text-muted-foreground">
                  During periods of stress, the body prioritises vital functions. As hair is non-essential for survival, fewer resources may be directed toward hair growth, potentially affecting hair quality and quantity.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Hormonal Shifts</h3>
                <p className="text-muted-foreground">
                  Stress can affect hormone levels, including those that influence hair. Changes in thyroid function, androgen levels, and other hormones during prolonged stress may contribute to hair changes.
                </p>
              </div>
            </div>
          </section>

          {/* Types of Stress-Related Hair Loss */}
          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Types of Stress-Related Hair Loss
            </h2>
            
            <div className="space-y-6">
              <div className="p-5 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground text-lg mb-3">Telogen Effluvium</h3>
                <p className="text-muted-foreground mb-3">
                  The most common form of stress-related hair loss. A significant stressor causes a large number of hairs to enter the resting phase simultaneously. These hairs then shed about 2-3 months later.
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  <div>
                    <p className="font-medium text-foreground text-sm mb-1">Common triggers:</p>
                    <ul className="list-disc list-inside text-muted-foreground text-sm space-y-0.5">
                      <li>Severe emotional stress</li>
                      <li>Major surgery or illness</li>
                      <li>High fever or infection</li>
                      <li>Significant weight loss</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium text-foreground text-sm mb-1">Characteristics:</p>
                    <ul className="list-disc list-inside text-muted-foreground text-sm space-y-0.5">
                      <li>Diffuse, all-over shedding</li>
                      <li>No bald patches</li>
                      <li>Typically temporary</li>
                      <li>Regrows once trigger resolves</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground text-lg mb-3">Alopecia Areata</h3>
                <p className="text-muted-foreground mb-3">
                  An autoimmune condition that can be triggered or worsened by stress. The immune system attacks hair follicles, causing sudden, patchy hair loss. Patches are typically round and smooth.
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  <div>
                    <p className="font-medium text-foreground text-sm mb-1">Stress connection:</p>
                    <ul className="list-disc list-inside text-muted-foreground text-sm space-y-0.5">
                      <li>Stress may trigger episodes</li>
                      <li>Immune dysregulation link</li>
                      <li>May occur with other autoimmune conditions</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium text-foreground text-sm mb-1">Characteristics:</p>
                    <ul className="list-disc list-inside text-muted-foreground text-sm space-y-0.5">
                      <li>Round, smooth bald patches</li>
                      <li>Can affect any hair-bearing area</li>
                      <li>Often regrows spontaneously</li>
                      <li>May recur</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground text-lg mb-3">Trichotillomania</h3>
                <p className="text-muted-foreground mb-3">
                  A compulsive hair-pulling disorder often linked to stress, anxiety, or emotional difficulties. Individuals feel an irresistible urge to pull out their own hair, typically from the scalp, eyebrows, or eyelashes.
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  <div>
                    <p className="font-medium text-foreground text-sm mb-1">Stress connection:</p>
                    <ul className="list-disc list-inside text-muted-foreground text-sm space-y-0.5">
                      <li>Often a coping mechanism</li>
                      <li>Worsens with increased stress</li>
                      <li>May coexist with anxiety disorders</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium text-foreground text-sm mb-1">Treatment:</p>
                    <ul className="list-disc list-inside text-muted-foreground text-sm space-y-0.5">
                      <li>Cognitive behavioural therapy</li>
                      <li>Habit reversal training</li>
                      <li>Sometimes medication</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Recovery and Prevention */}
          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Recovery and Prevention Strategies
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              Recovery from stress-related hair loss requires addressing both the stressor and supporting your body's ability to regrow hair:
            </p>
            
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Address the Underlying Stress</h3>
                <p className="text-muted-foreground">
                  Identify and address the source of stress where possible. This might involve lifestyle changes, therapy, or simply allowing time for recovery from an acute stressor like illness or surgery.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Stress Management Techniques</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Regular physical exercise (shown to reduce cortisol)</li>
                  <li>Mindfulness meditation or yoga</li>
                  <li>Adequate sleep (7-9 hours for most adults)</li>
                  <li>Social connection and support</li>
                  <li>Professional therapy if needed</li>
                </ul>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Nutritional Support</h3>
                <p className="text-muted-foreground">
                  Stress depletes nutrients faster. Ensure adequate intake of protein, iron, zinc, B vitamins, and vitamin D. A balanced diet supports hair regrowth. Consider blood tests to check for deficiencies.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Gentle Hair Care</h3>
                <p className="text-muted-foreground">
                  Treat your hair gently during recovery. Avoid tight hairstyles, excessive heat styling, and harsh chemical treatments. This reduces additional stress on already vulnerable follicles.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Patience</h3>
                <p className="text-muted-foreground">
                  Hair regrowth takes time. Even after stress resolves, expect 6-12 months for full recovery. New hairs need to go through their entire growth cycle, growing approximately 1 centimetre per month.
                </p>
              </div>
            </div>
          </section>

          {/* Common Myths */}
          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Common Myths About Stress and Hair Loss
            </h2>
            
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-muted/50 border border-border">
                <p className="font-medium text-foreground mb-1">Myth: Only major trauma causes stress-related hair loss</p>
                <p className="text-muted-foreground text-sm">
                  While acute stressors like surgery or bereavement are common triggers, chronic low-level stress can also contribute to hair shedding. The cumulative effect of ongoing stress should not be underestimated.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-muted/50 border border-border">
                <p className="font-medium text-foreground mb-1">Myth: Once stress stops, hair immediately recovers</p>
                <p className="text-muted-foreground text-sm">
                  Hair follows a delayed response. Shedding continues for weeks after stress ends because hairs already in the resting phase must complete their cycle. Regrowth then takes months to become visible.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-muted/50 border border-border">
                <p className="font-medium text-foreground mb-1">Myth: Worrying about hair loss does not make it worse</p>
                <p className="text-muted-foreground text-sm">
                  Paradoxically, stress about hair loss can perpetuate the problem. Breaking this cycle by managing anxiety about shedding is an important part of recovery. Seek support if hair loss is causing significant distress.
                </p>
              </div>
            </div>
          </section>

          {/* When to Seek Help */}
          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              When to Seek Professional Help
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              Consider consulting a healthcare provider if:
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground mb-4">
              <li>Hair loss is accompanied by patchy bald spots (may indicate alopecia areata)</li>
              <li>You notice signs of hair-pulling behaviours</li>
              <li>Shedding continues beyond 6 months without improvement</li>
              <li>You experience other symptoms alongside hair loss (fatigue, weight changes)</li>
              <li>Stress or anxiety feels unmanageable</li>
              <li>Hair loss is significantly affecting your quality of life</li>
            </ul>
            <p className="text-foreground leading-relaxed">
              A dermatologist can confirm whether stress is the cause and rule out other conditions. A mental health professional can help address underlying stress and anxiety.
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

export default StressRelatedPage;