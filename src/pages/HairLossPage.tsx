import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import ContentPageLayout from "@/components/ContentPageLayout";
import Breadcrumb from "@/components/Breadcrumb";
import FAQSection from "@/components/FAQSection";
import ChatCTA from "@/components/ChatCTA";
import MedicalDisclaimer from "@/components/MedicalDisclaimer";
import RelatedArticles from "@/components/RelatedArticles";

const HairLossPage = () => {
  const faqs = [
    {
      question: "How much hair loss is normal per day?",
      answer: "It is normal to lose between 50 and 100 hairs per day. This is part of the natural hair growth cycle. If you are consistently losing more than this, or noticing visible thinning, it may be worth speaking to a healthcare professional."
    },
    {
      question: "Can hair loss be reversed?",
      answer: "Some types of hair loss can be slowed, stopped, or reversed with appropriate treatment. The outcome depends on the cause. For example, hair loss due to nutritional deficiencies often improves once the deficiency is corrected, while genetic hair loss may require ongoing treatment to maintain results."
    },
    {
      question: "What is the difference between hair loss and hair shedding?",
      answer: "Hair shedding (telogen effluvium) is usually temporary and occurs when more hairs than usual enter the resting phase. Hair loss (anagen effluvium or pattern baldness) refers to a reduction in hair growth, often leading to permanent thinning if left untreated."
    },
    {
      question: "Does stress cause hair loss?",
      answer: "Yes, significant physical or emotional stress can trigger a type of hair loss called telogen effluvium. This usually occurs 2-3 months after the stressful event and is typically temporary, with hair regrowth occurring once the stress is managed."
    },
    {
      question: "When should I see a doctor about hair loss?",
      answer: "You should consult a doctor if you notice sudden or patchy hair loss, excessive shedding, hair loss accompanied by scalp symptoms like itching or pain, or if your hair loss is causing you significant concern. Early intervention often leads to better outcomes."
    },
    {
      question: "Are hair loss treatments safe?",
      answer: "Most approved hair loss treatments, such as minoxidil and finasteride, have been extensively studied and are considered safe for most people. However, all medications can have side effects, so it is important to discuss options with a healthcare provider."
    }
  ];

  const relatedArticles = [
    {
      title: "Hair Loss in Men",
      href: "/hair-loss/men",
      description: "Understand male pattern baldness, receding hairlines, and treatment options specifically for men."
    },
    {
      title: "Hair Loss in Women",
      href: "/hair-loss/women",
      description: "Learn about the unique causes and patterns of hair loss that affect women."
    },
    {
      title: "Androgenetic Alopecia",
      href: "/conditions/androgenetic-alopecia",
      description: "The most common form of hair loss, also known as pattern baldness."
    },
    {
      title: "Telogen Effluvium",
      href: "/conditions/telogen-effluvium",
      description: "Stress-related hair shedding and how to manage it."
    },
    {
      title: "Minoxidil Treatment",
      href: "/treatments/minoxidil",
      description: "Everything you need to know about this popular hair regrowth treatment."
    },
    {
      title: "Scalp Health Guide",
      href: "/hair-health/scalp-care",
      description: "How a healthy scalp supports optimal hair growth."
    }
  ];

  return (
    <>
      <SEOHead 
        title="Hair Loss: Causes, Types & Treatments | HairCare.ai"
        description="Understand hair loss causes, types, and effective treatments. Expert guidance on hair thinning, hair fall, and when to seek help."
        canonicalUrl="https://haircare.ai/hair-loss"
        articleSchema={{
          headline: "Hair Loss: Causes, Types & Treatments",
          description: "Understand hair loss causes, types, and effective treatments. Expert guidance on hair thinning, hair fall, and when to seek help.",
          datePublished: "2024-01-15",
          dateModified: "2024-12-27"
        }}
        faqSchema={faqs}
      />
      
      <ContentPageLayout>
        <article className="max-w-4xl mx-auto" itemScope itemType="https://schema.org/Article">
          <Breadcrumb items={[{ label: "Hair Loss" }]} />
          
          <header className="mb-8">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4" itemProp="headline">
              Hair Loss: Causes, Types & Treatments
            </h1>
            <p className="text-lg text-muted-foreground">
              A comprehensive guide to understanding why hair loss happens and what you can do about it.
            </p>
          </header>

          {/* Introduction */}
          <section className="prose prose-lg max-w-none mb-10">
            <p className="text-foreground leading-relaxed">
              Noticing more hair in your brush or shower drain can be unsettling. Hair loss affects millions of people worldwide, 
              and while it can feel isolating, you are certainly not alone. The good news is that understanding the cause of your 
              hair loss is the first step toward finding an effective solution.
            </p>
            <p className="text-foreground leading-relaxed">
              Hair loss can range from mild thinning to complete baldness, and it can affect just your scalp or your entire body. 
              It may be temporary or permanent, gradual or sudden. Whatever you are experiencing, there are options available 
              to help you manage and often improve your situation.
            </p>
            <p className="text-foreground leading-relaxed">
              This guide will help you understand the different types of hair loss, what causes them, and the treatments that 
              can make a real difference. Remember, early intervention typically leads to better outcomes.
            </p>
          </section>

          {/* What is Hair Loss */}
          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              What is Hair Loss?
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              Hair loss, medically known as alopecia, refers to the loss of hair from the scalp or body. It can manifest in 
              various ways, from gradual thinning on top of the head to patchy bald spots or sudden loosening of hair.
            </p>
            <p className="text-foreground leading-relaxed">
              Your hair grows in cycles. At any given time, about 90% of the hair on your head is in the growing phase (anagen), 
              which lasts 2-7 years. The remaining hair is in a resting phase (telogen) before eventually falling out to make 
              room for new growth. Hair loss occurs when this cycle is disrupted or when hair follicles are damaged.
            </p>
          </section>

          {/* Common Causes */}
          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Common Causes of Hair Loss
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              Understanding what is causing your hair loss is essential for finding the right treatment. Here are the most 
              common causes:
            </p>
            
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Genetics (Hereditary Hair Loss)</h3>
                <p className="text-muted-foreground">
                  The most common cause of hair loss, known as <Link to="/conditions/androgenetic-alopecia" className="text-primary hover:underline">androgenetic alopecia</Link> or 
                  pattern baldness. It affects both men and women, typically causing gradual thinning that follows predictable patterns.
                </p>
              </div>
              
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Hormonal Changes</h3>
                <p className="text-muted-foreground">
                  Pregnancy, childbirth, menopause, and thyroid problems can all affect hair growth. Hormonal imbalances 
                  can cause temporary or permanent hair loss depending on the underlying condition.
                </p>
              </div>
              
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Medical Conditions</h3>
                <p className="text-muted-foreground">
                  Conditions like alopecia areata (an autoimmune disease), scalp infections, and trichotillomania 
                  (hair-pulling disorder) can cause various patterns of hair loss.
                </p>
              </div>
              
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Medications and Treatments</h3>
                <p className="text-muted-foreground">
                  Certain drugs used for cancer, arthritis, depression, heart problems, and high blood pressure can 
                  cause hair loss as a side effect. Radiation therapy to the head can also affect hair growth.
                </p>
              </div>
              
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Stress and Lifestyle Factors</h3>
                <p className="text-muted-foreground">
                  Physical or emotional shock can trigger <Link to="/conditions/telogen-effluvium" className="text-primary hover:underline">telogen effluvium</Link>, 
                  causing temporary hair shedding. Poor nutrition, crash diets, and excessive hairstyling can also contribute.
                </p>
              </div>
            </div>
          </section>

          {/* Who is Affected */}
          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Who is Most Affected by Hair Loss?
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              Hair loss can affect anyone, regardless of age or gender, though patterns and prevalence vary:
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground">
              <li><strong>Men:</strong> About 50% of men experience noticeable <Link to="/hair-loss/men" className="text-primary hover:underline">hair loss</Link> by age 50, often starting in their 20s or 30s</li>
              <li><strong>Women:</strong> Approximately 40% of <Link to="/hair-loss/women" className="text-primary hover:underline">women</Link> experience visible hair thinning by age 50, particularly after menopause</li>
              <li><strong>Family history:</strong> If your parents or grandparents experienced hair loss, you are more likely to as well</li>
              <li><strong>Age:</strong> Hair naturally thins with age as the growth cycle slows</li>
              <li><strong>Certain medical conditions:</strong> Diabetes, lupus, and thyroid disorders increase the risk</li>
            </ul>
          </section>

          {/* Signs and Symptoms */}
          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Signs and Symptoms
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              Hair loss can appear in different ways depending on the cause. Common signs include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground mb-4">
              <li><strong>Gradual thinning on top of the head:</strong> The most common type, affecting men and women differently</li>
              <li><strong>Circular or patchy bald spots:</strong> Usually smooth and coin-sized, may occur on the scalp, beard, or eyebrows</li>
              <li><strong>Sudden loosening of hair:</strong> Handfuls of hair may come out when washing or brushing</li>
              <li><strong>Full-body hair loss:</strong> Often caused by medical treatments like chemotherapy</li>
              <li><strong>Patches of scaling:</strong> May indicate a fungal infection of the scalp</li>
              <li><strong>Receding hairline:</strong> Particularly common in men, starting at the temples</li>
            </ul>
            <p className="text-foreground leading-relaxed">
              If you notice any of these signs, particularly sudden changes, it is worth documenting when they started 
              and any factors that might be contributing. This information can be valuable when consulting a professional.
            </p>
          </section>

          {/* Diagnosis */}
          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              How Hair Loss is Usually Diagnosed
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              If you are concerned about hair loss, a healthcare provider or dermatologist can help determine the cause 
              through several methods:
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground">
              <li><strong>Medical history review:</strong> Discussion of your symptoms, family history, diet, and any medications</li>
              <li><strong>Physical examination:</strong> Close inspection of your scalp and hair pattern</li>
              <li><strong>Pull test:</strong> Gently pulling a small amount of hair to see how many come out</li>
              <li><strong>Blood tests:</strong> To check for thyroid problems, iron deficiency, or other conditions</li>
              <li><strong>Scalp biopsy:</strong> Examining a small skin sample under a microscope</li>
              <li><strong>Light microscopy:</strong> Examining hair trimmed at the base for possible disorders</li>
            </ul>
          </section>

          {/* Treatment Options */}
          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Treatment and Management Options
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              Treatment depends on the cause and extent of your hair loss. Options range from medications to procedures 
              to lifestyle changes:
            </p>
            
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Medications</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li><Link to="/treatments/minoxidil" className="text-primary hover:underline">Minoxidil (Rogaine)</Link>: A topical treatment that can slow hair loss and stimulate regrowth</li>
                  <li>Finasteride (Propecia): A prescription pill for men that blocks the hormone causing hair loss</li>
                  <li>Spironolactone: Sometimes prescribed for women with hormonal hair loss</li>
                </ul>
              </div>
              
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Procedures</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Hair transplant surgery: Moving hair from areas of thick growth to thinning areas</li>
                  <li>Scalp micropigmentation: Tattooing tiny dots to create the appearance of fuller hair</li>
                  <li>Platelet-rich plasma (PRP) therapy: Injecting your own blood plasma to stimulate growth</li>
                  <li>Low-level laser therapy: Using red light to stimulate hair follicles</li>
                </ul>
              </div>
              
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Lifestyle and Home Care</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Eating a balanced diet rich in protein, iron, and vitamins</li>
                  <li>Managing stress through exercise, meditation, or therapy</li>
                  <li>Being gentle with your hair and avoiding harsh treatments</li>
                  <li>Maintaining good <Link to="/hair-health/scalp-care" className="text-primary hover:underline">scalp health</Link></li>
                </ul>
              </div>
            </div>
          </section>

          {/* Common Myths */}
          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Common Myths About Hair Loss
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              There are many misconceptions about hair loss. Here is the truth behind some common myths:
            </p>
            
            <div className="space-y-4">
              <div className="flex gap-4">
                <span className="text-destructive font-semibold">Myth:</span>
                <span className="text-muted-foreground">Wearing hats causes hair loss.</span>
              </div>
              <div className="flex gap-4 pb-4 border-b border-border">
                <span className="text-primary font-semibold">Fact:</span>
                <span className="text-foreground">Hats do not cause hair loss. Your hair follicles get oxygen from blood, not air.</span>
              </div>
              
              <div className="flex gap-4">
                <span className="text-destructive font-semibold">Myth:</span>
                <span className="text-muted-foreground">Only men experience significant hair loss.</span>
              </div>
              <div className="flex gap-4 pb-4 border-b border-border">
                <span className="text-primary font-semibold">Fact:</span>
                <span className="text-foreground">Women make up about 40% of hair loss sufferers. Female pattern hair loss is common.</span>
              </div>
              
              <div className="flex gap-4">
                <span className="text-destructive font-semibold">Myth:</span>
                <span className="text-muted-foreground">Shampooing too often causes hair to fall out.</span>
              </div>
              <div className="flex gap-4 pb-4 border-b border-border">
                <span className="text-primary font-semibold">Fact:</span>
                <span className="text-foreground">Regular washing does not cause hair loss. The hair you see in the drain was already going to fall out.</span>
              </div>
              
              <div className="flex gap-4">
                <span className="text-destructive font-semibold">Myth:</span>
                <span className="text-muted-foreground">Hair loss comes from your mother's side only.</span>
              </div>
              <div className="flex gap-4">
                <span className="text-primary font-semibold">Fact:</span>
                <span className="text-foreground">Hair loss genes can come from either parent. Your father's side matters too.</span>
              </div>
            </div>
          </section>

          {/* When to See a Doctor */}
          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              When to See a Doctor
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              While some hair loss is normal, you should consider seeing a healthcare professional if you experience:
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground mb-4">
              <li>Sudden or patchy hair loss</li>
              <li>More hair loss than usual when brushing or washing</li>
              <li>Hair loss after starting a new medication</li>
              <li>Hair loss accompanied by other symptoms like fatigue, weight changes, or skin problems</li>
              <li>Scalp irritation, redness, or pain along with hair loss</li>
              <li>Hair loss that is causing you significant distress</li>
            </ul>
            <p className="text-foreground leading-relaxed">
              Early diagnosis and treatment can prevent further hair loss and, in many cases, lead to regrowth. 
              Do not hesitate to seek professional advice if you are concerned.
            </p>
          </section>

          <FAQSection faqs={faqs} />
          
          <ChatCTA 
            title="Concerned about your hair loss?"
            description="Talk to HairCare.ai for a personalised assessment. Share your symptoms and get evidence-based guidance."
          />
          
          <RelatedArticles articles={relatedArticles} />
          
          <MedicalDisclaimer />
        </article>
      </ContentPageLayout>
    </>
  );
};

export default HairLossPage;
