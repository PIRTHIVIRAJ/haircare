import SEOHead from "@/components/SEOHead";
import ContentPageLayout from "@/components/ContentPageLayout";
import Breadcrumb from "@/components/Breadcrumb";
import FAQSection from "@/components/FAQSection";
import ChatCTA from "@/components/ChatCTA";
import MedicalDisclaimer from "@/components/MedicalDisclaimer";
import RelatedArticles from "@/components/RelatedArticles";
import ArticleNavigation from "@/components/ArticleNavigation";

const SignsOfRegrowthPage = () => {
  const faqs = [
    { question: "Is baby hair a sign of regrowth?", answer: "Yes, fine, short hairs at the hairline or throughout thinning areas often indicate new growth. These vellus hairs typically thicken over time." },
    { question: "How can I tell regrowth from breakage?", answer: "Regrowth emerges from the scalp and has tapered ends. Broken hairs have blunt ends and may occur along the length of the strand." }
  ];
  const relatedArticles = [
    { title: "Hair Regrowth Timelines", href: "/hair-growth/regrowth-timeline", description: "What to expect during recovery" },
    { title: "Can You Really Regrow Lost Hair?", href: "/hair-growth/can-hair-regrow", description: "Understanding what's possible" }
  ];

  return (
    <>
      <SEOHead title="Signs Your Hair Is Growing Back | HairCare.ai" description="Learn how to recognise early signs of hair regrowth and distinguish new growth from other hair changes." canonicalUrl="https://haircare.ai/hair-growth/signs-of-regrowth" articleSchema={{ headline: "Signs Your Hair Is Growing Back", description: "Recognise early signs of hair regrowth." }} />
      <ContentPageLayout>
        <div className="max-w-4xl mx-auto">
          <Breadcrumb items={[{ label: "Hair Growth", href: "/hair-growth" }, { label: "Signs of Regrowth" }]} />
          <article className="prose prose-lg max-w-none">
            <header className="mb-8">
              <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">Signs Your Hair Is Growing Back</h1>
              <p className="text-lg text-muted-foreground">Recognising early signs of regrowth provides reassurance that recovery is underway.</p>
            </header>
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-8">
              <h2 className="text-lg font-semibold text-foreground mt-0 mb-2">Quick Answer</h2>
              <p className="text-muted-foreground mb-0">Signs of regrowth include reduced shedding, fine baby hairs appearing at the hairline and part, dark stubble in previously bare areas, and gradual increase in hair density. These changes typically become noticeable 3-6 months after addressing the cause of hair loss.</p>
            </div>
            <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">Key Signs of Regrowth</h2>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li><strong>Decreased shedding:</strong> Fewer hairs on your pillow, brush, or in the shower drain</li>
              <li><strong>Baby hairs:</strong> Fine, short hairs emerging along the hairline and part line</li>
              <li><strong>Dark stubble:</strong> In areas that were bare, you may notice dark dots where new hair is emerging</li>
              <li><strong>Improved density:</strong> Scalp becomes less visible as coverage increases</li>
              <li><strong>Different texture:</strong> New growth may initially feel softer or have a different texture</li>
            </ul>
            <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">What New Growth Looks Like</h2>
            <p className="text-muted-foreground mb-4">Early regrowth often appears as fine, tapered hairs that may be lighter or thinner than your mature hair. Over several months, these hairs typically thicken and lengthen to match surrounding hair.</p>
            <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">When to Seek Professional Help</h2>
            <p className="text-muted-foreground mb-4">Consult a healthcare provider if you see no signs of improvement after 6-12 months, if shedding increases again, or if you have concerns about your progress.</p>
            <div className="bg-accent/30 border border-accent rounded-lg p-6 my-8">
              <p className="text-foreground mb-0"><strong>HairCare AI can help personalise this further based on your hair type, scalp condition, and goals.</strong></p>
            </div>
            <ArticleNavigation previous={{ title: "Hair Regrowth Timelines", href: "/hair-growth/regrowth-timeline" }} next={{ title: "Myths About Hair Growth", href: "/hair-growth/myths" }} />
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

export default SignsOfRegrowthPage;
