import fs from 'fs';
import path from 'path';
import { SiteSettings } from '../models/settings';

// Mark this file as server-only
import 'server-only';

// File path for settings data
const DATA_DIR = path.join(process.cwd(), 'data');
const SETTINGS_FILE = path.join(DATA_DIR, 'settings.json');

// Default settings
const DEFAULT_SETTINGS: SiteSettings = {
  siteName: 'WallStreet Parrots',
  siteDescription: 'High school investment club at Baltimore Polytechnic Institute',
  siteKeywords: 'investing, high school, finance, education, club, stock market',
  footerText: '© WallStreet Parrots. All rights reserved.',
  
  contactEmail: 'contact@wallstreetparrots.example.com',
  socialLinks: {
    twitter: 'https://twitter.com/example',
    instagram: 'https://instagram.com/example',
    facebook: 'https://facebook.com/example',
    linkedin: 'https://linkedin.com/company/example',
  },
  
  postsPerPage: 10,
  showAuthor: true,
  showDate: true,
  showReadTime: true,
  
  defaultOgImage: '/images/og-image.jpg',
};

// Ensure the data directory exists
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

// Initialize the settings file if it doesn't exist
if (!fs.existsSync(SETTINGS_FILE)) {
  fs.writeFileSync(SETTINGS_FILE, JSON.stringify(DEFAULT_SETTINGS, null, 2));
}

// Get all settings
export const getSettings = (): SiteSettings => {
  try {
    const data = fs.readFileSync(SETTINGS_FILE, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading settings:', error);
    return DEFAULT_SETTINGS;
  }
};

// Update settings
export const updateSettings = (updates: Partial<SiteSettings>): SiteSettings => {
  try {
    const currentSettings = getSettings();
    const updatedSettings = {
      ...currentSettings,
      ...updates,
    };
    
    fs.writeFileSync(SETTINGS_FILE, JSON.stringify(updatedSettings, null, 2));
    return updatedSettings;
  } catch (error) {
    console.error('Error updating settings:', error);
    return getSettings();
  }
};

// Reset settings to default
export const resetSettings = (): SiteSettings => {
  try {
    fs.writeFileSync(SETTINGS_FILE, JSON.stringify(DEFAULT_SETTINGS, null, 2));
    return DEFAULT_SETTINGS;
  } catch (error) {
    console.error('Error resetting settings:', error);
    return getSettings();
  }
}; 