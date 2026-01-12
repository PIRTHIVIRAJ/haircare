import SEOHead from "@/components/SEOHead";
import ContentPageLayout from "@/components/ContentPageLayout";
import Breadcrumb from "@/components/Breadcrumb";
import FAQSection from "@/components/FAQSection";
import ChatCTA from "@/components/ChatCTA";
import MedicalDisclaimer from "@/components/MedicalDisclaimer";
import RelatedArticles from "@/components/RelatedArticles";

const GeneticVsHormonalPage = () => {
  const faqs = [
    {
      question: "Can you have both genetic and hormonal hair loss?",
      answer: "Yes, and in fact, androgenetic alopecia (pattern baldness) involves both genetic and hormonal factors working together. Your genes determine how sensitive your hair follicles are to hormones like DHT. Additionally, you can have pattern baldness alongside a separate hormonal condition like thyroid disease."
    },
    {
      question: "Is genetic hair loss preventable?",
      answer: "While you cannot change your genetic predisposition, you can slow or halt progression with medical treatments like finasteride and minoxidil. The earlier treatment begins, the more hair can be preserved. Genetic hair loss is manageable, though not curable."
    },
    {
      question: "How do I know if my hair loss is hormonal?",
      answer: "Signs of hormonal hair loss include diffuse thinning, other symptoms of hormonal imbalance (fatigue, weight changes, menstrual irregularities), and hair loss that started after a hormonal event like menopause or stopping birth control. Blood tests can confirm hormonal imbalances."
    },
    {
      question: "Will treating a hormonal imbalance regrow my hair?",
      answer: "If hair loss is caused by a treatable hormonal condition like thyroid disease, correcting the imbalance often leads to hair regrowth. Recovery typically takes several months to a year. If genetic pattern loss is also present, that component will require separate treatment."
    }
  ];

  const relatedArticles = [
    {
      title: "Causes of Hair Loss in Women",
      href: "/hair-loss/causes-in-women",
      description: "How hormones uniquely affect female hair loss patterns."
    },
    {
      title: "Medical Tests for Hair Loss",
      href: "/hair-loss/medical-tests",
      description: "Blood tests and evaluations to identify the cause of your hair loss."
    },
    {
      title: "Telogen Effluvium Explained",
      href: "/hair-loss/telogen-effluvium",
      description: "Understanding stress and hormone-related temporary shedding."
    }
  ];

  return (
    <>
      <SEOHead 
        title="Genetic vs Hormonal Hair Loss: Understanding the Difference | HairCare.ai"
        description="Learn to distinguish between genetic hair loss (pattern baldness) and hormonal hair loss. Understand how each type develops and what treatments work best."
        canonicalUrl="https://haircare.ai/hair-loss/genetic-vs-hormonal"
        articleSchema={{
          headline: "Genetic vs Hormonal Hair Loss: Understanding the Difference",
          description: "Learn to distinguish between genetic hair loss and hormonal hair loss, how each develops, and what treatments work best.",
          datePublished: "2024-12-28",
          dateModified: "2024-12-28"
        }}
        faqSchema={faqs}
      />
      
      <ContentPageLayout>
        <article className="max-w-4xl mx-auto" itemScope itemType="https://schema.org/Article">
          <Breadcrumb items={[
            { label: "Hair Loss", href: "/hair-loss" },
            { label: "Genetic vs Hormonal" }
          ]} />
          
          <header className="mb-8">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4" itemProp="headline">
              Genetic vs Hormonal Hair Loss
            </h1>
            <p className="text-lg text-muted-foreground">
              Understanding the difference between these two major causes of hair loss.
            </p>
          </header>

          {/* Introduction */}
          <section className="prose prose-lg max-w-none mb-10">
            <p className="text-foreground leading-relaxed">
              When investigating hair loss, two terms frequently emerge: genetic and hormonal. These categories can seem confusing because they overlap in significant ways. Pattern baldness, the most common type of hair loss, involves both genetic predisposition and hormonal activity. Yet purely hormonal causes, such as thyroid disorders, represent a distinct category with different implications for treatment.
            </p>
            <p className="text-foreground leading-relaxed">
              Understanding whether your hair loss is primarily genetic, hormonal, or both is essential for choosing the most effective treatment approach. This guide clarifies the distinction and helps you identify which factors may be affecting your hair.
            </p>
          </section>

          {/* Direct Answer Box */}
          <section className="mb-10 p-6 rounded-xl bg-primary/5 border border-primary/20">
            <h2 className="font-heading text-xl font-semibold text-foreground mb-3">
              Quick Answer
            </h2>
            <p className="text-foreground leading-relaxed">
              Genetic hair loss (androgenetic alopecia) is inherited and causes progressive pattern thinning due to follicle sensitivity to DHT. Hormonal hair loss results from imbalances in thyroid, oestrogen, or other hormones and often causes diffuse shedding that may be reversible. Pattern baldness involves both genetics and hormones, while pure hormonal causes can often be corrected with medical treatment.
            </p>
          </section>

          {/* What is Genetic Hair Loss */}
          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              What is Genetic Hair Loss?
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              Genetic hair loss, clinically called androgenetic alopecia, is the most common cause of hair loss worldwide. It affects up to 80% of men and 50% of women over their lifetime. The term "genetic" refers to the inherited predisposition that determines whether and how severely this condition will affect you.
            </p>
            
            <div className="p-4 rounded-lg bg-card border border-border mb-4">
              <h3 className="font-semibold text-foreground mb-2">The Genetics Behind Pattern Baldness</h3>
              <p className="text-muted-foreground mb-2">
                Multiple genes contribute to androgenetic alopecia. The most studied is the androgen receptor gene on the X chromosome, which influences how hair follicles respond to dihydrotestosterone (DHT). However, genes from both parents play a role:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Genes affecting androgen receptor sensitivity</li>
                <li>Genes controlling 5-alpha reductase enzyme activity</li>
                <li>Genes influencing follicle cycling and growth phases</li>
                <li>Genes related to inflammation and immune responses</li>
              </ul>
            </div>

            <p className="text-foreground leading-relaxed mb-4">
              In genetic hair loss, hair follicles are progressively miniaturised. Over time, thick terminal hairs are replaced by thin, short, barely visible vellus hairs. The pattern is characteristic:
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-card border border-border">
                <h4 className="font-semibold text-foreground mb-2">Male Pattern</h4>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Receding hairline at temples</li>
                  <li>Thinning at the crown</li>
                  <li>Progressive connection of these areas</li>
                  <li>Preservation of hair at sides and back</li>
                </ul>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h4 className="font-semibold text-foreground mb-2">Female Pattern</h4>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Widening central parting</li>
                  <li>Diffuse thinning on crown</li>
                  <li>Usually preserved frontal hairline</li>
                  <li>Rarely progresses to complete baldness</li>
                </ul>
              </div>
            </div>
          </section>

          {/* What is Hormonal Hair Loss */}
          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              What is Hormonal Hair Loss?
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              Hormonal hair loss refers to shedding or thinning caused by imbalances in the body's hormones, separate from the genetic sensitivity seen in pattern baldness. Several hormonal conditions can affect hair:
            </p>
            
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Thyroid Disorders</h3>
                <p className="text-muted-foreground">
                  Both hypothyroidism (underactive) and hyperthyroidism (overactive) can cause diffuse hair loss. Thyroid hormones regulate metabolism in every cell, including hair follicles. With treatment, thyroid-related hair loss is typically reversible, though regrowth may take 6-12 months.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Oestrogen and Progesterone Changes</h3>
                <p className="text-muted-foreground">
                  Fluctuations in female hormones significantly impact hair. This includes pregnancy (increased oestrogen keeps hair in growth phase), postpartum (sudden drop triggers shedding), menopause (declining oestrogen shifts balance toward androgens), and hormonal contraceptive changes.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Polycystic Ovary Syndrome (PCOS)</h3>
                <p className="text-muted-foreground">
                  PCOS causes elevated androgen levels in women, leading to hair thinning on the scalp alongside excess facial and body hair. This represents a hormonally-driven hair loss that may benefit from anti-androgen treatments.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Cortisol and Stress Hormones</h3>
                <p className="text-muted-foreground">
                  Chronic elevation of stress hormones can trigger telogen effluvium and may contribute to longer-term hair issues. The relationship between cortisol and hair loss is an active area of research.
                </p>
              </div>
            </div>
          </section>

          {/* Key Differences */}
          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Key Differences Between Genetic and Hormonal Hair Loss
            </h2>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-border rounded-lg">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="border border-border p-3 text-left font-semibold text-foreground">Feature</th>
                    <th className="border border-border p-3 text-left font-semibold text-foreground">Genetic (Pattern)</th>
                    <th className="border border-border p-3 text-left font-semibold text-foreground">Hormonal</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border p-3 text-foreground font-medium">Pattern</td>
                    <td className="border border-border p-3 text-muted-foreground">Characteristic (temples, crown)</td>
                    <td className="border border-border p-3 text-muted-foreground">Usually diffuse, all-over thinning</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 text-foreground font-medium">Onset</td>
                    <td className="border border-border p-3 text-muted-foreground">Gradual, over years</td>
                    <td className="border border-border p-3 text-muted-foreground">Can be sudden or gradual</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 text-foreground font-medium">Reversibility</td>
                    <td className="border border-border p-3 text-muted-foreground">Manageable, not fully reversible</td>
                    <td className="border border-border p-3 text-muted-foreground">Often fully reversible with treatment</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 text-foreground font-medium">Family history</td>
                    <td className="border border-border p-3 text-muted-foreground">Usually present</td>
                    <td className="border border-border p-3 text-muted-foreground">May or may not be present</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 text-foreground font-medium">Other symptoms</td>
                    <td className="border border-border p-3 text-muted-foreground">None (hair only)</td>
                    <td className="border border-border p-3 text-muted-foreground">Often present (fatigue, weight change)</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 text-foreground font-medium">Treatment focus</td>
                    <td className="border border-border p-3 text-muted-foreground">Block DHT, stimulate growth</td>
                    <td className="border border-border p-3 text-muted-foreground">Correct underlying imbalance</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* The Overlap */}
          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              The Overlap: Where Genetics and Hormones Intersect
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              The distinction between genetic and hormonal hair loss is not always clear-cut. In androgenetic alopecia, both factors are essential:
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground mb-4">
              <li><strong>Genetics</strong> determines whether your hair follicles are sensitive to DHT</li>
              <li><strong>Hormones</strong> (specifically DHT) act on those genetically susceptible follicles</li>
              <li>Without genetic sensitivity, high DHT levels would not cause hair loss</li>
              <li>Without DHT, even genetically susceptible follicles would remain healthy</li>
            </ul>
            <p className="text-foreground leading-relaxed">
              This is why treatments like finasteride (which reduces DHT) are effective for genetic hair loss—they address the hormonal component even though the underlying susceptibility is genetic.
            </p>
          </section>

          {/* Common Myths */}
          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Common Myths and Misunderstandings
            </h2>
            
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-muted/50 border border-border">
                <p className="font-medium text-foreground mb-1">Myth: If my parents have good hair, I cannot have genetic hair loss</p>
                <p className="text-muted-foreground text-sm">
                  Hair loss genes can skip generations or be carried without being expressed. You may have inherited susceptibility genes from grandparents or other relatives even if your parents have full heads of hair.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-muted/50 border border-border">
                <p className="font-medium text-foreground mb-1">Myth: Hormonal hair loss means something is seriously wrong</p>
                <p className="text-muted-foreground text-sm">
                  While hormonal hair loss should be investigated, it often results from treatable conditions like thyroid imbalance or normal life transitions like menopause. Many hormonal causes are readily correctable.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-muted/50 border border-border">
                <p className="font-medium text-foreground mb-1">Myth: You must choose between genetic or hormonal as the cause</p>
                <p className="text-muted-foreground text-sm">
                  Many people have multiple contributing factors. You might have genetic pattern loss that was unmasked or accelerated by a hormonal event like pregnancy or menopause. Both factors may need to be addressed.
                </p>
              </div>
            </div>
          </section>

          {/* When to Seek Help */}
          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              When to Seek Professional Evaluation
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              Consider consulting a healthcare provider if:
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground mb-4">
              <li>You are unsure whether your hair loss is genetic or hormonal</li>
              <li>Hair loss is accompanied by other symptoms (fatigue, weight changes, menstrual irregularities)</li>
              <li>The pattern of loss is unusual or does not match typical genetic patterns</li>
              <li>Hair loss appeared suddenly or is progressing rapidly</li>
              <li>You want to confirm the diagnosis before starting treatment</li>
            </ul>
            <p className="text-foreground leading-relaxed">
              A dermatologist can perform a scalp examination, take a detailed history, and order blood tests to check hormone levels, thyroid function, and nutritional status. Accurate diagnosis is essential for effective treatment.
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

export default GeneticVsHormonalPage;