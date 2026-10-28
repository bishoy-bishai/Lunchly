import { Input } from '#/components/ui/input'
import { Label } from '#/components/ui/label'
import { FieldError } from '#/components/form/field-error'
import type { ComponentProps } from 'react'
import type { DeepKeys, ReactFormExtendedApi } from '@tanstack/react-form'

type AnyFormApi<TFormData> = ReactFormExtendedApi<
  TFormData,
  any,
  any,
  any,
  any,
  any,
  any,
  any,
  any,
  any,
  any,
  any
>

interface FormInputFieldProps<TFormData> {
  form: AnyFormApi<TFormData>
  name: DeepKeys<TFormData>
  label: string
  type?: ComponentProps<typeof Input>['type']
  autoComplete?: ComponentProps<typeof Input>['autoComplete']
}

export function FormInputField<TFormData>({
  form,
  name,
  label,
  type,
  autoComplete,
}: FormInputFieldProps<TFormData>) {
  return (
    <form.Field name={name}>
      {(field) => (
        <div className="space-y-2">
          <Label htmlFor={field.name}>{label}</Label>
          <Input
            id={field.name}
            name={field.name}
            type={type}
            autoComplete={autoComplete}
            value={field.state.value as string}
            onBlur={field.handleBlur}
            onChange={(event) =>
              field.handleChange(event.target.value as never)
            }
          />
          <FieldError messages={field.state.meta.errors} />
        </div>
      )}
    </form.Field>
  )
}
