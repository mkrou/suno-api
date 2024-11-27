import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const authHeader = request.headers.get('authorization');
  const expectedPassword = process.env.AUTH_PASSWORD;

  if (authHeader !== `Bearer ${expectedPassword}`) {
    return new NextResponse('Unauthorized', { status: 401 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/api/:path*', // Применять middleware только к API маршрутам
};