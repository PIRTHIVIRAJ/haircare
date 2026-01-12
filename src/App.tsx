import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { AuthProvider } from "@/hooks/useAuth";
import CookieConsent from "@/components/CookieConsent";
import ScrollToTop from "@/components/ScrollToTop";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import Index from "./pages/Index";

// Auth & Expert Pages
import AuthPage from "./pages/AuthPage";
import ExpertSignupPage from "./pages/expert/ExpertSignupPage";
import ExpertDashboardPage from "./pages/expert/ExpertDashboardPage";
import ExpertProfilePage from "./pages/expert/ExpertProfilePage";
import AdminDashboardPage from "./pages/admin/AdminDashboardPage";
import NotFound from "./pages/NotFound";
import HairLossPage from "./pages/HairLossPage";
import HairLossMenPage from "./pages/HairLossMenPage";
import HairLossWomenPage from "./pages/HairLossWomenPage";
import AndrogeneticAlopeciaPage from "./pages/AndrogeneticAlopeciaPage";

import HairSheddingPage from "./pages/HairSheddingPage";
import MinoxidilPage from "./pages/MinoxidilPage";
import ScalpCarePage from "./pages/ScalpCarePage";
import SitemapPage from "./pages/SitemapPage";
import AboutPage from "./pages/AboutPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsOfServicePage from "./pages/TermsOfServicePage";

// Hair Loss Decisions Section
import HairLossDecisionsPage from "./pages/HairLossDecisionsPage";
import TemporaryVsPermanentPage from "./pages/hair-loss-decisions/TemporaryVsPermanentPage";
import NormalForAgePage from "./pages/hair-loss-decisions/NormalForAgePage";
import TreatOrWaitPage from "./pages/hair-loss-decisions/TreatOrWaitPage";
import FirstStepsPage from "./pages/hair-loss-decisions/FirstStepsPage";
import LifestyleOnlyPage from "./pages/hair-loss-decisions/LifestyleOnlyPage";
import MedicalSignsPage from "./pages/hair-loss-decisions/MedicalSignsPage";
import RedFlagsPage from "./pages/hair-loss-decisions/RedFlagsPage";
import EarlyReversibilityPage from "./pages/hair-loss-decisions/EarlyReversibilityPage";
import ChoosingTreatmentPage from "./pages/hair-loss-decisions/ChoosingTreatmentPage";
import UntreatedHairLossPage from "./pages/hair-loss-decisions/UntreatedHairLossPage";

// Section Landing Pages
import HairTypesPage from "./pages/HairTypesPage";
import HairRoutinesPage from "./pages/HairRoutinesPage";
import ScalpHealthPage from "./pages/ScalpHealthPage";
import HairGrowthPage from "./pages/HairGrowthPage";
import HairProductsPage from "./pages/HairProductsPage";

// Hair Loss Section Articles
import SuddenHairLossPage from "./pages/hair-loss/SuddenHairLossPage";
import CausesInWomenPage from "./pages/hair-loss/CausesInWomenPage";
import CausesInMenPage from "./pages/hair-loss/CausesInMenPage";
import GeneticVsHormonalPage from "./pages/hair-loss/GeneticVsHormonalPage";
import StressRelatedPage from "./pages/hair-loss/StressRelatedPage";
import TelogenEffluviumGuidePage from "./pages/hair-loss/TelogenEffluviumGuidePage";
import ThinningVsSheddingPage from "./pages/hair-loss/ThinningVsSheddingPage";
import DiagnosisPage from "./pages/hair-loss/DiagnosisPage";
import MedicalTestsPage from "./pages/hair-loss/MedicalTestsPage";
import WhenToSeeDoctorPage from "./pages/hair-loss/WhenToSeeDoctorPage";

