import SEOHead from "@/components/SEOHead";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleNavigation from "@/components/ArticleNavigation";
import RelatedArticles from "@/components/RelatedArticles";
import ContentPageLayout from "@/components/ContentPageLayout";

const faqItems = [
  {
    question: "Are hair transplants permanent?",
    answer: "Transplanted hair is permanent because it comes from DHT-resistant follicles at the back and sides of the head. However, native hair not yet affected may continue to thin, which is why ongoing medical treatment is often recommended."
  },
  {
    question: "How much does a hair transplant cost?",
    answer: "Hair transplant costs vary widely based on location, surgeon experience, and the number of grafts needed. Procedures typically range from several thousand to over fifteen thousand dollars. Multiple sessions may be required for extensive restoration."
  },
  {
    question: "How long does it take to see results from a hair transplant?",
    answer: "Transplanted hair typically falls out within two to four weeks, then begins regrowing around three to four months. Significant visible results appear by six to nine months, with final results at twelve to eighteen months."
  }
];

const relatedArticles = [
  {
    title: "Best Treatments for Men's Hair Loss",
    href: "/mens-hair/treatments",
    description: "Overview of all evidence-based treatment options for male pattern baldness."
  },
  {
    title: "Finasteride: Benefits and Risks",
    href: "/mens-hair/finasteride",
    description: "Understanding medications often used alongside hair transplantation."
  },
  {
    title: "Maintaining Hair Density Long-Term",
    href: "/mens-hair/maintenance",
    description: "Strategies for preserving transplant results over time."
  }
];

