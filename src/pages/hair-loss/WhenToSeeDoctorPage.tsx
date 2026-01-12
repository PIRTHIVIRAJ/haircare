import SEOHead from "@/components/SEOHead";
import ContentPageLayout from "@/components/ContentPageLayout";
import Breadcrumb from "@/components/Breadcrumb";
import FAQSection from "@/components/FAQSection";
import ChatCTA from "@/components/ChatCTA";
import MedicalDisclaimer from "@/components/MedicalDisclaimer";
import RelatedArticles from "@/components/RelatedArticles";

const WhenToSeeDoctorPage = () => {
  const faqs = [
    {
      question: "Should I see a GP or dermatologist for hair loss?",
      answer: "A GP is a good starting point for initial evaluation and blood tests. If the cause is unclear, hair loss is severe, or treatment is not working, referral to a dermatologist (ideally one specialising in hair disorders) is recommended for specialised assessment."
    },
    {
      question: "What can a doctor do for hair loss?",
      answer: "A doctor can accurately diagnose the type of hair loss, identify underlying causes through examination and testing, prescribe medications like finasteride or minoxidil, treat contributing conditions, and monitor progress. Some may offer procedures like injections or refer for transplantation."
    },
    {
      question: "Is hair loss ever an emergency?",
      answer: "Hair loss itself is rarely a medical emergency. However, seek urgent care if hair loss accompanies severe scalp pain, rapidly spreading bald patches, or signs of systemic illness (high fever, significant weight loss, severe fatigue). Sudden total hair loss also warrants prompt evaluation."
    },
    {
      question: "Will waiting to see a doctor make hair loss worse?",
      answer: "For progressive conditions like pattern baldness or scarring alopecia, earlier treatment typically preserves more hair. Lost follicles from scarring conditions cannot be recovered. However, most temporary hair loss (like telogen effluvium) will resolve regardless of when you seek help."
    }
  ];

  const relatedArticles = [
    {
      title: "How to Diagnose Hair Loss",
      href: "/hair-loss/diagnosis",
      description: "What to expect during a hair loss evaluation."
    },
    {
      title: "Medical Tests for Hair Loss",
      href: "/hair-loss/medical-tests",
      description: "Blood tests that may help identify the cause."
    },
    {
      title: "Sudden Hair Loss",
      href: "/hair-loss/sudden-hair-loss",
      description: "Understanding unexpected hair loss episodes."
    }
  ];

  return (
    <>
      <SEOHead 
        title="When Should You See a Doctor for Hair Loss? Warning Signs | HairCare.ai"
        description="Learn when hair loss requires medical attention, warning signs to watch for, and what kind of doctor to see. Understand when to seek professional help."
        canonicalUrl="https://haircare.ai/hair-loss/when-to-see-a-doctor"
        articleSchema={{
          headline: "When Should You See a Doctor for Hair Loss?",
          description: "Learn when hair loss requires medical attention and what warning signs to watch for.",
          datePublished: "2024-12-28",
          dateModified: "2024-12-28"
        }}
        faqSchema={faqs}
      />
      
      <ContentPageLayout>
        <article className="max-w-4xl mx-auto" itemScope itemType="https://schema.org/Article">
          <Breadcrumb items={[
            { label: "Hair Loss", href: "/hair-loss" },
            { label: "When to See a Doctor" }
          ]} />
          
          <header className="mb-8">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4" itemProp="headline">
              When Should You See a Doctor for Hair Loss?
            </h1>
            <p className="text-lg text-muted-foreground">
              Understanding when professional evaluation is necessary for your hair loss.
            </p>
          </header>

          <section className="prose prose-lg max-w-none mb-10">
            <p className="text-foreground leading-relaxed">
              Hair loss is extremely common, and not every instance requires medical attention. Some degree of shedding is normal, and temporary increases often resolve on their own. However, certain patterns, symptoms, and circumstances indicate that professional evaluation would be beneficial or even necessary.
            </p>
            <p className="text-foreground leading-relaxed">
              This guide helps you determine whether your hair loss warrants a doctor's visit and what signs should prompt you to seek professional advice.
            </p>
          </section>

          <section className="mb-10 p-6 rounded-xl bg-primary/5 border border-primary/20">
            <h2 className="font-heading text-xl font-semibold text-foreground mb-3">
              Quick Answer
            </h2>
            <p className="text-foreground leading-relaxed">
              See a doctor for hair loss if you have sudden or rapid shedding, patchy bald spots, scalp symptoms (pain, itching, burning), accompanying systemic symptoms, or if hair loss persists beyond 6 months without improvement. Earlier evaluation leads to better outcomes for progressive conditions.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Signs That Warrant Medical Evaluation
            </h2>
            
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-card border border-border border-l-4 border-l-destructive">
                <h3 className="font-semibold text-foreground mb-2">Patchy Bald Spots</h3>
                <p className="text-muted-foreground">
                  Smooth, round patches of complete baldness may indicate alopecia areata (an autoimmune condition) or, less commonly, fungal infection. These conditions benefit from early treatment. Patchy loss is not typical of normal shedding.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border border-l-4 border-l-destructive">
                <h3 className="font-semibold text-foreground mb-2">Scalp Symptoms</h3>
                <p className="text-muted-foreground">
                  Hair loss accompanied by persistent itching, burning, pain, tenderness, redness, or scaling may indicate a scalp condition requiring treatment. Some causes, like scarring alopecias, can cause permanent hair loss if not treated promptly.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border border-l-4 border-l-destructive">
                <h3 className="font-semibold text-foreground mb-2">Rapid or Sudden Onset</h3>
                <p className="text-muted-foreground">
                  While telogen effluvium causes sudden shedding that often resolves, rapid hair loss without an obvious trigger warrants evaluation. Sudden, extensive loss can also indicate alopecia areata or other conditions.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border border-l-4 border-l-destructive">
                <h3 className="font-semibold text-foreground mb-2">Accompanying Symptoms</h3>
                <p className="text-muted-foreground">
                  Hair loss with fatigue, unexplained weight changes, cold intolerance, irregular periods, or other new symptoms may indicate thyroid disease, hormonal imbalances, or other systemic conditions that need attention.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border border-l-4 border-l-destructive">
                <h3 className="font-semibold text-foreground mb-2">No Improvement After 6 Months</h3>
                <p className="text-muted-foreground">
                  Temporary hair loss typically shows signs of improvement within 6 months once the trigger is resolved. Persistent shedding beyond this timeframe suggests chronic telogen effluvium or another condition requiring investigation.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              When Earlier Is Better
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              For some types of hair loss, seeking help sooner leads to better outcomes:
            </p>
            
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Pattern Baldness</h3>
                <p className="text-muted-foreground">
                  Androgenetic alopecia is progressive. Treatment is more effective at maintaining existing hair than regrowing lost hair. Starting treatment early preserves more hair for longer. Once follicles become dormant, they may not respond to treatment.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Scarring Alopecia</h3>
                <p className="text-muted-foreground">
                  Conditions like frontal fibrosing alopecia, lichen planopilaris, and central centrifugal cicatricial alopecia destroy hair follicles permanently. Early treatment aims to halt progression and preserve remaining hair. Delayed treatment results in irreversible loss.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Alopecia Areata</h3>
                <p className="text-muted-foreground">
                  While alopecia areata can resolve spontaneously, treatment may speed recovery and reduce the extent of loss. Early intervention may also reduce the likelihood of progression to more extensive forms.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              When It May Be Okay to Wait
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              Not all hair loss requires immediate medical attention:
            </p>
            
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Postpartum Hair Loss</h3>
                <p className="text-muted-foreground">
                  Shedding 2-4 months after giving birth is normal and typically resolves within a year. Medical evaluation is only needed if loss is extreme, patchy, or accompanied by other symptoms.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Known Trigger</h3>
                <p className="text-muted-foreground">
                  If shedding began 2-3 months after a known stressor (surgery, illness, significant weight loss), it is likely telogen effluvium. You may wait to see if it improves, though checking is never wrong.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Very Gradual Pattern Changes</h3>
                <p className="text-muted-foreground">
                  Slow thinning over years in a typical pattern (temples, crown, widening parting) is likely androgenetic alopecia. While earlier treatment is more effective, this is not urgent. You can seek help when you are ready to consider treatment.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              What Type of Doctor to See
            </h2>
            
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">General Practitioner (GP)</h3>
                <p className="text-muted-foreground">
                  A good starting point for most people. Can perform initial examination, order blood tests, and refer to a specialist if needed. Appropriate for straightforward cases or when underlying conditions are suspected.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Dermatologist</h3>
                <p className="text-muted-foreground">
                  Specialists in skin, hair, and nail conditions. They have training in diagnosing and treating all types of hair loss. Can perform trichoscopy, scalp biopsies, and prescribe specialised treatments.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Trichologist</h3>
                <p className="text-muted-foreground">
                  Hair and scalp specialists. Not medical doctors in most countries, so cannot prescribe medications or perform medical procedures. May be helpful for general advice and non-medical treatments.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Endocrinologist</h3>
                <p className="text-muted-foreground">
                  If hormonal imbalances (thyroid, PCOS, adrenal) are suspected, an endocrinologist may be involved. Usually seen after initial dermatological evaluation suggests hormonal involvement.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Preparing for Your Appointment
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              To make the most of your consultation, come prepared with:
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground mb-4">
              <li>Timeline of when you first noticed hair loss</li>
              <li>Photos showing progression (if available)</li>
              <li>List of medications and supplements you take</li>
              <li>Any recent illnesses, surgeries, or major stressors</li>
              <li>Family history of hair loss and at what age it began</li>
              <li>Other symptoms you have noticed</li>
              <li>Treatments you have already tried</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Common Myths About Seeking Help
            </h2>
            
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-muted/50 border border-border">
                <p className="font-medium text-foreground mb-1">Myth: Doctors cannot do anything for hair loss</p>
                <p className="text-muted-foreground text-sm">
                  Many types of hair loss have effective treatments. Pattern baldness can be slowed or stabilised. Underlying conditions can be corrected. Even when no cure exists, doctors can help manage symptoms and expectations.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-muted/50 border border-border">
                <p className="font-medium text-foreground mb-1">Myth: Hair loss is just cosmetic and not worth bothering a doctor</p>
                <p className="text-muted-foreground text-sm">
                  Hair loss can significantly impact mental health and quality of life. Additionally, it can be a sign of underlying medical conditions. Both of these are legitimate reasons to seek medical care.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-muted/50 border border-border">
                <p className="font-medium text-foreground mb-1">Myth: I should try over-the-counter products first</p>
                <p className="text-muted-foreground text-sm">
                  While this is reasonable for some cases, getting a proper diagnosis first ensures you are using the right treatment. Some conditions require prescription treatment, and delay can affect outcomes.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              The Bottom Line
            </h2>
            <p className="text-foreground leading-relaxed">
              If you are concerned about your hair loss, seeking professional evaluation is never wrong. A doctor can provide reassurance if everything is normal, identify treatable causes, or start you on effective therapy sooner. For progressive conditions, earlier intervention preserves more hair. Your concerns about your hair are valid and deserve professional attention.
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

export default WhenToSeeDoctorPage;