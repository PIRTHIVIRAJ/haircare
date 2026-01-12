import { Menu, X, ChevronDown, Search, Sparkles, BookOpen, Scissors, Apple, HelpCircle, Scale, AlertTriangle, Heart, User, Droplets, Sun, Moon, ShieldCheck, LogOut, Settings } from "lucide-react";
import logoIcon from "@/assets/logo-icon.png";
import { useTheme } from "next-themes";
import { useState, useRef, useEffect, type KeyboardEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/hooks/useAuth";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navigationItems = {
  home: {
    label: "Home",
    href: "/",
    items: null
  },
  about: {
    label: "About",
    href: "/about",
    items: null
  },
  hairLoss: {
    label: "Hair Loss",
    items: [
      { title: "Hair Loss Overview", href: "/hair-loss" },
      { title: "Hair Loss in Men", href: "/hair-loss/men" },
      { title: "Hair Loss in Women", href: "/hair-loss/women" },
      { title: "Sudden Hair Loss", href: "/hair-loss/sudden-hair-loss" },
      { title: "Causes in Women", href: "/hair-loss/causes-in-women" },
      { title: "Causes in Men", href: "/hair-loss/causes-in-men" },
      { title: "Genetic vs Hormonal", href: "/hair-loss/genetic-vs-hormonal" },
      { title: "Stress-Related Hair Loss", href: "/hair-loss/stress-related" },
      { title: "Telogen Effluvium", href: "/hair-loss/telogen-effluvium" },
      { title: "Thinning vs Shedding", href: "/hair-loss/thinning-vs-shedding" },
      { title: "How to Diagnose", href: "/hair-loss/diagnosis" },
      { title: "Medical Tests", href: "/hair-loss/medical-tests" },
      { title: "When to See a Doctor", href: "/hair-loss/when-to-see-a-doctor" },
      { title: "Androgenetic Alopecia", href: "/conditions/androgenetic-alopecia" },
      { title: "Hair Shedding", href: "/symptoms/hair-shedding" },
    ]
  },
  womensHair: {
    label: "Women's Hair",
    items: [
      { title: "Women's Hair Overview", href: "/womens-hair" },
      { title: "Postpartum Hair Loss", href: "/womens-hair/postpartum-hair-loss" },
      { title: "Pregnancy Hair Changes", href: "/womens-hair/pregnancy-changes" },
      { title: "PCOS and Hair Loss", href: "/womens-hair/pcos-hair-loss" },
      { title: "Menopause Hair Changes", href: "/womens-hair/menopause" },
      { title: "Hormonal Hair Loss", href: "/womens-hair/hormonal-hair-loss" },
      { title: "Iron Deficiency", href: "/womens-hair/iron-deficiency" },
      { title: "Thyroid Issues", href: "/womens-hair/thyroid" },
      { title: "Birth Control Effects", href: "/womens-hair/birth-control" },
      { title: "Stopping Contraception", href: "/womens-hair/stopping-contraception" },
      { title: "When to Seek Help", href: "/womens-hair/when-to-seek-help" },
    ]
  },
  mensHair: {
    label: "Men's Hair",
    items: [
      { title: "Men's Hair Overview", href: "/mens-hair" },
      { title: "Male Pattern Baldness", href: "/mens-hair/male-pattern-baldness" },
      { title: "When It Starts", href: "/mens-hair/when-it-starts" },
      { title: "Hairline vs Crown", href: "/mens-hair/hairline-vs-crown" },
      { title: "Treatments for Men", href: "/mens-hair/treatments" },
      { title: "Finasteride Guide", href: "/mens-hair/finasteride" },
      { title: "Minoxidil Foam vs Liquid", href: "/mens-hair/minoxidil-foam-vs-liquid" },
      { title: "Hair Loss Myths", href: "/mens-hair/myths" },
      { title: "Stress and Hair Loss", href: "/mens-hair/stress" },
      { title: "Hair Transplants", href: "/mens-hair/hair-transplant" },
      { title: "Maintenance", href: "/mens-hair/maintenance" },
    ]
  },
  other: {
    label: "More Articles",
    submenus: [
      {
        title: "Hair Growth",
        href: "/hair-growth",
        items: [
          { title: "Hair Growth Overview", href: "/hair-growth" },
          { title: "How Fast Hair Grows", href: "/hair-growth/how-fast-does-hair-grow" },
          { title: "Can Hair Regrow", href: "/hair-growth/can-hair-regrow" },
          { title: "Growth Cycle", href: "/hair-growth/growth-cycle" },
          { title: "Natural Methods", href: "/hair-growth/natural-methods" },
          { title: "Minoxidil for Growth", href: "/hair-growth/minoxidil" },
          { title: "Rosemary Oil", href: "/hair-growth/rosemary-oil" },
          { title: "Supplements", href: "/hair-growth/supplements" },
          { title: "Regrowth Timeline", href: "/hair-growth/regrowth-timeline" },
          { title: "Signs of Regrowth", href: "/hair-growth/signs-of-regrowth" },
          { title: "Growth Myths", href: "/hair-growth/myths" },
        ]
      },
      {
        title: "Hair Types",
        href: "/hair-types",
        items: [
          { title: "Hair Types Overview", href: "/hair-types" },
          { title: "Identify Your Hair Type", href: "/hair-types/identify-your-hair-type" },
          { title: "Curly Hair Care", href: "/hair-types/curly-hair-care" },
          { title: "Straight Hair Care", href: "/hair-types/straight-hair-care" },
          { title: "Wavy Hair Care", href: "/hair-types/wavy-hair-care" },
          { title: "Fine vs Thin", href: "/hair-types/fine-vs-thin" },
          { title: "Dry vs Damaged", href: "/hair-types/dry-vs-damaged" },
          { title: "Frizzy Hair", href: "/hair-types/frizzy-hair" },
          { title: "Oily Scalp Dry Ends", href: "/hair-types/oily-scalp-dry-ends" },
          { title: "Aging Hair", href: "/hair-types/aging-hair" },
          { title: "Ethnic Hair Care", href: "/hair-types/ethnic-hair-care" },
        ]
      },
      {
        title: "Hair Routines",
        href: "/hair-routines",
        items: [
          { title: "Hair Routines Overview", href: "/hair-routines" },
          { title: "By Hair Type", href: "/hair-routines/by-hair-type" },
          { title: "How Often to Wash", href: "/hair-routines/how-often-wash" },
          { title: "Morning vs Night", href: "/hair-routines/morning-vs-night" },
          { title: "Brushing Hair", href: "/hair-routines/brushing-hair" },
          { title: "Blow Dry vs Air Dry", href: "/hair-routines/blow-dry-vs-air-dry" },
          { title: "Prevent Breakage", href: "/hair-routines/prevent-breakage" },
          { title: "Sleep Habits", href: "/hair-routines/sleep-habits" },
          { title: "Common Mistakes", href: "/hair-routines/common-mistakes" },
          { title: "Seasonal Care", href: "/hair-routines/seasonal-care" },
          { title: "Travel Care", href: "/hair-routines/travel-care" },
        ]
      },
      {
        title: "Scalp Health",
        href: "/scalp-health",
        items: [
          { title: "Scalp Health Overview", href: "/scalp-health" },
          { title: "Healthy Scalp", href: "/scalp-health/healthy-scalp" },
          { title: "Dandruff vs Dry Scalp", href: "/scalp-health/dandruff-vs-dry-scalp" },
          { title: "Seborrheic Dermatitis", href: "/scalp-health/seborrheic-dermatitis" },
          { title: "Scalp Psoriasis", href: "/scalp-health/psoriasis" },
          { title: "Scalp Acne", href: "/scalp-health/acne" },
          { title: "Itchy Scalp", href: "/scalp-health/itchy-scalp-no-dandruff" },
          { title: "Fungal Infections", href: "/scalp-health/fungal-infections" },
          { title: "Inflammation & Hair Loss", href: "/scalp-health/inflammation-hair-loss" },
          { title: "Scalp Exfoliation", href: "/scalp-health/exfoliation" },
          { title: "Best Ingredients", href: "/scalp-health/best-ingredients" },
        ]
      },
      {
        title: "Hair Products",
        href: "/hair-products",
        items: [
          { title: "Hair Products Overview", href: "/hair-products" },
          { title: "Minoxidil Guide", href: "/treatments/minoxidil" },
          { title: "Choose Shampoo", href: "/hair-products/choose-shampoo" },
          { title: "Silicones", href: "/hair-products/silicones" },
          { title: "Repair Ingredients", href: "/hair-products/repair-ingredients" },
          { title: "Protein vs Moisture", href: "/hair-products/protein-vs-moisture" },
          { title: "Hair Oils Comparison", href: "/hair-products/hair-oils-comparison" },
          { title: "Leave-In Conditioners", href: "/hair-products/leave-in-conditioners" },
          { title: "Heat Protectants", href: "/hair-products/heat-protectants" },
          { title: "Hair Masks", href: "/hair-products/hair-masks" },
          { title: "Salon vs Home", href: "/hair-products/salon-vs-home" },
        ]
      },
      {
        title: "Nutrition & Lifestyle",
        href: "/hair-nutrition",
        items: [
          { title: "Nutrition Overview", href: "/hair-nutrition" },
          { title: "Best Foods", href: "/hair-nutrition/best-foods" },
          { title: "Deficiencies", href: "/hair-nutrition/deficiencies" },
          { title: "Protein", href: "/hair-nutrition/protein" },
          { title: "Key Nutrients", href: "/hair-nutrition/key-nutrients" },
          { title: "Crash Dieting", href: "/hair-nutrition/crash-dieting" },
          { title: "Sleep", href: "/hair-nutrition/sleep" },
          { title: "Exercise", href: "/hair-nutrition/exercise" },
          { title: "Smoking", href: "/hair-nutrition/smoking" },
          { title: "Alcohol", href: "/hair-nutrition/alcohol" },
          { title: "Gut Health", href: "/hair-nutrition/gut-health" },
        ]
      },
      {
        title: "Hair FAQs",
        href: "/hair-faqs",
        items: [
          { title: "FAQs Overview", href: "/hair-faqs" },
          { title: "Cutting Hair Growth", href: "/hair-faqs/cutting-hair-growth" },
          { title: "Hats Cause Hair Loss", href: "/hair-faqs/hats-cause-hair-loss" },
          { title: "Washing Daily", href: "/hair-faqs/washing-daily" },
          { title: "Stress Grey Hair", href: "/hair-faqs/stress-grey-hair" },
          { title: "Natural vs Chemical", href: "/hair-faqs/natural-vs-chemical" },
          { title: "Can Hair Loss Be Reversed", href: "/hair-faqs/can-hair-loss-be-reversed" },
          { title: "Treatment Timeline", href: "/hair-faqs/treatment-timeline" },
          { title: "Aging Hair Loss", href: "/hair-faqs/aging-hair-loss" },
          { title: "Normal Shedding", href: "/hair-faqs/normal-shedding" },
          { title: "Common Myths", href: "/hair-faqs/common-myths" },
        ]
      },
      {
        title: "Hair Loss Decisions",
        href: "/hair-loss-decisions",
        items: [
          { title: "Decisions Overview", href: "/hair-loss-decisions" },
          { title: "Temporary vs Permanent", href: "/hair-loss-decisions/temporary-vs-permanent" },
          { title: "Normal for Age", href: "/hair-loss-decisions/normal-for-age" },
          { title: "Treat or Wait", href: "/hair-loss-decisions/treat-or-wait" },
          { title: "First Steps", href: "/hair-loss-decisions/first-steps" },
          { title: "Lifestyle Only", href: "/hair-loss-decisions/lifestyle-only" },
          { title: "Medical Signs", href: "/hair-loss-decisions/medical-signs" },
          { title: "Red Flags", href: "/hair-loss-decisions/red-flags" },
          { title: "Early Reversibility", href: "/hair-loss-decisions/early-reversibility" },
          { title: "Choosing Treatment", href: "/hair-loss-decisions/choosing-treatment" },
          { title: "Untreated Hair Loss", href: "/hair-loss-decisions/untreated-hair-loss" },
        ]
      },
    ]
  }
};

