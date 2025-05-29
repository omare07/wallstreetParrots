import { NextRequest, NextResponse } from 'next/server';
import { getAllMediaItems, saveMediaFile } from '@/lib/server/media-service';

// GET /api/media - Get all media items
export async function GET(_request: NextRequest) {
  try {
    const media = getAllMediaItems();
    return NextResponse.json(media);
  } catch (error) {
    console.error('Error fetching media items:', error);
    return NextResponse.json(
      { error: 'Failed to fetch media items' },
      { status: 500 }
    );
  }
}

// POST /api/media - Upload a new media file
export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;
    const altText = formData.get('altText') as string || '';
    
    if (!file) {
      return NextResponse.json(
        { error: 'No file provided' },
        { status: 400 }
      );
    }
    
    // Get file details
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    
    // Save the file
    const media = await saveMediaFile(
      buffer,
      file.name,
      file.type,
      altText
    );
    
    if (!media) {
      return NextResponse.json(
        { error: 'Failed to save media file' },
        { status: 500 }
      );
    }
    
    return NextResponse.json(media, { status: 201 });
  } catch (error) {
    console.error('Error uploading media:', error);
    return NextResponse.json(
      { error: 'Failed to upload media file' },
      { status: 500 }
    );
  }
} 