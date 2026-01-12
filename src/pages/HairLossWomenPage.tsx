import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import ContentPageLayout from "@/components/ContentPageLayout";
import Breadcrumb from "@/components/Breadcrumb";
import FAQSection from "@/components/FAQSection";
import ChatCTA from "@/components/ChatCTA";
import MedicalDisclaimer from "@/components/MedicalDisclaimer";
import RelatedArticles from "@/components/RelatedArticles";

const HairLossWomenPage = () => {
  const faqs = [
    {
      question: "Is female hair loss the same as male pattern baldness?",
      answer: "No. While both are influenced by genetics and hormones, female pattern hair loss typically causes diffuse thinning across the top of the scalp rather than a receding hairline. Women rarely experience complete baldness in affected areas."
    },
    {
      question: "Can birth control pills cause hair loss?",
      answer: "Some hormonal contraceptives can trigger hair loss in women who are sensitive to hormonal changes, particularly when starting or stopping the pill. If you notice hair changes after starting a new contraceptive, discuss alternatives with your doctor."
    },
    {
      question: "Will my hair grow back after pregnancy?",
      answer: "Postpartum hair loss is typically temporary. The excessive shedding usually peaks around 3-4 months after giving birth and resolves within 6-12 months as hormone levels normalise."
    },
    {
      question: "Can menopause cause permanent hair loss?",
      answer: "Hormonal changes during menopause can trigger or accelerate female pattern hair loss. While this type of hair loss may be progressive, treatments are available that can help slow the process and maintain hair density."
    },
    {
      question: "Are hair loss treatments safe during pregnancy?",
      answer: "Most hair loss medications, including minoxidil and spironolactone, are not recommended during pregnancy or breastfeeding. Always consult your doctor about safe options if you are pregnant or planning to become pregnant."
    }
  ];

  const relatedArticles = [
    {
      title: "Telogen Effluvium",
      href: "/conditions/telogen-effluvium",
      description: "Understand stress-related hair shedding, common after pregnancy or illness."
    },
    {
      title: "Hair Loss Overview",
      href: "/hair-loss",
      description: "Complete guide to all types of hair loss and available treatments."
    },
    {
      title: "Scalp Health",
      href: "/hair-health/scalp-care",
      description: "How maintaining a healthy scalp supports optimal hair growth."
    }
  ];

  return (
    <>
      <SEOHead 
        title="Hair Loss in Women: Causes and Treatment | HairCare.ai"
        description="Understand female hair thinning, hormonal hair loss, and treatment options. Compassionate guidance for women experiencing hair loss."
        canonicalUrl="https://haircare.ai/hair-loss/women"
        articleSchema={{
          headline: "Hair Loss in Women: Causes and Treatment Options",
          description: "Understand female hair thinning, hormonal hair loss, and treatment options for women.",
          datePublished: "2024-01-15",
          dateModified: "2024-12-27"
        }}
        faqSchema={faqs}
      />
      
      <ContentPageLayout>
        <article className="max-w-4xl mx-auto" itemScope itemType="https://schema.org/Article">
          <Breadcrumb items={[
            { label: "Hair Loss", href: "/hair-loss" },
            { label: "Women" }
          ]} />
          
          <header className="mb-8">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4" itemProp="headline">
              Hair Loss in Women: Causes and Treatment Options
            </h1>
            <p className="text-lg text-muted-foreground">
              Understanding why women experience hair loss and what can help.
            </p>
          </header>

          {/* Introduction */}
          <section className="prose prose-lg max-w-none mb-10">
            <p className="text-foreground leading-relaxed">
              Noticing more hair in your brush or a widening part can be deeply unsettling. For many women, hair 
              is closely tied to identity and confidence, making hair loss particularly distressing. If you are 
              experiencing thinning hair, know that you are not alone—approximately 40% of women experience visible 
              hair loss by age 50.
            </p>
            <p className="text-foreground leading-relaxed">
              Female hair loss often differs from male hair loss in its pattern and causes. Understanding what is 
              happening to your hair is the first step toward finding solutions that work. The encouraging news is 
              that many causes of female hair loss are treatable, especially when addressed early.
            </p>
          </section>

          {/* Causes */}
          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Common Causes of Hair Loss in Women
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              Women experience hair loss for a variety of reasons, often related to hormonal changes, life events, 
              or underlying health conditions:
            </p>
            
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Female Pattern Hair Loss (Androgenetic Alopecia)</h3>
                <p className="text-muted-foreground">
                  The most common cause, affecting up to 50% of women over their lifetime. Unlike men, women typically 
                  experience diffuse thinning on top of the scalp while maintaining their frontal hairline. This is 
                  related to <Link to="/conditions/androgenetic-alopecia" className="text-primary hover:underline">androgenetic alopecia</Link>.
                </p>
              </div>
              
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Hormonal Changes</h3>
                <p className="text-muted-foreground">
                  Pregnancy, childbirth, menopause, and thyroid disorders can all trigger hair loss. Polycystic ovary 
                  syndrome (PCOS) is another common hormonal cause of thinning hair in women.
                </p>
              </div>
              
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Telogen Effluvium</h3>
                <p className="text-muted-foreground">
                  A temporary but often alarming form of <Link to="/conditions/telogen-effluvium" className="text-primary hover:underline">hair shedding</Link> triggered 
                  by stress, illness, surgery, significant weight loss, or starting/stopping medications. Hair typically 
                  regrows once the trigger is resolved.
                </p>
              </div>
              
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Nutritional Deficiencies</h3>
                <p className="text-muted-foreground">
                  Low iron (especially common in women due to menstruation), vitamin D deficiency, inadequate protein 
                  intake, and crash dieting can all contribute to hair thinning.
                </p>
              </div>
              
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Traction Alopecia</h3>
                <p className="text-muted-foreground">
                  Hair loss caused by hairstyles that pull on the hair—tight ponytails, braids, extensions, or weaves. 
                  Early intervention is important as this can become permanent if the follicles are scarred.
                </p>
              </div>
              
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Autoimmune Conditions</h3>
                <p className="text-muted-foreground">
                  Alopecia areata causes patchy hair loss and is more common in women. Lupus can also cause hair loss, 
                  often with scarring of the scalp.
                </p>
              </div>
            </div>
          </section>

          {/* Pattern of Female Hair Loss */}
          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              How Female Hair Loss Differs
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              Female pattern hair loss typically presents differently from male pattern baldness:
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground">
              <li>Widening of the centre part, often the first noticeable sign</li>
              <li>Overall thinning on the top of the head rather than a receding hairline</li>
              <li>The hairline at the front usually remains intact</li>
              <li>Hair becomes finer in texture throughout the affected area</li>
              <li>Complete baldness is rare in women with pattern hair loss</li>
            </ul>
            <p className="text-foreground leading-relaxed mt-4">
              The Ludwig Scale is commonly used to classify female pattern hair loss, ranging from mild thinning 
              (Type I) to more extensive thinning (Type III).
            </p>
          </section>

          {/* Treatment Options */}
          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Treatment Options for Women
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              Treatment depends on the underlying cause. Many women benefit from a combination of approaches:
            </p>
            
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Minoxidil (Rogaine)</h3>
                <p className="text-muted-foreground">
                  The only FDA-approved topical treatment for female pattern hair loss. Available in 2% and 5% 
                  formulations. <Link to="/treatments/minoxidil" className="text-primary hover:underline">Learn more about how minoxidil works</Link>.
                </p>
              </div>
              
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Spironolactone</h3>
                <p className="text-muted-foreground">
                  A prescription medication that can help women with hormonally-driven hair loss by blocking 
                  androgen effects. Not suitable for women who are or may become pregnant.
                </p>
              </div>
              
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Hormone Therapy</h3>
                <p className="text-muted-foreground">
                  For women experiencing hair loss related to menopause, hormone replacement therapy may help 
                  in some cases. This should be discussed with a healthcare provider.
                </p>
              </div>
              
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Addressing Underlying Causes</h3>
                <p className="text-muted-foreground">
                  Treating thyroid disorders, correcting nutritional deficiencies, managing PCOS, or addressing 
                  stress can resolve or improve associated hair loss.
                </p>
              </div>
              
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Low-Level Laser Therapy</h3>
                <p className="text-muted-foreground">
                  FDA-cleared devices that can stimulate hair growth. Often used in combination with other treatments.
                </p>
              </div>
              
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Hair Transplant</h3>
                <p className="text-muted-foreground">
                  An option for some women with stable pattern hair loss and adequate donor hair. Results depend 
                  on individual factors and the skill of the surgeon.
                </p>
              </div>
            </div>
          </section>

          {/* Caring for Thinning Hair */}
          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Caring for Thinning Hair
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              While treating the underlying cause, these tips can help protect and maximise your existing hair:
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground">
              <li>Choose gentle, sulphate-free shampoos and conditioners</li>
              <li>Avoid heat styling or use a heat protectant and lower temperatures</li>
              <li>Let hair air dry when possible rather than rubbing with a towel</li>
              <li>Avoid tight hairstyles that pull on the hair</li>
              <li>Use volumising products to create the appearance of fuller hair</li>
              <li>Consider a shorter, layered cut that can make hair appear thicker</li>
              <li>Protect hair from sun damage with hats or UV-protective products</li>
              <li>Maintain good <Link to="/hair-health/scalp-care" className="text-primary hover:underline">scalp health</Link> through regular, gentle cleansing</li>
            </ul>
          </section>

          {/* When to See a Doctor */}
          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              When to See a Doctor
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              Seek medical advice if you notice:
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground">
              <li>Sudden or rapid hair loss</li>
              <li>Patchy bald spots</li>
              <li>Hair loss accompanied by itching, pain, or scalp changes</li>
              <li>Hair loss with other symptoms like fatigue, weight changes, or irregular periods</li>
              <li>Hair loss after starting a new medication</li>
              <li>Progressive thinning that concerns you</li>
            </ul>
            <p className="text-foreground leading-relaxed mt-4">
              A dermatologist or trichologist can help diagnose the cause and recommend appropriate treatment. 
              Blood tests may be needed to check for thyroid problems, iron deficiency, or hormonal imbalances.
            </p>
          </section>

          <FAQSection faqs={faqs} />
          
          <ChatCTA 
            title="Have questions about your hair loss?"
            description="Share your concerns with HairCare.ai for personalised guidance on what might be causing your hair loss."
          />
          
          <RelatedArticles articles={relatedArticles} />
          
          <MedicalDisclaimer />
        </article>
      </ContentPageLayout>
    </>
  );
};

export default HairLossWomenPage;
