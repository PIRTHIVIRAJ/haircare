import { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import ContentPageLayout from "./ContentPageLayout";
import ExpertReviewBadge from "./ExpertReviewBadge";
import ArticleReviewButton from "./ArticleReviewButton";

interface ArticlePageLayoutProps {
  children: ReactNode;
  articleSlug?: string;
  articleTitle?: string;
  articleCategory?: string;
  showToc?: boolean;
}

/**
 * Wrapper around ContentPageLayout that adds expert review functionality for articles.
 * Use this for article pages to show the "Reviewed by" badge and allow experts to review.
 */
const ArticlePageLayout = ({ 
  children, 
  articleSlug,
  articleTitle,
  articleCategory,
  showToc = true 
}: ArticlePageLayoutProps) => {
  const location = useLocation();
  
  // Extract slug from URL if not provided
  const slug = articleSlug || location.pathname.replace(/^\//, '');
  
  return (
    <ContentPageLayout showToc={showToc}>
      {/* Expert review controls - visible to verified experts */}
      {articleTitle && (
        <div className="flex justify-end mb-4">
          <ArticleReviewButton 
            articleSlug={slug}
            articleTitle={articleTitle}
            articleCategory={articleCategory}
          />
        </div>
      )}
      
      {children}
      
      {/* Expert review badge - shows which experts have reviewed this article */}
      <ExpertReviewBadge articleSlug={slug} className="mt-10" />
    </ContentPageLayout>
  );
};

export default ArticlePageLayout;
