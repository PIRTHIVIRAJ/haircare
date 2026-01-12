import SEOHead from "@/components/SEOHead";
import ContentPageLayout from "@/components/ContentPageLayout";
import Breadcrumb from "@/components/Breadcrumb";
import FAQSection from "@/components/FAQSection";
import ChatCTA from "@/components/ChatCTA";
import MedicalDisclaimer from "@/components/MedicalDisclaimer";
import RelatedArticles from "@/components/RelatedArticles";
import ArticleNavigation from "@/components/ArticleNavigation";

const HowFastHairGrowsPage = () => {
  const faqs = [
    {
      question: "How many centimetres does hair grow per month?",
      answer: "On average, hair grows approximately 1.25 centimetres (half an inch) per month. This translates to roughly 15 centimetres (6 inches) per year, though individual rates vary based on genetics, age, health, and hair care practices."
    },
    {
      question: "Does cutting hair make it grow faster?",
      answer: "No, cutting hair does not affect the rate of growth from the follicle. Trimming removes damaged ends and can make hair appear healthier and fuller, but it has no biological effect on how quickly new hair emerges from the scalp."
    },
    {
      question: "At what age does hair grow the fastest?",
      answer: "Hair typically grows fastest between the ages of 15 and 30. Growth rates begin to slow after 30 and continue declining with age, which is why older individuals often notice their hair takes longer to reach certain lengths."
    },
    {
      question: "Can you speed up hair growth?",
      answer: "While you cannot fundamentally change your genetic growth rate, you can optimise conditions for growth by maintaining a balanced diet, managing stress, avoiding hair damage, and addressing any underlying health issues that might slow growth."
    }
  ];

  const relatedArticles = [
    { title: "Can You Really Regrow Lost Hair?", href: "/hair-growth/can-hair-regrow", description: "Understanding what's possible with hair regrowth" },
    { title: "Hair Growth Cycle Explained", href: "/hair-growth/growth-cycle", description: "The science behind how hair develops" },
    { title: "Hair Regrowth Timelines", href: "/hair-growth/regrowth-timeline", description: "Realistic expectations for regrowth" }
  ];

  return (
    <>
      <SEOHead 
        title="How Fast Does Hair Grow? Average Growth Rates Explained | HairCare.ai"
        description="Learn how fast hair grows on average, what factors affect growth rate, and evidence-based ways to support healthy hair growth."
        canonicalUrl="https://haircare.ai/hair-growth/how-fast-does-hair-grow"
        articleSchema={{
          headline: "How Fast Does Hair Grow?",
          description: "Learn how fast hair grows on average, what factors affect growth rate, and evidence-based ways to support healthy hair growth.",
        }}
      />
      
      <ContentPageLayout>
        <div className="max-w-4xl mx-auto">
          <Breadcrumb items={[
            { label: "Hair Growth", href: "/hair-growth" },
            { label: "How Fast Does Hair Grow" }
          ]} />
          
          <article className="prose prose-lg max-w-none">
            <header className="mb-8">
              <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
                How Fast Does Hair Grow?
              </h1>
              <p className="text-lg text-muted-foreground">
                Whether you are growing out a short cut, recovering from hair loss, or simply curious about your body, understanding hair growth rates helps set realistic expectations and informs better hair care decisions.
              </p>
            </header>

            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-8">
              <h2 className="text-lg font-semibold text-foreground mt-0 mb-2">Quick Answer</h2>
              <p className="text-muted-foreground mb-0">
                Human hair grows at an average rate of approximately 1.25 centimetres (0.5 inches) per month, or about 15 centimetres (6 inches) per year. However, this varies considerably between individuals based on genetics, age, hormones, nutrition, and overall health.
              </p>
            </div>

            <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">The Science of Hair Growth</h2>
            <p className="text-muted-foreground mb-4">
              Hair growth originates in the hair follicle, a small organ embedded in the skin. At the base of each follicle sits the hair bulb, where rapidly dividing cells create the hair shaft. As new cells form, they push older cells upward. These cells harden through a process called keratinisation, forming the visible hair strand.
            </p>
            <p className="text-muted-foreground mb-4">
              The rate at which these cells divide determines how quickly your hair grows. This process is influenced by blood supply to the follicle, hormonal signals, and the availability of nutrients required for cell production.
            </p>

            <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">Average Growth Rates</h2>
            <p className="text-muted-foreground mb-4">
              Research consistently shows that scalp hair grows at approximately:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li><strong>Per day:</strong> 0.3 to 0.4 millimetres</li>
              <li><strong>Per week:</strong> 2.5 to 3 millimetres</li>
              <li><strong>Per month:</strong> 1 to 1.5 centimetres (0.4 to 0.6 inches)</li>
              <li><strong>Per year:</strong> 12 to 18 centimetres (5 to 7 inches)</li>
            </ul>
            <p className="text-muted-foreground mb-4">
              These figures represent averages across populations. Individual growth rates can fall outside these ranges while still being perfectly normal.
            </p>

            <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">Factors That Affect Hair Growth Rate</h2>
            
            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">Genetics</h3>
            <p className="text-muted-foreground mb-4">
              Your genetic makeup is the primary determinant of hair growth rate. Studies show that people of Asian descent often have the fastest-growing hair, averaging about 1.3 centimetres per month. Those of African descent typically have the slowest average rate at around 0.9 centimetres per month, while people of European descent fall in between at approximately 1.2 centimetres per month.
            </p>

            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">Age</h3>
            <p className="text-muted-foreground mb-4">
              Hair growth rate peaks during adolescence and early adulthood, typically between ages 15 and 30. After 30, growth gradually slows, and the anagen (active growth) phase of the hair cycle shortens. This is why many people notice their hair seems to grow more slowly as they age, and may not reach the lengths it did in youth.
            </p>

            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">Hormones</h3>
            <p className="text-muted-foreground mb-4">
              Hormones significantly influence hair growth. Androgens like testosterone can accelerate growth but may also contribute to pattern hair loss in genetically predisposed individuals. Thyroid hormones regulate metabolism, and imbalances can slow hair growth. Pregnancy often increases growth rate due to elevated oestrogen levels.
            </p>

            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">Nutrition</h3>
            <p className="text-muted-foreground mb-4">
              Hair is made primarily of protein (keratin), so adequate protein intake is essential. Other key nutrients include:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li><strong>Iron:</strong> Supports oxygen delivery to follicles</li>
              <li><strong>Biotin:</strong> Involved in keratin production</li>
              <li><strong>Zinc:</strong> Supports follicle health and oil gland function</li>
              <li><strong>Vitamin D:</strong> May influence the hair growth cycle</li>
              <li><strong>Omega-3 fatty acids:</strong> Contribute to scalp health</li>
            </ul>
            <p className="text-muted-foreground mb-4">
              Deficiencies in these nutrients can impair growth rate and hair quality.
            </p>

            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">Health Conditions</h3>
            <p className="text-muted-foreground mb-4">
              Various medical conditions can affect hair growth rate, including thyroid disorders, anaemia, hormonal imbalances, autoimmune conditions, and chronic illnesses. Some medications also slow hair growth as a side effect.
            </p>

            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">Stress</h3>
            <p className="text-muted-foreground mb-4">
              Chronic stress can disrupt the hair growth cycle, potentially pushing more hairs into the resting phase prematurely. This can reduce the apparent growth rate and overall hair density. Managing stress supports normal hair cycling.
            </p>

            <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">Hair Growth on Different Body Parts</h2>
            <p className="text-muted-foreground mb-4">
              Growth rates vary by body location:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li><strong>Scalp:</strong> 1 to 1.5 cm per month (longest growth phase)</li>
              <li><strong>Eyebrows:</strong> 0.3 to 0.4 cm per month</li>
              <li><strong>Eyelashes:</strong> 0.1 to 0.15 cm per month</li>
              <li><strong>Beard:</strong> 0.3 to 1 cm per month (highly variable)</li>
              <li><strong>Body hair:</strong> 0.2 to 0.5 cm per month</li>
            </ul>
            <p className="text-muted-foreground mb-4">
              These differences relate to the duration of the anagen phase, which is longest for scalp hair (2 to 7 years) and much shorter for body hair.
            </p>

            <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">Supporting Healthy Hair Growth</h2>
            <p className="text-muted-foreground mb-4">
              While you cannot dramatically increase your genetic growth rate, you can create optimal conditions for growth:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li>Eat a balanced diet rich in protein, iron, and essential vitamins</li>
              <li>Stay hydrated to support overall cellular function</li>
              <li>Manage stress through exercise, sleep, and relaxation techniques</li>
              <li>Avoid excessive heat styling and chemical treatments that cause breakage</li>
              <li>Treat scalp conditions that might impair follicle function</li>
              <li>Address any underlying health issues with medical guidance</li>
            </ul>

            <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">Common Myths About Hair Growth</h2>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li><strong>"Shaving makes hair grow back thicker and faster":</strong> Shaving has no effect on follicle function or growth rate. Hair may appear thicker because the blunt cut end feels coarser than a naturally tapered tip.</li>
              <li><strong>"Frequent trims make hair grow faster":</strong> Trimming prevents split ends from travelling up the shaft and causing breakage, but it does not affect the rate of growth from the root.</li>
              <li><strong>"Hair grows faster in summer":</strong> Some research suggests slightly faster growth in warmer months, possibly due to increased blood circulation, but the difference is minimal.</li>
              <li><strong>"Certain products can double your growth rate":</strong> No topical product can fundamentally alter the biological speed of hair cell division. Products may improve hair health and reduce breakage, helping retain length.</li>
            </ul>

            <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">When to Seek Professional Help</h2>
            <p className="text-muted-foreground mb-4">
              Consult a healthcare provider or dermatologist if you notice:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li>Sudden or significant slowing of hair growth</li>
              <li>Patchy or uneven growth</li>
              <li>Hair loss accompanying slow growth</li>
              <li>Changes in hair texture or quality</li>
              <li>Other symptoms suggesting an underlying health condition</li>
            </ul>
            <p className="text-muted-foreground mb-4">
              These could indicate nutritional deficiencies, hormonal imbalances, or medical conditions that benefit from professional evaluation and treatment.
            </p>

            <div className="bg-accent/30 border border-accent rounded-lg p-6 my-8">
              <p className="text-foreground mb-0">
                <strong>HairCare AI can help personalise this further based on your hair type, scalp condition, and goals.</strong>
              </p>
            </div>

            <ArticleNavigation 
              next={{ title: "Can You Really Regrow Lost Hair?", href: "/hair-growth/can-hair-regrow" }}
            />
          </article>

          <FAQSection faqs={faqs} />
          <ChatCTA />
          <RelatedArticles articles={relatedArticles} />
          <MedicalDisclaimer />
        </div>
      </ContentPageLayout>
    </>
  );
};

export default HowFastHairGrowsPage;
