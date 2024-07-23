import { NextResponse } from 'next/server';

export function middleware(req) {
  const hostname = req.nextUrl.hostname;
  const url = req.nextUrl.clone();
  const pathname = url.pathname;

  // Redirect login attempts from piguardian.org to dashboard.piguardian.org
  if ((hostname === 'piguardian.org' || hostname === 'www.piguardian.org') && pathname === '/login') {
    url.hostname = 'dashboard.piguardian.org';
    return NextResponse.redirect(url);
  }

  // Other existing middleware logic...
  const pathSegments = pathname.split('/').filter(segment => segment);
  const uuid = pathSegments[0];
  const isValidUUID = (uuid) => {
    const uuidPattern = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;
    return uuidPattern.test(uuid);
  };

  if (hostname === 'dashboard.piguardian.org') {
    if (pathname === '/uuid') {
      return NextResponse.next();
    }

    if (!isValidUUID(uuid)) {
      url.pathname = '/uuid';
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}
