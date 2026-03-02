import { createRouter } from '@tanstack/react-router';

import { routeTree } from './routeTree.gen';
import { DefaultCatchBoundary, NotFound } from './components';

export function getRouter() {
  const router = createRouter({
    routeTree,
    defaultPreload: 'intent',
    defaultErrorComponent: DefaultCatchBoundary,
    defaultNotFoundComponent: () => <NotFound />,
    scrollRestoration: true,
    context: {
      user: undefined!,
    },
  });

  return router;
}
