-- Create storage bucket for expert photos
INSERT INTO storage.buckets (id, name, public) VALUES ('expert-photos', 'expert-photos', true);

-- Storage policies for expert photos
CREATE POLICY "Anyone can view expert photos"
ON storage.objects FOR SELECT
USING (bucket_id = 'expert-photos');

CREATE POLICY "Authenticated users can upload their own expert photos"
ON storage.objects FOR INSERT
WITH CHECK (
  bucket_id = 'expert-photos' AND
  auth.uid()::text = (storage.foldername(name))[1]
);

CREATE POLICY "Users can update their own expert photos"
ON storage.objects FOR UPDATE
USING (
  bucket_id = 'expert-photos' AND
  auth.uid()::text = (storage.foldername(name))[1]
);

CREATE POLICY "Users can delete their own expert photos"
ON storage.objects FOR DELETE
USING (
  bucket_id = 'expert-photos' AND
  auth.uid()::text = (storage.foldername(name))[1]
);