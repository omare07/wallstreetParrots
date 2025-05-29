import { NextRequest, NextResponse } from 'next/server';
import { 
  getAllBlogPosts, 
  getPublishedBlogPosts, 
  createBlogPost 
} from '@/lib/server/blog-service';
import { CreateBlogPostInput } from '@/lib/models/blog';

// GET /api/blogs
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const onlyPublished = searchParams.get('published') === 'true';
  
  try {
    const blogs = onlyPublished ? getPublishedBlogPosts() : getAllBlogPosts();
    return NextResponse.json(blogs);
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return NextResponse.json(
      { error: 'Failed to fetch blogs' },
      { status: 500 }
    );
  }
}

// POST /api/blogs
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate required fields
    const requiredFields = [
      'title', 'excerpt', 'content', 'author', 'authorRole', 
      'imageSrc', 'category', 'readTime'
    ];
    
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }
    
    // Set default for published if not provided
    if (body.published === undefined) {
      body.published = false;
    }
    
    const blogInput: CreateBlogPostInput = body;
    const newBlog = createBlogPost(blogInput);
    
    return NextResponse.json(newBlog, { status: 201 });
  } catch (error) {
    console.error('Error creating blog:', error);
    return NextResponse.json(
      { error: 'Failed to create blog post' },
      { status: 500 }
    );
  }
} 