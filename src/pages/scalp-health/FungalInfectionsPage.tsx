import SEOHead from "@/components/SEOHead";
import ContentPageLayout from "@/components/ContentPageLayout";
import Breadcrumb from "@/components/Breadcrumb";
import FAQSection from "@/components/FAQSection";
import ChatCTA from "@/components/ChatCTA";
import MedicalDisclaimer from "@/components/MedicalDisclaimer";
import RelatedArticles from "@/components/RelatedArticles";

const FungalInfectionsPage = () => {
  const faqs = [
    {
      question: "How do you get a fungal scalp infection?",
      answer: "Fungal scalp infections spread through direct contact with infected people, animals (especially cats and dogs), or contaminated objects like combs, hats, or pillows. Children are most commonly affected due to close contact in schools. Warm, moist environments favour fungal growth."
    },
    {
      question: "Can adults get scalp ringworm?",
      answer: "While less common than in children, adults can get scalp ringworm (tinea capitis). Adults may be more susceptible if immunocompromised, diabetic, or in close contact with infected children or animals. Treatment is the same but may take longer."
    },
    {
      question: "Will hair grow back after a fungal infection?",
      answer: "With prompt treatment, hair usually regrows completely once the infection clears. However, if treatment is delayed and severe inflammation occurs (kerion), scarring may develop that causes permanent hair loss in affected areas. Early treatment is important."
    },
    {
      question: "How long does it take to treat a scalp fungal infection?",
      answer: "Oral antifungal treatment typically lasts 6-12 weeks, depending on the medication used and severity of infection. Topical treatments alone are usually insufficient for scalp infections because the fungus lives within hair shafts and follicles."
    }
  ];

  const relatedArticles = [
    {
      title: "Scalp Inflammation and Hair Loss",
      href: "/scalp-health/inflammation-hair-loss",
      description: "How infections and inflammation affect hair growth."
    },
    {
      title: "When to See a Doctor for Scalp Issues",
      href: "/hair-loss/when-to-see-a-doctor",
      description: "Signs that need professional evaluation."
    },
    {
      title: "What is a Healthy Scalp?",
      href: "/scalp-health/healthy-scalp",
      description: "Understanding normal scalp health."
    }
  ];

  return (
    <>
      <SEOHead 
        title="Fungal Scalp Infections (Tinea Capitis): Symptoms and Treatment | HairCare.ai"
        description="Learn about fungal infections of the scalp including ringworm, symptoms to watch for, how they spread, and effective treatment options."
        canonicalUrl="https://haircare.ai/scalp-health/fungal-infections"
        articleSchema={{
          headline: "Fungal Scalp Infections: Symptoms and Treatment",
          description: "Learn about fungal infections of the scalp, symptoms, and effective treatment options.",
          datePublished: "2024-12-28",
          dateModified: "2024-12-28"
        }}
        faqSchema={faqs}
      />
      
      <ContentPageLayout>
        <article className="max-w-4xl mx-auto" itemScope itemType="https://schema.org/Article">
          <Breadcrumb items={[
            { label: "Scalp Health", href: "/scalp-health" },
            { label: "Fungal Infections" }
          ]} />
          
          <header className="mb-8">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4" itemProp="headline">
              Fungal Scalp Infections
            </h1>
            <p className="text-lg text-muted-foreground">
              Understanding tinea capitis and other fungal conditions affecting the scalp.
            </p>
          </header>

          <section className="prose prose-lg max-w-none mb-10">
            <p className="text-foreground leading-relaxed">
              Fungal infections of the scalp, most commonly tinea capitis (scalp ringworm), are contagious conditions that require proper medical treatment. Unlike conditions such as dandruff, which can often be managed at home, fungal scalp infections typically need oral medication prescribed by a doctor. Early recognition and treatment are important to prevent spread and permanent hair loss.
            </p>
          </section>

          <section className="mb-10 p-6 rounded-xl bg-primary/5 border border-primary/20">
            <h2 className="font-heading text-xl font-semibold text-foreground mb-3">
              Quick Answer
            </h2>
            <p className="text-foreground leading-relaxed">
              Fungal scalp infections (tinea capitis) are caused by dermatophyte fungi that invade hair shafts and follicles. Symptoms include scaly patches, broken hairs, and sometimes boggy swelling. Treatment requires oral antifungal medication for 6-12 weeks; topical treatments alone are insufficient. The condition is contagious.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Types of Fungal Scalp Infections
            </h2>
            
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Tinea Capitis (Scalp Ringworm)</h3>
                <p className="text-muted-foreground">
                  The most common fungal scalp infection, caused by dermatophytes (Trichophyton or Microsporum species). Despite the name, it has nothing to do with worms—the "ring" refers to the circular pattern sometimes seen. Most common in children but can affect adults.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Favus</h3>
                <p className="text-muted-foreground">
                  A severe form of tinea capitis causing distinctive yellow, cup-shaped crusts (scutula) around hair follicles. If untreated, it can cause permanent scarring alopecia. Rare in developed countries.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Kerion</h3>
                <p className="text-muted-foreground">
                  A severe inflammatory reaction to fungal infection, appearing as a boggy, pus-filled, painful mass. It is an immune response to the fungus, not a bacterial infection (though secondary bacterial infection can occur). May cause permanent hair loss if not treated promptly.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Symptoms to Watch For
            </h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Early Signs</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Scaly patches on the scalp</li>
                  <li>Itching (may be mild or intense)</li>
                  <li>Hair breaking off at the scalp (black dots)</li>
                  <li>Dull, grey patches where hair has broken</li>
                </ul>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Advanced Signs</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Bald patches that enlarge</li>
                  <li>Swollen lymph nodes in neck</li>
                  <li>Low-grade fever (with kerion)</li>
                  <li>Boggy, tender masses</li>
                  <li>Pus drainage</li>
                </ul>
              </div>
            </div>

            <p className="text-foreground leading-relaxed mt-4">
              The appearance varies depending on the type of fungus involved. Some cause hair to break at the surface (black dot pattern), while others cause hair to break above the surface or become encased in a grey sheath.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Treatment
            </h2>
            
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Oral Antifungal Medications</h3>
                <p className="text-muted-foreground mb-2">Oral treatment is essential because the fungus lives inside the hair shaft:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li><strong>Griseofulvin:</strong> Traditional first-line treatment; taken for 6-12 weeks</li>
                  <li><strong>Terbinafine:</strong> Often preferred; shorter treatment duration (4-6 weeks)</li>
                  <li><strong>Itraconazole:</strong> Alternative option for certain fungi</li>
                  <li><strong>Fluconazole:</strong> May be used in some cases</li>
                </ul>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Adjunctive Treatments</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Antifungal shampoo (ketoconazole, selenium sulfide) to reduce shedding of spores</li>
                  <li>Oral steroids may be prescribed for severe kerions</li>
                  <li>Treatment of close contacts to prevent reinfection</li>
                </ul>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Important Treatment Notes</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Complete the full course even if symptoms improve</li>
                  <li>Follow-up fungal cultures may be needed to confirm cure</li>
                  <li>Children can usually return to school after starting treatment (verify local guidelines)</li>
                  <li>Improvement should be seen within 4-6 weeks</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Preventing Spread
            </h2>
            
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Personal Items</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Do not share combs, brushes, hats, or pillows</li>
                  <li>Wash personal items (combs, pillowcases) regularly in hot water</li>
                  <li>Consider replacing brushes and combs after treatment</li>
                </ul>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">Household Measures</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Check and treat household members if symptomatic</li>
                  <li>Examine and treat pets if they are the suspected source</li>
                  <li>Vacuum furniture and carpets where hair may have fallen</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Common Myths
            </h2>
            
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-muted/50 border border-border">
                <p className="font-medium text-foreground mb-1">Myth: Ringworm is caused by worms</p>
                <p className="text-muted-foreground text-sm">
                  Ringworm is caused by fungi, not worms. The name comes from the ring-shaped rash sometimes seen on the body. On the scalp, a ring pattern may not be visible.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-muted/50 border border-border">
                <p className="font-medium text-foreground mb-1">Myth: Anti-dandruff shampoo can treat fungal infections</p>
                <p className="text-muted-foreground text-sm">
                  While antifungal shampoos help reduce spore shedding, they cannot penetrate the hair shaft to kill the fungus. Oral medication is always required for scalp fungal infections.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-muted/50 border border-border">
                <p className="font-medium text-foreground mb-1">Myth: You can treat it yourself with home remedies</p>
                <p className="text-muted-foreground text-sm">
                  Home remedies and over-the-counter topical antifungals are not effective for scalp fungal infections. Delaying proper treatment risks permanent hair loss and spreading the infection.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              When to See a Doctor
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              See a doctor promptly if you notice:
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground mb-4">
              <li>Scaly patches with hair loss</li>
              <li>Areas where hair has broken off at the scalp</li>
              <li>Itchy, enlarging bald patches</li>
              <li>Boggy, swollen, or painful areas on the scalp</li>
              <li>Signs of infection in a child who has been in contact with someone with ringworm</li>
            </ul>
            <p className="text-foreground leading-relaxed">
              Early treatment prevents spread to others and reduces the risk of permanent scarring.
            </p>
          </section>

          <section className="mb-10 p-6 rounded-xl bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20">
            <p className="text-foreground leading-relaxed">
              HairCare AI can help personalise this further based on your hair type, scalp condition, and goals.
            </p>
          </section>

          <FAQSection faqs={faqs} />
          
          <ChatCTA />
          
          <RelatedArticles articles={relatedArticles} />
          
          <MedicalDisclaimer />
        </article>
      </ContentPageLayout>
    </>
  );
};

export default FungalInfectionsPage;