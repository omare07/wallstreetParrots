export interface MediaItem {
  id: string;
  filename: string;
  originalFilename: string;
  path: string;
  mimeType: string;
  size: number;
  uploadedAt: string;
  width?: number;
  height?: number;
  altText?: string;
}

export interface MediaStats {
  total: number;
  images: number;
  documents: number;
  other: number;
  totalSize: number;
} 