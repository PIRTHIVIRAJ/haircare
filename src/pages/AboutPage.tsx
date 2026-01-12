import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import ContentPageLayout from "@/components/ContentPageLayout";
import Breadcrumb from "@/components/Breadcrumb";
import { useChatContext } from "@/contexts/ChatContext";

const AboutPage = () => {
  const chatContext = useChatContext();

  const handleOpenChat = () => {
    if (chatContext) {
      chatContext.openChat();
    }
  };

  return (
    <>
      <SEOHead
        title="About HairCare.ai | AI-Powered Hair and Scalp Health Platform"
        description="Learn about HairCare.ai, an AI-powered platform providing evidence-based hair and scalp health guidance. Understand our mission, standards, and how we can help."
        canonicalUrl="https://haircare.ai/about"
      />

      <ContentPageLayout>
        <article className="max-w-3xl mx-auto">
          <Breadcrumb items={[{ label: "About" }]} />

          <header className="mb-10">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
              About HairCare.ai
            </h1>
            <p className="text-lg text-muted-foreground">
              Clearer answers for your hair and scalp concerns.
            </p>
          </header>

          <div className="prose prose-lg max-w-none space-y-10">
            <section>
              <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
                What is HairCare.ai?
              </h2>
              <p className="text-foreground leading-relaxed mb-4">
                Hair concerns affect millions of people, yet finding clear, trustworthy information remains surprisingly difficult. Search results lead to conflicting advice. Product marketing clouds the picture. Well-meaning forums offer anecdotes rather than evidence. And many people feel unsure where to even begin.
              </p>
              <p className="text-foreground leading-relaxed">
                HairCare.ai exists to change that. We are an AI-powered knowledge platform focused entirely on hair and scalp health. Our goal is simple: to provide clear, evidence-based information that helps you understand your situation and make informed decisions. No sales agenda, no sponsored recommendations, no overwhelming jargon. Just straightforward guidance tailored to your needs.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
                Why HairCare.ai Exists
              </h2>
              <p className="text-foreground leading-relaxed mb-4">
                The internet is full of hair advice, but surprisingly little of it is reliable. Commercial interests drive much of the content. Influencers promote products they are paid to endorse. Forums repeat myths as facts. And genuinely useful medical information often remains locked behind clinical language that most people find inaccessible.
              </p>
              <p className="text-foreground leading-relaxed">
                We built HairCare.ai because we believe people deserve better. When you are worried about hair loss, trying to understand a scalp condition, or simply want to take better care of your hair, you should have access to information that is accurate, balanced, and genuinely helpful. That is what we aim to provide.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
                How HairCare.ai Works
              </h2>
              <p className="text-foreground leading-relaxed mb-4">
                HairCare.ai combines two approaches. First, we maintain a comprehensive knowledge base of articles covering hair loss, scalp conditions, hair care routines, nutrition, and related topics. Each article is written to medical content standards, using evidence-based information presented in plain language.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                Second, our AI assistant can help you navigate this information in a personalised way. Rather than searching through articles hoping to find relevant answers, you can describe your situation and receive guidance tailored to your specific hair type, concerns, and goals. The AI draws on the same evidence-based knowledge but applies it to your individual context.
              </p>
              <p className="text-foreground leading-relaxed">
                We do not push products. We do not accept payment for recommendations. Our only goal is to give you useful information.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
                What HairCare.ai Can Help With
              </h2>
              <ul className="list-disc list-inside space-y-2 text-foreground">
                <li>Understanding different types of hair loss and their causes</li>
                <li>Learning about scalp conditions like dandruff, seborrheic dermatitis, and psoriasis</li>
                <li>Setting realistic expectations for hair growth and treatment timelines</li>
                <li>Building hair care routines suited to your hair type</li>
                <li>Understanding how nutrition, stress, and lifestyle affect your hair</li>
                <li>Knowing when to seek professional medical help</li>
                <li>Separating evidence-based treatments from unproven claims</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
                What HairCare.ai Is Not
              </h2>
              <p className="text-foreground leading-relaxed mb-4">
                It is important to be clear about our limitations:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground mb-4">
                <li><strong>We are not a medical diagnosis tool.</strong> We can provide information about conditions, but we cannot diagnose what you have. Only a qualified healthcare professional can do that.</li>
                <li><strong>We do not replace doctors.</strong> Our information is educational. For medical concerns, particularly sudden or significant changes, professional evaluation is essential.</li>
                <li><strong>We are not a product marketplace.</strong> We do not sell hair products and have no financial interest in what you choose to buy.</li>
                <li><strong>We do not offer influencer-driven advice.</strong> Our content is based on medical evidence, not trends or sponsorships.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
                Our Standards
              </h2>
              <p className="text-foreground leading-relaxed mb-4">
                We hold ourselves to high standards for the information we provide:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground">
                <li>Evidence-based content aligned with recognised dermatology and medical health standards</li>
                <li>Conservative claims that avoid overpromising or sensationalising</li>
                <li>Clear language that explains concepts without unnecessary jargon</li>
                <li>Balanced perspectives that acknowledge uncertainty where it exists</li>
                <li>Safety-first framing that encourages professional consultation when appropriate</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
                Who HairCare.ai Is For
              </h2>
              <p className="text-foreground leading-relaxed mb-4">
                HairCare.ai is for anyone with questions about their hair or scalp. Whether you are noticing the first signs of thinning, managing a longstanding scalp condition, or simply wanting to take better care of your hair, our information is designed to help.
              </p>
              <p className="text-foreground leading-relaxed">
                We serve people of all genders and hair types, across all stages of hair concern. Our content addresses issues common to different populations while recognising that everyone's situation is individual.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
                Start Exploring
              </h2>
              <p className="text-foreground leading-relaxed mb-6">
                We invite you to explore our knowledge base or speak with our AI assistant. Whether you have a specific question or simply want to learn more about hair health, we are here to help you find clear, trustworthy answers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/sitemap"
                  className="inline-flex items-center justify-center gap-2 bg-card border border-border text-foreground px-6 py-3 rounded-full font-medium hover:bg-muted transition-colors"
                >
                  Browse Knowledge Base
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <button
                  onClick={handleOpenChat}
                  className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors"
                >
                  Chat with HairCare.ai
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </section>
          </div>
        </article>
      </ContentPageLayout>
    </>
  );
};

export default AboutPage;
