import { useState, useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { useExpert } from '@/hooks/useExpert';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { toast } from 'sonner';
import { ShieldCheck, CheckCircle } from 'lucide-react';

interface ArticleReviewButtonProps {
  articleSlug: string;
  articleTitle: string;
  articleCategory?: string;
}

const ArticleReviewButton = ({ articleSlug, articleTitle, articleCategory }: ArticleReviewButtonProps) => {
  const { user, isVerifiedExpert } = useAuth();
  const { expert } = useExpert();
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasReviewed, setHasReviewed] = useState(false);
  const [checks, setChecks] = useState({
    clinical_accuracy: false,
    educational_clarity: false,
    safety_appropriateness: false
  });

  useEffect(() => {
    if (expert && articleSlug) {
      checkExistingReview();
    }
  }, [expert, articleSlug]);

  const checkExistingReview = async () => {
    if (!expert) return;

    // Get article ID
    const { data: articleData } = await supabase
      .from('articles')
      .select('id')
      .eq('slug', articleSlug)
      .maybeSingle();

    if (!articleData) return;

    // Check for existing review
    const { data: reviewData } = await supabase
      .from('expert_reviews')
      .select('id, status')
      .eq('expert_id', expert.id)
      .eq('article_id', articleData.id)
      .eq('status', 'active')
      .maybeSingle();

    setHasReviewed(!!reviewData);
  };

  const handleSubmitReview = async () => {
    if (!expert) return;

    if (!checks.clinical_accuracy || !checks.educational_clarity || !checks.safety_appropriateness) {
      toast.error('Please confirm all review criteria');
      return;
    }

    setIsSubmitting(true);

    // Ensure article exists in database
    const { data: existingArticle } = await supabase
      .from('articles')
      .select('id')
      .eq('slug', articleSlug)
      .maybeSingle();

    let articleId = existingArticle?.id;

    if (!articleId) {
      // Create article record
      const { data: newArticle, error: articleError } = await supabase
        .from('articles')
        .insert({
          slug: articleSlug,
          title: articleTitle,
          category: articleCategory
        })
        .select('id')
        .single();

      if (articleError) {
        toast.error('Failed to register article');
        setIsSubmitting(false);
        return;
      }

      articleId = newArticle.id;
    }

    // Create review
    const { error } = await supabase
      .from('expert_reviews')
      .insert({
        expert_id: expert.id,
        article_id: articleId,
        clinical_accuracy: checks.clinical_accuracy,
        educational_clarity: checks.educational_clarity,
        safety_appropriateness: checks.safety_appropriateness
      });

    if (error) {
      if (error.code === '23505') {
        toast.error('You have already reviewed this article');
      } else {
        toast.error('Failed to submit review');
      }
    } else {
      toast.success('Review submitted successfully');
      setHasReviewed(true);
      setIsOpen(false);
    }

    setIsSubmitting(false);
  };

  // Only show for verified experts
  if (!user || !isVerifiedExpert || !expert) {
    return null;
  }

  if (hasReviewed) {
    return (
      <div className="inline-flex items-center gap-2 text-sm text-primary bg-primary/10 px-3 py-2 rounded-lg">
        <CheckCircle className="h-4 w-4" />
        You've reviewed this article
      </div>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2">
          <ShieldCheck className="h-4 w-4" />
          Mark as Reviewed
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-primary" />
            Review Article
          </DialogTitle>
          <DialogDescription>
            Confirm that this article meets our quality standards for public health information.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <p className="font-medium mb-4">{articleTitle}</p>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Checkbox 
                id="clinical_accuracy"
                checked={checks.clinical_accuracy}
                onCheckedChange={(checked) => 
                  setChecks({ ...checks, clinical_accuracy: checked as boolean })
                }
              />
              <div className="space-y-1">
                <Label htmlFor="clinical_accuracy" className="font-medium cursor-pointer">
                  Clinical Accuracy
                </Label>
                <p className="text-sm text-muted-foreground">
                  The medical and scientific information is accurate and up-to-date.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Checkbox 
                id="educational_clarity"
                checked={checks.educational_clarity}
                onCheckedChange={(checked) => 
                  setChecks({ ...checks, educational_clarity: checked as boolean })
                }
              />
              <div className="space-y-1">
                <Label htmlFor="educational_clarity" className="font-medium cursor-pointer">
                  Educational Clarity
                </Label>
                <p className="text-sm text-muted-foreground">
                  The content is clearly explained and accessible to the target audience.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Checkbox 
                id="safety_appropriateness"
                checked={checks.safety_appropriateness}
                onCheckedChange={(checked) => 
                  setChecks({ ...checks, safety_appropriateness: checked as boolean })
                }
              />
              <div className="space-y-1">
                <Label htmlFor="safety_appropriateness" className="font-medium cursor-pointer">
                  Safety & Appropriateness
                </Label>
                <p className="text-sm text-muted-foreground">
                  The advice is safe and does not encourage harmful practices.
                </p>
              </div>
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button 
            onClick={handleSubmitReview} 
            disabled={isSubmitting || !checks.clinical_accuracy || !checks.educational_clarity || !checks.safety_appropriateness}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Review'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ArticleReviewButton;
