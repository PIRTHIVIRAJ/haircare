import SEOHead from "@/components/SEOHead";
import ContentPageLayout from "@/components/ContentPageLayout";
import Breadcrumb from "@/components/Breadcrumb";
import FAQSection from "@/components/FAQSection";
import ChatCTA from "@/components/ChatCTA";
import MedicalDisclaimer from "@/components/MedicalDisclaimer";
import RelatedArticles from "@/components/RelatedArticles";

const MedicalTestsPage = () => {
  const faqs = [
    {
      question: "Do I need blood tests for hair loss?",
      answer: "Blood tests are recommended when hair loss is diffuse, sudden, or accompanied by other symptoms. They help rule out or identify treatable causes like thyroid disorders, iron deficiency, or hormonal imbalances. Pattern baldness typically does not require blood tests unless there are other concerns."
    },
    {
      question: "What ferritin level is needed for healthy hair?",
      answer: "While the normal range for ferritin varies, many hair specialists suggest that optimal hair growth requires ferritin levels above 50-70 ng/mL. Some research indicates that levels below 30 ng/mL may contribute to hair shedding, even if not low enough to cause anaemia."
    },
    {
      question: "Should I fast before blood tests for hair loss?",
      answer: "Fasting is not typically required for hair loss blood panels. However, if glucose or lipid tests are included, fasting may be recommended. Your doctor will provide specific instructions. Morning testing may give more consistent hormone results."
    },
    {
      question: "How often should I repeat hair loss blood tests?",
      answer: "If an abnormality is found and treated, follow-up testing every 3-6 months is common until levels stabilise. If initial tests are normal, repeat testing is usually not needed unless symptoms change or treatment is not working."
    }
  ];

  const relatedArticles = [
    {
      title: "How to Diagnose Hair Loss",
      href: "/hair-loss/diagnosis",
      description: "Overview of the diagnostic process for hair loss."
    },
    {
      title: "When to See a Doctor",
      href: "/hair-loss/when-to-see-a-doctor",
      description: "Signs that indicate you need professional evaluation."
    },
    {
      title: "Genetic vs Hormonal Hair Loss",
      href: "/hair-loss/genetic-vs-hormonal",
      description: "Understanding different causes of hair loss."
    }
  ];

  return (
    <>
      <SEOHead 
        title="Medical Tests for Hair Loss: Blood Tests and Evaluations | HairCare.ai"
        description="Complete guide to medical tests for hair loss including iron, thyroid, hormones, and vitamin levels. Learn what tests you may need and what results mean."
        canonicalUrl="https://haircare.ai/hair-loss/medical-tests"
        articleSchema={{
          headline: "Medical Tests for Hair Loss: Blood Tests and Evaluations",
          description: "Complete guide to medical tests for hair loss including iron, thyroid, hormones, and vitamin levels.",
          datePublished: "2024-12-28",
          dateModified: "2024-12-28"
        }}
        faqSchema={faqs}
      />
      
      <ContentPageLayout>
        <article className="max-w-4xl mx-auto" itemScope itemType="https://schema.org/Article">
          <Breadcrumb items={[
            { label: "Hair Loss", href: "/hair-loss" },
            { label: "Medical Tests" }
          ]} />
          
          <header className="mb-8">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4" itemProp="headline">
              Medical Tests for Hair Loss
            </h1>
            <p className="text-lg text-muted-foreground">
              Understanding the blood tests and evaluations that help identify the cause of hair loss.
            </p>
          </header>

          <section className="prose prose-lg max-w-none mb-10">
            <p className="text-foreground leading-relaxed">
              When investigating hair loss, medical tests play an important role in identifying or ruling out underlying conditions. While pattern baldness is typically diagnosed clinically, many other causes of hair loss can be detected through blood tests. Correcting an underlying deficiency or imbalance can sometimes lead to significant improvement in hair growth.
            </p>
            <p className="text-foreground leading-relaxed">
              This guide covers the most commonly ordered tests for hair loss, explains what each measures, and helps you understand what the results may mean.
            </p>
          </section>

          <section className="mb-10 p-6 rounded-xl bg-primary/5 border border-primary/20">
            <h2 className="font-heading text-xl font-semibold text-foreground mb-3">
              Quick Answer
            </h2>
            <p className="text-foreground leading-relaxed">
              Common medical tests for hair loss include complete blood count, iron studies (ferritin), thyroid panel (TSH, T3, T4), vitamin D, zinc, and hormone levels (testosterone, DHEA-S, prolactin). These tests identify treatable conditions like thyroid disease, iron deficiency, or hormonal imbalances that may be causing or contributing to hair loss.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Iron and Ferritin Tests
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              Iron is essential for hair growth, and deficiency is one of the most common correctable causes of hair loss, particularly in women.
            </p>
            
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Serum Ferritin</h3>
                <p className="text-muted-foreground mb-2">
                  Ferritin is the storage form of iron. It is the most sensitive marker for iron status and often drops before haemoglobin becomes abnormal.
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Normal range: typically 12-150 ng/mL (varies by lab)</li>
                  <li>Optimal for hair: many specialists suggest above 50-70 ng/mL</li>
                  <li>Hair loss may occur with levels below 30 ng/mL</li>
                </ul>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Serum Iron and TIBC</h3>
                <p className="text-muted-foreground">
                  Serum iron measures circulating iron, while Total Iron Binding Capacity (TIBC) indicates how much iron the blood could carry. These help differentiate between different types of iron disorders.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Complete Blood Count (CBC)</h3>
                <p className="text-muted-foreground">
                  Includes haemoglobin and red blood cell indices. While ferritin can be low before anaemia develops, the CBC helps identify if iron deficiency has progressed to anaemia.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Thyroid Function Tests
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              Both underactive and overactive thyroid conditions can cause hair loss. Thyroid tests are standard in any hair loss workup.
            </p>
            
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">TSH (Thyroid Stimulating Hormone)</h3>
                <p className="text-muted-foreground">
                  The primary screening test for thyroid function. Elevated TSH suggests hypothyroidism; low TSH suggests hyperthyroidism. Normal range is typically 0.4-4.0 mIU/L, though optimal levels may be narrower.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Free T4 and Free T3</h3>
                <p className="text-muted-foreground">
                  These measure the active thyroid hormones. They help confirm thyroid dysfunction suggested by abnormal TSH and can identify conditions where TSH appears normal but hormone levels are off.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Thyroid Antibodies</h3>
                <p className="text-muted-foreground">
                  Anti-TPO and anti-thyroglobulin antibodies may be tested if autoimmune thyroid disease is suspected. Hashimoto's thyroiditis is a common cause of hypothyroidism and can cause hair loss even before TSH becomes clearly abnormal.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Hormone Tests
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              Hormonal imbalances can contribute to hair loss in both men and women. The specific tests ordered depend on symptoms and clinical suspicion.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">For Women</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Testosterone (total and free)</li>
                  <li>DHEA-S (adrenal androgen)</li>
                  <li>Prolactin</li>
                  <li>FSH and LH (if menstrual irregularity)</li>
                  <li>Oestradiol (if menopausal symptoms)</li>
                </ul>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">For Men</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Testosterone (if other symptoms present)</li>
                  <li>DHT (rarely tested clinically)</li>
                  <li>Prolactin (if sexual dysfunction)</li>
                </ul>
              </div>
            </div>

            <p className="text-foreground leading-relaxed mt-4">
              In women, elevated androgens may indicate PCOS or other conditions. High prolactin can cause hair loss and may indicate a pituitary issue. In men, hormonal testing is less commonly needed for pattern baldness but may be relevant if there are other symptoms.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Vitamin and Mineral Tests
            </h2>
            
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Vitamin D</h3>
                <p className="text-muted-foreground">
                  Vitamin D plays a role in hair follicle cycling. Deficiency has been associated with various types of hair loss including alopecia areata and telogen effluvium. Levels below 30 ng/mL are generally considered insufficient.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Zinc</h3>
                <p className="text-muted-foreground">
                  Zinc is important for hair tissue growth and repair. Deficiency can cause hair loss and is more common in vegetarians, those with digestive issues, or during pregnancy.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Vitamin B12 and Folate</h3>
                <p className="text-muted-foreground">
                  These B vitamins are important for red blood cell formation and hair growth. Deficiency may cause hair loss and is more common in vegans, the elderly, and those with absorption issues.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Biotin</h3>
                <p className="text-muted-foreground">
                  True biotin deficiency is rare but can cause hair loss. Testing is not routine unless there are specific risk factors. Note: biotin supplements can interfere with many lab tests and should be stopped before blood work.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Other Tests
            </h2>
            
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">ANA (Antinuclear Antibodies)</h3>
                <p className="text-muted-foreground">
                  May be tested if autoimmune conditions like lupus are suspected. Lupus can cause various types of hair loss, including scarring alopecia.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Syphilis Serology</h3>
                <p className="text-muted-foreground">
                  Secondary syphilis can cause patchy "moth-eaten" hair loss. Testing may be done if there are risk factors or if hair loss pattern is atypical.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Scalp Culture</h3>
                <p className="text-muted-foreground">
                  If fungal infection (tinea capitis) is suspected, a scalp sample may be sent for culture. This is more common in children but can occur in adults.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Common Myths About Hair Loss Tests
            </h2>
            
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-muted/50 border border-border">
                <p className="font-medium text-foreground mb-1">Myth: Normal blood tests mean nothing is wrong</p>
                <p className="text-muted-foreground text-sm">
                  Pattern baldness, the most common cause of hair loss, does not show up on blood tests. Normal results rule out certain conditions but do not mean hair loss is imagined or insignificant.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-muted/50 border border-border">
                <p className="font-medium text-foreground mb-1">Myth: You need to test for DHT levels</p>
                <p className="text-muted-foreground text-sm">
                  Blood DHT levels do not correlate well with hair loss because the issue is follicle sensitivity, not circulating hormone levels. DHT testing is rarely useful in clinical practice.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-muted/50 border border-border">
                <p className="font-medium text-foreground mb-1">Myth: Hair mineral analysis is reliable</p>
                <p className="text-muted-foreground text-sm">
                  Hair mineral analysis has poor scientific validity and is not recommended by major medical organisations. Results are affected by external contamination and have limited clinical utility.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              When to Seek Testing
            </h2>
            <ul className="list-disc list-inside space-y-2 text-foreground mb-4">
              <li>Hair loss is sudden or diffuse (all-over) rather than patterned</li>
              <li>You have other symptoms (fatigue, weight changes, irregular periods)</li>
              <li>Hair loss started after illness, surgery, or major stress</li>
              <li>You follow a restrictive diet or have digestive issues</li>
              <li>There is a family history of thyroid or autoimmune conditions</li>
              <li>Treatment for pattern baldness is not working as expected</li>
            </ul>
          </section>

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

export default MedicalTestsPage;