const HairTransplantPage = () => {
  return (
    <ContentPageLayout>
      <SEOHead
        title="Hair Transplant Basics Explained | HairCare.ai"
        description="Everything you need to know about hair transplant surgery, including FUE vs FUT techniques, recovery, costs, and what results to expect."
        canonicalUrl="https://haircare.ai/mens-hair/hair-transplant"
      />

      <article className="max-w-4xl mx-auto">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Men's Hair Health", href: "/mens-hair" },
            { label: "Hair Transplant Basics" }
          ]}
        />

        <header className="mb-8">
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Hair Transplant Basics Explained
          </h1>
          <p className="text-lg text-muted-foreground">
            Understanding surgical hair restoration options
          </p>
        </header>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <p className="text-muted-foreground leading-relaxed">
              Hair transplantation has evolved significantly since its introduction, becoming a sophisticated procedure capable of producing natural-looking results. For men with sufficient donor hair who are good candidates, transplantation offers a permanent solution to hair loss in treated areas. Understanding the process, techniques, limitations, and recovery helps set realistic expectations.
            </p>
          </section>

          <section className="bg-primary/5 rounded-lg p-6 my-8">
            <h2 className="text-xl font-semibold text-foreground mb-3">Quick Answer</h2>
            <p className="text-muted-foreground">
              Hair transplant surgery moves DHT-resistant hair follicles from the back and sides of the scalp to balding areas. The two main techniques are FUT (strip harvesting) and FUE (individual extraction). Transplanted hair is permanent but native hair may continue to thin, so ongoing medical treatment is often recommended. Results become visible around six months with final outcomes at twelve to eighteen months.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">How Hair Transplants Work</h2>
            <p className="text-muted-foreground">
              Hair transplantation is based on the principle of donor dominance: hair follicles taken from areas resistant to DHT (typically the back and sides of the scalp) maintain their resistance when transplanted to balding areas.
            </p>
            <p className="text-muted-foreground">
              During the procedure, follicular units (natural groupings of one to four hairs) are harvested from the donor area and carefully placed into tiny incisions in the recipient area. The transplanted follicles establish blood supply in their new location and begin producing hair that continues to grow naturally.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">FUT vs FUE: The Two Main Techniques</h2>
            
            <h3 className="text-xl font-semibold text-foreground mt-6">Follicular Unit Transplantation (FUT)</h3>
            <p className="text-muted-foreground">
              Also known as strip harvesting, FUT involves removing a strip of scalp from the donor area, which is then dissected into individual follicular units under magnification.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li><strong>Advantages:</strong> Higher graft yield per session, generally lower cost per graft, follicles are less likely to be damaged during extraction</li>
              <li><strong>Disadvantages:</strong> Linear scar at the donor site (can be concealed with longer hair), longer recovery, not suitable for those wanting very short hairstyles</li>
              <li><strong>Best for:</strong> Patients needing larger sessions or with limited donor density</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mt-6">Follicular Unit Extraction (FUE)</h3>
            <p className="text-muted-foreground">
              FUE involves extracting individual follicular units directly from the scalp using a small punch tool.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li><strong>Advantages:</strong> No linear scar, faster healing, suitable for those who wear hair very short, can harvest from body hair in some cases</li>
              <li><strong>Disadvantages:</strong> Generally more expensive, may require multiple sessions for large areas, slightly higher risk of follicle damage</li>
              <li><strong>Best for:</strong> Patients wanting minimal scarring or planning to wear hair very short</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">Who Is a Good Candidate?</h2>
            <p className="text-muted-foreground">
              Not everyone is a suitable candidate for hair transplantation. Ideal candidates typically have:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li><strong>Stable hair loss:</strong> Those whose pattern has stabilized, usually age 25 or older</li>
              <li><strong>Adequate donor hair:</strong> Sufficient healthy hair at the back and sides to cover the desired area</li>
              <li><strong>Realistic expectations:</strong> Understanding that transplantation redistributes existing hair rather than creating new hair</li>
              <li><strong>Good overall health:</strong> No conditions that would impair healing</li>
              <li><strong>Commitment to post-procedure care:</strong> Willingness to follow recovery protocols and potentially use ongoing medical treatments</li>
            </ul>
            <p className="text-muted-foreground">
              Young men with early hair loss should typically wait, as performing transplants before the pattern stabilizes can lead to an unnatural appearance as native hair continues to thin.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">The Procedure: What to Expect</h2>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li><strong>Consultation:</strong> Assessment of hair loss pattern, donor capacity, and goals. Hairline design is planned.</li>
              <li><strong>Preparation:</strong> The scalp is cleaned, and local anesthesia is administered. The procedure is done while awake.</li>
              <li><strong>Harvesting:</strong> Donor follicles are obtained using the chosen technique (FUT or FUE).</li>
              <li><strong>Recipient site creation:</strong> Tiny incisions are made in the balding area at precise angles to mimic natural growth.</li>
              <li><strong>Graft placement:</strong> Follicular units are carefully inserted into the recipient sites.</li>
              <li><strong>Duration:</strong> Procedures typically take four to eight hours depending on the number of grafts.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">Recovery and Timeline</h2>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li><strong>First week:</strong> Swelling, redness, and scabbing are normal. Most people take a few days off work.</li>
              <li><strong>Weeks 2-4:</strong> Transplanted hair falls out (shock loss). This is expected and normal.</li>
              <li><strong>Months 3-4:</strong> New hair growth begins, often fine and wispy at first.</li>
              <li><strong>Months 6-9:</strong> Significant visible improvement as hair thickens and lengthens.</li>
              <li><strong>Months 12-18:</strong> Final results. Full density and natural appearance achieved.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">Potential Complications</h2>
            <p className="text-muted-foreground">
              While modern hair transplantation is generally safe, potential complications include:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Infection (rare with proper care)</li>
              <li>Scarring beyond expectations</li>
              <li>Poor graft survival resulting in less density than planned</li>
              <li>Unnatural appearance if poorly performed</li>
              <li>Continued native hair loss creating an island effect</li>
              <li>Numbness in donor or recipient areas (usually temporary)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">Maintaining Results</h2>
            <p className="text-muted-foreground">
              While transplanted hair is permanent, maintaining overall appearance often requires additional measures.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li><strong>Medical therapy:</strong> Finasteride and/or minoxidil to protect remaining native hair</li>
              <li><strong>Future procedures:</strong> Additional sessions may be needed as hair loss progresses</li>
              <li><strong>Scalp care:</strong> Gentle treatment and sun protection support scalp health</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">Choosing a Surgeon</h2>
            <p className="text-muted-foreground">
              The skill of the surgeon significantly impacts results. Consider:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Board certification and specialized training in hair restoration</li>
              <li>Before and after photos of actual patients with similar hair loss patterns</li>
              <li>Patient reviews and testimonials</li>
              <li>Detailed consultation addressing your specific situation</li>
              <li>Transparency about realistic outcomes and limitations</li>
            </ul>
          </section>

          <section className="bg-secondary/20 rounded-lg p-6">
            <p className="text-muted-foreground italic">
              HairCare AI can help personalize this further based on your hair type, scalp condition, and goals.
            </p>
          </section>
        </div>

        <RelatedArticles articles={relatedArticles} />

        <ArticleNavigation
          previous={{
            title: "Stress and Hair Loss in Men",
            href: "/mens-hair/stress"
          }}
          next={{
            title: "Maintaining Hair Density",
            href: "/mens-hair/maintenance"
          }}
        />
      </article>
    </ContentPageLayout>
  );
};

export default HairTransplantPage;
