import { createServerFn } from '@tanstack/react-start';
import { createFileRoute } from '@tanstack/react-router';

const getServerTime = createServerFn({ method: 'GET' }).handler(async ({ context }) => {
  if (!(context as any).user) {
    throw new Error('Unauthorized');
  }
  return {
    time: new Date().toISOString(),
    message: 'Message from protected server function!',
  };
});

export const Route = createFileRoute('/_authenticated/server-demo')({
  loader: async () => {
    return await getServerTime();
  },
  component: ServerDemoComponent,
});

function ServerDemoComponent() {
  const data = Route.useLoaderData();

  return (
    <div className="p-2 space-y-4">
      <h1 className="text-2xl font-bold">Server Function Demo</h1>
      <p>This data was fetched using a protected server function:</p>
      <div className="p-4 border rounded bg-gray-50 dark:bg-gray-800">
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </div>
  );
}
