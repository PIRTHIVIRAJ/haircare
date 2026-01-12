import { useState } from "react";
import { ChevronDown, Sparkles, Droplets, Wind, AlertCircle, Heart } from "lucide-react";
import { cn } from "@/lib/utils";

interface Article {
  id: string;
  title: string;
  category: string;
  icon: React.ReactNode;
  summary: string;
  content: string[];
  tips?: string[];
}

const articles: Article[] = [
  {
    id: "hair-loss-basics",
    title: "Understanding Hair Loss",
    category: "Conditions",
    icon: <AlertCircle className="w-5 h-5" />,
    summary: "Learn about the different types of hair loss, their causes, and when to seek professional help.",
    content: [
      "Hair loss, or alopecia, affects millions of people and can have various causes. It's normal to lose 50-100 hairs daily as part of the natural hair growth cycle.",
      "Common types include androgenetic alopecia (pattern baldness), telogen effluvium (stress-related shedding), and alopecia areata (autoimmune patches). Each has different characteristics and treatment approaches.",
      "Pattern baldness typically presents as gradual thinning at the crown or temples in men, while women often experience overall thinning. Telogen effluvium usually causes diffuse shedding 2-3 months after a triggering event.",
    ],
    tips: [
      "Track when you first noticed changes",
      "Note any recent stressors or health changes",
      "Take photos monthly to monitor progression",
      "Consult a dermatologist if shedding is sudden or severe"
    ]
  },
  {
    id: "scalp-health",
    title: "Scalp Health Essentials",
    category: "Care Tips",
    icon: <Sparkles className="w-5 h-5" />,
    summary: "A healthy scalp is the foundation for healthy hair. Discover how to maintain optimal scalp conditions.",
    content: [
      "Your scalp is living tissue with its own ecosystem of oils, microbes, and cells. When this balance is disrupted, issues like dandruff, itching, or excess oiliness can occur.",
      "The scalp produces sebum, a natural oil that protects and moisturizes your hair. Too much leads to greasiness; too little causes dryness and flaking.",
      "Environmental factors, product buildup, and even your water quality can affect scalp health. Hard water, in particular, can leave mineral deposits that make hair dull and scalp irritated."
    ],
    tips: [
      "Massage your scalp regularly to boost circulation",
      "Wash at a frequency that suits your scalp type",
      "Use lukewarm water instead of hot",
      "Consider a clarifying shampoo monthly to remove buildup"
    ]
  },
  {
    id: "dandruff-flaking",
    title: "Managing Dandruff & Flaking",
    category: "Conditions",
    icon: <Wind className="w-5 h-5" />,
    summary: "Understanding the difference between dry scalp and dandruff, and effective management strategies.",
    content: [
      "Dandruff and dry scalp are often confused but have different causes. True dandruff (seborrheic dermatitis) involves oily, yellowish flakes and is caused by a yeast called Malassezia. Dry scalp produces smaller, white flakes and feels tight.",
      "Factors that can worsen dandruff include stress, cold weather, certain hair products, and infrequent washing. It's a chronic condition that can be managed but not permanently cured.",
      "Treatment typically involves medicated shampoos containing ingredients like zinc pyrithione, selenium sulfide, ketoconazole, or salicylic acid. Rotating between different active ingredients can help maintain effectiveness."
    ],
    tips: [
      "Leave medicated shampoo on for 3-5 minutes before rinsing",
      "Don't scratch—it can worsen inflammation",
      "Maintain a consistent washing schedule",
      "Reduce stress through relaxation techniques"
    ]
  },
  {
    id: "hair-nutrition",
    title: "Nutrition for Hair Health",
    category: "Lifestyle",
    icon: <Heart className="w-5 h-5" />,
    summary: "The nutrients your hair needs and how diet impacts hair growth and quality.",
    content: [
      "Hair is primarily made of keratin, a protein, so adequate protein intake is essential. Iron, zinc, biotin, and vitamins A, C, D, and E also play crucial roles in hair health.",
      "Iron deficiency is one of the most common nutritional causes of hair loss, especially in women. Ferritin (stored iron) levels should ideally be at least 70 ng/mL for optimal hair growth.",
      "While supplements are popular, getting nutrients from food is generally more effective. Eggs, fish, leafy greens, nuts, and legumes are excellent choices for hair health."
    ],
    tips: [
      "Pair iron-rich foods with vitamin C for better absorption",
      "Consider a blood test to check for deficiencies",
      "Stay hydrated—dehydration affects hair texture",
      "Avoid crash diets that can trigger hair shedding"
    ]
  },
  {
    id: "product-guide",
    title: "Choosing Hair Products",
    category: "Care Tips",
    icon: <Droplets className="w-5 h-5" />,
    summary: "Navigate the world of shampoos, conditioners, and treatments with confidence.",
    content: [
      "Understanding your hair type (fine, medium, coarse) and scalp type (oily, normal, dry) is the first step in choosing appropriate products. What works for one person may not work for another.",
      "Sulfates are effective cleansers but can be harsh on colored or very dry hair. Silicones provide smoothness but may build up over time. Neither is inherently bad—it depends on your needs.",
      "Look for products suited to your specific concerns. For thinning hair, volumizing formulas with proteins can help. For damage, look for bond-building ingredients like keratin or amino acids."
    ],
    tips: [
      "Focus conditioner on mid-lengths and ends, not roots",
      "Deep condition weekly if hair is damaged or dry",
      "Avoid heavy products if hair is fine or thinning",
      "Read ingredient lists—first 5 ingredients matter most"
    ]
  }
];

