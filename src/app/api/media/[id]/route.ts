import { NextRequest, NextResponse } from 'next/server';
import { 
  getMediaItemById, 
  updateMediaItem, 
  deleteMediaItem 
} from '@/lib/server/media-service';

interface Params {
  params: {
    id: string;
  };
}

// GET /api/media/[id]
export async function GET(request: NextRequest, { params }: Params) {
  try {
    const media = getMediaItemById(params.id);
    
    if (!media) {
      return NextResponse.json(
        { error: 'Media item not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(media);
  } catch (error) {
    console.error('Error fetching media item:', error);
    return NextResponse.json(
      { error: 'Failed to fetch media item' },
      { status: 500 }
    );
  }
}

// PATCH /api/media/[id]
export async function PATCH(request: NextRequest, { params }: Params) {
  try {
    const body = await request.json();
    
    const updatedMedia = updateMediaItem(params.id, {
      altText: body.altText,
    });
    
    if (!updatedMedia) {
      return NextResponse.json(
        { error: 'Media item not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(updatedMedia);
  } catch (error) {
    console.error('Error updating media item:', error);
    return NextResponse.json(
      { error: 'Failed to update media item' },
      { status: 500 }
    );
  }
}

// DELETE /api/media/[id]
export async function DELETE(request: NextRequest, { params }: Params) {
  try {
    const success = deleteMediaItem(params.id);
    
    if (!success) {
      return NextResponse.json(
        { error: 'Media item not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(
      { message: 'Media item deleted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error deleting media item:', error);
    return NextResponse.json(
      { error: 'Failed to delete media item' },
      { status: 500 }
    );
  }
} 