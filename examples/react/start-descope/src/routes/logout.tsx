import { useEffect } from 'react';

import { createFileRoute, useNavigate, useRouter } from '@tanstack/react-router';
import { useDescope } from '@descope/react-sdk';

export const Route = createFileRoute('/logout')({
  component: LogoutComponent,
});

function LogoutComponent() {
  const { logout } = useDescope();
  const navigate = useNavigate();
  const router = useRouter();

  useEffect(() => {
    const doLogout = async () => {
      await logout();
      await router.invalidate();
      navigate({ to: '/' });
    };
    doLogout();
  }, [logout, navigate, router]);

  return <div className="p-2">Logging out...</div>;
}
