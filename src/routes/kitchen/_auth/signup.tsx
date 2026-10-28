import { useState } from 'react'
import { Link, createFileRoute, useRouter } from '@tanstack/react-router'

import { SignUpSchema } from '#/features/auth/sign-up-schema'
import { signUpKitchen } from '#/features/auth/server/sign-up'
import { useAppForm } from '#/components/form/app-form'

export const Route = createFileRoute('/kitchen/_auth/signup')({
  component: KitchenSignUp,
})

function KitchenSignUp() {
  const router = useRouter()
  const [error, setError] = useState<string | null>(null)

  const form = useAppForm({
    defaultValues: { name: '', email: '', password: '' },
    validators: { onSubmit: SignUpSchema },
    onSubmit: async ({ value }) => {
      setError(null)
      try {
        await signUpKitchen({ data: value })
        await router.invalidate()
        await router.navigate({ to: '/kitchen' })
      } catch (cause) {
        setError(
          cause instanceof Error
            ? cause.message
            : 'Could not create the account',
        )
      }
    },
  })

  return (
    <form
      className="space-y-5"
      onSubmit={(event) => {
        event.preventDefault()
        void form.handleSubmit()
      }}
    >
      <div className="space-y-1">
        <h1 className="display-title text-2xl">Create a kitchen account</h1>
        <p className="text-sm text-muted-foreground">
          For staff who prepare and dispatch the day&apos;s orders.
        </p>
      </div>

      <form.AppField name="name">
        {(field) => <field.FormInputField label="Name" autoComplete="name" />}
      </form.AppField>

      <form.AppField name="email">
        {(field) => (
          <field.FormInputField
            label="Email"
            type="email"
            autoComplete="email"
          />
        )}
      </form.AppField>

      <form.AppField name="password">
        {(field) => (
          <field.FormInputField
            label="Password"
            type="password"
            autoComplete="new-password"
          />
        )}
      </form.AppField>

      {error ? <p className="text-sm text-destructive">{error}</p> : null}

      <form.AppForm>
        <form.SubmitButton
          label="Create account"
          pendingLabel="Creating account…"
        />
      </form.AppForm>

      <p className="text-sm text-muted-foreground">
        Already have an account?{' '}
        <Link to="/kitchen/login" className="underline underline-offset-4">
          Log in
        </Link>
      </p>
    </form>
  )
}
