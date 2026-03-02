import { useEffect, useState } from 'react';

import { createFileRoute, redirect, useNavigate, useRouter } from '@tanstack/react-router';
import { Descope, useSession } from '@descope/react-sdk';

export const Route = createFileRoute('/login')({
  beforeLoad: ({ context }) => {
    if (context.user) {
      throw redirect({ to: '/' });
    }
  },
  component: LoginComponent,
});

function LoginComponent() {
  const { isAuthenticated } = useSession();
  const navigate = useNavigate();
  const router = useRouter();

  const [flowId, setFlowId] = useState('sign-up-or-in');

  const authMethods = [
    { id: 'sign-up-or-in', name: 'Sign Up or In' },
    { id: 'sign-in', name: 'Sign In' },
    { id: 'sign-up', name: 'Sign Up' },
    { id: 'sign-up-or-in-n-otp-whats-app', name: 'nOTP (WhatsApp)' },
    { id: 'sign-up-or-in-otp', name: 'OTP (SMS)' },
    { id: 'sign-up-or-in-totp', name: 'TOTP (Authenticator)' },
    { id: 'magic-link-with-email-scanner-protection', name: 'Magic Link' },
    { id: 'sign-in-social', name: 'Social Login' },
    { id: 'adaptive-mfa-with-trusted-device', name: 'Adaptive MFA' },
    {
      id: 'sign-up-or-in-enchanted-link-or-sso',
      name: 'Enchanted Link or SSO',
    },
    { id: 'sign-up-or-in-magic-link-or-sso', name: 'Magic Link or SSO' },
    { id: 'sign-up-or-in-otp-or-social', name: 'OTP SOCIAL' },
  ];

  const handleFlowChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFlowId(event.target.value);
  };

  useEffect(() => {
    if (isAuthenticated) {
      router.invalidate().finally(() => {
        navigate({ to: '/profile' });
      });
    }
  }, [isAuthenticated, navigate, router]);

  return (
    <div className="flex-1 flex flex-col justify-center items-center p-4">
      <div className="w-full max-w-md bg-white dark:bg-slate-900 rounded-2xl shadow-xl ring-1 ring-slate-200 dark:ring-slate-800 p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Welcome Back</h1>
          <p className="text-slate-500 dark:text-slate-400">Sign in to your account with Descope</p>
        </div>
        <div className="mb-5">
          <label htmlFor="auth-method" className="block mb-2 font-medium">
            Choose an authentication method:
          </label>
          <select
            id="auth-method"
            onChange={handleFlowChange}
            value={flowId}
            className="px-3 py-2 text-base rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-neutral-800 min-w-52"
          >
            {authMethods.map((method) => (
              <option key={method.id} value={method.id}>
                {method.name}
              </option>
            ))}
          </select>
        </div>
        <div className="[&>descope-wc]:w-full">
          <Descope
            flowId={flowId}
            onSuccess={() => {
              console.log('Logged in!');
              router.invalidate().finally(() => {
                navigate({ to: '/profile' });
              });
            }}
            onError={(e) => console.log('Could not log in!', e)}
          />
        </div>
      </div>
    </div>
  );
}
