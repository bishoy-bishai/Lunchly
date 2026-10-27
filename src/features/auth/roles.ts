import { z } from 'zod'

export const UserRoleEnum = z.enum([
  'parent',
  'kitchen_owner',
  'kitchen_staff',
  'admin',
  'guest',
])

export type UserRole = z.infer<typeof UserRoleEnum>
