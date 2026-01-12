import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { useExpert, useExpertReviews } from '@/hooks/useExpert';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';
import { SPECIALTIES, CREDENTIALS, EXPERIENCE_RANGES } from '@/types/expert';
import SEOHead from '@/components/SEOHead';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ShieldCheck, Upload, Eye, AlertCircle, CheckCircle, Clock, XCircle } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { format } from 'date-fns';

const StatusBadge = ({ status }: { status: string }) => {
  const variants: Record<string, { variant: 'default' | 'secondary' | 'destructive' | 'outline'; icon: React.ReactNode }> = {
    pending: { variant: 'secondary', icon: <Clock className="h-3 w-3 mr-1" /> },
    verified: { variant: 'default', icon: <CheckCircle className="h-3 w-3 mr-1" /> },
    rejected: { variant: 'destructive', icon: <XCircle className="h-3 w-3 mr-1" /> },
    suspended: { variant: 'destructive', icon: <AlertCircle className="h-3 w-3 mr-1" /> },
    approved: { variant: 'default', icon: <CheckCircle className="h-3 w-3 mr-1" /> },
    active: { variant: 'default', icon: <CheckCircle className="h-3 w-3 mr-1" /> },
    withdrawn: { variant: 'secondary', icon: <XCircle className="h-3 w-3 mr-1" /> }
  };

  const { variant, icon } = variants[status] || variants.pending;

  return (
    <Badge variant={variant} className="capitalize flex items-center w-fit">
      {icon}
      {status}
    </Badge>
  );
};

