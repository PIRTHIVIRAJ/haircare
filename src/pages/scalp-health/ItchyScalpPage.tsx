import SEOHead from "@/components/SEOHead";
import ContentPageLayout from "@/components/ContentPageLayout";
import Breadcrumb from "@/components/Breadcrumb";
import FAQSection from "@/components/FAQSection";
import ChatCTA from "@/components/ChatCTA";
import MedicalDisclaimer from "@/components/MedicalDisclaimer";
import RelatedArticles from "@/components/RelatedArticles";

const ItchyScalpPage = () => {
  const faqs = [
    {
      question: "Why is my scalp itchy even though I wash it regularly?",
      answer: "Frequent washing with harsh shampoos may actually cause itching by stripping natural oils, leading to dryness and irritation. Other causes include product sensitivity, hard water, stress, or underlying conditions that need different treatment approaches."
    },
    {
      question: "Can stress cause an itchy scalp?",
      answer: "Yes, stress can contribute to scalp itching. Stress affects the nervous system and can increase sensitivity to itch. It can also trigger or worsen conditions like seborrheic dermatitis and psoriasis, and may lead to nervous scratching habits."
    },
    {
      question: "Is an itchy scalp a sign of hair loss?",
      answer: "An itchy scalp does not necessarily mean hair loss. However, some conditions that cause itching (like seborrheic dermatitis or scalp psoriasis) may affect hair if severe. Scratching can also damage hair and follicles. Treat the underlying cause to protect your hair."
    },
    {
      question: "When should I worry about an itchy scalp?",
      answer: "See a doctor if itching is severe, persistent, accompanied by sores or hair loss, not responding to gentle care changes, or affecting your sleep or quality of life. Also seek help if you notice unusual symptoms like spreading redness or fever."
    }
  ];

  const relatedArticles = [
    {
      title: "Dandruff vs Dry Scalp",
      href: "/scalp-health/dandruff-vs-dry-scalp",
      description: "Two common causes of itchy scalp."
    },
    {
      title: "Seborrheic Dermatitis",
      href: "/scalp-health/seborrheic-dermatitis",
      description: "A condition often causing itching and flaking."
    },
    {
      title: "Scalp Psoriasis",
      href: "/scalp-health/psoriasis",
      description: "Another cause of chronic scalp itching."
    }
  ];

  return (
    <>
      <SEOHead 
        title="Itchy Scalp Without Dandruff: Causes and Solutions | HairCare.ai"
        description="Explore the many causes of itchy scalp when dandruff is not the culprit, including allergies, dryness, and nerve-related itching. Find effective solutions."
        canonicalUrl="https://haircare.ai/scalp-health/itchy-scalp-no-dandruff"
        articleSchema={{
          headline: "Itchy Scalp Without Dandruff: Causes and Solutions",
          description: "Explore the many causes of itchy scalp when dandruff is not the culprit.",
          datePublished: "2024-12-28",
          dateModified: "2024-12-28"
        }}
        faqSchema={faqs}
      />
      
      <ContentPageLayout>
        <article className="max-w-4xl mx-auto" itemScope itemType="https://schema.org/Article">
          <Breadcrumb items={[
            { label: "Scalp Health", href: "/scalp-health" },
            { label: "Itchy Scalp Without Dandruff" }
          ]} />
          
          <header className="mb-8">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4" itemProp="headline">
              Itchy Scalp Without Dandruff
            </h1>
            <p className="text-lg text-muted-foreground">
              Understanding why your scalp itches when flakes are not the problem.
            </p>
          </header>

          <section className="prose prose-lg max-w-none mb-10">
            <p className="text-foreground leading-relaxed">
              An itchy scalp is frustrating enough, but it can be even more puzzling when there is no visible dandruff. Many people assume itching equals dandruff, but numerous other conditions cause scalp itching without noticeable flaking. Identifying the true cause is essential for finding relief.
            </p>
          </section>

          <section className="mb-10 p-6 rounded-xl bg-primary/5 border border-primary/20">
            <h2 className="font-heading text-xl font-semibold text-foreground mb-3">
              Quick Answer
            </h2>
            <p className="text-foreground leading-relaxed">
              Itchy scalp without dandruff can result from dry scalp, product sensitivity, contact dermatitis, nerve-related itch (neuropathic), psoriasis, allergies, or even stress. Treatment depends on identifying the cause, ranging from gentle moisturising care to addressing underlying conditions.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Common Causes of Itchy Scalp Without Dandruff
            </h2>
            
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Dry Scalp</h3>
                <p className="text-muted-foreground">
                  Lack of moisture leads to tight, itchy skin. Unlike dandruff (which involves oiliness), dry scalp may produce small, dry flakes that are easily missed. Common in cold, dry climates or with over-washing.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Product Sensitivity or Allergy</h3>
                <p className="text-muted-foreground">
                  Contact dermatitis occurs when the scalp reacts to an ingredient in shampoo, conditioner, dye, or styling products. Itching may occur immediately or develop over time with repeated exposure. Common culprits include fragrances, preservatives, and certain surfactants.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Scalp Psoriasis</h3>
                <p className="text-muted-foreground">
                  Psoriasis can cause intense itching even before scales become visible. Early or mild cases may itch without obvious plaques. It may also be hidden within the hair.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Neuropathic Itch</h3>
                <p className="text-muted-foreground">
                  Sometimes itching originates from nerve signals rather than skin problems. This can occur with nerve damage, stress, or conditions affecting the nervous system. The scalp looks normal but feels intensely itchy.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Sunburn</h3>
                <p className="text-muted-foreground">
                  The scalp, especially where hair is thin or parted, can become sunburned. As it heals, itching is common. There may be redness and later peeling, but initially it may just itch.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Head Lice</h3>
                <p className="text-muted-foreground">
                  Lice cause itching from their bites, not from flaking. They are more common in children but can affect adults. Close inspection may reveal nits (eggs) attached to hair shafts or moving lice.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Stress and Anxiety</h3>
                <p className="text-muted-foreground">
                  Stress can make the scalp more sensitive to itch and may trigger psychogenic itching. It can also worsen existing conditions like seborrheic dermatitis or psoriasis.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              How to Identify the Cause
            </h2>
            
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Consider Recent Changes</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>New hair products (shampoo, conditioner, dye, styling)</li>
                  <li>Changes in washing frequency or water source</li>
                  <li>Recent sun exposure</li>
                  <li>Changes in stress levels or health</li>
                </ul>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Examine Your Scalp</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Look for redness, bumps, or patches</li>
                  <li>Check for any hidden flaking or scaling</li>
                  <li>Look for signs of lice or nits</li>
                  <li>Note if itching is localised or widespread</li>
                </ul>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Trial Elimination</h3>
                <p className="text-muted-foreground">
                  Switch to a fragrance-free, gentle shampoo for 2-3 weeks. If itching improves, a product was likely the cause. Reintroduce products one at a time to identify the culprit.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Treatment Approaches
            </h2>
            
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">For Dry Scalp</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Use a gentle, moisturising shampoo</li>
                  <li>Reduce washing frequency if possible</li>
                  <li>Use lukewarm water, not hot</li>
                  <li>Consider a pre-shampoo scalp oil treatment</li>
                  <li>Use a humidifier in dry environments</li>
                </ul>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">For Product Sensitivity</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Switch to fragrance-free, hypoallergenic products</li>
                  <li>Avoid known sensitisers (common preservatives, dyes)</li>
                  <li>Patch test new products before full use</li>
                  <li>Use minimal products until symptoms resolve</li>
                </ul>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">For General Relief</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Avoid scratching (causes more irritation and damage)</li>
                  <li>Apply cool compress for temporary relief</li>
                  <li>OTC hydrocortisone (short-term only)</li>
                  <li>Antihistamines may help if allergy-related</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Common Myths
            </h2>
            
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-muted/50 border border-border">
                <p className="font-medium text-foreground mb-1">Myth: If there are no flakes, it cannot be a scalp condition</p>
                <p className="text-muted-foreground text-sm">
                  Many conditions cause itching before or without visible flaking. Early psoriasis, allergic reactions, and nerve-related itching may have minimal visible signs.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-muted/50 border border-border">
                <p className="font-medium text-foreground mb-1">Myth: Anti-dandruff shampoo will help any itchy scalp</p>
                <p className="text-muted-foreground text-sm">
                  Anti-dandruff shampoos target Malassezia yeast. If your itching has a different cause (dryness, allergy, neuropathic), they may not help and could even worsen irritation.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-muted/50 border border-border">
                <p className="font-medium text-foreground mb-1">Myth: Scratching provides harmless relief</p>
                <p className="text-muted-foreground text-sm">
                  Scratching damages the scalp, causes inflammation, and can lead to infection or hair damage. It often worsens itching in a vicious cycle. Treat the cause instead.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              When to See a Doctor
            </h2>
            <ul className="list-disc list-inside space-y-2 text-foreground mb-4">
              <li>Itching is severe or disrupting sleep</li>
              <li>Home remedies provide no relief after 2-3 weeks</li>
              <li>There are sores, bumps, or signs of infection</li>
              <li>You notice hair loss in itchy areas</li>
              <li>Itching spreads or worsens over time</li>
              <li>You cannot identify the cause</li>
            </ul>
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

export default ItchyScalpPage;