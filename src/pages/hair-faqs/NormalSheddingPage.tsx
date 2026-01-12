import SEOHead from "@/components/SEOHead";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleNavigation from "@/components/ArticleNavigation";
import RelatedArticles from "@/components/RelatedArticles";
import ContentPageLayout from "@/components/ContentPageLayout";

const relatedArticles = [
  { title: "Hair Thinning vs Hair Shedding", href: "/hair-loss/thinning-vs-shedding", description: "Understanding the key differences." },
  { title: "Telogen Effluvium Explained", href: "/hair-loss/telogen-effluvium", description: "When shedding becomes excessive." },
  { title: "When to See a Doctor", href: "/hair-loss/when-to-see-a-doctor", description: "Signs that warrant professional evaluation." }
];

const NormalSheddingPage = () => {
  return (
    <ContentPageLayout>
      <SEOHead
        title="When Is Hair Shedding Normal? | Understanding Hair Loss - HairCare.ai"
        description="Learn how much hair shedding is normal versus concerning. Understand the difference between normal daily shedding and problematic hair loss."
        canonicalUrl="https://haircare.ai/hair-faqs/normal-shedding"
      />
      <article className="max-w-4xl mx-auto">
        <Breadcrumb items={[{ label: "Hair FAQs", href: "/hair-faqs" }, { label: "Normal Shedding" }]} />
        <header className="mb-8">
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">When Is Hair Shedding Normal?</h1>
          <p className="text-lg text-muted-foreground">Everyone loses hair daily—knowing what is normal helps identify problems.</p>
        </header>
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-10">
          <h2 className="font-heading text-xl font-semibold text-foreground mb-3">Quick Answer</h2>
          <p className="text-foreground">Losing 50 to 100 hairs per day is normal. This is part of the natural hair growth cycle where old hairs are shed to make way for new growth. Shedding becomes concerning when it exceeds 100 hairs daily for extended periods, or when thinning becomes visible.</p>
        </div>
        <section className="mb-10">
          <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">What Affects Daily Shedding</h2>
          <ul className="list-disc list-inside space-y-2 text-foreground">
            <li>Washing frequency—more hairs appear on wash days as accumulated loose hairs are released</li>
            <li>Hair length—longer hair is more noticeable when shed</li>
            <li>Seasons—some people shed more in autumn</li>
            <li>Hormonal changes—pregnancy, postpartum, menopause affect shedding</li>
            <li>Recent stress or illness—may trigger temporary increased shedding</li>
          </ul>
        </section>
        <section className="mb-10">
          <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">Signs Shedding May Be Problematic</h2>
          <ul className="list-disc list-inside space-y-2 text-foreground">
            <li>Noticeably more hair than usual in brush, shower, or pillow</li>
            <li>Visible thinning or widening part</li>
            <li>Shedding continues for more than 3 months at high levels</li>
            <li>Hair loss accompanied by scalp symptoms</li>
            <li>Patchy hair loss or bald spots</li>
          </ul>
        </section>
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-10">
          <p className="text-foreground">HairCare AI can help personalise this further based on your hair type, scalp condition, and goals.</p>
        </div>
        <ArticleNavigation previous={{ href: "/hair-faqs/aging-hair-loss", title: "Aging and Hair Loss" }} next={{ href: "/hair-faqs/common-myths", title: "Common Hair Care Myths" }} />
        <RelatedArticles articles={relatedArticles} />
      </article>
    </ContentPageLayout>
  );
};

export default NormalSheddingPage;