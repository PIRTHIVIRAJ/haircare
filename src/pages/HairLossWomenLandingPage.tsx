import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import ContentPageLayout from "@/components/ContentPageLayout";
import Breadcrumb from "@/components/Breadcrumb";
import ChatCTA from "@/components/ChatCTA";

const articles = [
  {
    title: "Hair Loss After Pregnancy",
    href: "/womens-hair/postpartum-hair-loss",
    description: "Why hair sheds after childbirth and when it returns to normal"
  },
  {
    title: "Postpartum Hair Shedding Explained",
    href: "/womens-hair/pregnancy-changes",
    description: "Understanding hair changes during and after pregnancy"
  },
  {
    title: "Hair Loss and PCOS",
    href: "/womens-hair/pcos-hair-loss",
    description: "How polycystic ovary syndrome affects hair and what helps"
  },
  {
    title: "Hair Changes During Menopause",
    href: "/womens-hair/menopause",
    description: "Managing hair thinning during hormonal transitions"
  },
  {
    title: "Hormonal Hair Loss Treatments",
    href: "/womens-hair/hormonal-hair-loss",
    description: "Options for treating hormone-related hair thinning"
  },
  {
    title: "Iron Deficiency and Hair Loss",
    href: "/womens-hair/iron-deficiency",
    description: "The connection between iron levels and hair health"
  },
  {
    title: "Thyroid Problems and Hair Thinning",
    href: "/womens-hair/thyroid",
    description: "How thyroid conditions affect hair growth"
  },
  {
    title: "Birth Control and Hair Changes",
    href: "/womens-hair/birth-control",
    description: "Understanding how contraceptives can affect hair"
  },
  {
    title: "Hair Loss After Stopping Contraception",
    href: "/womens-hair/stopping-contraception",
    description: "Why hair may shed after discontinuing birth control"
  },
  {
    title: "When Women Should Seek Medical Help",
    href: "/womens-hair/when-to-seek-help",
    description: "Signs that warrant professional evaluation"
  }
];

const WomensHairPage = () => {
  return (
    <>
      <SEOHead 
        title="Women's Hair Health: Causes, Treatments & Expert Guidance | HairCare.ai"
        description="Comprehensive guide to women's hair health covering hormonal hair loss, postpartum shedding, menopause, PCOS, and treatment options. Evidence-based information."
        canonicalUrl="https://haircare.ai/womens-hair"
      />
      
      <ContentPageLayout>
        <div className="max-w-4xl mx-auto">
          <Breadcrumb items={[{ label: "Women's Hair Health" }]} />
          
          <header className="mb-10">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
              Women's Hair Health
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Hair loss and thinning affect millions of women, often tied to hormonal changes, life stages, 
              or underlying health conditions. This section provides evidence-based information on causes, 
              treatments, and when to seek professional help.
            </p>
          </header>

          <section className="mb-10">
            <h2 className="font-heading text-2xl font-semibold text-foreground mb-6">
              Browse All Articles
            </h2>
            <div className="grid gap-4">
              {articles.map((article) => (
                <Link
                  key={article.href}
                  to={article.href}
                  className="block p-5 rounded-lg border border-border bg-card hover:border-primary/50 hover:shadow-md transition-all group"
                >
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                    {article.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{article.description}</p>
                </Link>
              ))}
            </div>
          </section>

          <section className="mb-10 p-6 bg-primary/5 rounded-lg border border-primary/20">
            <h2 className="font-heading text-xl font-semibold text-foreground mb-3">
              Understanding Women's Hair Loss
            </h2>
            <p className="text-muted-foreground mb-4">
              Female hair loss differs from male pattern baldness in both pattern and causes. Women typically 
              experience diffuse thinning rather than a receding hairline, and hormonal factors play a 
              significant role throughout different life stages—from pregnancy to menopause.
            </p>
            <p className="text-muted-foreground">
              The good news is that many causes of female hair loss are treatable, especially when identified 
              early. Understanding your specific situation is the first step toward finding effective solutions.
            </p>
          </section>

          <ChatCTA 
            title="Have questions about your hair?"
            description="Get personalised guidance based on your symptoms, medical history, and hair goals."
          />
        </div>
      </ContentPageLayout>
    </>
  );
};

export default WomensHairPage;
