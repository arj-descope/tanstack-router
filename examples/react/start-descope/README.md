# TanStack Start + Descope

This example demonstrates how to use Descope Authentication with TanStack Router! 

- [TanStack Router Docs](https://tanstack.com/router)
- [Descope Documentation](https://docs.descope.com/)

## Key Features

- **Route-Level Protection**: Uses TanStack Router's `beforeLoad` hook for smooth, server-guarded redirects.
- **Flow-picker UI**: A UI to try out different Descope flows (Email OTP, TOTP, Magic Link, etc.).
- **Client-Side Auth Hooks**: Seamlessly integrates with `@descope/react-sdk` components and hooks.
- **Server-Side Authentication**: Uses `@descope/node-sdk` in a global `requestMiddleware` to validate sessions on every request.
- **Protected Server Functions**: Demonstrates how to secure `createServerFn` using the shared request context.


## Start a new project based on this example

To start a new project based on this example, run:

```sh
npx gitpick TanStack/router/tree/main/examples/react/start-descope start-descope
```


## Prerequisites

- A Descope Project ID. You can get one by signing up at [descope.com](https://www.descope.com/).

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

## About This Example
This example demonstrates:

- Descope auth integration
- Descope Node SDK usage in middleware
- Flow Picker to view different flows
- Protected routes
- User session management