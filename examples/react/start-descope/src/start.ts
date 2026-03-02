import { createStart, createMiddleware } from '@tanstack/react-start';
import { descopeClient } from './lib/descope';

const descopeMiddleware = createMiddleware().server(async ({ next, request }) => {
  const cookies = request.headers.get('cookie');
  const sessionToken = cookies
    ?.split(';')
    .find((c) => c.trim().startsWith('DS='))
    ?.split('=')[1];

  let user = null;
  if (sessionToken) {
    try {
      const validSession = await descopeClient.validateSession(sessionToken);

      user = validSession.token;
    } catch (e) {
      console.error('Error validating session', e);
      // Session invalid or expired
    }
  }

  return next({
    context: {
      user,
    },
  });
});

/**
 * Configure TanStack Start with Descope middleware.
 * The middleware runs on every server request and provides auth context.
 */
export const startInstance = createStart(() => {
  return {
    requestMiddleware: [descopeMiddleware],
  };
});
