import { NextRequest, NextResponse } from 'next/server';
import { getBlogStats } from '@/lib/server/blog-service';

// GET /api/blogs/stats
export async function GET(request: NextRequest) {
  try {
    const stats = getBlogStats();
    return NextResponse.json(stats);
  } catch (error) {
    console.error('Error fetching blog stats:', error);
    return NextResponse.json(
      { error: 'Failed to fetch blog stats' },
      { status: 500 }
    );
  }
} 