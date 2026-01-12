import SEOHead from "@/components/SEOHead";
import ContentPageLayout from "@/components/ContentPageLayout";
import Breadcrumb from "@/components/Breadcrumb";
import FAQSection from "@/components/FAQSection";
import ChatCTA from "@/components/ChatCTA";
import MedicalDisclaimer from "@/components/MedicalDisclaimer";
import RelatedArticles from "@/components/RelatedArticles";

const CausesInWomenPage = () => {
  const faqs = [
    {
      question: "Is it normal for women to lose hair as they age?",
      answer: "Yes, some degree of hair thinning is common as women age, particularly after menopause. Up to 40% of women experience noticeable hair loss by age 50. However, significant hair loss should be evaluated to rule out treatable causes like thyroid disorders or nutritional deficiencies."
    },
    {
      question: "Can birth control cause hair loss in women?",
      answer: "Yes, hormonal contraceptives can affect hair. Some women experience shedding when starting, switching, or stopping birth control pills. Pills with androgenic progestins are more likely to cause hair thinning in women predisposed to hormonal hair loss."
    },
    {
      question: "Does pregnancy cause permanent hair loss?",
      answer: "Postpartum hair loss is temporary. During pregnancy, elevated hormones keep hair in the growth phase. After delivery, these hairs shed simultaneously, causing noticeable loss 2-4 months postpartum. Hair typically returns to normal within 6-12 months."
    },
    {
      question: "Can stress alone cause significant hair loss in women?",
      answer: "Yes, significant physical or emotional stress can trigger telogen effluvium, causing diffuse hair shedding 2-3 months after the stressful event. This type of hair loss is usually temporary and resolves once stress levels normalise."
    }
  ];

  const relatedArticles = [
    {
      title: "Hair Thinning vs Hair Shedding",
      href: "/hair-loss/thinning-vs-shedding",
      description: "Understanding the difference between these two types of hair loss."
    },
    {
      title: "Genetic vs Hormonal Hair Loss",
      href: "/hair-loss/genetic-vs-hormonal",
      description: "How genetics and hormones contribute to female hair loss."
    },
    {
      title: "Medical Tests for Hair Loss",
      href: "/hair-loss/medical-tests",
      description: "What tests can help identify the cause of your hair loss."
    }
  ];

  return (
    <>
      <SEOHead 
        title="Common Causes of Hair Loss in Women | HairCare.ai"
        description="Explore the main causes of female hair loss including hormonal changes, genetics, stress, and nutritional factors. Learn what you can do to address each type."
        canonicalUrl="https://haircare.ai/hair-loss/causes-in-women"
        articleSchema={{
          headline: "Common Causes of Hair Loss in Women",
          description: "Explore the main causes of female hair loss including hormonal changes, genetics, stress, and nutritional factors.",
          datePublished: "2024-12-28",
          dateModified: "2024-12-28"
        }}
        faqSchema={faqs}
      />
      
      <ContentPageLayout>
        <article className="max-w-4xl mx-auto" itemScope itemType="https://schema.org/Article">
          <Breadcrumb items={[
            { label: "Hair Loss", href: "/hair-loss" },
            { label: "Causes in Women" }
          ]} />
          
          <header className="mb-8">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4" itemProp="headline">
              Common Causes of Hair Loss in Women
            </h1>
            <p className="text-lg text-muted-foreground">
              Understanding why women experience hair loss and what can be done about it.
            </p>
          </header>

          {/* Introduction */}
          <section className="prose prose-lg max-w-none mb-10">
            <p className="text-foreground leading-relaxed">
              Hair loss in women is more common than many realise. While society often associates baldness with men, millions of women experience thinning hair or increased shedding at some point in their lives. Female hair loss can be particularly distressing because of its impact on identity and self-confidence.
            </p>
            <p className="text-foreground leading-relaxed">
              The causes of hair loss in women differ somewhat from those in men, and understanding these differences is key to finding effective solutions. This guide covers the most common reasons women lose hair and offers practical guidance for each.
            </p>
          </section>

          {/* Direct Answer Box */}
          <section className="mb-10 p-6 rounded-xl bg-primary/5 border border-primary/20">
            <h2 className="font-heading text-xl font-semibold text-foreground mb-3">
              Quick Answer
            </h2>
            <p className="text-foreground leading-relaxed">
              The most common causes of hair loss in women are hormonal changes (including menopause and thyroid disorders), female pattern hair loss (genetic), telogen effluvium from stress or illness, nutritional deficiencies (particularly iron), and autoimmune conditions. Treatment depends on identifying the specific cause.
            </p>
          </section>

          {/* Hormonal Causes */}
          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Hormonal Causes of Female Hair Loss
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              Hormones play a significant role in hair growth, and fluctuations can trigger shedding or thinning. Key hormonal causes include:
            </p>
            
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Menopause and Perimenopause</h3>
                <p className="text-muted-foreground">
                  As oestrogen levels decline, the balance shifts toward androgens, which can cause hair to thin, particularly at the crown and temples. Many women notice changes in hair texture and density during and after menopause. Hormone replacement therapy may help in some cases.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Thyroid Disorders</h3>
                <p className="text-muted-foreground">
                  Both hypothyroidism (underactive thyroid) and hyperthyroidism (overactive thyroid) can cause diffuse hair loss. Thyroid hormones regulate metabolism throughout the body, including in hair follicles. Hair loss from thyroid disorders is typically reversible with proper treatment.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Polycystic Ovary Syndrome (PCOS)</h3>
                <p className="text-muted-foreground">
                  PCOS causes elevated androgen levels, which can lead to hair thinning on the scalp while causing excess hair growth on the face and body. Women with PCOS may notice gradual thinning, particularly at the crown and along the parting.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Pregnancy and Postpartum</h3>
                <p className="text-muted-foreground">
                  During pregnancy, high oestrogen levels extend the growth phase, leading to thicker hair. After delivery, hormone levels drop rapidly, causing many hairs to enter the shedding phase simultaneously. This postpartum shedding typically peaks 3-4 months after giving birth and resolves within a year.
                </p>
              </div>
            </div>
          </section>

          {/* Genetic Causes */}
          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Female Pattern Hair Loss
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              Female pattern hair loss (androgenetic alopecia) is the most common cause of progressive hair thinning in women. It affects approximately 30 million women in the United States alone and becomes more prevalent with age.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              Unlike male pattern baldness, female pattern hair loss typically presents as:
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground mb-4">
              <li>Widening of the central parting (Christmas tree pattern)</li>
              <li>Diffuse thinning across the top of the scalp</li>
              <li>Preservation of the frontal hairline in most cases</li>
              <li>Gradual reduction in hair density rather than bald patches</li>
            </ul>
            <p className="text-foreground leading-relaxed">
              Genetics plays a central role, though the inheritance pattern is complex. Having family members with thinning hair increases risk. Treatment options include topical minoxidil, oral medications, and in some cases, low-level laser therapy or hair transplantation.
            </p>
          </section>

          {/* Stress and Illness */}
          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Stress and Illness-Related Hair Loss
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              Physical and emotional stressors can trigger a type of hair loss called telogen effluvium. This occurs when a shock to the system pushes a large number of hairs into the resting phase simultaneously. Common triggers in women include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground mb-4">
              <li>Major surgery or serious illness</li>
              <li>High fever or severe infections (including COVID-19)</li>
              <li>Significant weight loss or eating disorders</li>
              <li>Emotional trauma or chronic stress</li>
              <li>Stopping hormonal contraceptives</li>
            </ul>
            <p className="text-foreground leading-relaxed">
              The shedding typically begins 2-3 months after the triggering event and can last 6 months or longer. Unlike pattern hair loss, telogen effluvium is usually temporary and hair regrows once the trigger is resolved.
            </p>
          </section>

          {/* Nutritional Factors */}
          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Nutritional Deficiencies
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              Hair is metabolically demanding tissue, and deficiencies in key nutrients can lead to increased shedding or poor hair quality. Women are particularly susceptible to certain deficiencies:
            </p>
            
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Iron Deficiency</h3>
                <p className="text-muted-foreground">
                  Iron deficiency, with or without anaemia, is one of the most common nutritional causes of hair loss in women. Menstruation, pregnancy, and diets low in iron-rich foods increase risk. Ferritin levels below 30-40 ng/mL may affect hair growth.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Protein Deficiency</h3>
                <p className="text-muted-foreground">
                  Hair is primarily made of protein (keratin), so inadequate protein intake can affect hair production. This is particularly relevant for women following restrictive diets or with eating disorders.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Vitamin D</h3>
                <p className="text-muted-foreground">
                  Low vitamin D levels have been associated with hair loss, including female pattern hair loss and alopecia areata. Vitamin D plays a role in hair follicle cycling and immune function.
                </p>
              </div>
            </div>
          </section>

          {/* Other Causes */}
          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Other Causes of Female Hair Loss
            </h2>
            
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Alopecia Areata</h3>
                <p className="text-muted-foreground">
                  An autoimmune condition causing patchy hair loss. The immune system attacks hair follicles, causing round, smooth bald patches. It affects women and men equally and can occur at any age.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Traction Alopecia</h3>
                <p className="text-muted-foreground">
                  Caused by hairstyles that pull on the hair, such as tight ponytails, braids, or extensions. Common at the hairline and temples. If caught early, it is reversible, but prolonged tension can cause permanent damage.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Scarring Alopecia</h3>
                <p className="text-muted-foreground">
                  A group of conditions where inflammation destroys hair follicles and replaces them with scar tissue. Conditions like frontal fibrosing alopecia and central centrifugal cicatricial alopecia are more common in women. Early treatment is essential to prevent permanent loss.
                </p>
              </div>
            </div>
          </section>

          {/* Common Myths */}
          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Common Myths About Female Hair Loss
            </h2>
            
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-muted/50 border border-border">
                <p className="font-medium text-foreground mb-1">Myth: Only older women experience hair loss</p>
                <p className="text-muted-foreground text-sm">
                  Hair loss can begin at any age, including during the teenage years. While it becomes more common with age, young women can experience significant hair loss due to hormonal conditions, stress, or genetic factors.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-muted/50 border border-border">
                <p className="font-medium text-foreground mb-1">Myth: Hair products cause hair loss</p>
                <p className="text-muted-foreground text-sm">
                  Standard hair products do not cause hair loss from the follicle. However, harsh chemical treatments or excessive heat styling can cause breakage, making hair appear thinner. True hair loss occurs at the root.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-muted/50 border border-border">
                <p className="font-medium text-foreground mb-1">Myth: Taking biotin will regrow hair</p>
                <p className="text-muted-foreground text-sm">
                  Biotin supplements only help if you have a biotin deficiency, which is rare. There is limited evidence that biotin supplementation improves hair in people with normal levels.
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
              Consider consulting a healthcare provider if you experience:
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground mb-4">
              <li>Sudden or rapid hair loss</li>
              <li>Patchy bald spots</li>
              <li>Hair loss accompanied by scalp symptoms (itching, pain, scaling)</li>
              <li>Signs of hormonal imbalance (irregular periods, acne, unwanted facial hair)</li>
              <li>Hair loss that does not improve after 6 months</li>
              <li>Significant distress or impact on quality of life</li>
            </ul>
            <p className="text-foreground leading-relaxed">
              A dermatologist can perform a thorough scalp examination, take a detailed history, and order blood tests to identify underlying causes. Early intervention often leads to better outcomes.
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

export default CausesInWomenPage;
