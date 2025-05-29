import { MediaItem, MediaStats } from '../models/media';

// Get all media items
export const getAllMediaItems = async (): Promise<MediaItem[]> => {
  try {
    const response = await fetch('/api/media');
    
    if (!response.ok) {
      throw new Error('Failed to fetch media items');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching media items:', error);
    return [];
  }
};

// Get media item by ID
export const getMediaItemById = async (id: string): Promise<MediaItem | null> => {
  try {
    const response = await fetch(`/api/media/${id}`);
    
    if (!response.ok) {
      if (response.status === 404) {
        return null;
      }
      throw new Error('Failed to fetch media item');
    }
    
    return await response.json();
  } catch (error) {
    console.error(`Error fetching media item with ID ${id}:`, error);
    return null;
  }
};

// Upload a new media file
export const uploadMedia = async (
  file: File, 
  altText?: string
): Promise<MediaItem | null> => {
  try {
    const formData = new FormData();
    formData.append('file', file);
    
    if (altText) {
      formData.append('altText', altText);
    }
    
    const response = await fetch('/api/media', {
      method: 'POST',
      body: formData,
    });
    
    if (!response.ok) {
      throw new Error('Failed to upload media');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error uploading media:', error);
    return null;
  }
};

// Update a media item
export const updateMediaItem = async (
  id: string, 
  updates: { altText?: string }
): Promise<MediaItem | null> => {
  try {
    const response = await fetch(`/api/media/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updates),
    });
    
    if (!response.ok) {
      throw new Error('Failed to update media item');
    }
    
    return await response.json();
  } catch (error) {
    console.error(`Error updating media item with ID ${id}:`, error);
    return null;
  }
};

// Delete a media item
export const deleteMediaItem = async (id: string): Promise<boolean> => {
  try {
    const response = await fetch(`/api/media/${id}`, {
      method: 'DELETE',
    });
    
    if (!response.ok) {
      throw new Error('Failed to delete media item');
    }
    
    return true;
  } catch (error) {
    console.error(`Error deleting media item with ID ${id}:`, error);
    return false;
  }
};

// Get media stats
export const getMediaStats = async (): Promise<MediaStats> => {
  try {
    const response = await fetch('/api/media/stats');
    
    if (!response.ok) {
      throw new Error('Failed to fetch media stats');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching media stats:', error);
    return {
      total: 0,
      images: 0,
      documents: 0,
      other: 0,
      totalSize: 0,
    };
  }
}; 