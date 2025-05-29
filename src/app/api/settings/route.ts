import { NextRequest, NextResponse } from 'next/server';
import { getSettings, updateSettings } from '@/lib/server/settings-service';

// GET /api/settings
export async function GET(request: NextRequest) {
  try {
    const settings = getSettings();
    return NextResponse.json(settings);
  } catch (error) {
    console.error('Error fetching settings:', error);
    return NextResponse.json(
      { error: 'Failed to fetch settings' },
      { status: 500 }
    );
  }
}

// PATCH /api/settings
export async function PATCH(request: NextRequest) {
  try {
    const updates = await request.json();
    const updatedSettings = updateSettings(updates);
    return NextResponse.json(updatedSettings);
  } catch (error) {
    console.error('Error updating settings:', error);
    return NextResponse.json(
      { error: 'Failed to update settings' },
      { status: 500 }
    );
  }
} 