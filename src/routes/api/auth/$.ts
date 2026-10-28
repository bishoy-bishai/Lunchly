import { createFileRoute } from '@tanstack/react-router'
import '@tanstack/react-start'

import { auth } from '#/features/auth/server/auth'

const AUTH_BASE_PATH = '/api/auth'

/**
 * Signing up is only allowed through the `signUpKitchen` / `signUpParent`
 * server functions, which call `auth.api.signUpEmail` directly and assign the
 * role themselves. No sign-up path is reachable over HTTP, including any added
 * later by a plugin.
 */
function handle(request: Request) {
  const { pathname } = new URL(request.url)

  if (pathname.startsWith(`${AUTH_BASE_PATH}/sign-up`)) {
    return new Response('Not Found', { status: 404 })
  }

  return auth.handler(request)
}

export const Route = createFileRoute('/api/auth/$')({
  server: {
    handlers: {
      GET: ({ request }) => handle(request),
      POST: ({ request }) => handle(request),
    },
  },
})
