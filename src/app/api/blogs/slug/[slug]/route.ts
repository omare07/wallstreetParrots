import { NextRequest, NextResponse } from 'next/server';
import { getBlogPostBySlug } from '@/lib/server/blog-service';

interface Params {
  params: {
    slug: string;
  };
}

// GET /api/blogs/slug/[slug]
export async function GET(request: NextRequest, { params }: Params) {
  try {
    const blog = getBlogPostBySlug(params.slug);
    
    if (!blog) {
      return NextResponse.json(
        { error: 'Blog post not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(blog);
  } catch (error) {
    console.error('Error fetching blog post by slug:', error);
    return NextResponse.json(
      { error: 'Failed to fetch blog post' },
      { status: 500 }
    );
  }
} 