# TanStack Start Descope Auth Example

This example demonstrates how to use Descope authentication with TanStack Start.

## Key Features

- **Server-Side Authentication**: Uses `@descope/node-sdk` in a global `requestMiddleware` to validate sessions on every request.
- **Route-Level Protection**: Uses TanStack Router's `beforeLoad` hook for smooth, server-guarded redirects.
- **Protected Server Functions**: Demonstrates how to secure `createServerFn` using the shared request context.
- **Client-Side Auth Hooks**: Seamlessly integrates with `@descope/react-sdk` components and hooks.

## Prerequisites

- A Descope Project ID. You can get one by signing up at [descope.com](https://www.descope.com/).
- Node.js version as specified in `.nvmrc` at the root of the repo (e.g., v24.8.0).

## Setup

1.  Set Node version from root directory:

    ```bash
    nvm use
    ```

2.  Navigate to this directory:

    ```bash
    cd examples/react/start-descope
    ```

3.  Install dependencies:

    ```bash
    pnpm install
    ```

4.  Set up environment variables:
    ```bash
    cp .env.example .env
    ```
    Open `.env` and set `VITE_DESCOPE_PROJECT_ID` to your Descope Project ID.

## Running

Start the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.
