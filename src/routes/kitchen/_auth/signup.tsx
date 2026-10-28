import { useState } from 'react'
import { createFileRoute, useRouter } from '@tanstack/react-router'

import { SignUpSchema } from '#/features/auth/sign-up-schema'
import { signUpKitchen } from '#/features/auth/server/sign-up'
import { SignUpForm } from '#/features/auth/form/sign-up-form'

export const Route = createFileRoute('/kitchen/_auth/signup')({
  component: KitchenSignUp,
})

function KitchenSignUp() {
  const router = useRouter()
  const [error, setError] = useState<string | undefined>(undefined)

  return (
    <SignUpForm
      signupSchema={SignUpSchema}
      action={async (data) => {
        setError(undefined)
        try {
          await signUpKitchen({ data })
          await router.invalidate()
          await router.navigate({ to: '/kitchen' })
        } catch (cause) {
          setError(
            cause instanceof Error
              ? cause.message
              : 'Could not create the account',
          )
        }
      }}
      setError={setError}
      errorMessage={error}
      loginLink="/kitchen/login"
      onError={(err) => {
        setError(
          err instanceof Error ? err.message : 'Could not create the account',
        )
      }}
    />
  )
}
