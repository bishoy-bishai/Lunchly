import { createFileRoute, useRouter } from '@tanstack/react-router'
import { useState } from 'react'
import type { SignUpData } from '#/features/auth/sign-up-schema'
import { signUpParent } from '#/features/auth/server/sign-up'
import { SignUpForm } from '#/features/auth/form/sign-up-form'

export const Route = createFileRoute('/parent/_auth/signup')({
  component: ParentSignUp,
})

function ParentSignUp() {
  const router = useRouter()
  const [error, setError] = useState<string | undefined>(undefined)

  const handleParentSingup = async (data: SignUpData) => {
    setError(undefined)
    try {
      await signUpParent({ data })
      await router.invalidate()
      await router.navigate({ to: '/parent' })
    } catch (cause) {
      setError(
        cause instanceof Error ? cause.message : 'Could not create the account',
      )
    }
  }

  return (
    <SignUpForm
      title="Create a parent account"
      description="For parents who want to manage their children's lunch orders."
      errorMessage={error}
      signUp={handleParentSingup}
      loginTo="/parent/login"
    />
  )
}
