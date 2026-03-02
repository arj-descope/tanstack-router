import { createFileRoute, Link } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: Home,
});

function Home() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center text-center px-4 py-16 sm:py-24 lg:py-32">
      <div className="ring-1 ring-slate-200 dark:ring-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm rounded-full px-4 py-1.5 mb-8 text-sm font-medium text-slate-600 dark:text-slate-300 shadow-sm">
        ✨ Powered by TanStack Router & Descope
      </div>
      <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6">
        Frictionless Auth <br className="hidden sm:block" />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-500">Made Simple</span>
      </h1>
      <p className="max-w-2xl text-lg sm:text-xl text-slate-600 dark:text-slate-400 mb-10">
        Experience a premium, server-side rendered authentication flow built on top of TanStack Start and the Descope
        React SDK.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          to="/profile"
          className="inline-flex items-center justify-center rounded-lg text-base font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 disabled:opacity-50 ring-offset-white bg-teal-600 text-white hover:bg-teal-700 h-12 px-8 py-3 shadow-md hover:shadow-lg"
        >
          View Protected Profile
        </Link>
        <Link
          to="/login"
          className="inline-flex items-center justify-center rounded-lg text-base font-medium transition-all focus-visible:outline-none focus:ring-2 focus:ring-slate-400 focus-visible:ring-offset-2 disabled:opacity-50 ring-offset-white border border-slate-200 hover:bg-slate-50 dark:border-slate-800 dark:hover:bg-slate-800/50 dark:text-slate-50 bg-white dark:bg-slate-900 h-12 px-8 py-3 shadow-sm hover:shadow-md"
        >
          Try Auth Flows
        </Link>
      </div>
    </div>
  );
}
