import type { SignUpData } from '#/features/auth/sign-up-schema'
import type { UserRole } from '#/features/auth/roles'
import { auth } from '#/features/auth/server/auth'
import { getRequest } from '@tanstack/react-start/server'
import { db } from '#/db'
import { users } from '#/db/schema.ts'
import { eq } from 'drizzle-orm'

/**
 * `role` is `input: false` in the auth config, so it can never be set from the
 * client. Signing up for a given role goes through a server function that
 * assigns the role itself.
 */
export async function signUpWithRole(input: SignUpData, role: UserRole) {
  const { user } = await auth.api.signUpEmail({
    body: input,
    headers: getRequest().headers,
  })

  await db.update(users).set({ role }).where(eq(users.id, user.id))

  return { ...user, role }
}
