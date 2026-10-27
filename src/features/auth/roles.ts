import { z } from 'zod'

export const USER_ROLES = ['parent', 'kitchen', 'guest'] as const

export const UserRoleEnum = z.enum(USER_ROLES)

export type UserRole = z.infer<typeof UserRoleEnum>

export const DEFAULT_USER_ROLE: UserRole = 'guest'
