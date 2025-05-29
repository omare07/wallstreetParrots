import { NextResponse, type NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  // Paths that require authentication
  const adminPaths = [
    '/admin',
    '/admin/dashboard',
    '/admin/blogs',
    '/admin/media',
    '/admin/settings',
  ];
  
  // Check if the request is for an admin path
  const isAdminPath = adminPaths.some(path => 
    request.nextUrl.pathname.startsWith(path)
  );
  
  if (isAdminPath) {
    // Get the user ID from cookies
    const userId = request.cookies.get('userId')?.value;
    
    // If no user ID, redirect to login
    if (!userId) {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
    
    // In a real app, you would verify the token or session here
    // For this basic auth, we just check if the cookie exists
  }
  
  return NextResponse.next();
}

// Configure the paths to run the middleware on
export const config = {
  matcher: [
    '/admin/:path*',  // Match all paths under /admin
  ],
}; 