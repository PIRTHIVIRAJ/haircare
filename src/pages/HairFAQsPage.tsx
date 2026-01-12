import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import ContentPageLayout from "@/components/ContentPageLayout";
import Breadcrumb from "@/components/Breadcrumb";
import ChatCTA from "@/components/ChatCTA";

const articles = [
  { title: "Does Cutting Hair Make It Grow Faster?", href: "/hair-faqs/cutting-hair-growth", description: "Examining this popular belief" },
  { title: "Can Hats Cause Hair Loss?", href: "/hair-faqs/do-hats-cause-hair-loss", description: "The truth about headwear and baldness" },
  { title: "Does Washing Hair Daily Cause Hair Fall?", href: "/hair-faqs/washing-daily", description: "Understanding shedding during washing" },
  { title: "Can Stress Turn Hair Grey?", href: "/hair-faqs/stress-grey-hair", description: "The science of stress and greying" },
  { title: "Are Natural Hair Products Better?", href: "/hair-faqs/natural-vs-chemical", description: "Natural vs synthetic examined" },
  { title: "Can Hair Loss Be Reversed Permanently?", href: "/hair-faqs/can-hair-loss-be-reversed", description: "What is actually possible" },
  { title: "How Long Before Treatments Show Results?", href: "/hair-faqs/treatment-timeline", description: "Realistic treatment expectations" },
  { title: "Is Hair Loss Normal With Aging?", href: "/hair-faqs/aging-hair-loss", description: "Age-related hair changes" },
  { title: "When Is Hair Shedding Normal?", href: "/hair-faqs/normal-shedding", description: "Normal vs problematic shedding" },
  { title: "Common Hair Care Myths Debunked", href: "/hair-faqs/common-myths", description: "Popular beliefs examined" }
];

const HairFAQsPage = () => {
  return (
    <>
      <SEOHead title="Hair FAQs & Myths | Quick Answers to Common Questions - HairCare.ai" description="Get evidence-based answers to common hair care questions. Debunk myths and learn the science behind popular beliefs about hair." canonicalUrl="https://haircare.ai/hair-faqs" />
      <ContentPageLayout>
        <div className="max-w-4xl mx-auto">
          <Breadcrumb items={[{ label: "Hair FAQs" }]} />
          <header className="mb-10">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">Hair FAQs & Myths</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">Quick, evidence-based answers to the most common questions about hair. We separate fact from fiction so you can make informed decisions about your hair care.</p>
          </header>
          <section className="mb-10">
            <h2 className="font-heading text-2xl font-semibold text-foreground mb-6">Browse All Questions</h2>
            <div className="grid gap-4">
              {articles.map((article) => (
                <Link key={article.href} to={article.href} className="block p-5 rounded-lg border border-border bg-card hover:border-primary/50 hover:shadow-md transition-all group">
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-2">{article.title}</h3>
                  <p className="text-sm text-muted-foreground">{article.description}</p>
                </Link>
              ))}
            </div>
          </section>
          <ChatCTA title="Have a question not listed here?" description="Ask our AI advisor for personalised answers." />
        </div>
      </ContentPageLayout>
    </>
  );
};

export default HairFAQsPage;