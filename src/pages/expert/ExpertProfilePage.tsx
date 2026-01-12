import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Expert, ExpertReview, Article } from '@/types/expert';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import SEOHead from '@/components/SEOHead';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ShieldCheck, MapPin, Briefcase, Award, Calendar, FileText } from 'lucide-react';
import { format } from 'date-fns';

const ExpertProfilePage = () => {
  const { expertId } = useParams<{ expertId: string }>();
  const [expert, setExpert] = useState<Expert | null>(null);
  const [reviews, setReviews] = useState<(ExpertReview & { article: Article })[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (expertId) {
      fetchExpert();
    }
  }, [expertId]);

  const fetchExpert = async () => {
    setLoading(true);

    // Fetch expert (only if verified)
    const { data: expertData, error } = await supabase
      .from('experts')
      .select('*')
      .eq('id', expertId)
      .eq('status', 'verified')
      .maybeSingle();

    if (error || !expertData) {
      setLoading(false);
      return;
    }

    setExpert(expertData as Expert);

    // Fetch their active reviews
    const { data: reviewsData } = await supabase
      .from('expert_reviews')
      .select(`
        *,
        article:articles(*)
      `)
      .eq('expert_id', expertId)
      .eq('status', 'active')
      .order('reviewed_at', { ascending: false });

    if (reviewsData) {
      setReviews(reviewsData as (ExpertReview & { article: Article })[]);
    }

    setLoading(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse">Loading...</div>
      </div>
    );
  }

  if (!expert) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-background py-12 px-4">
          <div className="max-w-lg mx-auto text-center">
            <h1 className="font-heading text-2xl font-semibold mb-4">Expert Not Found</h1>
            <p className="text-muted-foreground mb-6">
              This expert profile doesn't exist or isn't publicly available.
            </p>
            <Link to="/" className="text-primary hover:underline">
              Return to Home
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const showPhoto = expert.photo_status === 'approved' && expert.photo_url;

  return (
    <>
      <SEOHead
        title={`${expert.full_name}, ${expert.primary_credential} | Verified Expert - HairCare.ai`}
        description={`${expert.full_name} is a verified ${expert.specialty} on HairCare.ai with ${expert.years_experience} of experience.`}
        canonicalUrl={`https://haircare.ai/expert/${expert.id}`}
      />
      <Header />
      <main className="min-h-screen bg-background py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Profile Header */}
          <Card className="mb-8">
            <CardContent className="pt-8">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <Avatar className="h-32 w-32 border-4 border-primary/20">
                  {showPhoto ? (
                    <AvatarImage 
                      src={expert.photo_thumbnail_96 || expert.photo_url} 
                      alt={expert.full_name} 
                    />
                  ) : null}
                  <AvatarFallback className="text-3xl bg-primary/10 text-primary">
                    {expert.full_name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                
                <div className="flex-1 text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                    <h1 className="font-heading text-2xl md:text-3xl font-semibold">
                      {expert.full_name}, {expert.primary_credential}
                    </h1>
                    <Badge variant="default" className="gap-1">
                      <ShieldCheck className="h-3 w-3" />
                      Verified
                    </Badge>
                  </div>
                  
                  <p className="text-lg text-primary mb-4">{expert.specialty}</p>
                  
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm text-muted-foreground">
                    {expert.country && (
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {expert.country}
                      </span>
                    )}
                    <span className="flex items-center gap-1">
                      <Briefcase className="h-4 w-4" />
                      {expert.years_experience}
                    </span>
                    {expert.certification_body && (
                      <span className="flex items-center gap-1">
                        <Award className="h-4 w-4" />
                        {expert.certification_body}
                      </span>
                    )}
                  </div>

                  {expert.bio && (
                    <p className="mt-4 text-foreground max-w-2xl">
                      {expert.bio}
                    </p>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Reviewed Articles */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Reviewed Articles ({reviews.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              {reviews.length === 0 ? (
                <p className="text-muted-foreground text-center py-4">
                  No reviewed articles yet.
                </p>
              ) : (
                <div className="space-y-3">
                  {reviews.map((review) => (
                    <Link
                      key={review.id}
                      to={`/${review.article.slug}`}
                      className="block p-4 rounded-lg border border-border hover:bg-muted transition-colors"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="font-medium text-foreground hover:text-primary">
                            {review.article.title}
                          </h3>
                          {review.article.category && (
                            <p className="text-sm text-muted-foreground capitalize">
                              {review.article.category}
                            </p>
                          )}
                        </div>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground flex-shrink-0">
                          <Calendar className="h-3 w-3" />
                          {format(new Date(review.reviewed_at), 'MMM d, yyyy')}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Disclaimer */}
          <p className="text-xs text-muted-foreground text-center mt-8 max-w-2xl mx-auto">
            Expert review confirms clinical accuracy and educational relevance of content. 
            It does not constitute a professional endorsement or replace personalized medical advice.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ExpertProfilePage;
