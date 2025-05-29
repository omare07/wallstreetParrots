import { NextRequest, NextResponse } from 'next/server';
import { resetSettings } from '@/lib/server/settings-service';

// POST /api/settings/reset
export async function POST() {
  try {
    const defaultSettings = resetSettings();
    return NextResponse.json(defaultSettings);
  } catch (error) {
    console.error('Error resetting settings:', error);
    return NextResponse.json(
      { error: 'Failed to reset settings' },
      { status: 500 }
    );
  }
} 