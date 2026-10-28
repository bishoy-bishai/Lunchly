import { useState } from 'react'
import { createFileRoute, useRouter } from '@tanstack/react-router'
import type { SignUpData } from '#/features/auth/sign-up-schema'
import { signUpKitchen } from '#/features/auth/server/sign-up'
import { SignUpForm } from '#/features/auth/form/sign-up-form'

export const Route = createFileRoute('/kitchen/_auth/signup')({
  component: KitchenSignUp,
})

function KitchenSignUp() {
  const router = useRouter()
  const [error, setError] = useState<string | undefined>(undefined)

  const handleKitchenSignup = async (data: SignUpData) => {
    setError(undefined)
    try {
      await signUpKitchen({ data })
      await router.invalidate()
      await router.navigate({ to: '/kitchen' })
    } catch (cause) {
      setError(
        cause instanceof Error ? cause.message : 'Could not create the account',
      )
    }
  }
  return (
    <SignUpForm
      signUp={handleKitchenSignup}
      errorMessage={error}
      loginTo="/kitchen/login"
      title="Create a kitchen account"
      description="For kitchen staff to manage lunch orders."
    />
  )
}
