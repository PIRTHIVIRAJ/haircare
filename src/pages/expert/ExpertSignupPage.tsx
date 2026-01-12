import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { useExpert } from '@/hooks/useExpert';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';
import { SPECIALTIES, CREDENTIALS, EXPERIENCE_RANGES } from '@/types/expert';
import SEOHead from '@/components/SEOHead';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ShieldCheck, Upload, AlertCircle } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

const ExpertSignupPage = () => {
  const navigate = useNavigate();
  const { user, loading: authLoading } = useAuth();
  const { expert, loading: expertLoading, createExpertApplication, uploadPhoto } = useExpert();
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.full_name || !formData.primary_credential || !formData.specialty || 
        !formData.country || !formData.years_experience) {
      toast.error('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);

    const { error } = await createExpertApplication(formData);

    if (error) {
      toast.error('Failed to submit application: ' + error.message);
      setIsSubmitting(false);
      return;
    }

    // Upload photo if provided
    if (photoFile) {
      const { error: photoError } = await uploadPhoto(photoFile);
      if (photoError) {
        toast.error('Application submitted but photo upload failed');
      }
    }

    setIsSubmitting(false);
    toast.success('Application submitted! We will review your profile shortly.');
    navigate('/expert/dashboard');
  };

  if (authLoading || expertLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse">Loading...</div>
      </div>
    );
  }

  if (!user) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-background py-12 px-4">
          <div className="max-w-lg mx-auto text-center">
            <ShieldCheck className="h-16 w-16 text-primary mx-auto mb-4" />
            <h1 className="font-heading text-2xl font-semibold mb-4">Become a Verified Expert</h1>
            <p className="text-muted-foreground mb-6">
              Join our network of verified hair and scalp health professionals. 
              Sign in or create an account to apply.
            </p>
            <Button asChild>
              <Link to="/auth">Sign In or Sign Up</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  if (expert) {
    navigate('/expert/dashboard');
    return null;
  }

  return (
    <>
      <SEOHead
        title="Become a Verified Expert | HairCare.ai"
        description="Apply to become a verified hair and scalp health expert on HairCare.ai. Review articles and help users with your professional expertise."
        canonicalUrl="https://haircare.ai/expert/signup"
      />
      <Header />
      <main className="min-h-screen bg-background py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <ShieldCheck className="h-12 w-12 text-primary mx-auto mb-4" />
            <h1 className="font-heading text-3xl font-semibold mb-2">Expert Application</h1>
            <p className="text-muted-foreground">
              Help us verify your credentials to join our expert review network.
            </p>
          </div>

          <Alert className="mb-6">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              Your application will be reviewed by our team. Only verified experts can review articles publicly.
            </AlertDescription>
          </Alert>

          <Card>
            <form onSubmit={handleSubmit}>
              <CardHeader>
                <CardTitle>Professional Information</CardTitle>
                <CardDescription>
                  Please provide accurate information for verification purposes.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Photo Upload */}
                <div className="space-y-2">
                  <Label>Profile Photo</Label>
                  <div className="flex items-center gap-4">
                    {photoPreview ? (
                      <img 
                        src={photoPreview} 
                        alt="Preview" 
                        className="w-24 h-24 rounded-full object-cover border-2 border-border"
                      />
                    ) : (
                      <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center border-2 border-dashed border-border">
                        <Upload className="h-8 w-8 text-muted-foreground" />
                      </div>
                    )}
                    <div>
                      <Input
                        type="file"
                        accept="image/*"
                        onChange={handlePhotoChange}
                        className="max-w-xs"
                      />
                      <p className="text-xs text-muted-foreground mt-1">
                        Square, professional headshot. Max 5MB.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Full Name */}
                <div className="space-y-2">
                  <Label htmlFor="full_name">Full Name *</Label>
                  <Input
                    id="full_name"
                    placeholder="Dr. Jane Smith"
                    value={formData.full_name}
                    onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
                    required
                  />
                </div>

                {/* Credentials */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Primary Credential *</Label>
                    <Select 
                      value={formData.primary_credential}
                      onValueChange={(value) => setFormData({ ...formData, primary_credential: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select credential" />
                      </SelectTrigger>
                      <SelectContent>
                        {CREDENTIALS.map((cred) => (
                          <SelectItem key={cred} value={cred}>{cred}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Specialty *</Label>
                    <Select 
                      value={formData.specialty}
                      onValueChange={(value) => setFormData({ ...formData, specialty: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select specialty" />
                      </SelectTrigger>
                      <SelectContent>
                        {SPECIALTIES.map((spec) => (
                          <SelectItem key={spec} value={spec}>{spec}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Location and Experience */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="country">Country *</Label>
                    <Input
                      id="country"
                      placeholder="United States"
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Years of Experience *</Label>
                    <Select 
                      value={formData.years_experience}
                      onValueChange={(value) => setFormData({ ...formData, years_experience: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select range" />
                      </SelectTrigger>
                      <SelectContent>
                        {EXPERIENCE_RANGES.map((range) => (
                          <SelectItem key={range} value={range}>{range}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Registration */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="certification_body">Certification Body</Label>
                    <Input
                      id="certification_body"
                      placeholder="e.g. American Board of Dermatology"
                      value={formData.certification_body}
                      onChange={(e) => setFormData({ ...formData, certification_body: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="registration_number">Registration Number</Label>
                    <Input
                      id="registration_number"
                      placeholder="e.g. MD12345"
                      value={formData.registration_number}
                      onChange={(e) => setFormData({ ...formData, registration_number: e.target.value })}
                    />
                  </div>
                </div>

                {/* Bio */}
                <div className="space-y-2">
                  <Label htmlFor="bio">Professional Bio</Label>
                  <Textarea
                    id="bio"
                    placeholder="Brief description of your expertise and experience..."
                    value={formData.bio}
                    onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                    rows={4}
                  />
                </div>
              </CardContent>
              <CardFooter className="flex-col gap-4">
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? 'Submitting Application...' : 'Submit Application'}
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  By submitting, you confirm that all information provided is accurate and verifiable.
                </p>
              </CardFooter>
            </form>
          </Card>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ExpertSignupPage;
