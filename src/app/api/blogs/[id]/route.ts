import { NextRequest, NextResponse } from 'next/server';
import { 
  getBlogPostById, 
  updateBlogPost, 
  deleteBlogPost 
} from '@/lib/server/blog-service';
import { UpdateBlogPostInput } from '@/lib/models/blog';

interface Params {
  params: {
    id: string;
  };
}

// GET /api/blogs/[id]
export async function GET(request: NextRequest, { params }: Params) {
  try {
    const blog = getBlogPostById(params.id);
    
    if (!blog) {
      return NextResponse.json(
        { error: 'Blog post not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(blog);
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return NextResponse.json(
      { error: 'Failed to fetch blog post' },
      { status: 500 }
    );
  }
}

// PATCH /api/blogs/[id]
export async function PATCH(request: NextRequest, { params }: Params) {
  try {
    const body = await request.json();
    const blogInput: UpdateBlogPostInput = body;
    
    const updatedBlog = updateBlogPost(params.id, blogInput);
    
    if (!updatedBlog) {
      return NextResponse.json(
        { error: 'Blog post not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(updatedBlog);
  } catch (error) {
    console.error('Error updating blog post:', error);
    return NextResponse.json(
      { error: 'Failed to update blog post' },
      { status: 500 }
    );
  }
}

// DELETE /api/blogs/[id]
export async function DELETE(request: NextRequest, { params }: Params) {
  try {
    const success = deleteBlogPost(params.id);
    
    if (!success) {
      return NextResponse.json(
        { error: 'Blog post not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(
      { message: 'Blog post deleted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error deleting blog post:', error);
    return NextResponse.json(
      { error: 'Failed to delete blog post' },
      { status: 500 }
    );
  }
} 