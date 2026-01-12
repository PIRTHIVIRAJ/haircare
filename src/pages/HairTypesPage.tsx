import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import ContentPageLayout from "@/components/ContentPageLayout";
import Breadcrumb from "@/components/Breadcrumb";
import ChatCTA from "@/components/ChatCTA";

const hairTypesArticles = [
  {
    title: "How to Identify Your Hair Type",
    href: "/hair-types/identify-your-hair-type",
    description: "Discover your hair type and texture to build the right care routine."
  },
  {
    title: "Best Care for Curly Hair",
    href: "/hair-types/curly-hair-care",
    description: "Maintain healthy, defined curls with the right techniques and products."
  },
  {
    title: "Best Care for Straight Hair",
    href: "/hair-types/straight-hair-care",
    description: "Keep straight hair healthy, shiny, and free from flatness."
  },
  {
    title: "Best Care for Wavy Hair",
    href: "/hair-types/wavy-hair-care",
    description: "Enhance your natural wave pattern and reduce frizz."
  },
  {
    title: "Fine Hair vs Thin Hair",
    href: "/hair-types/fine-vs-thin",
    description: "Understand the key differences and how to care for each."
  },
  {
    title: "Dry Hair vs Damaged Hair",
    href: "/hair-types/dry-vs-damaged",
    description: "Identify whether your hair needs moisture or repair."
  },
  {
    title: "Frizzy Hair: Causes and Solutions",
    href: "/hair-types/frizzy-hair",
    description: "Tame frizz effectively with the right approach."
  },
  {
    title: "Oily Scalp but Dry Ends",
    href: "/hair-types/oily-scalp-dry-ends",
    description: "Manage combination hair with targeted care."
  },
  {
    title: "Aging Hair: What Changes Over Time",
    href: "/hair-types/aging-hair",
    description: "Adapt your hair care as your hair changes with age."
  },
  {
    title: "Ethnic Hair Care Differences",
    href: "/hair-types/ethnic-hair-care",
    description: "Understand how hair structure varies and care for different textures."
  }
];

const HairTypesPage = () => {
  return (
    <>
      <SEOHead 
        title="Hair Types & Concerns: Complete Guide | HairCare.ai"
        description="Understand your hair type and address specific concerns. Expert guides on curly, straight, wavy, fine, and aging hair care."
        canonicalUrl="https://haircare.ai/hair-types"
      />
      
      <ContentPageLayout>
        <div className="max-w-4xl mx-auto">
          <Breadcrumb items={[{ label: "Hair Types" }]} />
          
          <header className="mb-10">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
              Hair Types & Concerns
            </h1>
            <p className="text-lg text-muted-foreground">
              Understanding your hair type is the first step to building an effective care routine. Explore our guides to find the best approach for your unique hair.
            </p>
          </header>

          {/* Quick Answer */}
          <section className="mb-10 p-6 rounded-xl bg-primary/5 border border-primary/20">
            <h2 className="font-heading text-xl font-semibold text-foreground mb-3">
              Finding Your Hair Type
            </h2>
            <p className="text-foreground leading-relaxed">
              Hair type is determined by texture (straight, wavy, curly, coily), diameter (fine, medium, coarse), and density (thin, medium, thick). Understanding these characteristics helps you choose products and techniques that work with your hair rather than against it.
            </p>
          </section>

          {/* Articles Grid */}
          <section className="mb-10">
            <h2 className="font-heading text-2xl font-semibold text-foreground mb-6">
              Hair Type Guides
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {hairTypesArticles.map((article) => (
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
                <p className="text-sm text-muted-foreground">Build the perfect routine for your hair type.</p>
              </Link>
              <Link to="/scalp-health/healthy-scalp" className="p-4 rounded-lg bg-background border border-border hover:border-primary/50 transition-colors">
                <h3 className="font-medium text-foreground mb-1">Scalp Health</h3>
                <p className="text-sm text-muted-foreground">Healthy hair starts with a healthy scalp.</p>
              </Link>
              <Link to="/hair-loss" className="p-4 rounded-lg bg-background border border-border hover:border-primary/50 transition-colors">
                <h3 className="font-medium text-foreground mb-1">Hair Loss</h3>
                <p className="text-sm text-muted-foreground">Understanding causes and treatments.</p>
              </Link>
            </div>
          </section>

          <ChatCTA 
            title="Not sure about your hair type?"
            description="Ask HairCare.ai to help identify your hair type and get personalised care recommendations."
          />
        </div>
      </ContentPageLayout>
    </>
  );
};

export default HairTypesPage;
