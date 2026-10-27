import { serve } from 'srvx'
import { staticMiddleware } from 'srvx/static'

import entry from './dist/server/server.js'

const port = Number(process.env.PORT ?? 3000)
const hostname = process.env.HOST ?? '0.0.0.0'

serve({
  port,
  hostname,
  // Client assets are content-hashed, so they can be cached indefinitely.
  middleware: [
    staticMiddleware({
      dir: new URL('./dist/client', import.meta.url).pathname,
      maxAge: 31536000,
      immutable: true,
    }),
  ],
  fetch: entry.fetch,
})