// Scalp Health Section Articles
import HealthyScalpPage from "./pages/scalp-health/HealthyScalpPage";
import DandruffVsDryScalpPage from "./pages/scalp-health/DandruffVsDryScalpPage";
import SeborrheicDermatitisPage from "./pages/scalp-health/SeborrheicDermatitisPage";
import PsoriasisPage from "./pages/scalp-health/PsoriasisPage";
import ScalpAcnePage from "./pages/scalp-health/ScalpAcnePage";
import ItchyScalpPage from "./pages/scalp-health/ItchyScalpPage";
import FungalInfectionsPage from "./pages/scalp-health/FungalInfectionsPage";
import InflammationHairLossPage from "./pages/scalp-health/InflammationHairLossPage";
import ExfoliationPage from "./pages/scalp-health/ExfoliationPage";
import BestIngredientsPage from "./pages/scalp-health/BestIngredientsPage";

// Hair Types Section Articles
import IdentifyHairTypePage from "./pages/hair-types/IdentifyHairTypePage";
import CurlyHairCarePage from "./pages/hair-types/CurlyHairCarePage";
import StraightHairCarePage from "./pages/hair-types/StraightHairCarePage";
import WavyHairCarePage from "./pages/hair-types/WavyHairCarePage";
import FineVsThinPage from "./pages/hair-types/FineVsThinPage";
import DryVsDamagedPage from "./pages/hair-types/DryVsDamagedPage";
import FrizzyHairPage from "./pages/hair-types/FrizzyHairPage";
import OilyScalpDryEndsPage from "./pages/hair-types/OilyScalpDryEndsPage";
import AgingHairPage from "./pages/hair-types/AgingHairPage";
import EthnicHairCarePage from "./pages/hair-types/EthnicHairCarePage";

// Hair Routines Section Articles
import ByHairTypePage from "./pages/hair-routines/ByHairTypePage";
import HowOftenWashPage from "./pages/hair-routines/HowOftenWashPage";
import MorningVsNightPage from "./pages/hair-routines/MorningVsNightPage";
import BrushingHairPage from "./pages/hair-routines/BrushingHairPage";
import BlowDryVsAirDryPage from "./pages/hair-routines/BlowDryVsAirDryPage";
import PreventBreakagePage from "./pages/hair-routines/PreventBreakagePage";
import SleepHabitsPage from "./pages/hair-routines/SleepHabitsPage";
import CommonMistakesPage from "./pages/hair-routines/CommonMistakesPage";
import SeasonalCarePage from "./pages/hair-routines/SeasonalCarePage";
import TravelCarePage from "./pages/hair-routines/TravelCarePage";

// Hair Growth Section Articles
import HowFastHairGrowsPage from "./pages/hair-growth/HowFastHairGrowsPage";
import CanHairRegrowPage from "./pages/hair-growth/CanHairRegrowPage";
import GrowthCyclePage from "./pages/hair-growth/GrowthCyclePage";
import NaturalMethodsPage from "./pages/hair-growth/NaturalMethodsPage";
import MinoxidilGrowthPage from "./pages/hair-growth/MinoxidilGrowthPage";
import RosemaryOilPage from "./pages/hair-growth/RosemaryOilPage";
import SupplementsPage from "./pages/hair-growth/SupplementsPage";
import RegrowthTimelinePage from "./pages/hair-growth/RegrowthTimelinePage";
import SignsOfRegrowthPage from "./pages/hair-growth/SignsOfRegrowthPage";
import MythsPage from "./pages/hair-growth/MythsPage";

// Hair Products Section Articles
import ChooseShampooPage from "./pages/hair-products/ChooseShampooPage";
import SulfateFreePage from "./pages/hair-products/SulfateFreePage";
import SiliconesPage from "./pages/hair-products/SiliconesPage";
import RepairIngredientsPage from "./pages/hair-products/RepairIngredientsPage";
import ProteinVsMoisturePage from "./pages/hair-products/ProteinVsMoisturePage";
import HairOilsComparisonPage from "./pages/hair-products/HairOilsComparisonPage";
import LeaveInConditionersPage from "./pages/hair-products/LeaveInConditionersPage";
import HeatProtectantsPage from "./pages/hair-products/HeatProtectantsPage";
import HairMasksPage from "./pages/hair-products/HairMasksPage";
import SalonVsHomePage from "./pages/hair-products/SalonVsHomePage";

