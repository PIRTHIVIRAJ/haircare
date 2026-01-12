import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const COOKIE_CONSENT_KEY = "haircare-cookie-consent";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      // Small delay to prevent flash on page load
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-20 left-4 right-4 md:left-6 md:right-auto md:max-w-md z-50 animate-fade-in">
      <div className="bg-card border border-border rounded-2xl shadow-lg p-5">
        <div className="flex items-start justify-between gap-4 mb-4">
          <p className="text-sm text-foreground leading-relaxed">
            We use cookies to enhance your experience. By continuing to use this site, you agree to our use of cookies.{" "}
            <Link to="/privacy-policy" className="text-primary hover:underline">
              Learn more
            </Link>
          </p>
          <button
            onClick={handleDecline}
            className="text-muted-foreground hover:text-foreground transition-colors flex-shrink-0"
            aria-label="Close cookie consent"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
        <div className="flex gap-3">
          <Button
            variant="outline"
            size="sm"
            onClick={handleDecline}
            className="flex-1"
          >
            Decline
          </Button>
          <Button
            size="sm"
            onClick={handleAccept}
            className="flex-1"
          >
            Accept
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
