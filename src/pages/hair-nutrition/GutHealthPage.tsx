import SEOHead from "@/components/SEOHead";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleNavigation from "@/components/ArticleNavigation";
import RelatedArticles from "@/components/RelatedArticles";
import ContentPageLayout from "@/components/ContentPageLayout";

const faqItems = [
  {
    question: "Can gut problems cause hair loss?",
    answer: "Gut issues can contribute to hair problems through impaired nutrient absorption, inflammation, and immune dysfunction. Conditions like coeliac disease and inflammatory bowel disease are associated with higher rates of hair loss."
  },
  {
    question: "Do probiotics help with hair growth?",
    answer: "Research on probiotics and hair is still emerging. While a healthy gut microbiome supports overall health including nutrient absorption, there is limited direct evidence that probiotic supplements specifically improve hair growth."
  },
  {
    question: "How does leaky gut affect hair?",
    answer: "The concept of increased intestinal permeability may affect hair through systemic inflammation and immune activation. However, research in this area is still developing and claims should be viewed cautiously."
  }
];

const relatedArticles = [
  {
    title: "Nutrient Deficiencies Linked to Hair Loss",
    href: "/hair-nutrition/deficiencies",
    description: "How nutritional gaps affect hair health."
  },
  {
    title: "Foods That Promote Healthy Hair",
    href: "/hair-nutrition/best-foods",
    description: "Dietary choices that support optimal hair growth."
  },
  {
    title: "Iron, Zinc, and Biotin Explained",
    href: "/hair-nutrition/key-nutrients",
    description: "Key micronutrients for hair health."
  }
];

