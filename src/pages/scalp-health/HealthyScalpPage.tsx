import SEOHead from "@/components/SEOHead";
import ContentPageLayout from "@/components/ContentPageLayout";
import Breadcrumb from "@/components/Breadcrumb";
import FAQSection from "@/components/FAQSection";
import ChatCTA from "@/components/ChatCTA";
import MedicalDisclaimer from "@/components/MedicalDisclaimer";
import RelatedArticles from "@/components/RelatedArticles";
import ArticleNavigation from "@/components/ArticleNavigation";

const HealthyScalpPage = () => {
  const faqs = [
    {
      question: "How often should I wash my hair for a healthy scalp?",
      answer: "Washing frequency depends on hair type and scalp oiliness. Most people benefit from washing every 2-3 days. Very oily scalps may need daily washing; dry scalps may need less frequent washing. The goal is to remove excess oil and buildup without stripping natural moisture."
    },
    {
      question: "What does an unhealthy scalp look like?",
      answer: "Signs of an unhealthy scalp include persistent flaking, visible redness, excessive oiliness or dryness, itching, tenderness, bumps, sores, or unusual odour. Hair may also appear dull, limp, or fall out more than usual when the scalp is unhealthy."
    },
    {
      question: "Can scalp health affect hair growth?",
      answer: "Yes, scalp health directly impacts hair growth. Inflammation, infection, product buildup, and chronic conditions can disrupt the hair follicle cycle, leading to slower growth, weaker hair, or increased shedding. A healthy scalp provides the optimal environment for hair follicles."
    },
    {
      question: "Should I use scalp treatments even if I have no problems?",
      answer: "Basic scalp maintenance through regular cleansing is sufficient for most healthy scalps. Additional treatments like exfoliation or scalp serums may benefit some people but are not necessary for everyone. Address issues if they arise rather than over-treating a healthy scalp."
    }
  ];

  const relatedArticles = [
    {
      title: "Dandruff vs Dry Scalp",
      href: "/scalp-health/dandruff-vs-dry-scalp",
      description: "Understanding the difference between these common conditions."
    },
    {
      title: "How to Exfoliate Your Scalp Safely",
      href: "/scalp-health/exfoliation",
      description: "Proper techniques for scalp exfoliation."
    },
    {
      title: "Best Ingredients for Scalp Health",
      href: "/scalp-health/best-ingredients",
      description: "Key ingredients that support scalp health."
    }
  ];

  return (
    <>
      <SEOHead 
        title="What is a Healthy Scalp? Signs, Care, and Maintenance | HairCare.ai"
        description="Learn what characterises a healthy scalp, how to assess your scalp health, and practical steps to maintain optimal conditions for hair growth."
        canonicalUrl="https://haircare.ai/scalp-health/healthy-scalp"
        articleSchema={{
          headline: "What is a Healthy Scalp?",
          description: "Learn what characterises a healthy scalp and how to maintain optimal conditions for hair growth.",
          datePublished: "2024-12-28",
          dateModified: "2024-12-28"
        }}
        faqSchema={faqs}
      />
      
      <ContentPageLayout>
        <article className="max-w-4xl mx-auto" itemScope itemType="https://schema.org/Article">
          <Breadcrumb items={[
            { label: "Scalp Health", href: "/scalp-health" },
            { label: "Healthy Scalp" }
          ]} />
          
          <header className="mb-8">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4" itemProp="headline">
              What is a Healthy Scalp?
            </h1>
            <p className="text-lg text-muted-foreground">
              Understanding the characteristics of scalp health and how to achieve it.
            </p>
          </header>

          <section className="prose prose-lg max-w-none mb-10">
            <p className="text-foreground leading-relaxed">
              The scalp is often overlooked in haircare routines, yet it is the foundation from which all hair grows. A healthy scalp provides the optimal environment for hair follicles to function properly, producing strong, vibrant hair. Conversely, scalp problems can lead to hair issues ranging from dullness to increased shedding.
            </p>
            <p className="text-foreground leading-relaxed">
              This guide explains what constitutes a healthy scalp, how to recognise signs of trouble, and practical steps to maintain or improve your scalp health.
            </p>
          </section>

          <section className="mb-10 p-6 rounded-xl bg-primary/5 border border-primary/20">
            <h2 className="font-heading text-xl font-semibold text-foreground mb-3">
              Quick Answer
            </h2>
            <p className="text-foreground leading-relaxed">
              A healthy scalp is balanced—neither too oily nor too dry—with a natural skin tone (no redness or irritation), minimal flaking, no persistent itching, and proper circulation. It supports normal hair growth without excessive shedding and feels comfortable without tenderness or sensitivity.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Characteristics of a Healthy Scalp
            </h2>
            
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Balanced Sebum Production</h3>
                <p className="text-muted-foreground">
                  Sebum is the natural oil produced by sebaceous glands in the scalp. A healthy scalp produces enough sebum to moisturise and protect hair without becoming excessively greasy. The hair should feel neither oily and limp nor dry and brittle between washes.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Normal Skin Colour</h3>
                <p className="text-muted-foreground">
                  The scalp should generally match your natural skin tone—not red, inflamed, or discoloured. Some variation is normal, but persistent redness, white patches, or unusual pigmentation may indicate conditions requiring attention.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">No Excessive Flaking</h3>
                <p className="text-muted-foreground">
                  Some cell turnover is normal, but visible flakes on hair or clothing suggest a scalp condition. A healthy scalp sheds dead skin cells subtly, without noticeable flaking or buildup.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Comfortable Sensation</h3>
                <p className="text-muted-foreground">
                  You should not constantly think about your scalp. A healthy scalp does not itch, burn, or feel tight. Occasional mild itchiness after sweating is normal, but persistent discomfort is not.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Proper Hair Growth</h3>
                <p className="text-muted-foreground">
                  Hair emerges smoothly from follicles and grows at a normal rate (about 1 cm per month). There are no blocked or clogged follicles, no excessive shedding, and hair feels strong rather than weak or brittle at the root.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              The Scalp Microbiome
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              Like the gut and skin elsewhere on the body, the scalp hosts a community of microorganisms called the microbiome. This includes bacteria, fungi, and other microbes that, when balanced, contribute to scalp health.
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground mb-4">
              <li><strong>Beneficial microbes:</strong> Help maintain pH, compete with harmful organisms, and support skin barrier function</li>
              <li><strong>Malassezia yeast:</strong> Present on all scalps; only causes problems when overgrown</li>
              <li><strong>Balance:</strong> Disruptions from harsh products, antibiotics, or illness can allow problematic organisms to flourish</li>
            </ul>
            <p className="text-foreground leading-relaxed">
              Maintaining a balanced microbiome involves gentle cleansing, avoiding over-washing, and using products that do not disrupt the scalp's natural pH.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              How to Maintain a Healthy Scalp
            </h2>
            
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Regular Cleansing</h3>
                <p className="text-muted-foreground">
                  Wash your hair regularly to remove excess oil, dead skin cells, and product buildup. Frequency depends on your hair type—every 2-3 days is typical. Use a gentle shampoo and massage it into the scalp, not just the hair.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Proper Technique</h3>
                <p className="text-muted-foreground">
                  Use fingertips (not nails) to massage shampoo into the scalp in circular motions. This cleanses thoroughly, stimulates blood flow, and avoids scratching or damaging the skin. Rinse thoroughly to prevent product buildup.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Condition Appropriately</h3>
                <p className="text-muted-foreground">
                  Apply conditioner primarily to the ends of hair, not the scalp. Conditioner on the scalp can lead to buildup and oiliness in some people. If your scalp is dry, look for lightweight, scalp-appropriate moisturisers.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Protect from Sun and Elements</h3>
                <p className="text-muted-foreground">
                  The scalp can sunburn, especially where hair is thin or parted. Use hats, UV-protective sprays, or hairstyles that provide coverage. In cold weather, protect against dryness with appropriate covering.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Avoid Irritants</h3>
                <p className="text-muted-foreground">
                  Some scalps are sensitive to certain ingredients. If you notice itching or irritation after using specific products, consider switching to gentler formulations. Sulphate-free shampoos may be better tolerated by sensitive scalps.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Signs of Scalp Problems
            </h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Warning Signs</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Persistent itching</li>
                  <li>Visible flaking or scaling</li>
                  <li>Redness or inflammation</li>
                  <li>Tenderness or pain</li>
                  <li>Bumps, sores, or scabs</li>
                  <li>Unusual odour</li>
                  <li>Increased hair shedding</li>
                </ul>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Possible Causes</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Dandruff or seborrheic dermatitis</li>
                  <li>Psoriasis</li>
                  <li>Fungal infection</li>
                  <li>Contact dermatitis (product reaction)</li>
                  <li>Folliculitis (infected follicles)</li>
                  <li>Dry scalp</li>
                  <li>Product buildup</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Common Myths About Scalp Health
            </h2>
            
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-muted/50 border border-border">
                <p className="font-medium text-foreground mb-1">Myth: Brushing 100 strokes daily is good for scalp health</p>
                <p className="text-muted-foreground text-sm">
                  Excessive brushing can cause friction damage to hair and irritate the scalp. Brush only enough to detangle and distribute natural oils. Gentle, necessary brushing is sufficient.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-muted/50 border border-border">
                <p className="font-medium text-foreground mb-1">Myth: A squeaky-clean feeling means the scalp is healthy</p>
                <p className="text-muted-foreground text-sm">
                  That squeaky feeling often indicates over-stripping of natural oils, which can disrupt the scalp barrier and lead to irritation or rebound oiliness. Gentle cleansing is more beneficial.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-muted/50 border border-border">
                <p className="font-medium text-foreground mb-1">Myth: Oily scalp means you should skip conditioner</p>
                <p className="text-muted-foreground text-sm">
                  Hair still needs moisture even if your scalp is oily. Apply conditioner to lengths and ends, avoiding the scalp. Skipping conditioner can lead to dry, damaged hair.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              When to Seek Professional Help
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              Consult a dermatologist if you experience:
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground mb-4">
              <li>Persistent symptoms despite good hygiene and gentle products</li>
              <li>Severe itching, pain, or burning</li>
              <li>Open sores or scabs that do not heal</li>
              <li>Significant hair loss accompanying scalp symptoms</li>
              <li>Spreading patches of redness or scaling</li>
              <li>Signs of infection (pus, increasing pain, fever)</li>
            </ul>
          </section>

          <section className="mb-10 p-6 rounded-xl bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20">
            <p className="text-foreground leading-relaxed">
              HairCare AI can help personalise this further based on your hair type, scalp condition, and goals.
            </p>
          </section>

          <FAQSection faqs={faqs} />
          
          <ArticleNavigation 
            next={{ title: "Dandruff vs Dry Scalp", href: "/scalp-health/dandruff-vs-dry-scalp" }}
            relatedArticles={relatedArticles.map(a => ({ title: a.title, href: a.href }))}
          />
          
          <ChatCTA />
          
          <MedicalDisclaimer />
        </article>
      </ContentPageLayout>
    </>
  );
};

export default HealthyScalpPage;