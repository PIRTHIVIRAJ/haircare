import { useEffect } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  articleSchema?: {
    headline: string;
    description: string;
    datePublished?: string;
    dateModified?: string;
    author?: string;
  };
  faqSchema?: FAQItem[];
}

const SEOHead = ({ 
  title, 
  description, 
  canonicalUrl,
  articleSchema,
  faqSchema 
}: SEOHeadProps) => {
  useEffect(() => {
    document.title = title;
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    // Update canonical URL
    if (canonicalUrl) {
      let canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.setAttribute('rel', 'canonical');
        document.head.appendChild(canonical);
      }
      canonical.setAttribute('href', canonicalUrl);
    }

    // Remove existing JSON-LD scripts
    const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
    existingScripts.forEach(script => script.remove());

    // Add Article schema
    if (articleSchema) {
      const articleJsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": articleSchema.headline,
        "description": articleSchema.description,
        "author": {
          "@type": "Organization",
          "name": articleSchema.author || "HairCare.ai"
        },
        "publisher": {
          "@type": "Organization",
          "name": "HairCare.ai",
          "logo": {
            "@type": "ImageObject",
            "url": "https://haircare.ai/logo.png"
          }
        },
        "datePublished": articleSchema.datePublished || new Date().toISOString().split('T')[0],
        "dateModified": articleSchema.dateModified || new Date().toISOString().split('T')[0],
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": canonicalUrl || window.location.href
        }
      };

      const articleScript = document.createElement('script');
      articleScript.type = 'application/ld+json';
      articleScript.textContent = JSON.stringify(articleJsonLd);
      document.head.appendChild(articleScript);
    }

    // Add FAQ schema
    if (faqSchema && faqSchema.length > 0) {
      const faqJsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqSchema.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      };

      const faqScript = document.createElement('script');
      faqScript.type = 'application/ld+json';
      faqScript.textContent = JSON.stringify(faqJsonLd);
      document.head.appendChild(faqScript);
    }

    // Add Organization schema (always present)
    const orgJsonLd = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "HairCare.ai",
      "url": "https://haircare.ai",
      "logo": "https://haircare.ai/logo.png",
      "description": "AI-powered hair health and hair loss education platform"
    };

    const orgScript = document.createElement('script');
    orgScript.type = 'application/ld+json';
    orgScript.textContent = JSON.stringify(orgJsonLd);
    document.head.appendChild(orgScript);

    return () => {
      document.title = "HairCare.ai";
      // Clean up JSON-LD scripts on unmount
      const scripts = document.querySelectorAll('script[type="application/ld+json"]');
      scripts.forEach(script => script.remove());
    };
  }, [title, description, canonicalUrl, articleSchema, faqSchema]);

  return null;
};

export default SEOHead;