const GutHealthPage = () => {
  return (
    <ContentPageLayout>
      <SEOHead
        title="Gut Health and Hair Connection | Microbiome and Hair - HairCare.ai"
        description="Explore the relationship between gut health and hair. Learn how digestive conditions affect hair and what role the microbiome may play."
        canonicalUrl="https://haircare.ai/hair-nutrition/gut-health"
        articleSchema={{
          headline: "Gut Health and Hair Connection",
          description: "Understanding the emerging science of how gut health affects hair.",
          datePublished: "2025-06-28",
          dateModified: "2025-06-28"
        }}
        faqSchema={faqItems}
      />

      <article className="max-w-4xl mx-auto" itemScope itemType="https://schema.org/Article">
        <Breadcrumb items={[
          { label: "Hair Nutrition", href: "/hair-nutrition" },
          { label: "Gut Health and Hair" }
        ]} />

        <header className="mb-8">
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4" itemProp="headline">
            Gut Health and Hair Connection
          </h1>
          <p className="text-lg text-muted-foreground">
            The health of your digestive system may influence your hair in ways science is only beginning to understand.
          </p>
        </header>

        <section className="prose prose-lg max-w-none mb-10">
          <p className="text-foreground leading-relaxed">
            The gut-hair connection represents an emerging area of research that examines how digestive health, the microbiome, and nutrient absorption affect hair. While the direct mechanisms are still being studied, there is growing recognition that a healthy gut supports healthy hair through multiple pathways.
          </p>
          <p className="text-foreground leading-relaxed">
            This article explores what we currently know about this connection, distinguishing between established science and areas that remain speculative. Understanding the relationship can help inform a holistic approach to hair health that considers the whole body.
          </p>
        </section>

        <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-10">
          <h2 className="font-heading text-xl font-semibold text-foreground mb-3">Quick Answer</h2>
          <p className="text-foreground">
            Gut health affects hair primarily through nutrient absorption, as the digestive system determines how well you utilise the nutrients you consume. Inflammatory gut conditions can also trigger hair loss. The role of the microbiome in hair health is an active area of research with promising but preliminary findings.
          </p>
        </div>

        <section className="mb-10">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
            How Gut Health Affects Hair
          </h2>
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-card border border-border">
              <h3 className="font-semibold text-foreground mb-2">Nutrient Absorption</h3>
              <p className="text-muted-foreground">
                The small intestine is responsible for absorbing the vitamins, minerals, and amino acids that hair needs. Damage to the intestinal lining from conditions like coeliac disease or Crohn's disease impairs absorption, leading to deficiencies that affect hair.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-card border border-border">
              <h3 className="font-semibold text-foreground mb-2">Inflammation</h3>
              <p className="text-muted-foreground">
                Chronic gut inflammation can trigger systemic inflammatory responses that affect tissues throughout the body, including hair follicles. Inflammatory bowel diseases are associated with higher rates of hair loss.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-card border border-border">
              <h3 className="font-semibold text-foreground mb-2">Immune Function</h3>
              <p className="text-muted-foreground">
                A significant portion of the immune system resides in the gut. Immune dysregulation originating from gut problems may play a role in autoimmune hair conditions like alopecia areata.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-card border border-border">
              <h3 className="font-semibold text-foreground mb-2">Microbiome Influence</h3>
              <p className="text-muted-foreground">
                Gut bacteria produce vitamins including biotin and influence hormone metabolism. Research is exploring how microbiome composition might affect hair, though direct causal links are not yet established.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
            Digestive Conditions Linked to Hair Loss
          </h2>
          <p className="text-foreground leading-relaxed mb-4">
            Several gastrointestinal conditions are associated with hair problems:
          </p>
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-card border border-border">
              <h3 className="font-semibold text-foreground mb-2">Coeliac Disease</h3>
              <p className="text-muted-foreground">
                This autoimmune reaction to gluten damages the small intestine, causing malabsorption of iron, zinc, and other nutrients essential for hair. Alopecia areata is more common in people with coeliac disease.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-card border border-border">
              <h3 className="font-semibold text-foreground mb-2">Inflammatory Bowel Disease</h3>
              <p className="text-muted-foreground">
                Crohn's disease and ulcerative colitis can cause hair loss through inflammation, malabsorption, and the medications used to treat them. Nutritional deficiencies are common.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-card border border-border">
              <h3 className="font-semibold text-foreground mb-2">Small Intestinal Bacterial Overgrowth</h3>
              <p className="text-muted-foreground">
                SIBO can interfere with nutrient absorption and cause deficiencies that affect hair, particularly iron and B12.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-card border border-border">
              <h3 className="font-semibold text-foreground mb-2">Gastric Surgery</h3>
              <p className="text-muted-foreground">
                Procedures that reduce stomach capacity or bypass portions of the intestine can cause significant hair loss due to rapid weight loss and impaired nutrient absorption.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
            The Microbiome and Hair: What We Know
          </h2>
          <p className="text-foreground leading-relaxed mb-4">
            Research on the gut microbiome and hair is still in early stages. Current understanding includes:
          </p>
          <ul className="list-disc list-inside space-y-2 text-foreground mb-4">
            <li>Gut bacteria synthesise certain B vitamins including biotin</li>
            <li>The microbiome influences immune function, which may affect autoimmune hair loss</li>
            <li>Some animal studies suggest probiotics may influence hair growth, but human data is limited</li>
            <li>Antibiotic use disrupts the microbiome and may temporarily affect nutrient synthesis</li>
          </ul>
          <p className="text-foreground leading-relaxed">
            While this area is promising, claims about specific probiotic strains improving hair growth should be viewed with healthy scepticism until more research is available.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
            Supporting Gut Health for Hair
          </h2>
          <p className="text-foreground leading-relaxed mb-4">
            General principles for gut health that may benefit hair:
          </p>
          <ul className="list-disc list-inside space-y-2 text-foreground">
            <li>Eat a diverse diet rich in fibre to support healthy gut bacteria</li>
            <li>Include fermented foods like yogurt, kefir, and sauerkraut</li>
            <li>Limit highly processed foods that may negatively affect the microbiome</li>
            <li>Stay hydrated to support digestive function</li>
            <li>Manage stress, which affects gut health through the gut-brain axis</li>
            <li>Address diagnosed digestive conditions with appropriate medical treatment</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
            Common Myths About Gut Health and Hair
          </h2>
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/20">
              <h3 className="font-semibold text-foreground mb-2">Myth: Detox cleanses improve hair by cleaning the gut</h3>
              <p className="text-muted-foreground">
                The body does not require special cleanses to detoxify. Most detox programmes have no scientific basis and may actually stress the body through calorie restriction.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/20">
              <h3 className="font-semibold text-foreground mb-2">Myth: All hair problems stem from leaky gut</h3>
              <p className="text-muted-foreground">
                While intestinal permeability is a real phenomenon being studied, it is often overstated in wellness circles. Most hair loss has other well-established causes.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/20">
              <h3 className="font-semibold text-foreground mb-2">Myth: Expensive probiotic supplements are necessary for healthy hair</h3>
              <p className="text-muted-foreground">
                For most people, a balanced diet supports a healthy microbiome without supplements. Probiotic supplements may help specific conditions but are not proven hair treatments.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
            When to Seek Professional Help
          </h2>
          <p className="text-foreground leading-relaxed mb-4">
            Consult a healthcare provider if:
          </p>
          <ul className="list-disc list-inside space-y-2 text-foreground mb-4">
            <li>You have persistent digestive symptoms alongside hair loss</li>
            <li>You have a diagnosed gut condition and are experiencing hair changes</li>
            <li>You suspect malabsorption based on symptoms like unexplained weight loss or fatigue</li>
            <li>You have a family history of coeliac disease or autoimmune conditions</li>
            <li>Hair loss is severe or accompanied by other concerning symptoms</li>
          </ul>
          <p className="text-foreground leading-relaxed">
            A gastroenterologist can evaluate gut health, while a dermatologist or trichologist can assess hair specifically. Coordinated care may be beneficial when gut and hair problems coexist.
          </p>
        </section>

        <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-10">
          <p className="text-foreground">
            HairCare AI can help personalise this further based on your hair type, scalp condition, and goals.
          </p>
        </div>

        <ArticleNavigation
          previous={{ href: "/hair-nutrition/alcohol", title: "Alcohol and Hair Thinning" }}
          next={{ href: "/hair-faqs", title: "Hair FAQs Overview" }}
        />

        <RelatedArticles articles={relatedArticles} />
      </article>
    </ContentPageLayout>
  );
};

export default GutHealthPage;
