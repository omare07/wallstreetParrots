export interface SiteSettings {
  // General settings
  siteName: string;
  siteDescription: string;
  siteKeywords: string;
  footerText: string;
  
  // Contact information
  contactEmail: string;
  socialLinks: {
    twitter?: string;
    instagram?: string;
    facebook?: string;
    linkedin?: string;
  };
  
  // Blog settings
  postsPerPage: number;
  showAuthor: boolean;
  showDate: boolean;
  showReadTime: boolean;
  
  // SEO settings
  defaultOgImage: string;
} 