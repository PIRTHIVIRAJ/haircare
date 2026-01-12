import { Link } from "react-router-dom";
import ContentPageLayout from "@/components/ContentPageLayout";
import SEOHead from "@/components/SEOHead";
import Breadcrumb from "@/components/Breadcrumb";
import ChatCTA from "@/components/ChatCTA";

const hairProductsArticles = [
  {
    title: "Choosing the Right Shampoo for Your Hair",
    href: "/hair-products/choose-shampoo",
    description: "Learn how to select the perfect shampoo for your hair type and scalp condition.",
  },
  {
    title: "Sulfate-Free Shampoos: Pros and Cons",
    href: "/hair-products/sulfate-free",
    description: "Understand whether sulfate-free formulas are right for your hair.",
  },
  {
    title: "Silicone in Hair Products: Good or Bad?",
    href: "/hair-products/silicones",
    description: "The truth about silicones and how they affect different hair types.",
  },
  {
    title: "Best Ingredients for Hair Repair",
    href: "/hair-products/repair-ingredients",
    description: "Discover the most effective ingredients for restoring damaged hair.",
  },
  {
    title: "Protein vs Moisture: What Does Your Hair Need?",
    href: "/hair-products/protein-vs-moisture",
    description: "Learn to balance protein and moisture for optimal hair health.",
  },
  {
    title: "Hair Oils Compared",
    href: "/hair-products/hair-oils-comparison",
    description: "Compare popular hair oils to find the right one for your needs.",
  },
  {
    title: "Leave-In Conditioners Explained",
    href: "/hair-products/leave-in-conditioners",
    description: "How to choose and use leave-in conditioners effectively.",
  },
  {
    title: "Heat Protectants Explained",
    href: "/hair-products/heat-protectants",
    description: "Understand how heat protectants work and when you need them.",
  },
  {
    title: "Hair Masks: How Often Should You Use Them?",
    href: "/hair-products/hair-masks",
    description: "Find the right hair mask frequency for your hair type.",
  },
  {
    title: "Salon Treatments vs At-Home Care",
    href: "/hair-products/salon-vs-home",
    description: "Which professional treatments are worth it and which you can do yourself.",
  },
];

const HairProductsPage = () => {
  return (
    <>
      <SEOHead
        title="Hair Products & Ingredients Guide | HairCare.ai"
        description="Comprehensive guides on hair products, ingredients, and treatments. Learn about shampoos, conditioners, oils, and how to choose the right products for your hair type."
        canonicalUrl="https://haircare.ai/hair-products"
      />
      <ContentPageLayout>
        <div className="max-w-4xl mx-auto">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Hair Products & Ingredients" },
            ]}
          />

          <div className="mt-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Hair Products & Ingredients Guide
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Navigate the world of hair products with confidence. From understanding ingredient labels to choosing the right treatments, these guides help you make informed decisions about what you put on your hair.
            </p>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Understanding Hair Products
              </h2>
              <p className="text-muted-foreground mb-6">
                The hair product market is vast and often confusing. Marketing claims do not always reflect reality, and what works for one person may not work for another. These articles cut through the noise to explain what different products and ingredients actually do, helping you build a routine that works for your specific hair type and concerns.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-6">
                Product & Ingredient Guides
              </h2>
              <div className="grid gap-4">
                {hairProductsArticles.map((article) => (
                  <Link
                    key={article.href}
                    to={article.href}
                    className="block p-4 rounded-lg border border-border bg-card hover:bg-accent/50 transition-colors"
                  >
                    <h3 className="font-semibold text-foreground mb-1">
                      {article.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {article.description}
                    </p>
                  </Link>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Related Topics
              </h2>
              <div className="grid md:grid-cols-3 gap-4">
                <Link
                  to="/hair-routines"
                  className="p-4 rounded-lg border border-border bg-card hover:bg-accent/50 transition-colors"
                >
                  <h3 className="font-semibold text-foreground">Hair Routines</h3>
                  <p className="text-sm text-muted-foreground">
                    Build effective routines using the right products
                  </p>
                </Link>
                <Link
                  to="/hair-types"
                  className="p-4 rounded-lg border border-border bg-card hover:bg-accent/50 transition-colors"
                >
                  <h3 className="font-semibold text-foreground">Hair Types</h3>
                  <p className="text-sm text-muted-foreground">
                    Find products suited to your specific hair type
                  </p>
                </Link>
                <Link
                  to="/hair-growth"
                  className="p-4 rounded-lg border border-border bg-card hover:bg-accent/50 transition-colors"
                >
                  <h3 className="font-semibold text-foreground">Hair Growth</h3>
                  <p className="text-sm text-muted-foreground">
                    Products and ingredients that support hair growth
                  </p>
                </Link>
              </div>
            </section>

            <ChatCTA />
          </div>
        </div>
      </ContentPageLayout>
    </>
  );
};

export default HairProductsPage;
