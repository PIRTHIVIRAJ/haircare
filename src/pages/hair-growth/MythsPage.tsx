import SEOHead from "@/components/SEOHead";
import ContentPageLayout from "@/components/ContentPageLayout";
import Breadcrumb from "@/components/Breadcrumb";
import FAQSection from "@/components/FAQSection";
import ChatCTA from "@/components/ChatCTA";
import MedicalDisclaimer from "@/components/MedicalDisclaimer";
import RelatedArticles from "@/components/RelatedArticles";
import ArticleNavigation from "@/components/ArticleNavigation";

const MythsPage = () => {
  const faqs = [
    { question: "Does wearing hats cause baldness?", answer: "No. Hats do not cause hair loss unless they are extremely tight and worn constantly, which is rare. Pattern baldness is genetic and hormonal." },
    { question: "Will plucking grey hairs make more grow?", answer: "No. Plucking one hair does not affect other follicles. However, repeated plucking can damage the follicle." }
  ];
  const relatedArticles = [
    { title: "How Fast Does Hair Grow?", href: "/hair-growth/how-fast-does-hair-grow", description: "Real growth rates explained" },
    { title: "Hair Growth Cycle Explained", href: "/hair-growth/growth-cycle", description: "The science of hair development" }
  ];

  return (
    <>
      <SEOHead title="Myths About Hair Growth: Fact vs Fiction | HairCare.ai" description="Debunking common myths about hair growth, loss, and care with evidence-based explanations." canonicalUrl="https://haircare.ai/hair-growth/myths" articleSchema={{ headline: "Myths About Hair Growth", description: "Debunking common hair growth myths." }} />
      <ContentPageLayout>
        <div className="max-w-4xl mx-auto">
          <Breadcrumb items={[{ label: "Hair Growth", href: "/hair-growth" }, { label: "Myths" }]} />
          <article className="prose prose-lg max-w-none">
            <header className="mb-8">
              <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">Myths About Hair Growth</h1>
              <p className="text-lg text-muted-foreground">Hair growth myths are widespread. Understanding the facts helps you make better decisions about your hair care.</p>
            </header>
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-8">
              <h2 className="text-lg font-semibold text-foreground mt-0 mb-2">Quick Answer</h2>
              <p className="text-muted-foreground mb-0">Many popular beliefs about hair growth are unfounded. Cutting hair does not make it grow faster, shaving does not change hair thickness, brushing 100 strokes is not beneficial, and most "miracle" products do not work. Hair growth is primarily determined by genetics and overall health.</p>
            </div>
            <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">Common Myths Debunked</h2>
            <ul className="list-disc pl-6 text-muted-foreground space-y-4 mb-4">
              <li><strong>"Cutting hair makes it grow faster":</strong> False. Hair grows from the follicle; cutting the ends has no effect on growth rate.</li>
              <li><strong>"Shaving makes hair thicker":</strong> False. Shaved hair has a blunt tip that may feel coarser, but the hair itself is unchanged.</li>
              <li><strong>"Brushing 100 strokes makes hair healthier":</strong> False. Excessive brushing can cause breakage and damage.</li>
              <li><strong>"Cold water makes hair shinier":</strong> Partially true. Cold water may temporarily flatten the cuticle, adding shine, but the effect is minimal.</li>
              <li><strong>"Stress causes grey hair":</strong> Research suggests stress may accelerate greying, but genetics are the primary factor.</li>
              <li><strong>"Hair grows after death":</strong> False. Skin retracts after death, making hair appear longer.</li>
              <li><strong>"Products can repair split ends":</strong> False. Split ends can only be removed by cutting. Products may temporarily seal them.</li>
            </ul>
            <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">What Actually Matters</h2>
            <p className="text-muted-foreground mb-4">Focus on proven factors: balanced nutrition, gentle handling, avoiding heat damage, managing stress, and addressing health conditions that affect hair.</p>
            <div className="bg-accent/30 border border-accent rounded-lg p-6 my-8">
              <p className="text-foreground mb-0"><strong>HairCare AI can help personalise this further based on your hair type, scalp condition, and goals.</strong></p>
            </div>
            <ArticleNavigation previous={{ title: "Signs Your Hair Is Growing Back", href: "/hair-growth/signs-of-regrowth" }} />
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

export default MythsPage;
