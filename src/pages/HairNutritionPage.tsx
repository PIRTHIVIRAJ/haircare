import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import ContentPageLayout from "@/components/ContentPageLayout";
import Breadcrumb from "@/components/Breadcrumb";
import ChatCTA from "@/components/ChatCTA";

const articles = [
  { title: "Foods That Promote Healthy Hair", href: "/hair-nutrition/best-foods", description: "Best dietary choices for supporting hair health" },
  { title: "Nutrient Deficiencies Linked to Hair Loss", href: "/hair-nutrition/deficiencies", description: "Which nutritional gaps affect hair" },
  { title: "Protein Intake and Hair Health", href: "/hair-nutrition/protein", description: "Why protein matters for hair structure" },
  { title: "Iron, Zinc, and Biotin Explained", href: "/hair-nutrition/key-nutrients", description: "Key minerals and vitamins for hair" },
  { title: "Crash Dieting and Hair Loss", href: "/hair-nutrition/crash-dieting", description: "How severe dieting affects hair" },
  { title: "Sleep and Hair Growth", href: "/hair-nutrition/sleep", description: "The connection between rest and hair health" },
  { title: "Exercise and Scalp Circulation", href: "/hair-nutrition/exercise", description: "Physical activity and hair benefits" },
  { title: "Smoking and Hair Health", href: "/hair-nutrition/smoking", description: "How cigarettes affect hair" },
  { title: "Alcohol and Hair Thinning", href: "/hair-nutrition/alcohol", description: "Drinking and its effects on hair" },
  { title: "Gut Health and Hair Connection", href: "/hair-nutrition/gut-health", description: "The microbiome and hair health" }
];

const HairNutritionPage = () => {
  return (
    <>
      <SEOHead title="Hair Nutrition & Lifestyle | Diet for Healthy Hair - HairCare.ai" description="Comprehensive guide to nutrition and lifestyle factors affecting hair health. Learn how diet, sleep, exercise, and habits impact your hair." canonicalUrl="https://haircare.ai/hair-nutrition" />
      <ContentPageLayout>
        <div className="max-w-4xl mx-auto">
          <Breadcrumb items={[{ label: "Hair Nutrition" }]} />
          <header className="mb-10">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">Hair Nutrition & Lifestyle</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">What you eat, how you sleep, and your daily habits all contribute to hair health. This section explores the evidence behind nutrition and lifestyle factors that affect your hair.</p>
          </header>
          <section className="mb-10">
            <h2 className="font-heading text-2xl font-semibold text-foreground mb-6">Browse All Articles</h2>
            <div className="grid gap-4">
              {articles.map((article) => (
                <Link key={article.href} to={article.href} className="block p-5 rounded-lg border border-border bg-card hover:border-primary/50 hover:shadow-md transition-all group">
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-2">{article.title}</h3>
                  <p className="text-sm text-muted-foreground">{article.description}</p>
                </Link>
              ))}
            </div>
          </section>
          <ChatCTA title="Questions about nutrition and hair?" description="Get personalised guidance based on your diet and lifestyle." />
        </div>
      </ContentPageLayout>
    </>
  );
};

export default HairNutritionPage;