import { Link } from 'react-router-dom';
import { useArticleReviews } from '@/hooks/useExpert';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { ShieldCheck } from 'lucide-react';

interface ExpertReviewBadgeProps {
  articleSlug: string;
  className?: string;
}

const ExpertReviewBadge = ({ articleSlug, className = '' }: ExpertReviewBadgeProps) => {
  const { reviews, loading } = useArticleReviews(articleSlug);

  if (loading || reviews.length === 0) {
    return null;
  }

  const displayedReviews = reviews.slice(0, 3);
  const remainingCount = reviews.length - 3;

  return (
    <div className={`bg-primary/5 border border-primary/20 rounded-lg p-4 ${className}`}>
      <div className="flex items-start gap-3">
        <ShieldCheck className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
        <div className="flex-1 min-w-0">
          <p className="text-sm text-foreground font-medium mb-2">
            Reviewed for clinical accuracy and educational relevance by:
          </p>
          <div className="flex items-center flex-wrap gap-2">
            <TooltipProvider>
              {displayedReviews.map((review) => (
                <Tooltip key={review.id}>
                  <TooltipTrigger asChild>
                    <Link 
                      to={`/expert/${review.expert.id}`}
                      className="flex items-center gap-2 bg-background hover:bg-muted rounded-full pr-3 pl-1 py-1 transition-colors border border-border"
                    >
                      <Avatar className="h-6 w-6">
                        <AvatarImage 
                          src={review.expert.photo_thumbnail_48 || review.expert.photo_url} 
                          alt={review.expert.full_name} 
                        />
                        <AvatarFallback className="text-xs">
                          {review.expert.full_name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap">
                        {review.expert.full_name}, {review.expert.primary_credential}
                      </span>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{review.expert.specialty}</p>
                    <p className="text-xs text-muted-foreground">{review.expert.years_experience}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </TooltipProvider>
            {remainingCount > 0 && (
              <span className="text-sm text-muted-foreground">
                +{remainingCount} verified hair & scalp specialist{remainingCount > 1 ? 's' : ''}
              </span>
            )}
          </div>
        </div>
      </div>
      <p className="text-xs text-muted-foreground mt-3 ml-8">
        Expert review confirms clinical accuracy and educational relevance. It does not replace personalized medical advice.
      </p>
    </div>
  );
};

export default ExpertReviewBadge;
