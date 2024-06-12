import { authMiddleware } from "@clerk/nextjs/server";

// Define middleware with public and ignored routes
export default authMiddleware({
  publicRoutes: [
    '/',
    '/events/:id',
    '/api/webhook/clerk',
    '/api/webhook/stripe',
    '/api/uploadthing'
  ],
  ignoredRoutes: [
    '/api/webhook/clerk',
    '/api/webhook/stripe',
    '/api/uploadthing'
  ],
});

// Configuration for middleware matching
export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/api/:path*'],
};
