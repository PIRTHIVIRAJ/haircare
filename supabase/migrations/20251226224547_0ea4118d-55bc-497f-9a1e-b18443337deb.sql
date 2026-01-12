-- Create storage bucket for hair/scalp photos
INSERT INTO storage.buckets (id, name, public)
VALUES ('hair-photos', 'hair-photos', false);

-- Allow anyone to upload photos (no auth required for this app)
CREATE POLICY "Anyone can upload hair photos"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'hair-photos');

-- Allow anyone to view photos they uploaded (by path)
CREATE POLICY "Anyone can view hair photos"
ON storage.objects FOR SELECT
USING (bucket_id = 'hair-photos');