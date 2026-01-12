import SEOHead from "@/components/SEOHead";
import ContentPageLayout from "@/components/ContentPageLayout";
import Breadcrumb from "@/components/Breadcrumb";
import FAQSection from "@/components/FAQSection";
import ChatCTA from "@/components/ChatCTA";
import MedicalDisclaimer from "@/components/MedicalDisclaimer";
import RelatedArticles from "@/components/RelatedArticles";

const DiagnosisPage = () => {
  const faqs = [
    {
      question: "Can I diagnose hair loss myself?",
      answer: "You can observe patterns and symptoms, but accurate diagnosis typically requires professional evaluation. Many conditions look similar to the untrained eye. A dermatologist can use specialised tools and tests to differentiate between conditions that require different treatments."
    },
    {
      question: "What should I tell my doctor about my hair loss?",
      answer: "Share when the hair loss started, any potential triggers (illness, stress, medications, diet changes), family history of hair loss, other symptoms you have noticed, and any treatments you have tried. Photos showing progression over time are also helpful."
    },
    {
      question: "How long does it take to diagnose hair loss?",
      answer: "A clinical diagnosis can often be made during a single appointment based on history and examination. However, if blood tests are ordered, results may take a few days. In complex cases, a scalp biopsy may be needed, with results taking 1-2 weeks."
    },
    {
      question: "Is a scalp biopsy painful?",
      answer: "A scalp biopsy is performed under local anaesthesia, so you should feel only pressure, not pain, during the procedure. The site may be tender for a few days afterward. Stitches or the biopsy site typically heal within 1-2 weeks."
    }
  ];

  const relatedArticles = [
    {
      title: "Medical Tests for Hair Loss",
      href: "/hair-loss/medical-tests",
      description: "Detailed guide to blood tests and evaluations for hair loss."
    },
    {
      title: "When to See a Doctor",
      href: "/hair-loss/when-to-see-a-doctor",
      description: "Signs that indicate professional evaluation is needed."
    },
    {
      title: "Hair Thinning vs Shedding",
      href: "/hair-loss/thinning-vs-shedding",
      description: "Understanding different types of hair loss."
    }
  ];

  return (
    <>
      <SEOHead 
        title="How to Diagnose Hair Loss: Methods and What to Expect | HairCare.ai"
        description="Learn how dermatologists diagnose hair loss, including clinical examination, trichoscopy, blood tests, and scalp biopsy. Understand what to expect during evaluation."
        canonicalUrl="https://haircare.ai/hair-loss/diagnosis"
        articleSchema={{
          headline: "How to Diagnose Hair Loss: Methods and What to Expect",
          description: "Learn how dermatologists diagnose hair loss, including clinical examination, trichoscopy, blood tests, and scalp biopsy.",
          datePublished: "2024-12-28",
          dateModified: "2024-12-28"
        }}
        faqSchema={faqs}
      />
      
      <ContentPageLayout>
        <article className="max-w-4xl mx-auto" itemScope itemType="https://schema.org/Article">
          <Breadcrumb items={[
            { label: "Hair Loss", href: "/hair-loss" },
            { label: "Diagnosis" }
          ]} />
          
          <header className="mb-8">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4" itemProp="headline">
              How to Diagnose Hair Loss
            </h1>
            <p className="text-lg text-muted-foreground">
              Understanding the methods professionals use to identify the cause of your hair loss.
            </p>
          </header>

          <section className="prose prose-lg max-w-none mb-10">
            <p className="text-foreground leading-relaxed">
              Accurate diagnosis is the foundation of effective hair loss treatment. Different types of hair loss require different approaches, and what works for one condition may be ineffective or even harmful for another. A thorough diagnostic process helps identify exactly what is causing your hair loss and guides treatment decisions.
            </p>
            <p className="text-foreground leading-relaxed">
              This guide explains the various methods used to diagnose hair loss, what to expect during an evaluation, and how to prepare for your appointment.
            </p>
          </section>

          <section className="mb-10 p-6 rounded-xl bg-primary/5 border border-primary/20">
            <h2 className="font-heading text-xl font-semibold text-foreground mb-3">
              Quick Answer
            </h2>
            <p className="text-foreground leading-relaxed">
              Hair loss diagnosis typically involves a detailed medical history, clinical scalp examination, hair pull test, and often trichoscopy (magnified scalp imaging). Blood tests check for underlying conditions like thyroid disorders or nutritional deficiencies. In uncertain cases, a scalp biopsy may provide definitive diagnosis.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Medical History and Consultation
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              The diagnostic process begins with a thorough conversation about your hair loss. Your doctor will ask about:
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Hair Loss Details</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>When did you first notice hair loss?</li>
                  <li>Has it been gradual or sudden?</li>
                  <li>Where on your scalp is it most noticeable?</li>
                  <li>Are you losing hair from other areas?</li>
                  <li>Have you noticed changes in hair texture?</li>
                </ul>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Health and Lifestyle</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Recent illnesses, surgeries, or stressful events</li>
                  <li>Current medications and supplements</li>
                  <li>Dietary habits and any restrictions</li>
                  <li>Menstrual history (for women)</li>
                  <li>Hair care practices and products</li>
                </ul>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Family History</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Pattern baldness in parents or grandparents</li>
                  <li>Autoimmune conditions in the family</li>
                  <li>Thyroid disorders in relatives</li>
                  <li>Age when relatives began losing hair</li>
                </ul>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Other Symptoms</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Scalp itching, pain, or burning</li>
                  <li>Fatigue or weight changes</li>
                  <li>Skin or nail changes</li>
                  <li>Excess facial or body hair</li>
                  <li>Irregular periods or hormonal symptoms</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Physical Examination
            </h2>
            
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Scalp Inspection</h3>
                <p className="text-muted-foreground">
                  The doctor examines your scalp for signs of inflammation, scarring, scaling, or infection. They assess the pattern of hair loss, looking for characteristic distributions that indicate specific conditions like pattern baldness or alopecia areata.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Hair Pull Test</h3>
                <p className="text-muted-foreground">
                  The doctor gently grasps a small section of hair (about 40-60 hairs) and pulls. Normally, 1-3 hairs come out. If more than 10% of hairs are easily extracted, this indicates active shedding. The test is performed in multiple scalp areas to assess the pattern.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Hair Density Assessment</h3>
                <p className="text-muted-foreground">
                  The doctor may part your hair in different areas to compare density across the scalp. Photos may be taken for comparison at future visits. Some practices use standardised photography to track changes objectively.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Examination of Hair Shafts</h3>
                <p className="text-muted-foreground">
                  Looking at individual hairs reveals important clues. Miniaturised hairs (thin, short, light) suggest pattern baldness. Broken hairs may indicate damage or certain infections. The white bulb at the root indicates telogen (resting phase) hairs.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Trichoscopy (Dermoscopy of the Scalp)
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              Trichoscopy uses a handheld device with magnification and specialised lighting to examine the scalp and hair in detail. This non-invasive technique can reveal:
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground mb-4">
              <li><strong>Hair diameter variability:</strong> Mix of thick and thin hairs indicates pattern baldness</li>
              <li><strong>Follicular unit patterns:</strong> Normal follicles contain 2-4 hairs; reduced numbers suggest miniaturisation</li>
              <li><strong>Yellow dots:</strong> Empty follicles filled with sebum, common in androgenetic alopecia</li>
              <li><strong>Black dots:</strong> Broken hairs at scalp level, seen in alopecia areata or tinea capitis</li>
              <li><strong>Exclamation mark hairs:</strong> Characteristic of alopecia areata</li>
              <li><strong>Perifollicular scaling or erythema:</strong> Inflammation suggesting scarring alopecia</li>
            </ul>
            <p className="text-foreground leading-relaxed">
              Trichoscopy has become an essential diagnostic tool, often allowing diagnosis without the need for biopsy. Digital trichoscopy can store images for comparison over time.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Scalp Biopsy
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              When clinical examination and trichoscopy are inconclusive, a scalp biopsy provides definitive diagnosis. This involves removing a small sample of scalp tissue for microscopic examination.
            </p>
            
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">When Biopsy is Needed</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Suspected scarring alopecia</li>
                  <li>Distinguishing between overlapping conditions</li>
                  <li>Atypical presentations</li>
                  <li>Treatment-resistant cases requiring confirmation</li>
                </ul>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">The Procedure</h3>
                <p className="text-muted-foreground">
                  After local anaesthesia, a 4mm punch biopsy is taken from the affected area. Sometimes two biopsies are taken for different staining techniques. The wound is closed with one or two stitches, which are removed after 10-14 days.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">What It Reveals</h3>
                <p className="text-muted-foreground">
                  Microscopic examination shows the ratio of terminal to vellus hairs, the percentage of follicles in each growth phase, presence of inflammation, scarring or fibrosis, and specific patterns characteristic of different conditions.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Common Myths About Hair Loss Diagnosis
            </h2>
            
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-muted/50 border border-border">
                <p className="font-medium text-foreground mb-1">Myth: Blood tests can diagnose all types of hair loss</p>
                <p className="text-muted-foreground text-sm">
                  Blood tests identify underlying conditions that may contribute to hair loss, but they cannot diagnose pattern baldness or alopecia areata. These conditions are diagnosed clinically. Normal blood tests do not rule out hair loss.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-muted/50 border border-border">
                <p className="font-medium text-foreground mb-1">Myth: Online photos are sufficient for diagnosis</p>
                <p className="text-muted-foreground text-sm">
                  While photos can provide useful information, accurate diagnosis requires physical examination, assessment of hair texture and pull, and sometimes specialised testing. Many conditions look similar in photographs.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-muted/50 border border-border">
                <p className="font-medium text-foreground mb-1">Myth: If my GP cannot find a cause, nothing is wrong</p>
                <p className="text-muted-foreground text-sm">
                  General practitioners may not have specialised training in hair disorders. Referral to a dermatologist, particularly one with experience in hair loss, may be necessary for complex cases.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              When to Seek Professional Diagnosis
            </h2>
            <ul className="list-disc list-inside space-y-2 text-foreground mb-4">
              <li>Hair loss is progressing despite self-care measures</li>
              <li>You cannot identify the cause of your hair loss</li>
              <li>Scalp symptoms accompany the hair loss</li>
              <li>You have patchy bald areas</li>
              <li>Hair loss is affecting your quality of life</li>
              <li>You want to start treatment and need the right diagnosis first</li>
            </ul>
            <p className="text-foreground leading-relaxed">
              Early diagnosis often leads to better treatment outcomes, particularly for progressive conditions like pattern baldness or scarring alopecias.
            </p>
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

export default DiagnosisPage;