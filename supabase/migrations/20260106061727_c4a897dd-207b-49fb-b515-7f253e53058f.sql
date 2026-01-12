-- Create enum for expert verification status
CREATE TYPE public.expert_status AS ENUM ('pending', 'verified', 'rejected', 'suspended');

-- Create enum for photo approval status
CREATE TYPE public.photo_status AS ENUM ('pending', 'approved', 'rejected');

-- Create enum for app roles
CREATE TYPE public.app_role AS ENUM ('user', 'expert', 'admin');

-- Create user_roles table for role-based access
CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role app_role NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE (user_id, role)
);

-- Enable RLS on user_roles
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Create profiles table for all users
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL UNIQUE,
  full_name TEXT,
  email TEXT,
  avatar_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Create experts table for expert-specific data
CREATE TABLE public.experts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL UNIQUE,
  full_name TEXT NOT NULL,
  primary_credential TEXT NOT NULL,
  specialty TEXT NOT NULL,
  country TEXT NOT NULL,
  registration_number TEXT,
  certification_body TEXT,
  years_experience TEXT NOT NULL,
  photo_url TEXT,
  photo_thumbnail_48 TEXT,
  photo_thumbnail_96 TEXT,
  bio TEXT,
  status expert_status NOT NULL DEFAULT 'pending',
  photo_status photo_status NOT NULL DEFAULT 'pending',
  verified_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.experts ENABLE ROW LEVEL SECURITY;

-- Create articles table for tracking
CREATE TABLE public.articles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  category TEXT,
  last_updated TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  needs_rereview BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.articles ENABLE ROW LEVEL SECURITY;

-- Create expert_reviews table
CREATE TABLE public.expert_reviews (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  expert_id UUID REFERENCES public.experts(id) ON DELETE CASCADE NOT NULL,
  article_id UUID REFERENCES public.articles(id) ON DELETE CASCADE NOT NULL,
  clinical_accuracy BOOLEAN NOT NULL DEFAULT true,
  educational_clarity BOOLEAN NOT NULL DEFAULT true,
  safety_appropriateness BOOLEAN NOT NULL DEFAULT true,
  status TEXT NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'withdrawn')),
  reviewed_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  withdrawn_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE (expert_id, article_id)
);

ALTER TABLE public.expert_reviews ENABLE ROW LEVEL SECURITY;

-- Create admin audit log
CREATE TABLE public.admin_audit_log (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  admin_user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  action TEXT NOT NULL,
  target_type TEXT NOT NULL,
  target_id UUID,
  details JSONB,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.admin_audit_log ENABLE ROW LEVEL SECURITY;

-- Security definer function to check roles
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  )
$$;

-- Function to check if user is admin
CREATE OR REPLACE FUNCTION public.is_admin(_user_id UUID)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT public.has_role(_user_id, 'admin')
$$;

-- Function to check if user is verified expert
CREATE OR REPLACE FUNCTION public.is_verified_expert(_user_id UUID)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.experts
    WHERE user_id = _user_id
      AND status = 'verified'
  )
$$;

-- RLS Policies for user_roles
CREATE POLICY "Users can view their own roles"
ON public.user_roles FOR SELECT
USING (auth.uid() = user_id);

CREATE POLICY "Admins can view all roles"
ON public.user_roles FOR SELECT
USING (public.is_admin(auth.uid()));

CREATE POLICY "Admins can manage roles"
ON public.user_roles FOR ALL
USING (public.is_admin(auth.uid()));

-- RLS Policies for profiles
CREATE POLICY "Users can view their own profile"
ON public.profiles FOR SELECT
USING (auth.uid() = user_id);

CREATE POLICY "Users can update their own profile"
ON public.profiles FOR UPDATE
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own profile"
ON public.profiles FOR INSERT
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Public can view profiles"
ON public.profiles FOR SELECT
USING (true);

-- RLS Policies for experts
CREATE POLICY "Experts can view their own record"
ON public.experts FOR SELECT
USING (auth.uid() = user_id);

CREATE POLICY "Experts can update their own record"
ON public.experts FOR UPDATE
USING (auth.uid() = user_id AND status != 'suspended');

CREATE POLICY "Users can create expert application"
ON public.experts FOR INSERT
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Public can view verified experts"
ON public.experts FOR SELECT
USING (status = 'verified');

CREATE POLICY "Admins can view all experts"
ON public.experts FOR SELECT
USING (public.is_admin(auth.uid()));

CREATE POLICY "Admins can update all experts"
ON public.experts FOR UPDATE
USING (public.is_admin(auth.uid()));

-- RLS Policies for articles
CREATE POLICY "Anyone can view articles"
ON public.articles FOR SELECT
USING (true);

CREATE POLICY "Admins can manage articles"
ON public.articles FOR ALL
USING (public.is_admin(auth.uid()));

CREATE POLICY "Verified experts can insert articles"
ON public.articles FOR INSERT
WITH CHECK (public.is_verified_expert(auth.uid()));

-- RLS Policies for expert_reviews
CREATE POLICY "Anyone can view active reviews"
ON public.expert_reviews FOR SELECT
USING (status = 'active');

CREATE POLICY "Verified experts can create reviews"
ON public.expert_reviews FOR INSERT
WITH CHECK (
  public.is_verified_expert(auth.uid()) AND
  expert_id IN (SELECT id FROM public.experts WHERE user_id = auth.uid())
);

CREATE POLICY "Experts can update their own reviews"
ON public.expert_reviews FOR UPDATE
USING (expert_id IN (SELECT id FROM public.experts WHERE user_id = auth.uid()));

CREATE POLICY "Admins can view all reviews"
ON public.expert_reviews FOR SELECT
USING (public.is_admin(auth.uid()));

-- RLS Policies for admin_audit_log
CREATE POLICY "Admins can view audit log"
ON public.admin_audit_log FOR SELECT
USING (public.is_admin(auth.uid()));

CREATE POLICY "Admins can insert audit log"
ON public.admin_audit_log FOR INSERT
WITH CHECK (public.is_admin(auth.uid()));

-- Trigger to update updated_at
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE TRIGGER update_profiles_updated_at
BEFORE UPDATE ON public.profiles
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_experts_updated_at
BEFORE UPDATE ON public.experts
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Trigger to create profile on user signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (user_id, email, full_name)
  VALUES (NEW.id, NEW.email, NEW.raw_user_meta_data ->> 'full_name');
  
  -- Give every new user the 'user' role by default
  INSERT INTO public.user_roles (user_id, role)
  VALUES (NEW.id, 'user');
  
  RETURN NEW;
END;
$$;

CREATE TRIGGER on_auth_user_created
AFTER INSERT ON auth.users
FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();