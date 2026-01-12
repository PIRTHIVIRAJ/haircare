import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import ContentPageLayout from "@/components/ContentPageLayout";
import Breadcrumb from "@/components/Breadcrumb";
import FAQSection from "@/components/FAQSection";
import ChatCTA from "@/components/ChatCTA";
import MedicalDisclaimer from "@/components/MedicalDisclaimer";
import RelatedArticles from "@/components/RelatedArticles";

const MinoxidilPage = () => {
  const faqs = [
    {
      question: "How long does minoxidil take to work?",
      answer: "Most people need to use minoxidil for at least 4-6 months before seeing noticeable results. Some may see improvement sooner, while others may need up to 12 months. Initial shedding in the first few weeks is normal and often a sign the treatment is working."
    },
    {
      question: "What happens if I stop using minoxidil?",
      answer: "If you stop using minoxidil, any hair you have regrown due to the treatment will gradually be lost over the following months. Your hair loss will typically return to where it would have been without treatment. This is why consistent, ongoing use is recommended."
    },
    {
      question: "Can I use minoxidil if I'm pregnant or breastfeeding?",
      answer: "Minoxidil is not recommended during pregnancy or breastfeeding due to potential risks to the baby. If you are pregnant, planning to become pregnant, or breastfeeding, consult your doctor about safe alternatives."
    },
    {
      question: "Is 2% or 5% minoxidil better?",
      answer: "The 5% formulation is generally more effective than 2%, but it may also cause more side effects like scalp irritation. Women are often advised to start with 2% to reduce the risk of unwanted facial hair growth. Men typically use 5%."
    },
    {
      question: "Can minoxidil regrow hair on a completely bald scalp?",
      answer: "Minoxidil works best on areas where hair follicles are still present but dormant or miniaturised. It is less effective on areas that have been bald for many years, where follicles may have completely closed. Early treatment yields better results."
    },
    {
      question: "Does minoxidil work for receding hairlines?",
      answer: "Minoxidil is FDA-approved for use on the crown and vertex of the head. While some people use it on the hairline, evidence for its effectiveness there is more limited. It may help slow further recession but is less likely to fully restore a receded hairline."
    }
  ];

  const relatedArticles = [
    {
      title: "Androgenetic Alopecia",
      href: "/conditions/androgenetic-alopecia",
      description: "Understanding the condition minoxidil is most commonly used to treat."
    },
    {
      title: "Hair Loss in Men",
      href: "/hair-loss/men",
      description: "How minoxidil fits into treatment options for male pattern baldness."
    },
    {
      title: "Hair Loss in Women",
      href: "/hair-loss/women",
      description: "Using minoxidil for female pattern hair loss."
    }
  ];

  return (
    <>
      <SEOHead 
        title="Minoxidil for Hair Loss: Uses & Results | HairCare.ai"
        description="Everything about minoxidil for hair regrowth: how it works, expected results, side effects, and tips for best results."
        canonicalUrl="https://haircare.ai/treatments/minoxidil"
        articleSchema={{
          headline: "Minoxidil for Hair Loss: Uses, Results and Side Effects",
          description: "Everything about minoxidil for hair regrowth: how it works, expected results, side effects, and usage tips.",
          datePublished: "2024-01-15",
          dateModified: "2024-12-27"
        }}
        faqSchema={faqs}
      />
      
      <ContentPageLayout>
        <article className="max-w-4xl mx-auto" itemScope itemType="https://schema.org/Article">
          <Breadcrumb items={[
            { label: "Hair Products", href: "/hair-products" },
            { label: "Minoxidil Guide" }
          ]} />
          
          <header className="mb-8">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4" itemProp="headline">
              Minoxidil for Hair Loss: Uses, Results and Side Effects
            </h1>
            <p className="text-lg text-muted-foreground">
              A comprehensive guide to one of the most widely used hair loss treatments.
            </p>
          </header>

          {/* Introduction */}
          <section className="prose prose-lg max-w-none mb-10">
            <p className="text-foreground leading-relaxed">
              If you have been researching hair loss treatments, you have almost certainly come across minoxidil. 
              Sold under brand names like Rogaine, it is one of only two FDA-approved medications for treating 
              <Link to="/conditions/androgenetic-alopecia" className="text-primary hover:underline"> androgenetic alopecia</Link> (pattern hair loss).
            </p>
            <p className="text-foreground leading-relaxed">
              Minoxidil is available over the counter, making it an accessible first step for many people experiencing 
              hair thinning. But how well does it actually work? What can you realistically expect? This guide covers 
              everything you need to know about using minoxidil for hair loss.
            </p>
          </section>

          {/* What is Minoxidil */}
          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              What is Minoxidil?
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              Minoxidil was originally developed as an oral medication to treat high blood pressure. Doctors noticed 
              an interesting side effect: patients were growing more hair. This led to the development of topical 
              minoxidil specifically for treating hair loss.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              Today, minoxidil is available in several forms:
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground">
              <li><strong>Topical solution (2% or 5%):</strong> Liquid applied directly to the scalp</li>
              <li><strong>Topical foam (5%):</strong> Often preferred as it dries faster and is less greasy</li>
              <li><strong>Oral minoxidil:</strong> Low-dose tablets prescribed off-label by some doctors</li>
            </ul>
          </section>

          {/* How Does It Work */}
          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              How Does Minoxidil Work?
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              The exact mechanism by which minoxidil promotes hair growth is not fully understood, but research 
              suggests it works in several ways:
            </p>
            
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Increases Blood Flow</h3>
                <p className="text-muted-foreground">
                  Minoxidil is a vasodilator, meaning it widens blood vessels. This may improve nutrient and oxygen 
                  delivery to hair follicles, supporting healthier hair growth.
                </p>
              </div>
              
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Extends the Growth Phase</h3>
                <p className="text-muted-foreground">
                  Minoxidil appears to prolong the anagen (growth) phase of the hair cycle, allowing hairs to grow 
                  longer and thicker before entering the resting phase.
                </p>
              </div>
              
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Stimulates Dormant Follicles</h3>
                <p className="text-muted-foreground">
                  It can reactivate hair follicles that have become dormant, shifting them from the resting phase 
                  back into the active growth phase.
                </p>
              </div>
              
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Increases Follicle Size</h3>
                <p className="text-muted-foreground">
                  Over time, minoxidil can help enlarge miniaturised hair follicles, resulting in thicker, more 
                  visible hair strands.
                </p>
              </div>
            </div>
          </section>

          {/* Who Can Use It */}
          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Who Can Use Minoxidil?
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              Minoxidil is FDA-approved for use in adults with androgenetic alopecia. It can be used by:
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground mb-4">
              <li><strong><Link to="/hair-loss/men" className="text-primary hover:underline">Men</Link>:</strong> For thinning at the crown and vertex; may have some benefit for hairline, though this is not FDA-approved</li>
              <li><strong><Link to="/hair-loss/women" className="text-primary hover:underline">Women</Link>:</strong> For diffuse thinning across the top of the scalp; typically start with 2% formulation</li>
            </ul>
            <p className="text-foreground leading-relaxed mb-4">
              Minoxidil works best for:
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground">
              <li>People in the earlier stages of hair loss</li>
              <li>Those who have been losing hair for less than 5 years</li>
              <li>Smaller areas of hair loss</li>
              <li>Areas where some hair is still present (even if thin)</li>
            </ul>
          </section>

          {/* How to Use */}
          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              How to Use Minoxidil
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              For best results, follow these guidelines:
            </p>
            
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Application</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Apply to a dry or towel-dried scalp</li>
                  <li>Use the dropper or foam applicator to apply to affected areas</li>
                  <li>Massage gently into the scalp</li>
                  <li>Wash hands thoroughly after application</li>
                  <li>Allow to dry completely before styling (at least 2-4 hours for liquid, faster for foam)</li>
                </ul>
              </div>
              
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Frequency</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Apply twice daily (morning and evening) for best results</li>
                  <li>Once daily may still be effective, particularly with 5% formulation</li>
                  <li>Maintain a consistent routine</li>
                </ul>
              </div>
              
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Tips for Success</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Be patient—results take months to appear</li>
                  <li>Use consistently; missing applications reduces effectiveness</li>
                  <li>Do not use more than directed (more is not better and increases side effects)</li>
                  <li>Continue use indefinitely to maintain results</li>
                </ul>
              </div>
            </div>
          </section>

          {/* What to Expect */}
          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              What Results Can You Expect?
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              Setting realistic expectations is important for treatment success:
            </p>
            
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">First 2-8 Weeks: Initial Shedding</h3>
                <p className="text-muted-foreground">
                  Many users experience increased shedding when starting minoxidil. This can be alarming but is 
                  actually a positive sign—it means dormant hairs are being pushed out to make way for new growth. 
                  This phase is temporary.
                </p>
              </div>
              
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Months 2-4: Stabilisation</h3>
                <p className="text-muted-foreground">
                  Shedding typically slows down. You may not see visible improvement yet, but the treatment is 
                  working at the follicular level. Continue using as directed.
                </p>
              </div>
              
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Months 4-6: Early Results</h3>
                <p className="text-muted-foreground">
                  Many users start to notice improvement around this time. New hairs may initially be fine and 
                  light-coloured before becoming thicker and darker.
                </p>
              </div>
              
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Months 6-12+: Continued Improvement</h3>
                <p className="text-muted-foreground">
                  Results continue to improve over the first year or longer. Maximum benefit is typically seen 
                  around 12-18 months of consistent use.
                </p>
              </div>
            </div>
            
            <p className="text-foreground leading-relaxed mt-4">
              Studies show that minoxidil produces visible hair regrowth in about 40% of men and 60% of women, 
              with many more experiencing reduced hair loss even without visible regrowth.
            </p>
          </section>

          {/* Side Effects */}
          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Possible Side Effects
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              Minoxidil is generally well-tolerated, but some side effects can occur:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-3">Common Side Effects</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Scalp irritation or itching</li>
                  <li>Dryness or flaking</li>
                  <li>Initial increased shedding</li>
                  <li>Unwanted facial hair growth (especially in women)</li>
                </ul>
              </div>
              
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-3">Rare Side Effects</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Dizziness or lightheadedness</li>
                  <li>Rapid heartbeat</li>
                  <li>Swelling of hands or feet</li>
                  <li>Chest pain (seek immediate medical attention)</li>
                </ul>
              </div>
            </div>
            
            <p className="text-foreground leading-relaxed mt-4">
              If you experience severe or persistent side effects, stop using minoxidil and consult a healthcare 
              provider. The foam formulation may cause less irritation than the liquid for some users.
            </p>
          </section>

          {/* Common Myths */}
          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Common Misconceptions About Minoxidil
            </h2>
            
            <div className="space-y-4">
              <div className="flex gap-4">
                <span className="text-destructive font-semibold">Myth:</span>
                <span className="text-muted-foreground">Minoxidil will make my hair fall out.</span>
              </div>
              <div className="flex gap-4 pb-4 border-b border-border">
                <span className="text-primary font-semibold">Fact:</span>
                <span className="text-foreground">The initial shedding is temporary and actually indicates the treatment is working by pushing out old hairs to make room for new growth.</span>
              </div>
              
              <div className="flex gap-4">
                <span className="text-destructive font-semibold">Myth:</span>
                <span className="text-muted-foreground">I should apply extra for faster results.</span>
              </div>
              <div className="flex gap-4 pb-4 border-b border-border">
                <span className="text-primary font-semibold">Fact:</span>
                <span className="text-foreground">Using more than directed does not improve results and increases the risk of side effects. Stick to the recommended dosage.</span>
              </div>
              
              <div className="flex gap-4">
                <span className="text-destructive font-semibold">Myth:</span>
                <span className="text-muted-foreground">Once my hair grows back, I can stop using it.</span>
              </div>
              <div className="flex gap-4 pb-4 border-b border-border">
                <span className="text-primary font-semibold">Fact:</span>
                <span className="text-foreground">Minoxidil requires ongoing use to maintain results. Stopping will cause the regrown hair to gradually fall out.</span>
              </div>
              
              <div className="flex gap-4">
                <span className="text-destructive font-semibold">Myth:</span>
                <span className="text-muted-foreground">Minoxidil only works for men.</span>
              </div>
              <div className="flex gap-4">
                <span className="text-primary font-semibold">Fact:</span>
                <span className="text-foreground">Minoxidil is FDA-approved for use in women and is often the first-line treatment for female pattern hair loss.</span>
              </div>
            </div>
          </section>

          {/* When to See a Doctor */}
          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              When to See a Doctor
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              Consider consulting a healthcare provider if:
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground">
              <li>You have not seen improvement after 6-12 months of consistent use</li>
              <li>You experience persistent or severe side effects</li>
              <li>You want to discuss combining minoxidil with other treatments</li>
              <li>Your hair loss pattern seems unusual or you are unsure of the cause</li>
              <li>You are pregnant, planning to become pregnant, or breastfeeding</li>
            </ul>
          </section>

          <FAQSection faqs={faqs} />
          
          <ChatCTA 
            title="Have questions about using minoxidil?"
            description="Talk to HairCare.ai about whether minoxidil might be right for your hair loss situation."
          />
          
          <RelatedArticles articles={relatedArticles} />
          
          <MedicalDisclaimer />
        </article>
      </ContentPageLayout>
    </>
  );
};

export default MinoxidilPage;
