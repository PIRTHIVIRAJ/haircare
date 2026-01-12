import { AlertTriangle, Heart, User, Sparkles, Droplets, BookOpen, Scissors, Apple, HelpCircle, Scale } from "lucide-react";
import { Link } from "react-router-dom";
import logoIcon from "@/assets/logo-icon.png";

// Category icons mapping (matching header dropdowns)
const categoryIcons: Record<string, React.ReactNode> = {
  "Hair Loss": <AlertTriangle className="w-4 h-4" />,
  "Women's Hair": <Heart className="w-4 h-4" />,
  "Men's Hair": <User className="w-4 h-4" />,
  "Hair Growth": <Sparkles className="w-4 h-4" />,
  "Scalp Health": <Droplets className="w-4 h-4" />,
  "Nutrition & Lifestyle": <Apple className="w-4 h-4" />,
  "Hair Loss Decisions": <Scale className="w-4 h-4" />,
  "Hair Types": <Scissors className="w-4 h-4" />,
  "Hair Routines": <BookOpen className="w-4 h-4" />,
  "Hair Products": <Sparkles className="w-4 h-4" />,
  "Hair FAQs": <HelpCircle className="w-4 h-4" />,
  "Resources": <BookOpen className="w-4 h-4" />,
};

const footerSectionsRow1 = [
  {
    title: "Hair Loss",
    links: [
      { title: "Overview", href: "/hair-loss" },
      { title: "Hair Loss in Men", href: "/hair-loss/men" },
      { title: "Hair Loss in Women", href: "/hair-loss/women" },
      { title: "Telogen Effluvium", href: "/hair-loss/telogen-effluvium" },
      { title: "When to See a Doctor", href: "/hair-loss/when-to-see-a-doctor" },
    ]
  },
  {
    title: "Women's Hair",
    links: [
      { title: "Overview", href: "/womens-hair" },
      { title: "Postpartum Hair Loss", href: "/womens-hair/postpartum-hair-loss" },
      { title: "PCOS and Hair Loss", href: "/womens-hair/pcos-hair-loss" },
      { title: "Menopause", href: "/womens-hair/menopause" },
      { title: "Hormonal Hair Loss", href: "/womens-hair/hormonal-hair-loss" },
    ]
  },
  {
    title: "Men's Hair",
    links: [
      { title: "Overview", href: "/mens-hair" },
      { title: "Male Pattern Baldness", href: "/mens-hair/male-pattern-baldness" },
      { title: "Treatments", href: "/mens-hair/treatments" },
      { title: "Finasteride", href: "/mens-hair/finasteride" },
      { title: "Hair Transplants", href: "/mens-hair/hair-transplant" },
    ]
  },
  {
    title: "Hair Growth",
    links: [
      { title: "Overview", href: "/hair-growth" },
      { title: "How Fast Does Hair Grow?", href: "/hair-growth/how-fast-does-hair-grow" },
      { title: "Natural Methods", href: "/hair-growth/natural-methods" },
      { title: "Minoxidil Guide", href: "/hair-growth/minoxidil" },
      { title: "Signs of Regrowth", href: "/hair-growth/signs-of-regrowth" },
    ]
  },
  {
    title: "Scalp Health",
    links: [
      { title: "Overview", href: "/scalp-health" },
      { title: "Healthy Scalp", href: "/scalp-health/healthy-scalp" },
      { title: "Dandruff vs Dry Scalp", href: "/scalp-health/dandruff-vs-dry-scalp" },
      { title: "Itchy Scalp", href: "/scalp-health/itchy-scalp-no-dandruff" },
      { title: "Best Ingredients", href: "/scalp-health/best-ingredients" },
    ]
  },
  {
    title: "Nutrition & Lifestyle",
    links: [
      { title: "Overview", href: "/hair-nutrition" },
      { title: "Best Foods for Hair", href: "/hair-nutrition/best-foods" },
      { title: "Nutrient Deficiencies", href: "/hair-nutrition/deficiencies" },
      { title: "Sleep and Hair Growth", href: "/hair-nutrition/sleep" },
      { title: "Smoking and Hair", href: "/hair-nutrition/smoking" },
    ]
  },
];

