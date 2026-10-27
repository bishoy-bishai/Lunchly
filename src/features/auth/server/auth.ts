import { betterAuth } from 'better-auth'
import { drizzleAdapter } from 'better-auth/adapters/drizzle'
import { tanstackStartCookies } from 'better-auth/tanstack-start'

import { DEFAULT_USER_ROLE, UserRoleEnum } from '../roles'

import { db } from '#/db'
import * as schema from '#/db/schema.ts'
import { env } from '#/env'

export const auth = betterAuth({
  baseURL: env.BETTER_AUTH_URL,
  secret: env.BETTER_AUTH_SECRET,
  database: drizzleAdapter(db, {
    provider: 'sqlite',
    schema,
  }),
  emailAndPassword: { enabled: true },
  user: {
    modelName: 'users',
    additionalFields: {
      role: {
        type: 'string',
        required: true,
        defaultValue: DEFAULT_USER_ROLE,
        validator: {
          input: UserRoleEnum,
        },
      },
    },
  },
  session: { modelName: 'sessions' },
  account: { modelName: 'accounts' },
  verification: { modelName: 'verifications' },
  plugins: [tanstackStartCookies()],
})
