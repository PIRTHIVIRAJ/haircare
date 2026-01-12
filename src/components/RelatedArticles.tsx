import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface RelatedArticle {
  title: string;
  href: string;
  description: string;
}

interface RelatedArticlesProps {
  articles: RelatedArticle[];
  title?: string;
}

const RelatedArticles = ({ articles, title = "Related Articles" }: RelatedArticlesProps) => {
  return (
    <section className="mt-12">
      <h2 className="font-heading text-2xl font-semibold text-foreground mb-6">
        {title}
      </h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {articles.map((article, index) => (
          <Link 
            key={index}
            to={article.href}
            className="group p-5 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-soft transition-all duration-300"
          >
            <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
              {article.title}
            </h3>
            <p className="text-sm text-muted-foreground mb-3">
              {article.description}
            </p>
            <span className="inline-flex items-center text-sm text-primary font-medium">
              Read more
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default RelatedArticles;
