import { createFileRoute, useRouter } from '@tanstack/react-router'
import { useState } from 'react'
import { SignUpSchema } from '#/features/auth/sign-up-schema'
import { signUpParent } from '#/features/auth/server/sign-up'
import { SignUpForm } from '#/features/auth/form/sign-up-form'

export const Route = createFileRoute('/parent/_auth/signup')({
  component: ParentSignUp,
})

function ParentSignUp() {
  const router = useRouter()
  const [error, setError] = useState<string | undefined>(undefined)

  return (
    <SignUpForm
      signupSchema={SignUpSchema}
      action={async (data) => {
        setError(undefined)
        try {
          await signUpParent({ data })
          await router.invalidate()
          await router.navigate({ to: '/parent' })
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
      loginLink="/parent/login"
      onError={(err) => {
        setError(
          err instanceof Error ? err.message : 'Could not create the account',
        )
      }}
    />
  )
}