const footerSectionsRow2 = [
  {
    title: "Hair Loss Decisions",
    links: [
      { title: "Overview", href: "/hair-loss-decisions" },
      { title: "Temporary vs Permanent", href: "/hair-loss-decisions/temporary-vs-permanent" },
      { title: "First Steps", href: "/hair-loss-decisions/first-steps" },
      { title: "Choosing Treatment", href: "/hair-loss-decisions/choosing-treatment" },
      { title: "Red Flags", href: "/hair-loss-decisions/red-flags" },
    ]
  },
  {
    title: "Hair Types",
    links: [
      { title: "Overview", href: "/hair-types" },
      { title: "Curly Hair Care", href: "/hair-types/curly-hair-care" },
      { title: "Straight Hair Care", href: "/hair-types/straight-hair-care" },
      { title: "Fine vs Thin Hair", href: "/hair-types/fine-vs-thin" },
      { title: "Aging Hair", href: "/hair-types/aging-hair" },
    ]
  },
  {
    title: "Hair Routines",
    links: [
      { title: "Overview", href: "/hair-routines" },
      { title: "By Hair Type", href: "/hair-routines/by-hair-type" },
      { title: "How Often to Wash", href: "/hair-routines/how-often-wash" },
      { title: "Prevent Breakage", href: "/hair-routines/prevent-breakage" },
      { title: "Common Mistakes", href: "/hair-routines/common-mistakes" },
    ]
  },
  {
    title: "Hair Products",
    links: [
      { title: "Overview", href: "/hair-products" },
      { title: "Choosing Shampoo", href: "/hair-products/choose-shampoo" },
      { title: "Sulfate-Free", href: "/hair-products/sulfate-free" },
      { title: "Hair Oils", href: "/hair-products/hair-oils-comparison" },
      { title: "Hair Masks", href: "/hair-products/hair-masks" },
    ]
  },
  {
    title: "Hair FAQs",
    links: [
      { title: "Overview", href: "/hair-faqs" },
      { title: "Cutting & Growth", href: "/hair-faqs/cutting-hair-growth" },
      { title: "Hats & Hair Loss", href: "/hair-faqs/do-hats-cause-hair-loss" },
      { title: "Can Hair Loss Be Reversed?", href: "/hair-faqs/can-hair-loss-be-reversed" },
      { title: "Common Myths", href: "/hair-faqs/common-myths" },
    ]
  },
  {
    title: "Resources",
    links: [
      { title: "About", href: "/about" },
      { title: "Sitemap", href: "/sitemap" },
      { title: "Privacy Policy", href: "/privacy-policy" },
      { title: "Terms of Service", href: "/terms-of-service" },
    ]
  },
];

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card py-12">
      <div className="container mx-auto px-6">
        <div className="mb-10">
          <Link to="/" className="inline-flex items-center gap-2 mb-4 group">
            <div className="w-11 h-11 rounded-full bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300 overflow-hidden">
              <img src={logoIcon} alt="HairCare" className="w-10 h-10 object-contain" />
            </div>
            <span className="font-heading text-2xl font-semibold text-foreground">
              HairCare
            </span>
          </Link>
          <p className="text-muted-foreground text-sm max-w-md">
            AI-powered hair and scalp health education. Evidence-based guidance personalised to your needs.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-10">
          {footerSectionsRow1.map((section, index) => {
            const hasMoreLinks = section.links.length > 5;
            return (
              <div key={index}>
                <Link 
                  to={section.links[0].href}
                  className="flex items-center gap-2 mb-3 group"
                >
                  <span className="text-primary transition-transform duration-200 group-hover:scale-110">
                    {categoryIcons[section.title] || <BookOpen className="w-4 h-4" />}
                  </span>
                  <h4 className="text-sm font-semibold text-primary group-hover:underline transition-all">
                    {section.title}
                  </h4>
                </Link>
                <ul className="space-y-1.5 text-sm">
                  {section.links.slice(1, 5).map((link) => (
                    <li key={link.href}>
                      <Link to={link.href} className="text-muted-foreground hover:text-foreground transition-colors">
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
                {hasMoreLinks && (
                  <Link
                    to={section.links[0].href}
                    className="inline-block mt-2 text-xs font-medium text-primary/70 hover:text-primary transition-colors"
                  >
                    View all →
                  </Link>
                )}
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 pb-8 border-b border-border">
          {footerSectionsRow2.map((section, index) => {
            const hasMoreLinks = section.links.length > 5;
            return (
              <div key={index}>
                <Link 
                  to={section.links[0].href}
                  className="flex items-center gap-2 mb-3 group"
                >
                  <span className="text-primary transition-transform duration-200 group-hover:scale-110">
                    {categoryIcons[section.title] || <BookOpen className="w-4 h-4" />}
                  </span>
                  <h4 className="text-sm font-semibold text-primary group-hover:underline transition-all">
                    {section.title}
                  </h4>
                </Link>
                <ul className="space-y-1.5 text-sm">
                  {section.links.slice(1, 5).map((link) => (
                    <li key={link.href}>
                      <Link to={link.href} className="text-muted-foreground hover:text-foreground transition-colors">
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
                {hasMoreLinks && (
                  <Link
                    to={section.links[0].href}
                    className="inline-block mt-2 text-xs font-medium text-primary/70 hover:text-primary transition-colors"
                  >
                    View all →
                  </Link>
                )}
              </div>
            );
          })}
        </div>
        
        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>This content is for educational purposes only and does not replace medical advice.</p>
          <p className="mt-2">© {new Date().getFullYear()} HairCare.ai. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;