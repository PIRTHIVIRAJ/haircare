import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Expert, ExpertReview, Article } from '@/types/expert';
import { useAuth } from './useAuth';

export function useExpert() {
  const { user } = useAuth();
  const [expert, setExpert] = useState<Expert | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      fetchExpert();
    } else {
      setExpert(null);
      setLoading(false);
    }
  }, [user]);

  const fetchExpert = async () => {
    if (!user) return;
    
    setLoading(true);
    const { data, error } = await supabase
      .from('experts')
      .select('*')
      .eq('user_id', user.id)
      .maybeSingle();
    
    if (!error && data) {
      setExpert(data as Expert);
    }
    setLoading(false);
  };

  const createExpertApplication = async (expertData: Omit<Expert, 'id' | 'user_id' | 'status' | 'photo_status' | 'verified_at' | 'created_at' | 'updated_at'>) => {
    if (!user) return { error: new Error('Not authenticated') };

    const { data, error } = await supabase
      .from('experts')
      .insert({
        user_id: user.id,
        ...expertData
      })
      .select()
      .single();

    if (!error && data) {
      // Add expert role to user
      await supabase
        .from('user_roles')
        .insert({ user_id: user.id, role: 'expert' });
      
      setExpert(data as Expert);
    }

    return { data, error };
  };

  const updateExpert = async (updates: Partial<Expert>) => {
    if (!expert) return { error: new Error('No expert profile') };

    const { data, error } = await supabase
      .from('experts')
      .update(updates)
      .eq('id', expert.id)
      .select()
      .single();

    if (!error && data) {
      setExpert(data as Expert);
    }

    return { data, error };
  };

  const uploadPhoto = async (file: File) => {
    if (!user) return { error: new Error('Not authenticated') };

    const fileExt = file.name.split('.').pop();
    const fileName = `${user.id}/photo.${fileExt}`;

    const { error: uploadError } = await supabase.storage
      .from('expert-photos')
      .upload(fileName, file, { upsert: true });

    if (uploadError) return { error: uploadError };

    const { data: { publicUrl } } = supabase.storage
      .from('expert-photos')
      .getPublicUrl(fileName);

    // Update expert with new photo URL
    const { error: updateError } = await supabase
      .from('experts')
      .update({ 
        photo_url: publicUrl,
        photo_status: 'pending'
      })
      .eq('user_id', user.id);

    if (!updateError) {
      await fetchExpert();
    }

    return { url: publicUrl, error: updateError };
  };

  return {
    expert,
    loading,
    fetchExpert,
    createExpertApplication,
    updateExpert,
    uploadPhoto
  };
}

export function useExpertReviews(expertId?: string) {
  const [reviews, setReviews] = useState<(ExpertReview & { article: Article })[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (expertId) {
      fetchReviews();
    }
  }, [expertId]);

  const fetchReviews = async () => {
    if (!expertId) return;

    setLoading(true);
    const { data, error } = await supabase
      .from('expert_reviews')
      .select(`
        *,
        article:articles(*)
      `)
      .eq('expert_id', expertId)
      .order('reviewed_at', { ascending: false });

    if (!error && data) {
      setReviews(data as (ExpertReview & { article: Article })[]);
    }
    setLoading(false);
  };

  const withdrawReview = async (reviewId: string) => {
    const { error } = await supabase
      .from('expert_reviews')
      .update({ 
        status: 'withdrawn',
        withdrawn_at: new Date().toISOString()
      })
      .eq('id', reviewId);

    if (!error) {
      await fetchReviews();
    }

    return { error };
  };

  return {
    reviews,
    loading,
    fetchReviews,
    withdrawReview
  };
}

export function useArticleReviews(articleSlug: string) {
  const [reviews, setReviews] = useState<(ExpertReview & { expert: Expert })[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchReviews();
  }, [articleSlug]);

  const fetchReviews = async () => {
    setLoading(true);
    
    // First get article by slug
    const { data: articleData } = await supabase
      .from('articles')
      .select('id')
      .eq('slug', articleSlug)
      .maybeSingle();

    if (!articleData) {
      setLoading(false);
      return;
    }

    const { data, error } = await supabase
      .from('expert_reviews')
      .select(`
        *,
        expert:experts(*)
      `)
      .eq('article_id', articleData.id)
      .eq('status', 'active')
      .order('reviewed_at', { ascending: false });

    if (!error && data) {
      // Filter to only show reviews from verified experts with approved photos
      const filteredReviews = data.filter(
        r => r.expert?.status === 'verified' && r.expert?.photo_status === 'approved'
      );
      setReviews(filteredReviews as (ExpertReview & { expert: Expert })[]);
    }
    setLoading(false);
  };

  return {
    reviews,
    loading,
    fetchReviews
  };
}
