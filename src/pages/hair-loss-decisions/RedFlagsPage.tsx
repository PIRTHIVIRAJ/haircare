import SEOHead from "@/components/SEOHead";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleNavigation from "@/components/ArticleNavigation";
import RelatedArticles from "@/components/RelatedArticles";
import ContentPageLayout from "@/components/ContentPageLayout";

const relatedArticles = [
  { title: "Signs Your Hair Loss Needs Medical Treatment", href: "/hair-loss-decisions/medical-signs", description: "When professional help is warranted." },
  { title: "Scarring Alopecias", href: "/scalp-health/inflammation-hair-loss", description: "Inflammatory conditions that damage follicles." },
  { title: "When to See a Doctor", href: "/hair-loss/when-to-see-a-doctor", description: "Professional evaluation guidance." }
];

const RedFlagsPage = () => {
  return (
    <ContentPageLayout>
      <SEOHead title="Red Flags in Hair Loss You Should Not Ignore | HairCare.ai" description="Learn the warning signs in hair loss that require prompt medical attention. Recognise red flags that indicate serious conditions." canonicalUrl="https://haircare.ai/hair-loss-decisions/red-flags" />
      <article className="max-w-4xl mx-auto">
        <Breadcrumb items={[{ label: "Hair Loss Decisions", href: "/hair-loss-decisions" }, { label: "Red Flags" }]} />
        <header className="mb-8"><h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">Red Flags in Hair Loss You Should Not Ignore</h1><p className="text-lg text-muted-foreground">Warning signs requiring prompt attention.</p></header>
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-10"><h2 className="font-heading text-xl font-semibold text-foreground mb-3">Quick Answer</h2><p className="text-foreground">Seek prompt medical evaluation for: painful or tender scalp areas, rapid hair loss over days, smooth bald patches, scalp pustules or open sores, burning sensations, significant scarring, hair loss with systemic symptoms, or any hair loss in children. These may indicate conditions requiring urgent treatment.</p></div>
        <section className="mb-10"><h2 className="font-heading text-2xl font-semibold text-foreground mb-4">Urgent Red Flags</h2><div className="space-y-4"><div className="p-4 rounded-lg bg-destructive/10 border border-destructive/20"><h3 className="font-semibold text-foreground mb-2">Scalp Pain or Tenderness</h3><p className="text-muted-foreground">Pain, burning, or tenderness in areas of hair loss may indicate scarring alopecia, which destroys follicles permanently if not treated promptly.</p></div><div className="p-4 rounded-lg bg-destructive/10 border border-destructive/20"><h3 className="font-semibold text-foreground mb-2">Rapid Loss Over Days</h3><p className="text-muted-foreground">Losing large amounts of hair very suddenly may indicate severe telogen effluvium, medication reaction, or other conditions needing evaluation.</p></div><div className="p-4 rounded-lg bg-destructive/10 border border-destructive/20"><h3 className="font-semibold text-foreground mb-2">Scalp Pustules or Sores</h3><p className="text-muted-foreground">Open sores, pus-filled bumps, or crusting may indicate infection or inflammatory conditions requiring treatment to prevent permanent damage.</p></div><div className="p-4 rounded-lg bg-destructive/10 border border-destructive/20"><h3 className="font-semibold text-foreground mb-2">Smooth Bald Patches</h3><p className="text-muted-foreground">Completely smooth patches may indicate alopecia areata. While sometimes resolving spontaneously, evaluation helps determine if treatment is needed.</p></div><div className="p-4 rounded-lg bg-destructive/10 border border-destructive/20"><h3 className="font-semibold text-foreground mb-2">Hair Loss with Systemic Symptoms</h3><p className="text-muted-foreground">Hair loss accompanied by significant fatigue, weight changes, fever, or joint pain may indicate underlying systemic conditions.</p></div></div></section>
        <section className="mb-10"><h2 className="font-heading text-2xl font-semibold text-foreground mb-4">What to Do</h2><ul className="list-disc list-inside space-y-2 text-foreground"><li>Document symptoms with photos and notes</li><li>Schedule appointment with a dermatologist promptly</li><li>Do not delay hoping symptoms will resolve</li><li>Avoid home treatments that may worsen inflammation</li><li>Bring list of medications and recent health changes</li></ul></section>
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-10"><p className="text-foreground">HairCare AI can help personalise this further based on your hair type, scalp condition, and goals.</p></div>
        <ArticleNavigation previous={{ href: "/hair-loss-decisions/medical-signs", title: "Signs Hair Loss Needs Medical Treatment" }} next={{ href: "/hair-loss-decisions/early-reversibility", title: "Is Early Hair Loss Reversible?" }} />
        <RelatedArticles articles={relatedArticles} />
      </article>
    </ContentPageLayout>
  );
};

export default RedFlagsPage;