// Women's Hair Section
import WomensHairPage from "./pages/HairLossWomenLandingPage";
import PostpartumHairLossPage from "./pages/womens-hair/PostpartumHairLossPage";
import PregnancyChangesPage from "./pages/womens-hair/PregnancyChangesPage";
import PCOSHairLossPage from "./pages/womens-hair/PCOSHairLossPage";
import MenopausePage from "./pages/womens-hair/MenopausePage";
import HormonalHairLossPage from "./pages/womens-hair/HormonalHairLossPage";
import IronDeficiencyPage from "./pages/womens-hair/IronDeficiencyPage";
import ThyroidPage from "./pages/womens-hair/ThyroidPage";
import BirthControlPage from "./pages/womens-hair/BirthControlPage";
import StoppingContraceptionPage from "./pages/womens-hair/StoppingContraceptionPage";
import WhenToSeekHelpPage from "./pages/womens-hair/WhenToSeekHelpPage";

// Men's Hair Section
import MensHairPage from "./pages/MensHairPage";
import MalePatternBaldnessPage from "./pages/mens-hair/MalePatternBaldnessPage";
import WhenItStartsPage from "./pages/mens-hair/WhenItStartsPage";
import HairlineVsCrownPage from "./pages/mens-hair/HairlineVsCrownPage";
import MensTreatmentsPage from "./pages/mens-hair/TreatmentsPage";
import FinasteridePage from "./pages/mens-hair/FinasteridePage";
import MinoxidilFoamVsLiquidPage from "./pages/mens-hair/MinoxidilFoamVsLiquidPage";
import MensMythsPage from "./pages/mens-hair/MythsPage";
import MensStressPage from "./pages/mens-hair/StressPage";
import HairTransplantPage from "./pages/mens-hair/HairTransplantPage";
import MaintenancePage from "./pages/mens-hair/MaintenancePage";

// Hair Nutrition Section
import HairNutritionPage from "./pages/HairNutritionPage";
import BestFoodsPage from "./pages/hair-nutrition/BestFoodsPage";
import DeficienciesPage from "./pages/hair-nutrition/DeficienciesPage";
import ProteinPage from "./pages/hair-nutrition/ProteinPage";
import KeyNutrientsPage from "./pages/hair-nutrition/KeyNutrientsPage";
import CrashDietingPage from "./pages/hair-nutrition/CrashDietingPage";
import SleepPage from "./pages/hair-nutrition/SleepPage";
import ExercisePage from "./pages/hair-nutrition/ExercisePage";
import SmokingPage from "./pages/hair-nutrition/SmokingPage";
import AlcoholPage from "./pages/hair-nutrition/AlcoholPage";
import GutHealthPage from "./pages/hair-nutrition/GutHealthPage";

