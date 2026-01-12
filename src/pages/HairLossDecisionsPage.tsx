import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import ContentPageLayout from "@/components/ContentPageLayout";
import Breadcrumb from "@/components/Breadcrumb";
import { ArrowRight, AlertCircle, Clock, Stethoscope, TrendingUp } from "lucide-react";
import { useChatContext } from "@/contexts/ChatContext";

const articles = [
  {
    title: "Is My Hair Loss Temporary or Permanent?",
    href: "/hair-loss-decisions/temporary-vs-permanent",
    description: "Understanding whether your hair loss can be reversed or requires long-term management.",
    icon: Clock
  },
  {
    title: "Is My Hair Shedding Normal for My Age?",
    href: "/hair-loss-decisions/normal-for-age",
    description: "What to expect at different life stages and when shedding becomes concerning.",
    icon: TrendingUp
  },
  {
    title: "Should I Treat Hair Loss or Wait It Out?",
    href: "/hair-loss-decisions/treat-or-wait",
    description: "Weighing the benefits of early intervention against watchful waiting.",
    icon: Clock
  },
  {
    title: "What to Do First When You Notice Hair Thinning",
    href: "/hair-loss-decisions/first-steps",
    description: "A practical guide to the initial steps after noticing hair changes.",
    icon: ArrowRight
  },
  {
    title: "When Lifestyle Changes Are Enough for Hair Loss",
    href: "/hair-loss-decisions/lifestyle-only",
    description: "Situations where diet, stress management, and habits can address hair concerns.",
    icon: TrendingUp
  },
  {
    title: "Signs Your Hair Loss May Need Medical Treatment",
    href: "/hair-loss-decisions/medical-signs",
    description: "Indicators that professional intervention may be necessary.",
    icon: Stethoscope
  },
  {
    title: "Red Flags in Hair Loss You Should Not Ignore",
    href: "/hair-loss-decisions/red-flags",
    description: "Warning signs that require prompt medical attention.",
    icon: AlertCircle
  },
  {
    title: "Is Early Hair Loss Reversible?",
    href: "/hair-loss-decisions/early-reversibility",
    description: "The potential for reversal when hair loss is caught early.",
    icon: TrendingUp
  },
  {
    title: "How to Choose the Right Hair Loss Treatment Path",
    href: "/hair-loss-decisions/choosing-treatment",
    description: "Navigating treatment options based on your specific situation.",
    icon: ArrowRight
  },
  {
    title: "What Happens If Hair Loss Is Left Untreated",
    href: "/hair-loss-decisions/untreated-hair-loss",
    description: "Understanding the natural progression of different types of hair loss.",
    icon: Clock
  }
];

const HairLossDecisionsPage = () => {
  const chatContext = useChatContext();

  const handleOpenChat = () => {
    if (chatContext) {
      chatContext.openChat();
    }
  };

  return (
    <>
      <SEOHead
        title="Hair Loss Decisions: Should You Treat or Wait? | HairCare.ai"
        description="Make informed decisions about your hair loss. Learn when to treat, when to wait, and how to choose the right approach for your situation."
        canonicalUrl="https://haircare.ai/hair-loss-decisions"
      />

      <ContentPageLayout>
        <div className="max-w-4xl mx-auto">
          <Breadcrumb items={[{ label: "Hair Loss Decisions" }]} />

          <header className="mb-10">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
              Hair Loss Decisions
            </h1>
            <p className="text-lg text-muted-foreground">
              Practical guidance for understanding your hair loss and making informed decisions about treatment. Whether you are wondering if your shedding is normal or considering treatment options, these articles help you navigate the decision-making process.
            </p>
          </header>

          <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-10">
            <h2 className="font-heading text-xl font-semibold text-foreground mb-3">Key Questions Answered</h2>
            <p className="text-foreground">
              This section addresses the practical questions people face when experiencing hair changes: Is this normal? Should I act now? What should I do first? Understanding these answers helps you make confident, informed decisions about your hair health.
            </p>
          </div>

          <div className="grid gap-4">
            {articles.map((article, index) => (
              <Link
                key={index}
                to={article.href}
                className="group flex items-start gap-4 p-5 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-soft transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <article.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
                    {article.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {article.description}
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
              </Link>
            ))}
          </div>

          <div className="mt-10 p-6 bg-primary/5 border border-primary/20 rounded-lg">
            <h2 className="font-heading text-xl font-semibold text-foreground mb-2">
              Need Personalised Guidance?
            </h2>
            <p className="text-muted-foreground mb-4">
              Our AI assistant can help you understand your specific situation and suggest next steps based on your hair type, symptoms, and goals.
            </p>
            <button
              onClick={handleOpenChat}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors"
            >
              Chat with HairCare.ai
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </ContentPageLayout>
    </>
  );
};

export default HairLossDecisionsPage;
