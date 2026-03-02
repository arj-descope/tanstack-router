import { createFileRoute } from '@tanstack/react-router';
import { UserProfile, useUser } from '@descope/react-sdk';

export const Route = createFileRoute('/_authenticated/profile')({
  component: ProfileComponent,
});

function ProfileComponent() {
  const { user } = useUser();

  return (
    <div className="flex-1 w-full p-4 sm:p-6 lg:p-8">
      <div className="mb-8 max-w-4xl mx-auto">
        <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold text-teal-700 bg-teal-100 dark:bg-teal-900/30 dark:text-teal-400 mb-4 ring-1 ring-inset ring-teal-600/20">
          🎉 Protected Route
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-2">
          Welcome back, {user?.name || 'User'}!
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-lg">
          You have successfully authenticated. Here is your secure profile data.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm ring-1 ring-slate-200 dark:ring-slate-800 overflow-hidden">
          <div className="px-6 py-5 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/20">
            <h3 className="text-base font-semibold leading-6 text-slate-900 dark:text-white">Profile Settings</h3>
          </div>
          <div className="p-6 [&>descope-wc]:w-full">
            <UserProfile
              widgetId="user-profile-widget"
              onLogout={() => {
                window.location.href = '/login';
              }}
            />
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm ring-1 ring-slate-200 dark:ring-slate-800 overflow-hidden flex flex-col">
          <div className="px-6 py-5 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/20">
            <h3 className="text-base font-semibold leading-6 text-slate-900 dark:text-white">Raw Context Data</h3>
          </div>
          <div className="p-6 bg-slate-50 dark:bg-slate-950/50 flex-1">
            <pre className="text-xs text-slate-700 dark:text-slate-300 font-mono leading-relaxed">
              {JSON.stringify(user, null, 2)}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
