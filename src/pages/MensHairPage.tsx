import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import ContentPageLayout from "@/components/ContentPageLayout";
import Breadcrumb from "@/components/Breadcrumb";
import ChatCTA from "@/components/ChatCTA";

const articles = [
  {
    title: "Male Pattern Baldness Explained",
    href: "/mens-hair/male-pattern-baldness",
    description: "Understanding the most common cause of hair loss in men"
  },
  {
    title: "When Does Male Hair Loss Usually Start?",
    href: "/mens-hair/when-it-starts",
    description: "Age patterns and early warning signs"
  },
  {
    title: "Receding Hairline vs Crown Thinning",
    href: "/mens-hair/hairline-vs-crown",
    description: "Different patterns and what they mean"
  },
  {
    title: "Best Treatments for Men's Hair Loss",
    href: "/mens-hair/treatments",
    description: "Evidence-based treatment options that work"
  },
  {
    title: "Finasteride: Benefits and Risks",
    href: "/mens-hair/finasteride",
    description: "Complete guide to oral DHT blockers"
  },
  {
    title: "Minoxidil Foam vs Liquid",
    href: "/mens-hair/minoxidil-foam-vs-liquid",
    description: "Comparing formulations for best results"
  },
  {
    title: "Hair Loss Myths for Men",
    href: "/mens-hair/myths",
    description: "Separating fact from fiction"
  },
  {
    title: "Can Stress Cause Hair Loss in Men?",
    href: "/mens-hair/stress",
    description: "The relationship between stress and hair health"
  },
  {
    title: "Hair Transplant Basics Explained",
    href: "/mens-hair/hair-transplant",
    description: "What to expect from surgical hair restoration"
  },
  {
    title: "Maintaining Hair Density Long-Term",
    href: "/mens-hair/maintenance",
    description: "Strategies for preserving your hair over time"
  }
];

const MensHairPage = () => {
  return (
    <>
      <SEOHead 
        title="Men's Hair Health: Causes, Treatments & Expert Guidance | HairCare.ai"
        description="Comprehensive guide to men's hair loss covering male pattern baldness, treatments like finasteride and minoxidil, hair transplants, and maintenance strategies."
        canonicalUrl="https://haircare.ai/mens-hair"
      />
      
      <ContentPageLayout>
        <div className="max-w-4xl mx-auto">
          <Breadcrumb items={[{ label: "Men's Hair Health" }]} />
          
          <header className="mb-10">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
              Men's Hair Health
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Male pattern baldness affects around 50% of men by age 50, but understanding the causes 
              and available treatments can help you make informed decisions about managing your hair 
              health throughout life.
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
              Understanding Men's Hair Loss
            </h2>
            <p className="text-muted-foreground mb-4">
              Androgenetic alopecia, commonly known as male pattern baldness, is the leading cause of 
              hair loss in men. It is primarily driven by genetics and hormones, specifically the 
              sensitivity of hair follicles to dihydrotestosterone (DHT).
            </p>
            <p className="text-muted-foreground">
              Modern treatments including minoxidil, finasteride, and hair transplantation can 
              effectively slow, stop, or even reverse hair loss when started early. The key is 
              understanding your options and taking action before significant loss occurs.
            </p>
          </section>

          <ChatCTA 
            title="Questions about your hair loss?"
            description="Get personalised guidance on treatments, timing, and what to expect based on your situation."
          />
        </div>
      </ContentPageLayout>
    </>
  );
};

export default MensHairPage;
