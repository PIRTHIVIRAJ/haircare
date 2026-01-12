import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import ContentPageLayout from "@/components/ContentPageLayout";
import Breadcrumb from "@/components/Breadcrumb";
import ChatCTA from "@/components/ChatCTA";

const hairRoutinesArticles = [
  {
    title: "The Perfect Hair Care Routine for Your Hair Type",
    href: "/hair-routines/by-hair-type",
    description: "Build a personalised routine that works with your specific hair needs."
  },
  {
    title: "How Often Should You Wash Your Hair?",
    href: "/hair-routines/how-often-wash",
    description: "Find the optimal wash frequency for your hair type and lifestyle."
  },
  {
    title: "Morning vs Night Hair Routines",
    href: "/hair-routines/morning-vs-night",
    description: "Discover when to perform different hair care steps for best results."
  },
  {
    title: "Brushing Hair Properly",
    href: "/hair-routines/brushing-hair",
    description: "Learn the right techniques to avoid damage while detangling."
  },
  {
    title: "Blow-Drying vs Air-Drying",
    href: "/hair-routines/blow-dry-vs-air-dry",
    description: "Understand the pros and cons of each drying method."
  },
  {
    title: "How to Prevent Hair Breakage",
    href: "/hair-routines/prevent-breakage",
    description: "Protect your hair from damage with the right habits."
  },
  {
    title: "Sleeping Habits That Protect Hair",
    href: "/hair-routines/sleep-habits",
    description: "Overnight tips to wake up with healthier hair."
  },
  {
    title: "Hair Care Mistakes Most People Make",
    href: "/hair-routines/common-mistakes",
    description: "Avoid these common errors that damage your hair."
  },
  {
    title: "Seasonal Hair Care Tips",
    href: "/hair-routines/seasonal-care",
    description: "Adjust your routine for summer, winter, and seasonal changes."
  },
  {
    title: "Travel-Friendly Hair Routines",
    href: "/hair-routines/travel-care",
    description: "Maintain healthy hair while travelling."
  }
];

const HairRoutinesPage = () => {
  return (
    <>
      <SEOHead 
        title="Hair Care Routines & Habits: Complete Guide | HairCare.ai"
        description="Build effective hair care routines with expert guides on washing, drying, brushing, and protecting your hair from damage."
        canonicalUrl="https://haircare.ai/hair-routines"
      />
      
      <ContentPageLayout>
        <div className="max-w-4xl mx-auto">
          <Breadcrumb items={[{ label: "Hair Routines" }]} />
          
          <header className="mb-10">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
              Hair Care Routines & Habits
            </h1>
            <p className="text-lg text-muted-foreground">
              Healthy hair is built through consistent, effective routines. Learn the best practices for washing, drying, styling, and protecting your hair.
            </p>
          </header>

          {/* Quick Answer */}
          <section className="mb-10 p-6 rounded-xl bg-primary/5 border border-primary/20">
            <h2 className="font-heading text-xl font-semibold text-foreground mb-3">
              Building Your Routine
            </h2>
            <p className="text-foreground leading-relaxed">
              A good hair care routine balances cleansing, conditioning, and protection. The specifics depend on your hair type, lifestyle, and goals. Start with the basics—proper washing and conditioning—then add treatments and styling techniques as needed.
            </p>
          </section>

          {/* Articles Grid */}
          <section className="mb-10">
            <h2 className="font-heading text-2xl font-semibold text-foreground mb-6">
              Routine Guides
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {hairRoutinesArticles.map((article) => (
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
              <Link to="/hair-types" className="p-4 rounded-lg bg-background border border-border hover:border-primary/50 transition-colors">
                <h3 className="font-medium text-foreground mb-1">Hair Types</h3>
                <p className="text-sm text-muted-foreground">Understand your hair type for better routines.</p>
              </Link>
              <Link to="/scalp-health/healthy-scalp" className="p-4 rounded-lg bg-background border border-border hover:border-primary/50 transition-colors">
                <h3 className="font-medium text-foreground mb-1">Scalp Health</h3>
                <p className="text-sm text-muted-foreground">A healthy scalp is the foundation.</p>
              </Link>
              <Link to="/hair-loss" className="p-4 rounded-lg bg-background border border-border hover:border-primary/50 transition-colors">
                <h3 className="font-medium text-foreground mb-1">Hair Loss</h3>
                <p className="text-sm text-muted-foreground">Prevent and address hair thinning.</p>
              </Link>
            </div>
          </section>

          <ChatCTA 
            title="Need help building your routine?"
            description="Ask HairCare.ai for a personalised hair care routine based on your hair type and goals."
          />
        </div>
      </ContentPageLayout>
    </>
  );
};

export default HairRoutinesPage;
