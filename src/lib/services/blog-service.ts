import { BlogPost, CreateBlogPostInput, UpdateBlogPostInput } from '../models/blog';

// Get all blog posts
export const getAllBlogPosts = async (): Promise<BlogPost[]> => {
  try {
    const response = await fetch('/api/blogs');
    
    if (!response.ok) {
      throw new Error('Failed to fetch blog posts');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
};

// Get published blog posts
export const getPublishedBlogPosts = async (): Promise<BlogPost[]> => {
  try {
    const response = await fetch('/api/blogs?published=true');
    
    if (!response.ok) {
      throw new Error('Failed to fetch published blog posts');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching published blog posts:', error);
    return [];
  }
};

// Get blog post by ID
export const getBlogPostById = async (id: string): Promise<BlogPost | null> => {
  try {
    const response = await fetch(`/api/blogs/${id}`);
    
    if (!response.ok) {
      if (response.status === 404) {
        return null;
      }
      throw new Error('Failed to fetch blog post');
    }
    
    return await response.json();
  } catch (error) {
    console.error(`Error fetching blog post with ID ${id}:`, error);
    return null;
  }
};

// Get blog post by slug
export const getBlogPostBySlug = async (slug: string): Promise<BlogPost | null> => {
  try {
    const response = await fetch(`/api/blogs/slug/${slug}`);
    
    if (!response.ok) {
      if (response.status === 404) {
        return null;
      }
      throw new Error('Failed to fetch blog post');
    }
    
    return await response.json();
  } catch (error) {
    console.error(`Error fetching blog post with slug ${slug}:`, error);
    return null;
  }
};

// Create a new blog post
export const createBlogPost = async (input: CreateBlogPostInput): Promise<BlogPost | null> => {
  try {
    const response = await fetch('/api/blogs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(input),
    });
    
    if (!response.ok) {
      throw new Error('Failed to create blog post');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error creating blog post:', error);
    return null;
  }
};

// Update an existing blog post
export const updateBlogPost = async (id: string, input: UpdateBlogPostInput): Promise<BlogPost | null> => {
  try {
    const response = await fetch(`/api/blogs/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(input),
    });
    
    if (!response.ok) {
      throw new Error('Failed to update blog post');
    }
    
    return await response.json();
  } catch (error) {
    console.error(`Error updating blog post with ID ${id}:`, error);
    return null;
  }
};

// Delete a blog post
export const deleteBlogPost = async (id: string): Promise<boolean> => {
  try {
    const response = await fetch(`/api/blogs/${id}`, {
      method: 'DELETE',
    });
    
    if (!response.ok) {
      throw new Error('Failed to delete blog post');
    }
    
    return true;
  } catch (error) {
    console.error(`Error deleting blog post with ID ${id}:`, error);
    return false;
  }
};

// Get blog stats
export const getBlogStats = async () => {
  try {
    const response = await fetch('/api/blogs/stats');
    
    if (!response.ok) {
      throw new Error('Failed to fetch blog stats');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching blog stats:', error);
    return {
      total: 0,
      published: 0,
      draft: 0,
    };
  }
}; 