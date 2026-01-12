export type ExpertStatus = 'pending' | 'verified' | 'rejected' | 'suspended';
export type PhotoStatus = 'pending' | 'approved' | 'rejected';
export type AppRole = 'user' | 'expert' | 'admin';

export interface Expert {
  id: string;
  user_id: string;
  full_name: string;
  primary_credential: string;
  specialty: string;
  country: string;
  registration_number?: string;
  certification_body?: string;
  years_experience: string;
  photo_url?: string;
  photo_thumbnail_48?: string;
  photo_thumbnail_96?: string;
  bio?: string;
  status: ExpertStatus;
  photo_status: PhotoStatus;
  verified_at?: string;
  created_at: string;
  updated_at: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  category?: string;
  last_updated: string;
  needs_rereview: boolean;
  created_at: string;
}

export interface ExpertReview {
  id: string;
  expert_id: string;
  article_id: string;
  clinical_accuracy: boolean;
  educational_clarity: boolean;
  safety_appropriateness: boolean;
  status: 'active' | 'withdrawn';
  reviewed_at: string;
  withdrawn_at?: string;
  created_at: string;
  expert?: Expert;
  article?: Article;
}

export interface UserRole {
  id: string;
  user_id: string;
  role: AppRole;
  created_at: string;
}

export interface Profile {
  id: string;
  user_id: string;
  full_name?: string;
  email?: string;
  avatar_url?: string;
  created_at: string;
  updated_at: string;
}

export interface AdminAuditLog {
  id: string;
  admin_user_id?: string;
  action: string;
  target_type: string;
  target_id?: string;
  details?: Record<string, unknown>;
  created_at: string;
}

export const SPECIALTIES = [
  'Dermatologist',
  'Trichologist',
  'Endocrinologist',
  'Nutritionist',
  'Plastic Surgeon',
  'General Practitioner',
  'Other'
] as const;

export const CREDENTIALS = [
  'MD',
  'MBBS',
  'PhD',
  'DO',
  'DNP',
  'PA-C',
  'NP',
  'RN',
  'Other'
] as const;

export const EXPERIENCE_RANGES = [
  '0-2 years',
  '3-5 years',
  '6-10 years',
  '11-20 years',
  '20+ years'
] as const;