const ExpertDashboardPage = () => {
  const { user, loading: authLoading } = useAuth();
  const { expert, loading: expertLoading, updateExpert, uploadPhoto, fetchExpert } = useExpert();
  const { reviews, loading: reviewsLoading, withdrawReview } = useExpertReviews(expert?.id);
  const [isUpdating, setIsUpdating] = useState(false);
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    full_name: '',
    primary_credential: '',
    specialty: '',
    country: '',
    registration_number: '',
    certification_body: '',
    years_experience: '',
    bio: ''
  });

  // Sync form data with expert when loaded
  useState(() => {
    if (expert) {
      setFormData({
        full_name: expert.full_name || '',
        primary_credential: expert.primary_credential || '',
        specialty: expert.specialty || '',
        country: expert.country || '',
        registration_number: expert.registration_number || '',
        certification_body: expert.certification_body || '',
        years_experience: expert.years_experience || '',
        bio: expert.bio || ''
      });
    }
  });

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        toast.error('Please upload an image file');
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        toast.error('Image must be less than 5MB');
        return;
      }
      setPhotoFile(file);
      setPhotoPreview(URL.createObjectURL(file));
    }
  };

  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsUpdating(true);

    const { error } = await updateExpert(formData);

    if (error) {
      toast.error('Failed to update profile: ' + error.message);
    } else {
      toast.success('Profile updated successfully');
    }

    setIsUpdating(false);
  };

  const handleUploadPhoto = async () => {
    if (!photoFile) return;
    
    setIsUpdating(true);
    const { error } = await uploadPhoto(photoFile);
    
    if (error) {
      toast.error('Failed to upload photo');
    } else {
      toast.success('Photo uploaded! It will be reviewed before appearing publicly.');
      setPhotoFile(null);
      setPhotoPreview(null);
    }
    
    setIsUpdating(false);
  };

  const handleWithdrawReview = async (reviewId: string) => {
    const { error } = await withdrawReview(reviewId);
    if (error) {
      toast.error('Failed to withdraw review');
    } else {
      toast.success('Review withdrawn');
    }
  };

  if (authLoading || expertLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse">Loading...</div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  if (!expert) {
    return <Navigate to="/expert/signup" replace />;
  }

  const canReview = expert.status === 'verified';

  return (
    <>
      <SEOHead
        title="Expert Dashboard | HairCare.ai"
        description="Manage your expert profile and article reviews on HairCare.ai."
        canonicalUrl="https://haircare.ai/expert/dashboard"
      />
      <Header />
      <main className="min-h-screen bg-background py-8 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="font-heading text-2xl md:text-3xl font-semibold">Expert Dashboard</h1>
              <p className="text-muted-foreground mt-1">Manage your profile and reviews</p>
            </div>
            <StatusBadge status={expert.status} />
          </div>

          {expert.status === 'pending' && (
            <Alert className="mb-6">
              <Clock className="h-4 w-4" />
              <AlertDescription>
                Your application is pending review. You'll be notified once your profile is verified.
              </AlertDescription>
            </Alert>
          )}

          {expert.status === 'rejected' && (
            <Alert variant="destructive" className="mb-6">
              <XCircle className="h-4 w-4" />
              <AlertDescription>
                Your application was not approved. Please update your profile information and resubmit.
              </AlertDescription>
            </Alert>
          )}

          <Tabs defaultValue="profile" className="space-y-6">
            <TabsList>
              <TabsTrigger value="profile">Profile</TabsTrigger>
              <TabsTrigger value="reviews">Reviewed Articles</TabsTrigger>
            </TabsList>

            <TabsContent value="profile">
              <div className="grid gap-6 md:grid-cols-[280px_1fr]">
                {/* Photo Card */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Profile Photo</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex flex-col items-center">
                      {(photoPreview || expert.photo_url) ? (
                        <img 
                          src={photoPreview || expert.photo_url} 
                          alt={expert.full_name} 
                          className="w-32 h-32 rounded-full object-cover border-2 border-border"
                        />
                      ) : (
                        <div className="w-32 h-32 rounded-full bg-muted flex items-center justify-center border-2 border-dashed border-border">
                          <Upload className="h-10 w-10 text-muted-foreground" />
                        </div>
                      )}
                      {expert.photo_status && (
                        <div className="mt-3">
                          <StatusBadge status={expert.photo_status} />
                        </div>
                      )}
                    </div>
                    <Input
                      type="file"
                      accept="image/*"
                      onChange={handlePhotoChange}
                      className="text-sm"
                    />
                    {photoFile && (
                      <Button 
                        onClick={handleUploadPhoto} 
                        disabled={isUpdating}
                        size="sm"
                        className="w-full"
                      >
                        Upload New Photo
                      </Button>
                    )}
                    <p className="text-xs text-muted-foreground text-center">
                      Photos are reviewed before appearing publicly.
                    </p>
                  </CardContent>
                </Card>

                {/* Profile Form */}
                <Card>
                  <CardHeader>
                    <CardTitle>Professional Information</CardTitle>
                    <CardDescription>
                      Update your professional details. Changes may require re-verification.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleUpdateProfile} className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="full_name">Full Name</Label>
                        <Input
                          id="full_name"
                          value={formData.full_name}
                          onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label>Primary Credential</Label>
                          <Select 
                            value={formData.primary_credential}
                            onValueChange={(value) => setFormData({ ...formData, primary_credential: value })}
                          >
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              {CREDENTIALS.map((cred) => (
                                <SelectItem key={cred} value={cred}>{cred}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label>Specialty</Label>
                          <Select 
                            value={formData.specialty}
                            onValueChange={(value) => setFormData({ ...formData, specialty: value })}
                          >
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              {SPECIALTIES.map((spec) => (
                                <SelectItem key={spec} value={spec}>{spec}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="country">Country</Label>
                          <Input
                            id="country"
                            value={formData.country}
                            onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                          />
                        </div>

                        <div className="space-y-2">
                          <Label>Years of Experience</Label>
                          <Select 
                            value={formData.years_experience}
                            onValueChange={(value) => setFormData({ ...formData, years_experience: value })}
                          >
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              {EXPERIENCE_RANGES.map((range) => (
                                <SelectItem key={range} value={range}>{range}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="certification_body">Certification Body</Label>
                          <Input
                            id="certification_body"
                            value={formData.certification_body}
                            onChange={(e) => setFormData({ ...formData, certification_body: e.target.value })}
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="registration_number">Registration Number</Label>
                          <Input
                            id="registration_number"
                            value={formData.registration_number}
                            onChange={(e) => setFormData({ ...formData, registration_number: e.target.value })}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="bio">Professional Bio</Label>
                        <Textarea
                          id="bio"
                          value={formData.bio}
                          onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                          rows={4}
                        />
                      </div>

                      <Button type="submit" disabled={isUpdating || expert.status === 'suspended'}>
                        {isUpdating ? 'Saving...' : 'Save Changes'}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="reviews">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Reviewed Articles</CardTitle>
                      <CardDescription>
                        Articles you've reviewed for clinical accuracy and educational relevance.
                      </CardDescription>
                    </div>
                    {canReview && (
                      <Button asChild size="sm">
                        <Link to="/">Browse Articles</Link>
                      </Button>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  {!canReview ? (
                    <div className="text-center py-8 text-muted-foreground">
                      <ShieldCheck className="h-12 w-12 mx-auto mb-4 opacity-50" />
                      <p>You need to be verified before you can review articles.</p>
                    </div>
                  ) : reviewsLoading ? (
                    <div className="text-center py-8">Loading reviews...</div>
                  ) : reviews.length === 0 ? (
                    <div className="text-center py-8 text-muted-foreground">
                      <p>You haven't reviewed any articles yet.</p>
                      <Button asChild variant="outline" className="mt-4">
                        <Link to="/">Browse Articles to Review</Link>
                      </Button>
                    </div>
                  ) : (
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Article</TableHead>
                          <TableHead>Reviewed</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {reviews.map((review) => (
                          <TableRow key={review.id}>
                            <TableCell className="font-medium">
                              {review.article?.title || 'Unknown Article'}
                            </TableCell>
                            <TableCell>
                              {format(new Date(review.reviewed_at), 'MMM d, yyyy')}
                            </TableCell>
                            <TableCell>
                              <StatusBadge status={review.status} />
                            </TableCell>
                            <TableCell className="text-right space-x-2">
                              {review.article?.slug && (
                                <Button asChild variant="ghost" size="sm">
                                  <Link to={`/${review.article.slug}`}>
                                    <Eye className="h-4 w-4 mr-1" />
                                    View
                                  </Link>
                                </Button>
                              )}
                              {review.status === 'active' && (
                                <Button 
                                  variant="outline" 
                                  size="sm"
                                  onClick={() => handleWithdrawReview(review.id)}
                                >
                                  Withdraw
                                </Button>
                              )}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ExpertDashboardPage;