const KnowledgeBase = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleArticle = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const categories = [...new Set(articles.map(a => a.category))];

  return (
    <section id="knowledge" className="py-24">
      <div className="container max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4 text-primary" />
            Learn
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-foreground mb-4 tracking-tight">
            Hair Care Knowledge Base
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Evidence-based articles to help you understand and care for your hair and scalp.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <span
              key={category}
              className="px-4 py-1.5 glass rounded-full text-sm text-muted-foreground"
            >
              {category}
            </span>
          ))}
        </div>

        {/* Articles */}
        <div className="space-y-4">
          {articles.map((article) => (
            <article
              key={article.id}
              className="glass rounded-2xl overflow-hidden shadow-soft hover:shadow-glass transition-shadow"
            >
              <button
                onClick={() => toggleArticle(article.id)}
                className="w-full px-6 py-5 flex items-start gap-4 text-left"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                  {article.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="text-xs font-medium text-primary uppercase tracking-wide">
                        {article.category}
                      </span>
                      <h3 className="font-heading text-lg font-semibold text-foreground mt-1">
                        {article.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                        {article.summary}
                      </p>
                    </div>
                    <ChevronDown 
                      className={cn(
                        "w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform mt-1",
                        expandedId === article.id && "rotate-180"
                      )}
                    />
                  </div>
                </div>
              </button>

              {expandedId === article.id && (
                <div className="px-6 pb-6 animate-fade-in">
                  <div className="pl-14 border-t border-border/50 pt-5">
                    <div className="prose prose-sm max-w-none">
                      {article.content.map((paragraph, idx) => (
                        <p key={idx} className="text-muted-foreground mb-4 last:mb-0 leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                    </div>

                    {article.tips && (
                      <div className="mt-6 p-4 bg-primary/5 rounded-xl">
                        <h4 className="font-medium text-foreground mb-3 flex items-center gap-2">
                          <Sparkles className="w-4 h-4 text-primary" />
                          Quick Tips
                        </h4>
                        <ul className="space-y-2">
                          {article.tips.map((tip, idx) => (
                            <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                              {tip}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </article>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="mt-10 p-6 glass rounded-2xl text-center">
          <p className="text-sm text-muted-foreground">
            <strong className="text-foreground">Disclaimer:</strong> This information is for educational purposes only and is not a substitute for professional medical advice.
          </p>
        </div>
      </div>
    </section>
  );
};

export default KnowledgeBase;