// Hair FAQs Section
import HairFAQsPage from "./pages/HairFAQsPage";
import CuttingHairGrowthPage from "./pages/hair-faqs/CuttingHairGrowthPage";
import HatsCauseHairLossPage from "./pages/hair-faqs/HatsCauseHairLossPage";
import WashingDailyPage from "./pages/hair-faqs/WashingDailyPage";
import StressGreyHairPage from "./pages/hair-faqs/StressGreyHairPage";
import NaturalVsChemicalPage from "./pages/hair-faqs/NaturalVsChemicalPage";
import CanHairLossBeReversedPage from "./pages/hair-faqs/CanHairLossBeReversedPage";
import TreatmentTimelinePage from "./pages/hair-faqs/TreatmentTimelinePage";
import AgingHairLossPage from "./pages/hair-faqs/AgingHairLossPage";
import NormalSheddingPage from "./pages/hair-faqs/NormalSheddingPage";
import CommonMythsPage from "./pages/hair-faqs/CommonMythsPage";

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/hair-loss" element={<HairLossPage />} />
          <Route path="/hair-loss/men" element={<HairLossMenPage />} />
          <Route path="/hair-loss/women" element={<HairLossWomenPage />} />
          <Route path="/conditions/androgenetic-alopecia" element={<AndrogeneticAlopeciaPage />} />
          
          {/* Telogen Effluvium - redirect old URL to consolidated page */}
          <Route path="/conditions/telogen-effluvium" element={<Navigate to="/hair-loss/telogen-effluvium" replace />} />
          
          <Route path="/symptoms/hair-shedding" element={<HairSheddingPage />} />
          <Route path="/treatments/minoxidil" element={<MinoxidilPage />} />
          <Route path="/hair-health/scalp-care" element={<ScalpCarePage />} />
          <Route path="/sitemap" element={<SitemapPage />} />
          
          {/* Section Landing Pages */}
          <Route path="/hair-types" element={<HairTypesPage />} />
          <Route path="/hair-routines" element={<HairRoutinesPage />} />
          <Route path="/scalp-health" element={<ScalpHealthPage />} />
          <Route path="/hair-growth" element={<HairGrowthPage />} />
          <Route path="/hair-products" element={<HairProductsPage />} />
          
          {/* Hair Loss Section Articles */}
          <Route path="/hair-loss/sudden-hair-loss" element={<SuddenHairLossPage />} />
          <Route path="/hair-loss/causes-in-women" element={<CausesInWomenPage />} />
          <Route path="/hair-loss/causes-in-men" element={<CausesInMenPage />} />
          <Route path="/hair-loss/genetic-vs-hormonal" element={<GeneticVsHormonalPage />} />
          <Route path="/hair-loss/stress-related" element={<StressRelatedPage />} />
          <Route path="/hair-loss/telogen-effluvium" element={<TelogenEffluviumGuidePage />} />
          <Route path="/hair-loss/thinning-vs-shedding" element={<ThinningVsSheddingPage />} />
          <Route path="/hair-loss/diagnosis" element={<DiagnosisPage />} />
          <Route path="/hair-loss/medical-tests" element={<MedicalTestsPage />} />
          <Route path="/hair-loss/when-to-see-a-doctor" element={<WhenToSeeDoctorPage />} />
          
          {/* Scalp Health Section Articles */}
          <Route path="/scalp-health/healthy-scalp" element={<HealthyScalpPage />} />
          <Route path="/scalp-health/dandruff-vs-dry-scalp" element={<DandruffVsDryScalpPage />} />
          <Route path="/scalp-health/seborrheic-dermatitis" element={<SeborrheicDermatitisPage />} />
          <Route path="/scalp-health/psoriasis" element={<PsoriasisPage />} />
          <Route path="/scalp-health/acne" element={<ScalpAcnePage />} />
          <Route path="/scalp-health/itchy-scalp-no-dandruff" element={<ItchyScalpPage />} />
          <Route path="/scalp-health/fungal-infections" element={<FungalInfectionsPage />} />
          <Route path="/scalp-health/inflammation-hair-loss" element={<InflammationHairLossPage />} />
          <Route path="/scalp-health/exfoliation" element={<ExfoliationPage />} />
          <Route path="/scalp-health/best-ingredients" element={<BestIngredientsPage />} />
          
          {/* Hair Types Section Articles */}
          <Route path="/hair-types/identify-your-hair-type" element={<IdentifyHairTypePage />} />
          <Route path="/hair-types/curly-hair-care" element={<CurlyHairCarePage />} />
          <Route path="/hair-types/straight-hair-care" element={<StraightHairCarePage />} />
          <Route path="/hair-types/wavy-hair-care" element={<WavyHairCarePage />} />
          <Route path="/hair-types/fine-vs-thin" element={<FineVsThinPage />} />
          <Route path="/hair-types/dry-vs-damaged" element={<DryVsDamagedPage />} />
          <Route path="/hair-types/frizzy-hair" element={<FrizzyHairPage />} />
          <Route path="/hair-types/oily-scalp-dry-ends" element={<OilyScalpDryEndsPage />} />
          <Route path="/hair-types/aging-hair" element={<AgingHairPage />} />
          <Route path="/hair-types/ethnic-hair-care" element={<EthnicHairCarePage />} />
          
          {/* Hair Routines Section Articles */}
          <Route path="/hair-routines/by-hair-type" element={<ByHairTypePage />} />
          <Route path="/hair-routines/how-often-wash" element={<HowOftenWashPage />} />
          <Route path="/hair-routines/morning-vs-night" element={<MorningVsNightPage />} />
          <Route path="/hair-routines/brushing-hair" element={<BrushingHairPage />} />
          <Route path="/hair-routines/blow-dry-vs-air-dry" element={<BlowDryVsAirDryPage />} />
          <Route path="/hair-routines/prevent-breakage" element={<PreventBreakagePage />} />
          <Route path="/hair-routines/sleep-habits" element={<SleepHabitsPage />} />
          <Route path="/hair-routines/common-mistakes" element={<CommonMistakesPage />} />
          <Route path="/hair-routines/seasonal-care" element={<SeasonalCarePage />} />
          <Route path="/hair-routines/travel-care" element={<TravelCarePage />} />
          
          {/* Hair Growth Section Articles */}
          <Route path="/hair-growth/how-fast-does-hair-grow" element={<HowFastHairGrowsPage />} />
          <Route path="/hair-growth/can-hair-regrow" element={<CanHairRegrowPage />} />
          <Route path="/hair-growth/growth-cycle" element={<GrowthCyclePage />} />
          <Route path="/hair-growth/natural-methods" element={<NaturalMethodsPage />} />
          <Route path="/hair-growth/minoxidil" element={<MinoxidilGrowthPage />} />
          <Route path="/hair-growth/rosemary-oil" element={<RosemaryOilPage />} />
          <Route path="/hair-growth/supplements" element={<SupplementsPage />} />
          <Route path="/hair-growth/regrowth-timeline" element={<RegrowthTimelinePage />} />
          <Route path="/hair-growth/signs-of-regrowth" element={<SignsOfRegrowthPage />} />
          <Route path="/hair-growth/myths" element={<MythsPage />} />
          
          {/* Hair Products Section Articles */}
          <Route path="/hair-products/choose-shampoo" element={<ChooseShampooPage />} />
          <Route path="/hair-products/sulfate-free" element={<SulfateFreePage />} />
          <Route path="/hair-products/silicones" element={<SiliconesPage />} />
          <Route path="/hair-products/repair-ingredients" element={<RepairIngredientsPage />} />
          <Route path="/hair-products/protein-vs-moisture" element={<ProteinVsMoisturePage />} />
          <Route path="/hair-products/hair-oils-comparison" element={<HairOilsComparisonPage />} />
          <Route path="/hair-products/leave-in-conditioners" element={<LeaveInConditionersPage />} />
          <Route path="/hair-products/heat-protectants" element={<HeatProtectantsPage />} />
          <Route path="/hair-products/hair-masks" element={<HairMasksPage />} />
          <Route path="/hair-products/salon-vs-home" element={<SalonVsHomePage />} />
          
          {/* Women's Hair Section */}
          <Route path="/womens-hair" element={<WomensHairPage />} />
          <Route path="/womens-hair/postpartum-hair-loss" element={<PostpartumHairLossPage />} />
          <Route path="/womens-hair/pregnancy-changes" element={<PregnancyChangesPage />} />
          <Route path="/womens-hair/pcos-hair-loss" element={<PCOSHairLossPage />} />
          <Route path="/womens-hair/menopause" element={<MenopausePage />} />
          <Route path="/womens-hair/hormonal-hair-loss" element={<HormonalHairLossPage />} />
          <Route path="/womens-hair/iron-deficiency" element={<IronDeficiencyPage />} />
          <Route path="/womens-hair/thyroid" element={<ThyroidPage />} />
          <Route path="/womens-hair/birth-control" element={<BirthControlPage />} />
          <Route path="/womens-hair/stopping-contraception" element={<StoppingContraceptionPage />} />
          <Route path="/womens-hair/when-to-seek-help" element={<WhenToSeekHelpPage />} />
          
          {/* Men's Hair Section */}
          <Route path="/mens-hair" element={<MensHairPage />} />
          <Route path="/mens-hair/male-pattern-baldness" element={<MalePatternBaldnessPage />} />
          <Route path="/mens-hair/when-it-starts" element={<WhenItStartsPage />} />
          <Route path="/mens-hair/hairline-vs-crown" element={<HairlineVsCrownPage />} />
          <Route path="/mens-hair/treatments" element={<MensTreatmentsPage />} />
          <Route path="/mens-hair/finasteride" element={<FinasteridePage />} />
          <Route path="/mens-hair/minoxidil-foam-vs-liquid" element={<MinoxidilFoamVsLiquidPage />} />
          <Route path="/mens-hair/myths" element={<MensMythsPage />} />
          <Route path="/mens-hair/stress" element={<MensStressPage />} />
          <Route path="/mens-hair/hair-transplant" element={<HairTransplantPage />} />
          <Route path="/mens-hair/maintenance" element={<MaintenancePage />} />
          
          {/* Hair Nutrition Section */}
          <Route path="/hair-nutrition" element={<HairNutritionPage />} />
          <Route path="/hair-nutrition/best-foods" element={<BestFoodsPage />} />
          <Route path="/hair-nutrition/deficiencies" element={<DeficienciesPage />} />
          <Route path="/hair-nutrition/protein" element={<ProteinPage />} />
          <Route path="/hair-nutrition/key-nutrients" element={<KeyNutrientsPage />} />
          <Route path="/hair-nutrition/crash-dieting" element={<CrashDietingPage />} />
          <Route path="/hair-nutrition/sleep" element={<SleepPage />} />
          <Route path="/hair-nutrition/exercise" element={<ExercisePage />} />
          <Route path="/hair-nutrition/smoking" element={<SmokingPage />} />
          <Route path="/hair-nutrition/alcohol" element={<AlcoholPage />} />
          <Route path="/hair-nutrition/gut-health" element={<GutHealthPage />} />
          
          {/* Hair FAQs Section */}
          <Route path="/hair-faqs" element={<HairFAQsPage />} />
          <Route path="/hair-faqs/cutting-hair-growth" element={<CuttingHairGrowthPage />} />
          <Route path="/hair-faqs/do-hats-cause-hair-loss" element={<HatsCauseHairLossPage />} />
          <Route path="/hair-faqs/washing-daily" element={<WashingDailyPage />} />
          <Route path="/hair-faqs/stress-grey-hair" element={<StressGreyHairPage />} />
          <Route path="/hair-faqs/natural-vs-chemical" element={<NaturalVsChemicalPage />} />
          <Route path="/hair-faqs/can-hair-loss-be-reversed" element={<CanHairLossBeReversedPage />} />
          <Route path="/hair-faqs/treatment-timeline" element={<TreatmentTimelinePage />} />
          <Route path="/hair-faqs/aging-hair-loss" element={<AgingHairLossPage />} />
          <Route path="/hair-faqs/normal-shedding" element={<NormalSheddingPage />} />
          <Route path="/hair-faqs/common-myths" element={<CommonMythsPage />} />
          
          {/* Hair Loss Decisions Section */}
          <Route path="/hair-loss-decisions" element={<HairLossDecisionsPage />} />
          <Route path="/hair-loss-decisions/temporary-vs-permanent" element={<TemporaryVsPermanentPage />} />
          <Route path="/hair-loss-decisions/normal-for-age" element={<NormalForAgePage />} />
          <Route path="/hair-loss-decisions/treat-or-wait" element={<TreatOrWaitPage />} />
          <Route path="/hair-loss-decisions/first-steps" element={<FirstStepsPage />} />
          <Route path="/hair-loss-decisions/lifestyle-only" element={<LifestyleOnlyPage />} />
          <Route path="/hair-loss-decisions/medical-signs" element={<MedicalSignsPage />} />
          <Route path="/hair-loss-decisions/red-flags" element={<RedFlagsPage />} />
          <Route path="/hair-loss-decisions/early-reversibility" element={<EarlyReversibilityPage />} />
          <Route path="/hair-loss-decisions/choosing-treatment" element={<ChoosingTreatmentPage />} />
          <Route path="/hair-loss-decisions/untreated-hair-loss" element={<UntreatedHairLossPage />} />
          
          {/* About & Legal Pages */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-of-service" element={<TermsOfServicePage />} />
          
          {/* Auth & Expert Routes */}
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/expert/signup" element={<ExpertSignupPage />} />
          <Route path="/expert/dashboard" element={<ExpertDashboardPage />} />
          <Route path="/expert/:expertId" element={<ExpertProfilePage />} />
          <Route path="/admin" element={<AdminDashboardPage />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
          <ScrollToTopButton />
          <CookieConsent />
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
  </ThemeProvider>
);

export default App;