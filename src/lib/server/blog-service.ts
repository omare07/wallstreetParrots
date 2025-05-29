import fs from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import { BlogPost, CreateBlogPostInput, UpdateBlogPostInput } from '../models/blog';

// Mark this file as server-only
import 'server-only';

// File path for blog data
const DATA_DIR = path.join(process.cwd(), 'data');
const BLOG_FILE = path.join(DATA_DIR, 'blogs.json');

// Ensure the data directory exists
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

// Initialize the blog file if it doesn't exist
if (!fs.existsSync(BLOG_FILE)) {
  fs.writeFileSync(BLOG_FILE, JSON.stringify([], null, 2));
}

// Helper to read all blog posts
export const getAllBlogPosts = (): BlogPost[] => {
  try {
    const data = fs.readFileSync(BLOG_FILE, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading blog posts:', error);
    return [];
  }
};

// Helper to write all blog posts
const writeBlogPosts = (blogs: BlogPost[]): void => {
  try {
    fs.writeFileSync(BLOG_FILE, JSON.stringify(blogs, null, 2));
  } catch (error) {
    console.error('Error writing blog posts:', error);
  }
};

// Generate a slug from title
export const generateSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^\w\s]/g, '')
    .replace(/\s+/g, '-');
};

// Get a single blog post by ID
export const getBlogPostById = (id: string): BlogPost | null => {
  const blogs = getAllBlogPosts();
  return blogs.find((blog) => blog.id === id) || null;
};

// Get a single blog post by slug
export const getBlogPostBySlug = (slug: string): BlogPost | null => {
  const blogs = getAllBlogPosts();
  return blogs.find((blog) => blog.slug === slug) || null;
};

// Create a new blog post
export const createBlogPost = (input: CreateBlogPostInput): BlogPost => {
  const blogs = getAllBlogPosts();
  
  const newBlog: BlogPost = {
    id: uuidv4(),
    title: input.title,
    slug: input.slug || generateSlug(input.title),
    excerpt: input.excerpt,
    content: input.content,
    date: new Date().toISOString().split('T')[0], // YYYY-MM-DD format
    author: input.author,
    authorRole: input.authorRole,
    imageSrc: input.imageSrc,
    category: input.category,
    readTime: input.readTime,
    published: input.published,
  };
  
  // Check if slug already exists
  const slugExists = blogs.some((blog) => blog.slug === newBlog.slug);
  if (slugExists) {
    newBlog.slug = `${newBlog.slug}-${Date.now()}`;
  }
  
  blogs.push(newBlog);
  writeBlogPosts(blogs);
  
  return newBlog;
};

// Update an existing blog post
export const updateBlogPost = (id: string, input: UpdateBlogPostInput): BlogPost | null => {
  const blogs = getAllBlogPosts();
  const index = blogs.findIndex((blog) => blog.id === id);
  
  if (index === -1) return null;
  
  // Handle slug update to ensure uniqueness
  if (input.slug) {
    const slugExists = blogs.some((blog, i) => blog.slug === input.slug && i !== index);
    if (slugExists) {
      input.slug = `${input.slug}-${Date.now()}`;
    }
  } else if (input.title) {
    // Generate new slug from title if title changed but slug not provided
    const newSlug = generateSlug(input.title);
    const slugExists = blogs.some((blog, i) => blog.slug === newSlug && i !== index);
    if (slugExists) {
      input.slug = `${newSlug}-${Date.now()}`;
    } else {
      input.slug = newSlug;
    }
  }
  
  const updatedBlog = {
    ...blogs[index],
    ...input,
  };
  
  blogs[index] = updatedBlog;
  writeBlogPosts(blogs);
  
  return updatedBlog;
};

// Delete a blog post
export const deleteBlogPost = (id: string): boolean => {
  const blogs = getAllBlogPosts();
  const index = blogs.findIndex((blog) => blog.id === id);
  
  if (index === -1) return false;
  
  blogs.splice(index, 1);
  writeBlogPosts(blogs);
  
  return true;
};

// Get published blog posts (for public viewing)
export const getPublishedBlogPosts = (): BlogPost[] => {
  const blogs = getAllBlogPosts();
  return blogs
    .filter((blog) => blog.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

// Get blog post counts
export const getBlogStats = () => {
  const blogs = getAllBlogPosts();
  const published = blogs.filter((blog) => blog.published).length;
  const draft = blogs.filter((blog) => !blog.published).length;
  
  return {
    total: blogs.length,
    published,
    draft,
  };
}; 