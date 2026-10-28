import { useAppForm } from '#/components/form/app-form'
import { Link } from '@tanstack/react-router'
import { SignUpSchema } from '#/features/auth/sign-up-schema'
import type { SignUpData } from '#/features/auth/sign-up-schema'

interface SignUpFormValues {
  title: string
  description: string
  signUp: (data: SignUpData) => Promise<void>
  loginTo: string
  errorMessage?: string
}
export function SignUpForm({
  title,
  description,
  signUp,
  loginTo,
  errorMessage,
}: SignUpFormValues) {
  const form = useAppForm({
    defaultValues: { name: '', email: '', password: '' },
    validators: { onSubmit: SignUpSchema },
    onSubmit: async ({ value }) => {
      try {
        await signUp(value)
      } catch (cause) {
        console.error(cause)
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
        <h1 className="display-title text-2xl">{title}</h1>
        <p className="text-sm text-muted-foreground">{description}</p>
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

      {errorMessage ? (
        <p className="text-sm text-destructive">{errorMessage}</p>
      ) : null}

      <form.AppForm>
        <form.SubmitButton
          label="Create account"
          pendingLabel="Creating account…"
        />
      </form.AppForm>

      <p className="text-sm text-muted-foreground">
        Already have an account?{' '}
        <Link to={loginTo} className="underline underline-offset-4">
          Log in
        </Link>
      </p>
    </form>
  )
}
