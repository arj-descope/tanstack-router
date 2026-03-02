import * as React from 'react';

import { HeadContent, Outlet, Scripts, createRootRouteWithContext } from '@tanstack/react-router';
import { AuthProvider } from '@descope/react-sdk';
import { createServerFn } from '@tanstack/react-start';

import { Navbar, DefaultCatchBoundary, NotFound } from '../components';
import appCss from '../styles/app.css?url';

const fetchUser = createServerFn({ method: 'GET' }).handler(async ({ context }) => {
  return {
    user: (context as any).user || null,
  };
});

interface RouterContext {
  user: any;
}

export const Route = createRootRouteWithContext<RouterContext>()({
  beforeLoad: async () => {
    const { user } = await fetchUser();
    return { user };
  },
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Descope Auth Example' },
    ],
    links: [{ rel: 'stylesheet', href: appCss }],
  }),
  errorComponent: (props) => (
    <RootDocument>
      <div className="flex-1 flex flex-col items-center justify-center p-8">
        <DefaultCatchBoundary {...props} />
      </div>
    </RootDocument>
  ),
  notFoundComponent: () => <NotFound />,
  component: RootComponent,
});

function RootComponent() {
  const projectId = import.meta.env.VITE_DESCOPE_PROJECT_ID;
  return (
    <AuthProvider projectId={projectId} sessionTokenViaCookie>
      <RootDocument>
        <main className="flex-1 w-full max-w-7xl mx-auto flex flex-col">
          <Outlet />
        </main>
      </RootDocument>
    </AuthProvider>
  );
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="antialiased">
      <head>
        <HeadContent />
      </head>
      <body className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 transition-colors duration-300">
        <Navbar />
        {children}
        <Scripts />
      </body>
    </html>
  );
}
