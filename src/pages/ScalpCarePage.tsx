import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import ContentPageLayout from "@/components/ContentPageLayout";
import Breadcrumb from "@/components/Breadcrumb";
import FAQSection from "@/components/FAQSection";
import ChatCTA from "@/components/ChatCTA";
import MedicalDisclaimer from "@/components/MedicalDisclaimer";
import RelatedArticles from "@/components/RelatedArticles";

const ScalpCarePage = () => {
  const faqs = [
    {
      question: "How often should I wash my hair for a healthy scalp?",
      answer: "This varies by hair type. Most people benefit from washing every 2-3 days. Those with oily scalps may need daily washing, while those with dry or curly hair may do well washing less frequently. The key is finding a balance that keeps your scalp clean without stripping it of natural oils."
    },
    {
      question: "Can an unhealthy scalp cause hair loss?",
      answer: "Yes, certain scalp conditions can contribute to hair loss. Severe dandruff, fungal infections, folliculitis, and inflammatory conditions like scalp psoriasis can damage hair follicles if left untreated. Keeping your scalp healthy supports optimal hair growth."
    },
    {
      question: "What causes an itchy scalp?",
      answer: "Common causes include dry scalp, dandruff (seborrheic dermatitis), product buildup, allergic reactions to hair products, psoriasis, or fungal infections. If itching is persistent or severe, consult a dermatologist to determine the cause."
    },
    {
      question: "Are scalp scrubs beneficial?",
      answer: "Scalp scrubs can help remove product buildup and dead skin cells, which may improve scalp health. However, they should be used gently and not too frequently (usually once a week or less) to avoid irritation. Those with sensitive scalps or active scalp conditions should consult a doctor first."
    },
    {
      question: "Does scalp massage promote hair growth?",
      answer: "Some research suggests that scalp massage may help increase blood flow to hair follicles and could support hair health. While it is unlikely to reverse significant hair loss on its own, it can be a relaxing addition to your hair care routine and may provide modest benefits."
    }
  ];

  const relatedArticles = [
    {
      title: "Hair Loss Overview",
      href: "/hair-loss",
      description: "Complete guide to understanding and treating hair loss."
    },
    {
      title: "Hair Shedding",
      href: "/symptoms/hair-shedding",
      description: "Understanding normal versus excessive hair shedding."
    },
    {
      title: "Telogen Effluvium",
      href: "/conditions/telogen-effluvium",
      description: "How stress and health affect your hair and scalp."
    }
  ];

  return (
    <>
      <SEOHead 
        title="Scalp Health and Hair Growth | HairCare.ai"
        description="Learn how scalp health affects hair growth. Tips for managing dry, oily, or itchy scalp for healthier, stronger hair."
        canonicalUrl="https://haircare.ai/hair-health/scalp-care"
        articleSchema={{
          headline: "Scalp Health and Hair Growth",
          description: "Learn how scalp health affects hair growth with tips for managing dry, oily, or itchy scalp.",
          datePublished: "2024-01-15",
          dateModified: "2024-12-27"
        }}
        faqSchema={faqs}
      />
      
      <ContentPageLayout>
        <article className="max-w-4xl mx-auto" itemScope itemType="https://schema.org/Article">
          <Breadcrumb items={[
            { label: "Hair Health" },
            { label: "Scalp Care" }
          ]} />
          
          <header className="mb-8">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4" itemProp="headline">
              Scalp Health and Hair Growth
            </h1>
            <p className="text-lg text-muted-foreground">
              How a healthy scalp supports stronger, healthier hair.
            </p>
          </header>

          {/* Introduction */}
          <section className="prose prose-lg max-w-none mb-10">
            <p className="text-foreground leading-relaxed">
              When thinking about hair health, it is easy to focus on the hair strands themselves. But healthy hair 
              starts at the scalp—the skin from which your hair grows. Just as healthy soil supports thriving plants, 
              a healthy scalp creates the optimal environment for strong, vibrant hair.
            </p>
            <p className="text-foreground leading-relaxed">
              Scalp issues like dryness, oiliness, irritation, and buildup can affect how your hair looks and grows. 
              Understanding your scalp and how to care for it is an important part of any hair health routine.
            </p>
          </section>

          {/* Why Scalp Health Matters */}
          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Why Scalp Health Matters for Hair Growth
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              Your scalp contains approximately 100,000 hair follicles, each capable of producing hair. The health 
              of these follicles directly impacts your hair:
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground mb-4">
              <li><strong>Blood circulation:</strong> Hair follicles receive nutrients and oxygen through blood flow; good scalp circulation supports healthy growth</li>
              <li><strong>Sebum production:</strong> Natural oils from the scalp protect and condition hair; too much or too little can cause problems</li>
              <li><strong>Skin cell turnover:</strong> Healthy cell renewal keeps pores clear and follicles functioning properly</li>
              <li><strong>Microbiome balance:</strong> Your scalp hosts beneficial microorganisms that help maintain its health</li>
            </ul>
            <p className="text-foreground leading-relaxed">
              When your scalp is inflamed, congested, or unhealthy, it can disrupt the hair growth cycle and 
              contribute to <Link to="/hair-loss" className="text-primary hover:underline">hair loss</Link> or reduced hair quality.
            </p>
          </section>

          {/* Common Scalp Conditions */}
          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Common Scalp Conditions
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              Understanding common scalp issues can help you identify and address problems:
            </p>
            
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Dry Scalp</h3>
                <p className="text-muted-foreground mb-2">
                  Caused by insufficient natural oil production, often worsened by cold weather, harsh shampoos, 
                  or over-washing. Symptoms include tightness, small white flakes, and itching.
                </p>
                <p className="text-muted-foreground">
                  <strong>Care tips:</strong> Use moisturising shampoos, wash less frequently, avoid very hot water, 
                  and consider scalp oils or serums.
                </p>
              </div>
              
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Oily Scalp</h3>
                <p className="text-muted-foreground mb-2">
                  Caused by overactive sebaceous glands. Hair may look greasy quickly after washing. Can contribute 
                  to dandruff and clogged follicles.
                </p>
                <p className="text-muted-foreground">
                  <strong>Care tips:</strong> Wash regularly with a gentle clarifying shampoo, avoid heavy conditioners 
                  on the scalp, and resist over-washing (which can trigger more oil production).
                </p>
              </div>
              
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Dandruff (Seborrheic Dermatitis)</h3>
                <p className="text-muted-foreground mb-2">
                  A common condition causing flaky skin on the scalp. Often related to yeast overgrowth on the skin 
                  and can be mild to severe. Flakes are typically yellowish and oily.
                </p>
                <p className="text-muted-foreground">
                  <strong>Care tips:</strong> Use medicated shampoos containing zinc pyrithione, ketoconazole, or 
                  selenium sulfide. Consistent use is key for management.
                </p>
              </div>
              
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Scalp Psoriasis</h3>
                <p className="text-muted-foreground mb-2">
                  An autoimmune condition causing thick, red, scaly patches on the scalp. Can extend beyond the 
                  hairline. May cause temporary hair loss in affected areas.
                </p>
                <p className="text-muted-foreground">
                  <strong>Care tips:</strong> Requires medical treatment. Coal tar shampoos and prescription 
                  medications can help. See a dermatologist for proper management.
                </p>
              </div>
              
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Folliculitis</h3>
                <p className="text-muted-foreground mb-2">
                  Inflammation of hair follicles, often caused by bacterial or fungal infection. Appears as small, 
                  red bumps or pustules around hair follicles. Can be itchy or painful.
                </p>
                <p className="text-muted-foreground">
                  <strong>Care tips:</strong> Keep the scalp clean, avoid picking at bumps, and see a doctor if 
                  it persists. Antibacterial or antifungal treatments may be needed.
                </p>
              </div>
              
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Product Buildup</h3>
                <p className="text-muted-foreground mb-2">
                  Accumulation of styling products, dry shampoo, oils, and residue on the scalp. Can clog follicles 
                  and make hair appear dull or flat.
                </p>
                <p className="text-muted-foreground">
                  <strong>Care tips:</strong> Use a clarifying shampoo weekly or bi-weekly. Ensure products are 
                  fully rinsed out. Consider reducing product use.
                </p>
              </div>
            </div>
          </section>

          {/* Best Practices */}
          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Best Practices for Scalp Health
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              Follow these guidelines to maintain a healthy scalp:
            </p>
            
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Choose the Right Shampoo</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Match your shampoo to your scalp type (not just your hair type)</li>
                  <li>Look for gentle, sulfate-free formulas if you have sensitivity</li>
                  <li>Use medicated shampoos for specific conditions as directed</li>
                  <li>Rotate between a regular and clarifying shampoo</li>
                </ul>
              </div>
              
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Wash Correctly</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Focus shampoo on the scalp, not the lengths of your hair</li>
                  <li>Use lukewarm (not hot) water</li>
                  <li>Massage gently with fingertips, not nails</li>
                  <li>Rinse thoroughly to remove all product</li>
                  <li>Apply conditioner mainly to ends, avoiding the scalp</li>
                </ul>
              </div>
              
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Protect Your Scalp</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Wear a hat or use SPF spray on exposed scalp in the sun</li>
                  <li>Avoid excessive heat from styling tools near the scalp</li>
                  <li>Be gentle when brushing—start from the ends</li>
                  <li>Avoid tight hairstyles that pull on the scalp</li>
                </ul>
              </div>
              
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Support from Within</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Stay hydrated—drink plenty of water</li>
                  <li>Eat a balanced diet rich in vitamins and minerals</li>
                  <li>Manage stress, which can affect scalp health</li>
                  <li>Get adequate sleep for overall skin health</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Scalp Massage */}
          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              The Benefits of Scalp Massage
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              Regular scalp massage may offer several benefits:
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground mb-4">
              <li><strong>Improved circulation:</strong> May increase blood flow to hair follicles</li>
              <li><strong>Stress reduction:</strong> Promotes relaxation and reduces tension</li>
              <li><strong>Product distribution:</strong> Helps spread oils and treatments evenly</li>
              <li><strong>Loosens buildup:</strong> Can help dislodge dead skin cells and product residue</li>
            </ul>
            <p className="text-foreground leading-relaxed mb-4">
              To massage your scalp:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-foreground">
              <li>Use your fingertips (not nails) to apply gentle pressure</li>
              <li>Work in small circular motions across the entire scalp</li>
              <li>Spend 4-5 minutes daily or during shampooing</li>
              <li>Consider using a scalp massager tool for added convenience</li>
            </ol>
          </section>

          {/* When to See a Doctor */}
          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              When to See a Doctor
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              Consult a dermatologist if you experience:
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground">
              <li>Persistent itching, redness, or irritation that does not improve</li>
              <li>Scaly patches, sores, or unusual growths on the scalp</li>
              <li>Significant hair loss or bald patches</li>
              <li>Pain or tenderness on the scalp</li>
              <li>Signs of infection (pus, severe inflammation, fever)</li>
              <li>Dandruff or flaking that does not respond to over-the-counter treatments</li>
            </ul>
            <p className="text-foreground leading-relaxed mt-4">
              Many scalp conditions are easily treatable, but early intervention can prevent them from affecting 
              your hair growth or becoming more severe.
            </p>
          </section>

          <FAQSection faqs={faqs} />
          
          <ChatCTA 
            title="Have questions about your scalp health?"
            description="Talk to HairCare.ai about any scalp concerns and get personalised care recommendations."
          />
          
          <RelatedArticles articles={relatedArticles} />
          
          <MedicalDisclaimer />
        </article>
      </ContentPageLayout>
    </>
  );
};

export default ScalpCarePage;
