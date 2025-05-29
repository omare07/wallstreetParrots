import fs from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import { MediaItem, MediaStats } from '../models/media';

// Mark this file as server-only
import 'server-only';

// File path for media data
const DATA_DIR = path.join(process.cwd(), 'data');
const MEDIA_DIR = path.join(process.cwd(), 'public', 'uploads');
const MEDIA_FILE = path.join(DATA_DIR, 'media.json');

// Ensure the data and media directories exist
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

if (!fs.existsSync(MEDIA_DIR)) {
  fs.mkdirSync(MEDIA_DIR, { recursive: true });
}

// Initialize the media file if it doesn't exist
if (!fs.existsSync(MEDIA_FILE)) {
  fs.writeFileSync(MEDIA_FILE, JSON.stringify([], null, 2));
}

// Helper to read all media items
export const getAllMediaItems = (): MediaItem[] => {
  try {
    const data = fs.readFileSync(MEDIA_FILE, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading media items:', error);
    return [];
  }
};

// Helper to write all media items
const writeMediaItems = (items: MediaItem[]): void => {
  try {
    fs.writeFileSync(MEDIA_FILE, JSON.stringify(items, null, 2));
  } catch (error) {
    console.error('Error writing media items:', error);
  }
};

// Get a single media item by ID
export const getMediaItemById = (id: string): MediaItem | null => {
  const items = getAllMediaItems();
  return items.find((item) => item.id === id) || null;
};

// Save media file and metadata
export const saveMediaFile = async (
  file: Buffer,
  originalFilename: string, 
  mimeType: string,
  altText?: string
): Promise<MediaItem | null> => {
  try {
    // Generate unique filename
    const fileExt = path.extname(originalFilename);
    const filename = `${Date.now()}-${uuidv4()}${fileExt}`;
    const relativePath = `/uploads/${filename}`;
    const filePath = path.join(MEDIA_DIR, filename);
    
    // Write the file
    fs.writeFileSync(filePath, file);
    
    // Get file size
    const stats = fs.statSync(filePath);
    
    // Create media item
    const mediaItem: MediaItem = {
      id: uuidv4(),
      filename,
      originalFilename,
      path: relativePath,
      mimeType,
      size: stats.size,
      uploadedAt: new Date().toISOString(),
      altText: altText || '',
    };
    
    // Add dimensions if it's an image
    // In a real app, you would use a library like sharp to get image dimensions
    
    // Save to database
    const items = getAllMediaItems();
    items.push(mediaItem);
    writeMediaItems(items);
    
    return mediaItem;
  } catch (error) {
    console.error('Error saving media file:', error);
    return null;
  }
};

// Delete a media item
export const deleteMediaItem = (id: string): boolean => {
  try {
    const items = getAllMediaItems();
    const index = items.findIndex((item) => item.id === id);
    
    if (index === -1) return false;
    
    // Get the item to delete
    const itemToDelete = items[index];
    
    // Delete the file
    const filePath = path.join(process.cwd(), 'public', itemToDelete.path);
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }
    
    // Remove from database
    items.splice(index, 1);
    writeMediaItems(items);
    
    return true;
  } catch (error) {
    console.error('Error deleting media item:', error);
    return false;
  }
};

// Update a media item's metadata
export const updateMediaItem = (
  id: string, 
  updates: { altText?: string }
): MediaItem | null => {
  try {
    const items = getAllMediaItems();
    const index = items.findIndex((item) => item.id === id);
    
    if (index === -1) return null;
    
    // Update the item
    items[index] = {
      ...items[index],
      ...updates,
    };
    
    writeMediaItems(items);
    
    return items[index];
  } catch (error) {
    console.error('Error updating media item:', error);
    return null;
  }
};

// Get media stats
export const getMediaStats = (): MediaStats => {
  const items = getAllMediaItems();
  
  // Count by type
  const images = items.filter((item) => item.mimeType.startsWith('image/')).length;
  const documents = items.filter((item) => 
    item.mimeType.includes('pdf') || 
    item.mimeType.includes('document') || 
    item.mimeType.includes('spreadsheet')
  ).length;
  const other = items.length - images - documents;
  
  // Calculate total size
  const totalSize = items.reduce((acc, item) => acc + item.size, 0);
  
  return {
    total: items.length,
    images,
    documents,
    other,
    totalSize,
  };
}; 