import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import ContentPageLayout from "@/components/ContentPageLayout";
import Breadcrumb from "@/components/Breadcrumb";
import ChatCTA from "@/components/ChatCTA";

const scalpHealthArticles = [
  {
    title: "What is a Healthy Scalp?",
    href: "/scalp-health/healthy-scalp",
    description: "Signs and characteristics of optimal scalp health."
  },
  {
    title: "Dandruff vs Dry Scalp",
    href: "/scalp-health/dandruff-vs-dry-scalp",
    description: "How to tell the difference and treat each condition."
  },
  {
    title: "Seborrheic Dermatitis on the Scalp",
    href: "/scalp-health/seborrheic-dermatitis",
    description: "Causes, symptoms, and treatment for this common condition."
  },
  {
    title: "Scalp Psoriasis Explained",
    href: "/scalp-health/psoriasis",
    description: "Understanding and managing scalp psoriasis."
  },
  {
    title: "Scalp Acne: Causes and Treatment",
    href: "/scalp-health/acne",
    description: "Why scalp acne happens and how to treat it."
  },
  {
    title: "Itchy Scalp Without Dandruff",
    href: "/scalp-health/itchy-scalp-no-dandruff",
    description: "Other causes of scalp itching beyond dandruff."
  },
  {
    title: "Fungal Scalp Infections",
    href: "/scalp-health/fungal-infections",
    description: "Types, symptoms, and treatments for fungal infections."
  },
  {
    title: "Scalp Inflammation and Hair Loss",
    href: "/scalp-health/inflammation-hair-loss",
    description: "The connection between inflammation and shedding."
  },
  {
    title: "How to Exfoliate Your Scalp Safely",
    href: "/scalp-health/exfoliation",
    description: "Safe and effective scalp exfoliation techniques."
  },
  {
    title: "Best Ingredients for Scalp Health",
    href: "/scalp-health/best-ingredients",
    description: "Science-backed ingredients for your scalp."
  }
];

const ScalpHealthPage = () => {
  return (
    <>
      <SEOHead 
        title="Scalp Health & Conditions: Complete Guide | HairCare.ai"
        description="Understand and maintain a healthy scalp. Expert guides on dandruff, psoriasis, itchy scalp, and scalp care for optimal hair growth."
        canonicalUrl="https://haircare.ai/scalp-health"
      />
      
      <ContentPageLayout>
        <div className="max-w-4xl mx-auto">
          <Breadcrumb items={[{ label: "Scalp Health" }]} />
          
          <header className="mb-10">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
              Scalp Health & Conditions
            </h1>
            <p className="text-lg text-muted-foreground">
              A healthy scalp is the foundation for healthy hair. Learn how to identify, treat, and prevent common scalp conditions.
            </p>
          </header>

          {/* Quick Answer */}
          <section className="mb-10 p-6 rounded-xl bg-primary/5 border border-primary/20">
            <h2 className="font-heading text-xl font-semibold text-foreground mb-3">
              Why Scalp Health Matters
            </h2>
            <p className="text-foreground leading-relaxed">
              Your scalp contains approximately 100,000 hair follicles. When your scalp is inflamed, congested, or unhealthy, it can disrupt the hair growth cycle and contribute to hair loss. Maintaining scalp health through proper cleansing, treatment of conditions, and protection supports optimal hair growth.
            </p>
          </section>

          {/* Articles Grid */}
          <section className="mb-10">
            <h2 className="font-heading text-2xl font-semibold text-foreground mb-6">
              Scalp Health Guides
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {scalpHealthArticles.map((article) => (
                <Link
                  key={article.href}
                  to={article.href}
                  className="p-5 rounded-lg border border-border bg-card hover:border-primary/50 hover:bg-primary/5 transition-colors group"
                >
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                    {article.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {article.description}
                  </p>
                </Link>
              ))}
            </div>
          </section>

          {/* Related Sections */}
          <section className="mb-10 p-6 rounded-xl bg-card border border-border">
            <h2 className="font-heading text-xl font-semibold text-foreground mb-4">
              Related Topics
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Link to="/hair-routines" className="p-4 rounded-lg bg-background border border-border hover:border-primary/50 transition-colors">
                <h3 className="font-medium text-foreground mb-1">Hair Care Routines</h3>
                <p className="text-sm text-muted-foreground">Build routines that support scalp health.</p>
              </Link>
              <Link to="/hair-types" className="p-4 rounded-lg bg-background border border-border hover:border-primary/50 transition-colors">
                <h3 className="font-medium text-foreground mb-1">Hair Types</h3>
                <p className="text-sm text-muted-foreground">Match care to your hair type.</p>
              </Link>
              <Link to="/hair-loss" className="p-4 rounded-lg bg-background border border-border hover:border-primary/50 transition-colors">
                <h3 className="font-medium text-foreground mb-1">Hair Loss</h3>
                <p className="text-sm text-muted-foreground">How scalp health affects hair loss.</p>
              </Link>
            </div>
          </section>

          <ChatCTA 
            title="Have scalp concerns?"
            description="Ask HairCare.ai about your scalp symptoms and get personalised care recommendations."
          />
        </div>
      </ContentPageLayout>
    </>
  );
};

export default ScalpHealthPage;
