import SEOHead from "@/components/SEOHead";
import ContentPageLayout from "@/components/ContentPageLayout";
import Breadcrumb from "@/components/Breadcrumb";
import FAQSection from "@/components/FAQSection";
import ChatCTA from "@/components/ChatCTA";
import MedicalDisclaimer from "@/components/MedicalDisclaimer";
import RelatedArticles from "@/components/RelatedArticles";

const CausesInMenPage = () => {
  const faqs = [
    {
      question: "At what age do men typically start losing hair?",
      answer: "Male pattern baldness can begin as early as the late teens or early twenties, though it becomes more noticeable in the thirties and forties. By age 50, approximately 50% of men have some degree of visible hair loss. The earlier it begins, the more extensive it tends to become."
    },
    {
      question: "Is hair loss from my mother's or father's side?",
      answer: "Hair loss genes can come from either parent. While the androgen receptor gene on the X chromosome (from the mother) plays a role, research shows that having a father with baldness also significantly increases risk. The inheritance pattern is complex and involves multiple genes."
    },
    {
      question: "Can wearing hats cause hair loss?",
      answer: "No, wearing hats does not cause hair loss. This is a common myth. Hair loss occurs at the follicle level and is influenced by genetics, hormones, and other internal factors. Hats do not affect testosterone or DHT levels in the scalp."
    },
    {
      question: "Will I go completely bald if I start losing hair?",
      answer: "Not necessarily. The extent of hair loss varies greatly between individuals. Some men experience only minor recession at the temples or crown, while others progress to extensive baldness. Treatment can slow or halt progression in many cases."
    }
  ];

  const relatedArticles = [
    {
      title: "Genetic vs Hormonal Hair Loss",
      href: "/hair-loss/genetic-vs-hormonal",
      description: "Understanding the role of genetics and hormones in male hair loss."
    },
    {
      title: "How to Diagnose Hair Loss",
      href: "/hair-loss/diagnosis",
      description: "Methods used to identify the type and cause of your hair loss."
    },
    {
      title: "Stress-Related Hair Loss",
      href: "/hair-loss/stress-related",
      description: "How stress affects hair in men and what you can do about it."
    }
  ];

  return (
    <>
      <SEOHead 
        title="Common Causes of Hair Loss in Men | HairCare.ai"
        description="Learn about the main causes of male hair loss including genetics, hormones, and lifestyle factors. Understand the science and explore your options."
        canonicalUrl="https://haircare.ai/hair-loss/causes-in-men"
        articleSchema={{
          headline: "Common Causes of Hair Loss in Men",
          description: "Learn about the main causes of male hair loss including genetics, hormones, and lifestyle factors.",
          datePublished: "2024-12-28",
          dateModified: "2024-12-28"
        }}
        faqSchema={faqs}
      />
      
      <ContentPageLayout>
        <article className="max-w-4xl mx-auto" itemScope itemType="https://schema.org/Article">
          <Breadcrumb items={[
            { label: "Hair Loss", href: "/hair-loss" },
            { label: "Causes in Men" }
          ]} />
          
          <header className="mb-8">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4" itemProp="headline">
              Common Causes of Hair Loss in Men
            </h1>
            <p className="text-lg text-muted-foreground">
              Understanding why male hair loss happens and what determines its progression.
            </p>
          </header>

          {/* Introduction */}
          <section className="prose prose-lg max-w-none mb-10">
            <p className="text-foreground leading-relaxed">
              Hair loss affects the majority of men at some point in their lives. By age 35, approximately two-thirds of men experience some degree of appreciable hair loss, and by age 50, around 85% have significantly thinner hair. For many men, this is an unwelcome but expected part of ageing. For others, it begins earlier and progresses more rapidly.
            </p>
            <p className="text-foreground leading-relaxed">
              Understanding why men lose hair is the first step toward making informed decisions about prevention and treatment. While genetics plays the dominant role, several other factors can contribute to or accelerate hair loss.
            </p>
          </section>

          {/* Direct Answer Box */}
          <section className="mb-10 p-6 rounded-xl bg-primary/5 border border-primary/20">
            <h2 className="font-heading text-xl font-semibold text-foreground mb-3">
              Quick Answer
            </h2>
            <p className="text-foreground leading-relaxed">
              The primary cause of hair loss in men is androgenetic alopecia (male pattern baldness), driven by genetics and the hormone dihydrotestosterone (DHT). Other causes include telogen effluvium from stress or illness, alopecia areata (autoimmune), nutritional deficiencies, and certain medications. Pattern baldness is progressive but treatable.
            </p>
          </section>

          {/* Male Pattern Baldness */}
          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Male Pattern Baldness (Androgenetic Alopecia)
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              Androgenetic alopecia accounts for more than 95% of hair loss in men. It results from a combination of genetic predisposition and the effects of androgens (male hormones), particularly dihydrotestosterone (DHT).
            </p>
            
            <div className="p-4 rounded-lg bg-card border border-border mb-4">
              <h3 className="font-semibold text-foreground mb-2">How DHT Causes Hair Loss</h3>
              <p className="text-muted-foreground">
                DHT is converted from testosterone by the enzyme 5-alpha reductase. In men with a genetic sensitivity, DHT binds to receptors in scalp hair follicles, causing them to shrink over time. This process, called follicular miniaturisation, produces progressively thinner, shorter, and less pigmented hairs until the follicle eventually stops producing visible hair altogether.
              </p>
            </div>

            <p className="text-foreground leading-relaxed mb-4">
              The characteristic pattern of male baldness follows predictable stages, typically beginning with recession at the temples and thinning at the crown, eventually progressing to more extensive loss. The Norwood-Hamilton scale classifies these stages from I (minimal recession) to VII (extensive baldness).
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-card border border-border">
                <h4 className="font-semibold text-foreground mb-2">Common Early Signs</h4>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Receding hairline at the temples</li>
                  <li>Thinning at the crown (vertex)</li>
                  <li>More scalp visible when hair is wet</li>
                  <li>Miniaturised hairs among normal hairs</li>
                </ul>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h4 className="font-semibold text-foreground mb-2">Progression Factors</h4>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Earlier onset typically means faster progression</li>
                  <li>Family history on both sides matters</li>
                  <li>Treatment can slow or halt progression</li>
                  <li>Rate varies significantly between individuals</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Other Causes */}
          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Other Causes of Hair Loss in Men
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              While pattern baldness is the predominant cause, other factors can contribute to or cause hair loss in men:
            </p>
            
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Telogen Effluvium</h3>
                <p className="text-muted-foreground">
                  A form of temporary, diffuse shedding triggered by physical or emotional stress, illness, surgery, rapid weight loss, or nutritional deficiencies. Unlike pattern baldness, telogen effluvium causes overall thinning rather than a receding pattern and typically resolves once the trigger is addressed.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Alopecia Areata</h3>
                <p className="text-muted-foreground">
                  An autoimmune condition where the immune system attacks hair follicles, causing round, smooth bald patches. It can affect men of any age and may be limited to one or two patches or progress to more extensive loss. Hair can regrow spontaneously but may fall out again.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Thyroid Disorders</h3>
                <p className="text-muted-foreground">
                  Both hypothyroidism and hyperthyroidism can cause diffuse hair thinning. Hair loss from thyroid disorders is typically reversible with proper treatment of the underlying condition.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Nutritional Deficiencies</h3>
                <p className="text-muted-foreground">
                  Deficiencies in iron, zinc, protein, biotin, and vitamin D have been associated with hair loss. While less common in men than women, these can contribute to shedding, particularly in those with restricted diets or malabsorption issues.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Medications</h3>
                <p className="text-muted-foreground">
                  Certain medications can cause hair shedding as a side effect. These include some blood thinners, blood pressure medications, antidepressants, chemotherapy drugs, and anabolic steroids. Medication-related hair loss is often reversible when the medication is changed or discontinued.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Scarring Alopecia</h3>
                <p className="text-muted-foreground">
                  A group of conditions where inflammation destroys hair follicles and replaces them with scar tissue, causing permanent hair loss. These conditions are less common but require early diagnosis and treatment to prevent progression.
                </p>
              </div>
            </div>
          </section>

          {/* Lifestyle Factors */}
          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Lifestyle Factors and Hair Loss
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              While genetics and hormones are the primary drivers of male hair loss, lifestyle factors can influence the condition:
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-card border border-border">
                <h4 className="font-semibold text-foreground mb-2">May Accelerate Hair Loss</h4>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Smoking (reduces blood flow to follicles)</li>
                  <li>High stress levels</li>
                  <li>Poor diet lacking key nutrients</li>
                  <li>Certain hairstyles causing tension</li>
                </ul>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h4 className="font-semibold text-foreground mb-2">May Support Hair Health</h4>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Balanced diet with adequate protein</li>
                  <li>Regular exercise (improves circulation)</li>
                  <li>Stress management</li>
                  <li>Adequate sleep</li>
                </ul>
              </div>
            </div>

            <p className="text-foreground leading-relaxed mt-4">
              It is important to note that lifestyle changes alone cannot prevent genetically determined hair loss, but they may support overall hair health and potentially slow progression.
            </p>
          </section>

          {/* Common Myths */}
          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Common Myths About Male Hair Loss
            </h2>
            
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-muted/50 border border-border">
                <p className="font-medium text-foreground mb-1">Myth: Hair loss comes only from your mother's father</p>
                <p className="text-muted-foreground text-sm">
                  While the androgen receptor gene is on the X chromosome (inherited from mothers), many other genes on both X and Y chromosomes contribute to hair loss. Having a balding father significantly increases your risk, regardless of your maternal grandfather's hair.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-muted/50 border border-border">
                <p className="font-medium text-foreground mb-1">Myth: High testosterone causes baldness</p>
                <p className="text-muted-foreground text-sm">
                  Men who go bald do not necessarily have higher testosterone levels. The issue is genetic sensitivity to DHT in the scalp, not overall testosterone levels. Many men with high testosterone retain full heads of hair.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-muted/50 border border-border">
                <p className="font-medium text-foreground mb-1">Myth: Once you start losing hair, nothing can stop it</p>
                <p className="text-muted-foreground text-sm">
                  FDA-approved treatments like finasteride and minoxidil can effectively slow, stop, or in some cases partially reverse hair loss. The earlier treatment begins, the more hair can be preserved.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-muted/50 border border-border">
                <p className="font-medium text-foreground mb-1">Myth: Shampooing too often causes hair loss</p>
                <p className="text-muted-foreground text-sm">
                  Regular shampooing does not cause hair loss. Hair that falls out during washing was already in the shedding phase. Keeping the scalp clean can actually support healthy hair growth.
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
              Consider seeing a dermatologist or hair loss specialist if you experience:
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground mb-4">
              <li>Rapid or sudden hair loss</li>
              <li>Patchy bald spots rather than typical pattern thinning</li>
              <li>Scalp symptoms like itching, burning, or pain</li>
              <li>Hair loss accompanied by other symptoms (fatigue, weight changes)</li>
              <li>Uncertainty about whether your hair loss is normal</li>
              <li>Interest in starting treatment to preserve existing hair</li>
            </ul>
            <p className="text-foreground leading-relaxed">
              Early intervention typically produces better results with medical treatments. A specialist can confirm the diagnosis, rule out other causes, and discuss appropriate treatment options based on your specific situation.
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

export default CausesInMenPage;
