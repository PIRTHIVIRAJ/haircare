import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import ContentPageLayout from "@/components/ContentPageLayout";
import Breadcrumb from "@/components/Breadcrumb";
import FAQSection from "@/components/FAQSection";
import ChatCTA from "@/components/ChatCTA";
import MedicalDisclaimer from "@/components/MedicalDisclaimer";
import RelatedArticles from "@/components/RelatedArticles";

const HairSheddingPage = () => {
  const faqs = [
    {
      question: "How many hairs is it normal to lose per day?",
      answer: "It is normal to lose between 50 and 100 hairs per day. This can vary based on your hair density, length, and the natural hair cycle. You may notice more hair when you wash or brush, which is when loose hairs are dislodged."
    },
    {
      question: "Why do I lose more hair in the shower?",
      answer: "Hair that has already detached from the follicle tends to stay tangled in your hair until washing or brushing dislodges it. This is why you may notice more hair in the shower or on your brush—it does not necessarily mean you are losing more hair than normal."
    },
    {
      question: "Is hair shedding the same as hair loss?",
      answer: "Not exactly. Hair shedding (telogen effluvium) involves more hairs entering the resting phase and falling out, usually temporarily. Hair loss typically refers to a reduction in hair growth where follicles become miniaturised or stop producing hair, which may be permanent without treatment."
    },
    {
      question: "Does hair shedding mean I am going bald?",
      answer: "Not necessarily. Temporary increased shedding (telogen effluvium) usually resolves on its own and does not lead to baldness. However, if you also have underlying pattern hair loss, the areas that thin may not fully recover. A healthcare provider can help distinguish between the two."
    },
    {
      question: "Can seasonal changes affect hair shedding?",
      answer: "Yes, some people experience increased shedding in autumn (fall), which may be related to the hair growth cycle syncing with seasonal changes. This seasonal shedding is usually mild and temporary."
    }
  ];

  const relatedArticles = [
    {
      title: "Telogen Effluvium",
      href: "/conditions/telogen-effluvium",
      description: "Understanding stress-related hair shedding in detail."
    },
    {
      title: "Hair Loss Overview",
      href: "/hair-loss",
      description: "Comprehensive guide to all types of hair loss."
    },
    {
      title: "Scalp Health",
      href: "/hair-health/scalp-care",
      description: "How scalp health affects hair shedding and growth."
    }
  ];

  return (
    <>
      <SEOHead 
        title="Excessive Hair Shedding: What's Normal? | HairCare.ai"
        description="Learn what's normal for daily hair loss, when shedding becomes concerning, and what might be causing increased hair fall."
        canonicalUrl="https://haircare.ai/symptoms/hair-shedding"
        articleSchema={{
          headline: "Excessive Hair Shedding: What's Normal?",
          description: "Learn what's normal for daily hair loss, when shedding becomes concerning, and causes of increased hair fall.",
          datePublished: "2024-01-15",
          dateModified: "2024-12-27"
        }}
        faqSchema={faqs}
      />
      
      <ContentPageLayout>
        <article className="max-w-4xl mx-auto" itemScope itemType="https://schema.org/Article">
          <Breadcrumb items={[
            { label: "Symptoms" },
            { label: "Hair Shedding" }
          ]} />
          
          <header className="mb-8">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4" itemProp="headline">
              Excessive Hair Shedding: What's Normal?
            </h1>
            <p className="text-lg text-muted-foreground">
              Understanding when hair shedding is typical and when it might indicate a problem.
            </p>
          </header>

          {/* Introduction */}
          <section className="prose prose-lg max-w-none mb-10">
            <p className="text-foreground leading-relaxed">
              Finding hair on your pillow, in the shower drain, or on your hairbrush is completely normal. But how 
              much is too much? If you have started noticing more hair than usual falling out, you are probably 
              wondering whether something is wrong.
            </p>
            <p className="text-foreground leading-relaxed">
              Hair shedding is a natural part of the hair growth cycle. However, certain conditions can cause more 
              hair than normal to enter the shedding phase. Understanding the difference between normal shedding 
              and excessive shedding can help you know when to seek advice.
            </p>
          </section>

          {/* What is Normal */}
          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              What is Normal Hair Shedding?
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              On average, most people shed between 50 and 100 hairs per day. This might sound like a lot, but 
              considering the average scalp has about 100,000 hair follicles, it represents less than 0.1% of your 
              hair daily.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              Several factors affect how much shedding you might notice:
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground">
              <li><strong>Hair length:</strong> Longer hair is more noticeable when it falls, even if you are losing the same number of strands</li>
              <li><strong>Washing frequency:</strong> If you wash less often, more loose hairs accumulate and come out at once</li>
              <li><strong>Hair density:</strong> People with thicker hair may naturally shed more strands</li>
              <li><strong>Styling habits:</strong> Brushing, combing, and styling dislodge loose hairs that would have fallen anyway</li>
              <li><strong>Season:</strong> Some people notice more shedding in autumn</li>
            </ul>
          </section>

          {/* When Shedding is Excessive */}
          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              When Does Shedding Become Excessive?
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              Excessive shedding, medically known as <Link to="/conditions/telogen-effluvium" className="text-primary hover:underline">telogen effluvium</Link>, 
              occurs when more than the normal percentage of hairs enter the resting (telogen) phase and fall out. 
              Signs that your shedding may be excessive include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground mb-4">
              <li>Losing noticeably more hair than you have in the past</li>
              <li>Finding clumps of hair in the shower or on your brush</li>
              <li>Seeing more scalp through your hair</li>
              <li>A ponytail that feels thinner than before</li>
              <li>Hair loss that continues for more than a few weeks</li>
            </ul>
            <p className="text-foreground leading-relaxed">
              If you are unsure whether your shedding is normal, comparing your current hair loss to what you 
              typically experience can be helpful. A sudden or significant increase from your baseline is worth 
              investigating.
            </p>
          </section>

          {/* Common Causes */}
          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Common Causes of Increased Shedding
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              If you are experiencing more shedding than usual, these are some common causes:
            </p>
            
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Physical Stress</h3>
                <p className="text-muted-foreground">
                  Major surgery, illness with high fever, significant weight loss, or childbirth can trigger 
                  shedding that appears 2-3 months after the event.
                </p>
              </div>
              
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Emotional Stress</h3>
                <p className="text-muted-foreground">
                  Prolonged periods of severe stress, anxiety, or major life changes can disrupt the hair cycle 
                  and increase shedding.
                </p>
              </div>
              
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Nutritional Deficiencies</h3>
                <p className="text-muted-foreground">
                  Low iron, vitamin D, or protein intake can affect hair growth and cause increased shedding. 
                  Crash dieting is a common trigger.
                </p>
              </div>
              
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Hormonal Changes</h3>
                <p className="text-muted-foreground">
                  Pregnancy, postpartum, menopause, thyroid disorders, and stopping birth control can all affect 
                  hair shedding.
                </p>
              </div>
              
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Medications</h3>
                <p className="text-muted-foreground">
                  Some medications, including antidepressants, blood thinners, and others, can increase hair shedding 
                  as a side effect.
                </p>
              </div>
            </div>
          </section>

          {/* Shedding vs Hair Loss */}
          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Hair Shedding vs. Hair Loss
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              It is important to distinguish between temporary shedding and progressive hair loss:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-3">Hair Shedding (Telogen Effluvium)</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Usually temporary (6-12 months)</li>
                  <li>Often has an identifiable trigger</li>
                  <li>Diffuse thinning across the scalp</li>
                  <li>Follicles remain healthy</li>
                  <li>Full regrowth expected</li>
                </ul>
              </div>
              
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-3">Hair Loss (<Link to="/conditions/androgenetic-alopecia" className="text-primary hover:underline">Pattern Baldness</Link>)</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Progressive without treatment</li>
                  <li>Caused by genetics and hormones</li>
                  <li>Follows specific patterns</li>
                  <li>Follicles shrink over time</li>
                  <li>May require treatment to reverse</li>
                </ul>
              </div>
            </div>
            
            <p className="text-foreground leading-relaxed mt-4">
              Some people experience both conditions simultaneously, which can make assessment more complex. 
              A healthcare provider can help determine what is causing your hair changes.
            </p>
          </section>

          {/* What You Can Do */}
          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              What You Can Do About Excessive Shedding
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              If you are experiencing excessive shedding, these steps may help:
            </p>
            
            <ul className="list-disc list-inside space-y-3 text-foreground">
              <li>
                <strong>Identify potential triggers:</strong> Think back 2-3 months to see if anything significant 
                happened that might have triggered the shedding
              </li>
              <li>
                <strong>Review your diet:</strong> Ensure you are getting adequate protein, iron, and essential 
                vitamins. Consider a blood test to check for deficiencies
              </li>
              <li>
                <strong>Manage stress:</strong> If stress is a factor, incorporate relaxation techniques, exercise, 
                or therapy
              </li>
              <li>
                <strong>Be gentle with your hair:</strong> Avoid tight hairstyles, excessive heat, and harsh 
                chemical treatments
              </li>
              <li>
                <strong>Maintain <Link to="/hair-health/scalp-care" className="text-primary hover:underline">scalp health</Link>:</strong> Keep 
                your scalp clean and healthy to support optimal hair growth
              </li>
              <li>
                <strong>Be patient:</strong> If the cause is temporary, regrowth typically begins within a few months
              </li>
            </ul>
          </section>

          {/* When to Seek Help */}
          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              When to See a Doctor
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              Consider consulting a healthcare provider if:
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground">
              <li>Excessive shedding lasts longer than 6 months</li>
              <li>You cannot identify a potential cause</li>
              <li>You notice bald patches rather than diffuse thinning</li>
              <li>Shedding is accompanied by other symptoms like fatigue, weight changes, or skin issues</li>
              <li>Your scalp is itchy, painful, or has visible changes</li>
              <li>You are concerned about the amount of hair you are losing</li>
            </ul>
            <p className="text-foreground leading-relaxed mt-4">
              A dermatologist can perform tests to determine the cause and recommend appropriate treatment if needed.
            </p>
          </section>

          <FAQSection faqs={faqs} />
          
          <ChatCTA 
            title="Worried about how much hair you're losing?"
            description="Talk to HairCare.ai about your hair shedding concerns and get personalised guidance."
          />
          
          <RelatedArticles articles={relatedArticles} />
          
          <MedicalDisclaimer />
        </article>
      </ContentPageLayout>
    </>
  );
};

export default HairSheddingPage;
