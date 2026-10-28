import { createServerFn } from '@tanstack/react-start'
import { APIError } from 'better-auth/api'
import { SignUpSchema } from '#/features/auth/sign-up-schema'
import { signUpWithRole } from '#/features/auth/server/sign-up-with-role'
import { UserRoleEnum } from '#/features/auth/roles'

export const signUpKitchen = createServerFn({ method: 'POST' })
  .validator(SignUpSchema)
  .handler(async ({ data }) => {
    try {
      return await signUpWithRole(data, UserRoleEnum.enum.kitchen)
    } catch (error) {
      if (error instanceof APIError) {
        throw new Error(error.body?.message ?? 'Could not create the account')
      }
      throw error
    }
  })
