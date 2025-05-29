import { SiteSettings } from '../models/settings';

// Get site settings
export const getSettings = async (): Promise<SiteSettings | null> => {
  try {
    const response = await fetch('/api/settings');
    
    if (!response.ok) {
      throw new Error('Failed to fetch settings');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching settings:', error);
    return null;
  }
};

// Update site settings
export const updateSettings = async (
  updates: Partial<SiteSettings>
): Promise<SiteSettings | null> => {
  try {
    const response = await fetch('/api/settings', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updates),
    });
    
    if (!response.ok) {
      throw new Error('Failed to update settings');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error updating settings:', error);
    return null;
  }
};

// Reset settings to default
export const resetSettings = async (): Promise<SiteSettings | null> => {
  try {
    const response = await fetch('/api/settings/reset', {
      method: 'POST',
    });
    
    if (!response.ok) {
      throw new Error('Failed to reset settings');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error resetting settings:', error);
    return null;
  }
}; 