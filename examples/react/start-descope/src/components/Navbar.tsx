import { Link } from '@tanstack/react-router';
import { useSession, useUser } from '@descope/react-sdk';

export function Navbar() {
  const { isAuthenticated } = useSession();
  const { user } = useUser();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/60 dark:border-slate-800/60 bg-white/80 dark:bg-slate-950/80 backdrop-blur-[12px] shadow-sm supports-[backdrop-filter]:bg-white/60">
      <div className="flex h-16 max-w-7xl mx-auto items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex gap-6 md:gap-8 items-center">
          <Link
            to="/"
            className="flex items-center gap-2 font-bold tracking-tight text-xl text-teal-600 dark:text-teal-400"
          >
            Descope + Tanstack Router
          </Link>
          <nav className="hidden md:flex gap-6 text-sm font-medium text-slate-600 dark:text-slate-300">
            <Link
              to="/"
              className="py-1 relative hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
              activeProps={{
                className:
                  'text-teal-600 dark:text-teal-400 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-teal-600 dark:after:bg-teal-400',
              }}
              activeOptions={{ exact: true }}
            >
              Home
            </Link>
            <Link
              to="/profile"
              className="py-1 relative hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
              activeProps={{
                className:
                  'text-teal-600 dark:text-teal-400 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-teal-600 dark:after:bg-teal-400',
              }}
            >
              Profile
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          {isAuthenticated && user ? (
            <>
              <div className="hidden sm:block text-sm font-medium text-slate-500 dark:text-slate-400">
                Hi, <span className="font-semibold text-slate-900 dark:text-slate-100">{user.name || user.email}</span>
              </div>
              <Link
                to="/logout"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-[ring-2] focus:[ring-slate-400] focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-white border border-slate-200 hover:bg-slate-100 hover:text-slate-900 dark:border-slate-800 dark:hover:bg-slate-800 dark:hover:text-slate-50 dark:text-slate-50 bg-transparent h-9 px-4 py-2"
              >
                Log out
              </Link>
            </>
          ) : (
            <Link
              to="/login"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-[ring-2] focus-visible:ring-slate-400 focus-visible:ring-offset-2 disabled:opacity-50 ring-offset-white bg-teal-600 text-white hover:bg-teal-700 h-9 px-4 py-2 shadow-sm"
            >
              Sign In
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
