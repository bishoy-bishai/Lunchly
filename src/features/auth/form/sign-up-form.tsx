import { useAppForm } from '#/components/form/app-form'
import type { SignUpSchema } from '../sign-up-schema'
import { Link } from 'lucide-react'

interface SignUpFormValues {
  signupSchema: typeof SignUpSchema
  action: (data: any) => Promise<void>
  setError: (error: string | undefined) => void
  errorMessage?: string
  loginLink: string
  onError: (error: unknown) => void
}
export function SignUpForm({
  signupSchema,
  action,
  setError,
  errorMessage,
  loginLink,
  onError,
}: SignUpFormValues) {
  const form = useAppForm({
    defaultValues: { name: '', email: '', password: '' },
    validators: { onSubmit: signupSchema },
    onSubmit: async ({ value }) => {
      setError(undefined)
      try {
        await action(value)
      } catch (cause) {
        onError(cause)
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
        <Link to={loginLink} className="underline underline-offset-4">
          Log in
        </Link>
      </p>
    </form>
  )
}