interface DropdownProps {
  label: string;
  items?: { title: string; href: string }[];
  submenus?: { title: string; href: string; items: { title: string; href: string }[] | null }[];
  onClose: () => void;
}

// Category icons mapping
const categoryIcons: Record<string, React.ReactNode> = {
  // Tier 1 categories
  "Hair Loss": <AlertTriangle className="w-4 h-4" />,
  "Women's Hair": <Heart className="w-4 h-4" />,
  "Men's Hair": <User className="w-4 h-4" />,
  "Scalp Health": <Droplets className="w-4 h-4" />,
  // Tier 2 categories (More Articles)
  "Hair Growth": <Sparkles className="w-4 h-4" />,
  "Hair Types": <Scissors className="w-4 h-4" />,
  "Hair Routines": <BookOpen className="w-4 h-4" />,
  "Hair Products": <Sparkles className="w-4 h-4" />,
  "Nutrition & Lifestyle": <Apple className="w-4 h-4" />,
  "Hair FAQs": <HelpCircle className="w-4 h-4" />,
  "Hair Loss Decisions": <Scale className="w-4 h-4" />,
};

// User Menu Component
const UserMenu = () => {
  const { user, isAdmin, isVerifiedExpert, signOut } = useAuth();
  const navigate = useNavigate();

  if (!user) {
    return (
      <Link
        to="/auth"
        className="ml-3 px-4 py-2 text-sm font-medium rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
      >
        Sign In
      </Link>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="ml-3 p-1 rounded-full hover:bg-foreground/5 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/30">
        <Avatar className="h-8 w-8">
          <AvatarFallback className="bg-primary/10 text-primary text-sm">
            {user.email?.charAt(0).toUpperCase() || 'U'}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        <div className="px-2 py-1.5">
          <p className="text-sm font-medium truncate">{user.email}</p>
          {isVerifiedExpert && (
            <p className="text-xs text-primary flex items-center gap-1 mt-0.5">
              <ShieldCheck className="h-3 w-3" /> Verified Expert
            </p>
          )}
        </div>
        <DropdownMenuSeparator />
        {isVerifiedExpert && (
          <DropdownMenuItem onClick={() => navigate('/expert/dashboard')}>
            <Settings className="h-4 w-4 mr-2" />
            Expert Dashboard
          </DropdownMenuItem>
        )}
        {!isVerifiedExpert && (
          <DropdownMenuItem onClick={() => navigate('/expert/signup')}>
            <ShieldCheck className="h-4 w-4 mr-2" />
            Become an Expert
          </DropdownMenuItem>
        )}
        {isAdmin && (
          <DropdownMenuItem onClick={() => navigate('/admin')}>
            <Settings className="h-4 w-4 mr-2" />
            Admin Panel
          </DropdownMenuItem>
        )}
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => signOut()}>
          <LogOut className="h-4 w-4 mr-2" />
          Sign Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const Dropdown = ({ label, items, submenus, onClose }: DropdownProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  // Focus search input when dropdown opens (for More Articles)
  useEffect(() => {
    if (submenus && searchInputRef.current) {
      setTimeout(() => searchInputRef.current?.focus(), 100);
    }
  }, [submenus]);

  // Collect all searchable items from submenus
  const allSearchableItems = submenus?.flatMap(submenu => 
    submenu.items ? submenu.items.map(item => ({ ...item, category: submenu.title })) : [{ title: submenu.title, href: submenu.href, category: "General" }]
  ) || [];

  const filteredItems = searchQuery.trim() 
    ? allSearchableItems.filter(item => 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && filteredItems.length > 0) {
      navigate(filteredItems[0].href);
      onClose();
    } else if (e.key === "Escape") {
      onClose();
    }
  };

  const baseMenu =
    "absolute mt-0 bg-popover backdrop-blur-xl border border-border/70 rounded-2xl shadow-xl ring-1 ring-border/30 z-[130] origin-top animate-in fade-in-0 zoom-in-95 slide-in-from-top-1 duration-300 ease-out";

  // Multi-column grid layout for "More Articles"
  if (submenus) {
    // Split submenus into 2 rows for better layout
    const firstRow = submenus.slice(0, 4);
    const secondRow = submenus.slice(4);

    return (
      <div className={`${baseMenu} top-full right-0 w-[calc(100vw-3rem)] max-w-3xl`}>
        <ScrollArea className="max-h-[70vh]">
          <div className="p-5">
            {searchQuery.trim() ? (
              // Search results
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-2">
                {filteredItems.length > 0 ? (
                  filteredItems.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      onClick={onClose}
                      className="block py-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.title}
                    </Link>
                  ))
                ) : (
                  <div className="col-span-full py-4 text-sm text-muted-foreground text-center">
                    No articles found for "{searchQuery}"
                  </div>
                )}
              </div>
            ) : (
              <>
                {/* First row of categories */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-6 mb-6">
                  {firstRow.map((submenu) => (
                    <div key={submenu.href} className="group">
                      <Link 
                        to={submenu.href}
                        onClick={onClose}
                        className="flex items-center gap-2 mb-3 group/header"
                      >
                        <span className="text-primary transition-transform duration-200 group-hover/header:scale-110">{categoryIcons[submenu.title] || <BookOpen className="w-4 h-4" />}</span>
                        <span className="text-sm font-semibold text-primary group-hover/header:underline transition-all">
                          {submenu.title}
                        </span>
                      </Link>
                      <ul className="space-y-1.5">
                        {submenu.items?.slice(1, 6).map((item) => (
                          <li key={item.href}>
                            <Link
                              to={item.href}
                              onClick={onClose}
                              className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                            >
                              {item.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                      <Link
                        to={submenu.href}
                        onClick={onClose}
                        className="inline-block mt-2 text-xs font-medium text-primary/70 hover:text-primary transition-colors"
                      >
                        View all →
                      </Link>
                    </div>
                  ))}
                </div>

                {/* Divider */}
                {secondRow.length > 0 && <div className="border-t border-border/40 my-5" />}

                {/* Second row of categories */}
                {secondRow.length > 0 && (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-6">
                    {secondRow.map((submenu) => (
                      <div key={submenu.href} className="group">
                        <Link 
                          to={submenu.href}
                          onClick={onClose}
                          className="flex items-center gap-2 mb-3 group/header"
                        >
                          <span className="text-primary transition-transform duration-200 group-hover/header:scale-110">{categoryIcons[submenu.title] || <BookOpen className="w-4 h-4" />}</span>
                          <span className="text-sm font-semibold text-primary group-hover/header:underline transition-all">
                            {submenu.title}
                          </span>
                        </Link>
                        <ul className="space-y-1.5">
                          {submenu.items?.slice(1, 6).map((item) => (
                            <li key={item.href}>
                              <Link
                                to={item.href}
                                onClick={onClose}
                                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                              >
                                {item.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                        <Link
                          to={submenu.href}
                          onClick={onClose}
                          className="inline-block mt-2 text-xs font-medium text-primary/70 hover:text-primary transition-colors"
                        >
                          View all →
                        </Link>
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        </ScrollArea>
      </div>
    );
  }

  // Regular dropdown for simple items list - styled like More Articles
  // Get the overview link (first item)
  const overviewItem = items?.[0];
  const otherItems = items?.slice(1) || [];
  
  // Split items into columns (max 6 per column)
  const col1 = otherItems.slice(0, 7);
  const col2 = otherItems.slice(7, 14);

  return (
    <div className={`${baseMenu} top-full left-1/2 -translate-x-1/2 w-[28rem] max-w-[calc(100vw-2rem)]`}>
      {/* Header with icon */}
      <div className="px-5 pt-4 pb-2">
        <Link 
          to={overviewItem?.href || "#"}
          onClick={onClose}
          className="flex items-center gap-2 group/header"
        >
          <span className="text-primary transition-transform duration-200 group-hover/header:scale-110">
            {categoryIcons[label] || <BookOpen className="w-4 h-4" />}
          </span>
          <span className="text-sm font-semibold text-primary group-hover/header:underline transition-all whitespace-nowrap">
            {label}
          </span>
        </Link>
      </div>

      <ScrollArea className="max-h-[60vh]">
        <div className="p-5">
          <div className="grid grid-cols-2 gap-x-8 gap-y-1.5">
            {/* Column 1 */}
            <ul className="space-y-1.5">
              {col1.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    onClick={onClose}
                    className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
            {/* Column 2 */}
            {col2.length > 0 && (
              <ul className="space-y-1.5">
                {col2.map((item) => (
                  <li key={item.href}>
                    <Link
                      to={item.href}
                      onClick={onClose}
                      className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
          {/* View all link */}
          {overviewItem && (
            <Link
              to={overviewItem.href}
              onClick={onClose}
              className="inline-block mt-4 text-xs font-medium text-primary/70 hover:text-primary transition-colors"
            >
              View all →
            </Link>
          )}
        </div>
      </ScrollArea>
    </div>
  );
};

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedMobileSection, setExpandedMobileSection] = useState<string | null>(null);
  const [expandedMobileSubmenu, setExpandedMobileSubmenu] = useState<string | null>(null);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [headerSearchQuery, setHeaderSearchQuery] = useState("");
  const [showSearchResults, setShowSearchResults] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const searchRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // All searchable items for header search
  const allItems = Object.values(navigationItems).flatMap(cat => {
    if ('items' in cat && cat.items) {
      return cat.items.map(item => ({ ...item, category: cat.label }));
    }
    if ('submenus' in cat && cat.submenus) {
      return cat.submenus.flatMap(sub => 
        sub.items ? sub.items.map(item => ({ ...item, category: sub.title })) : []
      );
    }
    return [];
  });

  const headerSearchResults = headerSearchQuery.trim()
    ? allItems.filter(item =>
        item.title.toLowerCase().includes(headerSearchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(headerSearchQuery.toLowerCase())
      ).slice(0, 8)
    : [];

  // Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setShowSearchResults(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleMouseEnter = (key: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setOpenDropdown(key);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[120] glass">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-11 h-11 rounded-full bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300 overflow-hidden">
              <img src={logoIcon} alt="HairCare" className="w-10 h-10 object-contain" />
            </div>
            <span className="font-heading text-2xl font-semibold text-foreground">
              HairCare
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1 flex-1 justify-end">
            <nav className="flex items-center gap-1">
              {Object.entries(navigationItems).map(([key, category]) => {
                const hasItems = 'items' in category && category.items !== null;
                const hasSubmenus = 'submenus' in category;
                const isSimpleLink = 'href' in category && !hasItems && !hasSubmenus;
                
                return (
                  <div
                    key={key}
                    className="relative"
                    onMouseEnter={() => (hasItems || hasSubmenus) ? handleMouseEnter(key) : undefined}
                    onMouseLeave={handleMouseLeave}
                  >
                    {isSimpleLink ? (
                      <Link
                        to={(category as any).href}
                        className="inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-foreground/5"
                      >
                        {category.label}
                      </Link>
                    ) : (
                      <>
                        <button
                          className={`inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-foreground/5 ${openDropdown === key ? 'bg-foreground/5' : ''}`}
                        >
                          {category.label}
                          <ChevronDown className={`ml-1 h-3 w-3 transition-transform ${openDropdown === key ? 'rotate-180' : ''}`} />
                        </button>
                        {openDropdown === key && (
                          <Dropdown
                            label={category.label}
                            items={hasItems ? (category as any).items : undefined}
                            submenus={hasSubmenus ? (category as any).submenus : undefined}
                            onClose={() => setOpenDropdown(null)}
                          />
                        )}
                      </>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Header Search - on far right */}
            <div ref={searchRef} className="relative ml-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search..."
                  value={headerSearchQuery}
                  onChange={(e) => {
                    setHeaderSearchQuery(e.target.value);
                    setShowSearchResults(true);
                  }}
                  onFocus={() => setShowSearchResults(true)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && headerSearchResults.length > 0) {
                      navigate(headerSearchResults[0].href);
                      setHeaderSearchQuery('');
                      setShowSearchResults(false);
                    }
                    if (e.key === 'Escape') {
                      setShowSearchResults(false);
                    }
                  }}
                  className="w-48 h-9 pl-9 pr-3 text-sm bg-foreground/5 border border-border/50 rounded-lg placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all"
                />
              </div>
              {/* Search Results Dropdown */}
              {showSearchResults && headerSearchQuery.trim() && (
                <div className="absolute top-full right-0 mt-2 w-72 bg-popover backdrop-blur-xl border border-border/70 rounded-xl shadow-xl z-[100] max-h-80 overflow-y-auto animate-in fade-in-0 slide-in-from-top-2 duration-200">
                  {headerSearchResults.length > 0 ? (
                    <div className="p-2">
                      {headerSearchResults.map((item) => (
                        <Link
                          key={item.href}
                          to={item.href}
                          onClick={() => {
                            setHeaderSearchQuery('');
                            setShowSearchResults(false);
                          }}
                          className="block px-3 py-2 rounded-lg text-sm text-foreground hover:bg-accent/40 transition-colors"
                        >
                          <span>{item.title}</span>
                          <span className="text-xs text-muted-foreground ml-2">in {item.category}</span>
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <div className="px-4 py-3 text-sm text-muted-foreground text-center">
                      No results found
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Dark Mode Toggle */}
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="ml-3 p-2 rounded-lg hover:bg-foreground/5 transition-colors text-foreground"
              aria-label="Toggle dark mode"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* User Menu */}
            <UserMenu />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-xl hover:bg-foreground/5 transition-colors text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-border/50 pt-4 animate-fade-in max-h-[70vh] overflow-y-auto">
            {/* Mobile Dark Mode Toggle */}
            <div className="flex items-center justify-between px-2 py-3 mb-2 border-b border-border/30">
              <span className="font-medium text-foreground">Dark Mode</span>
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-lg bg-foreground/5 hover:bg-foreground/10 transition-colors text-foreground"
                aria-label="Toggle dark mode"
              >
                {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>
            
            <div className="space-y-2">
              {Object.entries(navigationItems).map(([key, category]) => {
                const hasItems = 'items' in category && category.items !== null;
                const hasSubmenus = 'submenus' in category;
                const isSimpleLink = 'href' in category && !hasItems && !hasSubmenus;
                
                return (
                  <div key={key}>
                    {isSimpleLink ? (
                      <Link
                        to={(category as any).href}
                        className="block font-medium text-foreground py-2 px-2 rounded-lg hover:bg-foreground/5"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {category.label}
                      </Link>
                    ) : hasSubmenus ? (
                      <>
                        <button
                          className="flex items-center justify-between w-full font-medium text-foreground py-2 px-2 rounded-lg hover:bg-foreground/5"
                          onClick={() => setExpandedMobileSection(expandedMobileSection === key ? null : key)}
                        >
                          {category.label}
                          <ChevronDown className={`w-4 h-4 transition-transform ${expandedMobileSection === key ? 'rotate-180' : ''}`} />
                        </button>
                        {expandedMobileSection === key && (
                          <div className="space-y-1 pl-4 mt-2">
                            {(category as any).submenus.map((submenu: any) => (
                              <div key={submenu.href}>
                                {submenu.items ? (
                                  <>
                                    <button
                                      className="flex items-center justify-between w-full text-muted-foreground hover:text-foreground py-1.5 text-sm"
                                      onClick={() => setExpandedMobileSubmenu(expandedMobileSubmenu === submenu.title ? null : submenu.title)}
                                    >
                                      {submenu.title}
                                      <ChevronDown className={`w-3 h-3 transition-transform ${expandedMobileSubmenu === submenu.title ? 'rotate-180' : ''}`} />
                                    </button>
                                    {expandedMobileSubmenu === submenu.title && (
                                      <ul className="space-y-1 pl-4 mt-1 max-h-48 overflow-y-auto">
                                        {submenu.items.map((item: any) => (
                                          <li key={item.href}>
                                            <Link
                                              to={item.href}
                                              className="block text-muted-foreground hover:text-foreground transition-colors text-xs py-1"
                                              onClick={() => setMobileMenuOpen(false)}
                                            >
                                              {item.title}
                                            </Link>
                                          </li>
                                        ))}
                                      </ul>
                                    )}
                                  </>
                                ) : (
                                  <Link
                                    to={submenu.href}
                                    className="block text-muted-foreground hover:text-foreground transition-colors text-sm py-1.5"
                                    onClick={() => setMobileMenuOpen(false)}
                                  >
                                    {submenu.title}
                                  </Link>
                                )}
                              </div>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <>
                        <button
                          className="flex items-center justify-between w-full font-medium text-foreground py-2 px-2 rounded-lg hover:bg-foreground/5"
                          onClick={() => setExpandedMobileSection(expandedMobileSection === key ? null : key)}
                        >
                          {category.label}
                          <ChevronDown className={`w-4 h-4 transition-transform ${expandedMobileSection === key ? 'rotate-180' : ''}`} />
                        </button>
                        {expandedMobileSection === key && hasItems && (
                          <ul className="space-y-1 pl-4 mt-2 max-h-60 overflow-y-auto">
                            {(category as any).items.map((item: any) => (
                              <li key={item.href}>
                                <Link
                                  to={item.href}
                                  className="block text-muted-foreground hover:text-foreground transition-colors text-sm py-1.5"
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  {item.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
