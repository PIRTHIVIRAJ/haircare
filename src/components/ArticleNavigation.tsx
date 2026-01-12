import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface ArticleLink {
  title: string;
  href: string;
}

interface ArticleNavigationProps {
  previous?: ArticleLink;
  next?: ArticleLink;
  relatedArticles?: ArticleLink[];
  sectionTitle?: string;
}

const ArticleNavigation = ({ 
  previous, 
  next, 
  relatedArticles = [],
  sectionTitle = "Related Articles"
}: ArticleNavigationProps) => {
  return (
    <div className="mt-12 space-y-8">
      {/* Previous/Next Navigation */}
      {(previous || next) && (
        <div className="flex flex-col sm:flex-row justify-between gap-4 pt-8 border-t border-border">
          {previous ? (
            <Link 
              to={previous.href}
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <div className="text-left">
                <span className="text-xs uppercase tracking-wide block">Previous</span>
                <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">{previous.title}</span>
              </div>
            </Link>
          ) : <div />}
          
          {next ? (
            <Link 
              to={next.href}
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group sm:text-right"
            >
              <div className="text-right">
                <span className="text-xs uppercase tracking-wide block">Next</span>
                <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">{next.title}</span>
              </div>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          ) : <div />}
        </div>
      )}

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="font-heading text-lg font-semibold text-foreground mb-4">
            {sectionTitle}
          </h3>
          <ul className="grid sm:grid-cols-2 gap-3">
            {relatedArticles.map((article) => (
              <li key={article.href}>
                <Link 
                  to={article.href}
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1"
                >
                  {article.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ArticleNavigation;
