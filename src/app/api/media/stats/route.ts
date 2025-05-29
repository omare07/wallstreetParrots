import { NextRequest, NextResponse } from 'next/server';
import { getMediaStats } from '@/lib/server/media-service';

// GET /api/media/stats
export async function GET(request: NextRequest) {
  try {
    const stats = getMediaStats();
    return NextResponse.json(stats);
  } catch (error) {
    console.error('Error fetching media stats:', error);
    return NextResponse.json(
      { error: 'Failed to fetch media stats' },
      { status: 500 }
    );
  }
} 