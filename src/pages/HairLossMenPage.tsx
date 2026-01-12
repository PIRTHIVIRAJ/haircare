import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import ContentPageLayout from "@/components/ContentPageLayout";
import Breadcrumb from "@/components/Breadcrumb";
import FAQSection from "@/components/FAQSection";
import ChatCTA from "@/components/ChatCTA";
import MedicalDisclaimer from "@/components/MedicalDisclaimer";
import RelatedArticles from "@/components/RelatedArticles";

const HairLossMenPage = () => {
  const faqs = [
    {
      question: "At what age does male pattern baldness usually start?",
      answer: "Male pattern baldness can begin as early as the late teens or early 20s, though it most commonly becomes noticeable in the 30s and 40s. By age 50, approximately 50% of men will have some degree of noticeable hair loss."
    },
    {
      question: "Can male hair loss be prevented?",
      answer: "While you cannot prevent genetic hair loss entirely, early treatment can significantly slow progression and maintain existing hair. Starting treatment at the first signs of thinning typically yields the best results."
    },
    {
      question: "Is finasteride safe for long-term use?",
      answer: "Finasteride has been studied extensively and is considered safe for long-term use in most men. However, a small percentage experience side effects. Discuss your individual risk factors with a healthcare provider before starting treatment."
    },
    {
      question: "Will a hair transplant look natural?",
      answer: "Modern hair transplant techniques, particularly FUE (Follicular Unit Extraction), can produce very natural-looking results when performed by an experienced surgeon. The transplanted hair grows like normal hair."
    },
    {
      question: "Does exercise or diet affect male hair loss?",
      answer: "While exercise and diet do not directly cause or prevent genetic hair loss, a healthy lifestyle supports overall hair health. Poor nutrition can contribute to hair thinning, and some extreme exercise regimens that affect hormone levels may have an impact."
    }
  ];

  const relatedArticles = [
    {
      title: "Androgenetic Alopecia",
      href: "/conditions/androgenetic-alopecia",
      description: "In-depth look at pattern baldness, its causes, and treatment options."
    },
    {
      title: "Minoxidil Treatment",
      href: "/treatments/minoxidil",
      description: "How this popular treatment works and what results to expect."
    },
    {
      title: "Hair Loss Overview",
      href: "/hair-loss",
      description: "Complete guide to all types of hair loss and their treatments."
    }
  ];

  return (
    <>
      <SEOHead 
        title="Hair Loss in Men: Causes and Solutions | HairCare.ai"
        description="Understand male pattern baldness, receding hairlines, and proven treatments for men's hair loss. Expert guidance on what works."
        canonicalUrl="https://haircare.ai/hair-loss/men"
        articleSchema={{
          headline: "Hair Loss in Men: Causes and Solutions",
          description: "Understand male pattern baldness, receding hairlines, and proven treatments for men's hair loss.",
          datePublished: "2024-01-15",
          dateModified: "2024-12-27"
        }}
        faqSchema={faqs}
      />
      
      <ContentPageLayout>
        <article className="max-w-4xl mx-auto" itemScope itemType="https://schema.org/Article">
          <Breadcrumb items={[
            { label: "Hair Loss", href: "/hair-loss" },
            { label: "Men" }
          ]} />
          
          <header className="mb-8">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4" itemProp="headline">
              Hair Loss in Men: Causes and Solutions
            </h1>
            <p className="text-lg text-muted-foreground">
              Understanding male pattern baldness and what you can do about it.
            </p>
          </header>

          {/* Introduction */}
          <section className="prose prose-lg max-w-none mb-10">
            <p className="text-foreground leading-relaxed">
              If you have noticed your hairline creeping back or more scalp showing through at the crown, you are 
              experiencing something that affects the majority of men at some point in their lives. Male hair loss 
              is incredibly common, yet it can still feel concerning when it happens to you.
            </p>
            <p className="text-foreground leading-relaxed">
              The good news is that we understand male hair loss better than ever before, and there are effective 
              treatments available. Whether you are just starting to notice changes or have been dealing with hair 
              loss for years, there are options that can help.
            </p>
          </section>

          {/* What Causes Hair Loss in Men */}
          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              What Causes Hair Loss in Men?
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              The vast majority of hair loss in men is caused by <Link to="/conditions/androgenetic-alopecia" className="text-primary hover:underline">androgenetic alopecia</Link>, 
              commonly known as male pattern baldness. This condition is driven by genetics and hormones.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              Here is how it works: testosterone in your body is converted to dihydrotestosterone (DHT) by an enzyme 
              called 5-alpha reductase. In men who are genetically predisposed to hair loss, DHT causes hair follicles 
              to shrink over time. This process, called miniaturisation, means each hair grows thinner and shorter 
              until the follicle stops producing visible hair altogether.
            </p>
            <p className="text-foreground leading-relaxed">
              Other causes of hair loss in men include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground mt-4">
              <li>Stress-related shedding (<Link to="/conditions/telogen-effluvium" className="text-primary hover:underline">telogen effluvium</Link>)</li>
              <li>Medical conditions such as thyroid disorders or autoimmune diseases</li>
              <li>Nutritional deficiencies, particularly iron, zinc, and protein</li>
              <li>Medications including chemotherapy, blood thinners, and some antidepressants</li>
              <li>Scalp conditions like fungal infections or seborrheic dermatitis</li>
            </ul>
          </section>

          {/* Pattern of Male Hair Loss */}
          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              The Pattern of Male Hair Loss
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              Male pattern baldness typically follows a predictable progression, often described using the 
              Norwood-Hamilton scale. Understanding where you are on this scale can help you and your healthcare 
              provider plan appropriate treatment.
            </p>
            
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Stage 1-2: Receding Hairline</h3>
                <p className="text-muted-foreground">
                  Hair loss often begins at the temples, creating an M-shaped hairline. This may be subtle at first 
                  and is the ideal time to start treatment.
                </p>
              </div>
              
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Stage 3-4: Crown Thinning</h3>
                <p className="text-muted-foreground">
                  Thinning begins at the crown (the top of the head), often while the hairline continues to recede. 
                  The two areas may eventually merge.
                </p>
              </div>
              
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Stage 5-7: Advanced Loss</h3>
                <p className="text-muted-foreground">
                  The areas of hair loss expand and join, leaving hair only on the sides and back of the head. 
                  These areas are typically resistant to DHT.
                </p>
              </div>
            </div>
          </section>

          {/* Treatment Options */}
          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Effective Treatment Options
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              Several treatments have proven effective for male hair loss. The best approach depends on your stage 
              of hair loss, your goals, and your individual circumstances.
            </p>
            
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Minoxidil (Rogaine)</h3>
                <p className="text-muted-foreground mb-2">
                  A topical treatment available over the counter that stimulates hair growth and slows loss. 
                  Applied directly to the scalp twice daily. <Link to="/treatments/minoxidil" className="text-primary hover:underline">Learn more about minoxidil</Link>.
                </p>
              </div>
              
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Finasteride (Propecia)</h3>
                <p className="text-muted-foreground">
                  A prescription pill that blocks the conversion of testosterone to DHT. Highly effective at 
                  stopping hair loss and, in many cases, promoting regrowth. Requires ongoing use to maintain results.
                </p>
              </div>
              
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Hair Transplant Surgery</h3>
                <p className="text-muted-foreground">
                  Surgical procedures like FUE (Follicular Unit Extraction) move hair from the back and sides of 
                  the head to thinning areas. Results are permanent and natural-looking when performed by skilled surgeons.
                </p>
              </div>
              
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Low-Level Laser Therapy</h3>
                <p className="text-muted-foreground">
                  FDA-cleared devices that use red light to stimulate hair follicles. Can be used at home as a 
                  complement to other treatments.
                </p>
              </div>
              
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Combination Therapy</h3>
                <p className="text-muted-foreground">
                  Many men see the best results by combining treatments, such as using both minoxidil and finasteride 
                  together. Your healthcare provider can help you determine the right combination for your situation.
                </p>
              </div>
            </div>
          </section>

          {/* What Does Not Work */}
          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              What Does Not Work
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              With so many products marketed for hair loss, it is important to know what is not supported by evidence:
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground">
              <li>Most shampoos claiming to prevent hair loss (unless they contain minoxidil)</li>
              <li>Supplements without proven ingredients in adequate doses</li>
              <li>Scalp massages alone (they feel good but do not reverse genetic hair loss)</li>
              <li>Essential oils as standalone treatments</li>
              <li>Products with exaggerated claims or "secret formulas"</li>
            </ul>
            <p className="text-foreground leading-relaxed mt-4">
              Stick to treatments with scientific evidence and, when in doubt, consult a healthcare professional.
            </p>
          </section>

          {/* When to Seek Help */}
          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              When to See a Doctor
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              Consider consulting a dermatologist or hair loss specialist if:
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground">
              <li>You want to explore prescription treatments like finasteride</li>
              <li>Your hair loss is sudden, patchy, or accompanied by other symptoms</li>
              <li>Over-the-counter treatments have not worked after 6-12 months</li>
              <li>You are considering a hair transplant</li>
              <li>You are unsure about the cause of your hair loss</li>
              <li>Hair loss is affecting your confidence or quality of life</li>
            </ul>
          </section>

          <FAQSection faqs={faqs} />
          
          <ChatCTA 
            title="Want personalised advice for your hair loss?"
            description="Talk to HairCare.ai about your specific situation and get tailored recommendations."
          />
          
          <RelatedArticles articles={relatedArticles} />
          
          <MedicalDisclaimer />
        </article>
      </ContentPageLayout>
    </>
  );
};

export default HairLossMenPage;
