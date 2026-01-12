import { Link } from "react-router-dom";
import ContentPageLayout from "@/components/ContentPageLayout";
import SEOHead from "@/components/SEOHead";
import Breadcrumb from "@/components/Breadcrumb";
import ChatCTA from "@/components/ChatCTA";

const hairGrowthArticles = [
  {
    title: "How Fast Does Hair Grow?",
    href: "/hair-growth/how-fast-does-hair-grow",
    description: "Understand the average rate of hair growth and what factors influence it.",
  },
  {
    title: "Can You Really Regrow Lost Hair?",
    href: "/hair-growth/can-hair-regrow",
    description: "An honest look at what is and is not possible when it comes to hair regrowth.",
  },
  {
    title: "Hair Growth Cycle Explained",
    href: "/hair-growth/growth-cycle",
    description: "Understand the phases of hair growth and why they matter.",
  },
  {
    title: "Best Ways to Stimulate Hair Growth Naturally",
    href: "/hair-growth/natural-methods",
    description: "Evidence-based natural approaches to supporting hair growth.",
  },
  {
    title: "Minoxidil: How It Works and Who Should Use It",
    href: "/hair-growth/minoxidil",
    description: "A comprehensive guide to the most studied hair growth treatment.",
  },
  {
    title: "Does Rosemary Oil Help Hair Growth?",
    href: "/hair-growth/rosemary-oil",
    description: "What research says about rosemary oil for hair growth.",
  },
  {
    title: "Supplements for Hair Growth",
    href: "/hair-growth/supplements",
    description: "Which supplements may help and which are overhyped.",
  },
  {
    title: "Hair Regrowth Timelines",
    href: "/hair-growth/regrowth-timeline",
    description: "Realistic expectations for how long regrowth takes.",
  },
  {
    title: "Signs Your Hair Is Growing Back",
    href: "/hair-growth/signs-of-regrowth",
    description: "How to identify early signs of hair regrowth.",
  },
  {
    title: "Myths About Hair Growth",
    href: "/hair-growth/myths",
    description: "Common misconceptions about hair growth debunked.",
  },
];

const HairGrowthPage = () => {
  return (
    <>
      <SEOHead
        title="Hair Growth & Regrowth Guide | HairCare.ai"
        description="Evidence-based information on hair growth, regrowth treatments, and natural methods to support healthy hair. Learn what works and what doesn't."
        canonicalUrl="https://haircare.ai/hair-growth"
      />
      <ContentPageLayout>
        <div className="max-w-4xl mx-auto">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Hair Growth & Regrowth" },
            ]}
          />

          <div className="mt-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Hair Growth & Regrowth Guide
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Understanding how hair grows—and what can genuinely help when growth slows or stops—is essential for making informed decisions about your hair health. These guides separate fact from fiction in the often confusing world of hair growth claims.
            </p>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                The Science of Hair Growth
              </h2>
              <p className="text-muted-foreground mb-6">
                Hair growth is a complex biological process influenced by genetics, hormones, nutrition, and overall health. While some factors are beyond our control, understanding the science helps identify which interventions may actually work. These articles provide honest, evidence-based information about hair growth and regrowth possibilities.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-6">
                Hair Growth Articles
              </h2>
              <div className="grid gap-4">
                {hairGrowthArticles.map((article) => (
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
                  to="/hair-loss"
                  className="p-4 rounded-lg border border-border bg-card hover:bg-accent/50 transition-colors"
                >
                  <h3 className="font-semibold text-foreground">Hair Loss</h3>
                  <p className="text-sm text-muted-foreground">
                    Understanding the causes and types of hair loss
                  </p>
                </Link>
                <Link
                  to="/scalp-health"
                  className="p-4 rounded-lg border border-border bg-card hover:bg-accent/50 transition-colors"
                >
                  <h3 className="font-semibold text-foreground">Scalp Health</h3>
                  <p className="text-sm text-muted-foreground">
                    A healthy scalp supports healthy hair growth
                  </p>
                </Link>
                <Link
                  to="/hair-products"
                  className="p-4 rounded-lg border border-border bg-card hover:bg-accent/50 transition-colors"
                >
                  <h3 className="font-semibold text-foreground">Hair Products</h3>
                  <p className="text-sm text-muted-foreground">
                    Products and ingredients that support growth
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

export default HairGrowthPage;
