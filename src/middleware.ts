import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';
import { languages } from './languages';

export default createMiddleware(routing);

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', `/(${languages.join('|')})/:path*`]
};